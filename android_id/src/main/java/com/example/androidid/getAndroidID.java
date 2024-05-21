package com.example.androidid;

import android.content.ContentResolver;
import android.provider.Settings;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

public class getAndroidID extends UniModule {
    @UniJSMethod(uiThread = true)
    public void getID(UniJSCallback callback){
        ContentResolver contentResolver = mUniSDKInstance.getContext().getContentResolver();
        String ANDROID_ID = Settings.System.getString(contentResolver, Settings.System.ANDROID_ID);
        if (callback !=null){
            callback.invoke(ANDROID_ID);
        }
    }
}
