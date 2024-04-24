package com.hitosea.diffscreen;

import static androidx.core.content.ContextCompat.getSystemService;
import static com.taobao.weex.WXSDKEngine.callback;

import android.content.Context;
import android.hardware.display.DisplayManager;
import android.media.MediaRouter;
import android.os.Build;
import android.util.Log;
import android.view.Display;
import android.view.WindowManager;
import android.webkit.WebView;
import android.widget.Toast;

import com.alibaba.fastjson.JSONObject;

import io.dcloud.feature.uniapp.bridge.UniJSCallback;

//实现的单例类 防止多引用混乱
public class ScreenInstance {
    private static ScreenInstance instance = new ScreenInstance();

    private ScreenInstance() {
        // 私有构造函数，防止外部实例化
    }

    public static ScreenInstance getInstance() {
        return instance;
    }

    private Display display;

    private MediaRouter mediaRouter;

    private Context context;

    private Boolean isInit;

    private ScreenPresentation menuPresentation;

    public void initPresentation(Context context, String baseurl) {
        this.context = context;

        mediaRouter = (MediaRouter) context.getSystemService(Context.MEDIA_ROUTER_SERVICE);
        MediaRouter.RouteInfo localRouteInfo = mediaRouter.getSelectedRoute(MediaRouter.ROUTE_TYPE_LIVE_AUDIO);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            display = localRouteInfo != null ? localRouteInfo.getPresentationDisplay() : null;
        }
        if (display != null) {

            showPresentation(display, baseurl);
        } else {
            Toast.makeText(context, "不支持分屏", Toast.LENGTH_SHORT).show();
        }

//        QbSdk.setDownloadWithOutWifi(true);

    }

    private void showPresentation(Display display, String baseurl) {
        if (menuPresentation != null) {
            menuPresentation.dismiss();
            menuPresentation = null;
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            menuPresentation = new ScreenPresentation(this.context, display, baseurl);
        }
        menuPresentation.getWindow().setType(WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY);//TYPE_SYSTEM_ALERT / TYPE_PHONE

        menuPresentation.show();
    }

    public void cancelPresentation() {
        if (menuPresentation != null && menuPresentation.isShowing()) {
            menuPresentation.dismiss();
        }

    }

    public void loadUrl(String url) {
        if (menuPresentation == null ) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
                menuPresentation.loadUrl(url);
            }
        }
    }

    public void showOrderData(String orderJson, UniJSCallback callback) {
        if (menuPresentation == null ) {
            if (callback != null) {
                JSONObject data = new JSONObject();
                data.put("result", "screen no exit");
                data.put("code", 1);
                callback.invoke(data);
            }
        } else {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
                Log.d("enterOrderData", "showOrderData: ");
                Log.d("showOrderData", orderJson);
                menuPresentation.showOrderData(orderJson, callback);
            }
        }
    }

    public void showAdData(String orderJson,  UniJSCallback callback) {
        if (menuPresentation == null ) {
            if (callback != null) {
                JSONObject data = new JSONObject();
                data.put("result", "screen no exit");
                data.put("code", 1);
                callback.invoke(data);
            }
        } else {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
                menuPresentation.showAdData(orderJson, callback);
            }
        }
    }

    public void changeLanguage(String lang,  UniJSCallback callback) {
        if (menuPresentation == null ) {
            if (callback != null) {
                JSONObject data = new JSONObject();
                data.put("result", "screen no exit");
                data.put("code", 1);
                callback.invoke(data);
            }
        } else {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
                menuPresentation.changeLang(lang, callback);
            }
        }
    }

    public boolean hasScreen() {

        return menuPresentation != null;
    }

    private void cancelSecondaryDisplays() {
        // 获取DisplayManager实例
        DisplayManager displayManager = null;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.JELLY_BEAN_MR1) {
            displayManager = (DisplayManager) context.getSystemService(Context.DISPLAY_SERVICE);
            // 获取所有已连接的显示屏幕
            Display[] displays = displayManager.getDisplays();
            // 取消副屏显示
            for (Display display : displays) {
                if (display.getDisplayId() != Display.DEFAULT_DISPLAY) {

                }
            }
        }


    }
}
