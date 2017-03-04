define(function(require, exports, module) {
    var options = {
        page: "#home_index",
        'pagination':false
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
        var welcomescreen_slides = [
                {
                    id: 'slide0',
                    picture: '<div class="tutorialicon"><img src="/agents-web/static/img/welcome2.jpg"></div>'
                }
            ];
        welcomescreen = Core.App.welcomescreen(welcomescreen_slides, options);
        setTimeout(function () {
            welcomescreen.close();
        },5000);
        if(!Core.Cache.getCache('old')){
            $('.help-modal').css('display','block');
        }

        $page.on('click', '.code-pro', function () {
            var userNum = $('#userNum').val();
            if(Core.Utils.checkPhone(userNum)){
                Core.App.confirm('确定激活此用户吗？', function () {
                    Core.Service.post('agent/SysUserCode/generateMyCode', {
                        phone:userNum
                    },function () {
                        Core.Service.post('agent/auth/myHome', {}, function (data) {
                            Core.Buyer.setBuyer(data.user);
                            $('.remaining').text(' ' + data.totalCodeCount + ' ');
                        });
                        Core.App.alert("激活成功");
                    });
                });
            }
        }).on('click', '.tutorial-close-btn', function () {
            welcomescreen.close();
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