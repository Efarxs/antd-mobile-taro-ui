(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    126: function (e, t, c) {
      'use strict';
      c.d(t, 'a', function () {
        return withNativeProps;
      });
      var r = c(18),
        a = c(17),
        n = c.n(a),
        o = c(128),
        s = c.n(o);
      function withNativeProps(e, t) {
        var c = Object(r.a)({}, t.props);
        for (var a in (e.className && (c.className = s()(t.props.className, e.className)),
        e.style && (c.style = Object(r.a)(Object(r.a)({}, c.style), e.style)),
        void 0 !== e.tabIndex && (c.tabIndex = e.tabIndex),
        e))
          e.hasOwnProperty(a) && (a.startsWith('data-') || a.startsWith('aria-')) && (c[a] = e[a]);
        return n.a.cloneElement(t, c);
      }
    },
    127: function (e, t, c) {
      'use strict';
      c.d(t, 'a', function () {
        return mergeProps;
      });
      var r = c(134),
        a = c.n(r),
        n = c(135),
        o = c.n(n),
        s = c(136),
        l = c.n(s);
      function mergeProps() {
        function customizer(e, t) {
          return l()(t) ? e : t;
        }
        for (var e = a()({}, arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t++)
          e = o()(e, t < 0 || arguments.length <= t ? void 0 : arguments[t], customizer);
        return e;
      }
    },
    131: function (e, t, c) {},
    137: function (e, t, c) {},
    138: function (e, t, c) {
      'use strict';
      c(137);
      var r = c(17),
        a = c(128),
        n = c.n(a),
        o = c(125),
        s = c(127),
        l = c(126),
        i = c(124),
        d = { default: 'var(--adm-color-weak)', primary: 'var(--adm-color-primary)', white: 'var(--adm-color-white)' },
        j = { color: 'default' },
        u = Object(r.memo)(function (e) {
          var t = Object(s.a)(j, e),
            c = Object(r.useMemo)(
              function () {
                var e;
                return null !== (e = d[t.color]) && void 0 !== e ? e : t.color;
              },
              [t]
            );
          return Object(l.a)(
            t,
            Object(i.jsx)(o.c, {
              className: n()('adm-loading', 'adm-dot-loading'),
              children: Object(i.jsxs)(o.c, {
                className: 'wrapper',
                children: [
                  Object(i.jsx)(o.b, { className: 'dot a', style: { backgroundColor: c } }),
                  Object(i.jsx)(o.b, { className: 'dot b', style: { backgroundColor: c } }),
                  Object(i.jsx)(o.b, { className: 'dot c', style: { backgroundColor: c } }),
                ],
              }),
            })
          );
        });
      t.a = u;
    },
    141: function (e, t, c) {
      'use strict';
      c.d(t, 'a', function () {
        return n;
      });
      var r = c(125),
        a = (c(17), c(131), c(124)),
        n = function DemoBlock(e) {
          return Object(a.jsxs)(r.c, {
            className: 'demoBlock',
            children: [
              Object(a.jsx)(r.c, { className: 'title', children: e.title }),
              Object(a.jsx)(r.c, {
                className: 'main',
                style: { padding: e.padding, background: e.background },
                children: e.children,
              }),
            ],
          });
        };
      n.defaultProps = { padding: '12px 12px', background: 'var(--adm-color-background)' };
    },
    242: function (e, t, c) {
      'use strict';
      c.r(t);
      c(17);
      var r = c(125),
        a = c(138),
        n = c(141),
        o = c(124),
        demo1 = function () {
          return Object(o.jsxs)(o.Fragment, {
            children: [
              Object(o.jsx)(n.a, { title: '默认', children: Object(o.jsx)(a.a, {}) }),
              Object(o.jsx)(n.a, { title: '主题色 Loading', children: Object(o.jsx)(a.a, { color: 'primary' }) }),
              Object(o.jsx)(n.a, {
                title: '白色 Loading',
                background: '#a5a5a5',
                children: Object(o.jsx)(a.a, { color: 'white' }),
              }),
              Object(o.jsxs)(n.a, {
                title: '自动适配文本颜色',
                children: [
                  Object(o.jsxs)(r.c, {
                    style: { color: '#00b578' },
                    children: [
                      Object(o.jsx)(a.a, { color: 'currentColor' }),
                      Object(o.jsx)(r.b, { children: '绿色文字' }),
                    ],
                  }),
                  Object(o.jsxs)(r.c, {
                    style: { color: '#ff3141' },
                    children: [
                      Object(o.jsx)(a.a, { color: 'currentColor' }),
                      Object(o.jsx)(r.b, { children: '红色文字' }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      t.default = function () {
        return Object(o.jsx)(o.Fragment, { children: Object(o.jsx)(demo1, {}) });
      };
    },
  },
]);