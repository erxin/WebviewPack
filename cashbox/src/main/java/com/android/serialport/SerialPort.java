package com.android.serialport;

import android.util.Log;
import java.io.File;
import java.io.FileDescriptor;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

/* loaded from: classes.dex */
public class SerialPort {
    private FileDescriptor mFd;
    private FileInputStream mFileInputStream;
    private FileOutputStream mFileOutputStream;

    private static native FileDescriptor open(String str, int i, int i2, int i3, int i4, int i5);

    public native void close();

    public SerialPort(File file, int i, int i2, int i3, int i4, int i5) throws SecurityException, IOException {
        if (!file.canRead() || !file.canWrite()) {
            try {
                Process exec = Runtime.getRuntime().exec("/system/bin/su");
                exec.getOutputStream().write(("chmod 666 " + file.getAbsolutePath() + "\nexit\n").getBytes());
                if (exec.waitFor() != 0 || !file.canRead() || !file.canWrite()) {
                    throw new SecurityException();
                }
            } catch (Exception e) {
                e.printStackTrace();
                throw new SecurityException();
            }
        }
        FileDescriptor open = open(file.getAbsolutePath(), i, i2, i3, i4, i5);
        this.mFd = open;
        if (open == null) {
            Log.e("SerialPort", "native open returns null");
            throw new IOException();
        }
        this.mFileInputStream = new FileInputStream(this.mFd);
        this.mFileOutputStream = new FileOutputStream(this.mFd);
    }

    public InputStream getInputStream() {
        return this.mFileInputStream;
    }

    public int readBytes(byte[] bArr) throws IOException {
        try {
            return this.mFileInputStream.read(bArr) & 255;
        } catch (Exception unused) {
            throw new IOException();
        }
    }

    public void writeBytes(byte[] bArr) throws IOException {
        try {
            this.mFileOutputStream.write(bArr);
            this.mFileOutputStream.flush();
        } catch (Exception unused) {
            throw new IOException();
        }
    }

    static {
        System.loadLibrary("serialport");
    }
}
