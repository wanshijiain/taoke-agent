{% extends '_layout_base.swig' %}
{% block pages %}
    <div class="pages">
        <div data-page="{{ pageId }}" class="page {{ pageId }} {{ pageClass }}" id="{{ pageId }}">
            {% block styles %}{% endblock %}
            {% block toolbar %}{% endblock %}
            {% if pageRefresh %}
            <div class="pull-to-refresh-layer">
                <div class="preloader"></div>
                <div class="pull-to-refresh-arrow"></div>
            </div>
            {% endif %}
            <div class="page-content {{ pageContentClass }}{% if pageRefresh %} pull-to-refresh-content{% endif %}{% if pageInfinite %} infinite-scroll{% endif %}">
                {% block pageContent %}{% endblock %}
            </div>
            {% if pageInfinite %}
                <div class="infinite-scroll-preloader">
                    <div class="preloader"></div>
                </div>
            {% endif %}
            {% block templates %}{% endblock %}
        </div>
    </div>
{% endblock %}