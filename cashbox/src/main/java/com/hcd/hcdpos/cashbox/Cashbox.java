package com.hcd.hcdpos.cashbox;

import android.util.Log;
import com.hcd.hcdpos.utils.Nodes;
import com.hcd.hcdpos.utils.Util;

/* loaded from: classes.dex */
public class Cashbox {
    public static int CASHBOX_VOL_TYPE_1 = 1;
    public static int CASHBOX_VOL_TYPE_2 = 2;
    public static int CASHBOX_VOL_TYPE_3 = 3;

    public static void doOpenCashBox() {
        String cashBox1 = Nodes.getCashBox1();
        if (!Nodes.isNodeAbnormalString(cashBox1)) {
            Util.writeFile(cashBox1, "100");
        }
        String cashBox2 = Nodes.getCashBox2();
        if (!Nodes.isNodeAbnormalString(cashBox2)) {
            Util.writeFile(cashBox2, "100");
        }
        String cashBox3 = Nodes.getCashBox3();
        if (Nodes.isNodeAbnormalString(cashBox3)) {
            return;
        }
        Util.writeFile(cashBox3, "100");
    }

    public static void doOpenCashBoxVol(int i) {
        String cashBoxVol = Nodes.getCashBoxVol();
        if (Nodes.isNodeAbnormalString(cashBoxVol)) {
            Log.w("HCDPOSJAR.Cashbox", "doOpenCashBoxVol set(" + i + "), but cashBoxVol node abnormal, please check.");
        } else if (CASHBOX_VOL_TYPE_1 == i) {
            Util.writeFile(cashBoxVol, "0");
        } else if (CASHBOX_VOL_TYPE_2 == i) {
            Util.writeFile(cashBoxVol, "1");
        } else if (CASHBOX_VOL_TYPE_3 == i) {
            Util.writeFile(cashBoxVol, "2");
        } else {
            Log.w("HCDPOSJAR.Cashbox", "doOpenCashBoxVol volType:" + i + " unknown, please check.");
        }
    }
}
