/**
 * Created by wenin on 2016/12/27.
 */
define(function(require, exports, module) {
    var options = {
        page: "#setting_changePwd"
    };

    function initEvent() {
        var $page = $(options.page);
        if (Core.init.hasInitEvent($page)) return;

        $page.on('click', '.changePwdBtn', function () {
            var data = Core.App.formToData('.changePwdForm');
            require('md5');
            require('sha');
            if(data.newPwd != data.repeatPwd) {
                Core.App.alert('两次密码不一致，请重新输入');
                $page.find('input[name=repeatPwd]').focus();
                return;
            }
            if (Core.Utils.checkPwd(data.newPwd)) {
                var loginName = Core.Buyer.getBuyer('loginName');
                Core.Service.post('system/SysUser/modifyPwd', {
                    oldPassword: Core.Utils.hmac256(MD5(data["oldPwd"]), loginName),
                    password: Core.Utils.hmac256(MD5(data["newPwd"]), loginName)
                }, function (data) {
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