package com.hitosea.diffscreen;

import android.app.Application;
import android.content.Context;
import android.hardware.display.DisplayManager;
import android.util.Log;
import android.view.Display;


import io.dcloud.feature.uniapp.UniSDKEngine;
import io.dcloud.feature.uniapp.UniSDKInstance;
import io.dcloud.weex.AppHookProxy;

public class ScreenEntry implements AppHookProxy {

    @Override
    public void onCreate(Application application) {
        Log.d("ScreenEntry", "onCreate: ");
//        application.onTerminate();
        ScreenInstance.getInstance().cancelPresentation();
    }
}
