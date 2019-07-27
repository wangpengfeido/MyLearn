package com.example.weexandroid;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;

public class WeexAndroidApplication extends Application {
    public void onCreate() {
        super.onCreate();

        // 初始化WEEX SDK
        InitConfig config = new InitConfig.Builder()
//                .setImgAdapter(new ImageAdapter())
//                .setHttpAdapter(new InterceptWXHttpAdapter())
                .build();
        WXSDKEngine.initialize(this, config);
    }
}
