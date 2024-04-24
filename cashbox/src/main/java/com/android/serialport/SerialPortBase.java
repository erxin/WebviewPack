package com.android.serialport;

import android.util.Log;
import java.io.File;
import java.io.IOException;
import java.security.InvalidParameterException;

/* loaded from: classes.dex */
public class SerialPortBase {
    private SerialPort mSerialPort = null;

    static boolean isBaudrateLegal(int i) {
        switch (i) {
            case 50:
            case 75:
            case 110:
            case 134:
            case 150:
            case 200:
            case 300:
            case 600:
            case 1200:
            case 1800:
            case 2400:
            case 4800:
            case 9600:
            case 19200:
            case 38400:
            case 57600:
            case 115200:
            case 230400:
            case 460800:
            case 500000:
            case 576000:
            case 921600:
            case 1000000:
            case 1152000:
            case 1500000:
            case 2000000:
            case 2500000:
            case 3000000:
            case 3500000:
            case 4000000:
                return true;
            default:
                return false;
        }
    }

    static boolean isBitsLegal(int i) {
        return i == 7 || i == 8;
    }

    static boolean isFlowConLegal(int i) {
        return i == 0 || i == 1 || i == 2;
    }

    static boolean isParityLegal(int i) {
        return i == 0 || i == 1 || i == 2;
    }

    static boolean isStopLegal(int i) {
        return i == 1 || i == 2;
    }

    public SerialPort getSerialPort(String str, int i) throws SecurityException, IOException, InvalidParameterException {
        if (this.mSerialPort == null) {
            if (str == null) {
                Log.d("SerialPortBase", "getSerialPort path parameter set default.");
                str = "dev/ttyUSB0";
            }
            int i2 = isBaudrateLegal(i) ? i : 115200;
            Log.d("SerialPortBase", "getSerialPort two parameter.  path: " + str + " baudrate: " + i2 + " parity: 0 stop: 1 bits: 8");
            this.mSerialPort = new SerialPort(new File(str), i2, 0, 1, 8, 0);
        }
        return this.mSerialPort;
    }

    public SerialPort getSerialPort(String str, int i, int i2, int i3, int i4) throws SecurityException, IOException, InvalidParameterException {
        if (this.mSerialPort == null) {
            if (str == null) {
                Log.d("SerialPortBase", "getSerialPort path parameter set default.");
                str = "dev/ttyUSB0";
            }
            int i5 = isBaudrateLegal(i) ? i : 115200;
            int i6 = isParityLegal(i2) ? i2 : 0;
            int i7 = isStopLegal(i3) ? i3 : 1;
            int i8 = isBitsLegal(i4) ? i4 : 8;
            Log.d("SerialPortBase", "getSerialPort five parameter.  path: " + str + " baudrate: " + i5 + " parity: " + i6 + " stop: " + i7 + "bits" + i8);
            this.mSerialPort = new SerialPort(new File(str), i5, i6, i7, i8, 0);
        }
        return this.mSerialPort;
    }

    public SerialPort getSerialPort(String str, int i, int i2, int i3, int i4, int i5) throws SecurityException, IOException, InvalidParameterException {
        String str2;
        if (this.mSerialPort == null) {
            if (str == null) {
                Log.d("SerialPortBase", "getSerialPort path parameter set default.");
                str2 = "dev/ttyUSB0";
            } else {
                str2 = str;
            }
            int i6 = isBaudrateLegal(i) ? i : 115200;
            int i7 = isParityLegal(i2) ? i2 : 0;
            int i8 = isStopLegal(i3) ? i3 : 1;
            int i9 = isBitsLegal(i4) ? i4 : 8;
            int i10 = isFlowConLegal(i5) ? i5 : 8;
            Log.d("SerialPortBase", "getSerialPort six parameter.  path: " + str2 + " baudrate: " + i6 + " parity: " + i7 + " stop: " + i8 + " bits: " + i9 + " flowcon: " + i10);
            this.mSerialPort = new SerialPort(new File(str2), i6, i7, i8, i9, i10);
        }
        return this.mSerialPort;
    }

    public void closeSerialPort() {
        SerialPort serialPort = this.mSerialPort;
        if (serialPort != null) {
            serialPort.close();
            this.mSerialPort = null;
        }
    }
}
