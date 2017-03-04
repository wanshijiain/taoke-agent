---
pageId: setting_buyAuthCode
pageName: 购买激活额度
pageClass: home_detail
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
{% block pageContent %}
    <div class="recharge-remain row">
        <div class="col-50">
            <p>当前剩余激活额度</p>
            <p class="remainingCode">0</p>
        </div>
        <div class="col-50">
            <p>当前账户余额</p>
            <p class="remainingFund">0</p>
        </div>
    </div>
    <div class="sale-title">
        <p>单次激活官方单价：￥365</p>
        <p>当前享受折扣：<span class="coral" id="discount">无</span></p>
    </div>
    <div class="list-block">
        <ul>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">选择购买数量</div>
                        <div class="item-input">
                            <select id="codeNum">
                                <option value="0">请选择</option>
                                <option value="3">3个</option>
                                <option value="20">20个</option>
                                <option value="200">200个</option>
                                <option value="500">500个</option>
                            </select>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">需要账户余额</div>
                        <div class="item-after" id="need">0</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="recharge-subImg">
        <a class="recharge-sub buy-authCode">确认购买！</a>
    </div>
{% endblock %}