var version = "1.0.0",
    versionCode = 100,
    timeOut = 15;//请求超时时间
window.Debug = false;
var basePath = (function () {
    var pagePath = location.href.match(/[a-zA-Z0-9:_./\-]*\/page\//)[0];
    return pagePath.replace('/page/', '/');
})();
var BaseSeajsPref = basePath + 'js/module/page/';
function getParameter(name, url) {
    var value = String(url || location).match(new RegExp('[?&]' + name + '=([^&#]*)([&#]?)', 'i'));
    return value ? value[1] : null;
}
var ServerUrl;
if (location.hostname.indexOf('192') > -1 || location.hostname == "localhost" || location.hostname.indexOf('test') > -1) {
    ServerUrl = "/";
} else {
    ServerUrl = "/";
}
var ImgServerUrl = ServerUrl;
var HomePage = '../home/index.html';
var LoginPage = '../login/login.html';

var Device = (function () {
    var device = {};
    var ua = navigator.userAgent;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

    device.os = "web";
    device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false;
    // Android
    if (android) {
        device.os = 'android';
        device.osVersion = android[2];
        device.android = true;
        device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    }
    // iOS
    if (iphone && !ipod) {
        device.osVersion = iphone[2].replace(/_/g, '.');
        device.iphone = true;
    }
    if (ipad) {
        device.osVersion = ipad[2].replace(/_/g, '.');
        device.ipad = true;
    }
    if (ipod) {
        device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
        device.iphone = true;
    }
    // iOS 8+ changed UA
    if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
        if (device.osVersion.split('.')[0] === '10') {
            device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
        }
    }
    // Webview
    device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);
    // Export object
    return device;
})();

seajs.config({
    base: basePath,
    alias: {
        'jquery': 'static/libs/jquery/jquery-3.1.1.min',
        'core': 'js/core/core',
        'cookie': 'static/libs/jquery-cookie/jquery-cookie-1.4.1.min',
        'md5': 'js/module/common/md5',
        'sha': 'static/libs/others/sha',
        'alisdk': 'js/module/common/AlimamaSDK',
        'welcomescreen':'static/libs/others/welcomescreen'
    }
});

var injectScript = function(url, onload, onerror) {
    var script = document.createElement("script");
    script.onload = onload;
    script.onerror = onerror;
    script.src = url;
    document.head.appendChild(script);
};

document.addEventListener('deviceready', function () {
    console.log("cordova init success");
    window.deviceready = true;
}, false);

var envMod = basePath + 'js/device/browser/cordova';
var adaptorMod = basePath + 'js/core/adaptor/cordovaAdaptor';
if(Device.android) {
    envMod = basePath + 'js/device/android/cordova';
} else if(Device.ios) {
    envMod = basePath + 'js/device/ios/cordova';
}

injectScript(envMod + ".js");
injectScript(adaptorMod + ".js");
injectScript(basePath + 'static/libs/framework7/js/framework7.min.js', function () {
    seajs.use(['jquery', 'core','welcomescreen'], function ($,Core ,welcomescreen) {
        Core.init();
    });
});
