/**
 * Created by wenin on 2016/12/27.
 */
define(function(require, exports, module) {
    var options = {
        page: "#login_register"
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
        $page.find('.loginName').val(Core.Buyer.getLoginName());
        if (Core.init.hasInitEvent($page)) return;

        $page.on('click', '.sendAuthCode', function () {
            var loginName = $(options.page + ' #loginName').val();
            if (Core.Utils.checkPhone(loginName)) {
                liveTime.call(this, 60);
                Core.Service.post('agent/auth/sendAuthCode.json', {
                    cel: loginName,
                    hasRegister: false
                }, function () {
                    Core.App.alert('短信验证码已经发送成功。');
                }, function (data) {
                    Core.App.alert(data.message, function () {
                        liveTime.call(this, 0);
                    });
                });
            }
            return false;
        }).on('click', '.registerBtn', function () {
            var data = Core.App.formToData('.registerForm');
            if(!Core.Utils.checkPhone(data.loginName) ||
                !Core.Utils.checkAuthCode(data.authCode)) {
                return;
            }
            if(!data.password) {
                Core.App.alert('请输入登录密码');
                return;
            }
            require('md5');
            require('sha');
            data['password'] = Core.Utils.hmac256(MD5(data["password"]), data["loginName"]);
            Core.Service.post('agent/auth/register', data, function () {
                Core.App.alert("恭喜你，注册成功", function () {
                    Core.Page.changePage(HomePage);
                });
            }, function () {
                liveTime.call(this, 0);
            });
            return false;
        });
    }

    return exports = {
        init: function () {
            initEvent();
        }
    };
});