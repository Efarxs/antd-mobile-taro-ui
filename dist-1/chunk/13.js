/*! For license information please see 13.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    115: function (n, c, h) {
      'use strict';
      h.r(c),
        h.d(c, 'taro_swiper_core', function () {
          return ie;
        }),
        h.d(c, 'taro_swiper_item_core', function () {
          return re;
        });
      var f = h(29),
        v = h(129),
        m = h(140);
      function isObject$1(n) {
        return null !== n && 'object' == typeof n && 'constructor' in n && n.constructor === Object;
      }
      function extend$1(n, c) {
        void 0 === n && (n = {}),
          void 0 === c && (c = {}),
          Object.keys(c).forEach(function (h) {
            void 0 === n[h]
              ? (n[h] = c[h])
              : isObject$1(c[h]) && isObject$1(n[h]) && Object.keys(c[h]).length > 0 && extend$1(n[h], c[h]);
          });
      }
      var g = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: '' },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
      };
      function getDocument() {
        var n = 'undefined' != typeof document ? document : {};
        return extend$1(n, g), n;
      }
      var w = {
        document: g,
        navigator: { userAgent: '' },
        location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
        history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
        CustomEvent: function e() {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return '';
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (n) {
          return 'undefined' == typeof setTimeout ? (n(), null) : setTimeout(n, 0);
        },
        cancelAnimationFrame: function (n) {
          'undefined' != typeof setTimeout && clearTimeout(n);
        },
      };
      function getWindow() {
        var n = 'undefined' != typeof window ? window : {};
        return extend$1(n, w), n;
      }
      function _getPrototypeOf(n) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function e(n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      function _setPrototypeOf(n, c) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function e(n, c) {
            return (n.__proto__ = c), n;
          })(n, c);
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (n) {
          return !1;
        }
      }
      function _construct(n, c, h) {
        return (_construct = _isNativeReflectConstruct()
          ? Reflect.construct
          : function e(n, c, h) {
              var f = [null];
              f.push.apply(f, c);
              var v = new (Function.bind.apply(n, f))();
              return h && _setPrototypeOf(v, h.prototype), v;
            }).apply(null, arguments);
      }
      function _wrapNativeSuper(n) {
        var c = 'function' == typeof Map ? new Map() : void 0;
        return (_wrapNativeSuper = function e(n) {
          if (
            null === n ||
            !(function _isNativeFunction(n) {
              return -1 !== Function.toString.call(n).indexOf('[native code]');
            })(n)
          )
            return n;
          if ('function' != typeof n) throw new TypeError('Super expression must either be null or a function');
          if (void 0 !== c) {
            if (c.has(n)) return c.get(n);
            c.set(n, r);
          }
          function r() {
            return _construct(n, arguments, _getPrototypeOf(this).constructor);
          }
          return (
            (r.prototype = Object.create(n.prototype, {
              constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
            })),
            _setPrototypeOf(r, n)
          );
        })(n);
      }
      var b = (function (n) {
        function t(c) {
          var h;
          return (
            (function makeReactive(n) {
              var c = n.__proto__;
              Object.defineProperty(n, '__proto__', {
                get: function e() {
                  return c;
                },
                set: function e(n) {
                  c.__proto__ = n;
                },
              });
            })(
              (function _assertThisInitialized(n) {
                if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return n;
              })((h = n.call.apply(n, [this].concat(c)) || this))
            ),
            h
          );
        }
        return (
          (function _inheritsLoose(n, c) {
            (n.prototype = Object.create(c.prototype)), (n.prototype.constructor = n), (n.__proto__ = c);
          })(t, n),
          t
        );
      })(_wrapNativeSuper(Array));
      function arrayFlat(n) {
        void 0 === n && (n = []);
        var c = [];
        return (
          n.forEach(function (n) {
            Array.isArray(n) ? c.push.apply(c, arrayFlat(n)) : c.push(n);
          }),
          c
        );
      }
      function arrayFilter(n, c) {
        return Array.prototype.filter.call(n, c);
      }
      function $(n, c) {
        var h = getWindow(),
          f = getDocument(),
          v = [];
        if (!c && n instanceof b) return n;
        if (!n) return new b(v);
        if ('string' == typeof n) {
          var m = n.trim();
          if (m.indexOf('<') >= 0 && m.indexOf('>') >= 0) {
            var g = 'div';
            0 === m.indexOf('<li') && (g = 'ul'),
              0 === m.indexOf('<tr') && (g = 'tbody'),
              (0 !== m.indexOf('<td') && 0 !== m.indexOf('<th')) || (g = 'tr'),
              0 === m.indexOf('<tbody') && (g = 'table'),
              0 === m.indexOf('<option') && (g = 'select');
            var w = f.createElement(g);
            w.innerHTML = m;
            for (var y = 0; y < w.childNodes.length; y += 1) v.push(w.childNodes[y]);
          } else
            v = (function qsa(n, c) {
              if ('string' != typeof n) return [n];
              for (var h = [], f = c.querySelectorAll(n), v = 0; v < f.length; v += 1) h.push(f[v]);
              return h;
            })(n.trim(), c || f);
        } else if (n.nodeType || n === h || n === f) v.push(n);
        else if (Array.isArray(n)) {
          if (n instanceof b) return n;
          v = n;
        }
        return new b(
          (function arrayUnique(n) {
            for (var c = [], h = 0; h < n.length; h += 1) -1 === c.indexOf(n[h]) && c.push(n[h]);
            return c;
          })(v)
        );
      }
      $.fn = b.prototype;
      var y,
        x,
        E,
        C = {
          addClass: function addClass() {
            for (var n = arguments.length, c = new Array(n), h = 0; h < n; h++) c[h] = arguments[h];
            var f = arrayFlat(
              c.map(function (n) {
                return n.split(' ');
              })
            );
            return (
              this.forEach(function (n) {
                var c;
                (c = n.classList).add.apply(c, f);
              }),
              this
            );
          },
          removeClass: function removeClass() {
            for (var n = arguments.length, c = new Array(n), h = 0; h < n; h++) c[h] = arguments[h];
            var f = arrayFlat(
              c.map(function (n) {
                return n.split(' ');
              })
            );
            return (
              this.forEach(function (n) {
                var c;
                (c = n.classList).remove.apply(c, f);
              }),
              this
            );
          },
          hasClass: function hasClass() {
            for (var n = arguments.length, c = new Array(n), h = 0; h < n; h++) c[h] = arguments[h];
            var f = arrayFlat(
              c.map(function (n) {
                return n.split(' ');
              })
            );
            return (
              arrayFilter(this, function (n) {
                return (
                  f.filter(function (c) {
                    return n.classList.contains(c);
                  }).length > 0
                );
              }).length > 0
            );
          },
          toggleClass: function toggleClass() {
            for (var n = arguments.length, c = new Array(n), h = 0; h < n; h++) c[h] = arguments[h];
            var f = arrayFlat(
              c.map(function (n) {
                return n.split(' ');
              })
            );
            this.forEach(function (n) {
              f.forEach(function (c) {
                n.classList.toggle(c);
              });
            });
          },
          attr: function attr(n, c) {
            if (1 === arguments.length && 'string' == typeof n) return this[0] ? this[0].getAttribute(n) : void 0;
            for (var h = 0; h < this.length; h += 1)
              if (2 === arguments.length) this[h].setAttribute(n, c);
              else for (var f in n) (this[h][f] = n[f]), this[h].setAttribute(f, n[f]);
            return this;
          },
          removeAttr: function removeAttr(n) {
            for (var c = 0; c < this.length; c += 1) this[c].removeAttribute(n);
            return this;
          },
          transform: function transform(n) {
            for (var c = 0; c < this.length; c += 1) this[c].style.transform = n;
            return this;
          },
          transition: function transition$1(n) {
            for (var c = 0; c < this.length; c += 1)
              this[c].style.transitionDuration = 'string' != typeof n ? n + 'ms' : n;
            return this;
          },
          on: function on() {
            for (var n = arguments.length, c = new Array(n), h = 0; h < n; h++) c[h] = arguments[h];
            var f = c[0],
              v = c[1],
              m = c[2],
              g = c[3];
            function o(n) {
              var c = n.target;
              if (c) {
                var h = n.target.dom7EventData || [];
                if ((h.indexOf(n) < 0 && h.unshift(n), $(c).is(v))) m.apply(c, h);
                else for (var f = $(c).parents(), g = 0; g < f.length; g += 1) $(f[g]).is(v) && m.apply(f[g], h);
              }
            }
            function l(n) {
              var c = (n && n.target && n.target.dom7EventData) || [];
              c.indexOf(n) < 0 && c.unshift(n), m.apply(this, c);
            }
            'function' == typeof c[1] && ((f = c[0]), (m = c[1]), (g = c[2]), (v = void 0)), g || (g = !1);
            for (var w, b = f.split(' '), y = 0; y < this.length; y += 1) {
              var x = this[y];
              if (v)
                for (w = 0; w < b.length; w += 1) {
                  var E = b[w];
                  x.dom7LiveListeners || (x.dom7LiveListeners = {}),
                    x.dom7LiveListeners[E] || (x.dom7LiveListeners[E] = []),
                    x.dom7LiveListeners[E].push({ listener: m, proxyListener: o }),
                    x.addEventListener(E, o, g);
                }
              else
                for (w = 0; w < b.length; w += 1) {
                  var C = b[w];
                  x.dom7Listeners || (x.dom7Listeners = {}),
                    x.dom7Listeners[C] || (x.dom7Listeners[C] = []),
                    x.dom7Listeners[C].push({ listener: m, proxyListener: l }),
                    x.addEventListener(C, l, g);
                }
            }
            return this;
          },
          off: function off() {
            for (var n = arguments.length, c = new Array(n), h = 0; h < n; h++) c[h] = arguments[h];
            var f = c[0],
              v = c[1],
              m = c[2],
              g = c[3];
            'function' == typeof c[1] && ((f = c[0]), (m = c[1]), (g = c[2]), (v = void 0)), g || (g = !1);
            for (var w = f.split(' '), b = 0; b < w.length; b += 1)
              for (var y = w[b], x = 0; x < this.length; x += 1) {
                var E = this[x],
                  C = void 0;
                if (
                  (!v && E.dom7Listeners
                    ? (C = E.dom7Listeners[y])
                    : v && E.dom7LiveListeners && (C = E.dom7LiveListeners[y]),
                  C && C.length)
                )
                  for (var S = C.length - 1; S >= 0; S -= 1) {
                    var A = C[S];
                    (m && A.listener === m) || (m && A.listener && A.listener.dom7proxy && A.listener.dom7proxy === m)
                      ? (E.removeEventListener(y, A.proxyListener, g), C.splice(S, 1))
                      : m || (E.removeEventListener(y, A.proxyListener, g), C.splice(S, 1));
                  }
              }
            return this;
          },
          trigger: function trigger() {
            for (var n = getWindow(), c = arguments.length, h = new Array(c), f = 0; f < c; f++) h[f] = arguments[f];
            for (var v = h[0].split(' '), m = h[1], g = 0; g < v.length; g += 1)
              for (var w = v[g], b = 0; b < this.length; b += 1) {
                var y = this[b];
                if (n.CustomEvent) {
                  var x = new n.CustomEvent(w, { detail: m, bubbles: !0, cancelable: !0 });
                  (y.dom7EventData = h.filter(function (n, c) {
                    return c > 0;
                  })),
                    y.dispatchEvent(x),
                    (y.dom7EventData = []),
                    delete y.dom7EventData;
                }
              }
            return this;
          },
          transitionEnd: function transitionEnd$1(n) {
            var c = this;
            return (
              n &&
                c.on('transitionend', function a(h) {
                  h.target === this && (n.call(this, h), c.off('transitionend', a));
                }),
              this
            );
          },
          outerWidth: function outerWidth(n) {
            if (this.length > 0) {
              if (n) {
                var c = this.styles();
                return (
                  this[0].offsetWidth +
                  parseFloat(c.getPropertyValue('margin-right')) +
                  parseFloat(c.getPropertyValue('margin-left'))
                );
              }
              return this[0].offsetWidth;
            }
            return null;
          },
          outerHeight: function outerHeight(n) {
            if (this.length > 0) {
              if (n) {
                var c = this.styles();
                return (
                  this[0].offsetHeight +
                  parseFloat(c.getPropertyValue('margin-top')) +
                  parseFloat(c.getPropertyValue('margin-bottom'))
                );
              }
              return this[0].offsetHeight;
            }
            return null;
          },
          styles: function styles() {
            var n = getWindow();
            return this[0] ? n.getComputedStyle(this[0], null) : {};
          },
          offset: function offset() {
            if (this.length > 0) {
              var n = getWindow(),
                c = getDocument(),
                h = this[0],
                f = h.getBoundingClientRect(),
                v = c.body,
                m = h.clientTop || v.clientTop || 0,
                g = h.clientLeft || v.clientLeft || 0,
                w = h === n ? n.scrollY : h.scrollTop,
                b = h === n ? n.scrollX : h.scrollLeft;
              return { top: f.top + w - m, left: f.left + b - g };
            }
            return null;
          },
          css: function css(n, c) {
            var h,
              f = getWindow();
            if (1 === arguments.length) {
              if ('string' != typeof n) {
                for (h = 0; h < this.length; h += 1) for (var v in n) this[h].style[v] = n[v];
                return this;
              }
              if (this[0]) return f.getComputedStyle(this[0], null).getPropertyValue(n);
            }
            if (2 === arguments.length && 'string' == typeof n) {
              for (h = 0; h < this.length; h += 1) this[h].style[n] = c;
              return this;
            }
            return this;
          },
          each: function each(n) {
            return n
              ? (this.forEach(function (c, h) {
                  n.apply(c, [c, h]);
                }),
                this)
              : this;
          },
          html: function html(n) {
            if (void 0 === n) return this[0] ? this[0].innerHTML : null;
            for (var c = 0; c < this.length; c += 1) this[c].innerHTML = n;
            return this;
          },
          text: function text(n) {
            if (void 0 === n) return this[0] ? this[0].textContent.trim() : null;
            for (var c = 0; c < this.length; c += 1) this[c].textContent = n;
            return this;
          },
          is: function is(n) {
            var c,
              h,
              f = getWindow(),
              v = getDocument(),
              m = this[0];
            if (!m || void 0 === n) return !1;
            if ('string' == typeof n) {
              if (m.matches) return m.matches(n);
              if (m.webkitMatchesSelector) return m.webkitMatchesSelector(n);
              if (m.msMatchesSelector) return m.msMatchesSelector(n);
              for (c = $(n), h = 0; h < c.length; h += 1) if (c[h] === m) return !0;
              return !1;
            }
            if (n === v) return m === v;
            if (n === f) return m === f;
            if (n.nodeType || n instanceof b) {
              for (c = n.nodeType ? [n] : n, h = 0; h < c.length; h += 1) if (c[h] === m) return !0;
              return !1;
            }
            return !1;
          },
          index: function index() {
            var n,
              c = this[0];
            if (c) {
              for (n = 0; null !== (c = c.previousSibling); ) 1 === c.nodeType && (n += 1);
              return n;
            }
          },
          eq: function eq(n) {
            if (void 0 === n) return this;
            var c = this.length;
            if (n > c - 1) return $([]);
            if (n < 0) {
              var h = c + n;
              return $(h < 0 ? [] : [this[h]]);
            }
            return $([this[n]]);
          },
          append: function append() {
            for (var n, c = getDocument(), h = 0; h < arguments.length; h += 1) {
              n = h < 0 || arguments.length <= h ? void 0 : arguments[h];
              for (var f = 0; f < this.length; f += 1)
                if ('string' == typeof n) {
                  var v = c.createElement('div');
                  for (v.innerHTML = n; v.firstChild; ) this[f].appendChild(v.firstChild);
                } else if (n instanceof b) for (var m = 0; m < n.length; m += 1) this[f].appendChild(n[m]);
                else this[f].appendChild(n);
            }
            return this;
          },
          prepend: function prepend(n) {
            var c,
              h,
              f = getDocument();
            for (c = 0; c < this.length; c += 1)
              if ('string' == typeof n) {
                var v = f.createElement('div');
                for (v.innerHTML = n, h = v.childNodes.length - 1; h >= 0; h -= 1)
                  this[c].insertBefore(v.childNodes[h], this[c].childNodes[0]);
              } else if (n instanceof b)
                for (h = 0; h < n.length; h += 1) this[c].insertBefore(n[h], this[c].childNodes[0]);
              else this[c].insertBefore(n, this[c].childNodes[0]);
            return this;
          },
          next: function next(n) {
            return this.length > 0
              ? n
                ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(n)
                  ? $([this[0].nextElementSibling])
                  : $([])
                : this[0].nextElementSibling
                ? $([this[0].nextElementSibling])
                : $([])
              : $([]);
          },
          nextAll: function nextAll(n) {
            var c = [],
              h = this[0];
            if (!h) return $([]);
            for (; h.nextElementSibling; ) {
              var f = h.nextElementSibling;
              n ? $(f).is(n) && c.push(f) : c.push(f), (h = f);
            }
            return $(c);
          },
          prev: function prev(n) {
            if (this.length > 0) {
              var c = this[0];
              return n
                ? c.previousElementSibling && $(c.previousElementSibling).is(n)
                  ? $([c.previousElementSibling])
                  : $([])
                : c.previousElementSibling
                ? $([c.previousElementSibling])
                : $([]);
            }
            return $([]);
          },
          prevAll: function prevAll(n) {
            var c = [],
              h = this[0];
            if (!h) return $([]);
            for (; h.previousElementSibling; ) {
              var f = h.previousElementSibling;
              n ? $(f).is(n) && c.push(f) : c.push(f), (h = f);
            }
            return $(c);
          },
          parent: function parent(n) {
            for (var c = [], h = 0; h < this.length; h += 1)
              null !== this[h].parentNode &&
                (n ? $(this[h].parentNode).is(n) && c.push(this[h].parentNode) : c.push(this[h].parentNode));
            return $(c);
          },
          parents: function parents(n) {
            for (var c = [], h = 0; h < this.length; h += 1)
              for (var f = this[h].parentNode; f; ) n ? $(f).is(n) && c.push(f) : c.push(f), (f = f.parentNode);
            return $(c);
          },
          closest: function closest(n) {
            var c = this;
            return void 0 === n ? $([]) : (c.is(n) || (c = c.parents(n).eq(0)), c);
          },
          find: function find(n) {
            for (var c = [], h = 0; h < this.length; h += 1)
              for (var f = this[h].querySelectorAll(n), v = 0; v < f.length; v += 1) c.push(f[v]);
            return $(c);
          },
          children: function children(n) {
            for (var c = [], h = 0; h < this.length; h += 1)
              for (var f = this[h].children, v = 0; v < f.length; v += 1) (n && !$(f[v]).is(n)) || c.push(f[v]);
            return $(c);
          },
          filter: function filter(n) {
            return $(arrayFilter(this, n));
          },
          remove: function remove() {
            for (var n = 0; n < this.length; n += 1) this[n].parentNode && this[n].parentNode.removeChild(this[n]);
            return this;
          },
        };
      function nextTick(n, c) {
        return void 0 === c && (c = 0), setTimeout(n, c);
      }
      function now() {
        return Date.now();
      }
      function getTranslate(n, c) {
        void 0 === c && (c = 'x');
        var h,
          f,
          v,
          m = getWindow(),
          g = (function getComputedStyle$1(n) {
            var c,
              h = getWindow();
            return (
              h.getComputedStyle && (c = h.getComputedStyle(n, null)),
              !c && n.currentStyle && (c = n.currentStyle),
              c || (c = n.style),
              c
            );
          })(n);
        return (
          m.WebKitCSSMatrix
            ? ((f = g.transform || g.webkitTransform).split(',').length > 6 &&
                (f = f
                  .split(', ')
                  .map(function (n) {
                    return n.replace(',', '.');
                  })
                  .join(', ')),
              (v = new m.WebKitCSSMatrix('none' === f ? '' : f)))
            : (h = (v =
                g.MozTransform ||
                g.OTransform ||
                g.MsTransform ||
                g.msTransform ||
                g.transform ||
                g.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,'))
                .toString()
                .split(',')),
          'x' === c && (f = m.WebKitCSSMatrix ? v.m41 : 16 === h.length ? parseFloat(h[12]) : parseFloat(h[4])),
          'y' === c && (f = m.WebKitCSSMatrix ? v.m42 : 16 === h.length ? parseFloat(h[13]) : parseFloat(h[5])),
          f || 0
        );
      }
      function isObject(n) {
        return (
          'object' == typeof n &&
          null !== n &&
          n.constructor &&
          'Object' === Object.prototype.toString.call(n).slice(8, -1)
        );
      }
      function isNode(n) {
        return 'undefined' != typeof window ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType);
      }
      function extend() {
        for (
          var n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            c = ['__proto__', 'constructor', 'prototype'],
            h = 1;
          h < arguments.length;
          h += 1
        ) {
          var f = h < 0 || arguments.length <= h ? void 0 : arguments[h];
          if (null != f && !isNode(f))
            for (
              var v = Object.keys(Object(f)).filter(function (n) {
                  return c.indexOf(n) < 0;
                }),
                m = 0,
                g = v.length;
              m < g;
              m += 1
            ) {
              var w = v[m],
                b = Object.getOwnPropertyDescriptor(f, w);
              void 0 !== b &&
                b.enumerable &&
                (isObject(n[w]) && isObject(f[w])
                  ? f[w].__swiper__
                    ? (n[w] = f[w])
                    : extend(n[w], f[w])
                  : !isObject(n[w]) && isObject(f[w])
                  ? ((n[w] = {}), f[w].__swiper__ ? (n[w] = f[w]) : extend(n[w], f[w]))
                  : (n[w] = f[w]));
            }
        }
        return n;
      }
      function bindModuleMethods(n, c) {
        Object.keys(c).forEach(function (h) {
          isObject(c[h]) &&
            Object.keys(c[h]).forEach(function (f) {
              'function' == typeof c[h][f] && (c[h][f] = c[h][f].bind(n));
            }),
            (n[h] = c[h]);
        });
      }
      function classesToSelector(n) {
        return (
          void 0 === n && (n = ''),
          '.' +
            n
              .trim()
              .replace(/([\.:\/])/g, '\\$1')
              .replace(/ /g, '.')
        );
      }
      function createElementIfNotDefined(n, c, h, f) {
        var v = getDocument();
        return (
          h &&
            Object.keys(f).forEach(function (h) {
              if (!c[h] && !0 === c.auto) {
                var m = v.createElement('div');
                (m.className = f[h]), n.append(m), (c[h] = m);
              }
            }),
          c
        );
      }
      function getSupport() {
        return (
          y ||
            (y = (function calcSupport() {
              var n = getWindow(),
                c = getDocument();
              return {
                touch: !!('ontouchstart' in n || (n.DocumentTouch && c instanceof n.DocumentTouch)),
                pointerEvents: !!n.PointerEvent && 'maxTouchPoints' in n.navigator && n.navigator.maxTouchPoints >= 0,
                observer: (function t() {
                  return 'MutationObserver' in n || 'WebkitMutationObserver' in n;
                })(),
                passiveListener: (function t() {
                  var c = !1;
                  try {
                    var h = Object.defineProperty({}, 'passive', {
                      get: function e() {
                        c = !0;
                      },
                    });
                    n.addEventListener('testPassiveListener', null, h);
                  } catch (n) {}
                  return c;
                })(),
                gestures: (function t() {
                  return 'ongesturestart' in n;
                })(),
              };
            })()),
          y
        );
      }
      function getDevice(n) {
        return (
          void 0 === n && (n = {}),
          x ||
            (x = (function calcDevice(n) {
              var c = (void 0 === n ? {} : n).userAgent,
                h = getSupport(),
                f = getWindow(),
                v = f.navigator.platform,
                m = c || f.navigator.userAgent,
                g = { ios: !1, android: !1 },
                w = f.screen.width,
                b = f.screen.height,
                y = m.match(/(Android);?[\s\/]+([\d.]+)?/),
                x = m.match(/(iPad).*OS\s([\d_]+)/),
                E = m.match(/(iPod)(.*OS\s([\d_]+))?/),
                C = !x && m.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                S = 'Win32' === v,
                A = 'MacIntel' === v;
              return (
                !x &&
                  A &&
                  h.touch &&
                  [
                    '1024x1366',
                    '1366x1024',
                    '834x1194',
                    '1194x834',
                    '834x1112',
                    '1112x834',
                    '768x1024',
                    '1024x768',
                    '820x1180',
                    '1180x820',
                    '810x1080',
                    '1080x810',
                  ].indexOf(w + 'x' + b) >= 0 &&
                  ((x = m.match(/(Version)\/([\d.]+)/)) || (x = [0, 1, '13_0_0']), (A = !1)),
                y && !S && ((g.os = 'android'), (g.android = !0)),
                (x || C || E) && ((g.os = 'ios'), (g.ios = !0)),
                g
              );
            })(n)),
          x
        );
      }
      function getBrowser() {
        return (
          E ||
            (E = (function calcBrowser() {
              var n = getWindow();
              return {
                isEdge: !!n.navigator.userAgent.match(/Edge/g),
                isSafari: (function t() {
                  var c = n.navigator.userAgent.toLowerCase();
                  return c.indexOf('safari') >= 0 && c.indexOf('chrome') < 0 && c.indexOf('android') < 0;
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),
              };
            })()),
          E
        );
      }
      Object.keys(C).forEach(function (n) {
        Object.defineProperty($.fn, n, { value: C[n], writable: !0 });
      });
      var S = {
        name: 'resize',
        create: function e() {
          var n = this;
          extend(n, {
            resize: {
              observer: null,
              createObserver: function e() {
                n &&
                  !n.destroyed &&
                  n.initialized &&
                  ((n.resize.observer = new ResizeObserver(function (c) {
                    var h = n.width,
                      f = n.height,
                      v = h,
                      m = f;
                    c.forEach(function (c) {
                      var h = c.contentBoxSize,
                        f = c.contentRect,
                        g = c.target;
                      (g && g !== n.el) ||
                        ((v = f ? f.width : (h[0] || h).inlineSize), (m = f ? f.height : (h[0] || h).blockSize));
                    }),
                      (v === h && m === f) || n.resize.resizeHandler();
                  })),
                  n.resize.observer.observe(n.el));
              },
              removeObserver: function e() {
                n.resize.observer &&
                  n.resize.observer.unobserve &&
                  n.el &&
                  (n.resize.observer.unobserve(n.el), (n.resize.observer = null));
              },
              resizeHandler: function e() {
                n && !n.destroyed && n.initialized && (n.emit('beforeResize'), n.emit('resize'));
              },
              orientationChangeHandler: function e() {
                n && !n.destroyed && n.initialized && n.emit('orientationchange');
              },
            },
          });
        },
        on: {
          init: function e(n) {
            var c = getWindow();
            n.params.resizeObserver &&
            (function e() {
              return void 0 !== getWindow().ResizeObserver;
            })()
              ? n.resize.createObserver()
              : (c.addEventListener('resize', n.resize.resizeHandler),
                c.addEventListener('orientationchange', n.resize.orientationChangeHandler));
          },
          destroy: function e(n) {
            var c = getWindow();
            n.resize.removeObserver(),
              c.removeEventListener('resize', n.resize.resizeHandler),
              c.removeEventListener('orientationchange', n.resize.orientationChangeHandler);
          },
        },
      };
      function _extends$i() {
        return (_extends$i =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var A = {
          attach: function e(n, c) {
            void 0 === c && (c = {});
            var h = getWindow(),
              f = this,
              v = new (h.MutationObserver || h.WebkitMutationObserver)(function (n) {
                if (1 !== n.length) {
                  var c = function t() {
                    f.emit('observerUpdate', n[0]);
                  };
                  h.requestAnimationFrame ? h.requestAnimationFrame(c) : h.setTimeout(c, 0);
                } else f.emit('observerUpdate', n[0]);
              });
            v.observe(n, {
              attributes: void 0 === c.attributes || c.attributes,
              childList: void 0 === c.childList || c.childList,
              characterData: void 0 === c.characterData || c.characterData,
            }),
              f.observer.observers.push(v);
          },
          init: function e() {
            var n = this;
            if (n.support.observer && n.params.observer) {
              if (n.params.observeParents)
                for (var c = n.$el.parents(), h = 0; h < c.length; h += 1) n.observer.attach(c[h]);
              n.observer.attach(n.$el[0], { childList: n.params.observeSlideChildren }),
                n.observer.attach(n.$wrapperEl[0], { attributes: !1 });
            }
          },
          destroy: function e() {
            this.observer.observers.forEach(function (n) {
              n.disconnect();
            }),
              (this.observer.observers = []);
          },
        },
        M = {
          name: 'observer',
          params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
          create: function e() {
            bindModuleMethods(this, { observer: _extends$i({}, A, { observers: [] }) });
          },
          on: {
            init: function e(n) {
              n.observer.init();
            },
            destroy: function e(n) {
              n.observer.destroy();
            },
          },
        };
      function onTouchStart(n) {
        var c = this,
          h = getDocument(),
          f = getWindow(),
          v = c.touchEventsData,
          m = c.params,
          g = c.touches;
        if (c.enabled && (!c.animating || !m.preventInteractionOnTransition)) {
          var w = n;
          w.originalEvent && (w = w.originalEvent);
          var b = $(w.target);
          if ('wrapper' !== m.touchEventsTarget || b.closest(c.wrapperEl).length)
            if (((v.isTouchEvent = 'touchstart' === w.type), v.isTouchEvent || !('which' in w) || 3 !== w.which))
              if (!(!v.isTouchEvent && 'button' in w && w.button > 0))
                if (!v.isTouched || !v.isMoved)
                  if (
                    (!!m.noSwipingClass &&
                      '' !== m.noSwipingClass &&
                      w.target &&
                      w.target.shadowRoot &&
                      n.path &&
                      n.path[0] &&
                      (b = $(n.path[0])),
                    m.noSwiping && b.closest(m.noSwipingSelector ? m.noSwipingSelector : '.' + m.noSwipingClass)[0])
                  )
                    c.allowClick = !0;
                  else if (!m.swipeHandler || b.closest(m.swipeHandler)[0]) {
                    (g.currentX = 'touchstart' === w.type ? w.targetTouches[0].pageX : w.pageX),
                      (g.currentY = 'touchstart' === w.type ? w.targetTouches[0].pageY : w.pageY);
                    var y = g.currentX,
                      x = g.currentY,
                      E = m.edgeSwipeDetection || m.iOSEdgeSwipeDetection,
                      C = m.edgeSwipeThreshold || m.iOSEdgeSwipeThreshold;
                    if (E && (y <= C || y >= f.innerWidth - C)) {
                      if ('prevent' !== E) return;
                      n.preventDefault();
                    }
                    if (
                      (extend(v, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0,
                      }),
                      (g.startX = y),
                      (g.startY = x),
                      (v.touchStartTime = now()),
                      (c.allowClick = !0),
                      c.updateSize(),
                      (c.swipeDirection = void 0),
                      m.threshold > 0 && (v.allowThresholdMove = !1),
                      'touchstart' !== w.type)
                    ) {
                      var S = !0;
                      b.is(v.focusableElements) && (S = !1),
                        h.activeElement &&
                          $(h.activeElement).is(v.focusableElements) &&
                          h.activeElement !== b[0] &&
                          h.activeElement.blur();
                      var A = S && c.allowTouchMove && m.touchStartPreventDefault;
                      (!m.touchStartForcePreventDefault && !A) || b[0].isContentEditable || w.preventDefault();
                    }
                    c.emit('touchStart', w);
                  }
        }
      }
      function onTouchMove(n) {
        var c = getDocument(),
          h = this,
          f = h.touchEventsData,
          v = h.params,
          m = h.touches,
          g = h.rtlTranslate;
        if (h.enabled) {
          var w = n;
          if ((w.originalEvent && (w = w.originalEvent), f.isTouched)) {
            if (!f.isTouchEvent || 'touchmove' === w.type) {
              var b = 'touchmove' === w.type && w.targetTouches && (w.targetTouches[0] || w.changedTouches[0]),
                y = 'touchmove' === w.type ? b.pageX : w.pageX,
                x = 'touchmove' === w.type ? b.pageY : w.pageY;
              if (w.preventedByNestedSwiper) return (m.startX = y), void (m.startY = x);
              if (!h.allowTouchMove)
                return (
                  (h.allowClick = !1),
                  void (
                    f.isTouched &&
                    (extend(m, { startX: y, startY: x, currentX: y, currentY: x }), (f.touchStartTime = now()))
                  )
                );
              if (f.isTouchEvent && v.touchReleaseOnEdges && !v.loop)
                if (h.isVertical()) {
                  if (
                    (x < m.startY && h.translate <= h.maxTranslate()) ||
                    (x > m.startY && h.translate >= h.minTranslate())
                  )
                    return (f.isTouched = !1), void (f.isMoved = !1);
                } else if (
                  (y < m.startX && h.translate <= h.maxTranslate()) ||
                  (y > m.startX && h.translate >= h.minTranslate())
                )
                  return;
              if (
                f.isTouchEvent &&
                c.activeElement &&
                w.target === c.activeElement &&
                $(w.target).is(f.focusableElements)
              )
                return (f.isMoved = !0), void (h.allowClick = !1);
              if ((f.allowTouchCallbacks && h.emit('touchMove', w), !(w.targetTouches && w.targetTouches.length > 1))) {
                (m.currentX = y), (m.currentY = x);
                var E = m.currentX - m.startX,
                  C = m.currentY - m.startY;
                if (!(h.params.threshold && Math.sqrt(Math.pow(E, 2) + Math.pow(C, 2)) < h.params.threshold)) {
                  var S;
                  if (void 0 === f.isScrolling)
                    (h.isHorizontal() && m.currentY === m.startY) || (h.isVertical() && m.currentX === m.startX)
                      ? (f.isScrolling = !1)
                      : E * E + C * C >= 25 &&
                        ((S = (180 * Math.atan2(Math.abs(C), Math.abs(E))) / Math.PI),
                        (f.isScrolling = h.isHorizontal() ? S > v.touchAngle : 90 - S > v.touchAngle));
                  if (
                    (f.isScrolling && h.emit('touchMoveOpposite', w),
                    void 0 === f.startMoving &&
                      ((m.currentX === m.startX && m.currentY === m.startY) || (f.startMoving = !0)),
                    f.isScrolling)
                  )
                    f.isTouched = !1;
                  else if (f.startMoving) {
                    (h.allowClick = !1),
                      !v.cssMode && w.cancelable && w.preventDefault(),
                      v.touchMoveStopPropagation && !v.nested && w.stopPropagation(),
                      f.isMoved ||
                        (v.loop && h.loopFix(),
                        (f.startTranslate = h.getTranslate()),
                        h.setTransition(0),
                        h.animating && h.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                        (f.allowMomentumBounce = !1),
                        !v.grabCursor || (!0 !== h.allowSlideNext && !0 !== h.allowSlidePrev) || h.setGrabCursor(!0),
                        h.emit('sliderFirstMove', w)),
                      h.emit('sliderMove', w),
                      (f.isMoved = !0);
                    var A = h.isHorizontal() ? E : C;
                    (m.diff = A),
                      (A *= v.touchRatio),
                      g && (A = -A),
                      (h.swipeDirection = A > 0 ? 'prev' : 'next'),
                      (f.currentTranslate = A + f.startTranslate);
                    var M = !0,
                      k = v.resistanceRatio;
                    if (
                      (v.touchReleaseOnEdges && (k = 0),
                      A > 0 && f.currentTranslate > h.minTranslate()
                        ? ((M = !1),
                          v.resistance &&
                            (f.currentTranslate =
                              h.minTranslate() - 1 + Math.pow(-h.minTranslate() + f.startTranslate + A, k)))
                        : A < 0 &&
                          f.currentTranslate < h.maxTranslate() &&
                          ((M = !1),
                          v.resistance &&
                            (f.currentTranslate =
                              h.maxTranslate() + 1 - Math.pow(h.maxTranslate() - f.startTranslate - A, k))),
                      M && (w.preventedByNestedSwiper = !0),
                      !h.allowSlideNext &&
                        'next' === h.swipeDirection &&
                        f.currentTranslate < f.startTranslate &&
                        (f.currentTranslate = f.startTranslate),
                      !h.allowSlidePrev &&
                        'prev' === h.swipeDirection &&
                        f.currentTranslate > f.startTranslate &&
                        (f.currentTranslate = f.startTranslate),
                      h.allowSlidePrev || h.allowSlideNext || (f.currentTranslate = f.startTranslate),
                      v.threshold > 0)
                    ) {
                      if (!(Math.abs(A) > v.threshold || f.allowThresholdMove))
                        return void (f.currentTranslate = f.startTranslate);
                      if (!f.allowThresholdMove)
                        return (
                          (f.allowThresholdMove = !0),
                          (m.startX = m.currentX),
                          (m.startY = m.currentY),
                          (f.currentTranslate = f.startTranslate),
                          void (m.diff = h.isHorizontal() ? m.currentX - m.startX : m.currentY - m.startY)
                        );
                    }
                    v.followFinger &&
                      !v.cssMode &&
                      ((v.freeMode || v.watchSlidesProgress || v.watchSlidesVisibility) &&
                        (h.updateActiveIndex(), h.updateSlidesClasses()),
                      v.freeMode &&
                        (0 === f.velocities.length &&
                          f.velocities.push({
                            position: m[h.isHorizontal() ? 'startX' : 'startY'],
                            time: f.touchStartTime,
                          }),
                        f.velocities.push({ position: m[h.isHorizontal() ? 'currentX' : 'currentY'], time: now() })),
                      h.updateProgress(f.currentTranslate),
                      h.setTranslate(f.currentTranslate));
                  }
                }
              }
            }
          } else f.startMoving && f.isScrolling && h.emit('touchMoveOpposite', w);
        }
      }
      function onTouchEnd(n) {
        var c = this,
          h = c.touchEventsData,
          f = c.params,
          v = c.touches,
          m = c.rtlTranslate,
          g = c.$wrapperEl,
          w = c.slidesGrid,
          b = c.snapGrid;
        if (c.enabled) {
          var y = n;
          if (
            (y.originalEvent && (y = y.originalEvent),
            h.allowTouchCallbacks && c.emit('touchEnd', y),
            (h.allowTouchCallbacks = !1),
            !h.isTouched)
          )
            return h.isMoved && f.grabCursor && c.setGrabCursor(!1), (h.isMoved = !1), void (h.startMoving = !1);
          f.grabCursor &&
            h.isMoved &&
            h.isTouched &&
            (!0 === c.allowSlideNext || !0 === c.allowSlidePrev) &&
            c.setGrabCursor(!1);
          var x,
            E = now(),
            C = E - h.touchStartTime;
          if (
            (c.allowClick &&
              (c.updateClickedSlide(y),
              c.emit('tap click', y),
              C < 300 && E - h.lastClickTime < 300 && c.emit('doubleTap doubleClick', y)),
            (h.lastClickTime = now()),
            nextTick(function () {
              c.destroyed || (c.allowClick = !0);
            }),
            !h.isTouched || !h.isMoved || !c.swipeDirection || 0 === v.diff || h.currentTranslate === h.startTranslate)
          )
            return (h.isTouched = !1), (h.isMoved = !1), void (h.startMoving = !1);
          if (
            ((h.isTouched = !1),
            (h.isMoved = !1),
            (h.startMoving = !1),
            (x = f.followFinger ? (m ? c.translate : -c.translate) : -h.currentTranslate),
            !f.cssMode)
          )
            if (f.freeMode) {
              if (x < -c.minTranslate()) return void c.slideTo(c.activeIndex);
              if (x > -c.maxTranslate())
                return void (c.slides.length < b.length ? c.slideTo(b.length - 1) : c.slideTo(c.slides.length - 1));
              if (f.freeModeMomentum) {
                if (h.velocities.length > 1) {
                  var S = h.velocities.pop(),
                    A = h.velocities.pop(),
                    M = S.position - A.position,
                    k = S.time - A.time;
                  (c.velocity = M / k),
                    (c.velocity /= 2),
                    Math.abs(c.velocity) < f.freeModeMinimumVelocity && (c.velocity = 0),
                    (k > 150 || now() - S.time > 300) && (c.velocity = 0);
                } else c.velocity = 0;
                (c.velocity *= f.freeModeMomentumVelocityRatio), (h.velocities.length = 0);
                var z = 1e3 * f.freeModeMomentumRatio,
                  P = c.velocity * z,
                  O = c.translate + P;
                m && (O = -O);
                var L,
                  I,
                  D = !1,
                  B = 20 * Math.abs(c.velocity) * f.freeModeMomentumBounceRatio;
                if (O < c.maxTranslate())
                  f.freeModeMomentumBounce
                    ? (O + c.maxTranslate() < -B && (O = c.maxTranslate() - B),
                      (L = c.maxTranslate()),
                      (D = !0),
                      (h.allowMomentumBounce = !0))
                    : (O = c.maxTranslate()),
                    f.loop && f.centeredSlides && (I = !0);
                else if (O > c.minTranslate())
                  f.freeModeMomentumBounce
                    ? (O - c.minTranslate() > B && (O = c.minTranslate() + B),
                      (L = c.minTranslate()),
                      (D = !0),
                      (h.allowMomentumBounce = !0))
                    : (O = c.minTranslate()),
                    f.loop && f.centeredSlides && (I = !0);
                else if (f.freeModeSticky) {
                  for (var N, G = 0; G < b.length; G += 1)
                    if (b[G] > -O) {
                      N = G;
                      break;
                    }
                  O = -(O =
                    Math.abs(b[N] - O) < Math.abs(b[N - 1] - O) || 'next' === c.swipeDirection ? b[N] : b[N - 1]);
                }
                if (
                  (I &&
                    c.once('transitionEnd', function () {
                      c.loopFix();
                    }),
                  0 !== c.velocity)
                ) {
                  if (
                    ((z = m ? Math.abs((-O - c.translate) / c.velocity) : Math.abs((O - c.translate) / c.velocity)),
                    f.freeModeSticky)
                  ) {
                    var Y = Math.abs((m ? -O : O) - c.translate),
                      j = c.slidesSizesGrid[c.activeIndex];
                    z = Y < j ? f.speed : Y < 2 * j ? 1.5 * f.speed : 2.5 * f.speed;
                  }
                } else if (f.freeModeSticky) return void c.slideToClosest();
                f.freeModeMomentumBounce && D
                  ? (c.updateProgress(L),
                    c.setTransition(z),
                    c.setTranslate(O),
                    c.transitionStart(!0, c.swipeDirection),
                    (c.animating = !0),
                    g.transitionEnd(function () {
                      c &&
                        !c.destroyed &&
                        h.allowMomentumBounce &&
                        (c.emit('momentumBounce'),
                        c.setTransition(f.speed),
                        setTimeout(function () {
                          c.setTranslate(L),
                            g.transitionEnd(function () {
                              c && !c.destroyed && c.transitionEnd();
                            });
                        }, 0));
                    }))
                  : c.velocity
                  ? (c.updateProgress(O),
                    c.setTransition(z),
                    c.setTranslate(O),
                    c.transitionStart(!0, c.swipeDirection),
                    c.animating ||
                      ((c.animating = !0),
                      g.transitionEnd(function () {
                        c && !c.destroyed && c.transitionEnd();
                      })))
                  : (c.emit('_freeModeNoMomentumRelease'), c.updateProgress(O)),
                  c.updateActiveIndex(),
                  c.updateSlidesClasses();
              } else {
                if (f.freeModeSticky) return void c.slideToClosest();
                f.freeMode && c.emit('_freeModeNoMomentumRelease');
              }
              (!f.freeModeMomentum || C >= f.longSwipesMs) &&
                (c.updateProgress(), c.updateActiveIndex(), c.updateSlidesClasses());
            } else {
              for (
                var _ = 0, W = c.slidesSizesGrid[0], H = 0;
                H < w.length;
                H += H < f.slidesPerGroupSkip ? 1 : f.slidesPerGroup
              ) {
                var R = H < f.slidesPerGroupSkip - 1 ? 1 : f.slidesPerGroup;
                void 0 !== w[H + R]
                  ? x >= w[H] && x < w[H + R] && ((_ = H), (W = w[H + R] - w[H]))
                  : x >= w[H] && ((_ = H), (W = w[w.length - 1] - w[w.length - 2]));
              }
              var F = (x - w[_]) / W,
                X = _ < f.slidesPerGroupSkip - 1 ? 1 : f.slidesPerGroup;
              if (C > f.longSwipesMs) {
                if (!f.longSwipes) return void c.slideTo(c.activeIndex);
                'next' === c.swipeDirection && (F >= f.longSwipesRatio ? c.slideTo(_ + X) : c.slideTo(_)),
                  'prev' === c.swipeDirection && (F > 1 - f.longSwipesRatio ? c.slideTo(_ + X) : c.slideTo(_));
              } else {
                if (!f.shortSwipes) return void c.slideTo(c.activeIndex);
                c.navigation && (y.target === c.navigation.nextEl || y.target === c.navigation.prevEl)
                  ? y.target === c.navigation.nextEl
                    ? c.slideTo(_ + X)
                    : c.slideTo(_)
                  : ('next' === c.swipeDirection && c.slideTo(_ + X), 'prev' === c.swipeDirection && c.slideTo(_));
              }
            }
        }
      }
      function onResize() {
        var n = this,
          c = n.params,
          h = n.el;
        if (!h || 0 !== h.offsetWidth) {
          c.breakpoints && n.setBreakpoint();
          var f = n.allowSlideNext,
            v = n.allowSlidePrev,
            m = n.snapGrid;
          (n.allowSlideNext = !0),
            (n.allowSlidePrev = !0),
            n.updateSize(),
            n.updateSlides(),
            n.updateSlidesClasses(),
            ('auto' === c.slidesPerView || c.slidesPerView > 1) && n.isEnd && !n.isBeginning && !n.params.centeredSlides
              ? n.slideTo(n.slides.length - 1, 0, !1, !0)
              : n.slideTo(n.activeIndex, 0, !1, !0),
            n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.run(),
            (n.allowSlidePrev = v),
            (n.allowSlideNext = f),
            n.params.watchOverflow && m !== n.snapGrid && n.checkOverflow();
        }
      }
      function onClick(n) {
        var c = this;
        c.enabled &&
          (c.allowClick ||
            (c.params.preventClicks && n.preventDefault(),
            c.params.preventClicksPropagation && c.animating && (n.stopPropagation(), n.stopImmediatePropagation())));
      }
      function onScroll() {
        var n = this,
          c = n.wrapperEl,
          h = n.rtlTranslate;
        if (n.enabled) {
          (n.previousTranslate = n.translate),
            n.isHorizontal()
              ? (n.translate = h ? c.scrollWidth - c.offsetWidth - c.scrollLeft : -c.scrollLeft)
              : (n.translate = -c.scrollTop),
            -0 === n.translate && (n.translate = 0),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
          var f = n.maxTranslate() - n.minTranslate();
          (0 === f ? 0 : (n.translate - n.minTranslate()) / f) !== n.progress &&
            n.updateProgress(h ? -n.translate : n.translate),
            n.emit('setTranslate', n.translate, !1);
        }
      }
      var k = !1;
      function dummyEventListener() {}
      var z = {
        init: !0,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !1,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: 'input, select, option, textarea, button, video, label',
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsBase: 'window',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function _defineProperties(n, c) {
        for (var h = 0; h < c.length; h++) {
          var f = c[h];
          (f.enumerable = f.enumerable || !1),
            (f.configurable = !0),
            'value' in f && (f.writable = !0),
            Object.defineProperty(n, f.key, f);
        }
      }
      var P = {
          modular: {
            useParams: function e(n) {
              var c = this;
              c.modules &&
                Object.keys(c.modules).forEach(function (h) {
                  var f = c.modules[h];
                  f.params && extend(n, f.params);
                });
            },
            useModules: function e(n) {
              void 0 === n && (n = {});
              var c = this;
              c.modules &&
                Object.keys(c.modules).forEach(function (h) {
                  var f = c.modules[h],
                    v = n[h] || {};
                  f.on &&
                    c.on &&
                    Object.keys(f.on).forEach(function (n) {
                      c.on(n, f.on[n]);
                    }),
                    f.create && f.create.bind(c)(v);
                });
            },
          },
          eventsEmitter: {
            on: function e(n, c, h) {
              var f = this;
              if ('function' != typeof c) return f;
              var v = h ? 'unshift' : 'push';
              return (
                n.split(' ').forEach(function (n) {
                  f.eventsListeners[n] || (f.eventsListeners[n] = []), f.eventsListeners[n][v](c);
                }),
                f
              );
            },
            once: function e(n, c, h) {
              var f = this;
              if ('function' != typeof c) return f;
              function s() {
                f.off(n, s), s.__emitterProxy && delete s.__emitterProxy;
                for (var h = arguments.length, v = new Array(h), m = 0; m < h; m++) v[m] = arguments[m];
                c.apply(f, v);
              }
              return (s.__emitterProxy = c), f.on(n, s, h);
            },
            onAny: function e(n, c) {
              var h = this;
              if ('function' != typeof n) return h;
              var f = c ? 'unshift' : 'push';
              return h.eventsAnyListeners.indexOf(n) < 0 && h.eventsAnyListeners[f](n), h;
            },
            offAny: function e(n) {
              var c = this;
              if (!c.eventsAnyListeners) return c;
              var h = c.eventsAnyListeners.indexOf(n);
              return h >= 0 && c.eventsAnyListeners.splice(h, 1), c;
            },
            off: function e(n, c) {
              var h = this;
              return h.eventsListeners
                ? (n.split(' ').forEach(function (n) {
                    void 0 === c
                      ? (h.eventsListeners[n] = [])
                      : h.eventsListeners[n] &&
                        h.eventsListeners[n].forEach(function (f, v) {
                          (f === c || (f.__emitterProxy && f.__emitterProxy === c)) &&
                            h.eventsListeners[n].splice(v, 1);
                        });
                  }),
                  h)
                : h;
            },
            emit: function e() {
              var n,
                c,
                h,
                f = this;
              if (!f.eventsListeners) return f;
              for (var v = arguments.length, m = new Array(v), g = 0; g < v; g++) m[g] = arguments[g];
              'string' == typeof m[0] || Array.isArray(m[0])
                ? ((n = m[0]), (c = m.slice(1, m.length)), (h = f))
                : ((n = m[0].events), (c = m[0].data), (h = m[0].context || f)),
                c.unshift(h);
              var w = Array.isArray(n) ? n : n.split(' ');
              return (
                w.forEach(function (n) {
                  f.eventsAnyListeners &&
                    f.eventsAnyListeners.length &&
                    f.eventsAnyListeners.forEach(function (f) {
                      f.apply(h, [n].concat(c));
                    }),
                    f.eventsListeners &&
                      f.eventsListeners[n] &&
                      f.eventsListeners[n].forEach(function (n) {
                        n.apply(h, c);
                      });
                }),
                f
              );
            },
          },
          update: {
            updateSize: function updateSize() {
              var n,
                c,
                h = this,
                f = h.$el;
              (n = void 0 !== h.params.width && null !== h.params.width ? h.params.width : f[0].clientWidth),
                (c = void 0 !== h.params.height && null !== h.params.height ? h.params.height : f[0].clientHeight),
                (0 === n && h.isHorizontal()) ||
                  (0 === c && h.isVertical()) ||
                  ((n = n - parseInt(f.css('padding-left') || 0, 10) - parseInt(f.css('padding-right') || 0, 10)),
                  (c = c - parseInt(f.css('padding-top') || 0, 10) - parseInt(f.css('padding-bottom') || 0, 10)),
                  Number.isNaN(n) && (n = 0),
                  Number.isNaN(c) && (c = 0),
                  extend(h, { width: n, height: c, size: h.isHorizontal() ? n : c }));
            },
            updateSlides: function updateSlides() {
              var n = this;
              function t(c) {
                return n.isHorizontal()
                  ? c
                  : {
                      width: 'height',
                      'margin-top': 'margin-left',
                      'margin-bottom ': 'margin-right',
                      'margin-left': 'margin-top',
                      'margin-right': 'margin-bottom',
                      'padding-left': 'padding-top',
                      'padding-right': 'padding-bottom',
                      marginRight: 'marginBottom',
                    }[c];
              }
              function a(n, c) {
                return parseFloat(n.getPropertyValue(t(c)) || 0);
              }
              var c = n.params,
                h = n.$wrapperEl,
                f = n.size,
                v = n.rtlTranslate,
                m = n.wrongRTL,
                g = n.virtual && c.virtual.enabled,
                w = g ? n.virtual.slides.length : n.slides.length,
                b = h.children('.' + n.params.slideClass),
                y = g ? n.virtual.slides.length : b.length,
                x = [],
                E = [],
                C = [],
                S = c.slidesOffsetBefore;
              'function' == typeof S && (S = c.slidesOffsetBefore.call(n));
              var A = c.slidesOffsetAfter;
              'function' == typeof A && (A = c.slidesOffsetAfter.call(n));
              var M = n.snapGrid.length,
                k = n.slidesGrid.length,
                z = c.spaceBetween,
                P = -S,
                O = 0,
                L = 0;
              if (void 0 !== f) {
                var I, D;
                'string' == typeof z && z.indexOf('%') >= 0 && (z = (parseFloat(z.replace('%', '')) / 100) * f),
                  (n.virtualSize = -z),
                  v ? b.css({ marginLeft: '', marginTop: '' }) : b.css({ marginRight: '', marginBottom: '' }),
                  c.slidesPerColumn > 1 &&
                    ((I =
                      Math.floor(y / c.slidesPerColumn) === y / n.params.slidesPerColumn
                        ? y
                        : Math.ceil(y / c.slidesPerColumn) * c.slidesPerColumn),
                    'auto' !== c.slidesPerView &&
                      'row' === c.slidesPerColumnFill &&
                      (I = Math.max(I, c.slidesPerView * c.slidesPerColumn)));
                for (
                  var B, N, G, Y = c.slidesPerColumn, j = I / Y, _ = Math.floor(y / c.slidesPerColumn), W = 0;
                  W < y;
                  W += 1
                ) {
                  D = 0;
                  var H = b.eq(W);
                  if (c.slidesPerColumn > 1) {
                    var R = void 0,
                      F = void 0,
                      X = void 0;
                    if ('row' === c.slidesPerColumnFill && c.slidesPerGroup > 1) {
                      var V = Math.floor(W / (c.slidesPerGroup * c.slidesPerColumn)),
                        q = W - c.slidesPerColumn * c.slidesPerGroup * V,
                        U =
                          0 === V
                            ? c.slidesPerGroup
                            : Math.min(Math.ceil((y - V * Y * c.slidesPerGroup) / Y), c.slidesPerGroup);
                      (R = (F = q - (X = Math.floor(q / U)) * U + V * c.slidesPerGroup) + (X * I) / Y),
                        H.css({
                          '-webkit-box-ordinal-group': R,
                          '-moz-box-ordinal-group': R,
                          '-ms-flex-order': R,
                          '-webkit-order': R,
                          order: R,
                        });
                    } else
                      'column' === c.slidesPerColumnFill
                        ? ((X = W - (F = Math.floor(W / Y)) * Y),
                          (F > _ || (F === _ && X === Y - 1)) && (X += 1) >= Y && ((X = 0), (F += 1)))
                        : (F = W - (X = Math.floor(W / j)) * j);
                    H.css(t('margin-top'), 0 !== X ? c.spaceBetween && c.spaceBetween + 'px' : '');
                  }
                  if ('none' !== H.css('display')) {
                    if ('auto' === c.slidesPerView) {
                      var Q = getComputedStyle(H[0]),
                        K = H[0].style.transform,
                        Z = H[0].style.webkitTransform;
                      if (
                        (K && (H[0].style.transform = 'none'),
                        Z && (H[0].style.webkitTransform = 'none'),
                        c.roundLengths)
                      )
                        D = n.isHorizontal() ? H.outerWidth(!0) : H.outerHeight(!0);
                      else {
                        var J = a(Q, 'width'),
                          ee = a(Q, 'padding-left'),
                          te = a(Q, 'padding-right'),
                          ae = a(Q, 'margin-left'),
                          ie = a(Q, 'margin-right'),
                          re = Q.getPropertyValue('box-sizing');
                        if (re && 'border-box' === re) D = J + ae + ie;
                        else {
                          var se = H[0],
                            ne = se.clientWidth;
                          D = J + ee + te + ae + ie + (se.offsetWidth - ne);
                        }
                      }
                      K && (H[0].style.transform = K),
                        Z && (H[0].style.webkitTransform = Z),
                        c.roundLengths && (D = Math.floor(D));
                    } else
                      (D = (f - (c.slidesPerView - 1) * z) / c.slidesPerView),
                        c.roundLengths && (D = Math.floor(D)),
                        b[W] && (b[W].style[t('width')] = D + 'px');
                    b[W] && (b[W].swiperSlideSize = D),
                      C.push(D),
                      c.centeredSlides
                        ? ((P = P + D / 2 + O / 2 + z),
                          0 === O && 0 !== W && (P = P - f / 2 - z),
                          0 === W && (P = P - f / 2 - z),
                          Math.abs(P) < 0.001 && (P = 0),
                          c.roundLengths && (P = Math.floor(P)),
                          L % c.slidesPerGroup == 0 && x.push(P),
                          E.push(P))
                        : (c.roundLengths && (P = Math.floor(P)),
                          (L - Math.min(n.params.slidesPerGroupSkip, L)) % n.params.slidesPerGroup == 0 && x.push(P),
                          E.push(P),
                          (P = P + D + z)),
                      (n.virtualSize += D + z),
                      (O = D),
                      (L += 1);
                  }
                }
                if (
                  ((n.virtualSize = Math.max(n.virtualSize, f) + A),
                  v &&
                    m &&
                    ('slide' === c.effect || 'coverflow' === c.effect) &&
                    h.css({ width: n.virtualSize + c.spaceBetween + 'px' }),
                  c.setWrapperSize)
                )
                  h.css((((N = {})[t('width')] = n.virtualSize + c.spaceBetween + 'px'), N));
                if (c.slidesPerColumn > 1)
                  if (
                    ((n.virtualSize = (D + c.spaceBetween) * I),
                    (n.virtualSize = Math.ceil(n.virtualSize / c.slidesPerColumn) - c.spaceBetween),
                    h.css((((G = {})[t('width')] = n.virtualSize + c.spaceBetween + 'px'), G)),
                    c.centeredSlides)
                  ) {
                    B = [];
                    for (var oe = 0; oe < x.length; oe += 1) {
                      var le = x[oe];
                      c.roundLengths && (le = Math.floor(le)), x[oe] < n.virtualSize + x[0] && B.push(le);
                    }
                    x = B;
                  }
                if (!c.centeredSlides) {
                  B = [];
                  for (var de = 0; de < x.length; de += 1) {
                    var pe = x[de];
                    c.roundLengths && (pe = Math.floor(pe)), x[de] <= n.virtualSize - f && B.push(pe);
                  }
                  (x = B), Math.floor(n.virtualSize - f) - Math.floor(x[x.length - 1]) > 1 && x.push(n.virtualSize - f);
                }
                if ((0 === x.length && (x = [0]), 0 !== c.spaceBetween)) {
                  var ce,
                    ue = n.isHorizontal() && v ? 'marginLeft' : t('marginRight');
                  b.filter(function (n, h) {
                    return !c.cssMode || h !== b.length - 1;
                  }).css((((ce = {})[ue] = z + 'px'), ce));
                }
                if (c.centeredSlides && c.centeredSlidesBounds) {
                  var he = 0;
                  C.forEach(function (n) {
                    he += n + (c.spaceBetween ? c.spaceBetween : 0);
                  });
                  var fe = (he -= c.spaceBetween) - f;
                  x = x.map(function (n) {
                    return n < 0 ? -S : n > fe ? fe + A : n;
                  });
                }
                if (c.centerInsufficientSlides) {
                  var ve = 0;
                  if (
                    (C.forEach(function (n) {
                      ve += n + (c.spaceBetween ? c.spaceBetween : 0);
                    }),
                    (ve -= c.spaceBetween) < f)
                  ) {
                    var me = (f - ve) / 2;
                    x.forEach(function (n, c) {
                      x[c] = n - me;
                    }),
                      E.forEach(function (n, c) {
                        E[c] = n + me;
                      });
                  }
                }
                extend(n, { slides: b, snapGrid: x, slidesGrid: E, slidesSizesGrid: C }),
                  y !== w && n.emit('slidesLengthChange'),
                  x.length !== M && (n.params.watchOverflow && n.checkOverflow(), n.emit('snapGridLengthChange')),
                  E.length !== k && n.emit('slidesGridLengthChange'),
                  (c.watchSlidesProgress || c.watchSlidesVisibility) && n.updateSlidesOffset();
              }
            },
            updateAutoHeight: function updateAutoHeight(n) {
              var c,
                h = this,
                f = [],
                v = h.virtual && h.params.virtual.enabled,
                m = 0;
              'number' == typeof n ? h.setTransition(n) : !0 === n && h.setTransition(h.params.speed);
              var g = function e(n) {
                return v
                  ? h.slides.filter(function (c) {
                      return parseInt(c.getAttribute('data-swiper-slide-index'), 10) === n;
                    })[0]
                  : h.slides.eq(n)[0];
              };
              if ('auto' !== h.params.slidesPerView && h.params.slidesPerView > 1)
                if (h.params.centeredSlides)
                  h.visibleSlides.each(function (n) {
                    f.push(n);
                  });
                else
                  for (c = 0; c < Math.ceil(h.params.slidesPerView); c += 1) {
                    var w = h.activeIndex + c;
                    if (w > h.slides.length && !v) break;
                    f.push(g(w));
                  }
              else f.push(g(h.activeIndex));
              for (c = 0; c < f.length; c += 1)
                if (void 0 !== f[c]) {
                  var b = f[c].offsetHeight;
                  m = b > m ? b : m;
                }
              m && h.$wrapperEl.css('height', m + 'px');
            },
            updateSlidesOffset: function updateSlidesOffset() {
              for (var n = this.slides, c = 0; c < n.length; c += 1)
                n[c].swiperSlideOffset = this.isHorizontal() ? n[c].offsetLeft : n[c].offsetTop;
            },
            updateSlidesProgress: function updateSlidesProgress(n) {
              void 0 === n && (n = (this && this.translate) || 0);
              var c = this,
                h = c.params,
                f = c.slides,
                v = c.rtlTranslate;
              if (0 !== f.length) {
                void 0 === f[0].swiperSlideOffset && c.updateSlidesOffset();
                var m = -n;
                v && (m = n), f.removeClass(h.slideVisibleClass), (c.visibleSlidesIndexes = []), (c.visibleSlides = []);
                for (var g = 0; g < f.length; g += 1) {
                  var w = f[g],
                    b =
                      (m + (h.centeredSlides ? c.minTranslate() : 0) - w.swiperSlideOffset) /
                      (w.swiperSlideSize + h.spaceBetween);
                  if (h.watchSlidesVisibility || (h.centeredSlides && h.autoHeight)) {
                    var y = -(m - w.swiperSlideOffset),
                      x = y + c.slidesSizesGrid[g];
                    ((y >= 0 && y < c.size - 1) || (x > 1 && x <= c.size) || (y <= 0 && x >= c.size)) &&
                      (c.visibleSlides.push(w), c.visibleSlidesIndexes.push(g), f.eq(g).addClass(h.slideVisibleClass));
                  }
                  w.progress = v ? -b : b;
                }
                c.visibleSlides = $(c.visibleSlides);
              }
            },
            updateProgress: function updateProgress(n) {
              var c = this;
              if (void 0 === n) {
                var h = c.rtlTranslate ? -1 : 1;
                n = (c && c.translate && c.translate * h) || 0;
              }
              var f = c.params,
                v = c.maxTranslate() - c.minTranslate(),
                m = c.progress,
                g = c.isBeginning,
                w = c.isEnd,
                b = g,
                y = w;
              0 === v ? ((m = 0), (g = !0), (w = !0)) : ((g = (m = (n - c.minTranslate()) / v) <= 0), (w = m >= 1)),
                extend(c, { progress: m, isBeginning: g, isEnd: w }),
                (f.watchSlidesProgress || f.watchSlidesVisibility || (f.centeredSlides && f.autoHeight)) &&
                  c.updateSlidesProgress(n),
                g && !b && c.emit('reachBeginning toEdge'),
                w && !y && c.emit('reachEnd toEdge'),
                ((b && !g) || (y && !w)) && c.emit('fromEdge'),
                c.emit('progress', m);
            },
            updateSlidesClasses: function updateSlidesClasses() {
              var n,
                c = this,
                h = c.slides,
                f = c.params,
                v = c.$wrapperEl,
                m = c.activeIndex,
                g = c.realIndex,
                w = c.virtual && f.virtual.enabled;
              h.removeClass(
                f.slideActiveClass +
                  ' ' +
                  f.slideNextClass +
                  ' ' +
                  f.slidePrevClass +
                  ' ' +
                  f.slideDuplicateActiveClass +
                  ' ' +
                  f.slideDuplicateNextClass +
                  ' ' +
                  f.slideDuplicatePrevClass
              ),
                (n = w
                  ? c.$wrapperEl.find('.' + f.slideClass + '[data-swiper-slide-index="' + m + '"]')
                  : h.eq(m)).addClass(f.slideActiveClass),
                f.loop &&
                  (n.hasClass(f.slideDuplicateClass)
                    ? v
                        .children(
                          '.' +
                            f.slideClass +
                            ':not(.' +
                            f.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            g +
                            '"]'
                        )
                        .addClass(f.slideDuplicateActiveClass)
                    : v
                        .children(
                          '.' + f.slideClass + '.' + f.slideDuplicateClass + '[data-swiper-slide-index="' + g + '"]'
                        )
                        .addClass(f.slideDuplicateActiveClass));
              var b = n
                .nextAll('.' + f.slideClass)
                .eq(0)
                .addClass(f.slideNextClass);
              f.loop && 0 === b.length && (b = h.eq(0)).addClass(f.slideNextClass);
              var y = n
                .prevAll('.' + f.slideClass)
                .eq(0)
                .addClass(f.slidePrevClass);
              f.loop && 0 === y.length && (y = h.eq(-1)).addClass(f.slidePrevClass),
                f.loop &&
                  (b.hasClass(f.slideDuplicateClass)
                    ? v
                        .children(
                          '.' +
                            f.slideClass +
                            ':not(.' +
                            f.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            b.attr('data-swiper-slide-index') +
                            '"]'
                        )
                        .addClass(f.slideDuplicateNextClass)
                    : v
                        .children(
                          '.' +
                            f.slideClass +
                            '.' +
                            f.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            b.attr('data-swiper-slide-index') +
                            '"]'
                        )
                        .addClass(f.slideDuplicateNextClass),
                  y.hasClass(f.slideDuplicateClass)
                    ? v
                        .children(
                          '.' +
                            f.slideClass +
                            ':not(.' +
                            f.slideDuplicateClass +
                            ')[data-swiper-slide-index="' +
                            y.attr('data-swiper-slide-index') +
                            '"]'
                        )
                        .addClass(f.slideDuplicatePrevClass)
                    : v
                        .children(
                          '.' +
                            f.slideClass +
                            '.' +
                            f.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            y.attr('data-swiper-slide-index') +
                            '"]'
                        )
                        .addClass(f.slideDuplicatePrevClass)),
                c.emitSlidesClasses();
            },
            updateActiveIndex: function updateActiveIndex(n) {
              var c,
                h = this,
                f = h.rtlTranslate ? h.translate : -h.translate,
                v = h.slidesGrid,
                m = h.snapGrid,
                g = h.params,
                w = h.activeIndex,
                b = h.realIndex,
                y = h.snapIndex,
                x = n;
              if (void 0 === x) {
                for (var E = 0; E < v.length; E += 1)
                  void 0 !== v[E + 1]
                    ? f >= v[E] && f < v[E + 1] - (v[E + 1] - v[E]) / 2
                      ? (x = E)
                      : f >= v[E] && f < v[E + 1] && (x = E + 1)
                    : f >= v[E] && (x = E);
                g.normalizeSlideIndex && (x < 0 || void 0 === x) && (x = 0);
              }
              if (m.indexOf(f) >= 0) c = m.indexOf(f);
              else {
                var C = Math.min(g.slidesPerGroupSkip, x);
                c = C + Math.floor((x - C) / g.slidesPerGroup);
              }
              if ((c >= m.length && (c = m.length - 1), x !== w)) {
                var S = parseInt(h.slides.eq(x).attr('data-swiper-slide-index') || x, 10);
                extend(h, { snapIndex: c, realIndex: S, previousIndex: w, activeIndex: x }),
                  h.emit('activeIndexChange'),
                  h.emit('snapIndexChange'),
                  b !== S && h.emit('realIndexChange'),
                  (h.initialized || h.params.runCallbacksOnInit) && h.emit('slideChange');
              } else c !== y && ((h.snapIndex = c), h.emit('snapIndexChange'));
            },
            updateClickedSlide: function updateClickedSlide(n) {
              var c,
                h = this,
                f = h.params,
                v = $(n.target).closest('.' + f.slideClass)[0],
                m = !1;
              if (v)
                for (var g = 0; g < h.slides.length; g += 1)
                  if (h.slides[g] === v) {
                    (m = !0), (c = g);
                    break;
                  }
              if (!v || !m) return (h.clickedSlide = void 0), void (h.clickedIndex = void 0);
              (h.clickedSlide = v),
                h.virtual && h.params.virtual.enabled
                  ? (h.clickedIndex = parseInt($(v).attr('data-swiper-slide-index'), 10))
                  : (h.clickedIndex = c),
                f.slideToClickedSlide &&
                  void 0 !== h.clickedIndex &&
                  h.clickedIndex !== h.activeIndex &&
                  h.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function getSwiperTranslate(n) {
              void 0 === n && (n = this.isHorizontal() ? 'x' : 'y');
              var c = this,
                h = c.params,
                f = c.rtlTranslate,
                v = c.translate,
                m = c.$wrapperEl;
              if (h.virtualTranslate) return f ? -v : v;
              if (h.cssMode) return v;
              var g = getTranslate(m[0], n);
              return f && (g = -g), g || 0;
            },
            setTranslate: function setTranslate(n, c) {
              var h = this,
                f = h.rtlTranslate,
                v = h.params,
                m = h.$wrapperEl,
                g = h.wrapperEl,
                w = h.progress,
                b = 0,
                y = 0;
              h.isHorizontal() ? (b = f ? -n : n) : (y = n),
                v.roundLengths && ((b = Math.floor(b)), (y = Math.floor(y))),
                v.cssMode
                  ? (g[h.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = h.isHorizontal() ? -b : -y)
                  : v.virtualTranslate || m.transform('translate3d(' + b + 'px, ' + y + 'px, 0px)'),
                (h.previousTranslate = h.translate),
                (h.translate = h.isHorizontal() ? b : y);
              var x = h.maxTranslate() - h.minTranslate();
              (0 === x ? 0 : (n - h.minTranslate()) / x) !== w && h.updateProgress(n),
                h.emit('setTranslate', h.translate, c);
            },
            minTranslate: function minTranslate() {
              return -this.snapGrid[0];
            },
            maxTranslate: function maxTranslate() {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function translateTo(n, c, h, f, v) {
              void 0 === n && (n = 0),
                void 0 === c && (c = this.params.speed),
                void 0 === h && (h = !0),
                void 0 === f && (f = !0);
              var m = this,
                g = m.params,
                w = m.wrapperEl;
              if (m.animating && g.preventInteractionOnTransition) return !1;
              var b,
                y = m.minTranslate(),
                x = m.maxTranslate();
              if (((b = f && n > y ? y : f && n < x ? x : n), m.updateProgress(b), g.cssMode)) {
                var E,
                  C = m.isHorizontal();
                if (0 === c) w[C ? 'scrollLeft' : 'scrollTop'] = -b;
                else if (w.scrollTo) w.scrollTo((((E = {})[C ? 'left' : 'top'] = -b), (E.behavior = 'smooth'), E));
                else w[C ? 'scrollLeft' : 'scrollTop'] = -b;
                return !0;
              }
              return (
                0 === c
                  ? (m.setTransition(0),
                    m.setTranslate(b),
                    h && (m.emit('beforeTransitionStart', c, v), m.emit('transitionEnd')))
                  : (m.setTransition(c),
                    m.setTranslate(b),
                    h && (m.emit('beforeTransitionStart', c, v), m.emit('transitionStart')),
                    m.animating ||
                      ((m.animating = !0),
                      m.onTranslateToWrapperTransitionEnd ||
                        (m.onTranslateToWrapperTransitionEnd = function e(n) {
                          m &&
                            !m.destroyed &&
                            n.target === this &&
                            (m.$wrapperEl[0].removeEventListener('transitionend', m.onTranslateToWrapperTransitionEnd),
                            m.$wrapperEl[0].removeEventListener(
                              'webkitTransitionEnd',
                              m.onTranslateToWrapperTransitionEnd
                            ),
                            (m.onTranslateToWrapperTransitionEnd = null),
                            delete m.onTranslateToWrapperTransitionEnd,
                            h && m.emit('transitionEnd'));
                        }),
                      m.$wrapperEl[0].addEventListener('transitionend', m.onTranslateToWrapperTransitionEnd),
                      m.$wrapperEl[0].addEventListener('webkitTransitionEnd', m.onTranslateToWrapperTransitionEnd))),
                !0
              );
            },
          },
          transition: {
            setTransition: function setTransition(n, c) {
              var h = this;
              h.params.cssMode || h.$wrapperEl.transition(n), h.emit('setTransition', n, c);
            },
            transitionStart: function transitionStart(n, c) {
              void 0 === n && (n = !0);
              var h = this,
                f = h.activeIndex,
                v = h.params,
                m = h.previousIndex;
              if (!v.cssMode) {
                v.autoHeight && h.updateAutoHeight();
                var g = c;
                if ((g || (g = f > m ? 'next' : f < m ? 'prev' : 'reset'), h.emit('transitionStart'), n && f !== m)) {
                  if ('reset' === g) return void h.emit('slideResetTransitionStart');
                  h.emit('slideChangeTransitionStart'),
                    'next' === g ? h.emit('slideNextTransitionStart') : h.emit('slidePrevTransitionStart');
                }
              }
            },
            transitionEnd: function transitionEnd(n, c) {
              void 0 === n && (n = !0);
              var h = this,
                f = h.activeIndex,
                v = h.previousIndex,
                m = h.params;
              if (((h.animating = !1), !m.cssMode)) {
                h.setTransition(0);
                var g = c;
                if ((g || (g = f > v ? 'next' : f < v ? 'prev' : 'reset'), h.emit('transitionEnd'), n && f !== v)) {
                  if ('reset' === g) return void h.emit('slideResetTransitionEnd');
                  h.emit('slideChangeTransitionEnd'),
                    'next' === g ? h.emit('slideNextTransitionEnd') : h.emit('slidePrevTransitionEnd');
                }
              }
            },
          },
          slide: {
            slideTo: function slideTo(n, c, h, f, v) {
              if (
                (void 0 === n && (n = 0),
                void 0 === c && (c = this.params.speed),
                void 0 === h && (h = !0),
                'number' != typeof n && 'string' != typeof n)
              )
                throw new Error(
                  "The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof n + '] given.'
                );
              if ('string' == typeof n) {
                var m = parseInt(n, 10);
                if (!isFinite(m))
                  throw new Error(
                    "The passed-in 'index' (string) couldn't be converted to 'number'. [" + n + '] given.'
                  );
                n = m;
              }
              var g = this,
                w = n;
              w < 0 && (w = 0);
              var b = g.params,
                y = g.snapGrid,
                x = g.slidesGrid,
                E = g.previousIndex,
                C = g.activeIndex,
                S = g.rtlTranslate,
                A = g.wrapperEl,
                M = g.enabled;
              if ((g.animating && b.preventInteractionOnTransition) || (!M && !f && !v)) return !1;
              var k = Math.min(g.params.slidesPerGroupSkip, w),
                z = k + Math.floor((w - k) / g.params.slidesPerGroup);
              z >= y.length && (z = y.length - 1),
                (C || b.initialSlide || 0) === (E || 0) && h && g.emit('beforeSlideChangeStart');
              var P,
                O = -y[z];
              if ((g.updateProgress(O), b.normalizeSlideIndex))
                for (var L = 0; L < x.length; L += 1) {
                  var I = -Math.floor(100 * O),
                    D = Math.floor(100 * x[L]),
                    B = Math.floor(100 * x[L + 1]);
                  void 0 !== x[L + 1]
                    ? I >= D && I < B - (B - D) / 2
                      ? (w = L)
                      : I >= D && I < B && (w = L + 1)
                    : I >= D && (w = L);
                }
              if (g.initialized && w !== C) {
                if (!g.allowSlideNext && O < g.translate && O < g.minTranslate()) return !1;
                if (!g.allowSlidePrev && O > g.translate && O > g.maxTranslate() && (C || 0) !== w) return !1;
              }
              if (
                ((P = w > C ? 'next' : w < C ? 'prev' : 'reset'),
                (S && -O === g.translate) || (!S && O === g.translate))
              )
                return (
                  g.updateActiveIndex(w),
                  b.autoHeight && g.updateAutoHeight(),
                  g.updateSlidesClasses(),
                  'slide' !== b.effect && g.setTranslate(O),
                  'reset' !== P && (g.transitionStart(h, P), g.transitionEnd(h, P)),
                  !1
                );
              if (b.cssMode) {
                var N,
                  G = g.isHorizontal(),
                  Y = -O;
                if ((S && (Y = A.scrollWidth - A.offsetWidth - Y), 0 === c)) A[G ? 'scrollLeft' : 'scrollTop'] = Y;
                else if (A.scrollTo) A.scrollTo((((N = {})[G ? 'left' : 'top'] = Y), (N.behavior = 'smooth'), N));
                else A[G ? 'scrollLeft' : 'scrollTop'] = Y;
                return !0;
              }
              return (
                0 === c
                  ? (g.setTransition(0),
                    g.setTranslate(O),
                    g.updateActiveIndex(w),
                    g.updateSlidesClasses(),
                    g.emit('beforeTransitionStart', c, f),
                    g.transitionStart(h, P),
                    g.transitionEnd(h, P))
                  : (g.setTransition(c),
                    g.setTranslate(O),
                    g.updateActiveIndex(w),
                    g.updateSlidesClasses(),
                    g.emit('beforeTransitionStart', c, f),
                    g.transitionStart(h, P),
                    g.animating ||
                      ((g.animating = !0),
                      g.onSlideToWrapperTransitionEnd ||
                        (g.onSlideToWrapperTransitionEnd = function e(n) {
                          g &&
                            !g.destroyed &&
                            n.target === this &&
                            (g.$wrapperEl[0].removeEventListener('transitionend', g.onSlideToWrapperTransitionEnd),
                            g.$wrapperEl[0].removeEventListener('webkitTransitionEnd', g.onSlideToWrapperTransitionEnd),
                            (g.onSlideToWrapperTransitionEnd = null),
                            delete g.onSlideToWrapperTransitionEnd,
                            g.transitionEnd(h, P));
                        }),
                      g.$wrapperEl[0].addEventListener('transitionend', g.onSlideToWrapperTransitionEnd),
                      g.$wrapperEl[0].addEventListener('webkitTransitionEnd', g.onSlideToWrapperTransitionEnd))),
                !0
              );
            },
            slideToLoop: function slideToLoop(n, c, h, f) {
              void 0 === n && (n = 0), void 0 === c && (c = this.params.speed), void 0 === h && (h = !0);
              var v = this,
                m = n;
              return v.params.loop && (m += v.loopedSlides), v.slideTo(m, c, h, f);
            },
            slideNext: function slideNext(n, c, h) {
              void 0 === n && (n = this.params.speed), void 0 === c && (c = !0);
              var f = this,
                v = f.params,
                m = f.animating;
              if (!f.enabled) return f;
              var g = f.activeIndex < v.slidesPerGroupSkip ? 1 : v.slidesPerGroup;
              if (v.loop) {
                if (m && v.loopPreventsSlide) return !1;
                f.loopFix(), (f._clientLeft = f.$wrapperEl[0].clientLeft);
              }
              return f.slideTo(f.activeIndex + g, n, c, h);
            },
            slidePrev: function slidePrev(n, c, h) {
              void 0 === n && (n = this.params.speed), void 0 === c && (c = !0);
              var f = this,
                v = f.params,
                m = f.animating,
                g = f.snapGrid,
                w = f.slidesGrid,
                b = f.rtlTranslate;
              if (!f.enabled) return f;
              if (v.loop) {
                if (m && v.loopPreventsSlide) return !1;
                f.loopFix(), (f._clientLeft = f.$wrapperEl[0].clientLeft);
              }
              function u(n) {
                return n < 0 ? -Math.floor(Math.abs(n)) : Math.floor(n);
              }
              var y,
                x = u(b ? f.translate : -f.translate),
                E = g.map(function (n) {
                  return u(n);
                }),
                C = g[E.indexOf(x) - 1];
              return (
                void 0 === C &&
                  v.cssMode &&
                  g.forEach(function (n) {
                    !C && x >= n && (C = n);
                  }),
                void 0 !== C && (y = w.indexOf(C)) < 0 && (y = f.activeIndex - 1),
                f.slideTo(y, n, c, h)
              );
            },
            slideReset: function slideReset(n, c, h) {
              return (
                void 0 === n && (n = this.params.speed),
                void 0 === c && (c = !0),
                this.slideTo(this.activeIndex, n, c, h)
              );
            },
            slideToClosest: function slideToClosest(n, c, h, f) {
              void 0 === n && (n = this.params.speed), void 0 === c && (c = !0), void 0 === f && (f = 0.5);
              var v = this,
                m = v.activeIndex,
                g = Math.min(v.params.slidesPerGroupSkip, m),
                w = g + Math.floor((m - g) / v.params.slidesPerGroup),
                b = v.rtlTranslate ? v.translate : -v.translate;
              if (b >= v.snapGrid[w]) {
                var y = v.snapGrid[w];
                b - y > (v.snapGrid[w + 1] - y) * f && (m += v.params.slidesPerGroup);
              } else {
                var x = v.snapGrid[w - 1];
                b - x <= (v.snapGrid[w] - x) * f && (m -= v.params.slidesPerGroup);
              }
              return (m = Math.max(m, 0)), (m = Math.min(m, v.slidesGrid.length - 1)), v.slideTo(m, n, c, h);
            },
            slideToClickedSlide: function slideToClickedSlide() {
              var n,
                c = this,
                h = c.params,
                f = c.$wrapperEl,
                v = 'auto' === h.slidesPerView ? c.slidesPerViewDynamic() : h.slidesPerView,
                m = c.clickedIndex;
              if (h.loop) {
                if (c.animating) return;
                (n = parseInt($(c.clickedSlide).attr('data-swiper-slide-index'), 10)),
                  h.centeredSlides
                    ? m < c.loopedSlides - v / 2 || m > c.slides.length - c.loopedSlides + v / 2
                      ? (c.loopFix(),
                        (m = f
                          .children(
                            '.' +
                              h.slideClass +
                              '[data-swiper-slide-index="' +
                              n +
                              '"]:not(.' +
                              h.slideDuplicateClass +
                              ')'
                          )
                          .eq(0)
                          .index()),
                        nextTick(function () {
                          c.slideTo(m);
                        }))
                      : c.slideTo(m)
                    : m > c.slides.length - v
                    ? (c.loopFix(),
                      (m = f
                        .children(
                          '.' +
                            h.slideClass +
                            '[data-swiper-slide-index="' +
                            n +
                            '"]:not(.' +
                            h.slideDuplicateClass +
                            ')'
                        )
                        .eq(0)
                        .index()),
                      nextTick(function () {
                        c.slideTo(m);
                      }))
                    : c.slideTo(m);
              } else c.slideTo(m);
            },
          },
          loop: {
            loopCreate: function loopCreate() {
              var n = this,
                c = getDocument(),
                h = n.params,
                f = n.$wrapperEl;
              f.children('.' + h.slideClass + '.' + h.slideDuplicateClass).remove();
              var v = f.children('.' + h.slideClass);
              if (h.loopFillGroupWithBlank) {
                var m = h.slidesPerGroup - (v.length % h.slidesPerGroup);
                if (m !== h.slidesPerGroup) {
                  for (var g = 0; g < m; g += 1) {
                    var w = $(c.createElement('div')).addClass(h.slideClass + ' ' + h.slideBlankClass);
                    f.append(w);
                  }
                  v = f.children('.' + h.slideClass);
                }
              }
              'auto' !== h.slidesPerView || h.loopedSlides || (h.loopedSlides = v.length),
                (n.loopedSlides = Math.ceil(parseFloat(h.loopedSlides || h.slidesPerView, 10))),
                (n.loopedSlides += h.loopAdditionalSlides),
                n.loopedSlides > v.length && (n.loopedSlides = v.length);
              var b = [],
                y = [];
              v.each(function (c, h) {
                var f = $(c);
                h < n.loopedSlides && y.push(c),
                  h < v.length && h >= v.length - n.loopedSlides && b.push(c),
                  f.attr('data-swiper-slide-index', h);
              });
              for (var x = 0; x < y.length; x += 1) f.append($(y[x].cloneNode(!0)).addClass(h.slideDuplicateClass));
              for (var E = b.length - 1; E >= 0; E -= 1)
                f.prepend($(b[E].cloneNode(!0)).addClass(h.slideDuplicateClass));
            },
            loopFix: function loopFix() {
              var n = this;
              n.emit('beforeLoopFix');
              var c,
                h = n.activeIndex,
                f = n.slides,
                v = n.loopedSlides,
                m = n.allowSlidePrev,
                g = n.allowSlideNext,
                w = n.snapGrid,
                b = n.rtlTranslate;
              (n.allowSlidePrev = !0), (n.allowSlideNext = !0);
              var y = -w[h] - n.getTranslate();
              if (h < v)
                (c = f.length - 3 * v + h),
                  (c += v),
                  n.slideTo(c, 0, !1, !0) && 0 !== y && n.setTranslate((b ? -n.translate : n.translate) - y);
              else if (h >= f.length - v) {
                (c = -f.length + h + v),
                  (c += v),
                  n.slideTo(c, 0, !1, !0) && 0 !== y && n.setTranslate((b ? -n.translate : n.translate) - y);
              }
              (n.allowSlidePrev = m), (n.allowSlideNext = g), n.emit('loopFix');
            },
            loopDestroy: function loopDestroy() {
              var n = this,
                c = n.$wrapperEl,
                h = n.params,
                f = n.slides;
              c
                .children(
                  '.' + h.slideClass + '.' + h.slideDuplicateClass + ',.' + h.slideClass + '.' + h.slideBlankClass
                )
                .remove(),
                f.removeAttr('data-swiper-slide-index');
            },
          },
          grabCursor: {
            setGrabCursor: function setGrabCursor(n) {
              var c = this;
              if (
                !(
                  c.support.touch ||
                  !c.params.simulateTouch ||
                  (c.params.watchOverflow && c.isLocked) ||
                  c.params.cssMode
                )
              ) {
                var h = c.el;
                (h.style.cursor = 'move'),
                  (h.style.cursor = n ? '-webkit-grabbing' : '-webkit-grab'),
                  (h.style.cursor = n ? '-moz-grabbin' : '-moz-grab'),
                  (h.style.cursor = n ? 'grabbing' : 'grab');
              }
            },
            unsetGrabCursor: function unsetGrabCursor() {
              var n = this;
              n.support.touch || (n.params.watchOverflow && n.isLocked) || n.params.cssMode || (n.el.style.cursor = '');
            },
          },
          manipulation: {
            appendSlide: function appendSlide(n) {
              var c = this,
                h = c.$wrapperEl,
                f = c.params;
              if ((f.loop && c.loopDestroy(), 'object' == typeof n && 'length' in n))
                for (var v = 0; v < n.length; v += 1) n[v] && h.append(n[v]);
              else h.append(n);
              f.loop && c.loopCreate(), (f.observer && c.support.observer) || c.update();
            },
            prependSlide: function prependSlide(n) {
              var c = this,
                h = c.params,
                f = c.$wrapperEl,
                v = c.activeIndex;
              h.loop && c.loopDestroy();
              var m = v + 1;
              if ('object' == typeof n && 'length' in n) {
                for (var g = 0; g < n.length; g += 1) n[g] && f.prepend(n[g]);
                m = v + n.length;
              } else f.prepend(n);
              h.loop && c.loopCreate(), (h.observer && c.support.observer) || c.update(), c.slideTo(m, 0, !1);
            },
            addSlide: function addSlide(n, c) {
              var h = this,
                f = h.$wrapperEl,
                v = h.params,
                m = h.activeIndex;
              v.loop && ((m -= h.loopedSlides), h.loopDestroy(), (h.slides = f.children('.' + v.slideClass)));
              var g = h.slides.length;
              if (n <= 0) h.prependSlide(c);
              else if (n >= g) h.appendSlide(c);
              else {
                for (var w = m > n ? m + 1 : m, b = [], y = g - 1; y >= n; y -= 1) {
                  var x = h.slides.eq(y);
                  x.remove(), b.unshift(x);
                }
                if ('object' == typeof c && 'length' in c) {
                  for (var E = 0; E < c.length; E += 1) c[E] && f.append(c[E]);
                  w = m > n ? m + c.length : m;
                } else f.append(c);
                for (var C = 0; C < b.length; C += 1) f.append(b[C]);
                v.loop && h.loopCreate(),
                  (v.observer && h.support.observer) || h.update(),
                  v.loop ? h.slideTo(w + h.loopedSlides, 0, !1) : h.slideTo(w, 0, !1);
              }
            },
            removeSlide: function removeSlide(n) {
              var c = this,
                h = c.params,
                f = c.$wrapperEl,
                v = c.activeIndex;
              h.loop && ((v -= c.loopedSlides), c.loopDestroy(), (c.slides = f.children('.' + h.slideClass)));
              var m,
                g = v;
              if ('object' == typeof n && 'length' in n) {
                for (var w = 0; w < n.length; w += 1)
                  (m = n[w]), c.slides[m] && c.slides.eq(m).remove(), m < g && (g -= 1);
                g = Math.max(g, 0);
              } else (m = n), c.slides[m] && c.slides.eq(m).remove(), m < g && (g -= 1), (g = Math.max(g, 0));
              h.loop && c.loopCreate(),
                (h.observer && c.support.observer) || c.update(),
                h.loop ? c.slideTo(g + c.loopedSlides, 0, !1) : c.slideTo(g, 0, !1);
            },
            removeAllSlides: function removeAllSlides() {
              for (var n = [], c = 0; c < this.slides.length; c += 1) n.push(c);
              this.removeSlide(n);
            },
          },
          events: {
            attachEvents: function attachEvents() {
              var n = this,
                c = getDocument(),
                h = n.params,
                f = n.touchEvents,
                v = n.el,
                m = n.wrapperEl,
                g = n.device,
                w = n.support;
              (n.onTouchStart = onTouchStart.bind(n)),
                (n.onTouchMove = onTouchMove.bind(n)),
                (n.onTouchEnd = onTouchEnd.bind(n)),
                h.cssMode && (n.onScroll = onScroll.bind(n)),
                (n.onClick = onClick.bind(n));
              var b = !!h.nested;
              if (!w.touch && w.pointerEvents)
                v.addEventListener(f.start, n.onTouchStart, !1),
                  c.addEventListener(f.move, n.onTouchMove, b),
                  c.addEventListener(f.end, n.onTouchEnd, !1);
              else {
                if (w.touch) {
                  var y = !('touchstart' !== f.start || !w.passiveListener || !h.passiveListeners) && {
                    passive: !0,
                    capture: !1,
                  };
                  v.addEventListener(f.start, n.onTouchStart, y),
                    v.addEventListener(f.move, n.onTouchMove, w.passiveListener ? { passive: !1, capture: b } : b),
                    v.addEventListener(f.end, n.onTouchEnd, y),
                    f.cancel && v.addEventListener(f.cancel, n.onTouchEnd, y),
                    k || (c.addEventListener('touchstart', dummyEventListener), (k = !0));
                }
                ((h.simulateTouch && !g.ios && !g.android) || (h.simulateTouch && !w.touch && g.ios)) &&
                  (v.addEventListener('mousedown', n.onTouchStart, !1),
                  c.addEventListener('mousemove', n.onTouchMove, b),
                  c.addEventListener('mouseup', n.onTouchEnd, !1));
              }
              (h.preventClicks || h.preventClicksPropagation) && v.addEventListener('click', n.onClick, !0),
                h.cssMode && m.addEventListener('scroll', n.onScroll),
                h.updateOnWindowResize
                  ? n.on(
                      g.ios || g.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
                      onResize,
                      !0
                    )
                  : n.on('observerUpdate', onResize, !0);
            },
            detachEvents: function detachEvents() {
              var n = this,
                c = getDocument(),
                h = n.params,
                f = n.touchEvents,
                v = n.el,
                m = n.wrapperEl,
                g = n.device,
                w = n.support,
                b = !!h.nested;
              if (!w.touch && w.pointerEvents)
                v.removeEventListener(f.start, n.onTouchStart, !1),
                  c.removeEventListener(f.move, n.onTouchMove, b),
                  c.removeEventListener(f.end, n.onTouchEnd, !1);
              else {
                if (w.touch) {
                  var y = !('onTouchStart' !== f.start || !w.passiveListener || !h.passiveListeners) && {
                    passive: !0,
                    capture: !1,
                  };
                  v.removeEventListener(f.start, n.onTouchStart, y),
                    v.removeEventListener(f.move, n.onTouchMove, b),
                    v.removeEventListener(f.end, n.onTouchEnd, y),
                    f.cancel && v.removeEventListener(f.cancel, n.onTouchEnd, y);
                }
                ((h.simulateTouch && !g.ios && !g.android) || (h.simulateTouch && !w.touch && g.ios)) &&
                  (v.removeEventListener('mousedown', n.onTouchStart, !1),
                  c.removeEventListener('mousemove', n.onTouchMove, b),
                  c.removeEventListener('mouseup', n.onTouchEnd, !1));
              }
              (h.preventClicks || h.preventClicksPropagation) && v.removeEventListener('click', n.onClick, !0),
                h.cssMode && m.removeEventListener('scroll', n.onScroll),
                n.off(
                  g.ios || g.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
                  onResize
                );
            },
          },
          breakpoints: {
            setBreakpoint: function setBreakpoint() {
              var n = this,
                c = n.activeIndex,
                h = n.initialized,
                f = n.loopedSlides,
                v = void 0 === f ? 0 : f,
                m = n.params,
                g = n.$el,
                w = m.breakpoints;
              if (w && (!w || 0 !== Object.keys(w).length)) {
                var b = n.getBreakpoint(w, n.params.breakpointsBase, n.el);
                if (b && n.currentBreakpoint !== b) {
                  var y = b in w ? w[b] : void 0;
                  y &&
                    [
                      'slidesPerView',
                      'spaceBetween',
                      'slidesPerGroup',
                      'slidesPerGroupSkip',
                      'slidesPerColumn',
                    ].forEach(function (n) {
                      var c = y[n];
                      void 0 !== c &&
                        (y[n] =
                          'slidesPerView' !== n || ('AUTO' !== c && 'auto' !== c)
                            ? 'slidesPerView' === n
                              ? parseFloat(c)
                              : parseInt(c, 10)
                            : 'auto');
                    });
                  var x = y || n.originalParams,
                    E = m.slidesPerColumn > 1,
                    C = x.slidesPerColumn > 1,
                    S = m.enabled;
                  E && !C
                    ? (g.removeClass(
                        m.containerModifierClass + 'multirow ' + m.containerModifierClass + 'multirow-column'
                      ),
                      n.emitContainerClasses())
                    : !E &&
                      C &&
                      (g.addClass(m.containerModifierClass + 'multirow'),
                      'column' === x.slidesPerColumnFill && g.addClass(m.containerModifierClass + 'multirow-column'),
                      n.emitContainerClasses());
                  var A = x.direction && x.direction !== m.direction,
                    M = m.loop && (x.slidesPerView !== m.slidesPerView || A);
                  A && h && n.changeDirection(), extend(n.params, x);
                  var k = n.params.enabled;
                  extend(n, {
                    allowTouchMove: n.params.allowTouchMove,
                    allowSlideNext: n.params.allowSlideNext,
                    allowSlidePrev: n.params.allowSlidePrev,
                  }),
                    S && !k ? n.disable() : !S && k && n.enable(),
                    (n.currentBreakpoint = b),
                    n.emit('_beforeBreakpoint', x),
                    M &&
                      h &&
                      (n.loopDestroy(), n.loopCreate(), n.updateSlides(), n.slideTo(c - v + n.loopedSlides, 0, !1)),
                    n.emit('breakpoint', x);
                }
              }
            },
            getBreakpoint: function getBreakpoint(n, c, h) {
              if ((void 0 === c && (c = 'window'), n && ('container' !== c || h))) {
                var f = !1,
                  v = getWindow(),
                  m = 'window' === c ? v.innerHeight : h.clientHeight,
                  g = Object.keys(n).map(function (n) {
                    if ('string' == typeof n && 0 === n.indexOf('@')) {
                      var c = parseFloat(n.substr(1));
                      return { value: m * c, point: n };
                    }
                    return { value: n, point: n };
                  });
                g.sort(function (n, c) {
                  return parseInt(n.value, 10) - parseInt(c.value, 10);
                });
                for (var w = 0; w < g.length; w += 1) {
                  var b = g[w],
                    y = b.point,
                    x = b.value;
                  'window' === c
                    ? v.matchMedia('(min-width: ' + x + 'px)').matches && (f = y)
                    : x <= h.clientWidth && (f = y);
                }
                return f || 'max';
              }
            },
          },
          checkOverflow: {
            checkOverflow: function checkOverflow() {
              var n = this,
                c = n.params,
                h = n.isLocked,
                f =
                  n.slides.length > 0 &&
                  c.slidesOffsetBefore +
                    c.spaceBetween * (n.slides.length - 1) +
                    n.slides[0].offsetWidth * n.slides.length;
              c.slidesOffsetBefore && c.slidesOffsetAfter && f
                ? (n.isLocked = f <= n.size)
                : (n.isLocked = 1 === n.snapGrid.length),
                (n.allowSlideNext = !n.isLocked),
                (n.allowSlidePrev = !n.isLocked),
                h !== n.isLocked && n.emit(n.isLocked ? 'lock' : 'unlock'),
                h && h !== n.isLocked && ((n.isEnd = !1), n.navigation && n.navigation.update());
            },
          },
          classes: {
            addClasses: function addClasses() {
              var n = this,
                c = n.classNames,
                h = n.params,
                f = n.rtl,
                v = n.$el,
                m = n.device,
                g = n.support,
                w = (function prepareClasses(n, c) {
                  var h = [];
                  return (
                    n.forEach(function (n) {
                      'object' == typeof n
                        ? Object.keys(n).forEach(function (f) {
                            n[f] && h.push(c + f);
                          })
                        : 'string' == typeof n && h.push(c + n);
                    }),
                    h
                  );
                })(
                  [
                    'initialized',
                    h.direction,
                    { 'pointer-events': g.pointerEvents && !g.touch },
                    { 'free-mode': h.freeMode },
                    { autoheight: h.autoHeight },
                    { rtl: f },
                    { multirow: h.slidesPerColumn > 1 },
                    { 'multirow-column': h.slidesPerColumn > 1 && 'column' === h.slidesPerColumnFill },
                    { android: m.android },
                    { ios: m.ios },
                    { 'css-mode': h.cssMode },
                  ],
                  h.containerModifierClass
                );
              c.push.apply(c, w), v.addClass([].concat(c).join(' ')), n.emitContainerClasses();
            },
            removeClasses: function removeClasses() {
              var n = this,
                c = n.$el,
                h = n.classNames;
              c.removeClass(h.join(' ')), n.emitContainerClasses();
            },
          },
          images: {
            loadImage: function loadImage(n, c, h, f, v, m) {
              var g,
                w = getWindow();
              function l() {
                m && m();
              }
              $(n).parent('picture')[0] || (n.complete && v)
                ? l()
                : c
                ? (((g = new w.Image()).onload = l),
                  (g.onerror = l),
                  f && (g.sizes = f),
                  h && (g.srcset = h),
                  c && (g.src = c))
                : l();
            },
            preloadImages: function preloadImages() {
              var n = this;
              function t() {
                null != n &&
                  n &&
                  !n.destroyed &&
                  (void 0 !== n.imagesLoaded && (n.imagesLoaded += 1),
                  n.imagesLoaded === n.imagesToLoad.length &&
                    (n.params.updateOnImagesReady && n.update(), n.emit('imagesReady')));
              }
              n.imagesToLoad = n.$el.find('img');
              for (var c = 0; c < n.imagesToLoad.length; c += 1) {
                var h = n.imagesToLoad[c];
                n.loadImage(
                  h,
                  h.currentSrc || h.getAttribute('src'),
                  h.srcset || h.getAttribute('srcset'),
                  h.sizes || h.getAttribute('sizes'),
                  !0,
                  t
                );
              }
            },
          },
        },
        O = {},
        L = (function () {
          function e() {
            for (var n, c, h = arguments.length, f = new Array(h), v = 0; v < h; v++) f[v] = arguments[v];
            if (
              (1 === f.length && f[0].constructor && 'Object' === Object.prototype.toString.call(f[0]).slice(8, -1)
                ? (c = f[0])
                : ((n = f[0]), (c = f[1])),
              c || (c = {}),
              (c = extend({}, c)),
              n && !c.el && (c.el = n),
              c.el && $(c.el).length > 1)
            ) {
              var m = [];
              return (
                $(c.el).each(function (n) {
                  var h = extend({}, c, { el: n });
                  m.push(new e(h));
                }),
                m
              );
            }
            var g = this;
            (g.__swiper__ = !0),
              (g.support = getSupport()),
              (g.device = getDevice({ userAgent: c.userAgent })),
              (g.browser = getBrowser()),
              (g.eventsListeners = {}),
              (g.eventsAnyListeners = []),
              void 0 === g.modules && (g.modules = {}),
              Object.keys(g.modules).forEach(function (n) {
                var h = g.modules[n];
                if (h.params) {
                  var f = Object.keys(h.params)[0],
                    v = h.params[f];
                  if ('object' != typeof v || null === v) return;
                  if (
                    (['navigation', 'pagination', 'scrollbar'].indexOf(f) >= 0 && !0 === c[f] && (c[f] = { auto: !0 }),
                    !(f in c) || !('enabled' in v))
                  )
                    return;
                  !0 === c[f] && (c[f] = { enabled: !0 }),
                    'object' != typeof c[f] || 'enabled' in c[f] || (c[f].enabled = !0),
                    c[f] || (c[f] = { enabled: !1 });
                }
              });
            var w = extend({}, z);
            return (
              g.useParams(w),
              (g.params = extend({}, w, O, c)),
              (g.originalParams = extend({}, g.params)),
              (g.passedParams = extend({}, c)),
              g.params &&
                g.params.on &&
                Object.keys(g.params.on).forEach(function (n) {
                  g.on(n, g.params.on[n]);
                }),
              g.params && g.params.onAny && g.onAny(g.params.onAny),
              (g.$ = $),
              extend(g, {
                enabled: g.params.enabled,
                el: n,
                classNames: [],
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function e() {
                  return 'horizontal' === g.params.direction;
                },
                isVertical: function e() {
                  return 'vertical' === g.params.direction;
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: g.params.allowSlideNext,
                allowSlidePrev: g.params.allowSlidePrev,
                touchEvents: (function e() {
                  var n = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
                    c = ['mousedown', 'mousemove', 'mouseup'];
                  return (
                    g.support.pointerEvents && (c = ['pointerdown', 'pointermove', 'pointerup']),
                    (g.touchEventsTouch = { start: n[0], move: n[1], end: n[2], cancel: n[3] }),
                    (g.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }),
                    g.support.touch || !g.params.simulateTouch ? g.touchEventsTouch : g.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: g.params.focusableElements,
                  lastClickTime: now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: g.params.allowTouchMove,
                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              g.useModules(),
              g.emit('_swiper'),
              g.params.init && g.init(),
              g
            );
          }
          var n = e.prototype;
          return (
            (n.enable = function e() {
              var n = this;
              n.enabled || ((n.enabled = !0), n.params.grabCursor && n.setGrabCursor(), n.emit('enable'));
            }),
            (n.disable = function e() {
              var n = this;
              n.enabled && ((n.enabled = !1), n.params.grabCursor && n.unsetGrabCursor(), n.emit('disable'));
            }),
            (n.setProgress = function e(n, c) {
              var h = this;
              n = Math.min(Math.max(n, 0), 1);
              var f = h.minTranslate(),
                v = (h.maxTranslate() - f) * n + f;
              h.translateTo(v, void 0 === c ? 0 : c), h.updateActiveIndex(), h.updateSlidesClasses();
            }),
            (n.emitContainerClasses = function e() {
              var n = this;
              if (n.params._emitClasses && n.el) {
                var c = n.el.className.split(' ').filter(function (c) {
                  return 0 === c.indexOf('swiper-container') || 0 === c.indexOf(n.params.containerModifierClass);
                });
                n.emit('_containerClasses', c.join(' '));
              }
            }),
            (n.getSlideClasses = function e(n) {
              var c = this;
              return n.className
                .split(' ')
                .filter(function (n) {
                  return 0 === n.indexOf('swiper-slide') || 0 === n.indexOf(c.params.slideClass);
                })
                .join(' ');
            }),
            (n.emitSlidesClasses = function e() {
              var n = this;
              if (n.params._emitClasses && n.el) {
                var c = [];
                n.slides.each(function (h) {
                  var f = n.getSlideClasses(h);
                  c.push({ slideEl: h, classNames: f }), n.emit('_slideClass', h, f);
                }),
                  n.emit('_slideClasses', c);
              }
            }),
            (n.slidesPerViewDynamic = function e() {
              var n = this,
                c = n.params,
                h = n.slides,
                f = n.slidesGrid,
                v = n.size,
                m = n.activeIndex,
                g = 1;
              if (c.centeredSlides) {
                for (var w, b = h[m].swiperSlideSize, y = m + 1; y < h.length; y += 1)
                  h[y] && !w && ((g += 1), (b += h[y].swiperSlideSize) > v && (w = !0));
                for (var x = m - 1; x >= 0; x -= 1)
                  h[x] && !w && ((g += 1), (b += h[x].swiperSlideSize) > v && (w = !0));
              } else for (var E = m + 1; E < h.length; E += 1) f[E] - f[m] < v && (g += 1);
              return g;
            }),
            (n.update = function e() {
              var n = this;
              if (n && !n.destroyed) {
                var c = n.snapGrid,
                  h = n.params;
                h.breakpoints && n.setBreakpoint(),
                  n.updateSize(),
                  n.updateSlides(),
                  n.updateProgress(),
                  n.updateSlidesClasses(),
                  n.params.freeMode
                    ? (i(), n.params.autoHeight && n.updateAutoHeight())
                    : (('auto' === n.params.slidesPerView || n.params.slidesPerView > 1) &&
                      n.isEnd &&
                      !n.params.centeredSlides
                        ? n.slideTo(n.slides.length - 1, 0, !1, !0)
                        : n.slideTo(n.activeIndex, 0, !1, !0)) || i(),
                  h.watchOverflow && c !== n.snapGrid && n.checkOverflow(),
                  n.emit('update');
              }
              function i() {
                var c = n.rtlTranslate ? -1 * n.translate : n.translate,
                  h = Math.min(Math.max(c, n.maxTranslate()), n.minTranslate());
                n.setTranslate(h), n.updateActiveIndex(), n.updateSlidesClasses();
              }
            }),
            (n.changeDirection = function e(n, c) {
              void 0 === c && (c = !0);
              var h = this,
                f = h.params.direction;
              return (
                n || (n = 'horizontal' === f ? 'vertical' : 'horizontal'),
                n === f ||
                  ('horizontal' !== n && 'vertical' !== n) ||
                  (h.$el
                    .removeClass('' + h.params.containerModifierClass + f)
                    .addClass('' + h.params.containerModifierClass + n),
                  h.emitContainerClasses(),
                  (h.params.direction = n),
                  h.slides.each(function (c) {
                    'vertical' === n ? (c.style.width = '') : (c.style.height = '');
                  }),
                  h.emit('changeDirection'),
                  c && h.update()),
                h
              );
            }),
            (n.mount = function e(n) {
              var c = this;
              if (c.mounted) return !0;
              var h = $(n || c.params.el);
              if (!(n = h[0])) return !1;
              n.swiper = c;
              var f = function e() {
                  return '.' + (c.params.wrapperClass || '').trim().split(' ').join('.');
                },
                v = (function e() {
                  if (n && n.shadowRoot && n.shadowRoot.querySelector) {
                    var c = $(n.shadowRoot.querySelector(f()));
                    return (
                      (c.children = function (n) {
                        return h.children(n);
                      }),
                      c
                    );
                  }
                  return h.children(f());
                })();
              if (0 === v.length && c.params.createElements) {
                var m = getDocument().createElement('div');
                (v = $(m)),
                  (m.className = c.params.wrapperClass),
                  h.append(m),
                  h.children('.' + c.params.slideClass).each(function (n) {
                    v.append(n);
                  });
              }
              return (
                extend(c, {
                  $el: h,
                  el: n,
                  $wrapperEl: v,
                  wrapperEl: v[0],
                  mounted: !0,
                  rtl: 'rtl' === n.dir.toLowerCase() || 'rtl' === h.css('direction'),
                  rtlTranslate:
                    'horizontal' === c.params.direction &&
                    ('rtl' === n.dir.toLowerCase() || 'rtl' === h.css('direction')),
                  wrongRTL: '-webkit-box' === v.css('display'),
                }),
                !0
              );
            }),
            (n.init = function e(n) {
              var c = this;
              return (
                c.initialized ||
                  !1 === c.mount(n) ||
                  (c.emit('beforeInit'),
                  c.params.breakpoints && c.setBreakpoint(),
                  c.addClasses(),
                  c.params.loop && c.loopCreate(),
                  c.updateSize(),
                  c.updateSlides(),
                  c.params.watchOverflow && c.checkOverflow(),
                  c.params.grabCursor && c.enabled && c.setGrabCursor(),
                  c.params.preloadImages && c.preloadImages(),
                  c.params.loop
                    ? c.slideTo(c.params.initialSlide + c.loopedSlides, 0, c.params.runCallbacksOnInit, !1, !0)
                    : c.slideTo(c.params.initialSlide, 0, c.params.runCallbacksOnInit, !1, !0),
                  c.attachEvents(),
                  (c.initialized = !0),
                  c.emit('init'),
                  c.emit('afterInit')),
                c
              );
            }),
            (n.destroy = function e(n, c) {
              void 0 === n && (n = !0), void 0 === c && (c = !0);
              var h = this,
                f = h.params,
                v = h.$el,
                m = h.$wrapperEl,
                g = h.slides;
              return (
                void 0 === h.params ||
                  h.destroyed ||
                  (h.emit('beforeDestroy'),
                  (h.initialized = !1),
                  h.detachEvents(),
                  f.loop && h.loopDestroy(),
                  c &&
                    (h.removeClasses(),
                    v.removeAttr('style'),
                    m.removeAttr('style'),
                    g &&
                      g.length &&
                      g
                        .removeClass(
                          [f.slideVisibleClass, f.slideActiveClass, f.slideNextClass, f.slidePrevClass].join(' ')
                        )
                        .removeAttr('style')
                        .removeAttr('data-swiper-slide-index')),
                  h.emit('destroy'),
                  Object.keys(h.eventsListeners).forEach(function (n) {
                    h.off(n);
                  }),
                  !1 !== n &&
                    ((h.$el[0].swiper = null),
                    (function deleteProps(n) {
                      var c = n;
                      Object.keys(c).forEach(function (n) {
                        try {
                          c[n] = null;
                        } catch (n) {}
                        try {
                          delete c[n];
                        } catch (n) {}
                      });
                    })(h)),
                  (h.destroyed = !0)),
                null
              );
            }),
            (e.extendDefaults = function e(n) {
              extend(O, n);
            }),
            (e.installModule = function t(n) {
              e.prototype.modules || (e.prototype.modules = {});
              var c = n.name || Object.keys(e.prototype.modules).length + '_' + now();
              e.prototype.modules[c] = n;
            }),
            (e.use = function t(n) {
              return Array.isArray(n)
                ? (n.forEach(function (n) {
                    return e.installModule(n);
                  }),
                  e)
                : (e.installModule(n), e);
            }),
            (function _createClass(n, c, h) {
              return c && _defineProperties(n.prototype, c), h && _defineProperties(n, h), n;
            })(e, null, [
              {
                key: 'extendedDefaults',
                get: function e() {
                  return O;
                },
              },
              {
                key: 'defaults',
                get: function e() {
                  return z;
                },
              },
            ]),
            e
          );
        })();
      function _extends$h() {
        return (_extends$h =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      Object.keys(P).forEach(function (n) {
        Object.keys(P[n]).forEach(function (c) {
          L.prototype[c] = P[n][c];
        });
      }),
        L.use([S, M]);
      var I = {
          update: function e(n) {
            var c = this,
              h = c.params,
              f = h.slidesPerView,
              v = h.slidesPerGroup,
              m = h.centeredSlides,
              g = c.params.virtual,
              w = g.addSlidesBefore,
              b = g.addSlidesAfter,
              y = c.virtual,
              x = y.from,
              E = y.to,
              C = y.slides,
              S = y.slidesGrid,
              A = y.renderSlide,
              M = y.offset;
            c.updateActiveIndex();
            var k,
              z,
              P,
              O = c.activeIndex || 0;
            (k = c.rtlTranslate ? 'right' : c.isHorizontal() ? 'left' : 'top'),
              m
                ? ((z = Math.floor(f / 2) + v + b), (P = Math.floor(f / 2) + v + w))
                : ((z = f + (v - 1) + b), (P = v + w));
            var L = Math.max((O || 0) - P, 0),
              I = Math.min((O || 0) + z, C.length - 1),
              D = (c.slidesGrid[L] || 0) - (c.slidesGrid[0] || 0);
            function T() {
              c.updateSlides(),
                c.updateProgress(),
                c.updateSlidesClasses(),
                c.lazy && c.params.lazy.enabled && c.lazy.load();
            }
            if ((extend(c.virtual, { from: L, to: I, offset: D, slidesGrid: c.slidesGrid }), x === L && E === I && !n))
              return c.slidesGrid !== S && D !== M && c.slides.css(k, D + 'px'), void c.updateProgress();
            if (c.params.virtual.renderExternal)
              return (
                c.params.virtual.renderExternal.call(c, {
                  offset: D,
                  from: L,
                  to: I,
                  slides: (function e() {
                    for (var n = [], c = L; c <= I; c += 1) n.push(C[c]);
                    return n;
                  })(),
                }),
                void (c.params.virtual.renderExternalUpdate && T())
              );
            var B = [],
              N = [];
            if (n) c.$wrapperEl.find('.' + c.params.slideClass).remove();
            else
              for (var G = x; G <= E; G += 1)
                (G < L || G > I) &&
                  c.$wrapperEl.find('.' + c.params.slideClass + '[data-swiper-slide-index="' + G + '"]').remove();
            for (var Y = 0; Y < C.length; Y += 1)
              Y >= L && Y <= I && (void 0 === E || n ? N.push(Y) : (Y > E && N.push(Y), Y < x && B.push(Y)));
            N.forEach(function (n) {
              c.$wrapperEl.append(A(C[n], n));
            }),
              B.sort(function (n, c) {
                return c - n;
              }).forEach(function (n) {
                c.$wrapperEl.prepend(A(C[n], n));
              }),
              c.$wrapperEl.children('.swiper-slide').css(k, D + 'px'),
              T();
          },
          renderSlide: function e(n, c) {
            var h = this,
              f = h.params.virtual;
            if (f.cache && h.virtual.cache[c]) return h.virtual.cache[c];
            var v = f.renderSlide
              ? $(f.renderSlide.call(h, n, c))
              : $('<div class="' + h.params.slideClass + '" data-swiper-slide-index="' + c + '">' + n + '</div>');
            return (
              v.attr('data-swiper-slide-index') || v.attr('data-swiper-slide-index', c),
              f.cache && (h.virtual.cache[c] = v),
              v
            );
          },
          appendSlide: function e(n) {
            var c = this;
            if ('object' == typeof n && 'length' in n)
              for (var h = 0; h < n.length; h += 1) n[h] && c.virtual.slides.push(n[h]);
            else c.virtual.slides.push(n);
            c.virtual.update(!0);
          },
          prependSlide: function e(n) {
            var c = this,
              h = c.activeIndex,
              f = h + 1,
              v = 1;
            if (Array.isArray(n)) {
              for (var m = 0; m < n.length; m += 1) n[m] && c.virtual.slides.unshift(n[m]);
              (f = h + n.length), (v = n.length);
            } else c.virtual.slides.unshift(n);
            if (c.params.virtual.cache) {
              var g = c.virtual.cache,
                w = {};
              Object.keys(g).forEach(function (n) {
                var c = g[n],
                  h = c.attr('data-swiper-slide-index');
                h && c.attr('data-swiper-slide-index', parseInt(h, 10) + 1), (w[parseInt(n, 10) + v] = c);
              }),
                (c.virtual.cache = w);
            }
            c.virtual.update(!0), c.slideTo(f, 0);
          },
          removeSlide: function e(n) {
            var c = this;
            if (null != n) {
              var h = c.activeIndex;
              if (Array.isArray(n))
                for (var f = n.length - 1; f >= 0; f -= 1)
                  c.virtual.slides.splice(n[f], 1),
                    c.params.virtual.cache && delete c.virtual.cache[n[f]],
                    n[f] < h && (h -= 1),
                    (h = Math.max(h, 0));
              else
                c.virtual.slides.splice(n, 1),
                  c.params.virtual.cache && delete c.virtual.cache[n],
                  n < h && (h -= 1),
                  (h = Math.max(h, 0));
              c.virtual.update(!0), c.slideTo(h, 0);
            }
          },
          removeAllSlides: function e() {
            var n = this;
            (n.virtual.slides = []),
              n.params.virtual.cache && (n.virtual.cache = {}),
              n.virtual.update(!0),
              n.slideTo(0, 0);
          },
        },
        D = {
          name: 'virtual',
          params: {
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: !0,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          },
          create: function e() {
            bindModuleMethods(this, { virtual: _extends$h({}, I, { slides: this.params.virtual.slides, cache: {} }) });
          },
          on: {
            beforeInit: function e(n) {
              if (n.params.virtual.enabled) {
                n.classNames.push(n.params.containerModifierClass + 'virtual');
                var c = { watchSlidesProgress: !0 };
                extend(n.params, c), extend(n.originalParams, c), n.params.initialSlide || n.virtual.update();
              }
            },
            setTranslate: function e(n) {
              n.params.virtual.enabled && n.virtual.update();
            },
          },
        };
      function _extends$g() {
        return (_extends$g =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var B = {
          handle: function e(n) {
            var c = this;
            if (c.enabled) {
              var h = getWindow(),
                f = getDocument(),
                v = c.rtlTranslate,
                m = n;
              m.originalEvent && (m = m.originalEvent);
              var g = m.keyCode || m.charCode,
                w = c.params.keyboard.pageUpDown,
                b = w && 33 === g,
                y = w && 34 === g,
                x = 37 === g,
                E = 39 === g,
                C = 38 === g,
                S = 40 === g;
              if (!c.allowSlideNext && ((c.isHorizontal() && E) || (c.isVertical() && S) || y)) return !1;
              if (!c.allowSlidePrev && ((c.isHorizontal() && x) || (c.isVertical() && C) || b)) return !1;
              if (
                !(
                  m.shiftKey ||
                  m.altKey ||
                  m.ctrlKey ||
                  m.metaKey ||
                  (f.activeElement &&
                    f.activeElement.nodeName &&
                    ('input' === f.activeElement.nodeName.toLowerCase() ||
                      'textarea' === f.activeElement.nodeName.toLowerCase()))
                )
              ) {
                if (c.params.keyboard.onlyInViewport && (b || y || x || E || C || S)) {
                  var A = !1;
                  if (
                    c.$el.parents('.' + c.params.slideClass).length > 0 &&
                    0 === c.$el.parents('.' + c.params.slideActiveClass).length
                  )
                    return;
                  var M = c.$el,
                    k = M[0].clientWidth,
                    z = M[0].clientHeight,
                    P = h.innerWidth,
                    O = h.innerHeight,
                    L = c.$el.offset();
                  v && (L.left -= c.$el[0].scrollLeft);
                  for (
                    var I = [
                        [L.left, L.top],
                        [L.left + k, L.top],
                        [L.left, L.top + z],
                        [L.left + k, L.top + z],
                      ],
                      D = 0;
                    D < I.length;
                    D += 1
                  ) {
                    var B = I[D];
                    if (B[0] >= 0 && B[0] <= P && B[1] >= 0 && B[1] <= O) {
                      if (0 === B[0] && 0 === B[1]) continue;
                      A = !0;
                    }
                  }
                  if (!A) return;
                }
                c.isHorizontal()
                  ? ((b || y || x || E) && (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
                    (((y || E) && !v) || ((b || x) && v)) && c.slideNext(),
                    (((b || x) && !v) || ((y || E) && v)) && c.slidePrev())
                  : ((b || y || C || S) && (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
                    (y || S) && c.slideNext(),
                    (b || C) && c.slidePrev()),
                  c.emit('keyPress', g);
              }
            }
          },
          enable: function e() {
            var n = this,
              c = getDocument();
            n.keyboard.enabled || ($(c).on('keydown', n.keyboard.handle), (n.keyboard.enabled = !0));
          },
          disable: function e() {
            var n = this,
              c = getDocument();
            n.keyboard.enabled && ($(c).off('keydown', n.keyboard.handle), (n.keyboard.enabled = !1));
          },
        },
        N = {
          name: 'keyboard',
          params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
          create: function e() {
            bindModuleMethods(this, { keyboard: _extends$g({ enabled: !1 }, B) });
          },
          on: {
            init: function e(n) {
              n.params.keyboard.enabled && n.keyboard.enable();
            },
            destroy: function e(n) {
              n.keyboard.enabled && n.keyboard.disable();
            },
          },
        };
      var G = {
        lastScrollTime: now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function e() {
          return getWindow().navigator.userAgent.indexOf('firefox') > -1
            ? 'DOMMouseScroll'
            : (function isEventSupported() {
                var n = getDocument(),
                  c = 'onwheel',
                  h = c in n;
                if (!h) {
                  var f = n.createElement('div');
                  f.setAttribute(c, 'return;'), (h = 'function' == typeof f[c]);
                }
                return (
                  !h &&
                    n.implementation &&
                    n.implementation.hasFeature &&
                    !0 !== n.implementation.hasFeature('', '') &&
                    (h = n.implementation.hasFeature('Events.wheel', '3.0')),
                  h
                );
              })()
            ? 'wheel'
            : 'mousewheel';
        },
        normalize: function e(n) {
          var c = 0,
            h = 0,
            f = 0,
            v = 0;
          return (
            'detail' in n && (h = n.detail),
            'wheelDelta' in n && (h = -n.wheelDelta / 120),
            'wheelDeltaY' in n && (h = -n.wheelDeltaY / 120),
            'wheelDeltaX' in n && (c = -n.wheelDeltaX / 120),
            'axis' in n && n.axis === n.HORIZONTAL_AXIS && ((c = h), (h = 0)),
            (f = 10 * c),
            (v = 10 * h),
            'deltaY' in n && (v = n.deltaY),
            'deltaX' in n && (f = n.deltaX),
            n.shiftKey && !f && ((f = v), (v = 0)),
            (f || v) && n.deltaMode && (1 === n.deltaMode ? ((f *= 40), (v *= 40)) : ((f *= 800), (v *= 800))),
            f && !c && (c = f < 1 ? -1 : 1),
            v && !h && (h = v < 1 ? -1 : 1),
            { spinX: c, spinY: h, pixelX: f, pixelY: v }
          );
        },
        handleMouseEnter: function e() {
          this.enabled && (this.mouseEntered = !0);
        },
        handleMouseLeave: function e() {
          this.enabled && (this.mouseEntered = !1);
        },
        handle: function e(n) {
          var c = n,
            h = this;
          if (h.enabled) {
            var f = h.params.mousewheel;
            h.params.cssMode && c.preventDefault();
            var v = h.$el;
            if (
              ('container' !== h.params.mousewheel.eventsTarget && (v = $(h.params.mousewheel.eventsTarget)),
              !h.mouseEntered && !v[0].contains(c.target) && !f.releaseOnEdges)
            )
              return !0;
            c.originalEvent && (c = c.originalEvent);
            var m = 0,
              g = h.rtlTranslate ? -1 : 1,
              w = G.normalize(c);
            if (f.forceToAxis)
              if (h.isHorizontal()) {
                if (!(Math.abs(w.pixelX) > Math.abs(w.pixelY))) return !0;
                m = -w.pixelX * g;
              } else {
                if (!(Math.abs(w.pixelY) > Math.abs(w.pixelX))) return !0;
                m = -w.pixelY;
              }
            else m = Math.abs(w.pixelX) > Math.abs(w.pixelY) ? -w.pixelX * g : -w.pixelY;
            if (0 === m) return !0;
            f.invert && (m = -m);
            var b = h.getTranslate() + m * f.sensitivity;
            if (
              (b >= h.minTranslate() && (b = h.minTranslate()),
              b <= h.maxTranslate() && (b = h.maxTranslate()),
              (!!h.params.loop || !(b === h.minTranslate() || b === h.maxTranslate())) &&
                h.params.nested &&
                c.stopPropagation(),
              h.params.freeMode)
            ) {
              var y = { time: now(), delta: Math.abs(m), direction: Math.sign(m) },
                x = h.mousewheel.lastEventBeforeSnap,
                E = x && y.time < x.time + 500 && y.delta <= x.delta && y.direction === x.direction;
              if (!E) {
                (h.mousewheel.lastEventBeforeSnap = void 0), h.params.loop && h.loopFix();
                var C = h.getTranslate() + m * f.sensitivity,
                  S = h.isBeginning,
                  A = h.isEnd;
                if (
                  (C >= h.minTranslate() && (C = h.minTranslate()),
                  C <= h.maxTranslate() && (C = h.maxTranslate()),
                  h.setTransition(0),
                  h.setTranslate(C),
                  h.updateProgress(),
                  h.updateActiveIndex(),
                  h.updateSlidesClasses(),
                  ((!S && h.isBeginning) || (!A && h.isEnd)) && h.updateSlidesClasses(),
                  h.params.freeModeSticky)
                ) {
                  clearTimeout(h.mousewheel.timeout), (h.mousewheel.timeout = void 0);
                  var M = h.mousewheel.recentWheelEvents;
                  M.length >= 15 && M.shift();
                  var k = M.length ? M[M.length - 1] : void 0,
                    z = M[0];
                  if ((M.push(y), k && (y.delta > k.delta || y.direction !== k.direction))) M.splice(0);
                  else if (M.length >= 15 && y.time - z.time < 500 && z.delta - y.delta >= 1 && y.delta <= 6) {
                    var P = m > 0 ? 0.8 : 0.2;
                    (h.mousewheel.lastEventBeforeSnap = y),
                      M.splice(0),
                      (h.mousewheel.timeout = nextTick(function () {
                        h.slideToClosest(h.params.speed, !0, void 0, P);
                      }, 0));
                  }
                  h.mousewheel.timeout ||
                    (h.mousewheel.timeout = nextTick(function () {
                      (h.mousewheel.lastEventBeforeSnap = y),
                        M.splice(0),
                        h.slideToClosest(h.params.speed, !0, void 0, 0.5);
                    }, 500));
                }
                if (
                  (E || h.emit('scroll', c),
                  h.params.autoplay && h.params.autoplayDisableOnInteraction && h.autoplay.stop(),
                  C === h.minTranslate() || C === h.maxTranslate())
                )
                  return !0;
              }
            } else {
              var O = { time: now(), delta: Math.abs(m), direction: Math.sign(m), raw: n },
                L = h.mousewheel.recentWheelEvents;
              L.length >= 2 && L.shift();
              var I = L.length ? L[L.length - 1] : void 0;
              if (
                (L.push(O),
                I
                  ? (O.direction !== I.direction || O.delta > I.delta || O.time > I.time + 150) &&
                    h.mousewheel.animateSlider(O)
                  : h.mousewheel.animateSlider(O),
                h.mousewheel.releaseScroll(O))
              )
                return !0;
            }
            return c.preventDefault ? c.preventDefault() : (c.returnValue = !1), !1;
          }
        },
        animateSlider: function e(n) {
          var c = this,
            h = getWindow();
          return (
            !(this.params.mousewheel.thresholdDelta && n.delta < this.params.mousewheel.thresholdDelta) &&
            !(
              this.params.mousewheel.thresholdTime &&
              now() - c.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime
            ) &&
            ((n.delta >= 6 && now() - c.mousewheel.lastScrollTime < 60) ||
              (n.direction < 0
                ? (c.isEnd && !c.params.loop) || c.animating || (c.slideNext(), c.emit('scroll', n.raw))
                : (c.isBeginning && !c.params.loop) || c.animating || (c.slidePrev(), c.emit('scroll', n.raw)),
              (c.mousewheel.lastScrollTime = new h.Date().getTime()),
              !1))
          );
        },
        releaseScroll: function e(n) {
          var c = this,
            h = c.params.mousewheel;
          if (n.direction < 0) {
            if (c.isEnd && !c.params.loop && h.releaseOnEdges) return !0;
          } else if (c.isBeginning && !c.params.loop && h.releaseOnEdges) return !0;
          return !1;
        },
        enable: function e() {
          var n = this,
            c = G.event();
          if (n.params.cssMode) return n.wrapperEl.removeEventListener(c, n.mousewheel.handle), !0;
          if (!c) return !1;
          if (n.mousewheel.enabled) return !1;
          var h = n.$el;
          return (
            'container' !== n.params.mousewheel.eventsTarget && (h = $(n.params.mousewheel.eventsTarget)),
            h.on('mouseenter', n.mousewheel.handleMouseEnter),
            h.on('mouseleave', n.mousewheel.handleMouseLeave),
            h.on(c, n.mousewheel.handle),
            (n.mousewheel.enabled = !0),
            !0
          );
        },
        disable: function e() {
          var n = this,
            c = G.event();
          if (n.params.cssMode) return n.wrapperEl.addEventListener(c, n.mousewheel.handle), !0;
          if (!c) return !1;
          if (!n.mousewheel.enabled) return !1;
          var h = n.$el;
          return (
            'container' !== n.params.mousewheel.eventsTarget && (h = $(n.params.mousewheel.eventsTarget)),
            h.off(c, n.mousewheel.handle),
            (n.mousewheel.enabled = !1),
            !0
          );
        },
      };
      function _extends$f() {
        return (_extends$f =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var Y = {
        toggleEl: function e(n, c) {
          n[c ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass),
            n[0] && 'BUTTON' === n[0].tagName && (n[0].disabled = c);
        },
        update: function e() {
          var n = this,
            c = n.params.navigation,
            h = n.navigation.toggleEl;
          if (!n.params.loop) {
            var f = n.navigation,
              v = f.$nextEl,
              m = f.$prevEl;
            m &&
              m.length > 0 &&
              (n.isBeginning ? h(m, !0) : h(m, !1),
              n.params.watchOverflow && n.enabled && m[n.isLocked ? 'addClass' : 'removeClass'](c.lockClass)),
              v &&
                v.length > 0 &&
                (n.isEnd ? h(v, !0) : h(v, !1),
                n.params.watchOverflow && n.enabled && v[n.isLocked ? 'addClass' : 'removeClass'](c.lockClass));
          }
        },
        onPrevClick: function e(n) {
          var c = this;
          n.preventDefault(), (c.isBeginning && !c.params.loop) || c.slidePrev();
        },
        onNextClick: function e(n) {
          var c = this;
          n.preventDefault(), (c.isEnd && !c.params.loop) || c.slideNext();
        },
        init: function e() {
          var n,
            c,
            h = this,
            f = h.params.navigation;
          ((h.params.navigation = createElementIfNotDefined(h.$el, h.params.navigation, h.params.createElements, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev',
          })),
          f.nextEl || f.prevEl) &&
            (f.nextEl &&
              ((n = $(f.nextEl)),
              h.params.uniqueNavElements &&
                'string' == typeof f.nextEl &&
                n.length > 1 &&
                1 === h.$el.find(f.nextEl).length &&
                (n = h.$el.find(f.nextEl))),
            f.prevEl &&
              ((c = $(f.prevEl)),
              h.params.uniqueNavElements &&
                'string' == typeof f.prevEl &&
                c.length > 1 &&
                1 === h.$el.find(f.prevEl).length &&
                (c = h.$el.find(f.prevEl))),
            n && n.length > 0 && n.on('click', h.navigation.onNextClick),
            c && c.length > 0 && c.on('click', h.navigation.onPrevClick),
            extend(h.navigation, { $nextEl: n, nextEl: n && n[0], $prevEl: c, prevEl: c && c[0] }),
            h.enabled || (n && n.addClass(f.lockClass), c && c.addClass(f.lockClass)));
        },
        destroy: function e() {
          var n = this,
            c = n.navigation,
            h = c.$nextEl,
            f = c.$prevEl;
          h && h.length && (h.off('click', n.navigation.onNextClick), h.removeClass(n.params.navigation.disabledClass)),
            f &&
              f.length &&
              (f.off('click', n.navigation.onPrevClick), f.removeClass(n.params.navigation.disabledClass));
        },
      };
      function _extends$e() {
        return (_extends$e =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var j = {
        update: function e() {
          var n = this,
            c = n.rtl,
            h = n.params.pagination;
          if (h.el && n.pagination.el && n.pagination.$el && 0 !== n.pagination.$el.length) {
            var f,
              v = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
              m = n.pagination.$el,
              g = n.params.loop ? Math.ceil((v - 2 * n.loopedSlides) / n.params.slidesPerGroup) : n.snapGrid.length;
            if (
              (n.params.loop
                ? ((f = Math.ceil((n.activeIndex - n.loopedSlides) / n.params.slidesPerGroup)) >
                    v - 1 - 2 * n.loopedSlides && (f -= v - 2 * n.loopedSlides),
                  f > g - 1 && (f -= g),
                  f < 0 && 'bullets' !== n.params.paginationType && (f = g + f))
                : (f = void 0 !== n.snapIndex ? n.snapIndex : n.activeIndex || 0),
              'bullets' === h.type && n.pagination.bullets && n.pagination.bullets.length > 0)
            ) {
              var w,
                b,
                y,
                x = n.pagination.bullets;
              if (
                (h.dynamicBullets &&
                  ((n.pagination.bulletSize = x.eq(0)[n.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
                  m.css(
                    n.isHorizontal() ? 'width' : 'height',
                    n.pagination.bulletSize * (h.dynamicMainBullets + 4) + 'px'
                  ),
                  h.dynamicMainBullets > 1 &&
                    void 0 !== n.previousIndex &&
                    ((n.pagination.dynamicBulletIndex += f - n.previousIndex),
                    n.pagination.dynamicBulletIndex > h.dynamicMainBullets - 1
                      ? (n.pagination.dynamicBulletIndex = h.dynamicMainBullets - 1)
                      : n.pagination.dynamicBulletIndex < 0 && (n.pagination.dynamicBulletIndex = 0)),
                  (w = f - n.pagination.dynamicBulletIndex),
                  (y = ((b = w + (Math.min(x.length, h.dynamicMainBullets) - 1)) + w) / 2)),
                x.removeClass(
                  h.bulletActiveClass +
                    ' ' +
                    h.bulletActiveClass +
                    '-next ' +
                    h.bulletActiveClass +
                    '-next-next ' +
                    h.bulletActiveClass +
                    '-prev ' +
                    h.bulletActiveClass +
                    '-prev-prev ' +
                    h.bulletActiveClass +
                    '-main'
                ),
                m.length > 1)
              )
                x.each(function (n) {
                  var c = $(n),
                    v = c.index();
                  v === f && c.addClass(h.bulletActiveClass),
                    h.dynamicBullets &&
                      (v >= w && v <= b && c.addClass(h.bulletActiveClass + '-main'),
                      v === w &&
                        c
                          .prev()
                          .addClass(h.bulletActiveClass + '-prev')
                          .prev()
                          .addClass(h.bulletActiveClass + '-prev-prev'),
                      v === b &&
                        c
                          .next()
                          .addClass(h.bulletActiveClass + '-next')
                          .next()
                          .addClass(h.bulletActiveClass + '-next-next'));
                });
              else {
                var E = x.eq(f),
                  C = E.index();
                if ((E.addClass(h.bulletActiveClass), h.dynamicBullets)) {
                  for (var S = x.eq(w), A = x.eq(b), M = w; M <= b; M += 1)
                    x.eq(M).addClass(h.bulletActiveClass + '-main');
                  if (n.params.loop)
                    if (C >= x.length - h.dynamicMainBullets) {
                      for (var k = h.dynamicMainBullets; k >= 0; k -= 1)
                        x.eq(x.length - k).addClass(h.bulletActiveClass + '-main');
                      x.eq(x.length - h.dynamicMainBullets - 1).addClass(h.bulletActiveClass + '-prev');
                    } else
                      S.prev()
                        .addClass(h.bulletActiveClass + '-prev')
                        .prev()
                        .addClass(h.bulletActiveClass + '-prev-prev'),
                        A.next()
                          .addClass(h.bulletActiveClass + '-next')
                          .next()
                          .addClass(h.bulletActiveClass + '-next-next');
                  else
                    S.prev()
                      .addClass(h.bulletActiveClass + '-prev')
                      .prev()
                      .addClass(h.bulletActiveClass + '-prev-prev'),
                      A.next()
                        .addClass(h.bulletActiveClass + '-next')
                        .next()
                        .addClass(h.bulletActiveClass + '-next-next');
                }
              }
              if (h.dynamicBullets) {
                var z = Math.min(x.length, h.dynamicMainBullets + 4),
                  P = (n.pagination.bulletSize * z - n.pagination.bulletSize) / 2 - y * n.pagination.bulletSize,
                  O = c ? 'right' : 'left';
                x.css(n.isHorizontal() ? O : 'top', P + 'px');
              }
            }
            if (
              ('fraction' === h.type &&
                (m.find(classesToSelector(h.currentClass)).text(h.formatFractionCurrent(f + 1)),
                m.find(classesToSelector(h.totalClass)).text(h.formatFractionTotal(g))),
              'progressbar' === h.type)
            ) {
              var L;
              L = h.progressbarOpposite
                ? n.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : n.isHorizontal()
                ? 'horizontal'
                : 'vertical';
              var I = (f + 1) / g,
                D = 1,
                B = 1;
              'horizontal' === L ? (D = I) : (B = I),
                m
                  .find(classesToSelector(h.progressbarFillClass))
                  .transform('translate3d(0,0,0) scaleX(' + D + ') scaleY(' + B + ')')
                  .transition(n.params.speed);
            }
            'custom' === h.type && h.renderCustom
              ? (m.html(h.renderCustom(n, f + 1, g)), n.emit('paginationRender', m[0]))
              : n.emit('paginationUpdate', m[0]),
              n.params.watchOverflow && n.enabled && m[n.isLocked ? 'addClass' : 'removeClass'](h.lockClass);
          }
        },
        render: function e() {
          var n = this,
            c = n.params.pagination;
          if (c.el && n.pagination.el && n.pagination.$el && 0 !== n.pagination.$el.length) {
            var h = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
              f = n.pagination.$el,
              v = '';
            if ('bullets' === c.type) {
              var m = n.params.loop ? Math.ceil((h - 2 * n.loopedSlides) / n.params.slidesPerGroup) : n.snapGrid.length;
              n.params.freeMode && !n.params.loop && m > h && (m = h);
              for (var g = 0; g < m; g += 1)
                c.renderBullet
                  ? (v += c.renderBullet.call(n, g, c.bulletClass))
                  : (v += '<' + c.bulletElement + ' class="' + c.bulletClass + '"></' + c.bulletElement + '>');
              f.html(v), (n.pagination.bullets = f.find(classesToSelector(c.bulletClass)));
            }
            'fraction' === c.type &&
              ((v = c.renderFraction
                ? c.renderFraction.call(n, c.currentClass, c.totalClass)
                : '<span class="' + c.currentClass + '"></span> / <span class="' + c.totalClass + '"></span>'),
              f.html(v)),
              'progressbar' === c.type &&
                ((v = c.renderProgressbar
                  ? c.renderProgressbar.call(n, c.progressbarFillClass)
                  : '<span class="' + c.progressbarFillClass + '"></span>'),
                f.html(v)),
              'custom' !== c.type && n.emit('paginationRender', n.pagination.$el[0]);
          }
        },
        init: function e() {
          var n = this;
          n.params.pagination = createElementIfNotDefined(n.$el, n.params.pagination, n.params.createElements, {
            el: 'swiper-pagination',
          });
          var c = n.params.pagination;
          if (c.el) {
            var h = $(c.el);
            0 !== h.length &&
              (n.params.uniqueNavElements && 'string' == typeof c.el && h.length > 1 && (h = n.$el.find(c.el)),
              'bullets' === c.type && c.clickable && h.addClass(c.clickableClass),
              h.addClass(c.modifierClass + c.type),
              'bullets' === c.type &&
                c.dynamicBullets &&
                (h.addClass('' + c.modifierClass + c.type + '-dynamic'),
                (n.pagination.dynamicBulletIndex = 0),
                c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)),
              'progressbar' === c.type && c.progressbarOpposite && h.addClass(c.progressbarOppositeClass),
              c.clickable &&
                h.on('click', classesToSelector(c.bulletClass), function e(c) {
                  c.preventDefault();
                  var h = $(this).index() * n.params.slidesPerGroup;
                  n.params.loop && (h += n.loopedSlides), n.slideTo(h);
                }),
              extend(n.pagination, { $el: h, el: h[0] }),
              n.enabled || h.addClass(c.lockClass));
          }
        },
        destroy: function e() {
          var n = this,
            c = n.params.pagination;
          if (c.el && n.pagination.el && n.pagination.$el && 0 !== n.pagination.$el.length) {
            var h = n.pagination.$el;
            h.removeClass(c.hiddenClass),
              h.removeClass(c.modifierClass + c.type),
              n.pagination.bullets && n.pagination.bullets.removeClass(c.bulletActiveClass),
              c.clickable && h.off('click', classesToSelector(c.bulletClass));
          }
        },
      };
      function _extends$d() {
        return (_extends$d =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var _ = {
        setTranslate: function e() {
          var n = this;
          if (n.params.scrollbar.el && n.scrollbar.el) {
            var c = n.scrollbar,
              h = n.rtlTranslate,
              f = n.progress,
              v = c.dragSize,
              m = c.trackSize,
              g = c.$dragEl,
              w = c.$el,
              b = n.params.scrollbar,
              y = v,
              x = (m - v) * f;
            h
              ? (x = -x) > 0
                ? ((y = v - x), (x = 0))
                : -x + v > m && (y = m + x)
              : x < 0
              ? ((y = v + x), (x = 0))
              : x + v > m && (y = m - x),
              n.isHorizontal()
                ? (g.transform('translate3d(' + x + 'px, 0, 0)'), (g[0].style.width = y + 'px'))
                : (g.transform('translate3d(0px, ' + x + 'px, 0)'), (g[0].style.height = y + 'px')),
              b.hide &&
                (clearTimeout(n.scrollbar.timeout),
                (w[0].style.opacity = 1),
                (n.scrollbar.timeout = setTimeout(function () {
                  (w[0].style.opacity = 0), w.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function e(n) {
          var c = this;
          c.params.scrollbar.el && c.scrollbar.el && c.scrollbar.$dragEl.transition(n);
        },
        updateSize: function e() {
          var n = this;
          if (n.params.scrollbar.el && n.scrollbar.el) {
            var c = n.scrollbar,
              h = c.$dragEl,
              f = c.$el;
            (h[0].style.width = ''), (h[0].style.height = '');
            var v,
              m = n.isHorizontal() ? f[0].offsetWidth : f[0].offsetHeight,
              g = n.size / n.virtualSize,
              w = g * (m / n.size);
            (v = 'auto' === n.params.scrollbar.dragSize ? m * g : parseInt(n.params.scrollbar.dragSize, 10)),
              n.isHorizontal() ? (h[0].style.width = v + 'px') : (h[0].style.height = v + 'px'),
              (f[0].style.display = g >= 1 ? 'none' : ''),
              n.params.scrollbar.hide && (f[0].style.opacity = 0),
              extend(c, { trackSize: m, divider: g, moveDivider: w, dragSize: v }),
              n.params.watchOverflow &&
                n.enabled &&
                c.$el[n.isLocked ? 'addClass' : 'removeClass'](n.params.scrollbar.lockClass);
          }
        },
        getPointerPosition: function e(n) {
          return this.isHorizontal()
            ? 'touchstart' === n.type || 'touchmove' === n.type
              ? n.targetTouches[0].clientX
              : n.clientX
            : 'touchstart' === n.type || 'touchmove' === n.type
            ? n.targetTouches[0].clientY
            : n.clientY;
        },
        setDragPosition: function e(n) {
          var c,
            h = this,
            f = h.scrollbar,
            v = h.rtlTranslate,
            m = f.$el,
            g = f.dragSize,
            w = f.trackSize,
            b = f.dragStartPos;
          (c =
            (f.getPointerPosition(n) - m.offset()[h.isHorizontal() ? 'left' : 'top'] - (null !== b ? b : g / 2)) /
            (w - g)),
            (c = Math.max(Math.min(c, 1), 0)),
            v && (c = 1 - c);
          var y = h.minTranslate() + (h.maxTranslate() - h.minTranslate()) * c;
          h.updateProgress(y), h.setTranslate(y), h.updateActiveIndex(), h.updateSlidesClasses();
        },
        onDragStart: function e(n) {
          var c = this,
            h = c.params.scrollbar,
            f = c.scrollbar,
            v = c.$wrapperEl,
            m = f.$el,
            g = f.$dragEl;
          (c.scrollbar.isTouched = !0),
            (c.scrollbar.dragStartPos =
              n.target === g[0] || n.target === g
                ? f.getPointerPosition(n) - n.target.getBoundingClientRect()[c.isHorizontal() ? 'left' : 'top']
                : null),
            n.preventDefault(),
            n.stopPropagation(),
            v.transition(100),
            g.transition(100),
            f.setDragPosition(n),
            clearTimeout(c.scrollbar.dragTimeout),
            m.transition(0),
            h.hide && m.css('opacity', 1),
            c.params.cssMode && c.$wrapperEl.css('scroll-snap-type', 'none'),
            c.emit('scrollbarDragStart', n);
        },
        onDragMove: function e(n) {
          var c = this,
            h = c.scrollbar,
            f = c.$wrapperEl,
            v = h.$el,
            m = h.$dragEl;
          c.scrollbar.isTouched &&
            (n.preventDefault ? n.preventDefault() : (n.returnValue = !1),
            h.setDragPosition(n),
            f.transition(0),
            v.transition(0),
            m.transition(0),
            c.emit('scrollbarDragMove', n));
        },
        onDragEnd: function e(n) {
          var c = this,
            h = c.params.scrollbar,
            f = c.scrollbar,
            v = c.$wrapperEl,
            m = f.$el;
          c.scrollbar.isTouched &&
            ((c.scrollbar.isTouched = !1),
            c.params.cssMode && (c.$wrapperEl.css('scroll-snap-type', ''), v.transition('')),
            h.hide &&
              (clearTimeout(c.scrollbar.dragTimeout),
              (c.scrollbar.dragTimeout = nextTick(function () {
                m.css('opacity', 0), m.transition(400);
              }, 1e3))),
            c.emit('scrollbarDragEnd', n),
            h.snapOnRelease && c.slideToClosest());
        },
        enableDraggable: function e() {
          var n = this;
          if (n.params.scrollbar.el) {
            var c = getDocument(),
              h = n.scrollbar,
              f = n.touchEventsTouch,
              v = n.touchEventsDesktop,
              m = n.params,
              g = n.support,
              w = h.$el[0],
              b = !(!g.passiveListener || !m.passiveListeners) && { passive: !1, capture: !1 },
              y = !(!g.passiveListener || !m.passiveListeners) && { passive: !0, capture: !1 };
            w &&
              (g.touch
                ? (w.addEventListener(f.start, n.scrollbar.onDragStart, b),
                  w.addEventListener(f.move, n.scrollbar.onDragMove, b),
                  w.addEventListener(f.end, n.scrollbar.onDragEnd, y))
                : (w.addEventListener(v.start, n.scrollbar.onDragStart, b),
                  c.addEventListener(v.move, n.scrollbar.onDragMove, b),
                  c.addEventListener(v.end, n.scrollbar.onDragEnd, y)));
          }
        },
        disableDraggable: function e() {
          var n = this;
          if (n.params.scrollbar.el) {
            var c = getDocument(),
              h = n.scrollbar,
              f = n.touchEventsTouch,
              v = n.touchEventsDesktop,
              m = n.params,
              g = n.support,
              w = h.$el[0],
              b = !(!g.passiveListener || !m.passiveListeners) && { passive: !1, capture: !1 },
              y = !(!g.passiveListener || !m.passiveListeners) && { passive: !0, capture: !1 };
            w &&
              (g.touch
                ? (w.removeEventListener(f.start, n.scrollbar.onDragStart, b),
                  w.removeEventListener(f.move, n.scrollbar.onDragMove, b),
                  w.removeEventListener(f.end, n.scrollbar.onDragEnd, y))
                : (w.removeEventListener(v.start, n.scrollbar.onDragStart, b),
                  c.removeEventListener(v.move, n.scrollbar.onDragMove, b),
                  c.removeEventListener(v.end, n.scrollbar.onDragEnd, y)));
          }
        },
        init: function e() {
          var n = this,
            c = n.scrollbar,
            h = n.$el;
          n.params.scrollbar = createElementIfNotDefined(h, n.params.scrollbar, n.params.createElements, {
            el: 'swiper-scrollbar',
          });
          var f = n.params.scrollbar;
          if (f.el) {
            var v = $(f.el);
            n.params.uniqueNavElements &&
              'string' == typeof f.el &&
              v.length > 1 &&
              1 === h.find(f.el).length &&
              (v = h.find(f.el));
            var m = v.find('.' + n.params.scrollbar.dragClass);
            0 === m.length && ((m = $('<div class="' + n.params.scrollbar.dragClass + '"></div>')), v.append(m)),
              extend(c, { $el: v, el: v[0], $dragEl: m, dragEl: m[0] }),
              f.draggable && c.enableDraggable(),
              v && v[n.enabled ? 'removeClass' : 'addClass'](n.params.scrollbar.lockClass);
          }
        },
        destroy: function e() {
          this.scrollbar.disableDraggable();
        },
      };
      function _extends$c() {
        return (_extends$c =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var W = {
        setTransform: function e(n, c) {
          var h = this.rtl,
            f = $(n),
            v = h ? -1 : 1,
            m = f.attr('data-swiper-parallax') || '0',
            g = f.attr('data-swiper-parallax-x'),
            w = f.attr('data-swiper-parallax-y'),
            b = f.attr('data-swiper-parallax-scale'),
            y = f.attr('data-swiper-parallax-opacity');
          if (
            (g || w
              ? ((g = g || '0'), (w = w || '0'))
              : this.isHorizontal()
              ? ((g = m), (w = '0'))
              : ((w = m), (g = '0')),
            (g = g.indexOf('%') >= 0 ? parseInt(g, 10) * c * v + '%' : g * c * v + 'px'),
            (w = w.indexOf('%') >= 0 ? parseInt(w, 10) * c + '%' : w * c + 'px'),
            null != y)
          ) {
            var x = y - (y - 1) * (1 - Math.abs(c));
            f[0].style.opacity = x;
          }
          if (null == b) f.transform('translate3d(' + g + ', ' + w + ', 0px)');
          else {
            var E = b - (b - 1) * (1 - Math.abs(c));
            f.transform('translate3d(' + g + ', ' + w + ', 0px) scale(' + E + ')');
          }
        },
        setTranslate: function e() {
          var n = this,
            c = n.$el,
            h = n.slides,
            f = n.progress,
            v = n.snapGrid;
          c
            .children(
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
            )
            .each(function (c) {
              n.parallax.setTransform(c, f);
            }),
            h.each(function (c, h) {
              var m = c.progress;
              n.params.slidesPerGroup > 1 &&
                'auto' !== n.params.slidesPerView &&
                (m += Math.ceil(h / 2) - f * (v.length - 1)),
                (m = Math.min(Math.max(m, -1), 1)),
                $(c)
                  .find(
                    '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                  )
                  .each(function (c) {
                    n.parallax.setTransform(c, m);
                  });
            });
        },
        setTransition: function e(n) {
          void 0 === n && (n = this.params.speed);
          this.$el
            .find(
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
            )
            .each(function (c) {
              var h = $(c),
                f = parseInt(h.attr('data-swiper-parallax-duration'), 10) || n;
              0 === n && (f = 0), h.transition(f);
            });
        },
      };
      function _extends$b() {
        return (_extends$b =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var H = {
        getDistanceBetweenTouches: function e(n) {
          if (n.targetTouches.length < 2) return 1;
          var c = n.targetTouches[0].pageX,
            h = n.targetTouches[0].pageY,
            f = n.targetTouches[1].pageX,
            v = n.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(f - c, 2) + Math.pow(v - h, 2));
        },
        onGestureStart: function e(n) {
          var c = this,
            h = c.support,
            f = c.params.zoom,
            v = c.zoom,
            m = v.gesture;
          if (((v.fakeGestureTouched = !1), (v.fakeGestureMoved = !1), !h.gestures)) {
            if ('touchstart' !== n.type || ('touchstart' === n.type && n.targetTouches.length < 2)) return;
            (v.fakeGestureTouched = !0), (m.scaleStart = H.getDistanceBetweenTouches(n));
          }
          (m.$slideEl && m.$slideEl.length) ||
          ((m.$slideEl = $(n.target).closest('.' + c.params.slideClass)),
          0 === m.$slideEl.length && (m.$slideEl = c.slides.eq(c.activeIndex)),
          (m.$imageEl = m.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target')),
          (m.$imageWrapEl = m.$imageEl.parent('.' + f.containerClass)),
          (m.maxRatio = m.$imageWrapEl.attr('data-swiper-zoom') || f.maxRatio),
          0 !== m.$imageWrapEl.length)
            ? (m.$imageEl && m.$imageEl.transition(0), (c.zoom.isScaling = !0))
            : (m.$imageEl = void 0);
        },
        onGestureChange: function e(n) {
          var c = this,
            h = c.support,
            f = c.params.zoom,
            v = c.zoom,
            m = v.gesture;
          if (!h.gestures) {
            if ('touchmove' !== n.type || ('touchmove' === n.type && n.targetTouches.length < 2)) return;
            (v.fakeGestureMoved = !0), (m.scaleMove = H.getDistanceBetweenTouches(n));
          }
          m.$imageEl && 0 !== m.$imageEl.length
            ? (h.gestures
                ? (v.scale = n.scale * v.currentScale)
                : (v.scale = (m.scaleMove / m.scaleStart) * v.currentScale),
              v.scale > m.maxRatio && (v.scale = m.maxRatio - 1 + Math.pow(v.scale - m.maxRatio + 1, 0.5)),
              v.scale < f.minRatio && (v.scale = f.minRatio + 1 - Math.pow(f.minRatio - v.scale + 1, 0.5)),
              m.$imageEl.transform('translate3d(0,0,0) scale(' + v.scale + ')'))
            : 'gesturechange' === n.type && v.onGestureStart(n);
        },
        onGestureEnd: function e(n) {
          var c = this,
            h = c.device,
            f = c.support,
            v = c.params.zoom,
            m = c.zoom,
            g = m.gesture;
          if (!f.gestures) {
            if (!m.fakeGestureTouched || !m.fakeGestureMoved) return;
            if ('touchend' !== n.type || ('touchend' === n.type && n.changedTouches.length < 2 && !h.android)) return;
            (m.fakeGestureTouched = !1), (m.fakeGestureMoved = !1);
          }
          g.$imageEl &&
            0 !== g.$imageEl.length &&
            ((m.scale = Math.max(Math.min(m.scale, g.maxRatio), v.minRatio)),
            g.$imageEl.transition(c.params.speed).transform('translate3d(0,0,0) scale(' + m.scale + ')'),
            (m.currentScale = m.scale),
            (m.isScaling = !1),
            1 === m.scale && (g.$slideEl = void 0));
        },
        onTouchStart: function e(n) {
          var c = this.device,
            h = this.zoom,
            f = h.gesture,
            v = h.image;
          f.$imageEl &&
            0 !== f.$imageEl.length &&
            (v.isTouched ||
              (c.android && n.cancelable && n.preventDefault(),
              (v.isTouched = !0),
              (v.touchesStart.x = 'touchstart' === n.type ? n.targetTouches[0].pageX : n.pageX),
              (v.touchesStart.y = 'touchstart' === n.type ? n.targetTouches[0].pageY : n.pageY)));
        },
        onTouchMove: function e(n) {
          var c = this,
            h = c.zoom,
            f = h.gesture,
            v = h.image,
            m = h.velocity;
          if (f.$imageEl && 0 !== f.$imageEl.length && ((c.allowClick = !1), v.isTouched && f.$slideEl)) {
            v.isMoved ||
              ((v.width = f.$imageEl[0].offsetWidth),
              (v.height = f.$imageEl[0].offsetHeight),
              (v.startX = getTranslate(f.$imageWrapEl[0], 'x') || 0),
              (v.startY = getTranslate(f.$imageWrapEl[0], 'y') || 0),
              (f.slideWidth = f.$slideEl[0].offsetWidth),
              (f.slideHeight = f.$slideEl[0].offsetHeight),
              f.$imageWrapEl.transition(0));
            var g = v.width * h.scale,
              w = v.height * h.scale;
            if (!(g < f.slideWidth && w < f.slideHeight)) {
              if (
                ((v.minX = Math.min(f.slideWidth / 2 - g / 2, 0)),
                (v.maxX = -v.minX),
                (v.minY = Math.min(f.slideHeight / 2 - w / 2, 0)),
                (v.maxY = -v.minY),
                (v.touchesCurrent.x = 'touchmove' === n.type ? n.targetTouches[0].pageX : n.pageX),
                (v.touchesCurrent.y = 'touchmove' === n.type ? n.targetTouches[0].pageY : n.pageY),
                !v.isMoved && !h.isScaling)
              ) {
                if (
                  c.isHorizontal() &&
                  ((Math.floor(v.minX) === Math.floor(v.startX) && v.touchesCurrent.x < v.touchesStart.x) ||
                    (Math.floor(v.maxX) === Math.floor(v.startX) && v.touchesCurrent.x > v.touchesStart.x))
                )
                  return void (v.isTouched = !1);
                if (
                  !c.isHorizontal() &&
                  ((Math.floor(v.minY) === Math.floor(v.startY) && v.touchesCurrent.y < v.touchesStart.y) ||
                    (Math.floor(v.maxY) === Math.floor(v.startY) && v.touchesCurrent.y > v.touchesStart.y))
                )
                  return void (v.isTouched = !1);
              }
              n.cancelable && n.preventDefault(),
                n.stopPropagation(),
                (v.isMoved = !0),
                (v.currentX = v.touchesCurrent.x - v.touchesStart.x + v.startX),
                (v.currentY = v.touchesCurrent.y - v.touchesStart.y + v.startY),
                v.currentX < v.minX && (v.currentX = v.minX + 1 - Math.pow(v.minX - v.currentX + 1, 0.8)),
                v.currentX > v.maxX && (v.currentX = v.maxX - 1 + Math.pow(v.currentX - v.maxX + 1, 0.8)),
                v.currentY < v.minY && (v.currentY = v.minY + 1 - Math.pow(v.minY - v.currentY + 1, 0.8)),
                v.currentY > v.maxY && (v.currentY = v.maxY - 1 + Math.pow(v.currentY - v.maxY + 1, 0.8)),
                m.prevPositionX || (m.prevPositionX = v.touchesCurrent.x),
                m.prevPositionY || (m.prevPositionY = v.touchesCurrent.y),
                m.prevTime || (m.prevTime = Date.now()),
                (m.x = (v.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2),
                (m.y = (v.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2),
                Math.abs(v.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0),
                Math.abs(v.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0),
                (m.prevPositionX = v.touchesCurrent.x),
                (m.prevPositionY = v.touchesCurrent.y),
                (m.prevTime = Date.now()),
                f.$imageWrapEl.transform('translate3d(' + v.currentX + 'px, ' + v.currentY + 'px,0)');
            }
          }
        },
        onTouchEnd: function e() {
          var n = this.zoom,
            c = n.gesture,
            h = n.image,
            f = n.velocity;
          if (c.$imageEl && 0 !== c.$imageEl.length) {
            if (!h.isTouched || !h.isMoved) return (h.isTouched = !1), void (h.isMoved = !1);
            (h.isTouched = !1), (h.isMoved = !1);
            var v = 300,
              m = 300,
              g = f.x * v,
              w = h.currentX + g,
              b = f.y * m,
              y = h.currentY + b;
            0 !== f.x && (v = Math.abs((w - h.currentX) / f.x)), 0 !== f.y && (m = Math.abs((y - h.currentY) / f.y));
            var x = Math.max(v, m);
            (h.currentX = w), (h.currentY = y);
            var E = h.width * n.scale,
              C = h.height * n.scale;
            (h.minX = Math.min(c.slideWidth / 2 - E / 2, 0)),
              (h.maxX = -h.minX),
              (h.minY = Math.min(c.slideHeight / 2 - C / 2, 0)),
              (h.maxY = -h.minY),
              (h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX)),
              (h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY)),
              c.$imageWrapEl.transition(x).transform('translate3d(' + h.currentX + 'px, ' + h.currentY + 'px,0)');
          }
        },
        onTransitionEnd: function e() {
          var n = this,
            c = n.zoom,
            h = c.gesture;
          h.$slideEl &&
            n.previousIndex !== n.activeIndex &&
            (h.$imageEl && h.$imageEl.transform('translate3d(0,0,0) scale(1)'),
            h.$imageWrapEl && h.$imageWrapEl.transform('translate3d(0,0,0)'),
            (c.scale = 1),
            (c.currentScale = 1),
            (h.$slideEl = void 0),
            (h.$imageEl = void 0),
            (h.$imageWrapEl = void 0));
        },
        toggle: function e(n) {
          var c = this.zoom;
          c.scale && 1 !== c.scale ? c.out() : c.in(n);
        },
        in: function e(n) {
          var c,
            h,
            f,
            v,
            m,
            g,
            w,
            b,
            y,
            x,
            E,
            C,
            S,
            A,
            M,
            k,
            z = this,
            P = getWindow(),
            O = z.zoom,
            L = z.params.zoom,
            I = O.gesture,
            D = O.image;
          (I.$slideEl ||
            (n && n.target && (I.$slideEl = $(n.target).closest('.' + z.params.slideClass)),
            I.$slideEl ||
              (z.params.virtual && z.params.virtual.enabled && z.virtual
                ? (I.$slideEl = z.$wrapperEl.children('.' + z.params.slideActiveClass))
                : (I.$slideEl = z.slides.eq(z.activeIndex))),
            (I.$imageEl = I.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target')),
            (I.$imageWrapEl = I.$imageEl.parent('.' + L.containerClass))),
          I.$imageEl && 0 !== I.$imageEl.length && I.$imageWrapEl && 0 !== I.$imageWrapEl.length) &&
            (I.$slideEl.addClass('' + L.zoomedSlideClass),
            void 0 === D.touchesStart.x && n
              ? ((c = 'touchend' === n.type ? n.changedTouches[0].pageX : n.pageX),
                (h = 'touchend' === n.type ? n.changedTouches[0].pageY : n.pageY))
              : ((c = D.touchesStart.x), (h = D.touchesStart.y)),
            (O.scale = I.$imageWrapEl.attr('data-swiper-zoom') || L.maxRatio),
            (O.currentScale = I.$imageWrapEl.attr('data-swiper-zoom') || L.maxRatio),
            n
              ? ((M = I.$slideEl[0].offsetWidth),
                (k = I.$slideEl[0].offsetHeight),
                (f = I.$slideEl.offset().left + P.scrollX + M / 2 - c),
                (v = I.$slideEl.offset().top + P.scrollY + k / 2 - h),
                (w = I.$imageEl[0].offsetWidth),
                (b = I.$imageEl[0].offsetHeight),
                (y = w * O.scale),
                (x = b * O.scale),
                (S = -(E = Math.min(M / 2 - y / 2, 0))),
                (A = -(C = Math.min(k / 2 - x / 2, 0))),
                (m = f * O.scale) < E && (m = E),
                m > S && (m = S),
                (g = v * O.scale) < C && (g = C),
                g > A && (g = A))
              : ((m = 0), (g = 0)),
            I.$imageWrapEl.transition(300).transform('translate3d(' + m + 'px, ' + g + 'px,0)'),
            I.$imageEl.transition(300).transform('translate3d(0,0,0) scale(' + O.scale + ')'));
        },
        out: function e() {
          var n = this,
            c = n.zoom,
            h = n.params.zoom,
            f = c.gesture;
          f.$slideEl ||
            (n.params.virtual && n.params.virtual.enabled && n.virtual
              ? (f.$slideEl = n.$wrapperEl.children('.' + n.params.slideActiveClass))
              : (f.$slideEl = n.slides.eq(n.activeIndex)),
            (f.$imageEl = f.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target')),
            (f.$imageWrapEl = f.$imageEl.parent('.' + h.containerClass))),
            f.$imageEl &&
              0 !== f.$imageEl.length &&
              f.$imageWrapEl &&
              0 !== f.$imageWrapEl.length &&
              ((c.scale = 1),
              (c.currentScale = 1),
              f.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
              f.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
              f.$slideEl.removeClass('' + h.zoomedSlideClass),
              (f.$slideEl = void 0));
        },
        toggleGestures: function e(n) {
          var c = this,
            h = c.zoom,
            f = h.slideSelector,
            v = h.passiveListener;
          c.$wrapperEl[n]('gesturestart', f, h.onGestureStart, v),
            c.$wrapperEl[n]('gesturechange', f, h.onGestureChange, v),
            c.$wrapperEl[n]('gestureend', f, h.onGestureEnd, v);
        },
        enableGestures: function e() {
          this.zoom.gesturesEnabled || ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures('on'));
        },
        disableGestures: function e() {
          this.zoom.gesturesEnabled && ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures('off'));
        },
        enable: function e() {
          var n = this,
            c = n.support,
            h = n.zoom;
          if (!h.enabled) {
            h.enabled = !0;
            var f = !('touchstart' !== n.touchEvents.start || !c.passiveListener || !n.params.passiveListeners) && {
                passive: !0,
                capture: !1,
              },
              v = !c.passiveListener || { passive: !1, capture: !0 },
              m = '.' + n.params.slideClass;
            (n.zoom.passiveListener = f),
              (n.zoom.slideSelector = m),
              c.gestures
                ? (n.$wrapperEl.on(n.touchEvents.start, n.zoom.enableGestures, f),
                  n.$wrapperEl.on(n.touchEvents.end, n.zoom.disableGestures, f))
                : 'touchstart' === n.touchEvents.start &&
                  (n.$wrapperEl.on(n.touchEvents.start, m, h.onGestureStart, f),
                  n.$wrapperEl.on(n.touchEvents.move, m, h.onGestureChange, v),
                  n.$wrapperEl.on(n.touchEvents.end, m, h.onGestureEnd, f),
                  n.touchEvents.cancel && n.$wrapperEl.on(n.touchEvents.cancel, m, h.onGestureEnd, f)),
              n.$wrapperEl.on(n.touchEvents.move, '.' + n.params.zoom.containerClass, h.onTouchMove, v);
          }
        },
        disable: function e() {
          var n = this,
            c = n.zoom;
          if (c.enabled) {
            var h = n.support;
            n.zoom.enabled = !1;
            var f = !('touchstart' !== n.touchEvents.start || !h.passiveListener || !n.params.passiveListeners) && {
                passive: !0,
                capture: !1,
              },
              v = !h.passiveListener || { passive: !1, capture: !0 },
              m = '.' + n.params.slideClass;
            h.gestures
              ? (n.$wrapperEl.off(n.touchEvents.start, n.zoom.enableGestures, f),
                n.$wrapperEl.off(n.touchEvents.end, n.zoom.disableGestures, f))
              : 'touchstart' === n.touchEvents.start &&
                (n.$wrapperEl.off(n.touchEvents.start, m, c.onGestureStart, f),
                n.$wrapperEl.off(n.touchEvents.move, m, c.onGestureChange, v),
                n.$wrapperEl.off(n.touchEvents.end, m, c.onGestureEnd, f),
                n.touchEvents.cancel && n.$wrapperEl.off(n.touchEvents.cancel, m, c.onGestureEnd, f)),
              n.$wrapperEl.off(n.touchEvents.move, '.' + n.params.zoom.containerClass, c.onTouchMove, v);
          }
        },
      };
      function _extends$a() {
        return (_extends$a =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var R = {
        loadInSlide: function e(n, c) {
          void 0 === c && (c = !0);
          var h = this,
            f = h.params.lazy;
          if (void 0 !== n && 0 !== h.slides.length) {
            var v =
                h.virtual && h.params.virtual.enabled
                  ? h.$wrapperEl.children('.' + h.params.slideClass + '[data-swiper-slide-index="' + n + '"]')
                  : h.slides.eq(n),
              m = v.find('.' + f.elementClass + ':not(.' + f.loadedClass + '):not(.' + f.loadingClass + ')');
            !v.hasClass(f.elementClass) || v.hasClass(f.loadedClass) || v.hasClass(f.loadingClass) || m.push(v[0]),
              0 !== m.length &&
                m.each(function (n) {
                  var m = $(n);
                  m.addClass(f.loadingClass);
                  var g = m.attr('data-background'),
                    w = m.attr('data-src'),
                    b = m.attr('data-srcset'),
                    y = m.attr('data-sizes'),
                    x = m.parent('picture');
                  h.loadImage(m[0], w || g, b, y, !1, function () {
                    if (null != h && h && (!h || h.params) && !h.destroyed) {
                      if (
                        (g
                          ? (m.css('background-image', 'url("' + g + '")'), m.removeAttr('data-background'))
                          : (b && (m.attr('srcset', b), m.removeAttr('data-srcset')),
                            y && (m.attr('sizes', y), m.removeAttr('data-sizes')),
                            x.length &&
                              x.children('source').each(function (n) {
                                var c = $(n);
                                c.attr('data-srcset') &&
                                  (c.attr('srcset', c.attr('data-srcset')), c.removeAttr('data-srcset'));
                              }),
                            w && (m.attr('src', w), m.removeAttr('data-src'))),
                        m.addClass(f.loadedClass).removeClass(f.loadingClass),
                        v.find('.' + f.preloaderClass).remove(),
                        h.params.loop && c)
                      ) {
                        var n = v.attr('data-swiper-slide-index');
                        if (v.hasClass(h.params.slideDuplicateClass)) {
                          var E = h.$wrapperEl.children(
                            '[data-swiper-slide-index="' + n + '"]:not(.' + h.params.slideDuplicateClass + ')'
                          );
                          h.lazy.loadInSlide(E.index(), !1);
                        } else {
                          var C = h.$wrapperEl.children(
                            '.' + h.params.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]'
                          );
                          h.lazy.loadInSlide(C.index(), !1);
                        }
                      }
                      h.emit('lazyImageReady', v[0], m[0]), h.params.autoHeight && h.updateAutoHeight();
                    }
                  }),
                    h.emit('lazyImageLoad', v[0], m[0]);
                });
          }
        },
        load: function e() {
          var n = this,
            c = n.$wrapperEl,
            h = n.params,
            f = n.slides,
            v = n.activeIndex,
            m = n.virtual && h.virtual.enabled,
            g = h.lazy,
            w = h.slidesPerView;
          function d(n) {
            if (m) {
              if (c.children('.' + h.slideClass + '[data-swiper-slide-index="' + n + '"]').length) return !0;
            } else if (f[n]) return !0;
            return !1;
          }
          function p(n) {
            return m ? $(n).attr('data-swiper-slide-index') : $(n).index();
          }
          if (
            ('auto' === w && (w = 0),
            n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0),
            n.params.watchSlidesVisibility)
          )
            c.children('.' + h.slideVisibleClass).each(function (c) {
              var h = m ? $(c).attr('data-swiper-slide-index') : $(c).index();
              n.lazy.loadInSlide(h);
            });
          else if (w > 1) for (var b = v; b < v + w; b += 1) d(b) && n.lazy.loadInSlide(b);
          else n.lazy.loadInSlide(v);
          if (g.loadPrevNext)
            if (w > 1 || (g.loadPrevNextAmount && g.loadPrevNextAmount > 1)) {
              for (
                var y = g.loadPrevNextAmount,
                  x = w,
                  E = Math.min(v + x + Math.max(y, x), f.length),
                  C = Math.max(v - Math.max(x, y), 0),
                  S = v + w;
                S < E;
                S += 1
              )
                d(S) && n.lazy.loadInSlide(S);
              for (var A = C; A < v; A += 1) d(A) && n.lazy.loadInSlide(A);
            } else {
              var M = c.children('.' + h.slideNextClass);
              M.length > 0 && n.lazy.loadInSlide(p(M));
              var k = c.children('.' + h.slidePrevClass);
              k.length > 0 && n.lazy.loadInSlide(p(k));
            }
        },
        checkInViewOnLoad: function e() {
          var n = getWindow(),
            c = this;
          if (c && !c.destroyed) {
            var h = c.params.lazy.scrollingElement ? $(c.params.lazy.scrollingElement) : $(n),
              f = h[0] === n,
              v = f ? n.innerWidth : h[0].offsetWidth,
              m = f ? n.innerHeight : h[0].offsetHeight,
              g = c.$el.offset(),
              w = !1;
            c.rtlTranslate && (g.left -= c.$el[0].scrollLeft);
            for (
              var b = [
                  [g.left, g.top],
                  [g.left + c.width, g.top],
                  [g.left, g.top + c.height],
                  [g.left + c.width, g.top + c.height],
                ],
                y = 0;
              y < b.length;
              y += 1
            ) {
              var x = b[y];
              if (x[0] >= 0 && x[0] <= v && x[1] >= 0 && x[1] <= m) {
                if (0 === x[0] && 0 === x[1]) continue;
                w = !0;
              }
            }
            var E = !(
              'touchstart' !== c.touchEvents.start ||
              !c.support.passiveListener ||
              !c.params.passiveListeners
            ) && { passive: !0, capture: !1 };
            w
              ? (c.lazy.load(), h.off('scroll', c.lazy.checkInViewOnLoad, E))
              : c.lazy.scrollHandlerAttached ||
                ((c.lazy.scrollHandlerAttached = !0), h.on('scroll', c.lazy.checkInViewOnLoad, E));
          }
        },
      };
      function _extends$9() {
        return (_extends$9 =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var F = {
        LinearSpline: function e(n, c) {
          var h,
            f,
            v = (function e() {
              var n, c, h;
              return function (f, v) {
                for (c = -1, n = f.length; n - c > 1; ) f[(h = (n + c) >> 1)] <= v ? (c = h) : (n = h);
                return n;
              };
            })();
          return (
            (this.x = n),
            (this.y = c),
            (this.lastIndex = n.length - 1),
            (this.interpolate = function e(n) {
              return n
                ? ((f = v(this.x, n)),
                  (h = f - 1),
                  ((n - this.x[h]) * (this.y[f] - this.y[h])) / (this.x[f] - this.x[h]) + this.y[h])
                : 0;
            }),
            this
          );
        },
        getInterpolateFunction: function e(n) {
          var c = this;
          c.controller.spline ||
            (c.controller.spline = c.params.loop
              ? new F.LinearSpline(c.slidesGrid, n.slidesGrid)
              : new F.LinearSpline(c.snapGrid, n.snapGrid));
        },
        setTranslate: function e(n, c) {
          var h,
            f,
            v = this,
            m = v.controller.control,
            g = v.constructor;
          function l(n) {
            var c = v.rtlTranslate ? -v.translate : v.translate;
            'slide' === v.params.controller.by &&
              (v.controller.getInterpolateFunction(n), (f = -v.controller.spline.interpolate(-c))),
              (f && 'container' !== v.params.controller.by) ||
                ((h = (n.maxTranslate() - n.minTranslate()) / (v.maxTranslate() - v.minTranslate())),
                (f = (c - v.minTranslate()) * h + n.minTranslate())),
              v.params.controller.inverse && (f = n.maxTranslate() - f),
              n.updateProgress(f),
              n.setTranslate(f, v),
              n.updateActiveIndex(),
              n.updateSlidesClasses();
          }
          if (Array.isArray(m)) for (var w = 0; w < m.length; w += 1) m[w] !== c && m[w] instanceof g && l(m[w]);
          else m instanceof g && c !== m && l(m);
        },
        setTransition: function e(n, c) {
          var h,
            f = this,
            v = f.constructor,
            m = f.controller.control;
          function o(c) {
            c.setTransition(n, f),
              0 !== n &&
                (c.transitionStart(),
                c.params.autoHeight &&
                  nextTick(function () {
                    c.updateAutoHeight();
                  }),
                c.$wrapperEl.transitionEnd(function () {
                  m && (c.params.loop && 'slide' === f.params.controller.by && c.loopFix(), c.transitionEnd());
                }));
          }
          if (Array.isArray(m)) for (h = 0; h < m.length; h += 1) m[h] !== c && m[h] instanceof v && o(m[h]);
          else m instanceof v && c !== m && o(m);
        },
      };
      function _extends$8() {
        return (_extends$8 =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var X = {
        getRandomNumber: function e(n) {
          void 0 === n && (n = 16);
          return 'x'.repeat(n).replace(/x/g, function e() {
            return Math.round(16 * Math.random()).toString(16);
          });
        },
        makeElFocusable: function e(n) {
          return n.attr('tabIndex', '0'), n;
        },
        makeElNotFocusable: function e(n) {
          return n.attr('tabIndex', '-1'), n;
        },
        addElRole: function e(n, c) {
          return n.attr('role', c), n;
        },
        addElRoleDescription: function e(n, c) {
          return n.attr('aria-roledescription', c), n;
        },
        addElControls: function e(n, c) {
          return n.attr('aria-controls', c), n;
        },
        addElLabel: function e(n, c) {
          return n.attr('aria-label', c), n;
        },
        addElId: function e(n, c) {
          return n.attr('id', c), n;
        },
        addElLive: function e(n, c) {
          return n.attr('aria-live', c), n;
        },
        disableEl: function e(n) {
          return n.attr('aria-disabled', !0), n;
        },
        enableEl: function e(n) {
          return n.attr('aria-disabled', !1), n;
        },
        onEnterOrSpaceKey: function e(n) {
          if (13 === n.keyCode || 32 === n.keyCode) {
            var c = this,
              h = c.params.a11y,
              f = $(n.target);
            c.navigation &&
              c.navigation.$nextEl &&
              f.is(c.navigation.$nextEl) &&
              ((c.isEnd && !c.params.loop) || c.slideNext(),
              c.isEnd ? c.a11y.notify(h.lastSlideMessage) : c.a11y.notify(h.nextSlideMessage)),
              c.navigation &&
                c.navigation.$prevEl &&
                f.is(c.navigation.$prevEl) &&
                ((c.isBeginning && !c.params.loop) || c.slidePrev(),
                c.isBeginning ? c.a11y.notify(h.firstSlideMessage) : c.a11y.notify(h.prevSlideMessage)),
              c.pagination && f.is(classesToSelector(c.params.pagination.bulletClass)) && f[0].click();
          }
        },
        notify: function e(n) {
          var c = this.a11y.liveRegion;
          0 !== c.length && (c.html(''), c.html(n));
        },
        updateNavigation: function e() {
          var n = this;
          if (!n.params.loop && n.navigation) {
            var c = n.navigation,
              h = c.$nextEl,
              f = c.$prevEl;
            f &&
              f.length > 0 &&
              (n.isBeginning
                ? (n.a11y.disableEl(f), n.a11y.makeElNotFocusable(f))
                : (n.a11y.enableEl(f), n.a11y.makeElFocusable(f))),
              h &&
                h.length > 0 &&
                (n.isEnd
                  ? (n.a11y.disableEl(h), n.a11y.makeElNotFocusable(h))
                  : (n.a11y.enableEl(h), n.a11y.makeElFocusable(h)));
          }
        },
        updatePagination: function e() {
          var n = this,
            c = n.params.a11y;
          n.pagination &&
            n.params.pagination.clickable &&
            n.pagination.bullets &&
            n.pagination.bullets.length &&
            n.pagination.bullets.each(function (h) {
              var f = $(h);
              n.a11y.makeElFocusable(f),
                n.params.pagination.renderBullet ||
                  (n.a11y.addElRole(f, 'button'),
                  n.a11y.addElLabel(f, c.paginationBulletMessage.replace(/\{\{index\}\}/, f.index() + 1)));
            });
        },
        init: function e() {
          var n = this,
            c = n.params.a11y;
          n.$el.append(n.a11y.liveRegion);
          var h = n.$el;
          c.containerRoleDescriptionMessage && n.a11y.addElRoleDescription(h, c.containerRoleDescriptionMessage),
            c.containerMessage && n.a11y.addElLabel(h, c.containerMessage);
          var f = n.$wrapperEl,
            v = f.attr('id') || 'swiper-wrapper-' + n.a11y.getRandomNumber(16),
            m = n.params.autoplay && n.params.autoplay.enabled ? 'off' : 'polite';
          n.a11y.addElId(f, v),
            n.a11y.addElLive(f, m),
            c.itemRoleDescriptionMessage && n.a11y.addElRoleDescription($(n.slides), c.itemRoleDescriptionMessage),
            n.a11y.addElRole($(n.slides), c.slideRole);
          var g,
            w,
            b = n.params.loop
              ? n.slides.filter(function (c) {
                  return !c.classList.contains(n.params.slideDuplicateClass);
                }).length
              : n.slides.length;
          n.slides.each(function (h, f) {
            var v = $(h),
              m = n.params.loop ? parseInt(v.attr('data-swiper-slide-index'), 10) : f,
              g = c.slideLabelMessage.replace(/\{\{index\}\}/, m + 1).replace(/\{\{slidesLength\}\}/, b);
            n.a11y.addElLabel(v, g);
          }),
            n.navigation && n.navigation.$nextEl && (g = n.navigation.$nextEl),
            n.navigation && n.navigation.$prevEl && (w = n.navigation.$prevEl),
            g &&
              g.length &&
              (n.a11y.makeElFocusable(g),
              'BUTTON' !== g[0].tagName && (n.a11y.addElRole(g, 'button'), g.on('keydown', n.a11y.onEnterOrSpaceKey)),
              n.a11y.addElLabel(g, c.nextSlideMessage),
              n.a11y.addElControls(g, v)),
            w &&
              w.length &&
              (n.a11y.makeElFocusable(w),
              'BUTTON' !== w[0].tagName && (n.a11y.addElRole(w, 'button'), w.on('keydown', n.a11y.onEnterOrSpaceKey)),
              n.a11y.addElLabel(w, c.prevSlideMessage),
              n.a11y.addElControls(w, v)),
            n.pagination &&
              n.params.pagination.clickable &&
              n.pagination.bullets &&
              n.pagination.bullets.length &&
              n.pagination.$el.on(
                'keydown',
                classesToSelector(n.params.pagination.bulletClass),
                n.a11y.onEnterOrSpaceKey
              );
        },
        destroy: function e() {
          var n,
            c,
            h = this;
          h.a11y.liveRegion && h.a11y.liveRegion.length > 0 && h.a11y.liveRegion.remove(),
            h.navigation && h.navigation.$nextEl && (n = h.navigation.$nextEl),
            h.navigation && h.navigation.$prevEl && (c = h.navigation.$prevEl),
            n && n.off('keydown', h.a11y.onEnterOrSpaceKey),
            c && c.off('keydown', h.a11y.onEnterOrSpaceKey),
            h.pagination &&
              h.params.pagination.clickable &&
              h.pagination.bullets &&
              h.pagination.bullets.length &&
              h.pagination.$el.off(
                'keydown',
                classesToSelector(h.params.pagination.bulletClass),
                h.a11y.onEnterOrSpaceKey
              );
        },
      };
      function _extends$7() {
        return (_extends$7 =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var V = {
        init: function e() {
          var n = this,
            c = getWindow();
          if (n.params.history) {
            if (!c.history || !c.history.pushState)
              return (n.params.history.enabled = !1), void (n.params.hashNavigation.enabled = !0);
            var h = n.history;
            (h.initialized = !0),
              (h.paths = V.getPathValues(n.params.url)),
              (h.paths.key || h.paths.value) &&
                (h.scrollToSlide(0, h.paths.value, n.params.runCallbacksOnInit),
                n.params.history.replaceState || c.addEventListener('popstate', n.history.setHistoryPopState));
          }
        },
        destroy: function e() {
          var n = getWindow();
          this.params.history.replaceState || n.removeEventListener('popstate', this.history.setHistoryPopState);
        },
        setHistoryPopState: function e() {
          var n = this;
          (n.history.paths = V.getPathValues(n.params.url)),
            n.history.scrollToSlide(n.params.speed, n.history.paths.value, !1);
        },
        getPathValues: function e(n) {
          var c = getWindow(),
            h = (n ? new URL(n) : c.location).pathname
              .slice(1)
              .split('/')
              .filter(function (n) {
                return '' !== n;
              }),
            f = h.length;
          return { key: h[f - 2], value: h[f - 1] };
        },
        setHistory: function e(n, c) {
          var h = this,
            f = getWindow();
          if (h.history.initialized && h.params.history.enabled) {
            var v;
            v = h.params.url ? new URL(h.params.url) : f.location;
            var m = h.slides.eq(c),
              g = V.slugify(m.attr('data-history'));
            if (h.params.history.root.length > 0) {
              var w = h.params.history.root;
              '/' === w[w.length - 1] && (w = w.slice(0, w.length - 1)), (g = w + '/' + n + '/' + g);
            } else v.pathname.includes(n) || (g = n + '/' + g);
            var b = f.history.state;
            (b && b.value === g) ||
              (h.params.history.replaceState
                ? f.history.replaceState({ value: g }, null, g)
                : f.history.pushState({ value: g }, null, g));
          }
        },
        slugify: function e(n) {
          return n
            .toString()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
        },
        scrollToSlide: function e(n, c, h) {
          var f = this;
          if (c)
            for (var v = 0, m = f.slides.length; v < m; v += 1) {
              var g = f.slides.eq(v);
              if (V.slugify(g.attr('data-history')) === c && !g.hasClass(f.params.slideDuplicateClass)) {
                var w = g.index();
                f.slideTo(w, n, h);
              }
            }
          else f.slideTo(0, n, h);
        },
      };
      function _extends$6() {
        return (_extends$6 =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var q = {
        onHashChange: function e() {
          var n = this,
            c = getDocument();
          n.emit('hashChange');
          var h = c.location.hash.replace('#', '');
          if (h !== n.slides.eq(n.activeIndex).attr('data-hash')) {
            var f = n.$wrapperEl.children('.' + n.params.slideClass + '[data-hash="' + h + '"]').index();
            if (void 0 === f) return;
            n.slideTo(f);
          }
        },
        setHash: function e() {
          var n = this,
            c = getWindow(),
            h = getDocument();
          if (n.hashNavigation.initialized && n.params.hashNavigation.enabled)
            if (n.params.hashNavigation.replaceState && c.history && c.history.replaceState)
              c.history.replaceState(null, null, '#' + n.slides.eq(n.activeIndex).attr('data-hash') || !1),
                n.emit('hashSet');
            else {
              var f = n.slides.eq(n.activeIndex),
                v = f.attr('data-hash') || f.attr('data-history');
              (h.location.hash = v || ''), n.emit('hashSet');
            }
        },
        init: function e() {
          var n = this,
            c = getDocument(),
            h = getWindow();
          if (!(!n.params.hashNavigation.enabled || (n.params.history && n.params.history.enabled))) {
            n.hashNavigation.initialized = !0;
            var f = c.location.hash.replace('#', '');
            if (f)
              for (var v = 0, m = n.slides.length; v < m; v += 1) {
                var g = n.slides.eq(v);
                if (
                  (g.attr('data-hash') || g.attr('data-history')) === f &&
                  !g.hasClass(n.params.slideDuplicateClass)
                ) {
                  var w = g.index();
                  n.slideTo(w, 0, n.params.runCallbacksOnInit, !0);
                }
              }
            n.params.hashNavigation.watchState && $(h).on('hashchange', n.hashNavigation.onHashChange);
          }
        },
        destroy: function e() {
          var n = getWindow();
          this.params.hashNavigation.watchState && $(n).off('hashchange', this.hashNavigation.onHashChange);
        },
      };
      function _extends$5() {
        return (_extends$5 =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var U = {
        run: function e() {
          var n = this,
            c = n.slides.eq(n.activeIndex),
            h = n.params.autoplay.delay;
          c.attr('data-swiper-autoplay') && (h = c.attr('data-swiper-autoplay') || n.params.autoplay.delay),
            clearTimeout(n.autoplay.timeout),
            (n.autoplay.timeout = nextTick(function () {
              var c;
              n.params.autoplay.reverseDirection
                ? n.params.loop
                  ? (n.loopFix(), (c = n.slidePrev(n.params.speed, !0, !0)), n.emit('autoplay'))
                  : n.isBeginning
                  ? n.params.autoplay.stopOnLastSlide
                    ? n.autoplay.stop()
                    : ((c = n.slideTo(n.slides.length - 1, n.params.speed, !0, !0)), n.emit('autoplay'))
                  : ((c = n.slidePrev(n.params.speed, !0, !0)), n.emit('autoplay'))
                : n.params.loop
                ? (n.loopFix(), (c = n.slideNext(n.params.speed, !0, !0)), n.emit('autoplay'))
                : n.isEnd
                ? n.params.autoplay.stopOnLastSlide
                  ? n.autoplay.stop()
                  : ((c = n.slideTo(0, n.params.speed, !0, !0)), n.emit('autoplay'))
                : ((c = n.slideNext(n.params.speed, !0, !0)), n.emit('autoplay')),
                ((n.params.cssMode && n.autoplay.running) || !1 === c) && n.autoplay.run();
            }, h));
        },
        start: function e() {
          var n = this;
          return (
            void 0 === n.autoplay.timeout &&
            !n.autoplay.running &&
            ((n.autoplay.running = !0), n.emit('autoplayStart'), n.autoplay.run(), !0)
          );
        },
        stop: function e() {
          var n = this;
          return (
            !!n.autoplay.running &&
            void 0 !== n.autoplay.timeout &&
            (n.autoplay.timeout && (clearTimeout(n.autoplay.timeout), (n.autoplay.timeout = void 0)),
            (n.autoplay.running = !1),
            n.emit('autoplayStop'),
            !0)
          );
        },
        pause: function e(n) {
          var c = this;
          c.autoplay.running &&
            (c.autoplay.paused ||
              (c.autoplay.timeout && clearTimeout(c.autoplay.timeout),
              (c.autoplay.paused = !0),
              0 !== n && c.params.autoplay.waitForTransition
                ? ['transitionend', 'webkitTransitionEnd'].forEach(function (n) {
                    c.$wrapperEl[0].addEventListener(n, c.autoplay.onTransitionEnd);
                  })
                : ((c.autoplay.paused = !1), c.autoplay.run())));
        },
        onVisibilityChange: function e() {
          var n = this,
            c = getDocument();
          'hidden' === c.visibilityState && n.autoplay.running && n.autoplay.pause(),
            'visible' === c.visibilityState && n.autoplay.paused && (n.autoplay.run(), (n.autoplay.paused = !1));
        },
        onTransitionEnd: function e(n) {
          var c = this;
          c &&
            !c.destroyed &&
            c.$wrapperEl &&
            n.target === c.$wrapperEl[0] &&
            (['transitionend', 'webkitTransitionEnd'].forEach(function (n) {
              c.$wrapperEl[0].removeEventListener(n, c.autoplay.onTransitionEnd);
            }),
            (c.autoplay.paused = !1),
            c.autoplay.running ? c.autoplay.run() : c.autoplay.stop());
        },
        onMouseEnter: function e() {
          var n = this;
          n.params.autoplay.disableOnInteraction ? n.autoplay.stop() : n.autoplay.pause(),
            ['transitionend', 'webkitTransitionEnd'].forEach(function (c) {
              n.$wrapperEl[0].removeEventListener(c, n.autoplay.onTransitionEnd);
            });
        },
        onMouseLeave: function e() {
          var n = this;
          n.params.autoplay.disableOnInteraction || ((n.autoplay.paused = !1), n.autoplay.run());
        },
        attachMouseEvents: function e() {
          var n = this;
          n.params.autoplay.pauseOnMouseEnter &&
            (n.$el.on('mouseenter', n.autoplay.onMouseEnter), n.$el.on('mouseleave', n.autoplay.onMouseLeave));
        },
        detachMouseEvents: function e() {
          var n = this;
          n.$el.off('mouseenter', n.autoplay.onMouseEnter), n.$el.off('mouseleave', n.autoplay.onMouseLeave);
        },
      };
      function _extends$4() {
        return (_extends$4 =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var Q = {
        setTranslate: function e() {
          for (var n = this, c = n.slides, h = 0; h < c.length; h += 1) {
            var f = n.slides.eq(h),
              v = -f[0].swiperSlideOffset;
            n.params.virtualTranslate || (v -= n.translate);
            var m = 0;
            n.isHorizontal() || ((m = v), (v = 0));
            var g = n.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(f[0].progress), 0)
              : 1 + Math.min(Math.max(f[0].progress, -1), 0);
            f.css({ opacity: g }).transform('translate3d(' + v + 'px, ' + m + 'px, 0px)');
          }
        },
        setTransition: function e(n) {
          var c = this,
            h = c.slides,
            f = c.$wrapperEl;
          if ((h.transition(n), c.params.virtualTranslate && 0 !== n)) {
            var v = !1;
            h.transitionEnd(function () {
              if (!v && c && !c.destroyed) {
                (v = !0), (c.animating = !1);
                for (var n = ['webkitTransitionEnd', 'transitionend'], h = 0; h < n.length; h += 1) f.trigger(n[h]);
              }
            });
          }
        },
      };
      function _extends$3() {
        return (_extends$3 =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var K = {
        setTranslate: function e() {
          var n,
            c = this,
            h = c.$el,
            f = c.$wrapperEl,
            v = c.slides,
            m = c.width,
            g = c.height,
            w = c.rtlTranslate,
            b = c.size,
            y = c.browser,
            x = c.params.cubeEffect,
            E = c.isHorizontal(),
            C = c.virtual && c.params.virtual.enabled,
            S = 0;
          x.shadow &&
            (E
              ? (0 === (n = f.find('.swiper-cube-shadow')).length &&
                  ((n = $('<div class="swiper-cube-shadow"></div>')), f.append(n)),
                n.css({ height: m + 'px' }))
              : 0 === (n = h.find('.swiper-cube-shadow')).length &&
                ((n = $('<div class="swiper-cube-shadow"></div>')), h.append(n)));
          for (var A = 0; A < v.length; A += 1) {
            var M = v.eq(A),
              k = A;
            C && (k = parseInt(M.attr('data-swiper-slide-index'), 10));
            var z = 90 * k,
              P = Math.floor(z / 360);
            w && ((z = -z), (P = Math.floor(-z / 360)));
            var O = Math.max(Math.min(M[0].progress, 1), -1),
              L = 0,
              I = 0,
              D = 0;
            k % 4 == 0
              ? ((L = 4 * -P * b), (D = 0))
              : (k - 1) % 4 == 0
              ? ((L = 0), (D = 4 * -P * b))
              : (k - 2) % 4 == 0
              ? ((L = b + 4 * P * b), (D = b))
              : (k - 3) % 4 == 0 && ((L = -b), (D = 3 * b + 4 * b * P)),
              w && (L = -L),
              E || ((I = L), (L = 0));
            var B =
              'rotateX(' +
              (E ? 0 : -z) +
              'deg) rotateY(' +
              (E ? z : 0) +
              'deg) translate3d(' +
              L +
              'px, ' +
              I +
              'px, ' +
              D +
              'px)';
            if (
              (O <= 1 && O > -1 && ((S = 90 * k + 90 * O), w && (S = 90 * -k - 90 * O)), M.transform(B), x.slideShadows)
            ) {
              var N = E ? M.find('.swiper-slide-shadow-left') : M.find('.swiper-slide-shadow-top'),
                G = E ? M.find('.swiper-slide-shadow-right') : M.find('.swiper-slide-shadow-bottom');
              0 === N.length &&
                ((N = $('<div class="swiper-slide-shadow-' + (E ? 'left' : 'top') + '"></div>')), M.append(N)),
                0 === G.length &&
                  ((G = $('<div class="swiper-slide-shadow-' + (E ? 'right' : 'bottom') + '"></div>')), M.append(G)),
                N.length && (N[0].style.opacity = Math.max(-O, 0)),
                G.length && (G[0].style.opacity = Math.max(O, 0));
            }
          }
          if (
            (f.css({
              '-webkit-transform-origin': '50% 50% -' + b / 2 + 'px',
              '-moz-transform-origin': '50% 50% -' + b / 2 + 'px',
              '-ms-transform-origin': '50% 50% -' + b / 2 + 'px',
              'transform-origin': '50% 50% -' + b / 2 + 'px',
            }),
            x.shadow)
          )
            if (E)
              n.transform(
                'translate3d(0px, ' +
                  (m / 2 + x.shadowOffset) +
                  'px, ' +
                  -m / 2 +
                  'px) rotateX(90deg) rotateZ(0deg) scale(' +
                  x.shadowScale +
                  ')'
              );
            else {
              var Y = Math.abs(S) - 90 * Math.floor(Math.abs(S) / 90),
                j = 1.5 - (Math.sin((2 * Y * Math.PI) / 360) / 2 + Math.cos((2 * Y * Math.PI) / 360) / 2),
                _ = x.shadowScale,
                W = x.shadowScale / j,
                H = x.shadowOffset;
              n.transform(
                'scale3d(' +
                  _ +
                  ', 1, ' +
                  W +
                  ') translate3d(0px, ' +
                  (g / 2 + H) +
                  'px, ' +
                  -g / 2 / W +
                  'px) rotateX(-90deg)'
              );
            }
          var R = y.isSafari || y.isWebView ? -b / 2 : 0;
          f.transform(
            'translate3d(0px,0,' +
              R +
              'px) rotateX(' +
              (c.isHorizontal() ? 0 : S) +
              'deg) rotateY(' +
              (c.isHorizontal() ? -S : 0) +
              'deg)'
          );
        },
        setTransition: function e(n) {
          var c = this,
            h = c.$el;
          c.slides
            .transition(n)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(n),
            c.params.cubeEffect.shadow && !c.isHorizontal() && h.find('.swiper-cube-shadow').transition(n);
        },
      };
      function _extends$2() {
        return (_extends$2 =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var Z = {
        setTranslate: function e() {
          for (var n = this, c = n.slides, h = n.rtlTranslate, f = 0; f < c.length; f += 1) {
            var v = c.eq(f),
              m = v[0].progress;
            n.params.flipEffect.limitRotation && (m = Math.max(Math.min(v[0].progress, 1), -1));
            var g = -180 * m,
              w = 0,
              b = -v[0].swiperSlideOffset,
              y = 0;
            if (
              (n.isHorizontal() ? h && (g = -g) : ((y = b), (b = 0), (w = -g), (g = 0)),
              (v[0].style.zIndex = -Math.abs(Math.round(m)) + c.length),
              n.params.flipEffect.slideShadows)
            ) {
              var x = n.isHorizontal() ? v.find('.swiper-slide-shadow-left') : v.find('.swiper-slide-shadow-top'),
                E = n.isHorizontal() ? v.find('.swiper-slide-shadow-right') : v.find('.swiper-slide-shadow-bottom');
              0 === x.length &&
                ((x = $('<div class="swiper-slide-shadow-' + (n.isHorizontal() ? 'left' : 'top') + '"></div>')),
                v.append(x)),
                0 === E.length &&
                  ((E = $('<div class="swiper-slide-shadow-' + (n.isHorizontal() ? 'right' : 'bottom') + '"></div>')),
                  v.append(E)),
                x.length && (x[0].style.opacity = Math.max(-m, 0)),
                E.length && (E[0].style.opacity = Math.max(m, 0));
            }
            v.transform('translate3d(' + b + 'px, ' + y + 'px, 0px) rotateX(' + w + 'deg) rotateY(' + g + 'deg)');
          }
        },
        setTransition: function e(n) {
          var c = this,
            h = c.slides,
            f = c.activeIndex,
            v = c.$wrapperEl;
          if (
            (h
              .transition(n)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
              )
              .transition(n),
            c.params.virtualTranslate && 0 !== n)
          ) {
            var m = !1;
            h.eq(f).transitionEnd(function e() {
              if (!m && c && !c.destroyed) {
                (m = !0), (c.animating = !1);
                for (var n = ['webkitTransitionEnd', 'transitionend'], h = 0; h < n.length; h += 1) v.trigger(n[h]);
              }
            });
          }
        },
      };
      function _extends$1() {
        return (_extends$1 =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var J = {
        setTranslate: function e() {
          for (
            var n = this,
              c = n.width,
              h = n.height,
              f = n.slides,
              v = n.slidesSizesGrid,
              m = n.params.coverflowEffect,
              g = n.isHorizontal(),
              w = n.translate,
              b = g ? c / 2 - w : h / 2 - w,
              y = g ? m.rotate : -m.rotate,
              x = m.depth,
              E = 0,
              C = f.length;
            E < C;
            E += 1
          ) {
            var S = f.eq(E),
              A = v[E],
              M = ((b - S[0].swiperSlideOffset - A / 2) / A) * m.modifier,
              k = g ? y * M : 0,
              z = g ? 0 : y * M,
              P = -x * Math.abs(M),
              O = m.stretch;
            'string' == typeof O && -1 !== O.indexOf('%') && (O = (parseFloat(m.stretch) / 100) * A);
            var L = g ? 0 : O * M,
              I = g ? O * M : 0,
              D = 1 - (1 - m.scale) * Math.abs(M);
            Math.abs(I) < 0.001 && (I = 0),
              Math.abs(L) < 0.001 && (L = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(k) < 0.001 && (k = 0),
              Math.abs(z) < 0.001 && (z = 0),
              Math.abs(D) < 0.001 && (D = 0);
            var B =
              'translate3d(' +
              I +
              'px,' +
              L +
              'px,' +
              P +
              'px)  rotateX(' +
              z +
              'deg) rotateY(' +
              k +
              'deg) scale(' +
              D +
              ')';
            if ((S.transform(B), (S[0].style.zIndex = 1 - Math.abs(Math.round(M))), m.slideShadows)) {
              var N = g ? S.find('.swiper-slide-shadow-left') : S.find('.swiper-slide-shadow-top'),
                G = g ? S.find('.swiper-slide-shadow-right') : S.find('.swiper-slide-shadow-bottom');
              0 === N.length &&
                ((N = $('<div class="swiper-slide-shadow-' + (g ? 'left' : 'top') + '"></div>')), S.append(N)),
                0 === G.length &&
                  ((G = $('<div class="swiper-slide-shadow-' + (g ? 'right' : 'bottom') + '"></div>')), S.append(G)),
                N.length && (N[0].style.opacity = M > 0 ? M : 0),
                G.length && (G[0].style.opacity = -M > 0 ? -M : 0);
            }
          }
        },
        setTransition: function e(n) {
          this.slides
            .transition(n)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(n);
        },
      };
      function _extends() {
        return (_extends =
          Object.assign ||
          function (n) {
            for (var c = 1; c < arguments.length; c++) {
              var h = arguments[c];
              for (var f in h) Object.prototype.hasOwnProperty.call(h, f) && (n[f] = h[f]);
            }
            return n;
          }).apply(this, arguments);
      }
      var ee = {
          init: function e() {
            var n = this,
              c = n.params.thumbs;
            if (n.thumbs.initialized) return !1;
            n.thumbs.initialized = !0;
            var h = n.constructor;
            return (
              c.swiper instanceof h
                ? ((n.thumbs.swiper = c.swiper),
                  extend(n.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                  extend(n.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                : isObject(c.swiper) &&
                  ((n.thumbs.swiper = new h(
                    extend({}, c.swiper, {
                      watchSlidesVisibility: !0,
                      watchSlidesProgress: !0,
                      slideToClickedSlide: !1,
                    })
                  )),
                  (n.thumbs.swiperCreated = !0)),
              n.thumbs.swiper.$el.addClass(n.params.thumbs.thumbsContainerClass),
              n.thumbs.swiper.on('tap', n.thumbs.onThumbClick),
              !0
            );
          },
          onThumbClick: function e() {
            var n = this,
              c = n.thumbs.swiper;
            if (c) {
              var h = c.clickedIndex,
                f = c.clickedSlide;
              if (!((f && $(f).hasClass(n.params.thumbs.slideThumbActiveClass)) || null == h)) {
                var v;
                if (
                  ((v = c.params.loop ? parseInt($(c.clickedSlide).attr('data-swiper-slide-index'), 10) : h),
                  n.params.loop)
                ) {
                  var m = n.activeIndex;
                  n.slides.eq(m).hasClass(n.params.slideDuplicateClass) &&
                    (n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft), (m = n.activeIndex));
                  var g = n.slides
                      .eq(m)
                      .prevAll('[data-swiper-slide-index="' + v + '"]')
                      .eq(0)
                      .index(),
                    w = n.slides
                      .eq(m)
                      .nextAll('[data-swiper-slide-index="' + v + '"]')
                      .eq(0)
                      .index();
                  v = void 0 === g ? w : void 0 === w ? g : w - m < m - g ? w : g;
                }
                n.slideTo(v);
              }
            }
          },
          update: function e(n) {
            var c = this,
              h = c.thumbs.swiper;
            if (h) {
              var f = 'auto' === h.params.slidesPerView ? h.slidesPerViewDynamic() : h.params.slidesPerView,
                v = c.params.thumbs.autoScrollOffset,
                m = v && !h.params.loop;
              if (c.realIndex !== h.realIndex || m) {
                var g,
                  w,
                  b = h.activeIndex;
                if (h.params.loop) {
                  h.slides.eq(b).hasClass(h.params.slideDuplicateClass) &&
                    (h.loopFix(), (h._clientLeft = h.$wrapperEl[0].clientLeft), (b = h.activeIndex));
                  var y = h.slides
                      .eq(b)
                      .prevAll('[data-swiper-slide-index="' + c.realIndex + '"]')
                      .eq(0)
                      .index(),
                    x = h.slides
                      .eq(b)
                      .nextAll('[data-swiper-slide-index="' + c.realIndex + '"]')
                      .eq(0)
                      .index();
                  (g =
                    void 0 === y
                      ? x
                      : void 0 === x
                      ? y
                      : x - b == b - y
                      ? h.params.slidesPerGroup > 1
                        ? x
                        : b
                      : x - b < b - y
                      ? x
                      : y),
                    (w = c.activeIndex > c.previousIndex ? 'next' : 'prev');
                } else w = (g = c.realIndex) > c.previousIndex ? 'next' : 'prev';
                m && (g += 'next' === w ? v : -1 * v),
                  h.visibleSlidesIndexes &&
                    h.visibleSlidesIndexes.indexOf(g) < 0 &&
                    (h.params.centeredSlides && (g = g > b ? g - Math.floor(f / 2) + 1 : g + Math.floor(f / 2) - 1),
                    h.slideTo(g, n ? 0 : void 0));
              }
              var E = 1,
                C = c.params.thumbs.slideThumbActiveClass;
              if (
                (c.params.slidesPerView > 1 && !c.params.centeredSlides && (E = c.params.slidesPerView),
                c.params.thumbs.multipleActiveThumbs || (E = 1),
                (E = Math.floor(E)),
                h.slides.removeClass(C),
                h.params.loop || (h.params.virtual && h.params.virtual.enabled))
              )
                for (var S = 0; S < E; S += 1)
                  h.$wrapperEl.children('[data-swiper-slide-index="' + (c.realIndex + S) + '"]').addClass(C);
              else for (var A = 0; A < E; A += 1) h.slides.eq(c.realIndex + A).addClass(C);
            }
          },
        },
        te = [
          D,
          N,
          {
            name: 'mousewheel',
            params: {
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: 'container',
                thresholdDelta: null,
                thresholdTime: null,
              },
            },
            create: function e() {
              bindModuleMethods(this, {
                mousewheel: {
                  enabled: !1,
                  lastScrollTime: now(),
                  lastEventBeforeSnap: void 0,
                  recentWheelEvents: [],
                  enable: G.enable,
                  disable: G.disable,
                  handle: G.handle,
                  handleMouseEnter: G.handleMouseEnter,
                  handleMouseLeave: G.handleMouseLeave,
                  animateSlider: G.animateSlider,
                  releaseScroll: G.releaseScroll,
                },
              });
            },
            on: {
              init: function e(n) {
                !n.params.mousewheel.enabled && n.params.cssMode && n.mousewheel.disable(),
                  n.params.mousewheel.enabled && n.mousewheel.enable();
              },
              destroy: function e(n) {
                n.params.cssMode && n.mousewheel.enable(), n.mousewheel.enabled && n.mousewheel.disable();
              },
            },
          },
          {
            name: 'navigation',
            params: {
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock',
              },
            },
            create: function e() {
              bindModuleMethods(this, { navigation: _extends$f({}, Y) });
            },
            on: {
              init: function e(n) {
                n.navigation.init(), n.navigation.update();
              },
              toEdge: function e(n) {
                n.navigation.update();
              },
              fromEdge: function e(n) {
                n.navigation.update();
              },
              destroy: function e(n) {
                n.navigation.destroy();
              },
              'enable disable': function e(n) {
                var c = n.navigation,
                  h = c.$nextEl,
                  f = c.$prevEl;
                h && h[n.enabled ? 'removeClass' : 'addClass'](n.params.navigation.lockClass),
                  f && f[n.enabled ? 'removeClass' : 'addClass'](n.params.navigation.lockClass);
              },
              click: function e(n, c) {
                var h = n.navigation,
                  f = h.$nextEl,
                  v = h.$prevEl,
                  m = c.target;
                if (n.params.navigation.hideOnClick && !$(m).is(v) && !$(m).is(f)) {
                  if (
                    n.pagination &&
                    n.params.pagination &&
                    n.params.pagination.clickable &&
                    (n.pagination.el === m || n.pagination.el.contains(m))
                  )
                    return;
                  var g;
                  f
                    ? (g = f.hasClass(n.params.navigation.hiddenClass))
                    : v && (g = v.hasClass(n.params.navigation.hiddenClass)),
                    !0 === g ? n.emit('navigationShow') : n.emit('navigationHide'),
                    f && f.toggleClass(n.params.navigation.hiddenClass),
                    v && v.toggleClass(n.params.navigation.hiddenClass);
                }
              },
            },
          },
          {
            name: 'pagination',
            params: {
              pagination: {
                el: null,
                bulletElement: 'span',
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: 'bullets',
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function e(n) {
                  return n;
                },
                formatFractionTotal: function e(n) {
                  return n;
                },
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-',
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
                clickableClass: 'swiper-pagination-clickable',
                lockClass: 'swiper-pagination-lock',
              },
            },
            create: function e() {
              bindModuleMethods(this, { pagination: _extends$e({ dynamicBulletIndex: 0 }, j) });
            },
            on: {
              init: function e(n) {
                n.pagination.init(), n.pagination.render(), n.pagination.update();
              },
              activeIndexChange: function e(n) {
                (n.params.loop || void 0 === n.snapIndex) && n.pagination.update();
              },
              snapIndexChange: function e(n) {
                n.params.loop || n.pagination.update();
              },
              slidesLengthChange: function e(n) {
                n.params.loop && (n.pagination.render(), n.pagination.update());
              },
              snapGridLengthChange: function e(n) {
                n.params.loop || (n.pagination.render(), n.pagination.update());
              },
              destroy: function e(n) {
                n.pagination.destroy();
              },
              'enable disable': function e(n) {
                var c = n.pagination.$el;
                c && c[n.enabled ? 'removeClass' : 'addClass'](n.params.pagination.lockClass);
              },
              click: function e(n, c) {
                var h = c.target;
                if (
                  n.params.pagination.el &&
                  n.params.pagination.hideOnClick &&
                  n.pagination.$el.length > 0 &&
                  !$(h).hasClass(n.params.pagination.bulletClass)
                ) {
                  if (
                    n.navigation &&
                    ((n.navigation.nextEl && h === n.navigation.nextEl) ||
                      (n.navigation.prevEl && h === n.navigation.prevEl))
                  )
                    return;
                  !0 === n.pagination.$el.hasClass(n.params.pagination.hiddenClass)
                    ? n.emit('paginationShow')
                    : n.emit('paginationHide'),
                    n.pagination.$el.toggleClass(n.params.pagination.hiddenClass);
                }
              },
            },
          },
          {
            name: 'scrollbar',
            params: {
              scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
              },
            },
            create: function e() {
              bindModuleMethods(this, {
                scrollbar: _extends$d({ isTouched: !1, timeout: null, dragTimeout: null }, _),
              });
            },
            on: {
              init: function e(n) {
                n.scrollbar.init(), n.scrollbar.updateSize(), n.scrollbar.setTranslate();
              },
              update: function e(n) {
                n.scrollbar.updateSize();
              },
              resize: function e(n) {
                n.scrollbar.updateSize();
              },
              observerUpdate: function e(n) {
                n.scrollbar.updateSize();
              },
              setTranslate: function e(n) {
                n.scrollbar.setTranslate();
              },
              setTransition: function e(n, c) {
                n.scrollbar.setTransition(c);
              },
              'enable disable': function e(n) {
                var c = n.scrollbar.$el;
                c && c[n.enabled ? 'removeClass' : 'addClass'](n.params.scrollbar.lockClass);
              },
              destroy: function e(n) {
                n.scrollbar.destroy();
              },
            },
          },
          {
            name: 'parallax',
            params: { parallax: { enabled: !1 } },
            create: function e() {
              bindModuleMethods(this, { parallax: _extends$c({}, W) });
            },
            on: {
              beforeInit: function e(n) {
                n.params.parallax.enabled &&
                  ((n.params.watchSlidesProgress = !0), (n.originalParams.watchSlidesProgress = !0));
              },
              init: function e(n) {
                n.params.parallax.enabled && n.parallax.setTranslate();
              },
              setTranslate: function e(n) {
                n.params.parallax.enabled && n.parallax.setTranslate();
              },
              setTransition: function e(n, c) {
                n.params.parallax.enabled && n.parallax.setTransition(c);
              },
            },
          },
          {
            name: 'zoom',
            params: {
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed',
              },
            },
            create: function e() {
              var n = this;
              bindModuleMethods(n, {
                zoom: _extends$b(
                  {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                      $slideEl: void 0,
                      slideWidth: void 0,
                      slideHeight: void 0,
                      $imageEl: void 0,
                      $imageWrapEl: void 0,
                      maxRatio: 3,
                    },
                    image: {
                      isTouched: void 0,
                      isMoved: void 0,
                      currentX: void 0,
                      currentY: void 0,
                      minX: void 0,
                      minY: void 0,
                      maxX: void 0,
                      maxY: void 0,
                      width: void 0,
                      height: void 0,
                      startX: void 0,
                      startY: void 0,
                      touchesStart: {},
                      touchesCurrent: {},
                    },
                    velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                  },
                  H
                ),
              });
              var c = 1;
              Object.defineProperty(n.zoom, 'scale', {
                get: function e() {
                  return c;
                },
                set: function e(h) {
                  if (c !== h) {
                    var f = n.zoom.gesture.$imageEl ? n.zoom.gesture.$imageEl[0] : void 0,
                      v = n.zoom.gesture.$slideEl ? n.zoom.gesture.$slideEl[0] : void 0;
                    n.emit('zoomChange', h, f, v);
                  }
                  c = h;
                },
              });
            },
            on: {
              init: function e(n) {
                n.params.zoom.enabled && n.zoom.enable();
              },
              destroy: function e(n) {
                n.zoom.disable();
              },
              touchStart: function e(n, c) {
                n.zoom.enabled && n.zoom.onTouchStart(c);
              },
              touchEnd: function e(n, c) {
                n.zoom.enabled && n.zoom.onTouchEnd(c);
              },
              doubleTap: function e(n, c) {
                !n.animating && n.params.zoom.enabled && n.zoom.enabled && n.params.zoom.toggle && n.zoom.toggle(c);
              },
              transitionEnd: function e(n) {
                n.zoom.enabled && n.params.zoom.enabled && n.zoom.onTransitionEnd();
              },
              slideChange: function e(n) {
                n.zoom.enabled && n.params.zoom.enabled && n.params.cssMode && n.zoom.onTransitionEnd();
              },
            },
          },
          {
            name: 'lazy',
            params: {
              lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: '',
                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader',
              },
            },
            create: function e() {
              bindModuleMethods(this, { lazy: _extends$a({ initialImageLoaded: !1 }, R) });
            },
            on: {
              beforeInit: function e(n) {
                n.params.lazy.enabled && n.params.preloadImages && (n.params.preloadImages = !1);
              },
              init: function e(n) {
                n.params.lazy.enabled &&
                  !n.params.loop &&
                  0 === n.params.initialSlide &&
                  (n.params.lazy.checkInView ? n.lazy.checkInViewOnLoad() : n.lazy.load());
              },
              scroll: function e(n) {
                n.params.freeMode && !n.params.freeModeSticky && n.lazy.load();
              },
              'scrollbarDragMove resize _freeModeNoMomentumRelease': function e(n) {
                n.params.lazy.enabled && n.lazy.load();
              },
              transitionStart: function e(n) {
                n.params.lazy.enabled &&
                  (n.params.lazy.loadOnTransitionStart ||
                    (!n.params.lazy.loadOnTransitionStart && !n.lazy.initialImageLoaded)) &&
                  n.lazy.load();
              },
              transitionEnd: function e(n) {
                n.params.lazy.enabled && !n.params.lazy.loadOnTransitionStart && n.lazy.load();
              },
              slideChange: function e(n) {
                var c = n.params,
                  h = c.lazy,
                  f = c.cssMode,
                  v = c.watchSlidesVisibility,
                  m = c.watchSlidesProgress,
                  g = c.touchReleaseOnEdges,
                  w = c.resistanceRatio;
                h.enabled && (f || ((v || m) && (g || 0 === w))) && n.lazy.load();
              },
            },
          },
          {
            name: 'controller',
            params: { controller: { control: void 0, inverse: !1, by: 'slide' } },
            create: function e() {
              bindModuleMethods(this, { controller: _extends$9({ control: this.params.controller.control }, F) });
            },
            on: {
              update: function e(n) {
                n.controller.control &&
                  n.controller.spline &&
                  ((n.controller.spline = void 0), delete n.controller.spline);
              },
              resize: function e(n) {
                n.controller.control &&
                  n.controller.spline &&
                  ((n.controller.spline = void 0), delete n.controller.spline);
              },
              observerUpdate: function e(n) {
                n.controller.control &&
                  n.controller.spline &&
                  ((n.controller.spline = void 0), delete n.controller.spline);
              },
              setTranslate: function e(n, c, h) {
                n.controller.control && n.controller.setTranslate(c, h);
              },
              setTransition: function e(n, c, h) {
                n.controller.control && n.controller.setTransition(c, h);
              },
            },
          },
          {
            name: 'a11y',
            params: {
              a11y: {
                enabled: !0,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
                slideLabelMessage: '{{index}} / {{slidesLength}}',
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: 'group',
              },
            },
            create: function e() {
              bindModuleMethods(this, {
                a11y: _extends$8({}, X, {
                  liveRegion: $(
                    '<span class="' +
                      this.params.a11y.notificationClass +
                      '" aria-live="assertive" aria-atomic="true"></span>'
                  ),
                }),
              });
            },
            on: {
              afterInit: function e(n) {
                n.params.a11y.enabled && (n.a11y.init(), n.a11y.updateNavigation());
              },
              toEdge: function e(n) {
                n.params.a11y.enabled && n.a11y.updateNavigation();
              },
              fromEdge: function e(n) {
                n.params.a11y.enabled && n.a11y.updateNavigation();
              },
              paginationUpdate: function e(n) {
                n.params.a11y.enabled && n.a11y.updatePagination();
              },
              destroy: function e(n) {
                n.params.a11y.enabled && n.a11y.destroy();
              },
            },
          },
          {
            name: 'history',
            params: { history: { enabled: !1, root: '', replaceState: !1, key: 'slides' } },
            create: function e() {
              bindModuleMethods(this, { history: _extends$7({}, V) });
            },
            on: {
              init: function e(n) {
                n.params.history.enabled && n.history.init();
              },
              destroy: function e(n) {
                n.params.history.enabled && n.history.destroy();
              },
              'transitionEnd _freeModeNoMomentumRelease': function e(n) {
                n.history.initialized && n.history.setHistory(n.params.history.key, n.activeIndex);
              },
              slideChange: function e(n) {
                n.history.initialized && n.params.cssMode && n.history.setHistory(n.params.history.key, n.activeIndex);
              },
            },
          },
          {
            name: 'hash-navigation',
            params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
            create: function e() {
              bindModuleMethods(this, { hashNavigation: _extends$6({ initialized: !1 }, q) });
            },
            on: {
              init: function e(n) {
                n.params.hashNavigation.enabled && n.hashNavigation.init();
              },
              destroy: function e(n) {
                n.params.hashNavigation.enabled && n.hashNavigation.destroy();
              },
              'transitionEnd _freeModeNoMomentumRelease': function e(n) {
                n.hashNavigation.initialized && n.hashNavigation.setHash();
              },
              slideChange: function e(n) {
                n.hashNavigation.initialized && n.params.cssMode && n.hashNavigation.setHash();
              },
            },
          },
          {
            name: 'autoplay',
            params: {
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
              },
            },
            create: function e() {
              bindModuleMethods(this, { autoplay: _extends$5({}, U, { running: !1, paused: !1 }) });
            },
            on: {
              init: function e(n) {
                n.params.autoplay.enabled &&
                  (n.autoplay.start(),
                  getDocument().addEventListener('visibilitychange', n.autoplay.onVisibilityChange),
                  n.autoplay.attachMouseEvents());
              },
              beforeTransitionStart: function e(n, c, h) {
                n.autoplay.running &&
                  (h || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(c) : n.autoplay.stop());
              },
              sliderFirstMove: function e(n) {
                n.autoplay.running && (n.params.autoplay.disableOnInteraction ? n.autoplay.stop() : n.autoplay.pause());
              },
              touchEnd: function e(n) {
                n.params.cssMode && n.autoplay.paused && !n.params.autoplay.disableOnInteraction && n.autoplay.run();
              },
              destroy: function e(n) {
                n.autoplay.detachMouseEvents(),
                  n.autoplay.running && n.autoplay.stop(),
                  getDocument().removeEventListener('visibilitychange', n.autoplay.onVisibilityChange);
              },
            },
          },
          {
            name: 'effect-fade',
            params: { fadeEffect: { crossFade: !1 } },
            create: function e() {
              bindModuleMethods(this, { fadeEffect: _extends$4({}, Q) });
            },
            on: {
              beforeInit: function e(n) {
                if ('fade' === n.params.effect) {
                  n.classNames.push(n.params.containerModifierClass + 'fade');
                  var c = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  };
                  extend(n.params, c), extend(n.originalParams, c);
                }
              },
              setTranslate: function e(n) {
                'fade' === n.params.effect && n.fadeEffect.setTranslate();
              },
              setTransition: function e(n, c) {
                'fade' === n.params.effect && n.fadeEffect.setTransition(c);
              },
            },
          },
          {
            name: 'effect-cube',
            params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
            create: function e() {
              bindModuleMethods(this, { cubeEffect: _extends$3({}, K) });
            },
            on: {
              beforeInit: function e(n) {
                if ('cube' === n.params.effect) {
                  n.classNames.push(n.params.containerModifierClass + 'cube'),
                    n.classNames.push(n.params.containerModifierClass + '3d');
                  var c = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0,
                  };
                  extend(n.params, c), extend(n.originalParams, c);
                }
              },
              setTranslate: function e(n) {
                'cube' === n.params.effect && n.cubeEffect.setTranslate();
              },
              setTransition: function e(n, c) {
                'cube' === n.params.effect && n.cubeEffect.setTransition(c);
              },
            },
          },
          {
            name: 'effect-flip',
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function e() {
              bindModuleMethods(this, { flipEffect: _extends$2({}, Z) });
            },
            on: {
              beforeInit: function e(n) {
                if ('flip' === n.params.effect) {
                  n.classNames.push(n.params.containerModifierClass + 'flip'),
                    n.classNames.push(n.params.containerModifierClass + '3d');
                  var c = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0,
                  };
                  extend(n.params, c), extend(n.originalParams, c);
                }
              },
              setTranslate: function e(n) {
                'flip' === n.params.effect && n.flipEffect.setTranslate();
              },
              setTransition: function e(n, c) {
                'flip' === n.params.effect && n.flipEffect.setTransition(c);
              },
            },
          },
          {
            name: 'effect-coverflow',
            params: {
              coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 },
            },
            create: function e() {
              bindModuleMethods(this, { coverflowEffect: _extends$1({}, J) });
            },
            on: {
              beforeInit: function e(n) {
                'coverflow' === n.params.effect &&
                  (n.classNames.push(n.params.containerModifierClass + 'coverflow'),
                  n.classNames.push(n.params.containerModifierClass + '3d'),
                  (n.params.watchSlidesProgress = !0),
                  (n.originalParams.watchSlidesProgress = !0));
              },
              setTranslate: function e(n) {
                'coverflow' === n.params.effect && n.coverflowEffect.setTranslate();
              },
              setTransition: function e(n, c) {
                'coverflow' === n.params.effect && n.coverflowEffect.setTransition(c);
              },
            },
          },
          {
            name: 'thumbs',
            params: {
              thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-container-thumbs',
              },
            },
            create: function e() {
              bindModuleMethods(this, { thumbs: _extends({ swiper: null, initialized: !1 }, ee) });
            },
            on: {
              beforeInit: function e(n) {
                var c = n.params.thumbs;
                c && c.swiper && (n.thumbs.init(), n.thumbs.update(!0));
              },
              slideChange: function e(n) {
                n.thumbs.swiper && n.thumbs.update();
              },
              update: function e(n) {
                n.thumbs.swiper && n.thumbs.update();
              },
              resize: function e(n) {
                n.thumbs.swiper && n.thumbs.update();
              },
              observerUpdate: function e(n) {
                n.thumbs.swiper && n.thumbs.update();
              },
              setTransition: function e(n, c) {
                var h = n.thumbs.swiper;
                h && h.setTransition(c);
              },
              beforeDestroy: function e(n) {
                var c = n.thumbs.swiper;
                c && n.thumbs.swiperCreated && c && c.destroy();
              },
            },
          },
        ];
      L.use(te);
      var ae = 0,
        ie = (function () {
          function e(n) {
            var c = this;
            Object(f.g)(this, n),
              (this.onChange = Object(f.c)(this, 'change', 7)),
              (this.onAnimationFinish = Object(f.c)(this, 'animationfinish', 7)),
              (this._id = ae++),
              (this.isWillLoadCalled = !1),
              (this.indicatorDots = !1),
              (this.indicatorColor = 'rgba(0, 0, 0, .3)'),
              (this.indicatorActiveColor = '#000000'),
              (this.autoplay = !1),
              (this.current = 0),
              (this.interval = 5e3),
              (this.duration = 500),
              (this.circular = !1),
              (this.vertical = !1),
              (this.previousMargin = '0px'),
              (this.nextMargin = '0px'),
              (this.displayMultipleItems = 1),
              (this.full = !1),
              (this.handleSwiperLoopListen = function () {
                var n, h;
                (null === (n = c.observerFirst) || void 0 === n ? void 0 : n.disconnect) &&
                  c.observerFirst.disconnect(),
                  (null === (h = c.observerLast) || void 0 === h ? void 0 : h.disconnect) &&
                    c.observerLast.disconnect(),
                  (c.observerFirst = new MutationObserver(c.handleSwiperLoop)),
                  (c.observerLast = new MutationObserver(c.handleSwiperLoop));
                var f = c.swiper.$wrapperEl[0].querySelectorAll('taro-swiper-item-core:not(.swiper-slide-duplicate)');
                f.length >= 1
                  ? c.observerFirst.observe(f[0], { characterData: !0 })
                  : f.length >= 2 && c.observerLast.observe(f[f.length - 1], { characterData: !0 });
              }),
              (this.handleSwiperLoop = Object(m.a)(function () {
                c.swiper && c.circular && (c.swiper.loopDestroy(), c.swiper.loopCreate());
              }, 500)),
              (this.handleSwiperSize = Object(m.a)(function () {
                c.swiper && !c.circular && c.swiper.updateSlides();
              }, 50));
          }
          return (
            (e.prototype.watchCurrent = function (n) {
              if (this.isWillLoadCalled) {
                var c = parseInt(n, 10);
                isNaN(c) ||
                  (this.circular
                    ? this.swiper.isBeginning || this.swiper.isEnd || this.swiper.slideToLoop(c)
                    : this.swiper.slideTo(c));
              }
            }),
            (e.prototype.watchAutoplay = function (n) {
              this.isWillLoadCalled &&
                this.swiper &&
                this.swiper.autoplay.running !== n &&
                (n
                  ? (this.swiper.params &&
                      'object' == typeof this.swiper.params.autoplay &&
                      (!0 === this.swiper.params.autoplay.disableOnInteraction &&
                        (this.swiper.params.autoplay.disableOnInteraction = !1),
                      (this.swiper.params.autoplay.delay = this.interval)),
                    this.swiper.autoplay.start())
                  : this.swiper.autoplay.stop());
            }),
            (e.prototype.watchDuration = function (n) {
              this.isWillLoadCalled && (this.swiper.params.speed = n);
            }),
            (e.prototype.watchInterval = function (n) {
              this.isWillLoadCalled &&
                'object' == typeof this.swiper.params.autoplay &&
                (this.swiper.params.autoplay.delay = n);
            }),
            (e.prototype.watchSwiperWrapper = function (n) {
              this.isWillLoadCalled &&
                n &&
                ((this.el.appendChild = function (c) {
                  return n.appendChild(c);
                }),
                (this.el.insertBefore = function (c, h) {
                  return n.insertBefore(c, h);
                }),
                (this.el.replaceChild = function (c, h) {
                  return n.replaceChild(c, h);
                }),
                (this.el.removeChild = function (c) {
                  return n.removeChild(c);
                }),
                this.el.addEventListener('DOMNodeInserted', this.handleSwiperSize),
                this.el.addEventListener('DOMNodeRemoved', this.handleSwiperSize));
            }),
            (e.prototype.watchCircular = function () {
              this.swiper && (this.swiper.destroy(), this.handleInit());
            }),
            (e.prototype.componentWillLoad = function () {
              this.isWillLoadCalled = !0;
            }),
            (e.prototype.componentDidLoad = function () {
              if ((this.handleInit(), this.swiper && this.circular)) {
                var n = this.swiper.$wrapperEl[0];
                (this.observer = new MutationObserver(this.handleSwiperLoopListen)),
                  this.observer.observe(n, { childList: !0 });
              }
            }),
            (e.prototype.componentWillUpdate = function () {
              this.swiper &&
                (this.autoplay && !this.swiper.autoplay.running && this.swiper.autoplay.start(), this.swiper.update());
            }),
            (e.prototype.componentDidRender = function () {
              this.handleSwiperLoop();
            }),
            (e.prototype.disconnectedCallback = function () {
              var n, c, h, f, v, m;
              this.el.removeEventListener('DOMNodeInserted', this.handleSwiperSize),
                this.el.removeEventListener('DOMNodeRemoved', this.handleSwiperSize),
                null === (c = null === (n = this.observer) || void 0 === n ? void 0 : n.disconnect) ||
                  void 0 === c ||
                  c.call(n),
                null === (f = null === (h = this.observerFirst) || void 0 === h ? void 0 : h.disconnect) ||
                  void 0 === f ||
                  f.call(h),
                null === (m = null === (v = this.observerLast) || void 0 === v ? void 0 : v.disconnect) ||
                  void 0 === m ||
                  m.call(v);
            }),
            (e.prototype.handleInit = function () {
              var n = this,
                c = n.autoplay,
                h = n.current,
                f = n.interval,
                v = n.duration,
                m = n.circular,
                g = n.vertical,
                w = n.displayMultipleItems,
                b = this,
                y = {
                  pagination: { el: '.taro-swiper-' + this._id + ' > .swiper-container > .swiper-pagination' },
                  direction: g ? 'vertical' : 'horizontal',
                  loop: m,
                  slidesPerView: w,
                  initialSlide: h,
                  speed: v,
                  observer: !0,
                  observeParents: !0,
                  on: {
                    slideTo: function () {
                      b.current = this.realIndex;
                    },
                    slideChangeTransitionEnd: function (n) {
                      m && (n.isBeginning || n.isEnd)
                        ? n.slideToLoop(this.realIndex, 0)
                        : b.onChange.emit({ current: this.realIndex, source: '' });
                    },
                    transitionEnd: function () {
                      b.onAnimationFinish.emit({ current: this.realIndex, source: '' });
                    },
                    observerUpdate: function (n, c) {
                      var h = c.target;
                      (h && 'string' == typeof h.className ? h.className : '').includes('taro_page') &&
                        'none' !== h.style.display &&
                        b.autoplay &&
                        h.contains(n.$el[0]) &&
                        n.slideTo(b.current);
                    },
                  },
                };
              c && (y.autoplay = { delay: f, disableOnInteraction: !1 }),
                (this.swiper = new L('.taro-swiper-' + this._id + ' > .swiper-container', y)),
                (this.swiperWrapper = this.el.querySelector(
                  '.taro-swiper-' + this._id + ' > .swiper-container > .swiper-wrapper'
                ));
            }),
            (e.prototype.render = function () {
              var n = this,
                c = n.vertical,
                h = n.indicatorDots,
                m = n.indicatorColor,
                g = n.indicatorActiveColor,
                w = { overflow: 'hidden' },
                b = { overflow: 'visible' };
              this.full && ((w.height = '100%'), (b.height = '100%'));
              var y = (/^(\d+)px/.exec(this.previousMargin) || [])[1],
                x = (/^(\d+)px/.exec(this.nextMargin) || [])[1],
                E = parseInt(y) || 0,
                C = parseInt(x) || 0;
              return (
                c
                  ? ((b.marginTop = E + 'px'), (b.marginBottom = C + 'px'))
                  : ((b.marginRight = C + 'px'), (b.marginLeft = E + 'px')),
                Object(f.e)(
                  f.a,
                  { class: 'taro-swiper-' + this._id, style: w },
                  Object(f.e)(
                    'div',
                    { class: 'swiper-container', style: b },
                    Object(f.e)(
                      'style',
                      { type: 'text/css' },
                      '\n              .taro-swiper-' +
                        this._id +
                        ' > .swiper-container > .swiper-pagination > .swiper-pagination-bullet { background: ' +
                        m +
                        ' }\n              .taro-swiper-' +
                        this._id +
                        ' > .swiper-container > .swiper-pagination > .swiper-pagination-bullet-active { background: ' +
                        g +
                        ' }\n            '
                    ),
                    Object(f.e)('div', { class: 'swiper-wrapper' }, Object(f.e)('slot', null)),
                    Object(f.e)('div', {
                      class: Object(v.c)('swiper-pagination', {
                        'swiper-pagination-hidden': !h,
                        'swiper-pagination-bullets': h,
                      }),
                    })
                  )
                )
              );
            }),
            Object.defineProperty(e.prototype, 'el', {
              get: function () {
                return Object(f.d)(this);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, 'watchers', {
              get: function () {
                return {
                  current: ['watchCurrent'],
                  autoplay: ['watchAutoplay'],
                  duration: ['watchDuration'],
                  interval: ['watchInterval'],
                  swiperWrapper: ['watchSwiperWrapper'],
                  circular: ['watchCircular'],
                };
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })();
      ie.style =
        "@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA') format('woff');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0px,0,0);transform:translate3d(0px,0,0)}.swiper-container-multirow>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-direction:column;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-container-pointer-events{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-pointer-events.swiper-container-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-slide{-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top, right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top, left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:'next'}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#ffffff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:50%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0px,-50%,0);transform:translate3d(0px,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s transform,.2s top;transition:.2s transform,.2s top}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s transform,.2s left;transition:.2s transform,.2s left}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s transform,.2s right;transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s infinite linear;animation:swiper-preloader-spin 1s infinite linear;-webkit-box-sizing:border-box;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-container-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;-webkit-filter:blur(50px);filter:blur(50px)}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}taro-swiper-core{display:block;height:150px}.swiper-container{height:100%}.swiper-pagination{font-size:0}.swiper-pagination-bullet{opacity:1}";
      var re = (function () {
        function e(n) {
          Object(f.g)(this, n);
        }
        return (
          (e.prototype.render = function () {
            return Object(f.e)(f.a, { class: 'swiper-slide', 'item-id': this.itemId });
          }),
          e
        );
      })();
    },
    129: function (n, c, h) {
      'use strict';
      (function (n) {
        h.d(c, 'a', function () {
          return createCommonjsModule;
        }),
          h.d(c, 'b', function () {
            return f;
          }),
          h.d(c, 'c', function () {
            return v;
          }),
          h.d(c, 'd', function () {
            return getDefaultExportFromCjs;
          });
        var f =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : void 0 !== n
            ? n
            : 'undefined' != typeof self
            ? self
            : {};
        function getDefaultExportFromCjs(n) {
          return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
        }
        function createCommonjsModule(n, c, h) {
          return (
            n(
              (h = {
                path: c,
                exports: {},
                require: function (n, c) {
                  return (function commonjsRequire() {
                    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
                  })();
                },
              }),
              h.exports
            ),
            h.exports
          );
        }
        var v = createCommonjsModule(function (n) {
          !(function () {
            var c = {}.hasOwnProperty;
            function r() {
              for (var n = [], h = 0; h < arguments.length; h++) {
                var f = arguments[h];
                if (f) {
                  var v = typeof f;
                  if ('string' === v || 'number' === v) n.push(f);
                  else if (Array.isArray(f)) {
                    if (f.length) {
                      var m = r.apply(null, f);
                      m && n.push(m);
                    }
                  } else if ('object' === v)
                    if (f.toString === Object.prototype.toString) for (var g in f) c.call(f, g) && f[g] && n.push(g);
                    else n.push(f.toString());
                }
              }
              return n.join(' ');
            }
            n.exports ? ((r.default = r), (n.exports = r)) : (window.classNames = r);
          })();
        });
      }.call(this, h(42)));
    },
    140: function (n, c, h) {
      'use strict';
      function throttle(n, c, h) {
        void 0 === c && (c = 250);
        var f,
          v = 0;
        return function () {
          for (var m = [], g = 0; g < arguments.length; g++) m[g] = arguments[g];
          var w = h || this,
            b = Date.now();
          b - v > c
            ? (n.apply(this, m), (v = b))
            : (clearTimeout(f),
              (f = setTimeout(function () {
                (v = b), n.apply(w, m);
              }, c)));
        };
      }
      function debounce(n, c, h) {
        var f;
        return (
          void 0 === c && (c = 250),
          function () {
            for (var v = [], m = 0; m < arguments.length; m++) v[m] = arguments[m];
            var g = h || this;
            clearTimeout(f),
              (f = setTimeout(function () {
                n.apply(g, v);
              }, c));
          }
        );
      }
      h.d(c, 'a', function () {
        return debounce;
      }),
        h.d(c, 'b', function () {
          return throttle;
        });
    },
  },
]);
