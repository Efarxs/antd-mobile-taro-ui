(window.webpackJsonp = window.webpackJsonp || []).push([
  [63],
  {
    123: function (o, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'taro_web_view_core', function () {
          return i;
        });
      var n = r(29),
        i = (function () {
          function e(o) {
            Object(n.g)(this, o),
              (this.onLoad = Object(n.c)(this, 'load', 7)),
              (this.onError = Object(n.c)(this, 'error', 7));
          }
          return (
            (e.prototype.render = function () {
              var o = this,
                t = o.src,
                r = o.onLoad,
                i = o.onError;
              return Object(n.e)('iframe', {
                class: 'taro-webview',
                onLoad: function (o) {
                  o.stopPropagation(), r.emit({ src: t });
                },
                onError: function (o) {
                  o.stopPropagation(), i.emit({ src: t });
                },
                src: t,
              });
            }),
            e
          );
        })();
      i.style = 'iframe{border:none}.taro-webview{position:fixed;top:0;bottom:0;z-index:999;width:100%;height:100%}';
    },
  },
]);
