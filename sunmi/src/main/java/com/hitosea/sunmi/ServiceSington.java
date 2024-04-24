package com.hitosea.sunmi;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Build;
import android.os.IBinder;
import android.os.RemoteException;
import android.print.PrintManager;
import android.util.Log;
import android.util.Printer;
import android.widget.Toast;

import com.alibaba.fastjson.JSONObject;
import com.hcd.hcdpos.cashbox.Cashbox;
import com.sunmi.printerx.PrinterSdk;
import com.sunmi.printerx.SdkException;

import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Hex;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Method;
import java.net.InetSocketAddress;
import java.net.Socket;

import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import woyou.aidlservice.jiuiv5.ICallback;
import woyou.aidlservice.jiuiv5.IWoyouService;

public class ServiceSington {
    private static ServiceSington instance = new ServiceSington();

    private ServiceSington() {
        // 私有构造函数，防止外部实例化
    }

    public static ServiceSington getInstance() {
        return instance;
    }

    private Context context;

    private IWoyouService woyouService;

    private ServiceConnection connService = new ServiceConnection() {

        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            woyouService = IWoyouService.Stub.asInterface(service);

//            Toast.makeText(context, "服务已连接:", Toast.LENGTH_SHORT).show();
        }

        @Override
        public void onServiceDisconnected(ComponentName name) {
            woyouService = null;
//            Toast.makeText(context, "服务已断开:", Toast.LENGTH_SHORT).show();
        }
    };

    public void attemptsInit(Context context) {
        if (woyouService == null) {
            Binding(context);
        }
    }

    public void Binding(Context context) {
        this.context = context;
        Intent intent=new Intent();
        intent.setPackage("woyou.aidlservice.jiuiv5");
        intent.setAction("woyou.aidlservice.jiuiv5.IWoyouService");
        context.bindService(intent, connService, Context.BIND_AUTO_CREATE);

    }

    public static void enableCashBox(){
        Cashbox.doOpenCashBox();

    }

    public void openDrawer(UniJSCallback result) throws RemoteException {
        enableCashBox();
        // 创建PrintProxy对象

        if (woyouService == null) {
            return;
        }
        woyouService.openDrawer(new ICallback() {
            @Override
            public void onRunResult(boolean isSuccess) throws RemoteException {
                JSONObject data = new JSONObject();
                data.put("result", isSuccess);
                result.invoke(data);
            }

            @Override
            public void onReturnString(String result) throws RemoteException {
                Toast.makeText(context, result, Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onRaiseException(int code, String msg) throws RemoteException {
                Toast.makeText(context, msg, Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onPrintResult(int code, String msg) throws RemoteException {

            }

            @Override
            public IBinder asBinder() {
                return null;
            }
        });

    }

    public void printText(String content) throws RemoteException, UnsupportedEncodingException, SdkException, DecoderException {

        new Thread(new Runnable(){
            @Override
            public void run() {
                try {
                    Socket s = new Socket();
                    s.connect(new InetSocketAddress("127.0.0.1",9101), 2000);
                    OutputStream outputStream = s.getOutputStream();
                    InputStream inputStream = s.getInputStream();

                    outputStream.write(new byte[]{0x10,0x04,0x02});

                    // String content = "ec82aceca08420ecb2adeab5ac0a1b61012a2a2a5858582073686f702a2a2a0a0a1b33321b2118ed858cec9db4ebb89420ebb288ed98b83a203030320a0a1b33321b321b21001b61001b240000eca3bcebacb8ec849c20ebb288ed98b81b245f013230323430333038323439343835323937340a1b240000eca3bcebacb8ebb288ed98b820eab080eca0b8ec98a4eab8b01b24ef01e7aea1e79086e591980a0a1b321b21001b61001b240000ec8381ed92881b245801ec8898eb9f891b240702eab888ec95a10a2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d0a1b240000e59586e59381e5908de7a7b0efbc9a28456e676c697368291b246a01311b240702e0b8bf3130300a0a2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d0a1b240000ed95a9eab38420eab888ec95a11b24e301e0b8bf3130302e30300a1b21081b240000ec8898ec8ba01b24e301e0b8bf3130302e30300a1b21000a0c0a0a0a0a1d5631";
                    Hex hex = new Hex("CP874");
                    byte[] printData = hex.decodeHex(content);
                    outputStream.write(printData);
                    // showToast("发送成功");
                    // Toast.makeText(this, "发送成功", Toast.LENGTH_LONG).show();
                } catch (IOException e) {
//                    showToast("连接错误:" + e.getMessage());
                    // Toast.makeText(this, "连接错误:"+e.getMessage(), Toast.LENGTH_LONG).show();
//                        throw new RuntimeException(e);
                } catch (DecoderException e) {
//                    showToast("解码错误:"+e.getMessage());
//                        throw new RuntimeException(e);
                }
            }
        }).start();
        if (woyouService == null) {
            return;
        }
        // 0x1C, 0x2E, 0x1B, 0x74, 0x15 CP874
        // {0x1C, 0x26, 0x1C, 0x43, 0xFF}  utf-8
//        content = "1b61010a1b33501b2118e0b882e0b989e0b8ade0b8a1e0b8b9e0b8a5e0b881e0b8b2e0b8a3e0b882e0b8b2e0b8a20a0a1b321b21001b61001b240000e0b980e0b8a7e0b8a5e0b8b21b244b00313937302d30312d30312030383a30303a3030e0b896e0b8b6e0b887323032342d30312d32352032303a34303a35310a0a1b321b21001b6100e0b8abe0b8a1e0b8a7e0b894e0b8abe0b8a1e0b8b9e0b9882020202020202020202020202020202020202020202020e0b888e0b8b3e0b899e0b8a7e0b899202020202020e0b888e0b8b3e0b899e0b8a7e0b899e0b980e0b887e0b8b4e0b8992d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d";
        byte[] prefixData = new byte[]{0x1C, 0x26, 0x1C, 0x43, (byte) 0xFF};

        Hex hex = new Hex("CP874");
        byte[] printData = hex.decodeHex(content);

        woyouService.sendRAWData(prefixData,null);

        woyouService.sendRAWData(printData, new ICallback.Stub() {
            @Override
            public void onRunResult(boolean isSuccess) throws RemoteException {
                Log.d("sendRAWData", "onRunResult: "+isSuccess);
            }

            @Override
            public void onReturnString(String result) throws RemoteException {
                Log.d("sendRAWData", "onReturnString: "+result);
            }

            @Override
            public void onRaiseException(int code, String msg) throws RemoteException {
                Log.d("sendRAWData", "onRaiseException: "+ msg);
            }

            @Override
            public void onPrintResult(int code, String msg) throws RemoteException {
                Log.d("sendRAWData", "onPrintResult: "+ msg);
            }

            @Override
            public IBinder asBinder() {
                return null;
            }
        });
    }

}
