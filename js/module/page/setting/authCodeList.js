define(function(require, exports, module) {
    var options = {
        page: "#setting_authCodeList",
        params: {
        }, // 请求参数
        url: 'agent/SysUserCode/queryMyCode',  // 请求地址
        templateId: 'authCodeRec1' // 模板ID
    };

    function initEvent() {
        var $page = $(options.page);
        if(Core.init.hasInitEvent($page)) return;
        Core.Page.initPage(options);

        $page.on('click', '.updateUser-cancel', function () {
            $('.updateUser').css('display','none');
        }).on('click', '.canChange', function () {
            $('.updateUser').css('display','block');
            Core.Cache.setCache('id',$(this).data('id'));
        }).on('click', '.updateUser-btn', function () {
            var phone = $('#phone').val();
            if(Core.Utils.checkPhone(phone)){
                Core.App.confirm('确定更改激活用户吗？', function () {
                    var id = Core.Cache.getCache('id');
                    var params = {
                        phone: phone,
                        id: id
                    };
                    Core.Service.post('agent/SysUserCode/updateCodeUse',params,function () {
                        Core.App.alert('更改成功！');
                        Core.Service.post('agent/SysUserCode/queryMyCode',{}, function (data) {
                            var $page = $(options.page);
                            $('.tmp').css('display','none');
                            var html = Core.Template.render('authCodeRec1', data);
                            $page.find('.page_container').html(html);
                        });
                        $('.updateUser').css('display','none');
                    });
                });
            }
        });
    }

    return exports = {
        init: function () {
            initEvent();
        }
    };
});