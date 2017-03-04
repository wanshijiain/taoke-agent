---
pageId: home_yanzheng
pageName: 验证代理商
pageClass: toolbar-fixed home_detail
---
{% extends '../_layout_page.swig' %}
{% block navbar %}
  <div class="navbar">
    <div class="navbar-inner">
        <div class="left"></div>
        <div class="center sliding">{{ pageName }}</div>
        <div class="right">
        </div>
    </div>
  </div>
{% endblock %}
{% block toolbar %}
    <div class="toolbar">
        <div class="toolbar-inner">
            <a href="../home/index.html"><i class="iconfont icon-authcode"></i><br>授权激活</a>
            <a class="coral"><i class="iconfont icon-yanzheng coral coral"></i><br>验证代理商</a>
            <a href="../home/indexOld.html"><i class="iconfont icon-exchange"></i><br>额度转账</a>
            <a href="../home/myInfo.html"><i class="iconfont icon-admin"></i><br>我的管家</a>
        </div>
    </div>
{% endblock %}
{% block pageContent %}
    <div class="code-show">
        <p class="tmp" style="font-size: 2.5rem">代理商信息</p>
        <section class="new_container">
        </section>
    </div>
    <div class="content-block-title">请填写手机号、微信号或QQ号其中之一查找代理商</div>
    <div class="prodCode">
        <div class="list-block no-margin">
            <ul>
                <li>
                    <div class="item-content">
                        <div class="item-inner">
                            <div class="item-title label">查找内容</div>
                            <div class="item-input">
                                <input id="param" name="param" type="text" placeholder="手机号或QQ号或微信号">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <a class="yz code-btn">点击查询</a>
    </div>
{% endblock %}
{% block templates %}
    {% raw %}
        <script id="yanzhengTmp" type="text/template7">
            <p>手机号：{{phone}}</p>
            <p>QQ号：{{qq}}</p>
            <p>微信号：{{weixin}}</p>
            <p>授权码数量：{{totalCodeCount}}</p>
        </script>
    {% endraw %}
{% endblock %}