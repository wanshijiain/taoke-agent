define(function(require, exports, module) {
    var options = {
        page: "#home_myInfo"
    };
    var $page;

    function init() {
        Core.Service.post('agent/auth/myHome', {}, function (data) {
            Core.Buyer.setBuyer(data.user);
            $('.remainCount').text(data.totalCodeCount);
            $('.prodCount').text(data.generate);
            if(data.activate){$('.activeCount').text(data.activate);}
            $('.fundCount').text(data.totalAmount);
        });
        var buyer = Core.Buyer.getBuyer();
        $('.userName').text(buyer.name);
        $('.phoneNum').text('手机号：' + buyer.loginName);
        $('.weixinNum').text('微信号：' + buyer.weixin);
        $('.qqNum').text('QQ号：' + buyer.qq);
    }
    function initEvent() {
        var $page = $(options.page);
        if (Core.init.hasInitEvent($page)) return;

        $page.on('click', '.logout', function (e) {
            e.preventDefault();
            Core.Buyer.LoginOut();
            return false;
        }).on('click', '.clearCache', function () {
            Core.Native.clearCache(function () {
                Core.App.alert('清除缓存成功', function () {
                    location.reload();
                });
            });
        });
    }

    return exports = {
        init: function () {
            $page = $(options.page);
            init();
            initEvent();
        }
    };
});