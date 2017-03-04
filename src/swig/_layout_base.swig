{% set demain = '/agents-web' %}
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>指尖客</title>
    <link rel="stylesheet" href="{{ demain }}/static/libs/framework7/css/framework7.ios.min.css">
    <link rel="stylesheet" href="{{ demain }}/static/libs/framework7/css/framework7.ios.colors.min.css">
    <link rel="stylesheet" href="{{ demain }}/css/main.css">
    <link rel="stylesheet" href="{{ demain }}/css/welcomescreen.css">
    <link rel="stylesheet" href="{{ demain }}/css/iconfont.css">
    <link rel="stylesheet" href="{{ demain }}/css/pages.css">

    <script type="text/javascript" src="{{ demain }}/static/libs/seajs/sea.js"></script>
    <script type="text/javascript" src="{{ demain }}/js/core/main.js"></script>
</head>
<body class="theme-gray">
<div class="statusbar-overlay"></div>
<div class="panel-overlay"></div>
<div class="views">
    <div class="view view-main">
        {% block pages %}{% endblock %}
    </div>
</div>
{% block bodyContent %}
{% endblock %}
</body>
</html>