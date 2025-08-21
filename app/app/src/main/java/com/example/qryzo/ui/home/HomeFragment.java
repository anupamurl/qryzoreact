package com.example.qryzo.ui.home;

import android.Manifest;
import android.content.Context;
import android.content.pm.PackageManager;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Size;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.ImageAnalysis;
import androidx.camera.core.ImageProxy;
import androidx.camera.core.Preview;
import androidx.camera.lifecycle.ProcessCameraProvider;
import androidx.camera.view.PreviewView;
import androidx.core.content.ContextCompat;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.LifecycleOwner;

import com.example.qryzo.databinding.FragmentHomeBinding;
import com.google.common.util.concurrent.ListenableFuture;
import com.google.mlkit.vision.barcode.common.Barcode;
import com.google.mlkit.vision.barcode.BarcodeScanner;
import com.google.mlkit.vision.barcode.BarcodeScannerOptions;
import com.google.mlkit.vision.barcode.BarcodeScanning;
import com.google.mlkit.vision.common.InputImage;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@androidx.camera.core.ExperimentalGetImage
public class HomeFragment extends Fragment {

    private static final int REQUEST_CAMERA_PERMISSION = 200;
    private FragmentHomeBinding binding;
    private ExecutorService cameraExecutor;
    private boolean scanning = false;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        binding = FragmentHomeBinding.inflate(inflater, container, false);
        View root = binding.getRoot();
        cameraExecutor = Executors.newSingleThreadExecutor();
        Button btnOpenCamera = binding.btnOpenCamera;
        PreviewView previewView = binding.previewView;
        btnOpenCamera.setOnClickListener(v -> {
            if (ContextCompat.checkSelfPermission(requireContext(), Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                requestPermissions(new String[]{Manifest.permission.CAMERA}, REQUEST_CAMERA_PERMISSION);
            } else {
                btnOpenCamera.setVisibility(View.GONE);
                previewView.setVisibility(View.VISIBLE);
                startCamera();
            }
        });
        return root;
    }

    private void startCamera() {
        ListenableFuture<ProcessCameraProvider> cameraProviderFuture = ProcessCameraProvider.getInstance(requireContext());
        cameraProviderFuture.addListener(() -> {
            try {
                ProcessCameraProvider cameraProvider = cameraProviderFuture.get();
                PreviewView previewView = binding.previewView;
                Preview preview = new Preview.Builder().build();
                CameraSelector cameraSelector = CameraSelector.DEFAULT_BACK_CAMERA;
                ImageAnalysis imageAnalysis = new ImageAnalysis.Builder()
                        .setTargetResolution(new Size(1280, 720))
                        .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)
                        .build();
                imageAnalysis.setAnalyzer(cameraExecutor, this::analyzeImage);
                cameraProvider.unbindAll();
                cameraProvider.bindToLifecycle((LifecycleOwner) this, cameraSelector, preview, imageAnalysis);
                preview.setSurfaceProvider(previewView.getSurfaceProvider());
                scanning = true;
            } catch (ExecutionException | InterruptedException e) {
                e.printStackTrace();
            }
        }, ContextCompat.getMainExecutor(requireContext()));
    }

    private void saveScannedQR(String qrData) {
        SharedPreferences prefs = requireContext().getSharedPreferences("scanned_qr_codes", Context.MODE_PRIVATE);
        Set<String> qrSet = new HashSet<>(prefs.getStringSet("qr_list", new HashSet<>()));
        // Save as: data|timestamp
        String timestamp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.getDefault()).format(new Date());
        qrSet.add(qrData + "|" + timestamp);
        prefs.edit().putStringSet("qr_list", qrSet).apply();
    }

    @androidx.camera.core.ExperimentalGetImage
    private void analyzeImage(ImageProxy imageProxy) {
        if (!scanning) {
            imageProxy.close();
            return;
        }
        @androidx.camera.core.ExperimentalGetImage
        android.media.Image mediaImage = imageProxy.getImage();
        if (mediaImage != null) {
            InputImage image = InputImage.fromMediaImage(mediaImage, imageProxy.getImageInfo().getRotationDegrees());
            BarcodeScannerOptions options = new BarcodeScannerOptions.Builder()
                    .setBarcodeFormats(Barcode.FORMAT_QR_CODE)
                    .build();
            BarcodeScanner scanner = BarcodeScanning.getClient(options);
            scanner.process(image)
                    .addOnSuccessListener(barcodes -> {
                        for (Barcode barcode : barcodes) {
                            String rawValue = barcode.getRawValue();
                            if (rawValue != null) {
                                scanning = false;
                                requireActivity().runOnUiThread(() -> {
                                    binding.previewView.setVisibility(View.GONE);
                                    binding.btnOpenCamera.setVisibility(View.VISIBLE);
                                    showSaveDialog(rawValue);
                                });
                                break;
                            }
                        }
                        imageProxy.close();
                    })
                    .addOnFailureListener(e -> {
                        imageProxy.close();
                    });
        } else {
            imageProxy.close();
        }
    }

    private void showSaveDialog(String qrData) {
        new AlertDialog.Builder(requireContext())
            .setTitle("QR Code Scanned")
            .setMessage(qrData)
            .setPositiveButton("Save", (dialog, which) -> {
                saveScannedQR(qrData);
                Toast.makeText(requireContext(), "QR code saved!", Toast.LENGTH_SHORT).show();
            })
            .setNegativeButton("Cancel", null)
            .show();
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        if (cameraExecutor != null) cameraExecutor.shutdown();
        binding = null;
    }
}
