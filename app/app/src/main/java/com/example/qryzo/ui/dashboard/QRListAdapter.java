package com.example.qryzo.ui.dashboard;

import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;
import android.widget.Toast;

import com.example.qryzo.R;

import java.util.List;

public class QRListAdapter extends BaseAdapter {
    private final List<String[]> data;
    private final LayoutInflater inflater;

    public QRListAdapter(Context context, List<String[]> data) {
        this.data = data;
        this.inflater = LayoutInflater.from(context);
    }

    @Override
    public int getCount() {
        return data.size();
    }

    @Override
    public Object getItem(int position) {
        return data.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHolder holder;
        if (convertView == null) {
            convertView = inflater.inflate(R.layout.qr_list_item, parent, false);
            holder = new ViewHolder();
            holder.qrData = convertView.findViewById(R.id.tv_qr_data);
            holder.qrTime = convertView.findViewById(R.id.tv_qr_time);
            convertView.setTag(holder);
        } else {
            holder = (ViewHolder) convertView.getTag();
        }
        String[] item = data.get(position);
        holder.qrData.setText(item[0]);
        holder.qrTime.setText(item[1]);
        convertView.setOnLongClickListener(v -> {
            ClipboardManager clipboard = (ClipboardManager) inflater.getContext().getSystemService(Context.CLIPBOARD_SERVICE);
            ClipData clip = ClipData.newPlainText("QR Data", item[0]);
            clipboard.setPrimaryClip(clip);
            Toast.makeText(inflater.getContext(), "Copied to clipboard", Toast.LENGTH_SHORT).show();
            return true;
        });
        return convertView;
    }

    static class ViewHolder {
        TextView qrData;
        TextView qrTime;
    }
}
