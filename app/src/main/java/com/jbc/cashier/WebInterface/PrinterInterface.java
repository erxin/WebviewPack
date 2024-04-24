package com.jbc.cashier.WebInterface;

import android.content.Context;
import android.webkit.JavascriptInterface;

public class PrinterInterface {
    Context mContext;

    public PrinterInterface(Context context) {
        mContext = context;
    }

    @JavascriptInterface
    public void PrintData(byte[] data) {
    }

    @JavascriptInterface
    public void OpenDraw(byte[] data) {
    }
}
