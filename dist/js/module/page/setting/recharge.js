define(function(require, exports, module) {
    var options = {
        page: "#setting_recharge"
    };
    var $page;

    function getForm1Data(isCheck) {
        var $page = $(options.page);
        var data = Core.App.formToJSON('#form1') || {};

        if(isCheck) {
            var notNullRules = {
                amountFormat: '转账金额',
                bankName: '转账方式',
                userName:'转账人姓名'
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
        data.userName = Core.Buyer.getBuyer('name');
        return data;
    }

    function initEvent() {
        var $page = $(options.page);
        if (Core.init.hasInitEvent($page)) return;

        Core.Service.post('agent/auth/myHome', {}, function (data) {
            Core.Buyer.setBuyer(data.user);
            $('.totalAmount').text(' ' + data.totalAmount + ' ');
        });

        $page.on('click', '.recharge-sub', function () {
            var data = getForm1Data(true);
            data.image = $('.recharge-img').data('src');
            if(!data.image){
                Core.App.alert('请先上传打款截图！');
                return null;
            }
            if(data){
                Core.Service.post('agent/rechargeApply/save', data, function (data) {
                    Core.App.alert('充值已提交，请耐心等待管理员审核', function () {
                        Core.Page.back();
                    });
                });
            }
        }).on('click', '.sub-Img', function () {
            Core.Native.getPictureFromLib({
                width: 400,
                quality: 80
            }, function (base64) {
                var data = {};
                data.files = [
                    {
                        key:'file',
                        base:base64
                    }
                ];
                Core.Service.postFile('common/fileUploadManager/fileUpdate.json?isTemp=true', data, function (data) {
                    $('.recharge-img').attr('src',data.imageUrl);
                    $('.recharge-img').attr('data-src',data.imageCode);
                });
            });
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
            initEvent();
        }
    };
});