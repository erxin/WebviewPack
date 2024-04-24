package com.hitosea.tts;

import static android.speech.tts.TextToSpeech.QUEUE_FLUSH;

import android.content.res.AssetFileDescriptor;
import android.content.res.AssetManager;
import android.media.MediaPlayer;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.util.Log;
import android.widget.Toast;

import com.alibaba.fastjson.JSONObject;

import java.io.IOException;
import java.util.Locale;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

public class TTSModule extends UniModule {
    private TextToSpeech textToSpeech;
    private MediaPlayer mediaPlayer;

    /**
     * 初始化tts模块
     */
    @UniJSMethod(uiThread = true)
    public void initTTS(UniJSCallback result){

        textToSpeech = new TextToSpeech(mUniSDKInstance.getContext(), new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {
                Log.d("TTS", "初始化:"+status);
                JSONObject data = new JSONObject();
                data.put("code", status);
                if (result != null) {
                    result.invoke(data);
                }
            }
        });

//        textToSpeech.setOnUtteranceProgressListener(new UtteranceProgressListener() {
//            @Override
//            public void onStart(String utteranceId) {
//
//            }
//
//            @Override
//            public void onDone(String utteranceId) {
//
//            }
//
//            @Override
//            public void onError(String utteranceId) {
//
//            }
//        });

        try {
            mediaPlayer = new MediaPlayer();
            AssetManager assetManager = mUniSDKInstance.getContext().getAssets();
            AssetFileDescriptor descriptor = assetManager.openFd("tips.mp3"); // 替换为您的音频文件名
            mediaPlayer.setDataSource(descriptor.getFileDescriptor(), descriptor.getStartOffset(), descriptor.getLength());
            mediaPlayer.prepare();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 设置语言
     */
    @UniJSMethod
    public void setLang(String lang) {
        Log.d("TTS", "设置语言:"+lang);
        Log.d("TTS", "" + (textToSpeech != null));
        if (textToSpeech != null) {
            Log.d("TTS", "enter set");
            if (lang.equals("en") ) {
                Log.d("TTS", "english start");
                int result = textToSpeech.setLanguage(Locale.US);
                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                    Log.d("TTS", "Unsupport english");
                    showToast("Unsupport english");
                }else{
                    Log.d("TTS", "english success");
                    showToast("English setted");
                }
                Log.d("TTS", "english end");
            } else if (lang.equals("zh-TW")) {
                int result = textToSpeech.setLanguage(Locale.TAIWAN);
                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                    Log.d("TTS", "不支持繁體中文");
                    showToast("不支持繁體中文");
                } else {
                    Log.d("TTS", "繁體中文 已设置");
                    showToast("繁體中文 已设置");
                }
            } else if (lang.equals("th")) {
                int result = textToSpeech.setLanguage(new Locale("th"));
                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                    Log.d("TTS", "不支持泰语");
                    showToast("不支持泰语");
                } else {
                    Log.d("TTS", "泰语 已设置");
                    showToast("泰语 已设置");
                }
            } else if ( lang.equals("zh")) {
                int result = textToSpeech.setLanguage(Locale.CHINA);
                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                    Log.d("TTS", "不支持简体中文");
                    showToast("不支持简体中文");
                } else {
                    Log.d("TTS", "简体中文 已设置");
                    showToast("简体中文 已设置");
                }
            }else if (lang.equals("ja")) {
                int result = textToSpeech.setLanguage(Locale.JAPAN);
                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                    Log.d("TTS", "日本語はサポートされていません");
                    showToast("不支持日文");
                } else {
                    Log.d("TTS", "日文 已设置");
                    showToast("日文 已设置");
                }
            }else if (lang.equals("ko")) {
                int result = textToSpeech.setLanguage(Locale.KOREA);
                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                    Log.d("TTS","한국어 지원 안 함");
                    showToast("不支持韩文");
                } else {
                    Log.d("TTS", "韩文 已设置");
                    showToast("韩文 已设置");
                }
            }

        } else {
            Log.d("TTS", "no enterSet");
        }
    }

    /**
     * 播放语音
     */
    @UniJSMethod(uiThread = false)
    public void playTTS(String content) {

//        Toast.makeText(mUniSDKInstance.getContext(), "接收到文字开始播放"+content, Toast.LENGTH_LONG);
        Log.d("TTS", "接收到文字开始播放"+content);
        if (textToSpeech != null) {
            mediaPlayer.setOnErrorListener(new MediaPlayer.OnErrorListener() {
                @Override
                public boolean onError(MediaPlayer mp, int what, int extra) {
                    textToSpeech.speak(content, TextToSpeech.QUEUE_ADD, null);
                    return false;
                }
            });
            mediaPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
                @Override
                public void onCompletion(MediaPlayer mp) {
                    textToSpeech.speak(content, TextToSpeech.QUEUE_ADD, null);
                }
            });
            mediaPlayer.seekTo(0);
            mediaPlayer.start();

        }
    }

    /**
     * 停止语音
     */
    @UniJSMethod
    public void stop() {
        if (textToSpeech != null) {
            textToSpeech.stop();
        }
    }

    private void showToast(String message) {
        // Toast.makeText(mUniSDKInstance.getContext(), message, Toast.LENGTH_LONG).show();
    }
}
