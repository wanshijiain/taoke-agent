---
pageId: login_login
pageName: 用户登录
pageClass: login
---
{% extends '../_layout_page.swig' %}
{% block navbar %}
  <div class="navbar">
    <div class="navbar-inner">
        <div class="left"></div>
        <div class="center sliding">{{ pageName }}</div>
      <div class="right">
          <a href="../login/register.html" class="link color-gray">注册</a>
      </div>
    </div>
  </div>
{% endblock %}
{% block pageContent %}
    <form class="list-block loginForm login">
        <ul class="no-border">
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">手机号:</div>
                        <div class="item-input">
                            <input type="text" name="username" class="loginName" placeholder="请输入手机号"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">密码:</div>
                        <div class="item-input">
                            <input type="password" name="password" placeholder="请输入密码"/>
                        </div>
                    </div>
                </div>
            </li>
            <li class="no-border">
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-input">
                            <a href="../login/resetPwd.html" class="link pull-right">忘记密码？立即找回</a>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content buttons">
                    <div class="button button-big button-fill active w-100 block-center loginBtn">登录</div>
                </div>
            </li>
        </ul>
    </form>
{% endblock %}
