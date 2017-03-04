define(function(require, exports, module) {
    var options = {
        page: "#home_indexOld"
    };
    var $page;

    function getForm2Data(isCheck) {
        var $page = $(options.page);
        var data = Core.App.formToJSON('#form2') || {};

        if(isCheck) {
            var notNullRules = {
                count: '转码数量',
                targetPhone: '目标账户'
            };

            for(var k in notNullRules) {
                if(!data[k]) {
                    var v = notNullRules[k];
                    Core.App.alert(v + '不能为空', function () {
                        $page.find('input[name="' + k + '"]').focus();
                    });
                    return null;
                }
            }
        }
        return data;
    }
    function init() {
        Core.Service.post('agent/auth/myHome', {}, function (data) {
            Core.Buyer.setBuyer(data.user);
            $('.remaining').text(' ' + data.totalCodeCount + ' ');
        });
    }
    function initEvent() {
        var $page = $(options.page);
        if (Core.init.hasInitEvent($page)) return;

        $page.on('click', '.code-btn', function () {
            Core.App.confirm('确定要转码吗？','温馨提示',function () {
                var data = getForm2Data(true);
                if(data){
                    var confirmNum = $('#confirmNum').val();
                    var targetPhone = $('#targetPhone').val();
                    if(confirmNum == targetPhone){
                        Core.Service.post('agent/SysUserCode/transferCode', data, function (data) {
                            Core.App.alert('转码成功！');
                            Core.Service.post('agent/auth/myHome', {}, function (data) {
                                Core.Buyer.setBuyer(data.user);
                                $('.remaining').text(' ' + data.totalCodeCount + ' ');
                            });
                        });
                    }
                    else{
                        Core.App.alert('两次输入手机号不一致！');
                        return null;
                    }
                }
            })
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