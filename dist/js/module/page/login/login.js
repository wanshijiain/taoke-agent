/**
 * Created by wenin on 2016/12/27.
 */
define(function(require, exports, module) {
    var options = {
        page: "#login_login"
    };

    function initEvent() {
        var $page = $(options.page);
        $page.find('.loginName').val(Core.Buyer.getLoginName());
        if (Core.init.hasInitEvent($page)) return;

        $page.on('click', '.loginBtn', function () {
            var data = Core.App.formToData('.loginForm');
            if (Core.Utils.checkPhone(data.username) && Core.Utils.checkPwd(data.password)) {
                Core.Buyer.Login(data.username, data.password);
            }
        });
    }

    return exports = {
        init: function () {
            initEvent();
        }
    };
});