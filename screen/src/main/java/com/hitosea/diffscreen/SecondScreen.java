package com.hitosea.diffscreen;

import android.content.Context;
import android.graphics.Color;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;

import io.dcloud.feature.uniapp.UniSDKInstance;
import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.ui.action.AbsComponentData;
import io.dcloud.feature.uniapp.ui.component.AbsVContainer;
import io.dcloud.feature.uniapp.ui.component.UniComponent;

public class SecondScreen extends UniComponent<TextView> {

    UniSDKInstance mUniSDKInstance;
    public SecondScreen(UniSDKInstance instance, AbsVContainer parent, int type, AbsComponentData componentData) {
        super(instance, parent, type, componentData);
        mUniSDKInstance = instance;
        Log.d("SecondScreen", "SecondScreen: ");

    }

    @Override
    protected TextView initComponentHostView(@NonNull Context context) {
        TextView textView = new TextView(context);
        Log.d("SecondScreen", "initComponentHostView: ");
        return textView;
    }

    @UniJSMethod
    public void originUrl() {
        String originUrl = mUniSDKInstance.getBundleUrl();
        String TAG = "originUrl";
        Toast.makeText(mUniSDKInstance.getContext(),"originUrl", Toast.LENGTH_SHORT).show();
        Log.d(TAG, "originUrl: "+originUrl);
        getHostView();
    }

}
