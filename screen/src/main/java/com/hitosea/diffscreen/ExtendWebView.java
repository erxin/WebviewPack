package com.hitosea.diffscreen;


import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.os.Message;
import android.provider.MediaStore;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.core.content.FileProvider;
import android.util.AttributeSet;
import android.view.HapticFeedbackConstants;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.taobao.weex.bridge.JSCallback;

import java.io.File;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;
import java.util.Map;

import static android.app.Activity.RESULT_OK;
import static android.os.Environment.DIRECTORY_DCIM;


/**
 * 高级的WebView
 */
@SuppressWarnings("deprecation")
public class ExtendWebView extends WebView {

    private ProgressBar progressbar;
    private TitleCall mTitleCall;
    private StatusCall mStatusCall;
    private InvalidateListener mInvalidateListener;
    private boolean disabledUserLongClickSelect;
    private static final int REQUEST_CAMERA = 1;
    private static final int REQUEST_CHOOSE = 2;
    private ValueCallback<Uri> mUploadMessage;
    private ValueCallback<Uri[]> mUploadMessagesAboveL;
    private ValueCallback<Object> mSendMessage;
    private Uri cameraUri;

    private View.OnLongClickListener mOnLongClickListener;

    @SuppressLint("AddJavascriptInterface")
    public ExtendWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
        progressbar = new ProgressBar(context, null, android.R.attr.progressBarStyleHorizontal);
        progressbar.setLayoutParams(new LayoutParams(LayoutParams.FILL_PARENT, 6, 0, 0));
        progressbar.setVisibility(GONE);
        //
        mOnLongClickListener = v -> disabledUserLongClickSelect;
        //

