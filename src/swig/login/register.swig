---
pageId: login_register
pageName: 用户注册
pageClass: login has-form
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
    <form class="list-block registerForm login">
        <ul class="no-border">
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">手机号:</div>
                        <div class="item-input">
                            <input type="number" id="loginName" name="loginName" placeholder="请输入手机号"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">微信号:</div>
                        <div class="item-input">
                            <input type="text" id="weixin" name="weixin" placeholder="请输入微信号"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">QQ号:</div>
                        <div class="item-input">
                            <input type="number" id="qq" name="qq" placeholder="请输入qq号"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">姓名:</div>
                        <div class="item-input">
                            <input type="text" id="name" name="name" placeholder="请输入昵称"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title" style="color: red">提示:以上内容务必真实，提交后无法修改！</div>
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
                            <input type="password" name="password" placeholder="请输入密码"/>
                        </div>
                    </div>
                </div>
            </li>
            <li class="no-border" style="display: none">
                <div class="item-content">
                    <label class="block-center"><input type="checkbox">我已阅读并同意指尖客《用户协议》</label>
                </div>
            </li>
            <li>
                <div class="item-content buttons">
                    <div class="button button-big button-fill active w-90 block-center registerBtn">注册</div>
                </div>
            </li>
        </ul>
    </form>
{% endblock %}
