package com.jbc.cashier;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.Window;
import android.webkit.ConsoleMessage;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import com.jbc.cashier.WebInterface.PrinterInterface;
import com.jbc.cashier.WebInterface.ScreenInterface;
import com.jbc.cashier.WebInterface.TTSInterface;

public class MainActivity extends Activity {

    private WebView webView;

    private Boolean shouldBack = false;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_main);

        WebView webView = (WebView) findViewById(R.id.mywebview);
        WebSettings webSettings = webView.getSettings();

        this.webView = webView;
        //开启 JavaScript
        webSettings.setJavaScriptEnabled(true);
        //启动缓存
//        webSettings.setAppCacheEnabled(true);
        //设置缓存模式
        webSettings.setCacheMode(WebSettings.LOAD_DEFAULT);
        //将图片调整到适合webview的大小
        webSettings.setUseWideViewPort(true);
        //缩放至屏幕的大小
        webSettings.setLoadWithOverviewMode(true);
        //支持缩放，默认为true。是下面那个的前提。
        webSettings.setSupportZoom(true);
        //设置内置的缩放控件。若为false，则该WebView不可缩放
        webSettings.setBuiltInZoomControls(true);
        //隐藏原生的缩放控件
        webSettings.setDisplayZoomControls(false);
        //允许用户不需要手势就播放音乐
        webSettings.setMediaPlaybackRequiresUserGesture(false);
        // 启用文件访问权限
        webSettings.setAllowFileAccess(true);
        webSettings.setAllowContentAccess(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setDatabaseEnabled(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            webSettings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW); // 允许加载混合内容
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            webView.setWebContentsDebuggingEnabled(true);
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            // 在 Android 8.0 及更高版本上，要禁用严格的 MIME 类型检查
            webSettings.setOffscreenPreRaster(true);
        }

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
                Log.d("WebViewConsole", consoleMessage.message() + " -- From line "
                        + consoleMessage.lineNumber() + " of "
                        + consoleMessage.sourceId());
                return true;
            }

            @Override
            public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
                return super.onJsAlert(view, url, message, result);
            }
        });

        webView.setWebViewClient(new WebViewClient());

        webView.loadUrl("file:///android_asset/hybrid/index.html");

        injectJS();
    }

    private void showToast(String message) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                // 在主线程中执行操作
                Toast.makeText(getApplicationContext(), message, Toast.LENGTH_LONG).show();
            }
        });

    }

    private void injectJS() {
        webView.addJavascriptInterface(new PrinterInterface(this), "PrinterInterface");
        webView.addJavascriptInterface(new ScreenInterface(this), "ScreenInterface");
        webView.addJavascriptInterface(new TTSInterface(this), "TTSInterface");
    }

    @Override
    public void onBackPressed() {
        if (!shouldBack) {
            showToast("再按一次退出");
            shouldBack = true;
            new Handler().postDelayed(new Runnable() {
                @Override
                public void run() {
                    shouldBack = false;
                }
            }, 2000); // 2秒内再次点击返回键将不起作用
        } else {
            super.onBackPressed();
        }

    }
}