        addView(progressbar);
        setWebViewClient(new WebViewClient());
        setDownloadListener(new DownloadListener());
        setOnLongClickListener(mOnLongClickListener);
        initSetting();
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void initSetting() {
        WebSettings webSettings = getSettings();
        //开启 JavaScript
        webSettings.setJavaScriptEnabled(true);
        //开启 localStorage
        webSettings.setDomStorageEnabled(true);
        //启动缓存
        webSettings.setAppCacheEnabled(true);
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
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            webSettings.setMediaPlaybackRequiresUserGesture(false);
        }
    }

    private class DownloadListener implements android.webkit.DownloadListener {

        @Override
        public void onDownloadStart(String url, String userAgent, String contentDisposition, String mimetype, long contentLength) {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.addCategory(Intent.CATEGORY_BROWSABLE);
            intent.setData(Uri.parse(url));
            getContext().startActivity(intent);
        }
    }

    private class WebViewClient extends android.webkit.WebViewClient {

        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {
            super.onPageStarted(view, url, favicon);
            if (mStatusCall != null) {
                mStatusCall.onStatusChanged(view, "start");
            }
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);
            if (mStatusCall != null) {
                mStatusCall.onStatusChanged(view, "success");
            }
        }

        @Override
        public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
            super.onReceivedError(view, errorCode, description, failingUrl);
            if (mStatusCall != null) {
                mStatusCall.onErrorChanged(view, errorCode, description, failingUrl);
            }
        }

        @SuppressLint("NewApi")
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            String url = String.valueOf(request.getUrl());
            if (url.isEmpty()) {
                return true;
            }
            if (!url.startsWith("http") && !url.startsWith("HTTP")) {
                return true;
            }
            if (mStatusCall != null) {
                mStatusCall.onUrlChanged(view, url);
            }
            view.loadUrl(url);
            return true;
        }
    }

    @Override
    protected void onScrollChanged(int l, int t, int oldl, int oldt) {
        LayoutParams lp = (LayoutParams) progressbar.getLayoutParams();
        lp.x = l;
        lp.y = t;
        progressbar.setLayoutParams(lp);
        super.onScrollChanged(l, t, oldl, oldt);
    }

    @Override
    public void invalidate() {
        super.invalidate();
        if (mInvalidateListener != null) {
            mInvalidateListener.onCall();
        }
    }

    @Override
    public void loadUrl(String url) {
        if (url.startsWith("file://assets/")) {
            url = "file:///android_asset/" + url.substring(14);
        }else if (url.startsWith("file:///assets/")) {
            url = "file:///android_asset/" + url.substring(15);
        }
        super.loadUrl(url);
    }

    /**
     * 【图片上传部分】检查SD卡是否挂载
     * @param context
     * @return
     */
    private boolean checkSDcard(Context context) {
        boolean flag = Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED);
        if (!flag) {
            Toast.makeText(context, "请插入手机存储卡再使用本功能", Toast.LENGTH_SHORT).show();
        }
        return flag;
    }

    /**
     * 【图片上传部分】Dialog监听类
     */
    private class ReOnCancelListener implements DialogInterface.OnCancelListener {
        @Override
        public void onCancel(DialogInterface dialogInterface) {
            if (mUploadMessage != null) {
                mUploadMessage.onReceiveValue(null);
                mUploadMessage = null;
            }

            if (mUploadMessagesAboveL != null) {
                mUploadMessagesAboveL.onReceiveValue(null);
                mUploadMessagesAboveL = null;
            }
        }
    }


    /**
     * 检查拍照权限
     */
    private void checkPermission() {

    }
    /**
     * 【图片上传部分】打开照相机
     */
    private void openCarcme() {
        File vFile = new File(getContext().getExternalFilesDir(DIRECTORY_DCIM),System.currentTimeMillis() + ".png");
//        String imagePaths = Environment.getExternalStorageDirectory().getPath() + "/BigMoney/Images/" + (System.currentTimeMillis() + ".jpg");
//        // 必须确保文件夹路径存在，否则拍照后无法完成回调
//        File vFile = new File(imagePaths);
//        if (!vFile.exists()) {
//            File vDirPath = vFile.getParentFile();
//            boolean res = vDirPath.mkdirs();
//            if (!res) {
//                return;
//            }
//        } else {
//            if (vFile.exists()) {
//                boolean res = vFile.delete();
//                if (!res) {
//                    return;
//                }
//            }
//        }
        //
        cameraUri = FileProvider.getUriForFile(getContext(), getContext().getPackageName() + ".provider", vFile);
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        intent.putExtra(MediaStore.EXTRA_OUTPUT, cameraUri);
        ((Activity) getContext()).startActivityForResult(intent, REQUEST_CAMERA);
    }

    /**
     * 【图片上传部分】本地相册选择图片
     */
    @SuppressLint("IntentReset")
    private void chosePicture() {
        Intent innerIntent = new Intent(Intent.ACTION_GET_CONTENT, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        innerIntent.setType("image/*");
        Intent wrapperIntent = Intent.createChooser(innerIntent, null);
        ((Activity) getContext()).startActivityForResult(wrapperIntent, REQUEST_CHOOSE);
    }

    /**
     * 【图片上传部分】选择照片后结束
     * @param data
     */
    private Uri afterChosePic(Intent data) {
        if (data != null) {
            if (data.getData() != null) {
                final String path = data.getData().getPath();
                if (path != null && (path.endsWith(".png") || path.endsWith(".PNG") || path.endsWith(".jpg") || path.endsWith(".JPG"))) {
                    return data.getData();
                } else {
                    Toast.makeText(getContext(), "上传的图片仅支持png或jpg格式", Toast.LENGTH_SHORT).show();
                }
            }
        }
        return null;
    }

    /**
     * 【图片上传部分】5.0以后机型 返回文件选择
     * @param requestCode
     * @param resultCode
     * @param data
     */
    private void onActivityResultAboveL(int requestCode, int resultCode, Intent data) {
        Uri[] results = null;
        if (requestCode == REQUEST_CAMERA && resultCode == RESULT_OK) {
            results = new Uri[]{cameraUri};
        }
        if (requestCode == REQUEST_CHOOSE && resultCode == RESULT_OK) {
            if (data != null) {
                String dataString = data.getDataString();
                if (dataString != null) {
                    results = new Uri[]{Uri.parse(dataString)};
                }
            }
        }
        mUploadMessagesAboveL.onReceiveValue(results);
        mUploadMessagesAboveL = null;
    }

    /**
     * 监听
     * @param mInvalidateListener
     */
    public void setInvalidateListener(InvalidateListener mInvalidateListener) {
        this.mInvalidateListener = mInvalidateListener;
    }

    public interface InvalidateListener {
        void onCall();
    }

    /**
     * 监听网页向组件发送参数
     * @param mSendMessage
     */
    public void setSendMessage(ValueCallback<Object> mSendMessage) {
        this.mSendMessage = mSendMessage;
    }
    public void sendMessage(Object params) {
        if (mSendMessage != null) {
            mSendMessage.onReceiveValue(params);
        }
    }

    /**
     * 销毁浏览器
     */
    public void onDestroy() {
        loadDataWithBaseURL(null, "", "text/html", "utf-8", null);
        clearHistory();
        ((ViewGroup) getParent()).removeView(this);
        destroy();
    }

    /**
     * 监听标题变化
     * @param call
     */
    public void setOnTitleClient(TitleCall call) {
        mTitleCall = call;
    }

    public interface TitleCall {
        void onChanged(WebView view, String title);
    }

    /**
     * 设置透明背景
     * @param transparency
     */
    public void setTransparency(boolean transparency) {
        if (transparency) {
            this.setBackgroundColor(Color.TRANSPARENT);
            this.getBackground().setAlpha(0);
        } else {
            this.setBackgroundColor(Color.WHITE);
            this.getBackground().setAlpha(1);
        }
    }

    /**
     * 隐藏键盘done部分（仅支持ios，android无效）
     * @param hiddenDone
     */
    public void setHiddenDone(boolean hiddenDone) {
        //
    }

    /**
     * 长按网页内容震动（仅支持android，ios无效）
     * @param hapticBackEnabled
     */
    public void setHapticBackEnabled(boolean hapticBackEnabled) {
        setHapticFeedbackEnabled(hapticBackEnabled);
    }

    /**
     * 允许用户长按选择内容
     * @param disabledUserLongClickSelect
     */
    public void setDisabledUserLongClickSelect(boolean disabledUserLongClickSelect) {
        this.disabledUserLongClickSelect = disabledUserLongClickSelect;
    }

    /**
     * 监听状态变化
     * @param call
     */
    public void setOnStatusClient(StatusCall call) {
        mStatusCall = call;
    }

    public interface StatusCall {
        void onCreateTarget(WebView view, String url);
        void onStatusChanged(WebView view, String status);
        void onTitleChanged(WebView view, String title);
        void onUrlChanged(WebView view, String url);
        void onErrorChanged(WebView view, int errorCode, String description, String failingUrl);
    }

    /**
     * 允许用户不需要手势就播放音乐
     * @param var
     */
    public void setAllowsInlineMediaPlayback(boolean var) {
        WebSettings webSettings = getSettings();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            webSettings.setMediaPlaybackRequiresUserGesture(!var);
        }
    }

    /**
     * 允许跨域请求
     * @param var
     */
    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    public void setAllowFileAccessFromFileURLs(boolean var) {
        try {
            WebSettings webSettings = getSettings();
            Class<?> clazz = webSettings.getClass();
            Method method = clazz.getMethod("setAllowUniversalAccessFromFileURLs", boolean.class);
            method.invoke(webSettings, var);
        } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException e) {
            e.printStackTrace();
        }
    }

    /**
     * 全局样式
     * @return
     */
    public static String commonStyle() {
        return "body{background-color:#FFF;color:#000;font-family:Verdana,Arial,Helvetica,sans-serif;font-size:14px;line-height:1.3;scrollbar-3dlight-color:#F0F0EE;scrollbar-arrow-color:#676662;scrollbar-base-color:#F0F0EE;scrollbar-darkshadow-color:#DDD;scrollbar-face-color:#E0E0DD;scrollbar-highlight-color:#F0F0EE;scrollbar-shadow-color:#F0F0EE;scrollbar-track-color:#F5F5F5}\n" +
                "td,th{font-family:Verdana,Arial,Helvetica,sans-serif;font-size:14px}\n" +
                ".word-wrap{word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}\n" +
                ".mce-content-body .mce-reset{margin:0;padding:0;border:0;outline:0;vertical-align:top;background:0 0;text-decoration:none;color:#000;font-family:Arial;font-size:11px;text-shadow:none;float:none;position:static;width:auto;height:auto;white-space:nowrap;cursor:inherit;line-height:normal;font-weight:400;text-align:left;-webkit-tap-highlight-color:transparent;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;direction:ltr;max-width:none}\n" +
                ".mce-object{border:1px dotted #3A3A3A;background:#D5D5D5 url(data:image/gif;base64,R0lGODlhEQANALMPAOXl5T8/P29vb7S0tFdXV/39/djY2N3d3crKyu/v7/f39/Ly8p2dnf///zMzMwAAACH5BAEAAA8ALAAAAAARAA0AAARF0MlJq3uutay75lmGNU9pjiNFCsipqhgxmO9HSgFTgtt9O4EBABWa3AiGwvBlfAgWisPOyCslDDSbSHTa+SzgpmdMbkQAADs=) no-repeat center}\n" +
                ".mce-preview-object{display:inline-block;position:relative;margin:0 2px 0 2px;line-height:0;border:1px solid gray}\n" +
                ".mce-preview-object[data-mce-selected=\"2\"] .mce-shim{display:none}\n" +
                ".mce-preview-object .mce-shim{position:absolute;top:0;left:0;width:100%;height:100%;background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)}\n" +
                "figure.align-left{float:left}\n" +
                "figure.align-right{float:right}\n" +
                "figure.image.align-center{display:table;margin-left:auto;margin-right:auto}\n" +
                "figure.image{display:inline-block;border:1px solid gray;margin:0 2px 0 1px;background:#f5f2f0}\n" +
                "figure.image img{margin:8px 8px 0 8px}\n" +
                "figure.image figcaption{margin:6px 8px 6px 8px;text-align:center}\n" +
                ".mce-toc{border:1px solid gray}\n" +
                ".mce-toc h2{margin:4px}\n" +
                ".mce-toc li{list-style-type:none}\n" +
                ".mce-pagebreak{cursor:default;display:block;border:0;width:100%;height:5px;border:1px dashed #666;margin-top:15px;page-break-before:always}\n" +
                "@media print{.mce-pagebreak{border:0}\n" +
                "}\n" +
                ".mce-item-anchor{cursor:default;display:inline-block;-webkit-user-select:all;-webkit-user-modify:read-only;-moz-user-select:all;-moz-user-modify:read-only;user-select:all;user-modify:read-only;width:9px!important;height:9px!important;border:1px dotted #3A3A3A;background:#D5D5D5 url(data:image/gif;base64,R0lGODlhBwAHAIABAAAAAP///yH5BAEAAAEALAAAAAAHAAcAAAIMjGGJmMH9mHQ0AlYAADs=) no-repeat center}\n" +
                ".mce-nbsp,.mce-shy{background:#AAA}\n" +
                ".mce-shy::after{content:'-'}\n" +
                ".mce-match-marker{background:#AAA;color:#fff}\n" +
                ".mce-match-marker-selected{background:#39f;color:#fff}\n" +
                ".mce-spellchecker-word{border-bottom:2px solid rgba(208,2,27,.5);cursor:default}\n" +
                ".mce-spellchecker-grammar{border-bottom:2px solid green;cursor:default}\n" +
                ".mce-item-table,.mce-item-table caption,.mce-item-table td,.mce-item-table th{border:1px dashed #BBB}\n" +
                "td[data-mce-selected],th[data-mce-selected]{background-color:#2276d2!important}\n" +
                ".mce-edit-focus{outline:1px dotted #333}\n" +
                ".mce-content-body [contentEditable=false] [contentEditable=true]:focus{outline:2px solid #2276d2}\n" +
                ".mce-content-body [contentEditable=false] [contentEditable=true]:hover{outline:2px solid #2276d2}\n" +
                ".mce-content-body [contentEditable=false][data-mce-selected]{outline:2px solid #2276d2}\n" +
                ".mce-content-body [data-mce-selected=inline-boundary]{background:#bfe6ff}\n" +
                ".mce-content-body .mce-item-anchor[data-mce-selected]{background:#D5D5D5 url(data:image/gif;base64,R0lGODlhBwAHAIABAAAAAP///yH5BAEAAAEALAAAAAAHAAcAAAIMjGGJmMH9mHQ0AlYAADs=) no-repeat center}\n" +
                ".mce-content-body hr{cursor:default}\n" +
                ".mce-content-body table{-webkit-nbsp-mode:normal}\n" +
                ".ephox-snooker-resizer-bar{background-color:#2276d2;opacity:0}\n" +
                ".ephox-snooker-resizer-cols{cursor:col-resize}\n" +
                ".ephox-snooker-resizer-rows{cursor:row-resize}\n" +
                ".ephox-snooker-resizer-bar.ephox-snooker-resizer-bar-dragging{opacity:.2}\n";
    }

    /**
     * 允许多窗口
     * @param var1
     */
    public void setSupportMultipleWindows(boolean var1) {
        WebSettings webSettings = getSettings();
        webSettings.setSupportMultipleWindows(var1);
    }
}
