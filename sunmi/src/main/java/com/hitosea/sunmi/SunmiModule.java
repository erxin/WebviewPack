package com.hitosea.sunmi;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.IBinder;
import android.os.RemoteException;
import android.speech.tts.TextToSpeech;
import android.util.Log;
import android.widget.Toast;

import com.alibaba.fastjson.JSONObject;
import com.sunmi.printerx.SdkException;

import org.apache.commons.codec.DecoderException;

import java.io.UnsupportedEncodingException;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;
import woyou.aidlservice.jiuiv5.ICallback;
import woyou.aidlservice.jiuiv5.IWoyouService;

public class SunmiModule extends UniModule {

    @UniJSMethod(uiThread = true)
    public void attemptsInit()  {
        ServiceSington.getInstance().attemptsInit(mUniSDKInstance.getContext());

    }

    /**
     * 打开钱箱
     * @param result
     */
    @UniJSMethod
    public void openDrawer(UniJSCallback result) throws RemoteException {

        ServiceSington.getInstance().openDrawer(result);

    }

    /**
     * 打印
     * @param content GBK編碼
     */
    @UniJSMethod
    public void printText(String content) throws RemoteException, UnsupportedEncodingException, SdkException, DecoderException {
//        Toast.makeText(mUniSDKInstance.getContext(), "本地接收打印数据"+content, Toast.LENGTH_SHORT).show();

        ServiceSington.getInstance().printText(content);
    }

    /**
     * 获取发送指令的次数
     * @param result
     */
    @UniJSMethod(uiThread = true)
    public void getOpenDrawerTimes(UniJSCallback result) {
        //
        Log.d("info", "getOpenDrawerTimes: getOpenDrawerTimes");
    }

}


