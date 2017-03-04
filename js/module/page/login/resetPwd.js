/**
 * Created by wenin on 2016/12/27.
 */
define(function(require, exports, module) {
    var options = {
        page: "#login_resetPwd"
    };

    var vliveTime = 0;
    var $sendAuthCode;
    function liveTime(time) {
        if (time !== undefined) {
            vliveTime = time;
            $sendAuthCode = $(this);
        }

        if (vliveTime > 0) {
            $sendAuthCode.text("短信验证码(" + (vliveTime) + ")");
            $sendAuthCode.attr("disabled", "disabled");
            vliveTime--;
        } else {
            $sendAuthCode.text("获取短信验证码");
            $sendAuthCode.removeAttr("disabled");
            return;
        }
        setTimeout(liveTime, 1000);
    }

    function initEvent() {
        var $page = $(options.page);
        if (Core.init.hasInitEvent($page)) return;

        $page.on('click', ' .sendAuthCode', function () {
            var loginName = $(options.page + ' #cel').val();
            if (Core.Utils.checkPhone(loginName)) {
                liveTime.call(this, 60);
                Core.Service.post('buyer/auth/sendAuthCode.json', {
                    cel: loginName,
                    hasRegister: true
                }, function () {
                    Core.App.alert('短信验证码已经发送成功。');
                }, function (data) {
                    Core.App.alert(data.message, function () {
                        liveTime.call(this, 0);
                    });
                });
            }
            return false;
        }).on('click', '.resetPwdBtn', function () {
            var data = Core.App.formToData('.resetPwdForm');
            require('md5');
            require('sha');
            if (Core.Utils.checkPhone(data.cel) && Core.Utils.checkPwd(data.newPwd)
                && Core.Utils.checkAuthCode(data.authCode)) {
                Core.Cache.setCache('loginName', data.cel);
                data['newPwd'] = Core.Utils.hmac256(MD5(data["newPwd"]), data["cel"]);
                Core.Service.post('buyer/auth/resetPwd', data, function (data) {
                    Core.App.alert('密码重置成功，请重新登录', function () {
                        Core.Native.loadPage(LoginPage);
                    })
                })
            }
        });
    }

    return exports = {
        init: function () {
            initEvent();
        }
    };
});