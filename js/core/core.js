/**
 * 核心功能
 */
"use strict";

define(function(require, exports, module) {

    require('jquery');

    var $$ = Dom7;
    window.Core = {};
    Core.Dicts = {};

    var needRefreshPage = {
        home_index: true,
        home_home: true,
        home_shengcheng: true,
        home_myInfo: true
    };

    Date.prototype.Format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

// 抽象的运行环境接口
    Core.Native = (function (require, exports) {

        var timeout = 8 * 1000;
        var readyDeferred = $.Deferred();    // 环境初始化的延迟对象
        var start = new Date().getTime(); // 开始时间
        var hasInit = false;

        readyDeferred.done(function () {
            hasInit = true;
            var end = new Date().getTime();
            console.info('核心环境适配器初始化成功。用时[秒]：' + (end - start) / 1000);
        }).fail(function () {
            var end = new Date().getTime();
            Core.App.alert('核心环境适配器初始化失败！');
            console.info('核心环境适配器初始化失败！！！用时[秒]：' + (end - start) / 1000);
        });
        function checkReady() {
            if (!window.envAdaptor) {
                var end = new Date().getTime();
                if(end - start > timeout) {
                    Core.App.confirm('初始化应用失败，是否重启应用？', function () {
                        location.reload();
                    });
                } else {
                    setTimeout(checkReady, 150);
                    console.info('核心环境适配器初始化：waiting envAdaptor...');
                }
            } else if (envAdaptor.isReady()) {
                readyDeferred.resolve();
                console.info('核心环境适配器初始化：isReady');
            } else {
                console.info('核心环境适配器初始化：waiting ready...');
                envAdaptor.ready(function () {
                    readyDeferred.resolve();
                });
            }
        }

        checkReady();

        return exports = {
            init: function (callback) {
                if(hasInit) {
                    envAdaptor.init(callback);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.init(callback);
                    });
                }
            },
            systemCopy: function (key, succ) {
                if(hasInit) {
                    envAdaptor.systemCopy(key, succ);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.systemCopy(key, succ);
                    });
                }
            },
            systemPaste: function (succ) {
                if(hasInit) {
                    envAdaptor.systemPaste(succ);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.systemPaste(succ);
                    });
                }
            },
            getPicture: function (options, succ) {
                if(hasInit) {
                    envAdaptor.getPicture(options, succ);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.getPicture(options, succ);
                    });
                }
            },
            getPictureFromLib: function (options, succ) {
                if(hasInit) {
                    envAdaptor.getPictureFromLib(options, succ);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.getPictureFromLib(options, succ);
                    });
                }
            },
            imagePicker: function (options, succ) {
                if(hasInit) {
                    envAdaptor.imagePicker(options, succ);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.imagePicker(options, succ);
                    });
                }
            },
            openApp: function (type, keyword) {
                if(hasInit) {
                    envAdaptor.openApp(type, keyword);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.openApp(type, keyword);
                    });
                }
            },
            share: function (message, subject, fileOrFileArray, url, succ, fail) {
                if(hasInit) {
                    envAdaptor.share(message, subject, fileOrFileArray, url, succ, fail);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.share(message, subject, fileOrFileArray, url, succ, fail);
                    });
                }
            },
            shareWechat: function (message, subject, fileOrFileArray, type, succ, fail) {
                if(hasInit) {
                    envAdaptor.shareWechat(message, subject, fileOrFileArray, type, succ, fail);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.shareWechat(message, subject, fileOrFileArray, type, succ, fail);
                    });
                }
            },
            reLogin:function(){
                Core.Buyer.LoginOut();
            },
            alert: function () {
                Core.App.alert(arguments);
            },
            onLogin: function(userInfo) {
                if(hasInit) {
                    envAdaptor.onLogin(userInfo);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.onLogin(userInfo);
                    });
                }
            },
            getPackageInfo: function(callback) {
                if(hasInit) {
                    envAdaptor.getPackageInfo(callback);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.getPackageInfo(callback);
                    });
                }
            },
            clearCache: function (succ) {
                if(hasInit) {
                    envAdaptor.clearCache(succ);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.clearCache(succ);
                    });
                }
            },
            openBrowser: function (url, succ) {
                if(hasInit) {
                    envAdaptor.openBrowser(url, succ);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.openBrowser(url, succ);
                    });
                }
            },
            loadPage: function (options) {
                if(hasInit) {
                    envAdaptor.loadPage.call(this, options);
                } else {
                    var that = this;
                    readyDeferred.done(function () {
                        envAdaptor.loadPage.call(that, options);
                    });
                }
            },
            setTitle: function (options) {
                if(hasInit) {
                    envAdaptor.setTitle.call(this, options);
                } else {
                    var that = this;
                    readyDeferred.done(function () {
                        envAdaptor.setTitle.call(that, options);
                    });
                }
            },
            back: function (options, succ, fail) {
                if(hasInit) {
                    envAdaptor.back(options, succ, fail);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.back(options, succ, fail);
                    });
                }
            },
            exit: function (options, succ, fail) {
                if(hasInit) {
                    envAdaptor.exit(options, succ, fail);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.exit(options, succ, fail);
                    });
                }
            },
            splashscreen: function (action, succ, fail) {
                if(hasInit) {
                    envAdaptor.splashscreen(action, succ, fail);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.splashscreen(action, succ, fail);
                    });
                }
            },
            getTbIdForUrl: function (url, secc, fail) {
                if(hasInit) {
                    envAdaptor.getTbIdForUrl(url, secc, fail);
                } else {
                    readyDeferred.done(function () {
                        envAdaptor.getTbIdForUrl(url, secc, fail);
                    });
                }
            },
            getGoodId: function (url, type, secc, fail) {
                if(typeof type === 'function') {
                    fail = secc;
                    secc = type;
                    type = null;
                }
                var idx = -1;
                if(!url || (idx = url.indexOf('http')) == -1) {
                    Core.App.alert('请输入合法的商品链接');
                    return;
                } else if(idx > 0) {
                    url = url.substring(idx);
                }
                url = url.replace(/[^a-zA-Z0-9\&%_\./-~-](.*)?/g, '');
                var goodId = null;
                if(type == 'JD') {
                    var exec = /\/(\d+).htm/i.exec(url);
                    goodId = exec && exec[1];
                } else {
                    goodId = getParameter('id', url);
                    if(!goodId) {
                        Core.App.showIndicator();
                        Core.Native.getTbIdForUrl(url, function (goodId, goodType, goodUrl) {
                            Core.App.hideIndicator();
                            typeof secc === 'function' && secc(goodId, goodType, goodUrl);
                        }, function (errMsg) {
                            Core.App.hideIndicator();
                            if(typeof fail === 'function') {
                                fail(errMsg);
                            } else {
                                Core.App.alert(errMsg);
                            }
                        });
                        return;
                    }
                }
                typeof secc === 'function' && secc(goodId);
            }
        };
    })();

    /**
     *
     * @type {{postJson, post, get, postFile}}
     */
    Core.Service = (function () {
        var errTip = false;
        /**
         * 成功返回
         * @param data
         * @param succ
         * @param fail
         * @returns {boolean}
         */
        var succCallBack = function (data, succ, fail) {
            console.log(data);
            if ('code' in data) {
                if (data['code'] === 0) {
                    if ('buyer' in data) {
                        Core.Buyer.setBuyer(data['buyer']);
                    }
                    if (data.result && data.result['buyer']) {
                        Core.Buyer.setBuyer(data.result['buyer']);
                    }
                    succ(data.result);
                } else {
                    if (data['code'] === 401) {
                        if (!errTip) {
                            errTip = true;
                            setTimeout(function () {
                                errTip = false;
                            }, 1500);
                            Core.Page.changePage(LoginPage);
                        }
                        $.isFunction(fail) && fail(data);
                        return false;
                    }

                    if ($.isFunction(fail)) {
                        fail(data);
                    } else {
                        Core.App.alert(data['message']);
                    }

                    return false;
                }
            } else {
                succ(data);
            }
        };
        /**
         * 请求失败返回
         * @param error
         * @param fail
         * @returns {boolean}
         */
        var errorCallBack = function (error, fail) {
            if (!errTip) {
                errTip = true;
                setTimeout(function () {
                    errTip = false;
                }, 1500);
                Core.App.alert('请求服务失败');
            }

            if (typeof(fail) === 'function') {
                fail(error);
                return false;
            }
        };

        var _getServerUrl = function (url) {
            return url.indexOf('/') == 0 || url.indexOf('http') == 0 ? url : ServerUrl + url;
        };

        var _postForm = function (url, data, succ, fail) {
            var progerss = $('<progress value="0" max="100"></progress>');
            Core.App.modal({
                title: '',
                text: '正在上传图片<br/><div id="uploadprogress"></div>',
                buttons: []
            });
            $("#uploadprogress").html(progerss);
            /**
             * 上传进度
             * @param evt
             */
            function uploadProgress(evt) {
                if (evt['lengthComputable']) {
                    var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                    progerss.val(percentComplete);
                    console.log(percentComplete);
                }
            }

            /**
             * 上传成功
             * @param evt
             */
            function uploadComplete(evt) {
                Core.isLoading = false;
                Core.App.closeModal();
                Core.App.hideIndicator();
                Core.App.pullToRefreshDone();
                var data = JSON.parse(evt.target.responseText);
                succCallBack(data, succ, fail);
            }

            /**
             * 上传失败
             * @param evt
             */
            function uploadFailed(evt) {
                Core.App.closeModal();
                Core.App.hideIndicator();
                Core.App.pullToRefreshDone();
                errorCallBack(evt, fail);
            }

            var fd = new FormData();

            $.each(data, function (key, v) {
                if ("files" == key) {
                    $.each(v, function (k1, v1) {
                        var base64 = v1.base;
                        if (base64 && base64.indexOf('base64') > -1) {
                            console.log(base64);
                            var myBlob = new Blob([base64], {
                                type: 'image/png'
                            });
                            fd.append(v1.key, myBlob);
                        }
                    });
                } else {
                    if ($.isArray(v)) {
                        $.each(v, function (i1, v1) {
                            fd.append(key, v1);
                        });
                    } else {
                        fd.append(key, v);
                    }
                }
            });
            var xhr = new XMLHttpRequest();
            xhr.upload.addEventListener("progress", uploadProgress, false);
            xhr.addEventListener("load", uploadComplete, false);
            xhr.addEventListener("error", uploadFailed, false);
            xhr.open("POST", url);
            //xhr.setRequestHeader("Content-Type","application/json");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send(fd);
        };
        var ajaxLoadingUrl = {};
        var _ajax = function (url, data, type, succ, fail) {
            url = _getServerUrl(url);
            if (ajaxLoadingUrl[url]) {
                return;
            }
            if(data && data.bg) {
                delete data.bg;
            } else {
                Core.App.showIndicator();
            }
            ajaxLoadingUrl[url] = true;
            setTimeout(function () {
                ajaxLoadingUrl[url] = false;
            }, 200);
            var contentType = 'application/x-www-form-urlencoded';
            //if (type == "POST") {
            //    contentType = "application/json";
            //    data = JSON.stringify(data);
            //}
            if (type == "postFile") {
                contentType = "multipart/form-data";
                _postForm(url, data, succ, fail);
                return false;

            }

            if (type == "postJson") {
                contentType = "application/json";
                data = JSON.stringify(data);
                type = "POST";
            }

            $.ajax({
                url: url,
                type: type,
                data: data,
                headers: {
                    "Accept": "application/json"
                },
                contentType: contentType,
                dataType: 'json',
                timeout: timeOut * 1000,
                traditional: true,
                beforeSend: function () {
                },
                statusCode: {
                    404: function () {
                        Core.App.alert("请求服务地址不存在");
                    }
                },
                success: function (data) {
                    try {
                        succCallBack(data, succ, fail);
                    } catch (e) {
                        console.error(e);
                    }
                },
                error: function (error) {
                    try {
                        errorCallBack(error, fail);
                    } catch (e) {
                        console.error(e);
                    }
                },
                complete: function () {
                    delete ajaxLoadingUrl[url];
                    Core.App.hideIndicator();
                    Core.App.pullToRefreshDone();
                }
            });
        };
        var postJson = function (url, data, succ, fail) {
            _ajax(url, data, 'postJson', succ, fail);
        };
        var post = function (url, data, succ, fail) {
            _ajax(url, data, 'POST', succ, fail);
        };
        var _get = function (url, data, succ, fail) {
            _ajax(url, data, 'GET', succ, fail);
        };
        var postFile = function (url, data, succ, fail) {
            _ajax(url, data, 'postFile', succ, fail);
        };

        return {
            postJson: postJson,
            post: post,
            get: _get,
            postFile: postFile
        }
    })();


    Core.Utils = (function () {
        var checkPhone = function (value) {
            var tel = /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
            if (!tel.test(value)) {
                Core.App.alert("请输入正确的手机号码");
                return false;
            }
            return true;
        };
        var checkPwd = function (value) {
            if (!value || value.length < 6 || value.length > 20) {
                Core.App.alert("请输入6-20位密码");
                return false;
            }
            return true;
        };
        var checkAuthCode = function (value) {
            var reg = /^[0-9]{4,6}$/;
            if (!reg.test(value)) {
                Core.App.alert("请输入4位短信验证码");
                return false;
            }
            return true;
        };
        var checkCaptcha = function (value) {
            var reg = /^[0-9]{4,5}$/;
            if (!reg.test(value)) {
                Core.App.alert("请输入正确图形验证码");
                return false;
            }
            return true;
        };
        var hmac256 = function (data, salt) {
            require('sha');
            var hashObj = new jsSHA("SHA-256", "TEXT");
            if (salt) {
                hashObj.setHMACKey(salt, "TEXT");
            }
            hashObj.update(data);
            return hashObj.getHMAC("B64");
        };
        var getPwd = function (pwd, phone) {
            require('md5');
            var salt = new Date().Format("yyyyMMddhhmmss");
            return {
                salt: salt,
                password: Core.Utils.hmac256(Core.Utils.hmac256(MD5(pwd), phone), salt)
            };
        };
        var getBasePwd = function (pwd, phone) {
            require('md5');
            return Core.Utils.hmac256(MD5(pwd), phone);
        };
        function verCodeToInt(verCode) {
            if (!verCode) {
                return 0;
            }
            verCode += '';
            var split = verCode.split('.');
            var verInt = 0;
            for (var i = 0; i < 3; i++) {
                verInt = verInt * 10 + (split[i] || 0);
            }
            return verInt;
        }
        function checkUpdate() {
            if (basePath.indexOf('http') == 0) {
            }
        }

        return {
            checkPhone: checkPhone,
            checkPwd: checkPwd,
            checkAuthCode: checkAuthCode,
            hmac256: hmac256,
            getBasePwd: getBasePwd,
            getPwd: getPwd,
            verCodeToInt: verCodeToInt,
            checkCaptcha: checkCaptcha,
            checkUpdate: checkUpdate,
            toDate: function (time) {
                if (!time) {
                    return '';
                }
                var date = null;
                var t = typeof time;
                if (t === 'date') {
                    date = time;
                } else if (t === 'number') {
                    date = new Date(time);
                } else {
                    try {
                        date = new Date(time.toString().replace(/-/g, '/'));
                    } catch (e) {
                    }
                }
                return date;
            },
            formatByteSize: function (value) {
                if (!value) {
                    return "0 Bytes";
                }
                var unitArr = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
                var index = 0;
                var quotient = parseFloat(value);
                while (quotient > 1024) {
                    index += 1;
                    quotient = quotient / 1024;
                }
                return quotient.toFixed(2) + " " + unitArr[index];
            },
            clearEmptyValue: function (options) {
                if (options) {
                    $.each(options, function (k, v) {
                        if (v === undefined || v === null || v === "") {
                            delete options[k];
                        }
                    });
                }
                return options;
            },
            checkLastRunTime: function (type, autoRun, intervalSecond) {
                if (typeof autoRun === 'number') {
                    intervalSecond = autoRun;
                    autoRun = true;
                } else if (autoRun === undefined) {
                    autoRun = true;
                }
                intervalSecond || (intervalSecond = 24 * 60 * 60 * 1000);
                var key = 'lastRunTime_' + type;
                var lastRunTime = Core.Cache.getCache(key);
                var hasRun = true;
                if (!lastRunTime || lastRunTime + intervalSecond < new Date().getTime()) {
                    hasRun = false;
                    autoRun && Core.Cache.setCache(key, new Date().getTime());
                }
                return hasRun;
            },
            getActivityId: function (url) {
                return getParameter('activity_id', url) || getParameter('activityId', url) || '';
            },
            daysToEnd: function (endTime) {
                var endDate = Core.Utils.toDate(endTime);
                if(!endDate) {
                    return '';
                }
                var now = new Date();
                now = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                return parseInt((endDate.getTime() - now.getTime()) / 1000 / 60 / 60 / 24) + 1;
            },
            getConfigForStr: function(configStr) {
                configStr = configStr || '';
                var configs = {};
                $.each(configStr.split(';'), function (i, config) {
                    var arr = config.split('=');
                    if(arr.length != 2) {
                        return;
                    }
                    configs[arr[0].trim()] = arr[1].trim();
                });
                return configs;
            },
            getStrForConfig: function (config) {
                var arr = [];
                $.each(config || {}, function (n, v) {
                    arr.push(n + '=' + v);
                });
                return arr.join(';');
            }
        }
    })();

    /**
     * 模板编译
     * @type {{render}}
     */
    Core.Template = (function () {
        var toDate = Core.Utils.toDate;
        function formatDate(time, format) {
            if (!time) {
                return "";
            }
            return toDate(time).Format(format || "yyyy-MM-dd hh:mm:ss");
        }
        var init = function () {
            Template7.registerHelper('json', function (data) {
                return JSON.stringify(data);
            });
            Template7.registerHelper('pic', function (url) {
                return ImgServerUrl + 'files/' + url;
            });
            Template7.registerHelper('tbPic', function (url, size) {
                return url + (typeof size === 'string' ? size : '_240x240');
            });
            Template7.registerHelper('smallPic', function (url, isbkg) {
                if (!url) {
                    return "";
                }
                var lastIndexOf = url.lastIndexOf('.');
                var fullUrl = ImgServerUrl + 'files/' + url.substring(0, lastIndexOf) + '_small' + url.substring(lastIndexOf);
                return !isbkg ? fullUrl : 'background: url(' + fullUrl + ') no-repeat; background-size: 100% 100%;';
            });
            Template7.registerHelper('avatar', function (url) {
                if (url) {
                    return url.indexOf('http') == 0 ? url : (ImgServerUrl + 'files/' + url);
                } else {
                    return ImgServerUrl + 'web/static/images/touxiang.png';
                }
            });
            Template7.registerHelper('dict', function (type, state, defVal) {
                var dicts = Core.Dicts[type];
                $.isPlainObject(defVal) && (defVal = '未知状态');
                return dicts && dicts[state] || defVal;
            });
            Template7.registerHelper('date', function (time) {
                return formatDate(time, "yyyy-MM-dd");
            });
            Template7.registerHelper('dtime', function (time) {
                return formatDate(time, 'yyyy-MM-dd hh:mm:ss');
            });
            Template7.registerHelper('daysToEnd', function (endTime) {
                var daysToEnd = Core.Utils.daysToEnd(endTime);
                return daysToEnd > 0 ? '<span>剩余' + daysToEnd + '天</span>' : '<span class="color-red">已过期</span>';
            });
            Template7.registerHelper('num', function (now, full) {
                return now || 0;
            });
            Template7.registerHelper('commission', function (comm) {
                return (comm || 0) * 10;
            });
            Template7.registerHelper('encrypt', function (code) {
                code = code.substring(0, 2) + '****' + code.substring(6,8);
                return code;
            });
            Template7.registerHelper('getActivityId', function (url) {
                return Core.Utils.getActivityId(url);
            });
            Template7.registerHelper('getIcon', function (type) {
                var iconClass = type == 'TM' ? 'icon-tianmao' : 'icon-taobao1';
                if(iconClass) {
                    return '<i class="iconfont ' + iconClass + '"></i>';
                }
                return '';
            });
        };

        function getTplKey(id) {
            return '_tpl__' + id;
        }

        var tempCaches = {};
        /**
         * 模板展示，返回编译好的html
         * @param domId {string} 模板的id
         * @param data  {object|json} 模板的数据
         * @returns {html}
         */
        var render = function (domId, data) {
            var cache = tempCaches[domId];
            if(!cache) {
                try {
                    var template = localStorage[getTplKey(domId)] || $('#' + domId).html();
                    if(!template) {
                        Core.App.alert('获取不到模板：' + domId);
                        return;
                    }
                    var compiledTemplate = Template7.compile(template);
                    console.log('编译模板缓存：' + domId);

                    // 清缓存，减少内存占用
                    cache = {
                        id: domId,
                        count: 1,
                        fn: compiledTemplate
                    };
                    var length = 0;
                    var minId = null, minCount = 999;
                    for (var id in tempCaches) {
                        length++;
                        var tmpCache = tempCaches[id];
                        if (tmpCache.count < minCount) {
                            minCount = tmpCache.count;
                            minId = id;
                        }
                    }
                    if (minId && length >= 12) {
                        console.log('删除模板缓存：' + minId);
                        delete tempCaches[minId];
                    }
                    tempCaches[domId] = cache;
                } catch (e) {
                    console.log(e);
                }
            } else {
                cache.count += 1;
            }
            return cache.fn(data);
        };

        return {
            init: init,
            render: render
        }
    })();


    Core.Cache = (function () {
        /**
         * 设置缓存
         */
        var setCache = function (id, data, isTmp) {
            if (typeof data == "object") {
                data = JSON.stringify(data);
            }
            if(isTmp) {
                sessionStorage.setItem(id, data);
            } else {
                localStorage.setItem(id, data);
            }
        };
        /**
         * 获取缓存
         * @param id
         */
        var getCache = function (id, isTmp) {
            try {
                var item = isTmp ? sessionStorage.getItem(id) : localStorage.getItem(id);
                if(item && item.length > 1 && (item.charAt(0) == '{' || item.charAt(0) == '[')) {
                    return JSON.parse(item);
                } else {
                    return item;
                }
            } catch (e) {
                return '';
            }
        };

        function clearData() {
            sessionStorage.clear();
            var length = localStorage.length;
            var removeKeys = [];
            var i;
            for(i = 0; i < length; i++) {
                var key = localStorage.key(i);
                if(key.length && key.charAt(0) != '_') {
                    removeKeys.push(key);
                }
            }
            for(i = 0; i < removeKeys.length; i++) {
                localStorage.removeItem(removeKeys[i]);
            }
        }

        return {
            setCache: setCache,
            getCache: getCache,
            clearData: clearData
        }
    })();

    Core.Params = (function () {
        var paramsKey = 'query_params';
        var App;
        return App = {
            set: function (type, params, clear) { // 设置参数
                if (arguments.length == 1) {
                    params = type;
                    type = null;
                }
                if (!type) {
                    type = "__";
                }
                var data = {};
                if (clear !== true) {
                    data = Core.Cache.getCache(paramsKey) || {};
                }
                data[type] = params;
                Core.Cache.setCache(paramsKey, data);
            },
            get: function (type) {   // 获取参数
                if (!type) {
                    type = "__";
                }
                var data = Core.Cache.getCache(paramsKey);
                return data && data[type];
            },
            getAll: function () {    // 获取所有参数
                Core.Cache.getCache(paramsKey);
            },
            clear: function () { // 清除参数
                Core.Cache.setCache(paramsKey, {});
            }
        }
    })();

    Core.Buyer = (function () {
        var setBuyer = function (buyer) {
            Core.Cache.setCache('buyer', buyer || {}, true);
        };

        /**
         * 退出登陆
         */
        var LoginOut = function () {
            Core.Service.post('agent/auth/logout', {}, function () {
                var phone = Core.Cache.getCache('loginName') || '';
                Core.Cache.clearData();
                Core.Cache.setCache('loginName', phone);
                Core.Page.changePage({
                    url: LoginPage,
                    reload: true
                });
            });
        };

        /**
         * 登陆
         */
        var Login = function (phone, pwd) {
            Core.Cache.setCache('loginName', phone || '');
            var pwdObj = Core.Utils.getPwd(pwd, phone);
            Core.Service.post('agent/auth/login', {
                username: phone,
                password: pwdObj.password,
                verLevel: "2",
                salt: pwdObj.salt,
                devMac: "",
                rememberMe: true
            }, function () {
                require('jquery');
                require('cookie');
                $.cookie.raw = true;
                Core.Cache.setCache('phone', phone);
                Core.Cache.setCache("cookie", $.cookie('rememberMeTaoke'));
                Core.Page.changePage(HomePage);
            });
        };

        var TypeConfig = {
            ID: {
                propName: 'id',
                name: '身份证信息',
                boundPage: 'boundId.html'
            },
            BK: {
                propName: 'banks',
                name: '银行卡信息',
                boundPage: '../setting/boundBank.html'
            },
            TB: {
                propName: 'taobaos',
                name: '淘宝账号',
                boundPage: '../setting/boundTb.html'
            },
            JD: {
                propName: 'jds',
                name: '京东账号',
                boundPage: '../setting/boundJd.html'
            },
            TM: {
                propName: 'taobaos',
                name: '淘宝账号',
                boundPage: '../setting/boundTb.html'
            }
        };

        var getBuyer = function (check, type, propName) {
            if (typeof check !== 'boolean') {
                propName = type;
                type = check;
                check = false;
            }

            var buyer = Core.Cache.getCache('buyer', true);
            var rst = null;
            var config = null;
            config = TypeConfig[type];
            if (buyer) {
                if (type) {
                    if (!config) {
                        config = {
                            propName: type
                        };
                    }
                    rst = buyer[config.propName];
                } else {
                    rst = buyer;
                }
            }
            if (check) {
                if (!buyer) {
                    Core.App.confirm("此功能需要登录后才能查看，是否登录？", function () {
                        Core.Page.changePage(LoginPage);
                    });
                    return false;
                }
                if (!rst) {
                    Core.App.alert('请先绑定' + config.name, function () {
                        Core.Page.changePage(config.boundPage);
                    });
                    return false;
                } else if (undefined !== rst.state && rst.state != 'S') {
                    Core.App.alert(config.name + '未审核通过，请通过后再试');
                    return false;
                }
            }
            if (rst && propName) {
                return $.isArray(rst) ? (rst[0] && rst[0][propName]) : rst[propName];
            } else {
                return $.isArray(rst) ? rst[0] : rst;
            }
        };

        return {
            init: function () {
                $.cookie.raw = true;
                var item = localStorage.getItem("cookie");
                item && $.cookie('rememberMeTaoke', item, {expires: 7, path: '/'});
            },
            Login: Login,
            LoginOut: LoginOut,
            setBuyer: setBuyer,
            getBuyer: getBuyer,
            getLoginName: function () {
                return Core.Cache.getCache('loginName') || '';
            }
        }

    })();

    Core.Page = (function () {
        var defaultLoadOptions = {
            autoLoad: true,
            page: null,   // 页面ID
            container: '.page_container',  // 结果显示容器
            params: {}, // 请求参数
            url: null,  // 请求地址
            templateId: null,   // 模板ID
            action: 'append',   // 列表操作方式
            updateParams: null,   // 更新参数函数
            dataFilter: null,   // 数据过滤器
            success: null    // 成功后处理函数
        };
        var notNullLoadKeys = ["page", "url"];
        var isPageLoading = false;

        function pageHandler(options, optAction, seccCallBack) {
            typeof optAction === 'boolean' && (optAction = optAction && 'init' || null);
            var o = $.extend({}, defaultLoadOptions, options);
            $.each(notNullLoadKeys, function (i, v) {
                if (!o[v]) {
                    Core.App.alert('参数[' + v + ']不能为空，请联系管理员');
                    return;
                }
            });
            var $page = typeof o.page === 'string' ? $(o.page) : o.page;
            var $container = typeof o.container === 'string' ? $page.find(o.container).last() : o.container;
            if (!$container || $container.length == 0) {
                Core.App.alert('参数[page, container]传值不正确，请联系管理员');
                return;
            }
            if (!$container[o.action]) {
                Core.App.alert('参数[action]传值不正确，请联系管理员');
            }
            var $content = $page.find('.page-content');
            if (!$content) {
                Core.App.alert('找不到[.page-content]，请联系管理员');
            }
            var seccFun = $.isFunction(seccCallBack) && seccCallBack || null;
            var params = o.params || {};
            if ('clear' === optAction) {
                $container.empty();
                $content.removeClass('no-result');
                seccFun && seccFun();
                return;
            }
            if ('initPage' === optAction) {
                var $refresh = $page.find('.pull-to-refresh-content');
                $refresh && $refresh.on('refresh', function () {
                    $content.removeClass('no-result');
                    pageHandler(options, 'init');
                    // 加载完毕需要重置
                    Core.App.pullToRefreshDone();
                });
                var $infinite = $page.find('.infinite-scroll');
                $infinite && $infinite.on('infinite', function () {
                    pageHandler(options);
                });
                params.pageSize == null && (params.pageSize = 10);
                if (!o.autoLoad) {
                    return;
                }
                optAction = 'init'; // 加载完成后，自动加载数据
            }
            var infiniteContent = $page.find(".infinite-scroll");
            if ('init' === optAction) {
                $.isFunction(o.updateParams) && o.updateParams();
                params.page = 1;
                infiniteContent && Core.App.attachInfiniteScroll(infiniteContent);
                $container.empty();
            }
            if (isPageLoading) return;
            var preloader = $page.find('.infinite-scroll-preloader');
            preloader && preloader.show();
            isPageLoading = true;
            setTimeout(function () {
                isPageLoading = false;
            }, 1200);
            $content.removeClass('no-result');
            var dataHandler = function (data) {
                if ($.isFunction(o.dataFilter)) {
                    data = o.dataFilter(data);
                }
                var html = '';
                if ('totalPages' in data) {
                    if (data['totalPages'] == 0) {
                        $content.addClass('no-result');
                    } else {
                        params.page++;
                        html = Core.Template.render(o.templateId, data);
                        $container[o.action](html);
                        if (data['number'] === data['totalPages']) {
                            infiniteContent && Core.App.detachInfiniteScroll(infiniteContent);
                        }
                    }
                } else {
                    html = Core.Template.render(o.templateId, data);
                    $container['html'](html);
                }
                preloader && preloader.hide();
                isPageLoading = false;
                seccFun && seccFun();
                o.success && o.success();
            };
            var reqErrHanlder = function (data) {
                preloader && preloader.hide();
                if(data && data.code == 1) {
                    Core.App.alert(data['message'], function () {
                        Core.mainView.back();
                    });
                }
            };
            var reqHandler = o.reqHandler || Core.Service.post;
            reqHandler(o.url, params, dataHandler, reqErrHanlder);
        }

        return {
            changePage: Core.Native.loadPage,
            back: Core.Native.back,
            loadPage: pageHandler,
            clearPage: function (options, seccCallBack) {
                pageHandler(options, 'clear', seccCallBack);
            },
            initPage: function (options, seccCallBack) {
                pageHandler(options, 'initPage', seccCallBack);
            }
        }
    })();

    Core.initDeferred = $.Deferred();
    Core.init = (function (require, exports) {
        var coreInit = false;
        function init(callback) {
            if (coreInit) {
                return;
            }
            coreInit = true;
            console.log("核心Core初始化成功");

            function getImageConfig($that, count) {
                var quality = $that.data('quality') || 80;
                var width = $that.data('width') || null;
                var height = $that.data('height') || null;
                return {
                    count: count || 1,
                    width: width,
                    height: height,
                    quality: quality
                }
            }

            function updateImageInput($that, file) {
                var base64 = file['img'];

                var $input = $that.children('input');
                $input.data('base64', base64);
                $input.data('date', file['date']);

                var $img = $that.find('img');
                if($img.length) {
                    $img.attr('src', base64);
                } else {
                    $that.attr("style",
                        'background:url("' + base64 + '"); background-size: 100% 100%;'
                    );
                }
            }

            var isInputFile = false;
            $$(document)
                .on('click', 'a, .href-link', function (e) {
                    var $that = $(this);
                    var url = $that.attr('href') || $that.data('href');
                    if (!url) {
                        return;
                    }
                    if (url === "#" || $that.is('.back, .future-link, .tab-link')) {
                        e.preventDefault();
                        return;
                    }
                    e.preventDefault();
                    e.stopPropagation();
                    Core.Page.changePage.call($(e.target).closest('a, .href-link'), url);
                }, true)
                .on('click', '.back', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("back");
                    Core.Page.back();
                    return false;
                })
                .on('click', '.systemCopy', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var text = $(this).data('text');
                    var tips = $(this).data('tips');
                    Core.Native.systemCopy(text + "", function () {
                        Core.App.alert(tips || '复制成功');
                    });
                    return false;
                })
                .on('click', '.input-file', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    isInputFile = true;
                    setTimeout(function() {
                        isInputFile = false;
                    }, 1500);
                    var $that = $(this);
                    var options = getImageConfig($that);
                    Core.Native.imagePicker(options, function (files) {
                        var file = files[0];
                        updateImageInput($that, file);
                    });
                }, true)
                .on('click', '.batch-input-file', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if(isInputFile) {
                        return;
                    }
                    var $that = $(this);
                    $that.is('a, button') && ($that = $that.parent());
                    var inputFiles = $that.find(".input-file");
                    var count = inputFiles.length;
                    var options = getImageConfig($that, count);
                    Core.Native.imagePicker(options, function (files) {
                        $.each(files, function(i, file) {
                            var $that = inputFiles.eq(i);
                            updateImageInput($that, file);
                        });
                    });
                }, true)
                .on('click', '.openApp', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var keyword = $(this).data('val');
                    var type = $(this).data('type');
                    Core.Native.systemCopy(keyword);
                    Core.Native.openApp(type);
                }, true)
                .on('click', '.future-link', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    Core.App.alert('功能在开发计划中，敬请期待……');
                }, true);

            Core.App = new Framework7({
                init: false,
                router: false,
                pushState: true,
                pushStatePreventOnLoad: false,
                animatePages: false,
                modalButtonOk: '确认',
                modalButtonCancel: '取消',
                modalUsernamePlaceholder: '用户名',
                modalPasswordPlaceholder: '密码',
                modalTitle: '温馨提示',
                smartSelectBackText: '返回',
                smartSelectPopupCloseText: '关闭',
                smartSelectPickerCloseText: '完成'
            });

            if(window.Debug) {
                var listeners = ['pageBeforeInit', 'pageInit', 'pageReinit', 'pageBeforeAnimation',
                    'pageAfterAnimation', 'pageBeforeRemove', 'pageBack', 'pageAfterBack'];

                var echoListener = function(e) {
                    console.info(e.type, e.detail.page.name, e);
                };

                $.each(listeners, function (i, eventName) {
                    Dom7(document).on(eventName, echoListener);
                });
            }

            $$(document).on('pageInit', function (e) {
                var page = e.detail.page;
                if(!page || !page.name || $(page.container).hasClass('no-js')) {
                    return;
                }
                var name = page.name;
                if(needRefreshPage[name] && name !== 'home_index') {
                    return;
                }
                seajs.use(BaseSeajsPref + name.replace(/_/g, '/'), function (App) {
                    App && $.isFunction(App.init) && App.init();
                });
            }).on('pageBeforeAnimation', function (e) {
                var page = e.detail.page;
                if(!page || !page.name || $(page.container).hasClass('no-js')) {
                    return;
                }
                var name = page.name;
                if(!needRefreshPage[name]) {
                    return;
                }
                seajs.use(BaseSeajsPref + name.replace(/_/g, '/'), function (App) {
                    App && $.isFunction(App.init) && App.init();
                });
            });

            Core.mainView = Core.App.addView('.view-main', {
                domCache: true,
                dynamicNavbar: false
            });

            $('#start-overlay').remove();

            Core.App.init();
            Core.Template.init();
            Core.Native.init(callback);
            Core.Buyer.init();
            Core.initDeferred.resolve();
        }

        function hasInit(target, eventName) {
            if (!target) return true;
            var $target = $(target);
            if (!$target.length) return true;
            var hasInit = $target.data(eventName);
            if (!hasInit) {
                $target.data(eventName, true);
            }
            return hasInit;
        }

        return exports = $.extend(init, {
            hasInitEvent: function (target) {
                return hasInit(target, 'init-event');
            }
        });
    })();

    Core.SwiperUtils = (function (require, exports) {
        var map = {};
        return exports = {
            init: function (container, callback) {
                $(container).find('.page').each(function () {
                    var $page = $(this);
                    if(!$page || !$page.is('.page') || !$page.attr('id')) {
                        Core.App.alert('初始化引导页，需要指定page的id');
                        return false;
                    }
                    var id = "#" + $page.attr('id');
                    $page.closest('.view').on('show', function () {
                        map[id] = new Swiper(id + ' .swiper-container', {
                            preloadImages: false,
                            lazyLoading: true,
                            pagination: id + ' .swiper-pagination',
                            nextButton: id + ' .swiper-button-next',
                            prevButton: id + ' .swiper-button-prev'
                        })
                    });

                    $(".swiper-finsh").click(function () {
                        var pageId = $(this).closest('.page').attr('id');
                        Core.App.showTab('.view-main');
                    });
                });
                $.isFunction(callback) && callback();
            },
            showSwiper: function (id) {
                var $page = $(id);
                if(!$page || !$page.is('.page')) {
                    Core.App.alert('显示引导页，需要指定page的id');
                    return false;
                }
                if(id && map[id]) {
                    map[id].slideTo(0);
                }
                $page.removeClass('cached');
                var viewId = $page.closest('.view').attr('id');
                if(!viewId) {
                    Core.App.alert('显示引导页，需要标上page对应view的id');
                    return false;
                }
                Core.App.showTab("#" + viewId);
            }
        }
    })();

    Core.ready = function (callback) {
        Core.initDeferred.done(callback);
    };

    return Core;
});