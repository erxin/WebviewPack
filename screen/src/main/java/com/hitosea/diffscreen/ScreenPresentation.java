package com.hitosea.diffscreen;

import android.annotation.SuppressLint;
import android.app.Presentation;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.media.MediaRouter;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.Display;
import android.view.ViewGroup;


import android.webkit.ConsoleMessage;
import android.webkit.JsResult;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.webkit.WebViewAssetLoader;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import java.io.File;

import io.dcloud.feature.uniapp.UniSDKInstance;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.utils.UniLogUtils;
import io.dcloud.feature.x5.DCWXX5WebView;
import io.dcloud.feature.x5.X5WebView;

@RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR1)
public class ScreenPresentation extends Presentation {
    Context context;
    private WebView mWebView;

//    private WebViewClient mClient;

    private String baseurl;

    public ScreenPresentation(Context outerContext, Display display, String baseurl) {
        super(outerContext, display);
        context = outerContext;
        this.baseurl = baseurl;
        Log.d("", "ScreenPresentation: ");
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.present_main);

        // X5WebView
        WebView webView = (WebView) findViewById(R.id.WebView);
        Log.d("webView", "onCreate: ");
        Log.d("webView", webView == null? "没创建": "已创建");

        mWebView = webView;

//        Uri uri = mUniSDKInstance.rewriteUri(Uri.parse("_doc/a.png"), URIAdapter.FILE);
        // 获取当前 WebView 的设置
        WebSettings webSettings = webView.getSettings();

        //开启 JavaScript
        webSettings.setJavaScriptEnabled(true);
        //开启 localStorage
        webSettings.setDomStorageEnabled(true);
        //启动缓存
        webSettings.setAppCacheEnabled(true);
        //设置缓存模式
        webSettings.setCacheMode(WebSettings.LOAD_NO_CACHE);
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

//        WebViewAssetLoader webViewAssetLoader = new WebViewAssetLoader.Builder()
//                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(context))
//                .build();
//        mWebViewAssetLoader = webViewAssetLoader;

        webView.setWebViewClient(new WebViewClient());

