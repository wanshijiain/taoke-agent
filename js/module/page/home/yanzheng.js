define(function(require, exports, module) {
    var options = {
        page: "#home_yanzheng"
    };
    var $page;

    function init() {
        Core.Service.post('agent/auth/myHome', {}, function (data) {
            Core.Buyer.setBuyer(data.user);
            $('.remaining').text(' ' + data.totalCodeCount + ' ');
        });
    }
    function initEvent() {
        var $page = $(options.page);
        if (Core.init.hasInitEvent($page)) return;

        $page.on('click', '.yz', function () {
            var search = $('#param').val();
            if(search){
                var params = {
                    param:search
                };
                Core.Service.post('common/synthesizeCheckoutAgent',params, function (data) {
                    var $page = $(options.page);
                    $('.tmp').css('display','none');
                    var html = Core.Template.render('yanzhengTmp', data);
                    $page.find('.new_container').html(html);
                });
            }
            else {
                Core.App.alert('请填写查询内容！');
            }
        });
        $('input').focus(function () {
            setTimeout(function () {
                $('.page-content').scrollTop(210);
            },500);
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