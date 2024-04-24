package com.hitosea.diffscreen;
import static androidx.core.app.ActivityCompat.startActivityForResult;
import static androidx.core.content.ContextCompat.getSystemService;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.hardware.display.DisplayManager;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;
import android.util.Log;
import android.view.Display;
import android.widget.Toast;

import com.taobao.weex.adapter.URIAdapter;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

public class SecondScreenModule extends UniModule {

    private static final int REQUEST_PERMISSION = 1111;
    private String baseurl;

    @UniJSMethod(uiThread = true)
    public void requestScreen(String url) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            //SYSTEM_ALERT_WINDOW权限申请
            if (!Settings.canDrawOverlays(mUniSDKInstance.getContext())) {
                baseurl = url;
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION);
                intent.setData(Uri.parse("package:" + mUniSDKInstance.getContext().getPackageName()));//不加会显示所有可能的app
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                mUniSDKInstance.getContext().startActivity(intent);
            } else {
                //TODO do something you need
                showScreen(url);
            }
        }

    }

    @UniJSMethod
    public void showScreen(String url) {

//        url = "http://192.168.100.100:3001";
        ScreenInstance.getInstance().initPresentation(mUniSDKInstance.getContext(), url);
    }

    @Override
    public void onActivityPause() {
        super.onActivityPause();
    }


    @UniJSMethod
    public void showOrderData(String orderJson, UniJSCallback callback) {
//        Toast.makeText(mUniSDKInstance.getContext(), orderJson, Toast.LENGTH_LONG);
//        Log.d("showOrderData", "showOrderData: ");
//        Log.d("showOrderData", orderJson);
        ScreenInstance.getInstance().showOrderData(orderJson,callback);
    }
    @UniJSMethod
    public boolean hasScreen() {

        return ScreenInstance.getInstance().hasScreen();
    }

    @UniJSMethod
    public void loadUrl(String url) {
        ScreenInstance.getInstance().loadUrl(url);
    }

    @UniJSMethod
    public void showAdData(String orderJson, UniJSCallback callback) {
        ScreenInstance.getInstance().showAdData(orderJson, callback);
    }

    @UniJSMethod
    public void changeLanguage(String lang,  UniJSCallback callback) {
        ScreenInstance.getInstance().changeLanguage(lang, callback);
    }

    @UniJSMethod
    public void closeScreen() {
        ScreenInstance.getInstance().cancelPresentation();
    }

    @UniJSMethod
    public boolean checkPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (!Settings.canDrawOverlays(mWXSDKInstance.getContext())) {
                // 权限未授予
                return false;
            }
        }
        // 权限已授予或设备版本低于Android M
        return true;
    }

    @UniJSMethod
    public void showToastLoading(String message) {
        ToastUtil.showProgressDialog(mWXSDKInstance.getContext(), message);
    }

    @UniJSMethod
    public void hideToastLoading() {
        ToastUtil.hideProgressDialog();
    }

//    @Override
//    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
//        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
//        // 检查请求码
//
//        // 检查权限授予结果
//        if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
//            // 权限被授予
//            // 在此处执行相应的操作
//            requestScreen(baseurl);
//        } else {
//            // 权限被拒绝
//            // 在此处处理权限被拒绝的情况
////                handlePermissionDenied();
//            Toast.makeText(mWXSDKInstance.getContext(),"PERMISSION DENIED ", Toast.LENGTH_SHORT);
//        }
//
//    }

//    @Override
//    public void onActivityResume() {
//        super.onActivityResume();
//        if (checkOverlayPermission(mWXSDKInstance.getContext())) {
//            showScreen(baseurl);
//        }
//    }
//
//    public boolean checkOverlayPermission(Context context) {
//        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
//            if (!Settings.canDrawOverlays(context)) {
//                // 权限未授予
//                return false;
//            }
//        }
//        // 权限已授予或设备版本低于Android M
//        return true;
//    }
}
