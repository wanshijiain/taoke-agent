---
pageId: setting_authCodeList
pageName: 激活记录
pageClass: toolbar-fixed home_detail
pageInfinite: true
pageRefresh: true
---
{% extends '../_layout_page.swig' %}
{% block navbar %}
    <div class="navbar">
        <div class="navbar-inner">
            <div class="left"><a href="../home/index.html" class="back link"><i class="icon icon-back"></i></a></div>
            <div class="center sliding">{{ pageName }}</div>
            <div class="right">
            </div>
        </div>
    </div>
{% endblock %}
{% block templates %}
    {% raw %}
        <script id="authCodeRec1" type="text/template7">
            <div class="updateUser" style="display: none">
                <div class="updateUser-content">
                    <p><input type="number" placeholder="请输入新的用户手机号" id="phone" name="phone"></p>
                    <p><a class="updateUser-cancel">取消</a><a class="updateUser-btn">确认修改</a></p>
                </div>
            </div>
            <div class="list-block media-list no-margin">
                <ul>
                    {{#content}}
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">被激活人：{{phone}}</div>
                                </div>
                                <div class="item-subtitle">生成时间：{{dtime createDate}}</div>
                                {{#js_compare "this.use == 'F'"}}
                                <div class="item-mine canChange" data-id="{{id}}">点击更改用户</div>
                                {{/js_compare}}
                            </div>
                        </div>
                    </li>
                    {{/content}}
                </ul>
            </div>
        </script>
    {% endraw %}
{% endblock %}
{% block pageContent %}
{% endblock %}