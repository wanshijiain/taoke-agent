define(function(require, exports, module) {
    var options = {
        page: "#setting_record",
        params: {
            accType:'AUTHCODE'
        }, // 请求参数
        url: 'agent/accountRecord/queryMyAccountDetail',  // 请求地址
        templateId: 'record1' // 模板ID
    };

    function initEvent() {
        var $page = $(options.page);
        if(Core.init.hasInitEvent($page)) return;
        Core.Page.initPage(options);

        $page.on('click', '.item-content', function () {
            var id = $(this).data('id');
            Core.Service.post('agent/accountRecord/queryAccountRecordInfo',{
                id:id
            }, function (data) {
                var $page = $(options.page);
                var html = Core.Template.render('recordDetail', data);
                $page.find('.new_container').html(html);
                $('.updateUser').css('display','block');
            });
        }).on('click', '.close-modal', function () {
            $('.updateUser').css('display','none');
        });
    }

    return exports = {
        init: function () {
            initEvent();
        }
    };
});