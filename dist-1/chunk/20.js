/*! For license information please see 20.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    129: function (t, n, o) {
      'use strict';
      (function (t) {
        o.d(n, 'a', function () {
          return createCommonjsModule;
        }),
          o.d(n, 'b', function () {
            return i;
          }),
          o.d(n, 'c', function () {
            return a;
          }),
          o.d(n, 'd', function () {
            return getDefaultExportFromCjs;
          });
        var i =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : void 0 !== t
            ? t
            : 'undefined' != typeof self
            ? self
            : {};
        function getDefaultExportFromCjs(t) {
          return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default') ? t.default : t;
        }
        function createCommonjsModule(t, n, o) {
          return (
            t(
              (o = {
                path: n,
                exports: {},
                require: function (t, n) {
                  return (function commonjsRequire() {
                    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
                  })();
                },
              }),
              o.exports
            ),
            o.exports
          );
        }
        var a = createCommonjsModule(function (t) {
          !(function () {
            var n = {}.hasOwnProperty;
            function r() {
              for (var t = [], o = 0; o < arguments.length; o++) {
                var i = arguments[o];
                if (i) {
                  var a = typeof i;
                  if ('string' === a || 'number' === a) t.push(i);
                  else if (Array.isArray(i)) {
                    if (i.length) {
                      var s = r.apply(null, i);
                      s && t.push(s);
                    }
                  } else if ('object' === a)
                    if (i.toString === Object.prototype.toString) for (var c in i) n.call(i, c) && i[c] && t.push(c);
                    else t.push(i.toString());
                }
              }
              return t.join(' ');
            }
            t.exports ? ((r.default = r), (t.exports = r)) : (window.classNames = r);
          })();
        });
      }.call(this, o(42)));
    },
    99: function (t, n, o) {
      'use strict';
      o.r(n),
        o.d(n, 'taro_navigator_core', function () {
          return c;
        });
      var i = o(29),
        a = o(23),
        s = o(129),
        c = (function () {
          function e(t) {
            Object(i.g)(this, t),
              (this.onSuccess = Object(i.c)(this, 'cuccess', 7)),
              (this.onFail = Object(i.c)(this, 'fail', 7)),
              (this.onComplete = Object(i.c)(this, 'Complete', 7)),
              (this.openType = 'navigate'),
              (this.isHover = !1),
              (this.delta = 0);
          }
          return (
            (e.prototype.onClick = function () {
              var t = this,
                n = t.openType,
                o = t.onSuccess,
                i = t.onFail,
                s = t.onComplete,
                c = Promise.resolve();
              switch (n) {
                case 'navigate':
                  c = a.a.navigateTo({ url: this.url });
                  break;
                case 'redirect':
                  c = a.a.redirectTo({ url: this.url });
                  break;
                case 'switchTab':
                  c = a.a.switchTab({ url: this.url });
                  break;
                case 'reLaunch':
                  c = a.a.reLaunch({ url: this.url });
                  break;
                case 'navigateBack':
                  c = a.a.navigateBack({ delta: this.delta });
                  break;
                case 'exit':
                  c = Promise.reject(new Error('navigator:fail 暂不支持"openType: exit"'));
              }
              c &&
                c
                  .then(function (t) {
                    o.emit(t);
                  })
                  .catch(function (t) {
                    i.emit(t);
                  })
                  .finally(function () {
                    s.emit();
                  });
            }),
            (e.prototype.render = function () {
              var t,
                n = this.isHover,
                o = this.hoverClass;
              return Object(i.e)(i.a, { class: Object(s.c)(((t = {}), (t[o] = n), t)) });
            }),
            e
          );
        })();
      c.style = '.navigator-hover{background:#efefef}';
    },
  },
]);
