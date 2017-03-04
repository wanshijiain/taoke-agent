---
pageId: setting_fundDetails
pageName: 资金明细
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
        <script id="fundDetail" type="text/template7">
            <div class="list-block media-list no-margin">
                <ul>
                    {{#content}}
                    <li>
                        <div class="item-content">
                            {{#if amountFormat>0}}
                            <div class="item-media"><i class="iconfont icon-chong"></i></div>
                            {{else}}
                            <div class="item-media"><i class="iconfont icon-gou"></i></div>
                            {{/if}}
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">{{remarks}}：{{amountFormat}}</div>
                                </div>
                                <div class="item-subtitle">{{dtime createDate}}</div>
                                <div class="item-mine">余额：{{totalAmountFormat}}</div>
                            </div>
                        </div>
                    </li>
                    {{/content}}
                </ul>
            </div>
        </script>
    {% endraw %}
{% endblock %}