(function () {
    'use strict';
    var gulp = require('gulp'),
        $ = require('gulp-load-plugins')(),
        merge = require('merge-stream'),
        src = './src/',
        paths = {
            target: './dist/',
            css: ['./css/**/*.*', '!./**/*.html'],
            js: './js/**/*.js',
            deviceJs: './js/device/',
            static: ['./static/**/*.*', './data/**/*.*'],
            src: src,
            swig: src + 'swig/**/*.swig',
            less: src + 'less/*.less',
            md: src + 'markdown/**/*.md'
        },
        swigConfig = {
            data: {
                demain: '/web'
            },
            helpData: {
                pageClass: 'help theme-gray no-js'
            }
        };
    var jsMiniOpts = {mangle: {except: ['$', 'require', 'exports']}};
    var mini = false;
    var platforms = ['android', 'ios', 'browser'];

    function extend(target) {
        'use strict';
        target = target || {};
        var sources = [].slice.call(arguments, 1);
        sources.forEach(function(source) {
            if(source === null) {
                return;
            }
            for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
                    target[prop] = source[prop];
                }
            }
        });
        return target;
    }

    gulp.task('help', function () {
        console.info('Usage: gulp <task>');
        console.info('  gulp help: 显示帮助');
        console.info('  gulp clean: 清理编译目录');
        console.info('  gulp dev: 编译开发版本');
        console.info('  gulp prod: 编译生产版本');
        console.info('  gulp watch: 自动编译');
    });
    gulp.task('md', function () {
        var header = [
            "{% extends '../_layout_help.swig' %}",
            '{% block pageContent %}',
            '<div class="content inset">'].join('\n');
        var dest = paths.target + 'page';
        return gulp.src(paths.md)
            .pipe($.newer({ dest: dest, ext: '.html'}))
            .pipe($.frontMatter())
            .pipe($.markdown())
            .pipe($.header(header))
            .pipe($.footer('</div>\n{% endblock %}'))
            .pipe($.swig({
                data: function (file) {
                    var data = file.frontMatter || file.data;
                    return extend({}, swigConfig.data, swigConfig.helpData, data);
                },
                defaults: {cache: false}
            }))
            .pipe($.if(mini, $.minifyHtml()))
            .pipe(gulp.dest(dest));
    });
    gulp.task('less', function () {
        var dest = paths.target + "css";
        return gulp.src(paths.less)
            .pipe($.newer({ dest: dest, ext: '.css'}))
            .pipe($.less())
            .pipe($.autoprefixer({
                browsers: ['last 2 Chrome versions', 'iOS 7'],
                cascade: false
            }))
            .pipe($.if(mini, $.cleanCss()))
            .pipe(gulp.dest(dest));
    });
    gulp.task('swig', function () {
        var dest = paths.target + 'page';
        return gulp.src([paths.swig, '!./**/_*.*'])
            .pipe($.newer({ dest: dest, ext: '.html'}))
            .pipe($.frontMatter())
            .pipe($.swig({
                defaults: {
                    cache: false
                },
                data: function (file) {
                    var data = file.frontMatter || file.data;
                    return extend({}, swigConfig.data, data);
                }
            }))
            .pipe($.if(mini, $.minifyHtml()))
            .pipe(gulp.dest(dest));
    });
    gulp.task('static', function () {
        var statics = gulp.src(paths.static, { base: '.' })
            .pipe($.newer(paths.target))
            .pipe(gulp.dest(paths.target));
        var iconfontFilter = $.filter(['css/iconfont*.*ss', 'css/plugin/**/*.css'], {restore: true});
        var lessFilter = $.filter(['**/*.less'], {restore: true});
        var cssDest = paths.target + "css";
        var css = gulp.src(paths.css)
            .pipe(iconfontFilter).pipe($.newer('iconfont.css')).pipe($.concat('iconfont.less')).pipe(iconfontFilter.restore)
            .pipe(lessFilter).pipe($.newer({ dest: cssDest, ext: '.css'})).pipe($.less()).pipe(lessFilter.restore)
            .pipe($.newer(cssDest))
            .pipe($.if(mini, $.if("*.css", $.cleanCss())))
            .pipe(gulp.dest(cssDest));
        var jsPluginFilter = $.filter(['**/plugin/*.js', '**/main.js'], {restore: true});
        var jsDest = paths.target + "js";
        var js = gulp.src([paths.js, '!' + paths.deviceJs + '**/*.js'])
            .pipe(jsPluginFilter).pipe($.newer('core/main.js')).pipe($.concat('core/main.js')).pipe(jsPluginFilter.restore)
            .pipe($.newer(jsDest))
            .pipe($.if(mini, $.uglify(jsMiniOpts)))
            .pipe(gulp.dest(jsDest));
        var tasks = [statics, css, js];
        for (var i in platforms) {
            var platform = platforms[i];
            var basePath = paths.deviceJs + platform;
            var pluginJs = basePath + '/cordova_plugins.js';
            var pluginTask = gulp.src([pluginJs, basePath + '/plugins/**/*.js'], {
                base: '.'
            })
                .pipe($.newer(paths.target + pluginJs))
                .pipe($.if(mini, $.uglify(jsMiniOpts)))
                .pipe($.concat(pluginJs))
                .pipe(gulp.dest(paths.target));
            var cordovaTask = gulp.src([basePath + '/*.js', '!' + pluginJs], {
                base: '.'
            })
                .pipe($.newer(paths.target))
                .pipe($.if(mini, $.uglify(jsMiniOpts)))
                .pipe(gulp.dest(paths.target));
            tasks.push(pluginTask, cordovaTask);
        }
        return merge(tasks);
    });
    gulp.task('dev', ['md', 'swig', 'less', 'static']);
    gulp.task('watch', ['dev'], function () {
        gulp.watch(paths.less, ['less']);
        gulp.watch(paths.swig, ['swig']);
        gulp.watch(paths.static, ['static']);
        gulp.watch(paths.js, ['static']);
        gulp.watch(paths.md, ['md']);
        gulp.watch(paths.css, ['static']);

        $.livereload({ start: true });
        gulp.watch(paths.target + '**/*', function (file) {
            $.livereload.changed(file.path);
        });
    });
    gulp.task('default', ['watch']);
    gulp.task('switchProd', function (cb) {
        mini = true;
        cb && cb();
    });
    gulp.task('prod', ['switchProd', 'dev']);
    gulp.task('clean', function () {
        return gulp.src([paths.target]).pipe($.clean());
    });
})();