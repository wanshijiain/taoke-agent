---
pageId: home_index
pageName: 激活用户
pageClass: toolbar-fixed home_detail
---
{% extends '../_layout_page.swig' %}
{% block navbar %}
  <div class="navbar">
    <div class="navbar-inner">
        <div class="left"></div>
        <div class="center sliding">{{ pageName }}</div>
        <div class="right"><a href="../setting/authCodeList.html"><i class="iconfont icon-list"></i></a></div>
    </div>
  </div>
{% endblock %}
{% block toolbar %}
    <div class="toolbar">
        <div class="toolbar-inner">
            <a class="coral"><i class="iconfont icon-authcode coral"></i><br>授权激活</a>
            <a href="../home/yanzheng.html"><i class="iconfont icon-yanzheng"></i><br>验证代理商</a>
            <a href="../home/indexOld.html"><i class="iconfont icon-exchange"></i><br>额度转账</a>
            <a href="../home/myInfo.html"><i class="iconfont icon-admin"></i><br>我的管家</a>
        </div>
    </div>
{% endblock %}
{% block pageContent %}
    <div class="code-show" style="font-size: 2rem">
        <p>用户激活</p>
        <p>还剩<span class="remaining">0</span>次</p>
    </div>
    <div class="content-block-title">请输入想要激活的用户手机号</div>
    <div class="prodCode">
        <div class="prodCode">
            <div class="list-block no-margin">
                <ul>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">激活用户</div>
                                <div class="item-input">
                                    <input type="text" placeholder="点击输入手机号" id="userNum" name="userNum" class="big-input">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <a class="code-btn code-pro">激活用户</a>
        </div>
    </div>
{% endblock %}