define(function(require, exports, module) {
    var options = {
        page: "#setting_fundDetails",
        params: {
            accType:'CASH',
            viewType:'KY'
        }, // 请求参数
        url: 'agent/accountRecord/queryMyAccountDetail',  // 请求地址
        templateId: 'fundDetail' // 模板ID
    };

    function initEvent() {
        var $page = $(options.page);
        if(Core.init.hasInitEvent($page)) return;
        Core.Page.initPage(options);
    }

    return exports = {
        init: function () {
            initEvent();
        }
    };
});