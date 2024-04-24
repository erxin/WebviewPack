package com.jbc.cashier.WebInterface;

import android.content.Context;
import android.media.MediaPlayer;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;

public class TTSInterface {
    Context mContext;

    private TextToSpeech textToSpeech;
    private MediaPlayer mediaPlayer;

    public TTSInterface(Context context) {
        mContext = context;
    }

    @JavascriptInterface
    public void initTTS() {
    }

    @JavascriptInterface
    public void setLang(String lang) {

    }

    @JavascriptInterface
    public void playTTS(String content) {

    }

    @JavascriptInterface
    public void stop() {
        if (textToSpeech != null) {
            textToSpeech.stop();
        }
    }
}
