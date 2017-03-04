---
pageId: setting_record
pageName: 额度记录
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
        <script id="record1" type="text/template7">
            <div class="list-block media-list no-margin">
                <ul>
                    {{#content}}
                    <li>
                        <div class="item-content" data-id="{{id}}">
                            {{#if amountFormat>0}}
                            <div class="item-media"><i class="iconfont icon-in"></i></div>
                            {{else}}
                            <div class="item-media"><i class="iconfont icon-out"></i></div>
                            {{/if}}
                            <div class="item-inner">
                                <div class="item-title-row">
                                    <div class="item-title">{{remarks}}：{{amountFormat}}</div>
                                </div>
                                <div class="item-subtitle">{{dtime createDate}}</div>
                            </div>
                            <div class="item-mine">剩余：{{availableAmountFormat}}</div>
                        </div>
                    </li>
                    {{/content}}
                </ul>
            </div>
        </script>

        <script id="recordDetail" type="text/template7">
            <div class="updateUser" style="display: none">
                <div class="updateUser-content">
                    <p>{{remarks}} {{amount}}</p>
                    {{#if phone}}
                    <p>目标用户：{{phone}}</p>
                    {{else}}
                    <p>目标用户：{{cel}}</p>
                    {{/if}}
                    <p>操作日期：{{dtime create_date}}</p>
                    <p class="coral close-modal">确定</p>
                </div>
            </div>
        </script>
    {% endraw %}
{% endblock %}
{% block pageContent %}
    <div class="page_container">

    </div>
    <div class="new_container">
    </div>
{% endblock %}