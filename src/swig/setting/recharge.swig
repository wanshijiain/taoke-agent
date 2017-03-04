---
pageId: setting_recharge
pageName: 账户充值
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
    <div class="code-show" style="font-size: 2rem">
        <p>账户余额</p>
        <p class="totalAmount">0</p>
    </div>
    <div class="content-block-title recharge-notice">
        <h3>第一步：请先转账到平台官方账号</h3>
        <p>平台官方账号： 6225 8855 1677 8172 </p>
        <p>(吴小燕 招行银行 合肥三孝口支行)</p>
        <h3>第二步：请确认提交转账金额</h3>
    </div>
    <form id="form1">
        <div class="list-block no-top no-margin">
            <ul>
                <li>
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-bank"></i></div>
                        <div class="item-inner">
                            <div class="item-title label">转账方式</div>
                            <div class="item-input">
                                <select id="bankName" name="bankName">
                                    <option value="">请选择</option>
                                    <option value="ZFB">支付宝</option>
                                    <option value="WX">微信</option>
                                    <option value="BANK">银行卡</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-rmb"></i></div>
                        <div class="item-inner">
                            <div class="item-title label">转账金额</div>
                            <div class="item-input">
                                <input id="amountFormat" name="amountFormat" type="number" min="0" placeholder="0">
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item-content">
                        <div class="item-media"><i class="iconfont icon-rmb"></i></div>
                        <div class="item-inner">
                            <div class="item-title label">转账人姓名</div>
                            <div class="item-input">
                                <input id="userName" name="userName" type="text" min="0" placeholder="0">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="content-block-title recharge-notice">
            <p>一次转账只能提交一次充值，如发现恶意重复提交，将罚款甚至封号</p>
            <p>请填写你转出银行卡开户账号的姓名，方便财务核对，不要填手机</p>
        </div>
        <div class="recharge-subImg">
            <img src="" width="100px" height="100px" class="recharge-img">
            <a class="sub-Img">点击上传截图
                <input type="hidden">
            </a>
            <a class="recharge-sub">提交审核</a>
            <p>请等待审核，成功后到账</p>
        </div>
    </form>
{% endblock %}