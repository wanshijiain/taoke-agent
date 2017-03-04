---
pageId: home_myInfo
pageName: 我的管家
pageClass: toolbar-fixed home_detail
pageRefresh: true
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
            <a href="../home/yanzheng.html"><i class="iconfont icon-yanzheng"></i><br>验证代理商</a>
            <a href="../home/indexOld.html"><i class="iconfont icon-exchange"></i><br>额度转账</a>
            <a class="coral"><i class="iconfont icon-admin coral"></i><br>我的管家</a>
        </div>
    </div>
{% endblock %}
{% block pageContent %}
    <div class="agent-head row">
        <div class="head-left col-50">
            <img src="{{ demain }}/static/img/icon/ic_default_user.png" width="80px"/>
        </div>
        <div class="head-right col-50">
            <p class="userName">未登录</p>
            <p class="weixinNum">微信号：未登录</p>
            <p class="qqNum">QQ号：未登录</p>
            <p class="phoneNum">手机号：未登录</p>
        </div>
    </div>
    <div class="saleNum row">
        <div class="col-50">
            <p class="remainCount">0</p>
        </div>
        <div class="col-50">
            <p class="prodCount">0</p>
        </div>
    </div>
    <div class="saleNum saleType row">
        <div class="col-50">
            <p>可用额度</p>
        </div>
        <div class="col-50">
            <p>已激活</p>
        </div>
    </div>
    {#<div class="accordion-item sub-sale">#}
        {#<div class="accordion-item-toggle sub-sale-title">下级零售数据</div>#}
        {#<div class="accordion-item-content sub-sale-content">#}
            {#<div class="row">#}
                {#<div class="col-33"></div>#}
                {#<div class="col-33 coral">下级零售</div>#}
                {#<div class="col-33 coral">下下级零售</div>#}
            {#</div>#}
            {#<div class="row">#}
                {#<div class="col-33 coral">本月</div>#}
                {#<div class="col-33 coral">0</div>#}
                {#<div class="col-33 coral">0</div>#}
            {#</div>#}
            {#<div class="row">#}
                {#<div class="col-33">上月</div>#}
                {#<div class="col-33">0</div>#}
                {#<div class="col-33">0</div>#}
            {#</div>#}
        {#</div>#}
    {#</div>#}
    <div class="content-block-title agent-notice"> </div>
    <div class="list-block">
        <ul>
            <li>
                <a href="../setting/recharge.html" class="item-link">
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-recharge"></i></div>
                        <div class="item-inner">账户充值</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="../setting/fundDetails.html" class="item-link">
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-details"></i></div>
                        <div class="item-inner">资金明细</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="../setting/buyAuthCode.html" class="item-link">
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-authcode"></i></div>
                        <div class="item-inner">购买激活额度</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="../setting/authCodeList.html" class="item-link">
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-list"></i></div>
                        <div class="item-inner">激活记录</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="../setting/record.html" class="item-link">
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-record"></i></div>
                        <div class="item-inner">额度记录</div>
                    </div>
                </a>
            </li>
            <li>
                <a href="../setting/changePwd.html" class="item-link">
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-pwd"></i></div>
                        <div class="item-inner">修改密码</div>
                    </div>
                </a>
            </li>
            <li>
                <a class="item-link logout">
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-exit"></i></div>
                        <div class="item-inner">退出登录</div>
                    </div>
                </a>
            </li>
            <li>
                <a class="item-link clearCache">
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-clear"></i></div>
                        <div class="item-inner">清除缓存</div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
{% endblock %}