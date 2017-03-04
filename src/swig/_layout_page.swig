{% extends '_layout_base.swig' %}
{% block pages %}
    <div class="pages">
        <div data-page="{{ pageId }}" class="page navbar-through {{ pageId }} {{ pageClass }}" id="{{ pageId }}">
            {% block styles %}{% endblock %}
            {% block navbar %}
            <div class="navbar">
                <div class="navbar-inner">
                    <div class="left"><a href="../home/index.html" class="back link"><i class="icon icon-back"></i></a></div>
                    <div class="center sliding">{{ pageName }}</div>
                    <div class="right">
                    </div>
                    {% block subnavbar %}{% endblock %}
                </div>
            </div>
            {% endblock %}
            {% block toolbar %}{% endblock %}
            <div class="page-content {{ pageContentClass }}{% if pageRefresh %} pull-to-refresh-content{% endif %}{% if pageInfinite %} infinite-scroll{% endif %}{% if fullPage %} page_container{% endif %}">
                {% if pageRefresh %}
                    <div class="pull-to-refresh-layer">
                        <div class="preloader"></div>
                        <div class="pull-to-refresh-arrow"></div>
                    </div>
                {% endif %}
                {% if not fullPage %}
                <div class="page_container">
                    {% block pageContent %}{% endblock %}
                </div>
                {% else %}
                    {% block pageContent %}{% endblock %}
                {% endif %}
                {% if pageInfinite %}
                    <div class="infinite-scroll-preloader">
                        <div class="preloader"></div>
                    </div>
                {% endif %}
            </div>
            {% block templates %}{% endblock %}
        </div>
    </div>
{% endblock %}