define(function(require, exports, module) {
    var options = {
        page: "#setting_buyAuthCode"
    };
    var $page;

    function init() {
        Core.Service.post('agent/auth/myHome', {}, function (data) {
            Core.Buyer.setBuyer(data.user);
            $('.remainingCode').text(data.totalCodeCount);
            $('.remainingFund').text(data.totalAmount);
        });
    }

    function initEvent() {
        var $page = $(options.page);
        if (Core.init.hasInitEvent($page)) return;

        $('#codeNum').bind('input propertychange', function() {
            if($(this).val() == 0){
                $('#discount').text('无');
                $('#need').text(0 + '元')
            }
            if($(this).val() == 3){
                $('#discount').text('7折');
                $('#need').text(255.5*3 + '元')
            }
            if($(this).val() == 20){
                $('#discount').text('6折');
                $('#need').text(219*20 + '元')
            }
            if($(this).val() == 200){
                $('#discount').text('5折');
                $('#need').text(182.5*200 + '元')
            }
            if($(this).val() == 500){
                $('#discount').text('4折');
                $('#need').text(146*500 + '元')
            }
        });
        $page.on('click', '.buy-authCode', function () {
            Core.App.confirm('确认购买吗？',function () {
                var codeNum = $("#codeNum").val();
                var params = {
                    count:codeNum
                };
                Core.Service.post('/agent/SysUserCode/buyCode', params, function (data) {
                    Core.App.alert('购买成功！');
                    Core.Service.post('agent/auth/myHome', {}, function (data) {
                        Core.Buyer.setBuyer(data.user);
                        $('.remainingCode').text(data.totalCodeCount);
                        $('.remainingFund').text(data.totalAmount);
                    });
                });
            })
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