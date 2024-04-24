package com.jbc.cashier.WebInterface;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.webkit.JavascriptInterface;

public class ScreenInterface {
    Context mContext;
    String baseurl;

    public ScreenInterface(Context context) {
        mContext = context;
    }

    @JavascriptInterface
    public void PrintData(byte[] data) {
    }

    @JavascriptInterface
    public void OpenDraw(byte[] data) {
    }
    @JavascriptInterface
    public void requestScreen(String url) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            //SYSTEM_ALERT_WINDOW权限申请
            if (!Settings.canDrawOverlays(mContext)) {
                baseurl = url;
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
                intent.setData(Uri.parse("package:" + mContext.getPackageName()));//不加会显示所有可能的app
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                mContext.startActivity(intent);
            } else {
                //TODO do something you need
//                showScreen(url);
            }
        }

    }

//    @JavascriptInterface
//    public void showScreen(String url) {
//
////        url = "http://192.168.100.100:3001";
//        ScreenInstance.getInstance().initPresentation(mUniSDKInstance.getContext(), url);
//    }



//    @JavascriptInterface
//    public void showOrderData(String orderJson, UniJSCallback callback) {
////        Toast.makeText(mUniSDKInstance.getContext(), orderJson, Toast.LENGTH_LONG);
////        Log.d("showOrderData", "showOrderData: ");
////        Log.d("showOrderData", orderJson);
//        ScreenInstance.getInstance().showOrderData(orderJson,callback);
//    }
//    @JavascriptInterface
//    public boolean hasScreen() {
//
//        return ScreenInstance.getInstance().hasScreen();
//    }
//
//    @JavascriptInterface
//    public void loadUrl(String url) {
//        ScreenInstance.getInstance().loadUrl(url);
//    }
//
//    @JavascriptInterface
//    public void showAdData(String orderJson, UniJSCallback callback) {
//        ScreenInstance.getInstance().showAdData(orderJson, callback);
//    }
//
//    @JavascriptInterface
//    public void changeLanguage(String lang,  UniJSCallback callback) {
//        ScreenInstance.getInstance().changeLanguage(lang, callback);
//    }
//
//    @JavascriptInterface
//    public void closeScreen() {
//        ScreenInstance.getInstance().cancelPresentation();
//    }
}
