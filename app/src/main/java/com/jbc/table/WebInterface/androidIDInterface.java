package com.jbc.table.WebInterface;

import android.content.Context;
import android.provider.Settings;
import android.webkit.JavascriptInterface;

public class androidIDInterface {
    Context mContext;
    public androidIDInterface(Context context){
        mContext = context;
    }

    @JavascriptInterface
    public String getAndroidID(){
        return Settings.System.getString(mContext.getContentResolver(), Settings.System.ANDROID_ID);
    }
}
