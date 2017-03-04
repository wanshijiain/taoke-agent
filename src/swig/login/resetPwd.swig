---
pageId: login_resetPwd
pageName: 密码找回
pageClass: login
---
{% extends '../_layout_page.swig' %}
{% block navbar %}
  <div class="navbar">
    <div class="navbar-inner">
      <div class="left"></div>
      <div class="center sliding">{{ pageName }}</div>
      <div class="right">
          <a href="../login/login.html" class="link color-gray">登录</a>
      </div>
    </div>
  </div>
{% endblock %}
{% block pageContent %}
    <form class="list-block resetPwdForm login">
        <ul class="no-border">
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">手机号:</div>
                        <div class="item-input">
                            <input type="text" name="cel" id="cel" placeholder="请输入手机号"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">验证码:</div>
                        <div class="item-input item-input-group">
                            <input type="text" name="authCode" placeholder="请输入验证码"/>
                            <a class="color-gray sendAuthCode">发送验证码</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">密码:</div>
                        <div class="item-input">
                            <input type="password" name="newPwd" placeholder="请输入密码"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content buttons">
                    <div class="button button-big button-fill active w-100 block-center resetPwdBtn">找回密码</div>
                </div>
            </li>
        </ul>
    </form>
{% endblock %}
