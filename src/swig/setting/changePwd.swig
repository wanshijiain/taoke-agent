---
pageId: setting_changePwd
pageName: 修改密码
pageClass: login
---
{% extends '../_layout_page.swig' %}
{% block pageContent %}
    <form class="list-block changePwdForm login">
        <ul class="no-border">
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">原密码:</div>
                        <div class="item-input">
                            <input type="password" name="oldPwd" placeholder="请输入密码"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">新密码:</div>
                        <div class="item-input">
                            <input type="password" name="newPwd" placeholder="请输入新密码"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner">
                        <div class="item-title label">确认密码:</div>
                        <div class="item-input">
                            <input type="password" name="repeatPwd" placeholder="请输入确认密码"/>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="item-content buttons">
                    <div class="button button-big button-fill active w-80 block-center changePwdBtn">修改密码</div>
                </div>
            </li>
            <li>
                <div class="item-content">
                    <div class="item-inner text-center color-gray">
                        <div class="item-subtitle block-center">修改密码后需要重新登录哦~</div>
                    </div>
                </div>
            </li>
        </ul>
    </form>
{% endblock %}
