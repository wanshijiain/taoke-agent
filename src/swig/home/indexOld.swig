---
pageId: home_indexOld
pageName: 额度转账
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
            <a href="../home/yanzheng.html"><i class="iconfont icon-yanzheng"></i><br>验证代理商</a>
            <a class="coral"><i class="iconfont icon-exchange coral"></i><br>额度转账</a>
            <a href="../home/myInfo.html"><i class="iconfont icon-admin"></i><br>我的管家</a>
        </div>
    </div>
{% endblock %}
{% block pageContent %}
    <div class="code-show" style="font-size: 2rem">
        <p>额度转账</p>
        <p>还剩<span class="remaining">0</span></p>
    </div>
    <div class="prodCode">
            <div class="list-block no-margin">
                <ul>
                    <form id="form2">
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">本次转移额度</div>
                                <div class="item-input">
                                    <input id="count" name="count" type="number" min="0" placeholder="请输入转账数量">
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">目标账户手机号</div>
                                <div class="item-input">
                                    <input id="targetPhone" name="targetPhone" type="number" placeholder="请输入目标账户">
                                </div>
                            </div>
                        </div>
                    </li>
                    </form>
                    <li>
                        <div class="item-content">
                            <div class="item-inner">
                                <div class="item-title label">请确认目标账户</div>
                                <div class="item-input">
                                    <input id="confirmNum" name="confirmNum" type="number" placeholder="请确认目标账户">
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        <a class="code-btn" href="#">一键转账</a>
    </div>

{% endblock %}