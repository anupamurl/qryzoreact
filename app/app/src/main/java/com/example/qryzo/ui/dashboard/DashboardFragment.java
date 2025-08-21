package com.example.qryzo.ui.dashboard;

import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;

import com.example.qryzo.databinding.FragmentDashboardBinding;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class DashboardFragment extends Fragment {

    private FragmentDashboardBinding binding;
    private QRListAdapter qrListAdapter;
    private List<String[]> qrDisplayList = new ArrayList<>();

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        binding = FragmentDashboardBinding.inflate(inflater, container, false);
        View root = binding.getRoot();
        ListView listView = binding.qrListView;
        TextView emptyView = binding.emptyView;
        loadQRList();
        qrListAdapter = new QRListAdapter(requireContext(), qrDisplayList);
        listView.setAdapter(qrListAdapter);
        listView.setEmptyView(emptyView);
        updateEmptyView();
        return root;
    }

    @Override
    public void onResume() {
        super.onResume();
        loadQRList();
        qrListAdapter.notifyDataSetChanged();
        updateEmptyView();
    }

    private void updateEmptyView() {
        if (qrDisplayList.isEmpty()) {
            binding.emptyView.setVisibility(View.VISIBLE);
        } else {
            binding.emptyView.setVisibility(View.GONE);
        }
    }

    private void loadQRList() {
        SharedPreferences prefs = requireContext().getSharedPreferences("scanned_qr_codes", Context.MODE_PRIVATE);
        Set<String> qrSet = prefs.getStringSet("qr_list", new HashSet<>());
        qrDisplayList.clear();
        if (qrSet != null) {
            List<String> sorted = new ArrayList<>(qrSet);
            Collections.sort(sorted, Collections.reverseOrder()); // newest first
            for (String entry : sorted) {
                String[] parts = entry.split("\\|", 2);
                if (parts.length == 2) {
                    qrDisplayList.add(new String[]{parts[0], parts[1]});
                } else {
                    qrDisplayList.add(new String[]{entry, ""});
                }
            }
        }
        // Debug: Show how many QR codes were loaded
        Toast.makeText(requireContext(), "Loaded QR codes: " + qrDisplayList.size(), Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}