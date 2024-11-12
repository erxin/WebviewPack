package com.jbc.table.WebInterface;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.provider.Settings;
import android.webkit.JavascriptInterface;

import com.jbc.table.BuildConfig;

public class androidIDInterface {
    Context mContext;
    public androidIDInterface(Context context){
        mContext = context;
    }

    @JavascriptInterface
    public String getAndroidID(){
        return Settings.System.getString(mContext.getContentResolver(), Settings.System.ANDROID_ID);
    }

    @JavascriptInterface
    public String getAppPackName(){//获取包名
        return BuildConfig.APPLICATION_ID;
    }

    @JavascriptInterface
    public String getAppVersionName(){
        return BuildConfig.VERSION_NAME;
    }//获取版本名

    @JavascriptInterface
    public String getAppVersionCode(){//获取版本code
        return String.valueOf(BuildConfig.VERSION_CODE);
    }

    @JavascriptInterface
    public String getDeviceBrand() { return Build.BRAND; }
    @JavascriptInterface
    public void openWeb(String url) {
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                // 在主线程中执行代码
                Intent intent = new Intent(Intent.ACTION_VIEW);
                intent.setData(Uri.parse(url));
                mContext.startActivity(intent);
            }
        });
    }
}