        mWebView.loadUrl(baseurl);

    }

    public void loadUrl(String url) {
        mWebView.loadUrl(url);
    }

    public void showOrderData(String jsonData, UniJSCallback callback) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            // String tempData = "{\"language\":\"zh\",\"system_name\":\"测试商店总部\",\"order_list\":[{\"product_name_text\":\"炒空心菜：(简体)\",\"kitchen_status\":0,\"order_product_id\":874,\"product_id\":57,\"product_name\":\"{\\\"th\\\":\\\"炒空心菜：(ภาษาไทย)\\\",\\\"zh\\\":\\\"炒空心菜：(简体)\\\",\\\"zhtw\\\":\\\"炒空心菜：(繁体)\\\",\\\"en\\\":\\\"炒空心菜：(English)\\\"}\",\"send_kitchen_time\":0,\"is_send_kitchen\":0,\"finish_num\":0,\"finish_time\":0,\"image_id\":68,\"deduct_stock_type\":20,\"spec_type\":10,\"spec_sku_id\":\"\",\"product_sku_id\":72,\"product_attr\":\"不辣(简体)\",\"product_no\":\"\",\"product_price\":\"$25.00\",\"line_price\":\"25.00\",\"product_weight\":0,\"is_user_grade\":0,\"grade_ratio\":0,\"grade_product_price\":\"0.00\",\"grade_total_money\":\"0.00\",\"coupon_money_sys\":\"0.00\",\"coupon_money\":\"0.00\",\"points_money\":\"0.00\",\"points_num\":0,\"points_bonus\":\"25.00\",\"total_num\":1,\"total_price\":\"25.00\",\"total_pay_price\":\"25.00\",\"supplier_money\":\"0.00\",\"sys_money\":\"0.00\",\"fullreduce_money\":\"0.00\",\"is_agent\":0,\"is_ind_agent\":0,\"agent_money_type\":10,\"first_money\":\"0.00\",\"second_money\":\"0.00\",\"third_money\":\"0.00\",\"is_comment\":0,\"order_id\":327,\"remark\":\"\",\"user_id\":0,\"product_source_id\":0,\"sku_source_id\":0,\"bill_source_id\":0,\"bag_price\":\"0.00\",\"virtual_content\":\"\",\"discount_money\":\"0.00\",\"extra_times\":0,\"app_id\":1705628090,\"kitchen_remark\":\"\",\"create_time\":\"2024-01-30 10:33:31\",\"delete_time\":0,\"image\":{\"file_path\":\"http://192.168.100.33/uploads/20240129/d29ec483b11f524795bd306ee5f7d9e9.png\",\"file_id\":68,\"storage\":\"local\",\"group_id\":0,\"file_url\":\"\",\"save_name\":\"20240129/d29ec483b11f524795bd306ee5f7d9e9.png\",\"file_name\":\"202401291731047eae40815.png\",\"file_size\":810664,\"file_type\":\"image\",\"real_name\":\"v2-45061ad84ad37ec62a8ec95481b141a5_r.png\",\"extension\":\"png\",\"is_user\":0,\"is_recycle\":0,\"shop_supplier_id\":0,\"is_delete\":0,\"app_id\":1705628090,\"create_time\":\"2024-01-29 17:31:04\",\"update_time\":0},\"product_price_sub\":\"￥NaN\"},{\"product_name_text\":\"炒空心菜：(简体)\",\"kitchen_status\":0,\"order_product_id\":875,\"product_id\":57,\"product_name\":\"{\\\"th\\\":\\\"炒空心菜：(ภาษาไทย)\\\",\\\"zh\\\":\\\"炒空心菜：(简体)\\\",\\\"zhtw\\\":\\\"炒空心菜：(繁体)\\\",\\\"en\\\":\\\"炒空心菜：(English)\\\"}\",\"send_kitchen_time\":0,\"is_send_kitchen\":0,\"finish_num\":0,\"finish_time\":0,\"image_id\":68,\"deduct_stock_type\":20,\"spec_type\":10,\"spec_sku_id\":\"\",\"product_sku_id\":72,\"product_attr\":\"不辣(简体)\",\"product_no\":\"\",\"product_price\":\"$25.00\",\"line_price\":\"25.00\",\"product_weight\":0,\"is_user_grade\":0,\"grade_ratio\":0,\"grade_product_price\":\"0.00\",\"grade_total_money\":\"0.00\",\"coupon_money_sys\":\"0.00\",\"coupon_money\":\"0.00\",\"points_money\":\"0.00\",\"points_num\":0,\"points_bonus\":\"25.00\",\"total_num\":1,\"total_price\":\"25.00\",\"total_pay_price\":\"25.00\",\"supplier_money\":\"0.00\",\"sys_money\":\"0.00\",\"fullreduce_money\":\"0.00\",\"is_agent\":0,\"is_ind_agent\":0,\"agent_money_type\":10,\"first_money\":\"0.00\",\"second_money\":\"0.00\",\"third_money\":\"0.00\",\"is_comment\":0,\"order_id\":327,\"remark\":\"\",\"user_id\":0,\"product_source_id\":0,\"sku_source_id\":0,\"bill_source_id\":0,\"bag_price\":\"0.00\",\"virtual_content\":\"\",\"discount_money\":\"0.00\",\"extra_times\":0,\"app_id\":1705628090,\"kitchen_remark\":\"\",\"create_time\":\"2024-01-30 10:34:23\",\"delete_time\":0,\"image\":{\"file_path\":\"http://192.168.100.33/uploads/20240129/d29ec483b11f524795bd306ee5f7d9e9.png\",\"file_id\":68,\"storage\":\"local\",\"group_id\":0,\"file_url\":\"\",\"save_name\":\"20240129/d29ec483b11f524795bd306ee5f7d9e9.png\",\"file_name\":\"202401291731047eae40815.png\",\"file_size\":810664,\"file_type\":\"image\",\"real_name\":\"v2-45061ad84ad37ec62a8ec95481b141a5_r.png\",\"extension\":\"png\",\"is_user\":0,\"is_recycle\":0,\"shop_supplier_id\":0,\"is_delete\":0,\"app_id\":1705628090,\"create_time\":\"2024-01-29 17:31:04\",\"update_time\":0},\"product_price_sub\":\"￥NaN\"},{\"product_name_text\":\"炒空心菜：(简体)\",\"kitchen_status\":0,\"order_product_id\":877,\"product_id\":57,\"product_name\":\"{\\\"th\\\":\\\"炒空心菜：(ภาษาไทย)\\\",\\\"zh\\\":\\\"炒空心菜：(简体)\\\",\\\"zhtw\\\":\\\"炒空心菜：(繁体)\\\",\\\"en\\\":\\\"炒空心菜：(English)\\\"}\",\"send_kitchen_time\":0,\"is_send_kitchen\":0,\"finish_num\":0\n}";
            // "if (typeof window.__ShowOrder === \"function\"){window.__ShowOrder(" + "\'" + jsonData +"\'"+")}";

            String escapedJson = JSON.toJSONString(jsonData);

            String orderScript = "if (typeof window.__ShowOrder === \"function\"){window.__ShowOrder(" + escapedJson +")}";

            Log.d("finalOrderData", "showOrderData: ");
//            UniLogUtils.d("showOrderData",orderScript);
            Log.d("showOrderData", orderScript);

            mWebView.evaluateJavascript(orderScript, new ValueCallback<String>() {
                @Override
                public void onReceiveValue(String value) {
                    JSONObject data = new JSONObject();
                    data.put("result", value);
                    data.put("code", 0);
                    callback.invoke(data);
                }
            });
        }
    }

    public void showAdData(String adData, UniJSCallback callback) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {

            String escapedJson = JSON.toJSONString(adData);
            Log.d("showAdData", escapedJson);

            String adScript = "if (typeof window.__ShowAd === \"function\"){window.__ShowAd("+escapedJson+")}";

            mWebView.evaluateJavascript(adScript, new ValueCallback<String>() {
                @Override
                public void onReceiveValue(String value) {
                    JSONObject data = new JSONObject();
                    data.put("result", value);
                    data.put("code", 0);
                    callback.invoke(data);
                }

            });
        }
    }

    public void changeLang(String lang, UniJSCallback callback) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {


            String escapedJson = JSON.toJSONString(lang);
            Log.d("changeLang", escapedJson);
            String langScript = "if (typeof window.__ShowLanguage === \"function\"){window.__ShowLanguage("+escapedJson+")}";

            Log.d("changeLang", langScript);
            mWebView.evaluateJavascript(langScript, new ValueCallback<String>() {
                @Override
                public void onReceiveValue(String value) {
                    JSONObject data = new JSONObject();
                    data.put("result", value);
                    data.put("code", 0);
                    callback.invoke(data);
                }

            });
        }
    }

    private class WebViewClient extends android.webkit.WebViewClient {

        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {

        }

        @Override
        public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);

        }

        @Override
        public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
            super.onReceivedError(view, errorCode, description, failingUrl);
            // 重新加载
            view.loadUrl(failingUrl);
            Log.d("onReceivedError", "errorCode" + errorCode + "description"+ description + "failingUrl" + failingUrl );
        }

    }
}
