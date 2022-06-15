/*! For license information please see 14.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    120: function (R, I, C) {
      'use strict';
      C.r(I),
        C.d(I, 'taro_video_control', function () {
          return F;
        }),
        C.d(I, 'taro_video_core', function () {
          return B;
        }),
        C.d(I, 'taro_video_danmu', function () {
          return U;
        });
      var O = C(29),
        w = C(129),
        _ = C(140),
        __generator = function (R, I) {
          var C,
            O,
            w,
            _,
            x = {
              label: 0,
              sent: function () {
                if (1 & w[0]) throw w[1];
                return w[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (_ = { next: o(0), throw: o(1), return: o(2) }),
            'function' == typeof Symbol &&
              (_[Symbol.iterator] = function () {
                return this;
              }),
            _
          );
          function o(R) {
            return function (I) {
              return l([R, I]);
            };
          }
          function l(_) {
            if (C) throw new TypeError('Generator is already executing.');
            for (; x; )
              try {
                if (
                  ((C = 1),
                  O &&
                    (w = 2 & _[0] ? O.return : _[0] ? O.throw || ((w = O.return) && w.call(O), 0) : O.next) &&
                    !(w = w.call(O, _[1])).done)
                )
                  return w;
                switch (((O = 0), w && (_ = [2 & _[0], w.value]), _[0])) {
                  case 0:
                  case 1:
                    w = _;
                    break;
                  case 4:
                    return x.label++, { value: _[1], done: !1 };
                  case 5:
                    x.label++, (O = _[1]), (_ = [0]);
                    continue;
                  case 7:
                    (_ = x.ops.pop()), x.trys.pop();
                    continue;
                  default:
                    if (!((w = x.trys), (w = w.length > 0 && w[w.length - 1]) || (6 !== _[0] && 2 !== _[0]))) {
                      x = 0;
                      continue;
                    }
                    if (3 === _[0] && (!w || (_[1] > w[0] && _[1] < w[3]))) {
                      x.label = _[1];
                      break;
                    }
                    if (6 === _[0] && x.label < w[1]) {
                      (x.label = w[1]), (w = _);
                      break;
                    }
                    if (w && x.label < w[2]) {
                      (x.label = w[2]), x.ops.push(_);
                      break;
                    }
                    w[2] && x.ops.pop(), x.trys.pop();
                    continue;
                }
                _ = I.call(R, x);
              } catch (R) {
                (_ = [6, R]), (O = 0);
              } finally {
                C = w = 0;
              }
            if (5 & _[0]) throw _[1];
            return { value: _[0] ? _[1] : void 0, done: !0 };
          }
        },
        __spreadArray = function (R, I) {
          for (var C = 0, O = I.length, w = R.length; C < O; C++, w++) R[w] = I[C];
          return R;
        },
        formatTime = function (R) {
          if (!R) return '';
          var I = Math.round(R % 60),
            C = Math.round((R - I) / 60);
          return (C < 10 ? '0' + C : C) + ':' + (I < 10 ? '0' + I : I);
        },
        normalizeNumber = function (R) {
          return Math.max(-1, Math.min(R, 1));
        },
        x = 'default',
        P = (function () {
          for (
            var R,
              I = [
                [
                  'requestFullscreen',
                  'exitFullscreen',
                  'fullscreenElement',
                  'fullscreenEnabled',
                  'fullscreenchange',
                  'fullscreenerror',
                ],
                [
                  'webkitRequestFullscreen',
                  'webkitExitFullscreen',
                  'webkitFullscreenElement',
                  'webkitFullscreenEnabled',
                  'webkitfullscreenchange',
                  'webkitfullscreenerror',
                ],
                [
                  'webkitRequestFullScreen',
                  'webkitCancelFullScreen',
                  'webkitCurrentFullScreenElement',
                  'webkitCancelFullScreen',
                  'webkitfullscreenchange',
                  'webkitfullscreenerror',
                ],
                [
                  'mozRequestFullScreen',
                  'mozCancelFullScreen',
                  'mozFullScreenElement',
                  'mozFullScreenEnabled',
                  'mozfullscreenchange',
                  'mozfullscreenerror',
                ],
                [
                  'msRequestFullscreen',
                  'msExitFullscreen',
                  'msFullscreenElement',
                  'msFullscreenEnabled',
                  'MSFullscreenChange',
                  'MSFullscreenError',
                ],
              ],
              C = [
                'webkitEnterFullscreen',
                'webkitExitFullscreen',
                'webkitCurrentFullScreenElement',
                'webkitSupportsFullscreen',
                'fullscreenchange',
                'fullscreenerror',
              ],
              O = 0,
              w = I.length,
              _ = {};
            O < w;
            O++
          )
            if ((R = I[O]) && R[1] in document) {
              for (O = 0; O < R.length; O++) _[I[0][O]] = R[O];
              return _;
            }
          if (!_[I[0][0]]) for (x = 'iOS', O = 0; O < C.length; O++) _[I[0][O]] = C[O];
          return _;
        })(),
        __awaiter$2 = function (R, I, C, O) {
          function a(R) {
            return R instanceof C
              ? R
              : new C(function (I) {
                  I(R);
                });
          }
          return new (C || (C = Promise))(function (C, w) {
            function s(R) {
              try {
                l(O.next(R));
              } catch (R) {
                w(R);
              }
            }
            function o(R) {
              try {
                l(O.throw(R));
              } catch (R) {
                w(R);
              }
            }
            function l(R) {
              R.done ? C(R.value) : a(R.value).then(s, o);
            }
            l((O = O.apply(R, I || [])).next());
          });
        },
        F = (function () {
          function e(R) {
            var I = this;
            Object(O.g)(this, R),
              (this.visible = !1),
              (this.isDraggingProgressBall = !1),
              (this.percentage = 0),
              (this.progressDimensions = { left: 0, width: 0 }),
              (this.calcPercentage = function (R) {
                var C = R - I.progressDimensions.left;
                return (C = Math.max(C, 0)), (C = Math.min(C, I.progressDimensions.width)) / I.progressDimensions.width;
              }),
              (this.onDragProgressBallStart = function () {
                (I.isDraggingProgressBall = !0), I.hideControlsTimer && clearTimeout(I.hideControlsTimer);
              }),
              (this.onClickProgress = function (R) {
                R.stopPropagation();
                var C = I.calcPercentage(R.pageX);
                I.seekFunc(C * I.duration), I.toggleVisibility(!0);
              });
          }
          return (
            (e.prototype.onDocumentTouchMove = function (R) {
              if (this.isDraggingProgressBall) {
                var I = R.touches[0].pageX;
                (this.percentage = this.calcPercentage(I)),
                  this.setProgressBall(this.percentage),
                  this.setCurrentTime(this.percentage * this.duration);
              }
            }),
            (e.prototype.onDocumentTouchEnd = function () {
              this.isDraggingProgressBall &&
                ((this.isDraggingProgressBall = !1),
                this.seekFunc(this.percentage * this.duration),
                this.toggleVisibility(!0));
            }),
            (e.prototype.setProgressBall = function (R) {
              return __awaiter$2(this, void 0, void 0, function () {
                return __generator(this, function (I) {
                  return this.progressBallRef && (this.progressBallRef.style.left = 100 * R + '%'), [2];
                });
              });
            }),
            (e.prototype.toggleVisibility = function (R) {
              return __awaiter$2(this, void 0, void 0, function () {
                var I,
                  C = this;
                return __generator(this, function (O) {
                  return (
                    (I = void 0 === R ? !this.visible : R)
                      ? (this.hideControlsTimer && clearTimeout(this.hideControlsTimer),
                        this.isPlaying &&
                          (this.hideControlsTimer = setTimeout(function () {
                            C.toggleVisibility(!1);
                          }, 2e3)),
                        (this.el.style.visibility = 'visible'))
                      : (this.el.style.visibility = 'hidden'),
                    (this.visible = !!I),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.getIsDraggingProgressBall = function () {
              return __awaiter$2(this, void 0, void 0, function () {
                return __generator(this, function (R) {
                  return [2, this.isDraggingProgressBall];
                });
              });
            }),
            (e.prototype.setCurrentTime = function (R) {
              return __awaiter$2(this, void 0, void 0, function () {
                return __generator(this, function (I) {
                  return (this.currentTimeRef.innerHTML = formatTime(R)), [2];
                });
              });
            }),
            (e.prototype.render = function () {
              var R,
                I = this,
                C = this,
                w = C.controls,
                _ = C.currentTime,
                x = C.duration,
                P = C.isPlaying,
                F = C.pauseFunc,
                M = C.playFunc,
                N = C.showPlayBtn,
                B = C.showProgress,
                U = formatTime(x);
              return (
                (R = N
                  ? P
                    ? Object(O.e)('div', {
                        class: 'taro-video-control-button taro-video-control-button-pause',
                        onClick: F,
                      })
                    : Object(O.e)('div', {
                        class: 'taro-video-control-button taro-video-control-button-play',
                        onClick: M,
                      })
                  : null),
                Object(O.e)(
                  O.a,
                  { class: 'taro-video-bar taro-video-bar-full' },
                  w &&
                    Object(O.e)(
                      'div',
                      { class: 'taro-video-controls' },
                      R,
                      B &&
                        Object(O.e)(
                          'div',
                          {
                            class: 'taro-video-current-time',
                            ref: function (R) {
                              return (I.currentTimeRef = R);
                            },
                          },
                          formatTime(_)
                        ),
                      B &&
                        Object(O.e)(
                          'div',
                          { class: 'taro-video-progress-container', onClick: this.onClickProgress },
                          Object(O.e)(
                            'div',
                            {
                              class: 'taro-video-progress',
                              ref: function (R) {
                                if (R) {
                                  var C = R.getBoundingClientRect();
                                  (I.progressDimensions.left = C.left), (I.progressDimensions.width = C.width);
                                }
                              },
                            },
                            Object(O.e)('div', { class: 'taro-video-progress-buffered', style: { width: '100%' } }),
                            Object(O.e)(
                              'div',
                              {
                                class: 'taro-video-ball',
                                ref: function (R) {
                                  return (I.progressBallRef = R);
                                },
                                onTouchStart: this.onDragProgressBallStart,
                                style: { left: (U ? (this.currentTime / x) * 100 : 0) + '%' },
                              },
                              Object(O.e)('div', { class: 'taro-video-inner' })
                            )
                          )
                        ),
                      B && Object(O.e)('div', { class: 'taro-video-duration' }, U)
                    ),
                  Object(O.e)('slot', null)
                )
              );
            }),
            Object.defineProperty(e.prototype, 'el', {
              get: function () {
                return Object(O.d)(this);
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        M = Object(w.a)(function (R, I) {
          'undefined' != typeof window &&
            (function t(I, C) {
              R.exports = C();
            })(w.b, function () {
              return (function (R) {
                var I = {};
                function r(C) {
                  if (I[C]) return I[C].exports;
                  var O = (I[C] = { i: C, l: !1, exports: {} });
                  return R[C].call(O.exports, O, O.exports, r), (O.l = !0), O.exports;
                }
                return (
                  (r.m = R),
                  (r.c = I),
                  (r.d = function (R, I, C) {
                    r.o(R, I) || Object.defineProperty(R, I, { enumerable: !0, get: C });
                  }),
                  (r.r = function (R) {
                    'undefined' != typeof Symbol &&
                      Symbol.toStringTag &&
                      Object.defineProperty(R, Symbol.toStringTag, { value: 'Module' }),
                      Object.defineProperty(R, '__esModule', { value: !0 });
                  }),
                  (r.t = function (R, I) {
                    if ((1 & I && (R = r(R)), 8 & I)) return R;
                    if (4 & I && 'object' == typeof R && R && R.__esModule) return R;
                    var C = Object.create(null);
                    if (
                      (r.r(C),
                      Object.defineProperty(C, 'default', { enumerable: !0, value: R }),
                      2 & I && 'string' != typeof R)
                    )
                      for (var O in R)
                        r.d(
                          C,
                          O,
                          function (I) {
                            return R[I];
                          }.bind(null, O)
                        );
                    return C;
                  }),
                  (r.n = function (R) {
                    var I =
                      R && R.__esModule
                        ? function t() {
                            return R.default;
                          }
                        : function t() {
                            return R;
                          };
                    return r.d(I, 'a', I), I;
                  }),
                  (r.o = function (R, I) {
                    return Object.prototype.hasOwnProperty.call(R, I);
                  }),
                  (r.p = '/dist/'),
                  r((r.s = './src/hls.ts'))
                );
              })({
                './node_modules/eventemitter3/index.js': function (R, I, C) {
                  var O = Object.prototype.hasOwnProperty,
                    w = '~';
                  function n() {}
                  function s(R, I, C) {
                    (this.fn = R), (this.context = I), (this.once = C || !1);
                  }
                  function o(R, I, C, O, _) {
                    if ('function' != typeof C) throw new TypeError('The listener must be a function');
                    var x = new s(C, O || R, _),
                      P = w ? w + I : I;
                    return (
                      R._events[P]
                        ? R._events[P].fn
                          ? (R._events[P] = [R._events[P], x])
                          : R._events[P].push(x)
                        : ((R._events[P] = x), R._eventsCount++),
                      R
                    );
                  }
                  function l(R, I) {
                    0 == --R._eventsCount ? (R._events = new n()) : delete R._events[I];
                  }
                  function u() {
                    (this._events = new n()), (this._eventsCount = 0);
                  }
                  Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (w = !1)),
                    (u.prototype.eventNames = function e() {
                      var R,
                        I,
                        C = [];
                      if (0 === this._eventsCount) return C;
                      for (I in (R = this._events)) O.call(R, I) && C.push(w ? I.slice(1) : I);
                      return Object.getOwnPropertySymbols ? C.concat(Object.getOwnPropertySymbols(R)) : C;
                    }),
                    (u.prototype.listeners = function e(R) {
                      var I = w ? w + R : R,
                        C = this._events[I];
                      if (!C) return [];
                      if (C.fn) return [C.fn];
                      for (var O = 0, _ = C.length, x = new Array(_); O < _; O++) x[O] = C[O].fn;
                      return x;
                    }),
                    (u.prototype.listenerCount = function e(R) {
                      var I = w ? w + R : R,
                        C = this._events[I];
                      return C ? (C.fn ? 1 : C.length) : 0;
                    }),
                    (u.prototype.emit = function e(R, I, C, O, _, x) {
                      var P = w ? w + R : R;
                      if (!this._events[P]) return !1;
                      var F,
                        M,
                        N = this._events[P],
                        B = arguments.length;
                      if (N.fn) {
                        switch ((N.once && this.removeListener(R, N.fn, void 0, !0), B)) {
                          case 1:
                            return N.fn.call(N.context), !0;
                          case 2:
                            return N.fn.call(N.context, I), !0;
                          case 3:
                            return N.fn.call(N.context, I, C), !0;
                          case 4:
                            return N.fn.call(N.context, I, C, O), !0;
                          case 5:
                            return N.fn.call(N.context, I, C, O, _), !0;
                          case 6:
                            return N.fn.call(N.context, I, C, O, _, x), !0;
                        }
                        for (M = 1, F = new Array(B - 1); M < B; M++) F[M - 1] = arguments[M];
                        N.fn.apply(N.context, F);
                      } else {
                        var U,
                          G = N.length;
                        for (M = 0; M < G; M++)
                          switch ((N[M].once && this.removeListener(R, N[M].fn, void 0, !0), B)) {
                            case 1:
                              N[M].fn.call(N[M].context);
                              break;
                            case 2:
                              N[M].fn.call(N[M].context, I);
                              break;
                            case 3:
                              N[M].fn.call(N[M].context, I, C);
                              break;
                            case 4:
                              N[M].fn.call(N[M].context, I, C, O);
                              break;
                            default:
                              if (!F) for (U = 1, F = new Array(B - 1); U < B; U++) F[U - 1] = arguments[U];
                              N[M].fn.apply(N[M].context, F);
                          }
                      }
                      return !0;
                    }),
                    (u.prototype.on = function e(R, I, C) {
                      return o(this, R, I, C, !1);
                    }),
                    (u.prototype.once = function e(R, I, C) {
                      return o(this, R, I, C, !0);
                    }),
                    (u.prototype.removeListener = function e(R, I, C, O) {
                      var _ = w ? w + R : R;
                      if (!this._events[_]) return this;
                      if (!I) return l(this, _), this;
                      var x = this._events[_];
                      if (x.fn) x.fn !== I || (O && !x.once) || (C && x.context !== C) || l(this, _);
                      else {
                        for (var P = 0, F = [], M = x.length; P < M; P++)
                          (x[P].fn !== I || (O && !x[P].once) || (C && x[P].context !== C)) && F.push(x[P]);
                        F.length ? (this._events[_] = 1 === F.length ? F[0] : F) : l(this, _);
                      }
                      return this;
                    }),
                    (u.prototype.removeAllListeners = function e(R) {
                      var I;
                      return (
                        R
                          ? ((I = w ? w + R : R), this._events[I] && l(this, I))
                          : ((this._events = new n()), (this._eventsCount = 0)),
                        this
                      );
                    }),
                    (u.prototype.off = u.prototype.removeListener),
                    (u.prototype.addListener = u.prototype.on),
                    (u.prefixed = w),
                    (u.EventEmitter = u),
                    (R.exports = u);
                },
                './node_modules/url-toolkit/src/url-toolkit.js': function (R, I, C) {
                  !(function (I) {
                    var C =
                        /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/,
                      O = /^([^\/?#]*)([^]*)$/,
                      w = /(?:\/|^)\.(?=\/)/g,
                      _ = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
                      x = {
                        buildAbsoluteURL: function (R, I, C) {
                          if (((C = C || {}), (R = R.trim()), !(I = I.trim()))) {
                            if (!C.alwaysNormalize) return R;
                            var w = x.parseURL(R);
                            if (!w) throw new Error('Error trying to parse base URL.');
                            return (w.path = x.normalizePath(w.path)), x.buildURLFromParts(w);
                          }
                          var _ = x.parseURL(I);
                          if (!_) throw new Error('Error trying to parse relative URL.');
                          if (_.scheme)
                            return C.alwaysNormalize ? ((_.path = x.normalizePath(_.path)), x.buildURLFromParts(_)) : I;
                          var P = x.parseURL(R);
                          if (!P) throw new Error('Error trying to parse base URL.');
                          if (!P.netLoc && P.path && '/' !== P.path[0]) {
                            var F = O.exec(P.path);
                            (P.netLoc = F[1]), (P.path = F[2]);
                          }
                          P.netLoc && !P.path && (P.path = '/');
                          var M = {
                            scheme: P.scheme,
                            netLoc: _.netLoc,
                            path: null,
                            params: _.params,
                            query: _.query,
                            fragment: _.fragment,
                          };
                          if (!_.netLoc && ((M.netLoc = P.netLoc), '/' !== _.path[0]))
                            if (_.path) {
                              var N = P.path,
                                B = N.substring(0, N.lastIndexOf('/') + 1) + _.path;
                              M.path = x.normalizePath(B);
                            } else
                              (M.path = P.path), _.params || ((M.params = P.params), _.query || (M.query = P.query));
                          return (
                            null === M.path && (M.path = C.alwaysNormalize ? x.normalizePath(_.path) : _.path),
                            x.buildURLFromParts(M)
                          );
                        },
                        parseURL: function (R) {
                          var I = C.exec(R);
                          return I
                            ? {
                                scheme: I[1] || '',
                                netLoc: I[2] || '',
                                path: I[3] || '',
                                params: I[4] || '',
                                query: I[5] || '',
                                fragment: I[6] || '',
                              }
                            : null;
                        },
                        normalizePath: function (R) {
                          for (
                            R = R.split('').reverse().join('').replace(w, '');
                            R.length !== (R = R.replace(_, '')).length;

                          );
                          return R.split('').reverse().join('');
                        },
                        buildURLFromParts: function (R) {
                          return R.scheme + R.netLoc + R.path + R.params + R.query + R.fragment;
                        },
                      };
                    R.exports = x;
                  })();
                },
                './node_modules/webworkify-webpack/index.js': function (R, I, C) {
                  function i(R) {
                    var I = {};
                    function r(C) {
                      if (I[C]) return I[C].exports;
                      var O = (I[C] = { i: C, l: !1, exports: {} });
                      return R[C].call(O.exports, O, O.exports, r), (O.l = !0), O.exports;
                    }
                    (r.m = R),
                      (r.c = I),
                      (r.i = function (R) {
                        return R;
                      }),
                      (r.d = function (R, I, C) {
                        r.o(R, I) || Object.defineProperty(R, I, { configurable: !1, enumerable: !0, get: C });
                      }),
                      (r.r = function (R) {
                        Object.defineProperty(R, '__esModule', { value: !0 });
                      }),
                      (r.n = function (R) {
                        var I =
                          R && R.__esModule
                            ? function t() {
                                return R.default;
                              }
                            : function t() {
                                return R;
                              };
                        return r.d(I, 'a', I), I;
                      }),
                      (r.o = function (R, I) {
                        return Object.prototype.hasOwnProperty.call(R, I);
                      }),
                      (r.p = '/'),
                      (r.oe = function (R) {
                        throw (console.error(R), R);
                      });
                    var C = r((r.s = ENTRY_MODULE));
                    return C.default || C;
                  }
                  var O = '[\\.|\\-|\\+|\\w|/|@]+',
                    w = '\\(\\s*(/\\*.*?\\*/)?\\s*.*?(' + O + ').*?\\)';
                  function s(R) {
                    return (R + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
                  }
                  function o(R) {
                    return !isNaN(1 * R);
                  }
                  function l(R, I, _) {
                    var x = {};
                    x[_] = [];
                    var P = I.toString(),
                      F = P.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                    if (!F) return x;
                    for (var M, N = F[1], B = new RegExp('(\\\\n|\\W)' + s(N) + w, 'g'); (M = B.exec(P)); )
                      'dll-reference' !== M[3] && x[_].push(M[3]);
                    for (
                      B = new RegExp('\\(' + s(N) + '\\("(dll-reference\\s(' + O + '))"\\)\\)' + w, 'g');
                      (M = B.exec(P));

                    )
                      R[M[2]] || (x[_].push(M[1]), (R[M[2]] = C(M[1]).m)),
                        (x[M[2]] = x[M[2]] || []),
                        x[M[2]].push(M[4]);
                    for (var U = Object.keys(x), G = 0; G < U.length; G++)
                      for (var j = 0; j < x[U[G]].length; j++) o(x[U[G]][j]) && (x[U[G]][j] = 1 * x[U[G]][j]);
                    return x;
                  }
                  function u(R) {
                    return Object.keys(R).reduce(function (I, C) {
                      return I || R[C].length > 0;
                    }, !1);
                  }
                  function f(R, I) {
                    for (var C = { main: [I] }, O = { main: [] }, w = { main: {} }; u(C); )
                      for (var _ = Object.keys(C), x = 0; x < _.length; x++) {
                        var P = _[x],
                          F = C[P].pop();
                        if (((w[P] = w[P] || {}), !w[P][F] && R[P][F])) {
                          (w[P][F] = !0), (O[P] = O[P] || []), O[P].push(F);
                          for (var M = l(R, R[P][F], P), N = Object.keys(M), B = 0; B < N.length; B++)
                            (C[N[B]] = C[N[B]] || []), (C[N[B]] = C[N[B]].concat(M[N[B]]));
                        }
                      }
                    return O;
                  }
                  R.exports = function (R, I) {
                    I = I || {};
                    var O = { main: C.m },
                      w = I.all ? { main: Object.keys(O.main) } : f(O, R),
                      _ = '';
                    Object.keys(w)
                      .filter(function (R) {
                        return 'main' !== R;
                      })
                      .forEach(function (R) {
                        for (var I = 0; w[R][I]; ) I++;
                        w[R].push(I),
                          (O[R][I] =
                            '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })'),
                          (_ =
                            _ +
                            'var ' +
                            R +
                            ' = (' +
                            i.toString().replace('ENTRY_MODULE', JSON.stringify(I)) +
                            ')({' +
                            w[R].map(function (I) {
                              return JSON.stringify(I) + ': ' + O[R][I].toString();
                            }).join(',') +
                            '});\n');
                      }),
                      (_ =
                        _ +
                        'new ((' +
                        i.toString().replace('ENTRY_MODULE', JSON.stringify(R)) +
                        ')({' +
                        w.main
                          .map(function (R) {
                            return JSON.stringify(R) + ': ' + O.main[R].toString();
                          })
                          .join(',') +
                        '}))(self);');
                    var x = new window.Blob([_], { type: 'text/javascript' });
                    if (I.bare) return x;
                    var P = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(x),
                      F = new window.Worker(P);
                    return (F.objectURL = P), F;
                  };
                },
                './src/config.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'hlsDefaultConfig', function () {
                      return Y;
                    }),
                    C.d(I, 'mergeConfig', function () {
                      return D;
                    }),
                    C.d(I, 'enableStreamingMode', function () {
                      return k;
                    });
                  var O = C('./src/controller/abr-controller.ts'),
                    w = C('./src/controller/audio-stream-controller.ts'),
                    _ = C('./src/controller/audio-track-controller.ts'),
                    x = C('./src/controller/subtitle-stream-controller.ts'),
                    P = C('./src/controller/subtitle-track-controller.ts'),
                    F = C('./src/controller/buffer-controller.ts'),
                    M = C('./src/controller/timeline-controller.ts'),
                    N = C('./src/controller/cap-level-controller.ts'),
                    B = C('./src/controller/fps-controller.ts'),
                    U = C('./src/controller/eme-controller.ts'),
                    G = C('./src/controller/cmcd-controller.ts'),
                    j = C('./src/utils/xhr-loader.ts'),
                    K = C('./src/utils/fetch-loader.ts'),
                    H = C('./src/utils/cues.ts'),
                    V = C('./src/utils/mediakeys-helper.ts'),
                    W = C('./src/utils/logger.ts');
                  function E() {
                    return (E =
                      Object.assign ||
                      function (R) {
                        for (var I = 1; I < arguments.length; I++) {
                          var C = arguments[I];
                          for (var O in C) Object.prototype.hasOwnProperty.call(C, O) && (R[O] = C[O]);
                        }
                        return R;
                      }).apply(this, arguments);
                  }
                  function T(R, I) {
                    var C = Object.keys(R);
                    if (Object.getOwnPropertySymbols) {
                      var O = Object.getOwnPropertySymbols(R);
                      I &&
                        (O = O.filter(function (I) {
                          return Object.getOwnPropertyDescriptor(R, I).enumerable;
                        })),
                        C.push.apply(C, O);
                    }
                    return C;
                  }
                  function b(R) {
                    for (var I = 1; I < arguments.length; I++) {
                      var C = null != arguments[I] ? arguments[I] : {};
                      I % 2
                        ? T(Object(C), !0).forEach(function (I) {
                            S(R, I, C[I]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(C))
                        : T(Object(C)).forEach(function (I) {
                            Object.defineProperty(R, I, Object.getOwnPropertyDescriptor(C, I));
                          });
                    }
                    return R;
                  }
                  function S(R, I, C) {
                    return (
                      I in R
                        ? Object.defineProperty(R, I, { value: C, enumerable: !0, configurable: !0, writable: !0 })
                        : (R[I] = C),
                      R
                    );
                  }
                  var Y = b(
                    b(
                      {
                        autoStartLoad: !0,
                        startPosition: -1,
                        defaultAudioCodec: void 0,
                        debug: !1,
                        capLevelOnFPSDrop: !1,
                        capLevelToPlayerSize: !1,
                        initialLiveManifestSize: 1,
                        maxBufferLength: 30,
                        backBufferLength: 1 / 0,
                        maxBufferSize: 6e7,
                        maxBufferHole: 0.1,
                        highBufferWatchdogPeriod: 2,
                        nudgeOffset: 0.1,
                        nudgeMaxRetry: 3,
                        maxFragLookUpTolerance: 0.25,
                        liveSyncDurationCount: 3,
                        liveMaxLatencyDurationCount: 1 / 0,
                        liveSyncDuration: void 0,
                        liveMaxLatencyDuration: void 0,
                        maxLiveSyncPlaybackRate: 1,
                        liveDurationInfinity: !1,
                        liveBackBufferLength: null,
                        maxMaxBufferLength: 600,
                        enableWorker: !0,
                        enableSoftwareAES: !0,
                        manifestLoadingTimeOut: 1e4,
                        manifestLoadingMaxRetry: 1,
                        manifestLoadingRetryDelay: 1e3,
                        manifestLoadingMaxRetryTimeout: 64e3,
                        startLevel: void 0,
                        levelLoadingTimeOut: 1e4,
                        levelLoadingMaxRetry: 4,
                        levelLoadingRetryDelay: 1e3,
                        levelLoadingMaxRetryTimeout: 64e3,
                        fragLoadingTimeOut: 2e4,
                        fragLoadingMaxRetry: 6,
                        fragLoadingRetryDelay: 1e3,
                        fragLoadingMaxRetryTimeout: 64e3,
                        startFragPrefetch: !1,
                        fpsDroppedMonitoringPeriod: 5e3,
                        fpsDroppedMonitoringThreshold: 0.2,
                        appendErrorMaxRetry: 3,
                        loader: j.default,
                        fLoader: void 0,
                        pLoader: void 0,
                        xhrSetup: void 0,
                        licenseXhrSetup: void 0,
                        licenseResponseCallback: void 0,
                        abrController: O.default,
                        bufferController: F.default,
                        capLevelController: N.default,
                        fpsController: B.default,
                        stretchShortVideoTrack: !1,
                        maxAudioFramesDrift: 1,
                        forceKeyFrameOnDiscontinuity: !0,
                        abrEwmaFastLive: 3,
                        abrEwmaSlowLive: 9,
                        abrEwmaFastVoD: 3,
                        abrEwmaSlowVoD: 9,
                        abrEwmaDefaultEstimate: 5e5,
                        abrBandWidthFactor: 0.95,
                        abrBandWidthUpFactor: 0.7,
                        abrMaxWithRealBitrate: !1,
                        maxStarvationDelay: 4,
                        maxLoadingDelay: 4,
                        minAutoBitrate: 0,
                        emeEnabled: !1,
                        widevineLicenseUrl: void 0,
                        drmSystemOptions: {},
                        requestMediaKeySystemAccessFunc: V.requestMediaKeySystemAccess,
                        testBandwidth: !0,
                        progressive: !1,
                        lowLatencyMode: !0,
                        cmcd: void 0,
                      },
                      (function L() {
                        return {
                          cueHandler: H.default,
                          enableCEA708Captions: !0,
                          enableWebVTT: !0,
                          enableIMSC1: !0,
                          captionsTextTrack1Label: 'English',
                          captionsTextTrack1LanguageCode: 'en',
                          captionsTextTrack2Label: 'Spanish',
                          captionsTextTrack2LanguageCode: 'es',
                          captionsTextTrack3Label: 'Unknown CC',
                          captionsTextTrack3LanguageCode: '',
                          captionsTextTrack4Label: 'Unknown CC',
                          captionsTextTrack4LanguageCode: '',
                          renderTextTracksNatively: !0,
                        };
                      })()
                    ),
                    {},
                    {
                      subtitleStreamController: x.SubtitleStreamController,
                      subtitleTrackController: P.default,
                      timelineController: M.TimelineController,
                      audioStreamController: w.default,
                      audioTrackController: _.default,
                      emeController: U.default,
                      cmcdController: G.default,
                    }
                  );
                  function D(R, I) {
                    if (
                      (I.liveSyncDurationCount || I.liveMaxLatencyDurationCount) &&
                      (I.liveSyncDuration || I.liveMaxLatencyDuration)
                    )
                      throw new Error(
                        "Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration"
                      );
                    if (
                      void 0 !== I.liveMaxLatencyDurationCount &&
                      (void 0 === I.liveSyncDurationCount || I.liveMaxLatencyDurationCount <= I.liveSyncDurationCount)
                    )
                      throw new Error(
                        'Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"'
                      );
                    if (
                      void 0 !== I.liveMaxLatencyDuration &&
                      (void 0 === I.liveSyncDuration || I.liveMaxLatencyDuration <= I.liveSyncDuration)
                    )
                      throw new Error(
                        'Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"'
                      );
                    return E({}, R, I);
                  }
                  function k(R) {
                    var I = R.loader;
                    I !== K.default && I !== j.default
                      ? (W.logger.log('[config]: Custom loader detected, cannot enable progressive streaming'),
                        (R.progressive = !1))
                      : Object(K.fetchSupported)() &&
                        ((R.loader = K.default),
                        (R.progressive = !0),
                        (R.enableSoftwareAES = !0),
                        W.logger.log('[config]: Progressive streaming enabled, using FetchLoader'));
                  }
                },
                './src/controller/abr-controller.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/utils/ewma-bandwidth-estimator.ts'),
                    _ = C('./src/events.ts'),
                    x = C('./src/utils/buffer-helper.ts'),
                    P = C('./src/errors.ts'),
                    F = C('./src/types/loader.ts'),
                    M = C('./src/utils/logger.ts');
                  function f(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  var N = (function () {
                    function e(R) {
                      (this.hls = void 0),
                        (this.lastLoadedFragLevel = 0),
                        (this._nextAutoLevel = -1),
                        (this.timer = void 0),
                        (this.onCheck = this._abandonRulesCheck.bind(this)),
                        (this.fragCurrent = null),
                        (this.partCurrent = null),
                        (this.bitrateTestDelay = 0),
                        (this.bwEstimator = void 0),
                        (this.hls = R);
                      var I = R.config;
                      (this.bwEstimator = new w.default(I.abrEwmaSlowVoD, I.abrEwmaFastVoD, I.abrEwmaDefaultEstimate)),
                        this.registerListeners();
                    }
                    var R = e.prototype;
                    return (
                      (R.registerListeners = function e() {
                        var R = this.hls;
                        R.on(_.Events.FRAG_LOADING, this.onFragLoading, this),
                          R.on(_.Events.FRAG_LOADED, this.onFragLoaded, this),
                          R.on(_.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                          R.on(_.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                          R.on(_.Events.ERROR, this.onError, this);
                      }),
                      (R.unregisterListeners = function e() {
                        var R = this.hls;
                        R.off(_.Events.FRAG_LOADING, this.onFragLoading, this),
                          R.off(_.Events.FRAG_LOADED, this.onFragLoaded, this),
                          R.off(_.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                          R.off(_.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                          R.off(_.Events.ERROR, this.onError, this);
                      }),
                      (R.destroy = function e() {
                        this.unregisterListeners(),
                          this.clearTimer(),
                          (this.hls = this.onCheck = null),
                          (this.fragCurrent = this.partCurrent = null);
                      }),
                      (R.onFragLoading = function e(R, I) {
                        var C,
                          O = I.frag;
                        O.type === F.PlaylistLevelType.MAIN &&
                          (this.timer ||
                            ((this.fragCurrent = O),
                            (this.partCurrent = null != (C = I.part) ? C : null),
                            (this.timer = self.setInterval(this.onCheck, 100))));
                      }),
                      (R.onLevelLoaded = function e(R, I) {
                        var C = this.hls.config;
                        I.details.live
                          ? this.bwEstimator.update(C.abrEwmaSlowLive, C.abrEwmaFastLive)
                          : this.bwEstimator.update(C.abrEwmaSlowVoD, C.abrEwmaFastVoD);
                      }),
                      (R._abandonRulesCheck = function e() {
                        var R = this.fragCurrent,
                          I = this.partCurrent,
                          C = this.hls,
                          w = C.autoLevelEnabled,
                          P = C.config,
                          F = C.media;
                        if (R && F) {
                          var N = I ? I.stats : R.stats,
                            B = I ? I.duration : R.duration;
                          if (N.aborted)
                            return (
                              M.logger.warn('frag loader destroy or aborted, disarm abandonRules'),
                              this.clearTimer(),
                              void (this._nextAutoLevel = -1)
                            );
                          if (w && !F.paused && F.playbackRate && F.readyState) {
                            var U = performance.now() - N.loading.start,
                              G = Math.abs(F.playbackRate);
                            if (!(U <= (500 * B) / G)) {
                              var j = C.levels,
                                K = C.minAutoLevel,
                                H = j[R.level],
                                V = N.total || Math.max(N.loaded, Math.round((B * H.maxBitrate) / 8)),
                                W = Math.max(1, N.bwEstimate ? N.bwEstimate / 8 : (1e3 * N.loaded) / U),
                                Y = (V - N.loaded) / W,
                                z = F.currentTime,
                                X = (x.BufferHelper.bufferInfo(F, z, P.maxBufferHole).end - z) / G;
                              if (!(X >= (2 * B) / G || Y <= X)) {
                                var q,
                                  Z = Number.POSITIVE_INFINITY;
                                for (q = R.level - 1; q > K; q--) {
                                  if ((Z = (B * j[q].maxBitrate) / (6.4 * W)) < X) break;
                                }
                                if (!(Z >= Y)) {
                                  var Q = this.bwEstimator.getEstimate();
                                  M.logger.warn(
                                    'Fragment ' +
                                      R.sn +
                                      (I ? ' part ' + I.index : '') +
                                      ' of level ' +
                                      R.level +
                                      ' is loading too slowly and will cause an underbuffer; aborting and switching to level ' +
                                      q +
                                      '\n      Current BW estimate: ' +
                                      (Object(O.isFiniteNumber)(Q) ? (Q / 1024).toFixed(3) : 'Unknown') +
                                      ' Kb/s\n      Estimated load time for current fragment: ' +
                                      Y.toFixed(3) +
                                      ' s\n      Estimated load time for the next fragment: ' +
                                      Z.toFixed(3) +
                                      ' s\n      Time to underbuffer: ' +
                                      X.toFixed(3) +
                                      ' s'
                                  ),
                                    (C.nextLoadLevel = q),
                                    this.bwEstimator.sample(U, N.loaded),
                                    this.clearTimer(),
                                    R.loader && ((this.fragCurrent = this.partCurrent = null), R.loader.abort()),
                                    C.trigger(_.Events.FRAG_LOAD_EMERGENCY_ABORTED, { frag: R, part: I, stats: N });
                                }
                              }
                            }
                          }
                        }
                      }),
                      (R.onFragLoaded = function e(R, I) {
                        var C = I.frag,
                          w = I.part;
                        if (C.type === F.PlaylistLevelType.MAIN && Object(O.isFiniteNumber)(C.sn)) {
                          var x = w ? w.stats : C.stats,
                            P = w ? w.duration : C.duration;
                          if (
                            (this.clearTimer(),
                            (this.lastLoadedFragLevel = C.level),
                            (this._nextAutoLevel = -1),
                            this.hls.config.abrMaxWithRealBitrate)
                          ) {
                            var M = this.hls.levels[C.level],
                              N = (M.loaded ? M.loaded.bytes : 0) + x.loaded,
                              B = (M.loaded ? M.loaded.duration : 0) + P;
                            (M.loaded = { bytes: N, duration: B }), (M.realBitrate = Math.round((8 * N) / B));
                          }
                          if (C.bitrateTest) {
                            var U = { stats: x, frag: C, part: w, id: C.type };
                            this.onFragBuffered(_.Events.FRAG_BUFFERED, U), (C.bitrateTest = !1);
                          }
                        }
                      }),
                      (R.onFragBuffered = function e(R, I) {
                        var C = I.frag,
                          O = I.part,
                          w = O ? O.stats : C.stats;
                        if (!w.aborted && C.type === F.PlaylistLevelType.MAIN && 'initSegment' !== C.sn) {
                          var _ = w.parsing.end - w.loading.start;
                          this.bwEstimator.sample(_, w.loaded),
                            (w.bwEstimate = this.bwEstimator.getEstimate()),
                            C.bitrateTest ? (this.bitrateTestDelay = _ / 1e3) : (this.bitrateTestDelay = 0);
                        }
                      }),
                      (R.onError = function e(R, I) {
                        switch (I.details) {
                          case P.ErrorDetails.FRAG_LOAD_ERROR:
                          case P.ErrorDetails.FRAG_LOAD_TIMEOUT:
                            this.clearTimer();
                        }
                      }),
                      (R.clearTimer = function e() {
                        self.clearInterval(this.timer), (this.timer = void 0);
                      }),
                      (R.getNextABRAutoLevel = function e() {
                        var R = this.fragCurrent,
                          I = this.partCurrent,
                          C = this.hls,
                          O = C.maxAutoLevel,
                          w = C.config,
                          _ = C.minAutoLevel,
                          P = C.media,
                          F = I ? I.duration : R ? R.duration : 0,
                          N = P ? P.currentTime : 0,
                          B = P && 0 !== P.playbackRate ? Math.abs(P.playbackRate) : 1,
                          U = this.bwEstimator ? this.bwEstimator.getEstimate() : w.abrEwmaDefaultEstimate,
                          G = (x.BufferHelper.bufferInfo(P, N, w.maxBufferHole).end - N) / B,
                          j = this.findBestLevel(U, _, O, G, w.abrBandWidthFactor, w.abrBandWidthUpFactor);
                        if (j >= 0) return j;
                        M.logger.trace(
                          (G ? 'rebuffering expected' : 'buffer is empty') + ', finding optimal quality level'
                        );
                        var K = F ? Math.min(F, w.maxStarvationDelay) : w.maxStarvationDelay,
                          H = w.abrBandWidthFactor,
                          V = w.abrBandWidthUpFactor;
                        if (!G) {
                          var W = this.bitrateTestDelay;
                          if (W)
                            (K = (F ? Math.min(F, w.maxLoadingDelay) : w.maxLoadingDelay) - W),
                              M.logger.trace(
                                'bitrate test took ' +
                                  Math.round(1e3 * W) +
                                  'ms, set first fragment max fetchDuration to ' +
                                  Math.round(1e3 * K) +
                                  ' ms'
                              ),
                              (H = V = 1);
                        }
                        return (j = this.findBestLevel(U, _, O, G + K, H, V)), Math.max(j, 0);
                      }),
                      (R.findBestLevel = function e(R, I, C, O, w, _) {
                        for (
                          var x,
                            P = this.fragCurrent,
                            F = this.partCurrent,
                            N = this.lastLoadedFragLevel,
                            B = this.hls.levels,
                            U = B[N],
                            G = !(null == U || null === (x = U.details) || void 0 === x || !x.live),
                            j = null == U ? void 0 : U.codecSet,
                            K = F ? F.duration : P ? P.duration : 0,
                            H = C;
                          H >= I;
                          H--
                        ) {
                          var V = B[H];
                          if (V && (!j || V.codecSet === j)) {
                            var W = V.details,
                              Y =
                                (F
                                  ? null == W
                                    ? void 0
                                    : W.partTarget
                                  : null == W
                                  ? void 0
                                  : W.averagetargetduration) || K,
                              z = void 0;
                            z = H <= N ? w * R : _ * R;
                            var X = B[H].maxBitrate,
                              q = (X * Y) / z;
                            if (
                              (M.logger.trace(
                                'level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: ' +
                                  H +
                                  '/' +
                                  Math.round(z) +
                                  '/' +
                                  X +
                                  '/' +
                                  Y +
                                  '/' +
                                  O +
                                  '/' +
                                  q
                              ),
                              z > X && (!q || (G && !this.bitrateTestDelay) || q < O))
                            )
                              return H;
                          }
                        }
                        return -1;
                      }),
                      (function c(R, I, C) {
                        return I && f(R.prototype, I), C && f(R, C), R;
                      })(e, [
                        {
                          key: 'nextAutoLevel',
                          get: function e() {
                            var R = this._nextAutoLevel,
                              I = this.bwEstimator;
                            if (!(-1 === R || (I && I.canEstimate()))) return R;
                            var C = this.getNextABRAutoLevel();
                            return -1 !== R && (C = Math.min(R, C)), C;
                          },
                          set: function e(R) {
                            this._nextAutoLevel = R;
                          },
                        },
                      ]),
                      e
                    );
                  })();
                  I.default = N;
                },
                './src/controller/audio-stream-controller.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/controller/base-stream-controller.ts'),
                    _ = C('./src/events.ts'),
                    x = C('./src/utils/buffer-helper.ts'),
                    P = C('./src/controller/fragment-tracker.ts'),
                    F = C('./src/types/level.ts'),
                    M = C('./src/types/loader.ts'),
                    N = C('./src/loader/fragment.ts'),
                    B = C('./src/demux/chunk-cache.ts'),
                    U = C('./src/demux/transmuxer-interface.ts'),
                    G = C('./src/types/transmuxer.ts'),
                    j = C('./src/controller/fragment-finders.ts'),
                    K = C('./src/utils/discontinuities.ts'),
                    H = C('./src/errors.ts'),
                    V = C('./src/utils/logger.ts');
                  function y() {
                    return (y =
                      Object.assign ||
                      function (R) {
                        for (var I = 1; I < arguments.length; I++) {
                          var C = arguments[I];
                          for (var O in C) Object.prototype.hasOwnProperty.call(C, O) && (R[O] = C[O]);
                        }
                        return R;
                      }).apply(this, arguments);
                  }
                  function T(R, I) {
                    return (T =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  var W = (function (R) {
                    function t(I, C) {
                      var O;
                      return (
                        ((O = R.call(this, I, C, '[audio-stream-controller]') || this).videoBuffer = null),
                        (O.videoTrackCC = -1),
                        (O.waitingVideoCC = -1),
                        (O.audioSwitch = !1),
                        (O.trackId = -1),
                        (O.waitingData = null),
                        (O.mainDetails = null),
                        (O.bufferFlushed = !1),
                        O._registerListeners(),
                        O
                      );
                    }
                    !(function E(R, I) {
                      (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), T(R, I);
                    })(t, R);
                    var I = t.prototype;
                    return (
                      (I.onHandlerDestroying = function e() {
                        this._unregisterListeners(), (this.mainDetails = null);
                      }),
                      (I._registerListeners = function e() {
                        var R = this.hls;
                        R.on(_.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          R.on(_.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          R.on(_.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.on(_.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                          R.on(_.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                          R.on(_.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                          R.on(_.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                          R.on(_.Events.ERROR, this.onError, this),
                          R.on(_.Events.BUFFER_RESET, this.onBufferReset, this),
                          R.on(_.Events.BUFFER_CREATED, this.onBufferCreated, this),
                          R.on(_.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                          R.on(_.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                          R.on(_.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                      }),
                      (I._unregisterListeners = function e() {
                        var R = this.hls;
                        R.off(_.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          R.off(_.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          R.off(_.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.off(_.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                          R.off(_.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                          R.off(_.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                          R.off(_.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                          R.off(_.Events.ERROR, this.onError, this),
                          R.off(_.Events.BUFFER_RESET, this.onBufferReset, this),
                          R.off(_.Events.BUFFER_CREATED, this.onBufferCreated, this),
                          R.off(_.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                          R.off(_.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                          R.off(_.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                      }),
                      (I.onInitPtsFound = function e(R, I) {
                        var C = I.frag,
                          O = I.id,
                          _ = I.initPTS;
                        if ('main' === O) {
                          var x = C.cc;
                          (this.initPTS[C.cc] = _),
                            this.log('InitPTS for cc: ' + x + ' found from main: ' + _),
                            (this.videoTrackCC = x),
                            this.state === w.State.WAITING_INIT_PTS && this.tick();
                        }
                      }),
                      (I.startLoad = function e(R) {
                        if (!this.levels) return (this.startPosition = R), void (this.state = w.State.STOPPED);
                        var I = this.lastCurrentTime;
                        this.stopLoad(),
                          this.setInterval(100),
                          (this.fragLoadError = 0),
                          I > 0 && -1 === R
                            ? (this.log('Override startPosition with lastCurrentTime @' + I.toFixed(3)),
                              (this.state = w.State.IDLE))
                            : ((this.loadedmetadata = !1), (this.state = w.State.WAITING_TRACK)),
                          (this.nextLoadPosition = this.startPosition = this.lastCurrentTime = R),
                          this.tick();
                      }),
                      (I.doTick = function t() {
                        switch (this.state) {
                          case w.State.IDLE:
                            this.doTickIdle();
                            break;
                          case w.State.WAITING_TRACK:
                            var I,
                              C = this.levels,
                              O = this.trackId,
                              _ = null == C || null === (I = C[O]) || void 0 === I ? void 0 : I.details;
                            if (_) {
                              if (this.waitForCdnTuneIn(_)) break;
                              this.state = w.State.WAITING_INIT_PTS;
                            }
                            break;
                          case w.State.FRAG_LOADING_WAITING_RETRY:
                            var P,
                              F = performance.now(),
                              M = this.retryDate;
                            (!M || F >= M || (null !== (P = this.media) && void 0 !== P && P.seeking)) &&
                              (this.log('RetryDate reached, switch back to IDLE state'), (this.state = w.State.IDLE));
                            break;
                          case w.State.WAITING_INIT_PTS:
                            var N = this.waitingData;
                            if (N) {
                              var B = N.frag,
                                U = N.part,
                                G = N.cache,
                                K = N.complete;
                              if (void 0 !== this.initPTS[B.cc]) {
                                (this.waitingData = null),
                                  (this.waitingVideoCC = -1),
                                  (this.state = w.State.FRAG_LOADING);
                                var H = { frag: B, part: U, payload: G.flush(), networkDetails: null };
                                this._handleFragmentLoadProgress(H),
                                  K && R.prototype._handleFragmentLoadComplete.call(this, H);
                              } else if (this.videoTrackCC !== this.waitingVideoCC)
                                V.logger.log(
                                  'Waiting fragment cc (' +
                                    B.cc +
                                    ') cancelled because video is at cc ' +
                                    this.videoTrackCC
                                ),
                                  this.clearWaitingFragment();
                              else {
                                var W = this.getLoadPosition(),
                                  Y = x.BufferHelper.bufferInfo(this.mediaBuffer, W, this.config.maxBufferHole);
                                Object(j.fragmentWithinToleranceTest)(Y.end, this.config.maxFragLookUpTolerance, B) <
                                  0 &&
                                  (V.logger.log(
                                    'Waiting fragment cc (' +
                                      B.cc +
                                      ') @ ' +
                                      B.start +
                                      ' cancelled because another fragment at ' +
                                      Y.end +
                                      ' is needed'
                                  ),
                                  this.clearWaitingFragment());
                              }
                            } else this.state = w.State.IDLE;
                        }
                        this.onTickEnd();
                      }),
                      (I.clearWaitingFragment = function e() {
                        var R = this.waitingData;
                        R &&
                          (this.fragmentTracker.removeFragment(R.frag),
                          (this.waitingData = null),
                          (this.waitingVideoCC = -1),
                          (this.state = w.State.IDLE));
                      }),
                      (I.onTickEnd = function e() {
                        var R = this.media;
                        if (R && R.readyState) {
                          var I = (this.mediaBuffer ? this.mediaBuffer : R).buffered;
                          !this.loadedmetadata && I.length && (this.loadedmetadata = !0),
                            (this.lastCurrentTime = R.currentTime);
                        }
                      }),
                      (I.doTickIdle = function e() {
                        var R,
                          I,
                          C = this.hls,
                          O = this.levels,
                          x = this.media,
                          P = this.trackId,
                          F = C.config;
                        if (O && O[P] && (x || (!this.startFragRequested && F.startFragPrefetch))) {
                          var B = O[P].details;
                          if (!B || (B.live && this.levelLastLoaded !== P) || this.waitForCdnTuneIn(B))
                            this.state = w.State.WAITING_TRACK;
                          else {
                            this.bufferFlushed &&
                              ((this.bufferFlushed = !1),
                              this.afterBufferFlushed(
                                this.mediaBuffer ? this.mediaBuffer : this.media,
                                N.ElementaryStreamTypes.AUDIO,
                                M.PlaylistLevelType.AUDIO
                              ));
                            var U = this.getFwdBufferInfo(
                              this.mediaBuffer ? this.mediaBuffer : this.media,
                              M.PlaylistLevelType.AUDIO
                            );
                            if (null !== U) {
                              var G = U.len,
                                j = this.getMaxBufferLength(),
                                K = this.audioSwitch;
                              if (!(G >= j) || K) {
                                if (!K && this._streamEnded(U, B))
                                  return (
                                    C.trigger(_.Events.BUFFER_EOS, { type: 'audio' }), void (this.state = w.State.ENDED)
                                  );
                                var H = B.fragments[0].start,
                                  V = U.end;
                                if (K) {
                                  var W = this.getLoadPosition();
                                  (V = W),
                                    B.PTSKnown &&
                                      W < H &&
                                      (U.end > H || U.nextStart) &&
                                      (this.log(
                                        'Alt audio track ahead of main track, seek to start of alt audio track'
                                      ),
                                      (x.currentTime = H + 0.05));
                                }
                                var Y = this.getNextFragment(V, B);
                                Y
                                  ? 'identity' !==
                                      (null === (R = Y.decryptdata) || void 0 === R ? void 0 : R.keyFormat) ||
                                    (null !== (I = Y.decryptdata) && void 0 !== I && I.key)
                                    ? this.loadFragment(Y, B, V)
                                    : this.loadKey(Y, B)
                                  : (this.bufferFlushed = !0);
                              }
                            }
                          }
                        }
                      }),
                      (I.getMaxBufferLength = function t() {
                        var I = R.prototype.getMaxBufferLength.call(this),
                          C = this.getFwdBufferInfo(
                            this.videoBuffer ? this.videoBuffer : this.media,
                            M.PlaylistLevelType.MAIN
                          );
                        return null === C ? I : Math.max(I, C.len);
                      }),
                      (I.onMediaDetaching = function t() {
                        (this.videoBuffer = null), R.prototype.onMediaDetaching.call(this);
                      }),
                      (I.onAudioTracksUpdated = function e(R, I) {
                        var C = I.audioTracks;
                        this.resetTransmuxer(),
                          (this.levels = C.map(function (R) {
                            return new F.Level(R);
                          }));
                      }),
                      (I.onAudioTrackSwitching = function e(R, I) {
                        var C = !!I.url;
                        this.trackId = I.id;
                        var O = this.fragCurrent;
                        null != O && O.loader && O.loader.abort(),
                          (this.fragCurrent = null),
                          this.clearWaitingFragment(),
                          C ? this.setInterval(100) : this.resetTransmuxer(),
                          C ? ((this.audioSwitch = !0), (this.state = w.State.IDLE)) : (this.state = w.State.STOPPED),
                          this.tick();
                      }),
                      (I.onManifestLoading = function e() {
                        (this.mainDetails = null),
                          this.fragmentTracker.removeAllFragments(),
                          (this.startPosition = this.lastCurrentTime = 0),
                          (this.bufferFlushed = !1);
                      }),
                      (I.onLevelLoaded = function e(R, I) {
                        this.mainDetails = I.details;
                      }),
                      (I.onAudioTrackLoaded = function e(R, I) {
                        var C,
                          O = this.levels,
                          _ = I.details,
                          x = I.id;
                        if (O) {
                          this.log(
                            'Track ' + x + ' loaded [' + _.startSN + ',' + _.endSN + '],duration:' + _.totalduration
                          );
                          var P = O[x],
                            F = 0;
                          if (_.live || (null !== (C = P.details) && void 0 !== C && C.live)) {
                            var M = this.mainDetails;
                            if ((_.fragments[0] || (_.deltaUpdateFailed = !0), _.deltaUpdateFailed || !M)) return;
                            !P.details && _.hasProgramDateTime && M.hasProgramDateTime
                              ? (Object(K.alignMediaPlaylistByPDT)(_, M), (F = _.fragments[0].start))
                              : (F = this.alignPlaylists(_, P.details));
                          }
                          (P.details = _),
                            (this.levelLastLoaded = x),
                            this.startFragRequested ||
                              (!this.mainDetails && _.live) ||
                              this.setStartPosition(P.details, F),
                            this.state !== w.State.WAITING_TRACK ||
                              this.waitForCdnTuneIn(_) ||
                              (this.state = w.State.IDLE),
                            this.tick();
                        } else this.warn('Audio tracks were reset while loading level ' + x);
                      }),
                      (I._handleFragmentLoadProgress = function e(R) {
                        var I,
                          C = R.frag,
                          O = R.part,
                          _ = R.payload,
                          x = this.config,
                          P = this.trackId,
                          F = this.levels;
                        if (F) {
                          var N = F[P];
                          console.assert(N, 'Audio track is defined on fragment load progress');
                          var j = N.details;
                          console.assert(j, 'Audio track details are defined on fragment load progress');
                          var K = x.defaultAudioCodec || N.audioCodec || 'mp4a.40.2',
                            H = this.transmuxer;
                          H ||
                            (H = this.transmuxer =
                              new U.default(
                                this.hls,
                                M.PlaylistLevelType.AUDIO,
                                this._handleTransmuxComplete.bind(this),
                                this._handleTransmuxerFlush.bind(this)
                              ));
                          var W = this.initPTS[C.cc],
                            Y = null === (I = C.initSegment) || void 0 === I ? void 0 : I.data;
                          if (void 0 !== W) {
                            var z = O ? O.index : -1,
                              X = -1 !== z,
                              q = new G.ChunkMetadata(C.level, C.sn, C.stats.chunkCount, _.byteLength, z, X);
                            H.push(_, Y, K, '', C, O, j.totalduration, !1, q, W);
                          } else {
                            V.logger.log(
                              'Unknown video PTS for cc ' +
                                C.cc +
                                ', waiting for video PTS before demuxing audio frag ' +
                                C.sn +
                                ' of [' +
                                j.startSN +
                                ' ,' +
                                j.endSN +
                                '],track ' +
                                P
                            ),
                              (this.waitingData = this.waitingData || {
                                frag: C,
                                part: O,
                                cache: new B.default(),
                                complete: !1,
                              }).cache.push(new Uint8Array(_)),
                              (this.waitingVideoCC = this.videoTrackCC),
                              (this.state = w.State.WAITING_INIT_PTS);
                          }
                        } else
                          this.warn(
                            'Audio tracks were reset while fragment load was in progress. Fragment ' +
                              C.sn +
                              ' of level ' +
                              C.level +
                              ' will not be buffered'
                          );
                      }),
                      (I._handleFragmentLoadComplete = function t(I) {
                        this.waitingData
                          ? (this.waitingData.complete = !0)
                          : R.prototype._handleFragmentLoadComplete.call(this, I);
                      }),
                      (I.onBufferReset = function e() {
                        (this.mediaBuffer = this.videoBuffer = null), (this.loadedmetadata = !1);
                      }),
                      (I.onBufferCreated = function e(R, I) {
                        var C = I.tracks.audio;
                        C && (this.mediaBuffer = C.buffer),
                          I.tracks.video && (this.videoBuffer = I.tracks.video.buffer);
                      }),
                      (I.onFragBuffered = function e(R, I) {
                        var C = I.frag,
                          O = I.part;
                        C.type === M.PlaylistLevelType.AUDIO &&
                          (this.fragContextChanged(C)
                            ? this.warn(
                                'Fragment ' +
                                  C.sn +
                                  (O ? ' p: ' + O.index : '') +
                                  ' of level ' +
                                  C.level +
                                  ' finished buffering, but was aborted. state: ' +
                                  this.state +
                                  ', audioSwitch: ' +
                                  this.audioSwitch
                              )
                            : ('initSegment' !== C.sn &&
                                ((this.fragPrevious = C),
                                this.audioSwitch &&
                                  ((this.audioSwitch = !1),
                                  this.hls.trigger(_.Events.AUDIO_TRACK_SWITCHED, { id: this.trackId }))),
                              this.fragBufferedComplete(C, O)));
                      }),
                      (I.onError = function t(I, C) {
                        switch (C.details) {
                          case H.ErrorDetails.FRAG_LOAD_ERROR:
                          case H.ErrorDetails.FRAG_LOAD_TIMEOUT:
                          case H.ErrorDetails.KEY_LOAD_ERROR:
                          case H.ErrorDetails.KEY_LOAD_TIMEOUT:
                            this.onFragmentOrKeyLoadError(M.PlaylistLevelType.AUDIO, C);
                            break;
                          case H.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                          case H.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                            this.state !== w.State.ERROR &&
                              this.state !== w.State.STOPPED &&
                              ((this.state = C.fatal ? w.State.ERROR : w.State.IDLE),
                              this.warn(C.details + ' while loading frag, switching to ' + this.state + ' state'));
                            break;
                          case H.ErrorDetails.BUFFER_FULL_ERROR:
                            if (
                              'audio' === C.parent &&
                              (this.state === w.State.PARSING || this.state === w.State.PARSED)
                            ) {
                              var O = !0,
                                _ = this.getFwdBufferInfo(this.mediaBuffer, M.PlaylistLevelType.AUDIO);
                              _ && _.len > 0.5 && (O = !this.reduceMaxBufferLength(_.len)),
                                O &&
                                  (this.warn(
                                    'Buffer full error also media.currentTime is not buffered, flush audio buffer'
                                  ),
                                  (this.fragCurrent = null),
                                  R.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, 'audio')),
                                this.resetLoadingState();
                            }
                        }
                      }),
                      (I.onBufferFlushed = function e(R, I) {
                        I.type === N.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = !0);
                      }),
                      (I._handleTransmuxComplete = function e(R) {
                        var I,
                          C = 'audio',
                          O = this.hls,
                          x = R.remuxResult,
                          P = R.chunkMeta,
                          F = this.getCurrentContext(P);
                        if (!F)
                          return (
                            this.warn(
                              'The loading context changed while buffering fragment ' +
                                P.sn +
                                ' of level ' +
                                P.level +
                                '. This chunk will not be buffered.'
                            ),
                            void this.resetLiveStartWhenNotLoaded(P.level)
                          );
                        var M = F.frag,
                          B = F.part,
                          U = x.audio,
                          G = x.text,
                          j = x.id3,
                          K = x.initSegment;
                        if (!this.fragContextChanged(M)) {
                          if (
                            ((this.state = w.State.PARSING),
                            this.audioSwitch && U && this.completeAudioSwitch(),
                            null != K &&
                              K.tracks &&
                              (this._bufferInitSegment(K.tracks, M, P),
                              O.trigger(_.Events.FRAG_PARSING_INIT_SEGMENT, { frag: M, id: C, tracks: K.tracks })),
                            U)
                          ) {
                            var H = U.startPTS,
                              V = U.endPTS,
                              W = U.startDTS,
                              Y = U.endDTS;
                            B &&
                              (B.elementaryStreams[N.ElementaryStreamTypes.AUDIO] = {
                                startPTS: H,
                                endPTS: V,
                                startDTS: W,
                                endDTS: Y,
                              }),
                              M.setElementaryStreamInfo(N.ElementaryStreamTypes.AUDIO, H, V, W, Y),
                              this.bufferFragmentData(U, M, B, P);
                          }
                          if (null != j && null !== (I = j.samples) && void 0 !== I && I.length) {
                            var z = y({ frag: M, id: C }, j);
                            O.trigger(_.Events.FRAG_PARSING_METADATA, z);
                          }
                          if (G) {
                            var X = y({ frag: M, id: C }, G);
                            O.trigger(_.Events.FRAG_PARSING_USERDATA, X);
                          }
                        }
                      }),
                      (I._bufferInitSegment = function e(R, I, C) {
                        if (this.state === w.State.PARSING) {
                          R.video && delete R.video;
                          var O = R.audio;
                          if (O) {
                            (O.levelCodec = O.codec),
                              (O.id = 'audio'),
                              this.log(
                                'Init audio buffer, container:' + O.container + ', codecs[parsed]=[' + O.codec + ']'
                              ),
                              this.hls.trigger(_.Events.BUFFER_CODECS, R);
                            var x = O.initSegment;
                            if (null != x && x.byteLength) {
                              var P = { type: 'audio', frag: I, part: null, chunkMeta: C, parent: I.type, data: x };
                              this.hls.trigger(_.Events.BUFFER_APPENDING, P);
                            }
                            this.tick();
                          }
                        }
                      }),
                      (I.loadFragment = function t(I, C, _) {
                        var x = this.fragmentTracker.getState(I);
                        (this.fragCurrent = I),
                          (this.audioSwitch || x === P.FragmentState.NOT_LOADED || x === P.FragmentState.PARTIAL) &&
                            ('initSegment' === I.sn
                              ? this._loadInitSegment(I)
                              : C.live && !Object(O.isFiniteNumber)(this.initPTS[I.cc])
                              ? (this.log(
                                  'Waiting for video PTS in continuity counter ' +
                                    I.cc +
                                    ' of live stream before loading audio fragment ' +
                                    I.sn +
                                    ' of level ' +
                                    this.trackId
                                ),
                                (this.state = w.State.WAITING_INIT_PTS))
                              : ((this.startFragRequested = !0), R.prototype.loadFragment.call(this, I, C, _)));
                      }),
                      (I.completeAudioSwitch = function t() {
                        var I = this.hls,
                          C = this.media,
                          O = this.trackId;
                        C &&
                          (this.log('Switching audio track : flushing all audio'),
                          R.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, 'audio')),
                          (this.audioSwitch = !1),
                          I.trigger(_.Events.AUDIO_TRACK_SWITCHED, { id: O });
                      }),
                      t
                    );
                  })(w.default);
                  I.default = W;
                },
                './src/controller/audio-track-controller.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/events.ts'),
                    w = C('./src/errors.ts'),
                    _ = C('./src/controller/base-playlist-controller.ts'),
                    x = C('./src/types/loader.ts');
                  function o(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  function f(R, I) {
                    return (f =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  var P = (function (R) {
                    function t(I) {
                      var C;
                      return (
                        ((C = R.call(this, I, '[audio-track-controller]') || this).tracks = []),
                        (C.groupId = null),
                        (C.tracksInGroup = []),
                        (C.trackId = -1),
                        (C.trackName = ''),
                        (C.selectDefaultTrack = !0),
                        C.registerListeners(),
                        C
                      );
                    }
                    !(function u(R, I) {
                      (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), f(R, I);
                    })(t, R);
                    var I = t.prototype;
                    return (
                      (I.registerListeners = function e() {
                        var R = this.hls;
                        R.on(O.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.on(O.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                          R.on(O.Events.LEVEL_LOADING, this.onLevelLoading, this),
                          R.on(O.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                          R.on(O.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                          R.on(O.Events.ERROR, this.onError, this);
                      }),
                      (I.unregisterListeners = function e() {
                        var R = this.hls;
                        R.off(O.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.off(O.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                          R.off(O.Events.LEVEL_LOADING, this.onLevelLoading, this),
                          R.off(O.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                          R.off(O.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                          R.off(O.Events.ERROR, this.onError, this);
                      }),
                      (I.destroy = function t() {
                        this.unregisterListeners(),
                          (this.tracks.length = 0),
                          (this.tracksInGroup.length = 0),
                          R.prototype.destroy.call(this);
                      }),
                      (I.onManifestLoading = function e() {
                        (this.tracks = []),
                          (this.groupId = null),
                          (this.tracksInGroup = []),
                          (this.trackId = -1),
                          (this.trackName = ''),
                          (this.selectDefaultTrack = !0);
                      }),
                      (I.onManifestParsed = function e(R, I) {
                        this.tracks = I.audioTracks || [];
                      }),
                      (I.onAudioTrackLoaded = function e(R, I) {
                        var C = I.id,
                          O = I.details,
                          w = this.tracksInGroup[C];
                        if (w) {
                          var _ = w.details;
                          (w.details = I.details),
                            this.log('audioTrack ' + C + ' loaded [' + O.startSN + '-' + O.endSN + ']'),
                            C === this.trackId && ((this.retryCount = 0), this.playlistLoaded(C, I, _));
                        } else this.warn('Invalid audio track id ' + C);
                      }),
                      (I.onLevelLoading = function e(R, I) {
                        this.switchLevel(I.level);
                      }),
                      (I.onLevelSwitching = function e(R, I) {
                        this.switchLevel(I.level);
                      }),
                      (I.switchLevel = function e(R) {
                        var I = this.hls.levels[R];
                        if (null != I && I.audioGroupIds) {
                          var C = I.audioGroupIds[I.urlId];
                          if (this.groupId !== C) {
                            this.groupId = C;
                            var w = this.tracks.filter(function (R) {
                              return !C || R.groupId === C;
                            });
                            this.selectDefaultTrack &&
                              !w.some(function (R) {
                                return R.default;
                              }) &&
                              (this.selectDefaultTrack = !1),
                              (this.tracksInGroup = w);
                            var _ = { audioTracks: w };
                            this.log('Updating audio tracks, ' + w.length + ' track(s) found in "' + C + '" group-id'),
                              this.hls.trigger(O.Events.AUDIO_TRACKS_UPDATED, _),
                              this.selectInitialTrack();
                          }
                        }
                      }),
                      (I.onError = function t(I, C) {
                        R.prototype.onError.call(this, I, C),
                          !C.fatal &&
                            C.context &&
                            C.context.type === x.PlaylistContextType.AUDIO_TRACK &&
                            C.context.id === this.trackId &&
                            C.context.groupId === this.groupId &&
                            this.retryLoadingOrFail(C);
                      }),
                      (I.setAudioTrack = function e(R) {
                        var I = this.tracksInGroup;
                        if (R < 0 || R >= I.length) this.warn('Invalid id passed to audio-track controller');
                        else {
                          this.clearTimer();
                          var C = I[this.trackId];
                          this.log('Now switching to audio-track index ' + R);
                          var w = I[R],
                            _ = w.id,
                            x = w.groupId,
                            P = void 0 === x ? '' : x,
                            F = w.name,
                            M = w.type,
                            N = w.url;
                          if (
                            ((this.trackId = R),
                            (this.trackName = F),
                            (this.selectDefaultTrack = !1),
                            this.hls.trigger(O.Events.AUDIO_TRACK_SWITCHING, {
                              id: _,
                              groupId: P,
                              name: F,
                              type: M,
                              url: N,
                            }),
                            !w.details || w.details.live)
                          ) {
                            var B = this.switchParams(w.url, null == C ? void 0 : C.details);
                            this.loadPlaylist(B);
                          }
                        }
                      }),
                      (I.selectInitialTrack = function e() {
                        var R = this.tracksInGroup;
                        console.assert(R.length, 'Initial audio track should be selected when tracks are known');
                        var I = this.trackName,
                          C = this.findTrackId(I) || this.findTrackId();
                        -1 !== C
                          ? this.setAudioTrack(C)
                          : (this.warn('No track found for running audio group-ID: ' + this.groupId),
                            this.hls.trigger(O.Events.ERROR, {
                              type: w.ErrorTypes.MEDIA_ERROR,
                              details: w.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                              fatal: !0,
                            }));
                      }),
                      (I.findTrackId = function e(R) {
                        for (var I = this.tracksInGroup, C = 0; C < I.length; C++) {
                          var O = I[C];
                          if ((!this.selectDefaultTrack || O.default) && (!R || R === O.name)) return O.id;
                        }
                        return -1;
                      }),
                      (I.loadPlaylist = function e(R) {
                        var I = this.tracksInGroup[this.trackId];
                        if (this.shouldLoadTrack(I)) {
                          var C = I.id,
                            w = I.groupId,
                            _ = I.url;
                          if (R)
                            try {
                              _ = R.addDirectives(_);
                            } catch (e) {
                              this.warn('Could not construct new URL with HLS Delivery Directives: ' + e);
                            }
                          this.log('loading audio-track playlist for id: ' + C),
                            this.clearTimer(),
                            this.hls.trigger(O.Events.AUDIO_TRACK_LOADING, {
                              url: _,
                              id: C,
                              groupId: w,
                              deliveryDirectives: R || null,
                            });
                        }
                      }),
                      (function l(R, I, C) {
                        return I && o(R.prototype, I), C && o(R, C), R;
                      })(t, [
                        {
                          key: 'audioTracks',
                          get: function e() {
                            return this.tracksInGroup;
                          },
                        },
                        {
                          key: 'audioTrack',
                          get: function e() {
                            return this.trackId;
                          },
                          set: function e(R) {
                            (this.selectDefaultTrack = !1), this.setAudioTrack(R);
                          },
                        },
                      ]),
                      t
                    );
                  })(_.default);
                  I.default = P;
                },
                './src/controller/base-playlist-controller.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return F;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/types/level.ts'),
                    _ = C('./src/controller/level-helper.ts'),
                    x = C('./src/utils/logger.ts'),
                    P = C('./src/errors.ts'),
                    F = (function () {
                      function e(R, I) {
                        (this.hls = void 0),
                          (this.timer = -1),
                          (this.canLoad = !1),
                          (this.retryCount = 0),
                          (this.log = void 0),
                          (this.warn = void 0),
                          (this.log = x.logger.log.bind(x.logger, I + ':')),
                          (this.warn = x.logger.warn.bind(x.logger, I + ':')),
                          (this.hls = R);
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {
                          this.clearTimer(), (this.hls = this.log = this.warn = null);
                        }),
                        (R.onError = function e(R, I) {
                          I.fatal && I.type === P.ErrorTypes.NETWORK_ERROR && this.clearTimer();
                        }),
                        (R.clearTimer = function e() {
                          clearTimeout(this.timer), (this.timer = -1);
                        }),
                        (R.startLoad = function e() {
                          (this.canLoad = !0), (this.retryCount = 0), this.loadPlaylist();
                        }),
                        (R.stopLoad = function e() {
                          (this.canLoad = !1), this.clearTimer();
                        }),
                        (R.switchParams = function e(R, I) {
                          var C = null == I ? void 0 : I.renditionReports;
                          if (C)
                            for (var _ = 0; _ < C.length; _++) {
                              var x = C[_],
                                P = '' + x.URI;
                              if (P === R.substr(-P.length)) {
                                var F = parseInt(x['LAST-MSN']),
                                  M = parseInt(x['LAST-PART']);
                                if (I && this.hls.config.lowLatencyMode) {
                                  var N = Math.min(I.age - I.partTarget, I.targetduration);
                                  void 0 !== M && N > I.partTarget && (M += 1);
                                }
                                if (Object(O.isFiniteNumber)(F))
                                  return new w.HlsUrlParameters(
                                    F,
                                    Object(O.isFiniteNumber)(M) ? M : void 0,
                                    w.HlsSkip.No
                                  );
                              }
                            }
                        }),
                        (R.loadPlaylist = function e(R) {}),
                        (R.shouldLoadTrack = function e(R) {
                          return this.canLoad && R && !!R.url && (!R.details || R.details.live);
                        }),
                        (R.playlistLoaded = function e(R, I, C) {
                          var O = this,
                            w = I.details,
                            x = I.stats,
                            P = x.loading.end ? Math.max(0, self.performance.now() - x.loading.end) : 0;
                          if (((w.advancedDateTime = Date.now() - P), w.live || (null != C && C.live))) {
                            if (
                              (w.reloaded(C),
                              C &&
                                this.log(
                                  'live playlist ' +
                                    R +
                                    ' ' +
                                    (w.advanced ? 'REFRESHED ' + w.lastPartSn + '-' + w.lastPartIndex : 'MISSED')
                                ),
                              C && w.fragments.length > 0 && Object(_.mergeDetails)(C, w),
                              !this.canLoad || !w.live)
                            )
                              return;
                            var F,
                              M = void 0,
                              N = void 0;
                            if (w.canBlockReload && w.endSN && w.advanced) {
                              var B = this.hls.config.lowLatencyMode,
                                U = w.lastPartSn,
                                G = w.endSN,
                                j = w.lastPartIndex,
                                K = U === G;
                              -1 !== j ? ((M = K ? G + 1 : U), (N = K ? (B ? 0 : j) : j + 1)) : (M = G + 1);
                              var H = w.age,
                                V = H + w.ageHeader,
                                W = Math.min(V - w.partTarget, 1.5 * w.targetduration);
                              if (W > 0) {
                                if (C && W > C.tuneInGoal)
                                  this.warn(
                                    'CDN Tune-in goal increased from: ' +
                                      C.tuneInGoal +
                                      ' to: ' +
                                      W +
                                      ' with playlist age: ' +
                                      w.age
                                  ),
                                    (W = 0);
                                else {
                                  var Y = Math.floor(W / w.targetduration);
                                  if (((M += Y), void 0 !== N)) N += Math.round((W % w.targetduration) / w.partTarget);
                                  this.log(
                                    'CDN Tune-in age: ' +
                                      w.ageHeader +
                                      's last advanced ' +
                                      H.toFixed(2) +
                                      's goal: ' +
                                      W +
                                      ' skip sn ' +
                                      Y +
                                      ' to part ' +
                                      N
                                  );
                                }
                                w.tuneInGoal = W;
                              }
                              if (((F = this.getDeliveryDirectives(w, I.deliveryDirectives, M, N)), B || !K))
                                return void this.loadPlaylist(F);
                            } else F = this.getDeliveryDirectives(w, I.deliveryDirectives, M, N);
                            var z = Object(_.computeReloadInterval)(w, x);
                            void 0 !== M && w.canBlockReload && (z -= w.partTarget || 1),
                              this.log('reload live playlist ' + R + ' in ' + Math.round(z) + ' ms'),
                              (this.timer = self.setTimeout(function () {
                                return O.loadPlaylist(F);
                              }, z));
                          } else this.clearTimer();
                        }),
                        (R.getDeliveryDirectives = function e(R, I, C, O) {
                          var _ = Object(w.getSkipValue)(R, C);
                          return (
                            null != I &&
                              I.skip &&
                              R.deltaUpdateFailed &&
                              ((C = I.msn), (O = I.part), (_ = w.HlsSkip.No)),
                            new w.HlsUrlParameters(C, O, _)
                          );
                        }),
                        (R.retryLoadingOrFail = function e(R) {
                          var I,
                            C = this,
                            O = this.hls.config,
                            w = this.retryCount < O.levelLoadingMaxRetry;
                          if (w)
                            if (
                              (this.retryCount++,
                              R.details.indexOf('LoadTimeOut') > -1 &&
                                null !== (I = R.context) &&
                                void 0 !== I &&
                                I.deliveryDirectives)
                            )
                              this.warn('retry playlist loading #' + this.retryCount + ' after "' + R.details + '"'),
                                this.loadPlaylist();
                            else {
                              var _ = Math.min(
                                Math.pow(2, this.retryCount) * O.levelLoadingRetryDelay,
                                O.levelLoadingMaxRetryTimeout
                              );
                              (this.timer = self.setTimeout(function () {
                                return C.loadPlaylist();
                              }, _)),
                                this.warn(
                                  'retry playlist loading #' +
                                    this.retryCount +
                                    ' in ' +
                                    _ +
                                    ' ms after "' +
                                    R.details +
                                    '"'
                                );
                            }
                          else
                            this.warn('cannot recover from error "' + R.details + '"'),
                              this.clearTimer(),
                              (R.fatal = !0);
                          return w;
                        }),
                        e
                      );
                    })();
                },
                './src/controller/base-stream-controller.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'State', function () {
                      return Y;
                    }),
                    C.d(I, 'default', function () {
                      return z;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/task-loop.ts'),
                    _ = C('./src/controller/fragment-tracker.ts'),
                    x = C('./src/utils/buffer-helper.ts'),
                    P = C('./src/utils/logger.ts'),
                    F = C('./src/events.ts'),
                    M = C('./src/errors.ts'),
                    N = C('./src/types/transmuxer.ts'),
                    B = C('./src/utils/mp4-tools.ts'),
                    U = C('./src/utils/discontinuities.ts'),
                    G = C('./src/controller/fragment-finders.ts'),
                    j = C('./src/controller/level-helper.ts'),
                    K = C('./src/loader/fragment-loader.ts'),
                    H = C('./src/crypt/decrypter.ts'),
                    V = C('./src/utils/time-ranges.ts'),
                    W = C('./src/types/loader.ts');
                  function E(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  function A(R, I) {
                    return (A =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  var Y = {
                      STOPPED: 'STOPPED',
                      IDLE: 'IDLE',
                      KEY_LOADING: 'KEY_LOADING',
                      FRAG_LOADING: 'FRAG_LOADING',
                      FRAG_LOADING_WAITING_RETRY: 'FRAG_LOADING_WAITING_RETRY',
                      WAITING_TRACK: 'WAITING_TRACK',
                      PARSING: 'PARSING',
                      PARSED: 'PARSED',
                      BACKTRACKING: 'BACKTRACKING',
                      ENDED: 'ENDED',
                      ERROR: 'ERROR',
                      WAITING_INIT_PTS: 'WAITING_INIT_PTS',
                      WAITING_LEVEL: 'WAITING_LEVEL',
                    },
                    z = (function (R) {
                      function t(I, C, O) {
                        var w;
                        return (
                          ((w = R.call(this) || this).hls = void 0),
                          (w.fragPrevious = null),
                          (w.fragCurrent = null),
                          (w.fragmentTracker = void 0),
                          (w.transmuxer = null),
                          (w._state = Y.STOPPED),
                          (w.media = void 0),
                          (w.mediaBuffer = void 0),
                          (w.config = void 0),
                          (w.bitrateTest = !1),
                          (w.lastCurrentTime = 0),
                          (w.nextLoadPosition = 0),
                          (w.startPosition = 0),
                          (w.loadedmetadata = !1),
                          (w.fragLoadError = 0),
                          (w.retryDate = 0),
                          (w.levels = null),
                          (w.fragmentLoader = void 0),
                          (w.levelLastLoaded = null),
                          (w.startFragRequested = !1),
                          (w.decrypter = void 0),
                          (w.initPTS = []),
                          (w.onvseeking = null),
                          (w.onvended = null),
                          (w.logPrefix = ''),
                          (w.log = void 0),
                          (w.warn = void 0),
                          (w.logPrefix = O),
                          (w.log = P.logger.log.bind(P.logger, O + ':')),
                          (w.warn = P.logger.warn.bind(P.logger, O + ':')),
                          (w.hls = I),
                          (w.fragmentLoader = new K.default(I.config)),
                          (w.fragmentTracker = C),
                          (w.config = I.config),
                          (w.decrypter = new H.default(I, I.config)),
                          I.on(
                            F.Events.KEY_LOADED,
                            w.onKeyLoaded,
                            (function b(R) {
                              if (void 0 === R)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                              return R;
                            })(w)
                          ),
                          w
                        );
                      }
                      !(function S(R, I) {
                        (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), A(R, I);
                      })(t, R);
                      var I = t.prototype;
                      return (
                        (I.doTick = function e() {
                          this.onTickEnd();
                        }),
                        (I.onTickEnd = function e() {}),
                        (I.startLoad = function e(R) {}),
                        (I.stopLoad = function e() {
                          this.fragmentLoader.abort();
                          var R = this.fragCurrent;
                          R && this.fragmentTracker.removeFragment(R),
                            this.resetTransmuxer(),
                            (this.fragCurrent = null),
                            (this.fragPrevious = null),
                            this.clearInterval(),
                            this.clearNextTick(),
                            (this.state = Y.STOPPED);
                        }),
                        (I._streamEnded = function e(R, I) {
                          var C = this.fragCurrent,
                            O = this.fragmentTracker;
                          if (!I.live && C && C.sn >= I.endSN && !R.nextStart) {
                            var w = I.partList;
                            if (null != w && w.length) {
                              var P = w[w.length - 1];
                              return x.BufferHelper.isBuffered(this.media, P.start + P.duration / 2);
                            }
                            var F = O.getState(C);
                            return F === _.FragmentState.PARTIAL || F === _.FragmentState.OK;
                          }
                          return !1;
                        }),
                        (I.onMediaAttached = function e(R, I) {
                          var C = (this.media = this.mediaBuffer = I.media);
                          (this.onvseeking = this.onMediaSeeking.bind(this)),
                            (this.onvended = this.onMediaEnded.bind(this)),
                            C.addEventListener('seeking', this.onvseeking),
                            C.addEventListener('ended', this.onvended);
                          var O = this.config;
                          this.levels && O.autoStartLoad && this.state === Y.STOPPED && this.startLoad(O.startPosition);
                        }),
                        (I.onMediaDetaching = function e() {
                          var R = this.media;
                          null != R &&
                            R.ended &&
                            (this.log('MSE detaching and video ended, reset startPosition'),
                            (this.startPosition = this.lastCurrentTime = 0)),
                            R &&
                              (R.removeEventListener('seeking', this.onvseeking),
                              R.removeEventListener('ended', this.onvended),
                              (this.onvseeking = this.onvended = null)),
                            (this.media = this.mediaBuffer = null),
                            (this.loadedmetadata = !1),
                            this.fragmentTracker.removeAllFragments(),
                            this.stopLoad();
                        }),
                        (I.onMediaSeeking = function e() {
                          var R = this.config,
                            I = this.fragCurrent,
                            C = this.media,
                            w = this.mediaBuffer,
                            _ = this.state,
                            P = C ? C.currentTime : 0,
                            F = x.BufferHelper.bufferInfo(w || C, P, R.maxBufferHole);
                          if (
                            (this.log(
                              'media seeking to ' + (Object(O.isFiniteNumber)(P) ? P.toFixed(3) : P) + ', state: ' + _
                            ),
                            _ === Y.ENDED)
                          )
                            this.resetLoadingState();
                          else if (I && !F.len) {
                            var M = R.maxFragLookUpTolerance,
                              N = I.start - M,
                              B = P > I.start + I.duration + M;
                            (P < N || B) &&
                              (B &&
                                I.loader &&
                                (this.log(
                                  'seeking outside of buffer while fragment load in progress, cancel fragment load'
                                ),
                                I.loader.abort()),
                              this.resetLoadingState());
                          }
                          C && (this.lastCurrentTime = P),
                            this.loadedmetadata || F.len || (this.nextLoadPosition = this.startPosition = P),
                            this.tickImmediate();
                        }),
                        (I.onMediaEnded = function e() {
                          this.startPosition = this.lastCurrentTime = 0;
                        }),
                        (I.onKeyLoaded = function e(R, I) {
                          if (this.state === Y.KEY_LOADING && I.frag === this.fragCurrent && this.levels) {
                            this.state = Y.IDLE;
                            var C = this.levels[I.frag.level].details;
                            C && this.loadFragment(I.frag, C, I.frag.start);
                          }
                        }),
                        (I.onHandlerDestroying = function t() {
                          this.stopLoad(), R.prototype.onHandlerDestroying.call(this);
                        }),
                        (I.onHandlerDestroyed = function t() {
                          (this.state = Y.STOPPED),
                            this.hls.off(F.Events.KEY_LOADED, this.onKeyLoaded, this),
                            this.fragmentLoader && this.fragmentLoader.destroy(),
                            this.decrypter && this.decrypter.destroy(),
                            (this.hls =
                              this.log =
                              this.warn =
                              this.decrypter =
                              this.fragmentLoader =
                              this.fragmentTracker =
                                null),
                            R.prototype.onHandlerDestroyed.call(this);
                        }),
                        (I.loadKey = function e(R, I) {
                          this.log(
                            'Loading key for ' +
                              R.sn +
                              ' of [' +
                              I.startSN +
                              '-' +
                              I.endSN +
                              '], ' +
                              ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                              ' ' +
                              R.level
                          ),
                            (this.state = Y.KEY_LOADING),
                            (this.fragCurrent = R),
                            this.hls.trigger(F.Events.KEY_LOADING, { frag: R });
                        }),
                        (I.loadFragment = function e(R, I, C) {
                          this._loadFragForPlayback(R, I, C);
                        }),
                        (I._loadFragForPlayback = function e(R, I, C) {
                          var O = this;
                          this._doFragLoad(R, I, C, function e(I) {
                            if (O.fragContextChanged(R))
                              return (
                                O.warn(
                                  'Fragment ' +
                                    R.sn +
                                    (I.part ? ' p: ' + I.part.index : '') +
                                    ' of level ' +
                                    R.level +
                                    ' was dropped during download.'
                                ),
                                void O.fragmentTracker.removeFragment(R)
                              );
                            R.stats.chunkCount++, O._handleFragmentLoadProgress(I);
                          })
                            .then(function (I) {
                              if (I) {
                                O.fragLoadError = 0;
                                var C = O.state;
                                if (!O.fragContextChanged(R))
                                  return 'payload' in I &&
                                    (O.log('Loaded fragment ' + R.sn + ' of level ' + R.level),
                                    O.hls.trigger(F.Events.FRAG_LOADED, I),
                                    O.state === Y.BACKTRACKING)
                                    ? (O.fragmentTracker.backtrack(R, I), void O.resetFragmentLoading(R))
                                    : void O._handleFragmentLoadComplete(I);
                                (C === Y.FRAG_LOADING || C === Y.BACKTRACKING || (!O.fragCurrent && C === Y.PARSING)) &&
                                  (O.fragmentTracker.removeFragment(R), (O.state = Y.IDLE));
                              }
                            })
                            .catch(function (I) {
                              O.warn(I), O.resetFragmentLoading(R);
                            });
                        }),
                        (I.flushMainBuffer = function e(R, I, C) {
                          if ((void 0 === C && (C = null), R - I)) {
                            var O = { startOffset: R, endOffset: I, type: C };
                            (this.fragLoadError = 0), this.hls.trigger(F.Events.BUFFER_FLUSHING, O);
                          }
                        }),
                        (I._loadInitSegment = function e(R) {
                          var I = this;
                          this._doFragLoad(R)
                            .then(function (C) {
                              if (!C || I.fragContextChanged(R) || !I.levels) throw new Error('init load aborted');
                              return C;
                            })
                            .then(function (C) {
                              var O = I.hls,
                                w = C.payload,
                                _ = R.decryptdata;
                              if (w && w.byteLength > 0 && _ && _.key && _.iv && 'AES-128' === _.method) {
                                var x = self.performance.now();
                                return I.decrypter
                                  .webCryptoDecrypt(new Uint8Array(w), _.key.buffer, _.iv.buffer)
                                  .then(function (I) {
                                    var w = self.performance.now();
                                    return (
                                      O.trigger(F.Events.FRAG_DECRYPTED, {
                                        frag: R,
                                        payload: I,
                                        stats: { tstart: x, tdecrypt: w },
                                      }),
                                      (C.payload = I),
                                      C
                                    );
                                  });
                              }
                              return C;
                            })
                            .then(function (C) {
                              var O = I.fragCurrent,
                                w = I.hls,
                                _ = I.levels;
                              if (!_) throw new Error('init load aborted, missing levels');
                              var x = _[R.level].details;
                              console.assert(x, 'Level details are defined when init segment is loaded');
                              var P = R.stats;
                              (I.state = Y.IDLE),
                                (I.fragLoadError = 0),
                                (R.data = new Uint8Array(C.payload)),
                                (P.parsing.start = P.buffering.start = self.performance.now()),
                                (P.parsing.end = P.buffering.end = self.performance.now()),
                                C.frag === O &&
                                  w.trigger(F.Events.FRAG_BUFFERED, { stats: P, frag: O, part: null, id: R.type }),
                                I.tick();
                            })
                            .catch(function (C) {
                              I.warn(C), I.resetFragmentLoading(R);
                            });
                        }),
                        (I.fragContextChanged = function e(R) {
                          var I = this.fragCurrent;
                          return !R || !I || R.level !== I.level || R.sn !== I.sn || R.urlId !== I.urlId;
                        }),
                        (I.fragBufferedComplete = function e(R, I) {
                          var C = this.mediaBuffer ? this.mediaBuffer : this.media;
                          this.log(
                            'Buffered ' +
                              R.type +
                              ' sn: ' +
                              R.sn +
                              (I ? ' part: ' + I.index : '') +
                              ' of ' +
                              ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                              ' ' +
                              R.level +
                              ' ' +
                              V.default.toString(x.BufferHelper.getBuffered(C))
                          ),
                            (this.state = Y.IDLE),
                            this.tick();
                        }),
                        (I._handleFragmentLoadComplete = function e(R) {
                          var I = this.transmuxer;
                          if (I) {
                            var C = R.frag,
                              O = R.part,
                              w = R.partsLoaded,
                              _ =
                                !w ||
                                0 === w.length ||
                                w.some(function (R) {
                                  return !R;
                                }),
                              x = new N.ChunkMetadata(C.level, C.sn, C.stats.chunkCount + 1, 0, O ? O.index : -1, !_);
                            I.flush(x);
                          }
                        }),
                        (I._handleFragmentLoadProgress = function e(R) {}),
                        (I._doFragLoad = function e(R, I, C, w) {
                          var _ = this;
                          if ((void 0 === C && (C = null), !this.levels))
                            throw new Error('frag load aborted, missing levels');
                          if (((C = Math.max(R.start, C || 0)), this.config.lowLatencyMode && I)) {
                            var x = I.partList;
                            if (x && w) {
                              C > R.end && I.fragmentHint && (R = I.fragmentHint);
                              var P = this.getNextPart(x, R, C);
                              if (P > -1) {
                                var M = x[P];
                                return (
                                  this.log(
                                    'Loading part sn: ' +
                                      R.sn +
                                      ' p: ' +
                                      M.index +
                                      ' cc: ' +
                                      R.cc +
                                      ' of playlist [' +
                                      I.startSN +
                                      '-' +
                                      I.endSN +
                                      '] parts [0-' +
                                      P +
                                      '-' +
                                      (x.length - 1) +
                                      '] ' +
                                      ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                                      ': ' +
                                      R.level +
                                      ', target: ' +
                                      parseFloat(C.toFixed(3))
                                  ),
                                  (this.nextLoadPosition = M.start + M.duration),
                                  (this.state = Y.FRAG_LOADING),
                                  this.hls.trigger(F.Events.FRAG_LOADING, { frag: R, part: x[P], targetBufferTime: C }),
                                  this.doFragPartsLoad(R, x, P, w).catch(function (R) {
                                    return _.handleFragLoadError(R);
                                  })
                                );
                              }
                              if (!R.url || this.loadedEndOfParts(x, C)) return Promise.resolve(null);
                            }
                          }
                          return (
                            this.log(
                              'Loading fragment ' +
                                R.sn +
                                ' cc: ' +
                                R.cc +
                                ' ' +
                                (I ? 'of [' + I.startSN + '-' + I.endSN + '] ' : '') +
                                ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                                ': ' +
                                R.level +
                                ', target: ' +
                                parseFloat(C.toFixed(3))
                            ),
                            Object(O.isFiniteNumber)(R.sn) &&
                              !this.bitrateTest &&
                              (this.nextLoadPosition = R.start + R.duration),
                            (this.state = Y.FRAG_LOADING),
                            this.hls.trigger(F.Events.FRAG_LOADING, { frag: R, targetBufferTime: C }),
                            this.fragmentLoader.load(R, w).catch(function (R) {
                              return _.handleFragLoadError(R);
                            })
                          );
                        }),
                        (I.doFragPartsLoad = function e(R, I, C, O) {
                          var w = this;
                          return new Promise(function (_, x) {
                            var P = [];
                            !(function i(C) {
                              var M = I[C];
                              w.fragmentLoader
                                .loadPart(R, M, O)
                                .then(function (O) {
                                  P[M.index] = O;
                                  var x = O.part;
                                  w.hls.trigger(F.Events.FRAG_LOADED, O);
                                  var N = I[C + 1];
                                  if (!N || N.fragment !== R) return _({ frag: R, part: x, partsLoaded: P });
                                  i(C + 1);
                                })
                                .catch(x);
                            })(C);
                          });
                        }),
                        (I.handleFragLoadError = function e(R) {
                          var I = R.data;
                          return (
                            I && I.details === M.ErrorDetails.INTERNAL_ABORTED
                              ? this.handleFragLoadAborted(I.frag, I.part)
                              : this.hls.trigger(F.Events.ERROR, I),
                            null
                          );
                        }),
                        (I._handleTransmuxerFlush = function e(R) {
                          var I = this.getCurrentContext(R);
                          if (I && this.state === Y.PARSING) {
                            var C = I.frag,
                              O = I.part,
                              w = I.level,
                              _ = self.performance.now();
                            (C.stats.parsing.end = _),
                              O && (O.stats.parsing.end = _),
                              this.updateLevelTiming(C, O, w, R.partial);
                          } else this.fragCurrent || (this.state = Y.IDLE);
                        }),
                        (I.getCurrentContext = function e(R) {
                          var I = this.levels,
                            C = R.level,
                            O = R.sn,
                            w = R.part;
                          if (!I || !I[C])
                            return (
                              this.warn(
                                'Levels object was unset while buffering fragment ' +
                                  O +
                                  ' of level ' +
                                  C +
                                  '. The current chunk will not be buffered.'
                              ),
                              null
                            );
                          var _ = I[C],
                            x = w > -1 ? Object(j.getPartWith)(_, O, w) : null,
                            P = x ? x.fragment : Object(j.getFragmentWithSN)(_, O, this.fragCurrent);
                          return P ? { frag: P, part: x, level: _ } : null;
                        }),
                        (I.bufferFragmentData = function e(R, I, C, O) {
                          if (R && this.state === Y.PARSING) {
                            var w = R.data1,
                              _ = R.data2,
                              x = w;
                            if ((w && _ && (x = Object(B.appendUint8Array)(w, _)), x && x.length)) {
                              var P = { type: R.type, frag: I, part: C, chunkMeta: O, parent: I.type, data: x };
                              this.hls.trigger(F.Events.BUFFER_APPENDING, P),
                                R.dropped && R.independent && !C && this.flushBufferGap(I);
                            }
                          }
                        }),
                        (I.flushBufferGap = function e(R) {
                          var I = this.media;
                          if (I)
                            if (x.BufferHelper.isBuffered(I, I.currentTime)) {
                              var C = I.currentTime,
                                O = x.BufferHelper.bufferInfo(I, C, 0),
                                w = R.duration,
                                _ = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * w),
                                P = Math.max(Math.min(R.start - _, O.end - _), C + _);
                              R.start - P > _ && this.flushMainBuffer(P, R.start);
                            } else this.flushMainBuffer(0, R.start);
                        }),
                        (I.getFwdBufferInfo = function e(R, I) {
                          var C = this.config,
                            w = this.getLoadPosition();
                          if (!Object(O.isFiniteNumber)(w)) return null;
                          var _ = x.BufferHelper.bufferInfo(R, w, C.maxBufferHole);
                          if (0 === _.len && void 0 !== _.nextStart) {
                            var P = this.fragmentTracker.getBufferedFrag(w, I);
                            if (P && _.nextStart < P.end)
                              return x.BufferHelper.bufferInfo(R, w, Math.max(_.nextStart, C.maxBufferHole));
                          }
                          return _;
                        }),
                        (I.getMaxBufferLength = function e(R) {
                          var I,
                            C = this.config;
                          return (
                            (I = R ? Math.max((8 * C.maxBufferSize) / R, C.maxBufferLength) : C.maxBufferLength),
                            Math.min(I, C.maxMaxBufferLength)
                          );
                        }),
                        (I.reduceMaxBufferLength = function e(R) {
                          var I = this.config,
                            C = R || I.maxBufferLength;
                          return (
                            I.maxMaxBufferLength >= C &&
                            ((I.maxMaxBufferLength /= 2),
                            this.warn('Reduce max buffer length to ' + I.maxMaxBufferLength + 's'),
                            !0)
                          );
                        }),
                        (I.getNextFragment = function e(R, I) {
                          var C,
                            O,
                            w = I.fragments,
                            _ = w.length;
                          if (!_) return null;
                          var x,
                            P = this.config,
                            F = w[0].start;
                          if (I.live) {
                            var M = P.initialLiveManifestSize;
                            if (_ < M)
                              return (
                                this.warn('Not enough fragments to start playback (have: ' + _ + ', need: ' + M + ')'),
                                null
                              );
                            I.PTSKnown ||
                              this.startFragRequested ||
                              -1 !== this.startPosition ||
                              ((x = this.getInitialLiveFragment(I, w)),
                              (this.startPosition = x ? this.hls.liveSyncPosition || x.start : R));
                          } else R <= F && (x = w[0]);
                          if (!x) {
                            var N = P.lowLatencyMode ? I.partEnd : I.fragmentEnd;
                            x = this.getFragmentAtPosition(R, N, I);
                          }
                          return (
                            null === (C = x) ||
                              void 0 === C ||
                              !C.initSegment ||
                              (null !== (O = x) && void 0 !== O && O.initSegment.data) ||
                              this.bitrateTest ||
                              (x = x.initSegment),
                            x
                          );
                        }),
                        (I.getNextPart = function e(R, I, C) {
                          for (var O = -1, w = !1, _ = !0, x = 0, P = R.length; x < P; x++) {
                            var F = R[x];
                            if (((_ = _ && !F.independent), O > -1 && C < F.start)) break;
                            var M = F.loaded;
                            !M && (w || F.independent || _) && F.fragment === I && (O = x), (w = M);
                          }
                          return O;
                        }),
                        (I.loadedEndOfParts = function e(R, I) {
                          var C = R[R.length - 1];
                          return C && I > C.start && C.loaded;
                        }),
                        (I.getInitialLiveFragment = function e(R, I) {
                          var C = this.fragPrevious,
                            O = null;
                          if (C) {
                            if (
                              (R.hasProgramDateTime &&
                                (this.log(
                                  'Live playlist, switching playlist, load frag with same PDT: ' + C.programDateTime
                                ),
                                (O = Object(G.findFragmentByPDT)(
                                  I,
                                  C.endProgramDateTime,
                                  this.config.maxFragLookUpTolerance
                                ))),
                              !O)
                            ) {
                              var w = C.sn + 1;
                              if (w >= R.startSN && w <= R.endSN) {
                                var _ = I[w - R.startSN];
                                C.cc === _.cc &&
                                  ((O = _),
                                  this.log('Live playlist, switching playlist, load frag with next SN: ' + O.sn));
                              }
                              O ||
                                ((O = Object(G.findFragWithCC)(I, C.cc)) &&
                                  this.log('Live playlist, switching playlist, load frag with same CC: ' + O.sn));
                            }
                          } else {
                            var x = this.hls.liveSyncPosition;
                            null !== x &&
                              (O = this.getFragmentAtPosition(x, this.bitrateTest ? R.fragmentEnd : R.edge, R));
                          }
                          return O;
                        }),
                        (I.getFragmentAtPosition = function e(R, I, C) {
                          var O,
                            w = this.config,
                            x = this.fragPrevious,
                            P = C.fragments,
                            F = C.endSN,
                            M = C.fragmentHint,
                            N = w.maxFragLookUpTolerance,
                            B = !!(w.lowLatencyMode && C.partList && M);
                          if ((B && M && !this.bitrateTest && ((P = P.concat(M)), (F = M.sn)), R < I)) {
                            var U = R > I - N ? 0 : N;
                            O = Object(G.findFragmentByPTS)(x, P, R, U);
                          } else O = P[P.length - 1];
                          if (O) {
                            var j = O.sn - C.startSN,
                              K = x && O.level === x.level,
                              H = P[j + 1];
                            if (this.fragmentTracker.getState(O) === _.FragmentState.BACKTRACKED) {
                              O = null;
                              for (
                                var V = j;
                                P[V] && this.fragmentTracker.getState(P[V]) === _.FragmentState.BACKTRACKED;

                              )
                                O = x ? P[V--] : P[--V];
                              O || (O = H);
                            } else
                              x &&
                                O.sn === x.sn &&
                                !B &&
                                K &&
                                (O.sn < F && this.fragmentTracker.getState(H) !== _.FragmentState.OK
                                  ? (this.log('SN ' + O.sn + ' just loaded, load next one: ' + H.sn), (O = H))
                                  : (O = null));
                          }
                          return O;
                        }),
                        (I.synchronizeToLiveEdge = function e(R) {
                          var I = this.config,
                            C = this.media;
                          if (C) {
                            var O = this.hls.liveSyncPosition,
                              w = C.currentTime,
                              _ = R.fragments[0].start,
                              x = R.edge,
                              P = w >= _ - I.maxFragLookUpTolerance && w <= x;
                            if (null !== O && C.duration > O && (w < O || !P)) {
                              var F =
                                void 0 !== I.liveMaxLatencyDuration
                                  ? I.liveMaxLatencyDuration
                                  : I.liveMaxLatencyDurationCount * R.targetduration;
                              ((!P && C.readyState < 4) || w < x - F) &&
                                (this.loadedmetadata || (this.nextLoadPosition = O),
                                C.readyState &&
                                  (this.warn(
                                    'Playback: ' +
                                      w.toFixed(3) +
                                      ' is located too far from the end of live sliding playlist: ' +
                                      x +
                                      ', reset currentTime to : ' +
                                      O.toFixed(3)
                                  ),
                                  (C.currentTime = O)));
                            }
                          }
                        }),
                        (I.alignPlaylists = function e(R, I) {
                          var C = this.levels,
                            w = this.levelLastLoaded,
                            _ = this.fragPrevious,
                            x = null !== w ? C[w] : null,
                            P = R.fragments.length;
                          if (!P) return this.warn('No fragments in live playlist'), 0;
                          var F = R.fragments[0].start,
                            M = !I,
                            N = R.alignedSliding && Object(O.isFiniteNumber)(F);
                          if (M || (!N && !F)) {
                            Object(U.alignStream)(_, x, R);
                            var B = R.fragments[0].start;
                            return (
                              this.log(
                                'Live playlist sliding: ' +
                                  B.toFixed(2) +
                                  ' start-sn: ' +
                                  (I ? I.startSN : 'na') +
                                  '->' +
                                  R.startSN +
                                  ' prev-sn: ' +
                                  (_ ? _.sn : 'na') +
                                  ' fragments: ' +
                                  P
                              ),
                              B
                            );
                          }
                          return F;
                        }),
                        (I.waitForCdnTuneIn = function e(R) {
                          return (
                            R.live && R.canBlockReload && R.tuneInGoal > Math.max(R.partHoldBack, 3 * R.partTarget)
                          );
                        }),
                        (I.setStartPosition = function e(R, I) {
                          var C = this.startPosition;
                          if ((C < I && (C = -1), -1 === C || -1 === this.lastCurrentTime)) {
                            var w = R.startTimeOffset;
                            Object(O.isFiniteNumber)(w)
                              ? ((C = I + w),
                                w < 0 && (C += R.totalduration),
                                (C = Math.min(Math.max(I, C), I + R.totalduration)),
                                this.log('Start time offset ' + w + ' found in playlist, adjust startPosition to ' + C),
                                (this.startPosition = C))
                              : R.live
                              ? (C = this.hls.liveSyncPosition || I)
                              : (this.startPosition = C = 0),
                              (this.lastCurrentTime = C);
                          }
                          this.nextLoadPosition = C;
                        }),
                        (I.getLoadPosition = function e() {
                          var R = this.media,
                            I = 0;
                          return (
                            this.loadedmetadata && R
                              ? (I = R.currentTime)
                              : this.nextLoadPosition && (I = this.nextLoadPosition),
                            I
                          );
                        }),
                        (I.handleFragLoadAborted = function e(R, I) {
                          this.transmuxer &&
                            'initSegment' !== R.sn &&
                            R.stats.aborted &&
                            (this.warn(
                              'Fragment ' +
                                R.sn +
                                (I ? ' part' + I.index : '') +
                                ' of level ' +
                                R.level +
                                ' was aborted'
                            ),
                            this.resetFragmentLoading(R));
                        }),
                        (I.resetFragmentLoading = function e(R) {
                          (this.fragCurrent && this.fragContextChanged(R)) || (this.state = Y.IDLE);
                        }),
                        (I.onFragmentOrKeyLoadError = function e(R, I) {
                          if (!I.fatal) {
                            var C = I.frag;
                            if (C && C.type === R) {
                              var O = this.fragCurrent;
                              console.assert(
                                O && C.sn === O.sn && C.level === O.level && C.urlId === O.urlId,
                                'Frag load error must match current frag to retry'
                              );
                              var w = this.config;
                              if (this.fragLoadError + 1 <= w.fragLoadingMaxRetry) {
                                if (this.resetLiveStartWhenNotLoaded(C.level)) return;
                                var _ = Math.min(
                                  Math.pow(2, this.fragLoadError) * w.fragLoadingRetryDelay,
                                  w.fragLoadingMaxRetryTimeout
                                );
                                this.warn(
                                  'Fragment ' +
                                    C.sn +
                                    ' of ' +
                                    R +
                                    ' ' +
                                    C.level +
                                    ' failed to load, retrying in ' +
                                    _ +
                                    'ms'
                                ),
                                  (this.retryDate = self.performance.now() + _),
                                  this.fragLoadError++,
                                  (this.state = Y.FRAG_LOADING_WAITING_RETRY);
                              } else
                                I.levelRetry
                                  ? (R === W.PlaylistLevelType.AUDIO && (this.fragCurrent = null),
                                    (this.fragLoadError = 0),
                                    (this.state = Y.IDLE))
                                  : (P.logger.error(I.details + ' reaches max retry, redispatch as fatal ...'),
                                    (I.fatal = !0),
                                    this.hls.stopLoad(),
                                    (this.state = Y.ERROR));
                            }
                          }
                        }),
                        (I.afterBufferFlushed = function e(R, I, C) {
                          if (R) {
                            var O = x.BufferHelper.getBuffered(R);
                            this.fragmentTracker.detectEvictedFragments(I, O, C),
                              this.state === Y.ENDED && this.resetLoadingState();
                          }
                        }),
                        (I.resetLoadingState = function e() {
                          (this.fragCurrent = null), (this.fragPrevious = null), (this.state = Y.IDLE);
                        }),
                        (I.resetLiveStartWhenNotLoaded = function e(R) {
                          if (!this.loadedmetadata) {
                            this.startFragRequested = !1;
                            var I = this.levels ? this.levels[R].details : null;
                            if (null != I && I.live)
                              return (
                                (this.startPosition = -1), this.setStartPosition(I, 0), this.resetLoadingState(), !0
                              );
                            this.nextLoadPosition = this.startPosition;
                          }
                          return !1;
                        }),
                        (I.updateLevelTiming = function e(R, I, C, O) {
                          var w = this,
                            _ = C.details;
                          console.assert(!!_, 'level.details must be defined'),
                            Object.keys(R.elementaryStreams).reduce(function (I, x) {
                              var P = R.elementaryStreams[x];
                              if (P) {
                                var M = P.endPTS - P.startPTS;
                                if (M <= 0)
                                  return (
                                    w.warn(
                                      'Could not parse fragment ' +
                                        R.sn +
                                        ' ' +
                                        x +
                                        ' duration reliably (' +
                                        M +
                                        ') resetting transmuxer to fallback to playlist timing'
                                    ),
                                    w.resetTransmuxer(),
                                    I || !1
                                  );
                                var N = O
                                  ? 0
                                  : Object(j.updateFragPTSDTS)(_, R, P.startPTS, P.endPTS, P.startDTS, P.endDTS);
                                return (
                                  w.hls.trigger(F.Events.LEVEL_PTS_UPDATED, {
                                    details: _,
                                    level: C,
                                    drift: N,
                                    type: x,
                                    frag: R,
                                    start: P.startPTS,
                                    end: P.endPTS,
                                  }),
                                  !0
                                );
                              }
                              return I;
                            }, !1)
                              ? ((this.state = Y.PARSED), this.hls.trigger(F.Events.FRAG_PARSED, { frag: R, part: I }))
                              : this.resetLoadingState();
                        }),
                        (I.resetTransmuxer = function e() {
                          this.transmuxer && (this.transmuxer.destroy(), (this.transmuxer = null));
                        }),
                        (function T(R, I, C) {
                          return I && E(R.prototype, I), C && E(R, C), R;
                        })(t, [
                          {
                            key: 'state',
                            get: function e() {
                              return this._state;
                            },
                            set: function e(R) {
                              var I = this._state;
                              I !== R && ((this._state = R), this.log(I + '->' + R));
                            },
                          },
                        ]),
                        t
                      );
                    })(w.default);
                },
                './src/controller/buffer-controller.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return G;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/events.ts'),
                    _ = C('./src/utils/logger.ts'),
                    x = C('./src/errors.ts'),
                    P = C('./src/utils/buffer-helper.ts'),
                    F = C('./src/utils/mediasource-helper.ts'),
                    M = C('./src/loader/fragment.ts'),
                    N = C('./src/controller/buffer-operation-queue.ts'),
                    B = Object(F.getMediaSource)(),
                    U = /([ha]vc.)(?:\.[^.,]+)+/,
                    G = (function () {
                      function e(R) {
                        var I = this;
                        (this.details = null),
                          (this._objectUrl = null),
                          (this.operationQueue = void 0),
                          (this.listeners = void 0),
                          (this.hls = void 0),
                          (this.bufferCodecEventsExpected = 0),
                          (this._bufferCodecEventsTotal = 0),
                          (this.media = null),
                          (this.mediaSource = null),
                          (this.appendError = 0),
                          (this.tracks = {}),
                          (this.pendingTracks = {}),
                          (this.sourceBuffer = void 0),
                          (this._onMediaSourceOpen = function () {
                            var R = I.hls,
                              C = I.media,
                              O = I.mediaSource;
                            _.logger.log('[buffer-controller]: Media source opened'),
                              C && (I.updateMediaElementDuration(), R.trigger(w.Events.MEDIA_ATTACHED, { media: C })),
                              O && O.removeEventListener('sourceopen', I._onMediaSourceOpen),
                              I.checkPendingTracks();
                          }),
                          (this._onMediaSourceClose = function () {
                            _.logger.log('[buffer-controller]: Media source closed');
                          }),
                          (this._onMediaSourceEnded = function () {
                            _.logger.log('[buffer-controller]: Media source ended');
                          }),
                          (this.hls = R),
                          this._initSourceBuffer(),
                          this.registerListeners();
                      }
                      var R = e.prototype;
                      return (
                        (R.hasSourceTypes = function e() {
                          return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
                        }),
                        (R.destroy = function e() {
                          this.unregisterListeners(), (this.details = null);
                        }),
                        (R.registerListeners = function e() {
                          var R = this.hls;
                          R.on(w.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                            R.on(w.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                            R.on(w.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                            R.on(w.Events.BUFFER_RESET, this.onBufferReset, this),
                            R.on(w.Events.BUFFER_APPENDING, this.onBufferAppending, this),
                            R.on(w.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                            R.on(w.Events.BUFFER_EOS, this.onBufferEos, this),
                            R.on(w.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                            R.on(w.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                            R.on(w.Events.FRAG_PARSED, this.onFragParsed, this),
                            R.on(w.Events.FRAG_CHANGED, this.onFragChanged, this);
                        }),
                        (R.unregisterListeners = function e() {
                          var R = this.hls;
                          R.off(w.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                            R.off(w.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                            R.off(w.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                            R.off(w.Events.BUFFER_RESET, this.onBufferReset, this),
                            R.off(w.Events.BUFFER_APPENDING, this.onBufferAppending, this),
                            R.off(w.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                            R.off(w.Events.BUFFER_EOS, this.onBufferEos, this),
                            R.off(w.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                            R.off(w.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                            R.off(w.Events.FRAG_PARSED, this.onFragParsed, this),
                            R.off(w.Events.FRAG_CHANGED, this.onFragChanged, this);
                        }),
                        (R._initSourceBuffer = function e() {
                          (this.sourceBuffer = {}),
                            (this.operationQueue = new N.default(this.sourceBuffer)),
                            (this.listeners = { audio: [], video: [], audiovideo: [] });
                        }),
                        (R.onManifestParsed = function e(R, I) {
                          var C = 2;
                          ((I.audio && !I.video) || !I.altAudio) && (C = 1),
                            (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = C),
                            (this.details = null),
                            _.logger.log(this.bufferCodecEventsExpected + ' bufferCodec event(s) expected');
                        }),
                        (R.onMediaAttaching = function e(R, I) {
                          var C = (this.media = I.media);
                          if (C && B) {
                            var O = (this.mediaSource = new B());
                            O.addEventListener('sourceopen', this._onMediaSourceOpen),
                              O.addEventListener('sourceended', this._onMediaSourceEnded),
                              O.addEventListener('sourceclose', this._onMediaSourceClose),
                              (C.src = self.URL.createObjectURL(O)),
                              (this._objectUrl = C.src);
                          }
                        }),
                        (R.onMediaDetaching = function e() {
                          var R = this.media,
                            I = this.mediaSource,
                            C = this._objectUrl;
                          if (I) {
                            if ((_.logger.log('[buffer-controller]: media source detaching'), 'open' === I.readyState))
                              try {
                                I.endOfStream();
                              } catch (e) {
                                _.logger.warn(
                                  '[buffer-controller]: onMediaDetaching: ' + e.message + ' while calling endOfStream'
                                );
                              }
                            this.onBufferReset(),
                              I.removeEventListener('sourceopen', this._onMediaSourceOpen),
                              I.removeEventListener('sourceended', this._onMediaSourceEnded),
                              I.removeEventListener('sourceclose', this._onMediaSourceClose),
                              R &&
                                (C && self.URL.revokeObjectURL(C),
                                R.src === C
                                  ? (R.removeAttribute('src'), R.load())
                                  : _.logger.warn(
                                      '[buffer-controller]: media.src was changed by a third party - skip cleanup'
                                    )),
                              (this.mediaSource = null),
                              (this.media = null),
                              (this._objectUrl = null),
                              (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal),
                              (this.pendingTracks = {}),
                              (this.tracks = {});
                          }
                          this.hls.trigger(w.Events.MEDIA_DETACHED, void 0);
                        }),
                        (R.onBufferReset = function e() {
                          var R = this;
                          this.getSourceBufferTypes().forEach(function (I) {
                            var C = R.sourceBuffer[I];
                            try {
                              C &&
                                (R.removeBufferListeners(I),
                                R.mediaSource && R.mediaSource.removeSourceBuffer(C),
                                (R.sourceBuffer[I] = void 0));
                            } catch (R) {
                              _.logger.warn('[buffer-controller]: Failed to reset the ' + I + ' buffer', R);
                            }
                          }),
                            this._initSourceBuffer();
                        }),
                        (R.onBufferCodecs = function e(R, I) {
                          var C = this,
                            O = this.getSourceBufferTypes().length;
                          Object.keys(I).forEach(function (R) {
                            if (O) {
                              var w = C.tracks[R];
                              if (w && 'function' == typeof w.buffer.changeType) {
                                var _ = I[R],
                                  x = _.codec,
                                  P = _.levelCodec,
                                  F = _.container;
                                if ((w.levelCodec || w.codec).replace(U, '$1') !== (P || x).replace(U, '$1')) {
                                  var M = F + ';codecs=' + (P || x);
                                  C.appendChangeType(R, M);
                                }
                              }
                            } else C.pendingTracks[R] = I[R];
                          }),
                            O ||
                              ((this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0)),
                              this.mediaSource && 'open' === this.mediaSource.readyState && this.checkPendingTracks());
                        }),
                        (R.appendChangeType = function e(R, I) {
                          var C = this,
                            O = this.operationQueue,
                            w = {
                              execute: function e() {
                                var w = C.sourceBuffer[R];
                                w &&
                                  (_.logger.log('[buffer-controller]: changing ' + R + ' sourceBuffer type to ' + I),
                                  w.changeType(I)),
                                  O.shiftAndExecuteNext(R);
                              },
                              onStart: function e() {},
                              onComplete: function e() {},
                              onError: function e(I) {
                                _.logger.warn('[buffer-controller]: Failed to change ' + R + ' SourceBuffer type', I);
                              },
                            };
                          O.append(w, R);
                        }),
                        (R.onBufferAppending = function e(R, I) {
                          var C = this,
                            O = this.hls,
                            F = this.operationQueue,
                            M = this.tracks,
                            N = I.data,
                            B = I.type,
                            U = I.frag,
                            G = I.part,
                            j = I.chunkMeta,
                            K = j.buffering[B],
                            H = self.performance.now();
                          K.start = H;
                          var V = U.stats.buffering,
                            W = G ? G.stats.buffering : null;
                          0 === V.start && (V.start = H), W && 0 === W.start && (W.start = H);
                          var Y = M.audio,
                            z = 'audio' === B && 1 === j.id && 'audio/mpeg' === (null == Y ? void 0 : Y.container),
                            X = {
                              execute: function e() {
                                if (((K.executeStart = self.performance.now()), z)) {
                                  var R = C.sourceBuffer[B];
                                  if (R) {
                                    var I = U.start - R.timestampOffset;
                                    Math.abs(I) >= 0.1 &&
                                      (_.logger.log(
                                        '[buffer-controller]: Updating audio SourceBuffer timestampOffset to ' +
                                          U.start +
                                          ' (delta: ' +
                                          I +
                                          ') sn: ' +
                                          U.sn +
                                          ')'
                                      ),
                                      (R.timestampOffset = U.start));
                                  }
                                }
                                C.appendExecutor(N, B);
                              },
                              onStart: function e() {},
                              onComplete: function e() {
                                var R = self.performance.now();
                                (K.executeEnd = K.end = R),
                                  0 === V.first && (V.first = R),
                                  W && 0 === W.first && (W.first = R);
                                var I = C.sourceBuffer,
                                  O = {};
                                for (var _ in I) O[_] = P.BufferHelper.getBuffered(I[_]);
                                (C.appendError = 0),
                                  C.hls.trigger(w.Events.BUFFER_APPENDED, {
                                    type: B,
                                    frag: U,
                                    part: G,
                                    chunkMeta: j,
                                    parent: U.type,
                                    timeRanges: O,
                                  });
                              },
                              onError: function e(R) {
                                _.logger.error(
                                  '[buffer-controller]: Error encountered while trying to append to the ' +
                                    B +
                                    ' SourceBuffer',
                                  R
                                );
                                var I = {
                                  type: x.ErrorTypes.MEDIA_ERROR,
                                  parent: U.type,
                                  details: x.ErrorDetails.BUFFER_APPEND_ERROR,
                                  err: R,
                                  fatal: !1,
                                };
                                R.code === DOMException.QUOTA_EXCEEDED_ERR
                                  ? (I.details = x.ErrorDetails.BUFFER_FULL_ERROR)
                                  : (C.appendError++,
                                    (I.details = x.ErrorDetails.BUFFER_APPEND_ERROR),
                                    C.appendError > O.config.appendErrorMaxRetry &&
                                      (_.logger.error(
                                        '[buffer-controller]: Failed ' +
                                          O.config.appendErrorMaxRetry +
                                          ' times to append segment in sourceBuffer'
                                      ),
                                      (I.fatal = !0))),
                                  O.trigger(w.Events.ERROR, I);
                              },
                            };
                          F.append(X, B);
                        }),
                        (R.onBufferFlushing = function e(R, I) {
                          var C = this,
                            O = this.operationQueue,
                            x = function e(R) {
                              return {
                                execute: C.removeExecutor.bind(C, R, I.startOffset, I.endOffset),
                                onStart: function e() {},
                                onComplete: function e() {
                                  C.hls.trigger(w.Events.BUFFER_FLUSHED, { type: R });
                                },
                                onError: function e(I) {
                                  _.logger.warn('[buffer-controller]: Failed to remove from ' + R + ' SourceBuffer', I);
                                },
                              };
                            };
                          I.type
                            ? O.append(x(I.type), I.type)
                            : this.getSourceBufferTypes().forEach(function (R) {
                                O.append(x(R), R);
                              });
                        }),
                        (R.onFragParsed = function e(R, I) {
                          var C = this,
                            O = I.frag,
                            x = I.part,
                            P = [],
                            F = x ? x.elementaryStreams : O.elementaryStreams;
                          F[M.ElementaryStreamTypes.AUDIOVIDEO]
                            ? P.push('audiovideo')
                            : (F[M.ElementaryStreamTypes.AUDIO] && P.push('audio'),
                              F[M.ElementaryStreamTypes.VIDEO] && P.push('video'));
                          0 === P.length &&
                            _.logger.warn(
                              'Fragments must have at least one ElementaryStreamType set. type: ' +
                                O.type +
                                ' level: ' +
                                O.level +
                                ' sn: ' +
                                O.sn
                            ),
                            this.blockBuffers(function e() {
                              var R = self.performance.now();
                              (O.stats.buffering.end = R), x && (x.stats.buffering.end = R);
                              var I = x ? x.stats : O.stats;
                              C.hls.trigger(w.Events.FRAG_BUFFERED, { frag: O, part: x, stats: I, id: O.type });
                            }, P);
                        }),
                        (R.onFragChanged = function e(R, I) {
                          this.flushBackBuffer();
                        }),
                        (R.onBufferEos = function e(R, I) {
                          var C = this;
                          this.getSourceBufferTypes().reduce(function (R, O) {
                            var w = C.sourceBuffer[O];
                            return (
                              (I.type && I.type !== O) ||
                                (w &&
                                  !w.ended &&
                                  ((w.ended = !0),
                                  _.logger.log('[buffer-controller]: ' + O + ' sourceBuffer now EOS'))),
                              R && !(w && !w.ended)
                            );
                          }, !0) &&
                            this.blockBuffers(function () {
                              var R = C.mediaSource;
                              R && 'open' === R.readyState && R.endOfStream();
                            });
                        }),
                        (R.onLevelUpdated = function e(R, I) {
                          var C = I.details;
                          C.fragments.length &&
                            ((this.details = C),
                            this.getSourceBufferTypes().length
                              ? this.blockBuffers(this.updateMediaElementDuration.bind(this))
                              : this.updateMediaElementDuration());
                        }),
                        (R.flushBackBuffer = function e() {
                          var R = this.hls,
                            I = this.details,
                            C = this.media,
                            _ = this.sourceBuffer;
                          if (C && null !== I) {
                            var x = this.getSourceBufferTypes();
                            if (x.length) {
                              var F =
                                I.live && null !== R.config.liveBackBufferLength
                                  ? R.config.liveBackBufferLength
                                  : R.config.backBufferLength;
                              if (Object(O.isFiniteNumber)(F) && !(F < 0)) {
                                var M = C.currentTime,
                                  N = I.levelTargetDuration,
                                  B = Math.max(F, N),
                                  U = Math.floor(M / N) * N - B;
                                x.forEach(function (C) {
                                  var O = _[C];
                                  if (O) {
                                    var x = P.BufferHelper.getBuffered(O);
                                    x.length > 0 &&
                                      U > x.start(0) &&
                                      (R.trigger(w.Events.BACK_BUFFER_REACHED, { bufferEnd: U }),
                                      I.live && R.trigger(w.Events.LIVE_BACK_BUFFER_REACHED, { bufferEnd: U }),
                                      R.trigger(w.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: U, type: C }));
                                  }
                                });
                              }
                            }
                          }
                        }),
                        (R.updateMediaElementDuration = function e() {
                          if (
                            this.details &&
                            this.media &&
                            this.mediaSource &&
                            'open' === this.mediaSource.readyState
                          ) {
                            var R = this.details,
                              I = this.hls,
                              C = this.media,
                              w = this.mediaSource,
                              x = R.fragments[0].start + R.totalduration,
                              P = C.duration,
                              F = Object(O.isFiniteNumber)(w.duration) ? w.duration : 0;
                            R.live && I.config.liveDurationInfinity
                              ? (_.logger.log('[buffer-controller]: Media Source duration is set to Infinity'),
                                (w.duration = 1 / 0),
                                this.updateSeekableRange(R))
                              : ((x > F && x > P) || !Object(O.isFiniteNumber)(P)) &&
                                (_.logger.log('[buffer-controller]: Updating Media Source duration to ' + x.toFixed(3)),
                                (w.duration = x));
                          }
                        }),
                        (R.updateSeekableRange = function e(R) {
                          var I = this.mediaSource,
                            C = R.fragments;
                          if (C.length && R.live && null != I && I.setLiveSeekableRange) {
                            var O = Math.max(0, C[0].start),
                              w = Math.max(O, O + R.totalduration);
                            I.setLiveSeekableRange(O, w);
                          }
                        }),
                        (R.checkPendingTracks = function e() {
                          var R = this.bufferCodecEventsExpected,
                            I = this.operationQueue,
                            C = this.pendingTracks,
                            O = Object.keys(C).length;
                          if ((O && !R) || 2 === O) {
                            this.createSourceBuffers(C), (this.pendingTracks = {});
                            var _ = this.getSourceBufferTypes();
                            if (0 === _.length)
                              return void this.hls.trigger(w.Events.ERROR, {
                                type: x.ErrorTypes.MEDIA_ERROR,
                                details: x.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                                fatal: !0,
                                reason: 'could not create source buffer for media codec(s)',
                              });
                            _.forEach(function (R) {
                              I.executeNext(R);
                            });
                          }
                        }),
                        (R.createSourceBuffers = function e(R) {
                          var I = this.sourceBuffer,
                            C = this.mediaSource;
                          if (!C) throw Error('createSourceBuffers called when mediaSource was null');
                          var O = 0;
                          for (var P in R)
                            if (!I[P]) {
                              var F = R[P];
                              if (!F) throw Error('source buffer exists for track ' + P + ', however track does not');
                              var M = F.levelCodec || F.codec,
                                N = F.container + ';codecs=' + M;
                              _.logger.log('[buffer-controller]: creating sourceBuffer(' + N + ')');
                              try {
                                var B = (I[P] = C.addSourceBuffer(N)),
                                  U = P;
                                this.addBufferListener(U, 'updatestart', this._onSBUpdateStart),
                                  this.addBufferListener(U, 'updateend', this._onSBUpdateEnd),
                                  this.addBufferListener(U, 'error', this._onSBUpdateError),
                                  (this.tracks[P] = {
                                    buffer: B,
                                    codec: M,
                                    container: F.container,
                                    levelCodec: F.levelCodec,
                                    id: F.id,
                                  }),
                                  O++;
                              } catch (e) {
                                _.logger.error(
                                  '[buffer-controller]: error while trying to add sourceBuffer: ' + e.message
                                ),
                                  this.hls.trigger(w.Events.ERROR, {
                                    type: x.ErrorTypes.MEDIA_ERROR,
                                    details: x.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                    fatal: !1,
                                    error: e,
                                    mimeType: N,
                                  });
                              }
                            }
                          O && this.hls.trigger(w.Events.BUFFER_CREATED, { tracks: this.tracks });
                        }),
                        (R._onSBUpdateStart = function e(R) {
                          this.operationQueue.current(R).onStart();
                        }),
                        (R._onSBUpdateEnd = function e(R) {
                          var I = this.operationQueue;
                          I.current(R).onComplete(), I.shiftAndExecuteNext(R);
                        }),
                        (R._onSBUpdateError = function e(R, I) {
                          _.logger.error('[buffer-controller]: ' + R + ' SourceBuffer error', I),
                            this.hls.trigger(w.Events.ERROR, {
                              type: x.ErrorTypes.MEDIA_ERROR,
                              details: x.ErrorDetails.BUFFER_APPENDING_ERROR,
                              fatal: !1,
                            });
                          var C = this.operationQueue.current(R);
                          C && C.onError(I);
                        }),
                        (R.removeExecutor = function e(R, I, C) {
                          var w = this.media,
                            x = this.mediaSource,
                            P = this.operationQueue,
                            F = this.sourceBuffer[R];
                          if (!w || !x || !F)
                            return (
                              _.logger.warn(
                                '[buffer-controller]: Attempting to remove from the ' +
                                  R +
                                  ' SourceBuffer, but it does not exist'
                              ),
                              void P.shiftAndExecuteNext(R)
                            );
                          var M = Object(O.isFiniteNumber)(w.duration) ? w.duration : 1 / 0,
                            N = Object(O.isFiniteNumber)(x.duration) ? x.duration : 1 / 0,
                            B = Math.max(0, I),
                            U = Math.min(C, M, N);
                          U > B
                            ? (_.logger.log(
                                '[buffer-controller]: Removing [' + B + ',' + U + '] from the ' + R + ' SourceBuffer'
                              ),
                              console.assert(!F.updating, R + ' sourceBuffer must not be updating'),
                              F.remove(B, U))
                            : P.shiftAndExecuteNext(R);
                        }),
                        (R.appendExecutor = function e(R, I) {
                          var C = this.operationQueue,
                            O = this.sourceBuffer[I];
                          if (!O)
                            return (
                              _.logger.warn(
                                '[buffer-controller]: Attempting to append to the ' +
                                  I +
                                  ' SourceBuffer, but it does not exist'
                              ),
                              void C.shiftAndExecuteNext(I)
                            );
                          (O.ended = !1),
                            console.assert(!O.updating, I + ' sourceBuffer must not be updating'),
                            O.appendBuffer(R);
                        }),
                        (R.blockBuffers = function e(R, I) {
                          var C = this;
                          if ((void 0 === I && (I = this.getSourceBufferTypes()), I.length)) {
                            var O = this.operationQueue,
                              w = I.map(function (R) {
                                return O.appendBlocker(R);
                              });
                            Promise.all(w).then(function () {
                              R(),
                                I.forEach(function (R) {
                                  var I = C.sourceBuffer[R];
                                  (I && I.updating) || O.shiftAndExecuteNext(R);
                                });
                            });
                          } else
                            _.logger.log(
                              '[buffer-controller]: Blocking operation requested, but no SourceBuffers exist'
                            );
                        }),
                        (R.getSourceBufferTypes = function e() {
                          return Object.keys(this.sourceBuffer);
                        }),
                        (R.addBufferListener = function e(R, I, C) {
                          var O = this.sourceBuffer[R];
                          if (O) {
                            var w = C.bind(this, R);
                            this.listeners[R].push({ event: I, listener: w }), O.addEventListener(I, w);
                          }
                        }),
                        (R.removeBufferListeners = function e(R) {
                          var I = this.sourceBuffer[R];
                          I &&
                            this.listeners[R].forEach(function (R) {
                              I.removeEventListener(R.event, R.listener);
                            });
                        }),
                        e
                      );
                    })();
                },
                './src/controller/buffer-operation-queue.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return w;
                    });
                  var O = C('./src/utils/logger.ts'),
                    w = (function () {
                      function e(R) {
                        (this.buffers = void 0),
                          (this.queues = { video: [], audio: [], audiovideo: [] }),
                          (this.buffers = R);
                      }
                      var R = e.prototype;
                      return (
                        (R.append = function e(R, I) {
                          var C = this.queues[I];
                          C.push(R), 1 === C.length && this.buffers[I] && this.executeNext(I);
                        }),
                        (R.insertAbort = function e(R, I) {
                          this.queues[I].unshift(R), this.executeNext(I);
                        }),
                        (R.appendBlocker = function e(R) {
                          var I,
                            C = new Promise(function (R) {
                              I = R;
                            }),
                            O = {
                              execute: I,
                              onStart: function e() {},
                              onComplete: function e() {},
                              onError: function e() {},
                            };
                          return this.append(O, R), C;
                        }),
                        (R.executeNext = function e(R) {
                          var I = this.buffers,
                            C = this.queues,
                            w = I[R],
                            _ = C[R];
                          if (_.length) {
                            var x = _[0];
                            try {
                              x.execute();
                            } catch (e) {
                              O.logger.warn(
                                '[buffer-operation-queue]: Unhandled exception executing the current operation'
                              ),
                                x.onError(e),
                                (w && w.updating) || (_.shift(), this.executeNext(R));
                            }
                          }
                        }),
                        (R.shiftAndExecuteNext = function e(R) {
                          this.queues[R].shift(), this.executeNext(R);
                        }),
                        (R.current = function e(R) {
                          return this.queues[R][0];
                        }),
                        e
                      );
                    })();
                },
                './src/controller/cap-level-controller.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/events.ts');
                  function a(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  var w = (function () {
                    function e(R) {
                      (this.autoLevelCapping = void 0),
                        (this.firstLevel = void 0),
                        (this.media = void 0),
                        (this.restrictedLevels = void 0),
                        (this.timer = void 0),
                        (this.hls = void 0),
                        (this.streamController = void 0),
                        (this.clientRect = void 0),
                        (this.hls = R),
                        (this.autoLevelCapping = Number.POSITIVE_INFINITY),
                        (this.firstLevel = -1),
                        (this.media = null),
                        (this.restrictedLevels = []),
                        (this.timer = void 0),
                        (this.clientRect = null),
                        this.registerListeners();
                    }
                    var R = e.prototype;
                    return (
                      (R.setStreamController = function e(R) {
                        this.streamController = R;
                      }),
                      (R.destroy = function e() {
                        this.unregisterListener(),
                          this.hls.config.capLevelToPlayerSize && this.stopCapping(),
                          (this.media = null),
                          (this.clientRect = null),
                          (this.hls = this.streamController = null);
                      }),
                      (R.registerListeners = function e() {
                        var R = this.hls;
                        R.on(O.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
                          R.on(O.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                          R.on(O.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                          R.on(O.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                          R.on(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
                      }),
                      (R.unregisterListener = function e() {
                        var R = this.hls;
                        R.off(O.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
                          R.off(O.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                          R.off(O.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                          R.off(O.Events.BUFFER_CODECS, this.onBufferCodecs, this),
                          R.off(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
                      }),
                      (R.onFpsDropLevelCapping = function t(R, I) {
                        e.isLevelAllowed(I.droppedLevel, this.restrictedLevels) &&
                          this.restrictedLevels.push(I.droppedLevel);
                      }),
                      (R.onMediaAttaching = function e(R, I) {
                        this.media = I.media instanceof HTMLVideoElement ? I.media : null;
                      }),
                      (R.onManifestParsed = function e(R, I) {
                        var C = this.hls;
                        (this.restrictedLevels = []),
                          (this.firstLevel = I.firstLevel),
                          C.config.capLevelToPlayerSize && I.video && this.startCapping();
                      }),
                      (R.onBufferCodecs = function e(R, I) {
                        this.hls.config.capLevelToPlayerSize && I.video && this.startCapping();
                      }),
                      (R.onMediaDetaching = function e() {
                        this.stopCapping();
                      }),
                      (R.detectPlayerSize = function e() {
                        if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                          var R = this.hls.levels;
                          if (R.length) {
                            var I = this.hls;
                            (I.autoLevelCapping = this.getMaxLevel(R.length - 1)),
                              I.autoLevelCapping > this.autoLevelCapping &&
                                this.streamController &&
                                this.streamController.nextLevelSwitch(),
                              (this.autoLevelCapping = I.autoLevelCapping);
                          }
                        }
                      }),
                      (R.getMaxLevel = function t(R) {
                        var I = this,
                          C = this.hls.levels;
                        if (!C.length) return -1;
                        var O = C.filter(function (C, O) {
                          return e.isLevelAllowed(O, I.restrictedLevels) && O <= R;
                        });
                        return (this.clientRect = null), e.getMaxLevelByMediaSize(O, this.mediaWidth, this.mediaHeight);
                      }),
                      (R.startCapping = function e() {
                        this.timer ||
                          ((this.autoLevelCapping = Number.POSITIVE_INFINITY),
                          (this.hls.firstLevel = this.getMaxLevel(this.firstLevel)),
                          self.clearInterval(this.timer),
                          (this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3)),
                          this.detectPlayerSize());
                      }),
                      (R.stopCapping = function e() {
                        (this.restrictedLevels = []),
                          (this.firstLevel = -1),
                          (this.autoLevelCapping = Number.POSITIVE_INFINITY),
                          this.timer && (self.clearInterval(this.timer), (this.timer = void 0));
                      }),
                      (R.getDimensions = function e() {
                        if (this.clientRect) return this.clientRect;
                        var R = this.media,
                          I = { width: 0, height: 0 };
                        if (R) {
                          var C = R.getBoundingClientRect();
                          (I.width = C.width),
                            (I.height = C.height),
                            I.width ||
                              I.height ||
                              ((I.width = C.right - C.left || R.width || 0),
                              (I.height = C.bottom - C.top || R.height || 0));
                        }
                        return (this.clientRect = I), I;
                      }),
                      (e.isLevelAllowed = function e(R, I) {
                        return void 0 === I && (I = []), -1 === I.indexOf(R);
                      }),
                      (e.getMaxLevelByMediaSize = function e(R, I, C) {
                        if (!R || !R.length) return -1;
                        for (
                          var O = function e(R, I) {
                              return !I || R.width !== I.width || R.height !== I.height;
                            },
                            w = R.length - 1,
                            _ = 0;
                          _ < R.length;
                          _ += 1
                        ) {
                          var x = R[_];
                          if ((x.width >= I || x.height >= C) && O(x, R[_ + 1])) {
                            w = _;
                            break;
                          }
                        }
                        return w;
                      }),
                      (function n(R, I, C) {
                        return I && a(R.prototype, I), C && a(R, C), R;
                      })(
                        e,
                        [
                          {
                            key: 'mediaWidth',
                            get: function t() {
                              return this.getDimensions().width * e.contentScaleFactor;
                            },
                          },
                          {
                            key: 'mediaHeight',
                            get: function t() {
                              return this.getDimensions().height * e.contentScaleFactor;
                            },
                          },
                        ],
                        [
                          {
                            key: 'contentScaleFactor',
                            get: function e() {
                              var R = 1;
                              try {
                                R = self.devicePixelRatio;
                              } catch (e) {}
                              return R;
                            },
                          },
                        ]
                      ),
                      e
                    );
                  })();
                  I.default = w;
                },
                './src/controller/cmcd-controller.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return P;
                    });
                  var O = C('./src/events.ts'),
                    w = C('./src/types/cmcd.ts'),
                    _ = C('./src/utils/buffer-helper.ts'),
                    x = C('./src/utils/logger.ts');
                  function o(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  function l(R, I, C) {
                    return I && o(R.prototype, I), C && o(R, C), R;
                  }
                  function u(R, I) {
                    var C = ('undefined' != typeof Symbol && R[Symbol.iterator]) || R['@@iterator'];
                    if (C) return (C = C.call(R)).next.bind(C);
                    if (
                      Array.isArray(R) ||
                      (C = (function f(R, I) {
                        if (!R) return;
                        if ('string' == typeof R) return c(R, I);
                        var C = Object.prototype.toString.call(R).slice(8, -1);
                        'Object' === C && R.constructor && (C = R.constructor.name);
                        if ('Map' === C || 'Set' === C) return Array.from(R);
                        if ('Arguments' === C || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)) return c(R, I);
                      })(R)) ||
                      (I && R && 'number' == typeof R.length)
                    ) {
                      C && (R = C);
                      var O = 0;
                      return function () {
                        return O >= R.length ? { done: !0 } : { done: !1, value: R[O++] };
                      };
                    }
                    throw new TypeError(
                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                  }
                  function c(R, I) {
                    (null == I || I > R.length) && (I = R.length);
                    for (var C = 0, O = new Array(I); C < I; C++) O[C] = R[C];
                    return O;
                  }
                  function d() {
                    return (d =
                      Object.assign ||
                      function (R) {
                        for (var I = 1; I < arguments.length; I++) {
                          var C = arguments[I];
                          for (var O in C) Object.prototype.hasOwnProperty.call(C, O) && (R[O] = C[O]);
                        }
                        return R;
                      }).apply(this, arguments);
                  }
                  var P = (function () {
                    function e(R) {
                      var I = this;
                      (this.hls = void 0),
                        (this.config = void 0),
                        (this.media = void 0),
                        (this.sid = void 0),
                        (this.cid = void 0),
                        (this.useHeaders = !1),
                        (this.initialized = !1),
                        (this.starved = !1),
                        (this.buffering = !0),
                        (this.audioBuffer = void 0),
                        (this.videoBuffer = void 0),
                        (this.onWaiting = function () {
                          I.initialized && (I.starved = !0), (I.buffering = !0);
                        }),
                        (this.onPlaying = function () {
                          I.initialized || (I.initialized = !0), (I.buffering = !1);
                        }),
                        (this.applyPlaylistData = function (R) {
                          try {
                            I.apply(R, { ot: w.CMCDObjectType.MANIFEST, su: !I.initialized });
                          } catch (R) {
                            x.logger.warn('Could not generate manifest CMCD data.', R);
                          }
                        }),
                        (this.applyFragmentData = function (R) {
                          try {
                            var C = R.frag,
                              O = I.hls.levels[C.level],
                              _ = I.getObjectType(C),
                              P = { d: 1e3 * C.duration, ot: _ };
                            (_ !== w.CMCDObjectType.VIDEO &&
                              _ !== w.CMCDObjectType.AUDIO &&
                              _ != w.CMCDObjectType.MUXED) ||
                              ((P.br = O.bitrate / 1e3),
                              (P.tb = I.getTopBandwidth(_) / 1e3),
                              (P.bl = I.getBufferLength(_))),
                              I.apply(R, P);
                          } catch (R) {
                            x.logger.warn('Could not generate segment CMCD data.', R);
                          }
                        }),
                        (this.hls = R);
                      var C = (this.config = R.config),
                        O = C.cmcd;
                      null != O &&
                        ((C.pLoader = this.createPlaylistLoader()),
                        (C.fLoader = this.createFragmentLoader()),
                        (this.sid = O.sessionId || e.uuid()),
                        (this.cid = O.contentId),
                        (this.useHeaders = !0 === O.useHeaders),
                        this.registerListeners());
                    }
                    var R = e.prototype;
                    return (
                      (R.registerListeners = function e() {
                        var R = this.hls;
                        R.on(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          R.on(O.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                          R.on(O.Events.BUFFER_CREATED, this.onBufferCreated, this);
                      }),
                      (R.unregisterListeners = function e() {
                        var R = this.hls;
                        R.off(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          R.off(O.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                          R.off(O.Events.BUFFER_CREATED, this.onBufferCreated, this),
                          this.onMediaDetached();
                      }),
                      (R.destroy = function e() {
                        this.unregisterListeners(),
                          (this.hls = this.config = this.audioBuffer = this.videoBuffer = null);
                      }),
                      (R.onMediaAttached = function e(R, I) {
                        (this.media = I.media),
                          this.media.addEventListener('waiting', this.onWaiting),
                          this.media.addEventListener('playing', this.onPlaying);
                      }),
                      (R.onMediaDetached = function e() {
                        this.media &&
                          (this.media.removeEventListener('waiting', this.onWaiting),
                          this.media.removeEventListener('playing', this.onPlaying),
                          (this.media = null));
                      }),
                      (R.onBufferCreated = function e(R, I) {
                        var C, O;
                        (this.audioBuffer = null === (C = I.tracks.audio) || void 0 === C ? void 0 : C.buffer),
                          (this.videoBuffer = null === (O = I.tracks.video) || void 0 === O ? void 0 : O.buffer);
                      }),
                      (R.createData = function e() {
                        var R;
                        return {
                          v: w.CMCDVersion,
                          sf: w.CMCDStreamingFormat.HLS,
                          sid: this.sid,
                          cid: this.cid,
                          pr: null === (R = this.media) || void 0 === R ? void 0 : R.playbackRate,
                          mtp: this.hls.bandwidthEstimate / 1e3,
                        };
                      }),
                      (R.apply = function t(R, I) {
                        void 0 === I && (I = {}), d(I, this.createData());
                        var C =
                          I.ot === w.CMCDObjectType.INIT ||
                          I.ot === w.CMCDObjectType.VIDEO ||
                          I.ot === w.CMCDObjectType.MUXED;
                        if (
                          (this.starved && C && ((I.bs = !0), (I.su = !0), (this.starved = !1)),
                          null == I.su && (I.su = this.buffering),
                          this.useHeaders)
                        ) {
                          var O = e.toHeaders(I);
                          if (!Object.keys(O).length) return;
                          R.headers || (R.headers = {}), d(R.headers, O);
                        } else {
                          var _ = e.toQuery(I);
                          if (!_) return;
                          R.url = e.appendQueryToUri(R.url, _);
                        }
                      }),
                      (R.getObjectType = function e(R) {
                        var I = R.type;
                        return 'subtitle' === I
                          ? w.CMCDObjectType.TIMED_TEXT
                          : 'initSegment' === R.sn
                          ? w.CMCDObjectType.INIT
                          : 'audio' === I
                          ? w.CMCDObjectType.AUDIO
                          : 'main' === I
                          ? this.hls.audioTracks.length
                            ? w.CMCDObjectType.VIDEO
                            : w.CMCDObjectType.MUXED
                          : void 0;
                      }),
                      (R.getTopBandwidth = function e(R) {
                        var I,
                          C = 0,
                          O = this.hls;
                        if (R === w.CMCDObjectType.AUDIO) I = O.audioTracks;
                        else {
                          var _ = O.maxAutoLevel,
                            x = _ > -1 ? _ + 1 : O.levels.length;
                          I = O.levels.slice(0, x);
                        }
                        for (var P, F = u(I); !(P = F()).done; ) {
                          var M = P.value;
                          M.bitrate > C && (C = M.bitrate);
                        }
                        return C > 0 ? C : NaN;
                      }),
                      (R.getBufferLength = function e(R) {
                        var I = this.hls.media,
                          C = R === w.CMCDObjectType.AUDIO ? this.audioBuffer : this.videoBuffer;
                        return C && I
                          ? 1e3 * _.BufferHelper.bufferInfo(C, I.currentTime, this.config.maxBufferHole).len
                          : NaN;
                      }),
                      (R.createPlaylistLoader = function e() {
                        var R = this.config.pLoader,
                          I = this.applyPlaylistData,
                          C = R || this.config.loader;
                        return (function () {
                          function e(R) {
                            (this.loader = void 0), (this.loader = new C(R));
                          }
                          var R = e.prototype;
                          return (
                            (R.destroy = function e() {
                              this.loader.destroy();
                            }),
                            (R.abort = function e() {
                              this.loader.abort();
                            }),
                            (R.load = function e(R, C, O) {
                              I(R), this.loader.load(R, C, O);
                            }),
                            l(e, [
                              {
                                key: 'stats',
                                get: function e() {
                                  return this.loader.stats;
                                },
                              },
                              {
                                key: 'context',
                                get: function e() {
                                  return this.loader.context;
                                },
                              },
                            ]),
                            e
                          );
                        })();
                      }),
                      (R.createFragmentLoader = function e() {
                        var R = this.config.fLoader,
                          I = this.applyFragmentData,
                          C = R || this.config.loader;
                        return (function () {
                          function e(R) {
                            (this.loader = void 0), (this.loader = new C(R));
                          }
                          var R = e.prototype;
                          return (
                            (R.destroy = function e() {
                              this.loader.destroy();
                            }),
                            (R.abort = function e() {
                              this.loader.abort();
                            }),
                            (R.load = function e(R, C, O) {
                              I(R), this.loader.load(R, C, O);
                            }),
                            l(e, [
                              {
                                key: 'stats',
                                get: function e() {
                                  return this.loader.stats;
                                },
                              },
                              {
                                key: 'context',
                                get: function e() {
                                  return this.loader.context;
                                },
                              },
                            ]),
                            e
                          );
                        })();
                      }),
                      (e.uuid = function e() {
                        var R = URL.createObjectURL(new Blob()),
                          e = R.toString();
                        return URL.revokeObjectURL(R), e.substr(e.lastIndexOf('/') + 1);
                      }),
                      (e.serialize = function e(R) {
                        for (
                          var I,
                            C = [],
                            O = function e(R) {
                              return !Number.isNaN(R) && null != R && '' !== R && !1 !== R;
                            },
                            w = function e(R) {
                              return Math.round(R);
                            },
                            _ = function e(R) {
                              return 100 * w(R / 100);
                            },
                            x = {
                              br: w,
                              d: w,
                              bl: _,
                              dl: _,
                              mtp: _,
                              nor: function e(R) {
                                return encodeURIComponent(R);
                              },
                              rtp: _,
                              tb: w,
                            },
                            P = u(Object.keys(R || {}).sort());
                          !(I = P()).done;

                        ) {
                          var F = I.value,
                            M = R[F];
                          if (O(M) && !(('v' === F && 1 === M) || ('pr' == F && 1 === M))) {
                            var N = x[F];
                            N && (M = N(M));
                            var B = typeof M,
                              U = void 0;
                            (U =
                              'ot' === F || 'sf' === F || 'st' === F
                                ? F + '=' + M
                                : 'boolean' === B
                                ? F
                                : 'number' === B
                                ? F + '=' + M
                                : F + '=' + JSON.stringify(M)),
                              C.push(U);
                          }
                        }
                        return C.join(',');
                      }),
                      (e.toHeaders = function t(R) {
                        for (
                          var I = {},
                            C = ['Object', 'Request', 'Session', 'Status'],
                            O = [{}, {}, {}, {}],
                            w = {
                              br: 0,
                              d: 0,
                              ot: 0,
                              tb: 0,
                              bl: 1,
                              dl: 1,
                              mtp: 1,
                              nor: 1,
                              nrr: 1,
                              su: 1,
                              cid: 2,
                              pr: 2,
                              sf: 2,
                              sid: 2,
                              st: 2,
                              v: 2,
                              bs: 3,
                              rtp: 3,
                            },
                            _ = 0,
                            x = Object.keys(R);
                          _ < x.length;
                          _++
                        ) {
                          var P = x[_];
                          O[null != w[P] ? w[P] : 1][P] = R[P];
                        }
                        for (var F = 0; F < O.length; F++) {
                          var M = e.serialize(O[F]);
                          M && (I['CMCD-' + C[F]] = M);
                        }
                        return I;
                      }),
                      (e.toQuery = function t(R) {
                        return 'CMCD=' + encodeURIComponent(e.serialize(R));
                      }),
                      (e.appendQueryToUri = function e(R, I) {
                        if (!I) return R;
                        var C = R.includes('?') ? '&' : '?';
                        return '' + R + C + I;
                      }),
                      e
                    );
                  })();
                },
                './src/controller/eme-controller.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/events.ts'),
                    w = C('./src/errors.ts'),
                    _ = C('./src/utils/logger.ts'),
                    x = C('./src/utils/mediakeys-helper.ts');
                  function o(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  var P = function e(R, I, C, O) {
                      switch (R) {
                        case x.KeySystems.WIDEVINE:
                          return (function e(R, I, C) {
                            var O = { audioCapabilities: [], videoCapabilities: [] };
                            return (
                              R.forEach(function (R) {
                                O.audioCapabilities.push({
                                  contentType: 'audio/mp4; codecs="' + R + '"',
                                  robustness: C.audioRobustness || '',
                                });
                              }),
                              I.forEach(function (R) {
                                O.videoCapabilities.push({
                                  contentType: 'video/mp4; codecs="' + R + '"',
                                  robustness: C.videoRobustness || '',
                                });
                              }),
                              [O]
                            );
                          })(I, C, O);
                        default:
                          throw new Error('Unknown key-system: ' + R);
                      }
                    },
                    F = (function () {
                      function e(R) {
                        (this.hls = void 0),
                          (this._widevineLicenseUrl = void 0),
                          (this._licenseXhrSetup = void 0),
                          (this._licenseResponseCallback = void 0),
                          (this._emeEnabled = void 0),
                          (this._requestMediaKeySystemAccess = void 0),
                          (this._drmSystemOptions = void 0),
                          (this._config = void 0),
                          (this._mediaKeysList = []),
                          (this._media = null),
                          (this._hasSetMediaKeys = !1),
                          (this._requestLicenseFailureCount = 0),
                          (this.mediaKeysPromise = null),
                          (this._onMediaEncrypted = this.onMediaEncrypted.bind(this)),
                          (this.hls = R),
                          (this._config = R.config),
                          (this._widevineLicenseUrl = this._config.widevineLicenseUrl),
                          (this._licenseXhrSetup = this._config.licenseXhrSetup),
                          (this._licenseResponseCallback = this._config.licenseResponseCallback),
                          (this._emeEnabled = this._config.emeEnabled),
                          (this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc),
                          (this._drmSystemOptions = this._config.drmSystemOptions),
                          this._registerListeners();
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {
                          this._unregisterListeners(),
                            (this.hls = this._onMediaEncrypted = null),
                            (this._requestMediaKeySystemAccess = null);
                        }),
                        (R._registerListeners = function e() {
                          this.hls.on(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                            this.hls.on(O.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                            this.hls.on(O.Events.MANIFEST_PARSED, this.onManifestParsed, this);
                        }),
                        (R._unregisterListeners = function e() {
                          this.hls.off(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                            this.hls.off(O.Events.MEDIA_DETACHED, this.onMediaDetached, this),
                            this.hls.off(O.Events.MANIFEST_PARSED, this.onManifestParsed, this);
                        }),
                        (R.getLicenseServerUrl = function e(R) {
                          switch (R) {
                            case x.KeySystems.WIDEVINE:
                              if (!this._widevineLicenseUrl) break;
                              return this._widevineLicenseUrl;
                          }
                          throw new Error('no license server URL configured for key-system "' + R + '"');
                        }),
                        (R._attemptKeySystemAccess = function e(R, I, C) {
                          var O = this,
                            w = P(R, I, C, this._drmSystemOptions);
                          _.logger.log('Requesting encrypted media key-system access');
                          var x = this.requestMediaKeySystemAccess(R, w);
                          (this.mediaKeysPromise = x.then(function (I) {
                            return O._onMediaKeySystemAccessObtained(R, I);
                          })),
                            x.catch(function (I) {
                              _.logger.error('Failed to obtain key-system "' + R + '" access:', I);
                            });
                        }),
                        (R._onMediaKeySystemAccessObtained = function e(R, I) {
                          var C = this;
                          _.logger.log('Access for key-system "' + R + '" obtained');
                          var O = { mediaKeysSessionInitialized: !1, mediaKeySystemAccess: I, mediaKeySystemDomain: R };
                          this._mediaKeysList.push(O);
                          var w = Promise.resolve()
                            .then(function () {
                              return I.createMediaKeys();
                            })
                            .then(function (I) {
                              return (
                                (O.mediaKeys = I),
                                _.logger.log('Media-keys created for key-system "' + R + '"'),
                                C._onMediaKeysCreated(),
                                I
                              );
                            });
                          return (
                            w.catch(function (R) {
                              _.logger.error('Failed to create media-keys:', R);
                            }),
                            w
                          );
                        }),
                        (R._onMediaKeysCreated = function e() {
                          var R = this;
                          this._mediaKeysList.forEach(function (I) {
                            I.mediaKeysSession ||
                              ((I.mediaKeysSession = I.mediaKeys.createSession()),
                              R._onNewMediaKeySession(I.mediaKeysSession));
                          });
                        }),
                        (R._onNewMediaKeySession = function e(R) {
                          var I = this;
                          _.logger.log('New key-system session ' + R.sessionId),
                            R.addEventListener(
                              'message',
                              function (C) {
                                I._onKeySessionMessage(R, C.message);
                              },
                              !1
                            );
                        }),
                        (R._onKeySessionMessage = function e(R, I) {
                          _.logger.log('Got EME message event, creating license request'),
                            this._requestLicense(I, function (I) {
                              _.logger.log(
                                'Received license data (length: ' + (I ? I.byteLength : I) + '), updating key-session'
                              ),
                                R.update(I);
                            });
                        }),
                        (R.onMediaEncrypted = function e(R) {
                          var I = this;
                          if (
                            (_.logger.log('Media is encrypted using "' + R.initDataType + '" init data type'),
                            !this.mediaKeysPromise)
                          )
                            return (
                              _.logger.error(
                                'Fatal: Media is encrypted but no CDM access or no keys have been requested'
                              ),
                              void this.hls.trigger(O.Events.ERROR, {
                                type: w.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: w.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                fatal: !0,
                              })
                            );
                          var C = function e(C) {
                            I._media &&
                              (I._attemptSetMediaKeys(C),
                              I._generateRequestWithPreferredKeySession(R.initDataType, R.initData));
                          };
                          this.mediaKeysPromise.then(C).catch(C);
                        }),
                        (R._attemptSetMediaKeys = function e(R) {
                          if (!this._media)
                            throw new Error('Attempted to set mediaKeys without first attaching a media element');
                          if (!this._hasSetMediaKeys) {
                            var I = this._mediaKeysList[0];
                            if (!I || !I.mediaKeys)
                              return (
                                _.logger.error(
                                  'Fatal: Media is encrypted but no CDM access or no keys have been obtained yet'
                                ),
                                void this.hls.trigger(O.Events.ERROR, {
                                  type: w.ErrorTypes.KEY_SYSTEM_ERROR,
                                  details: w.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                  fatal: !0,
                                })
                              );
                            _.logger.log('Setting keys for encrypted media'),
                              this._media.setMediaKeys(I.mediaKeys),
                              (this._hasSetMediaKeys = !0);
                          }
                        }),
                        (R._generateRequestWithPreferredKeySession = function e(R, I) {
                          var C = this,
                            x = this._mediaKeysList[0];
                          if (!x)
                            return (
                              _.logger.error(
                                'Fatal: Media is encrypted but not any key-system access has been obtained yet'
                              ),
                              void this.hls.trigger(O.Events.ERROR, {
                                type: w.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: w.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                fatal: !0,
                              })
                            );
                          if (x.mediaKeysSessionInitialized)
                            _.logger.warn('Key-Session already initialized but requested again');
                          else {
                            var P = x.mediaKeysSession;
                            if (!P)
                              return (
                                _.logger.error('Fatal: Media is encrypted but no key-session existing'),
                                void this.hls.trigger(O.Events.ERROR, {
                                  type: w.ErrorTypes.KEY_SYSTEM_ERROR,
                                  details: w.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                  fatal: !0,
                                })
                              );
                            if (!I)
                              return (
                                _.logger.warn('Fatal: initData required for generating a key session is null'),
                                void this.hls.trigger(O.Events.ERROR, {
                                  type: w.ErrorTypes.KEY_SYSTEM_ERROR,
                                  details: w.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                                  fatal: !0,
                                })
                              );
                            _.logger.log('Generating key-session request for "' + R + '" init data type'),
                              (x.mediaKeysSessionInitialized = !0),
                              P.generateRequest(R, I)
                                .then(function () {
                                  _.logger.debug('Key-session generation succeeded');
                                })
                                .catch(function (R) {
                                  _.logger.error('Error generating key-session request:', R),
                                    C.hls.trigger(O.Events.ERROR, {
                                      type: w.ErrorTypes.KEY_SYSTEM_ERROR,
                                      details: w.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                      fatal: !1,
                                    });
                                });
                          }
                        }),
                        (R._createLicenseXhr = function e(R, I, C) {
                          var O = new XMLHttpRequest();
                          (O.responseType = 'arraybuffer'),
                            (O.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, O, R, I, C));
                          var w = this._licenseXhrSetup;
                          if (w)
                            try {
                              w.call(this.hls, O, R), (w = void 0);
                            } catch (e) {
                              _.logger.error(e);
                            }
                          try {
                            O.readyState || O.open('POST', R, !0), w && w.call(this.hls, O, R);
                          } catch (e) {
                            throw new Error('issue setting up KeySystem license XHR ' + e);
                          }
                          return O;
                        }),
                        (R._onLicenseRequestReadyStageChange = function e(R, I, C, x) {
                          switch (R.readyState) {
                            case 4:
                              if (200 === R.status) {
                                (this._requestLicenseFailureCount = 0), _.logger.log('License request succeeded');
                                var P = R.response,
                                  F = this._licenseResponseCallback;
                                if (F)
                                  try {
                                    P = F.call(this.hls, R, I);
                                  } catch (e) {
                                    _.logger.error(e);
                                  }
                                x(P);
                              } else {
                                if (
                                  (_.logger.error(
                                    'License Request XHR failed (' +
                                      I +
                                      '). Status: ' +
                                      R.status +
                                      ' (' +
                                      R.statusText +
                                      ')'
                                  ),
                                  this._requestLicenseFailureCount++,
                                  this._requestLicenseFailureCount > 3)
                                )
                                  return void this.hls.trigger(O.Events.ERROR, {
                                    type: w.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: w.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                    fatal: !0,
                                  });
                                var M = 3 - this._requestLicenseFailureCount + 1;
                                _.logger.warn('Retrying license request, ' + M + ' attempts left'),
                                  this._requestLicense(C, x);
                              }
                          }
                        }),
                        (R._generateLicenseRequestChallenge = function e(R, I) {
                          switch (R.mediaKeySystemDomain) {
                            case x.KeySystems.WIDEVINE:
                              return I;
                          }
                          throw new Error('unsupported key-system: ' + R.mediaKeySystemDomain);
                        }),
                        (R._requestLicense = function e(R, I) {
                          _.logger.log('Requesting content license for key-system');
                          var C = this._mediaKeysList[0];
                          if (!C)
                            return (
                              _.logger.error(
                                'Fatal error: Media is encrypted but no key-system access has been obtained yet'
                              ),
                              void this.hls.trigger(O.Events.ERROR, {
                                type: w.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: w.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                fatal: !0,
                              })
                            );
                          try {
                            var x = this.getLicenseServerUrl(C.mediaKeySystemDomain),
                              P = this._createLicenseXhr(x, R, I);
                            _.logger.log('Sending license request to URL: ' + x);
                            var F = this._generateLicenseRequestChallenge(C, R);
                            P.send(F);
                          } catch (e) {
                            _.logger.error('Failure requesting DRM license: ' + e),
                              this.hls.trigger(O.Events.ERROR, {
                                type: w.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: w.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                fatal: !0,
                              });
                          }
                        }),
                        (R.onMediaAttached = function e(R, I) {
                          if (this._emeEnabled) {
                            var C = I.media;
                            (this._media = C), C.addEventListener('encrypted', this._onMediaEncrypted);
                          }
                        }),
                        (R.onMediaDetached = function e() {
                          var R = this._media,
                            I = this._mediaKeysList;
                          R &&
                            (R.removeEventListener('encrypted', this._onMediaEncrypted),
                            (this._media = null),
                            (this._mediaKeysList = []),
                            Promise.all(
                              I.map(function (R) {
                                if (R.mediaKeysSession) return R.mediaKeysSession.close().catch(function () {});
                              })
                            )
                              .then(function () {
                                return R.setMediaKeys(null);
                              })
                              .catch(function () {}));
                        }),
                        (R.onManifestParsed = function e(R, I) {
                          if (this._emeEnabled) {
                            var C = I.levels
                                .map(function (R) {
                                  return R.audioCodec;
                                })
                                .filter(function (R) {
                                  return !!R;
                                }),
                              O = I.levels
                                .map(function (R) {
                                  return R.videoCodec;
                                })
                                .filter(function (R) {
                                  return !!R;
                                });
                            this._attemptKeySystemAccess(x.KeySystems.WIDEVINE, C, O);
                          }
                        }),
                        (function l(R, I, C) {
                          return I && o(R.prototype, I), C && o(R, C), R;
                        })(e, [
                          {
                            key: 'requestMediaKeySystemAccess',
                            get: function e() {
                              if (!this._requestMediaKeySystemAccess)
                                throw new Error('No requestMediaKeySystemAccess function configured');
                              return this._requestMediaKeySystemAccess;
                            },
                          },
                        ]),
                        e
                      );
                    })();
                  I.default = F;
                },
                './src/controller/fps-controller.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/events.ts'),
                    w = C('./src/utils/logger.ts'),
                    _ = (function () {
                      function e(R) {
                        (this.hls = void 0),
                          (this.isVideoPlaybackQualityAvailable = !1),
                          (this.timer = void 0),
                          (this.media = null),
                          (this.lastTime = void 0),
                          (this.lastDroppedFrames = 0),
                          (this.lastDecodedFrames = 0),
                          (this.streamController = void 0),
                          (this.hls = R),
                          this.registerListeners();
                      }
                      var R = e.prototype;
                      return (
                        (R.setStreamController = function e(R) {
                          this.streamController = R;
                        }),
                        (R.registerListeners = function e() {
                          this.hls.on(O.Events.MEDIA_ATTACHING, this.onMediaAttaching, this);
                        }),
                        (R.unregisterListeners = function e() {
                          this.hls.off(O.Events.MEDIA_ATTACHING, this.onMediaAttaching);
                        }),
                        (R.destroy = function e() {
                          this.timer && clearInterval(this.timer),
                            this.unregisterListeners(),
                            (this.isVideoPlaybackQualityAvailable = !1),
                            (this.media = null);
                        }),
                        (R.onMediaAttaching = function e(R, I) {
                          var C = this.hls.config;
                          if (C.capLevelOnFPSDrop) {
                            var O = I.media instanceof self.HTMLVideoElement ? I.media : null;
                            (this.media = O),
                              O &&
                                'function' == typeof O.getVideoPlaybackQuality &&
                                (this.isVideoPlaybackQualityAvailable = !0),
                              self.clearInterval(this.timer),
                              (this.timer = self.setInterval(
                                this.checkFPSInterval.bind(this),
                                C.fpsDroppedMonitoringPeriod
                              ));
                          }
                        }),
                        (R.checkFPS = function e(R, I, C) {
                          var _ = performance.now();
                          if (I) {
                            if (this.lastTime) {
                              var x = _ - this.lastTime,
                                P = C - this.lastDroppedFrames,
                                F = I - this.lastDecodedFrames,
                                M = (1e3 * P) / x,
                                N = this.hls;
                              if (
                                (N.trigger(O.Events.FPS_DROP, {
                                  currentDropped: P,
                                  currentDecoded: F,
                                  totalDroppedFrames: C,
                                }),
                                M > 0 && P > N.config.fpsDroppedMonitoringThreshold * F)
                              ) {
                                var B = N.currentLevel;
                                w.logger.warn('drop FPS ratio greater than max allowed value for currentLevel: ' + B),
                                  B > 0 &&
                                    (-1 === N.autoLevelCapping || N.autoLevelCapping >= B) &&
                                    ((B -= 1),
                                    N.trigger(O.Events.FPS_DROP_LEVEL_CAPPING, {
                                      level: B,
                                      droppedLevel: N.currentLevel,
                                    }),
                                    (N.autoLevelCapping = B),
                                    this.streamController.nextLevelSwitch());
                              }
                            }
                            (this.lastTime = _), (this.lastDroppedFrames = C), (this.lastDecodedFrames = I);
                          }
                        }),
                        (R.checkFPSInterval = function e() {
                          var R = this.media;
                          if (R)
                            if (this.isVideoPlaybackQualityAvailable) {
                              var I = R.getVideoPlaybackQuality();
                              this.checkFPS(R, I.totalVideoFrames, I.droppedVideoFrames);
                            } else this.checkFPS(R, R.webkitDecodedFrameCount, R.webkitDroppedFrameCount);
                        }),
                        e
                      );
                    })();
                  I.default = _;
                },
                './src/controller/fragment-finders.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'findFragmentByPDT', function () {
                      return n;
                    }),
                    C.d(I, 'findFragmentByPTS', function () {
                      return s;
                    }),
                    C.d(I, 'fragmentWithinToleranceTest', function () {
                      return o;
                    }),
                    C.d(I, 'pdtWithinToleranceTest', function () {
                      return l;
                    }),
                    C.d(I, 'findFragWithCC', function () {
                      return u;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/utils/binary-search.ts');
                  function n(R, I, C) {
                    if (null === I || !Array.isArray(R) || !R.length || !Object(O.isFiniteNumber)(I)) return null;
                    if (I < (R[0].programDateTime || 0)) return null;
                    if (I >= (R[R.length - 1].endProgramDateTime || 0)) return null;
                    C = C || 0;
                    for (var w = 0; w < R.length; ++w) {
                      var _ = R[w];
                      if (l(I, C, _)) return _;
                    }
                    return null;
                  }
                  function s(R, I, C, O) {
                    void 0 === C && (C = 0), void 0 === O && (O = 0);
                    var _ = null;
                    if (
                      (R ? (_ = I[R.sn - I[0].sn + 1] || null) : 0 === C && 0 === I[0].start && (_ = I[0]),
                      _ && 0 === o(C, O, _))
                    )
                      return _;
                    var x = w.default.search(I, o.bind(null, C, O));
                    return x || _;
                  }
                  function o(R, I, C) {
                    void 0 === R && (R = 0), void 0 === I && (I = 0);
                    var O = Math.min(I, C.duration + (C.deltaPTS ? C.deltaPTS : 0));
                    return C.start + C.duration - O <= R ? 1 : C.start - O > R && C.start ? -1 : 0;
                  }
                  function l(R, I, C) {
                    var O = 1e3 * Math.min(I, C.duration + (C.deltaPTS ? C.deltaPTS : 0));
                    return (C.endProgramDateTime || 0) - O > R;
                  }
                  function u(R, I) {
                    return w.default.search(R, function (R) {
                      return R.cc < I ? 1 : R.cc > I ? -1 : 0;
                    });
                  }
                },
                './src/controller/fragment-tracker.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'FragmentState', function () {
                      return O;
                    }),
                    C.d(I, 'FragmentTracker', function () {
                      return x;
                    });
                  var O,
                    w = C('./src/events.ts'),
                    _ = C('./src/types/loader.ts');
                  !(function (R) {
                    (R.NOT_LOADED = 'NOT_LOADED'),
                      (R.BACKTRACKED = 'BACKTRACKED'),
                      (R.APPENDING = 'APPENDING'),
                      (R.PARTIAL = 'PARTIAL'),
                      (R.OK = 'OK');
                  })(O || (O = {}));
                  var x = (function () {
                    function e(R) {
                      (this.activeFragment = null),
                        (this.activeParts = null),
                        (this.fragments = Object.create(null)),
                        (this.timeRanges = Object.create(null)),
                        (this.bufferPadding = 0.2),
                        (this.hls = void 0),
                        (this.hls = R),
                        this._registerListeners();
                    }
                    var R = e.prototype;
                    return (
                      (R._registerListeners = function e() {
                        var R = this.hls;
                        R.on(w.Events.BUFFER_APPENDED, this.onBufferAppended, this),
                          R.on(w.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                          R.on(w.Events.FRAG_LOADED, this.onFragLoaded, this);
                      }),
                      (R._unregisterListeners = function e() {
                        var R = this.hls;
                        R.off(w.Events.BUFFER_APPENDED, this.onBufferAppended, this),
                          R.off(w.Events.FRAG_BUFFERED, this.onFragBuffered, this),
                          R.off(w.Events.FRAG_LOADED, this.onFragLoaded, this);
                      }),
                      (R.destroy = function e() {
                        this._unregisterListeners(), (this.fragments = this.timeRanges = null);
                      }),
                      (R.getAppendedFrag = function e(R, I) {
                        if (I === _.PlaylistLevelType.MAIN) {
                          var C = this.activeFragment,
                            O = this.activeParts;
                          if (!C) return null;
                          if (O)
                            for (var w = O.length; w--; ) {
                              var x = O[w],
                                P = x ? x.end : C.appendedPTS;
                              if (x.start <= R && void 0 !== P && R <= P)
                                return w > 9 && (this.activeParts = O.slice(w - 9)), x;
                            }
                          else if (C.start <= R && void 0 !== C.appendedPTS && R <= C.appendedPTS) return C;
                        }
                        return this.getBufferedFrag(R, I);
                      }),
                      (R.getBufferedFrag = function e(R, I) {
                        for (var C = this.fragments, O = Object.keys(C), w = O.length; w--; ) {
                          var _ = C[O[w]];
                          if ((null == _ ? void 0 : _.body.type) === I && _.buffered) {
                            var x = _.body;
                            if (x.start <= R && R <= x.end) return x;
                          }
                        }
                        return null;
                      }),
                      (R.detectEvictedFragments = function e(R, I, C) {
                        var O = this;
                        Object.keys(this.fragments).forEach(function (w) {
                          var _ = O.fragments[w];
                          if (_)
                            if (_.buffered) {
                              var x = _.range[R];
                              x &&
                                x.time.some(function (R) {
                                  var C = !O.isTimeBuffered(R.startPTS, R.endPTS, I);
                                  return C && O.removeFragment(_.body), C;
                                });
                            } else _.body.type === C && O.removeFragment(_.body);
                        });
                      }),
                      (R.detectPartialFragments = function e(R) {
                        var I = this,
                          C = this.timeRanges,
                          O = R.frag,
                          w = R.part;
                        if (C && 'initSegment' !== O.sn) {
                          var _ = l(O),
                            x = this.fragments[_];
                          x &&
                            (Object.keys(C).forEach(function (R) {
                              var _ = O.elementaryStreams[R];
                              if (_) {
                                var P = C[R],
                                  F = null !== w || !0 === _.partial;
                                x.range[R] = I.getBufferedTimes(O, w, F, P);
                              }
                            }),
                            (x.backtrack = x.loaded = null),
                            Object.keys(x.range).length ? (x.buffered = !0) : this.removeFragment(x.body));
                        }
                      }),
                      (R.fragBuffered = function e(R) {
                        var I = l(R),
                          C = this.fragments[I];
                        C && ((C.backtrack = C.loaded = null), (C.buffered = !0));
                      }),
                      (R.getBufferedTimes = function e(R, I, C, O) {
                        for (
                          var w = { time: [], partial: C },
                            _ = I ? I.start : R.start,
                            x = I ? I.end : R.end,
                            P = R.minEndPTS || x,
                            F = R.maxStartPTS || _,
                            M = 0;
                          M < O.length;
                          M++
                        ) {
                          var N = O.start(M) - this.bufferPadding,
                            B = O.end(M) + this.bufferPadding;
                          if (F >= N && P <= B) {
                            w.time.push({ startPTS: Math.max(_, O.start(M)), endPTS: Math.min(x, O.end(M)) });
                            break;
                          }
                          if (_ < B && x > N)
                            (w.partial = !0),
                              w.time.push({ startPTS: Math.max(_, O.start(M)), endPTS: Math.min(x, O.end(M)) });
                          else if (x <= N) break;
                        }
                        return w;
                      }),
                      (R.getPartialFragment = function e(R) {
                        var I,
                          C,
                          O,
                          w = null,
                          _ = 0,
                          x = this.bufferPadding,
                          P = this.fragments;
                        return (
                          Object.keys(P).forEach(function (F) {
                            var M = P[F];
                            M &&
                              o(M) &&
                              ((C = M.body.start - x),
                              (O = M.body.end + x),
                              R >= C && R <= O && ((I = Math.min(R - C, O - R)), _ <= I && ((w = M.body), (_ = I))));
                          }),
                          w
                        );
                      }),
                      (R.getState = function e(R) {
                        var I = l(R),
                          C = this.fragments[I];
                        return C
                          ? C.buffered
                            ? o(C)
                              ? O.PARTIAL
                              : O.OK
                            : C.backtrack
                            ? O.BACKTRACKED
                            : O.APPENDING
                          : O.NOT_LOADED;
                      }),
                      (R.backtrack = function e(R, I) {
                        var C = l(R),
                          O = this.fragments[C];
                        if (!O || O.backtrack) return null;
                        var e = (O.backtrack = I || O.loaded);
                        return (O.loaded = null), e;
                      }),
                      (R.getBacktrackData = function e(R) {
                        var I = l(R),
                          C = this.fragments[I];
                        if (C) {
                          var O,
                            w = C.backtrack;
                          if (null != w && null !== (O = w.payload) && void 0 !== O && O.byteLength) return w;
                          this.removeFragment(R);
                        }
                        return null;
                      }),
                      (R.isTimeBuffered = function e(R, I, C) {
                        for (var O, w, _ = 0; _ < C.length; _++) {
                          if (
                            ((O = C.start(_) - this.bufferPadding),
                            (w = C.end(_) + this.bufferPadding),
                            R >= O && I <= w)
                          )
                            return !0;
                          if (I <= O) return !1;
                        }
                        return !1;
                      }),
                      (R.onFragLoaded = function e(R, I) {
                        var C = I.frag,
                          O = I.part;
                        if ('initSegment' !== C.sn && !C.bitrateTest && !O) {
                          var w = l(C);
                          this.fragments[w] = {
                            body: C,
                            loaded: I,
                            backtrack: null,
                            buffered: !1,
                            range: Object.create(null),
                          };
                        }
                      }),
                      (R.onBufferAppended = function e(R, I) {
                        var C = this,
                          O = I.frag,
                          w = I.part,
                          x = I.timeRanges;
                        if (O.type === _.PlaylistLevelType.MAIN)
                          if (((this.activeFragment = O), w)) {
                            var P = this.activeParts;
                            P || (this.activeParts = P = []), P.push(w);
                          } else this.activeParts = null;
                        (this.timeRanges = x),
                          Object.keys(x).forEach(function (R) {
                            var I = x[R];
                            if ((C.detectEvictedFragments(R, I), !w))
                              for (var _ = 0; _ < I.length; _++) O.appendedPTS = Math.max(I.end(_), O.appendedPTS || 0);
                          });
                      }),
                      (R.onFragBuffered = function e(R, I) {
                        this.detectPartialFragments(I);
                      }),
                      (R.hasFragment = function e(R) {
                        var I = l(R);
                        return !!this.fragments[I];
                      }),
                      (R.removeFragmentsInRange = function e(R, I, C) {
                        var O = this;
                        Object.keys(this.fragments).forEach(function (w) {
                          var _ = O.fragments[w];
                          if (_ && _.buffered) {
                            var x = _.body;
                            x.type === C && x.start < I && x.end > R && O.removeFragment(x);
                          }
                        });
                      }),
                      (R.removeFragment = function e(R) {
                        var I = l(R);
                        (R.stats.loaded = 0), R.clearElementaryStreamInfo(), delete this.fragments[I];
                      }),
                      (R.removeAllFragments = function e() {
                        (this.fragments = Object.create(null)), (this.activeFragment = null), (this.activeParts = null);
                      }),
                      e
                    );
                  })();
                  function o(R) {
                    var I, C;
                    return (
                      R.buffered &&
                      ((null === (I = R.range.video) || void 0 === I ? void 0 : I.partial) ||
                        (null === (C = R.range.audio) || void 0 === C ? void 0 : C.partial))
                    );
                  }
                  function l(R) {
                    return R.type + '_' + R.level + '_' + R.urlId + '_' + R.sn;
                  }
                },
                './src/controller/gap-controller.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'STALL_MINIMUM_DURATION_MS', function () {
                      return P;
                    }),
                    C.d(I, 'MAX_START_GAP_JUMP', function () {
                      return F;
                    }),
                    C.d(I, 'SKIP_BUFFER_HOLE_STEP_SECONDS', function () {
                      return M;
                    }),
                    C.d(I, 'SKIP_BUFFER_RANGE_START', function () {
                      return N;
                    }),
                    C.d(I, 'default', function () {
                      return B;
                    });
                  var O = C('./src/utils/buffer-helper.ts'),
                    w = C('./src/errors.ts'),
                    _ = C('./src/events.ts'),
                    x = C('./src/utils/logger.ts'),
                    P = 250,
                    F = 2,
                    M = 0.1,
                    N = 0.05,
                    B = (function () {
                      function e(R, I, C, O) {
                        (this.config = void 0),
                          (this.media = void 0),
                          (this.fragmentTracker = void 0),
                          (this.hls = void 0),
                          (this.nudgeRetry = 0),
                          (this.stallReported = !1),
                          (this.stalled = null),
                          (this.moved = !1),
                          (this.seeking = !1),
                          (this.config = R),
                          (this.media = I),
                          (this.fragmentTracker = C),
                          (this.hls = O);
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {
                          this.hls = this.fragmentTracker = this.media = null;
                        }),
                        (R.poll = function e(R) {
                          var I = this.config,
                            C = this.media,
                            w = this.stalled,
                            _ = C.currentTime,
                            M = C.seeking,
                            N = this.seeking && !M,
                            B = !this.seeking && M;
                          if (((this.seeking = M), _ === R)) {
                            if (
                              ((B || N) && (this.stalled = null),
                              !C.paused && !C.ended && 0 !== C.playbackRate && O.BufferHelper.getBuffered(C).length)
                            ) {
                              var U = O.BufferHelper.bufferInfo(C, _, 0),
                                G = U.len > 0,
                                j = U.nextStart || 0;
                              if (G || j) {
                                if (M) {
                                  var K = U.len > F,
                                    H = !j || (j - _ > F && !this.fragmentTracker.getPartialFragment(_));
                                  if (K || H) return;
                                  this.moved = !1;
                                }
                                if (!this.moved && null !== this.stalled) {
                                  var V,
                                    W = Math.max(j, U.start || 0) - _,
                                    Y = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                                    z = (null == Y || null === (V = Y.details) || void 0 === V ? void 0 : V.live)
                                      ? 2 * Y.details.targetduration
                                      : F;
                                  if (W > 0 && W <= z) return void this._trySkipBufferHole(null);
                                }
                                var X = self.performance.now();
                                if (null !== w) {
                                  var q = X - w;
                                  !M && q >= P && this._reportStall(U.len);
                                  var Z = O.BufferHelper.bufferInfo(C, _, I.maxBufferHole);
                                  this._tryFixBufferStall(Z, q);
                                } else this.stalled = X;
                              }
                            }
                          } else if (((this.moved = !0), null !== w)) {
                            if (this.stallReported) {
                              var Q = self.performance.now() - w;
                              x.logger.warn('playback not stuck anymore @' + _ + ', after ' + Math.round(Q) + 'ms'),
                                (this.stallReported = !1);
                            }
                            (this.stalled = null), (this.nudgeRetry = 0);
                          }
                        }),
                        (R._tryFixBufferStall = function e(R, I) {
                          var C = this.config,
                            O = this.fragmentTracker,
                            w = this.media.currentTime,
                            _ = O.getPartialFragment(w);
                          if (_ && this._trySkipBufferHole(_)) return;
                          R.len > C.maxBufferHole &&
                            I > 1e3 * C.highBufferWatchdogPeriod &&
                            (x.logger.warn('Trying to nudge playhead over buffer-hole'),
                            (this.stalled = null),
                            this._tryNudgeBuffer());
                        }),
                        (R._reportStall = function e(R) {
                          var I = this.hls,
                            C = this.media;
                          this.stallReported ||
                            ((this.stallReported = !0),
                            x.logger.warn(
                              'Playback stalling at @' + C.currentTime + ' due to low buffer (buffer=' + R + ')'
                            ),
                            I.trigger(_.Events.ERROR, {
                              type: w.ErrorTypes.MEDIA_ERROR,
                              details: w.ErrorDetails.BUFFER_STALLED_ERROR,
                              fatal: !1,
                              buffer: R,
                            }));
                        }),
                        (R._trySkipBufferHole = function e(R) {
                          for (
                            var I = this.config,
                              C = this.hls,
                              P = this.media,
                              F = P.currentTime,
                              B = 0,
                              U = O.BufferHelper.getBuffered(P),
                              G = 0;
                            G < U.length;
                            G++
                          ) {
                            var j = U.start(G);
                            if (F + I.maxBufferHole >= B && F < j) {
                              var K = Math.max(j + N, P.currentTime + M);
                              return (
                                x.logger.warn('skipping hole, adjusting currentTime from ' + F + ' to ' + K),
                                (this.moved = !0),
                                (this.stalled = null),
                                (P.currentTime = K),
                                R &&
                                  C.trigger(_.Events.ERROR, {
                                    type: w.ErrorTypes.MEDIA_ERROR,
                                    details: w.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                    fatal: !1,
                                    reason: 'fragment loaded with buffer holes, seeking from ' + F + ' to ' + K,
                                    frag: R,
                                  }),
                                K
                              );
                            }
                            B = U.end(G);
                          }
                          return 0;
                        }),
                        (R._tryNudgeBuffer = function e() {
                          var R = this.config,
                            I = this.hls,
                            C = this.media,
                            O = C.currentTime,
                            P = (this.nudgeRetry || 0) + 1;
                          if (((this.nudgeRetry = P), P < R.nudgeMaxRetry)) {
                            var F = O + P * R.nudgeOffset;
                            x.logger.warn("Nudging 'currentTime' from " + O + ' to ' + F),
                              (C.currentTime = F),
                              I.trigger(_.Events.ERROR, {
                                type: w.ErrorTypes.MEDIA_ERROR,
                                details: w.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                                fatal: !1,
                              });
                          } else
                            x.logger.error(
                              'Playhead still not moving while enough data buffered @' +
                                O +
                                ' after ' +
                                R.nudgeMaxRetry +
                                ' nudges'
                            ),
                              I.trigger(_.Events.ERROR, {
                                type: w.ErrorTypes.MEDIA_ERROR,
                                details: w.ErrorDetails.BUFFER_STALLED_ERROR,
                                fatal: !0,
                              });
                        }),
                        e
                      );
                    })();
                },
                './src/controller/id3-track-controller.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/events.ts'),
                    w = C('./src/utils/texttrack-utils.ts'),
                    _ = C('./src/demux/id3.ts'),
                    x = (function () {
                      function e(R) {
                        (this.hls = void 0),
                          (this.id3Track = null),
                          (this.media = null),
                          (this.hls = R),
                          this._registerListeners();
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {
                          this._unregisterListeners();
                        }),
                        (R._registerListeners = function e() {
                          var R = this.hls;
                          R.on(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                            R.on(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                            R.on(O.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
                            R.on(O.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                        }),
                        (R._unregisterListeners = function e() {
                          var R = this.hls;
                          R.off(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                            R.off(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                            R.off(O.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
                            R.off(O.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                        }),
                        (R.onMediaAttached = function e(R, I) {
                          this.media = I.media;
                        }),
                        (R.onMediaDetaching = function e() {
                          this.id3Track &&
                            (Object(w.clearCurrentCues)(this.id3Track), (this.id3Track = null), (this.media = null));
                        }),
                        (R.getID3Track = function e(R) {
                          if (this.media) {
                            for (var I = 0; I < R.length; I++) {
                              var C = R[I];
                              if ('metadata' === C.kind && 'id3' === C.label)
                                return Object(w.sendAddTrackEvent)(C, this.media), C;
                            }
                            return this.media.addTextTrack('metadata', 'id3');
                          }
                        }),
                        (R.onFragParsingMetadata = function e(R, I) {
                          if (this.media) {
                            var C = I.frag,
                              O = I.samples;
                            this.id3Track ||
                              ((this.id3Track = this.getID3Track(this.media.textTracks)),
                              (this.id3Track.mode = 'hidden'));
                            for (
                              var w = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, x = 0;
                              x < O.length;
                              x++
                            ) {
                              var P = _.getID3Frames(O[x].data);
                              if (P) {
                                var F = O[x].pts,
                                  M = x < O.length - 1 ? O[x + 1].pts : C.end;
                                M - F <= 0 && (M = F + 0.25);
                                for (var N = 0; N < P.length; N++) {
                                  var B = P[N];
                                  if (!_.isTimeStampFrame(B)) {
                                    var U = new w(F, M, '');
                                    (U.value = B), this.id3Track.addCue(U);
                                  }
                                }
                              }
                            }
                          }
                        }),
                        (R.onBufferFlushing = function e(R, I) {
                          var C = I.startOffset,
                            O = I.endOffset,
                            _ = I.type;
                          if (!_ || 'audio' === _) {
                            var x = this.id3Track;
                            x && Object(w.removeCuesInRange)(x, C, O);
                          }
                        }),
                        e
                      );
                    })();
                  I.default = x;
                },
                './src/controller/latency-controller.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return x;
                    });
                  var O = C('./src/errors.ts'),
                    w = C('./src/events.ts'),
                    _ = C('./src/utils/logger.ts');
                  function s(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  var x = (function () {
                    function e(R) {
                      var I = this;
                      (this.hls = void 0),
                        (this.config = void 0),
                        (this.media = null),
                        (this.levelDetails = null),
                        (this.currentTime = 0),
                        (this.stallCount = 0),
                        (this._latency = null),
                        (this.timeupdateHandler = function () {
                          return I.timeupdate();
                        }),
                        (this.hls = R),
                        (this.config = R.config),
                        this.registerListeners();
                    }
                    var R = e.prototype;
                    return (
                      (R.destroy = function e() {
                        this.unregisterListeners(),
                          this.onMediaDetaching(),
                          (this.levelDetails = null),
                          (this.hls = this.timeupdateHandler = null);
                      }),
                      (R.registerListeners = function e() {
                        this.hls.on(w.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          this.hls.on(w.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          this.hls.on(w.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          this.hls.on(w.Events.LEVEL_UPDATED, this.onLevelUpdated, this),
                          this.hls.on(w.Events.ERROR, this.onError, this);
                      }),
                      (R.unregisterListeners = function e() {
                        this.hls.off(w.Events.MEDIA_ATTACHED, this.onMediaAttached),
                          this.hls.off(w.Events.MEDIA_DETACHING, this.onMediaDetaching),
                          this.hls.off(w.Events.MANIFEST_LOADING, this.onManifestLoading),
                          this.hls.off(w.Events.LEVEL_UPDATED, this.onLevelUpdated),
                          this.hls.off(w.Events.ERROR, this.onError);
                      }),
                      (R.onMediaAttached = function e(R, I) {
                        (this.media = I.media), this.media.addEventListener('timeupdate', this.timeupdateHandler);
                      }),
                      (R.onMediaDetaching = function e() {
                        this.media &&
                          (this.media.removeEventListener('timeupdate', this.timeupdateHandler), (this.media = null));
                      }),
                      (R.onManifestLoading = function e() {
                        (this.levelDetails = null), (this._latency = null), (this.stallCount = 0);
                      }),
                      (R.onLevelUpdated = function e(R, I) {
                        var C = I.details;
                        (this.levelDetails = C),
                          C.advanced && this.timeupdate(),
                          !C.live && this.media && this.media.removeEventListener('timeupdate', this.timeupdateHandler);
                      }),
                      (R.onError = function e(R, I) {
                        I.details === O.ErrorDetails.BUFFER_STALLED_ERROR &&
                          (this.stallCount++,
                          _.logger.warn('[playback-rate-controller]: Stall detected, adjusting target latency'));
                      }),
                      (R.timeupdate = function e() {
                        var R = this.media,
                          I = this.levelDetails;
                        if (R && I) {
                          this.currentTime = R.currentTime;
                          var C = this.computeLatency();
                          if (null !== C) {
                            this._latency = C;
                            var O = this.config,
                              w = O.lowLatencyMode,
                              _ = O.maxLiveSyncPlaybackRate;
                            if (w && 1 !== _) {
                              var x = this.targetLatency;
                              if (null !== x) {
                                var P = C - x,
                                  F = P < Math.min(this.maxLatency, x + I.targetduration);
                                if (I.live && F && P > 0.05 && this.forwardBufferLength > 1) {
                                  var M = Math.min(2, Math.max(1, _)),
                                    N = Math.round((2 / (1 + Math.exp(-0.75 * P - this.edgeStalled))) * 20) / 20;
                                  R.playbackRate = Math.min(M, Math.max(1, N));
                                } else 1 !== R.playbackRate && 0 !== R.playbackRate && (R.playbackRate = 1);
                              }
                            }
                          }
                        }
                      }),
                      (R.estimateLiveEdge = function e() {
                        var R = this.levelDetails;
                        return null === R ? null : R.edge + R.age;
                      }),
                      (R.computeLatency = function e() {
                        var R = this.estimateLiveEdge();
                        return null === R ? null : R - this.currentTime;
                      }),
                      (function o(R, I, C) {
                        return I && s(R.prototype, I), C && s(R, C), R;
                      })(e, [
                        {
                          key: 'latency',
                          get: function e() {
                            return this._latency || 0;
                          },
                        },
                        {
                          key: 'maxLatency',
                          get: function e() {
                            var R = this.config,
                              I = this.levelDetails;
                            return void 0 !== R.liveMaxLatencyDuration
                              ? R.liveMaxLatencyDuration
                              : I
                              ? R.liveMaxLatencyDurationCount * I.targetduration
                              : 0;
                          },
                        },
                        {
                          key: 'targetLatency',
                          get: function e() {
                            var R = this.levelDetails;
                            if (null === R) return null;
                            var I = R.holdBack,
                              C = R.partHoldBack,
                              O = R.targetduration,
                              w = this.config,
                              _ = w.liveSyncDuration,
                              x = w.liveSyncDurationCount,
                              P = w.lowLatencyMode,
                              F = this.hls.userConfig,
                              M = (P && C) || I;
                            (F.liveSyncDuration || F.liveSyncDurationCount || 0 === M) &&
                              (M = void 0 !== _ ? _ : x * O);
                            var N = O;
                            return M + Math.min(1 * this.stallCount, N);
                          },
                        },
                        {
                          key: 'liveSyncPosition',
                          get: function e() {
                            var R = this.estimateLiveEdge(),
                              I = this.targetLatency,
                              C = this.levelDetails;
                            if (null === R || null === I || null === C) return null;
                            var O = C.edge,
                              w = R - I - this.edgeStalled,
                              _ = O - C.totalduration,
                              x = O - ((this.config.lowLatencyMode && C.partTarget) || C.targetduration);
                            return Math.min(Math.max(_, w), x);
                          },
                        },
                        {
                          key: 'drift',
                          get: function e() {
                            var R = this.levelDetails;
                            return null === R ? 1 : R.drift;
                          },
                        },
                        {
                          key: 'edgeStalled',
                          get: function e() {
                            var R = this.levelDetails;
                            if (null === R) return 0;
                            var I = 3 * ((this.config.lowLatencyMode && R.partTarget) || R.targetduration);
                            return Math.max(R.age - I, 0);
                          },
                        },
                        {
                          key: 'forwardBufferLength',
                          get: function e() {
                            var R = this.media,
                              I = this.levelDetails;
                            if (!R || !I) return 0;
                            var C = R.buffered.length;
                            return C ? R.buffered.end(C - 1) : I.edge - this.currentTime;
                          },
                        },
                      ]),
                      e
                    );
                  })();
                },
                './src/controller/level-controller.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return B;
                    });
                  var O = C('./src/types/level.ts'),
                    w = C('./src/events.ts'),
                    _ = C('./src/errors.ts'),
                    x = C('./src/utils/codecs.ts'),
                    P = C('./src/controller/level-helper.ts'),
                    F = C('./src/controller/base-playlist-controller.ts'),
                    M = C('./src/types/loader.ts');
                  function f() {
                    return (f =
                      Object.assign ||
                      function (R) {
                        for (var I = 1; I < arguments.length; I++) {
                          var C = arguments[I];
                          for (var O in C) Object.prototype.hasOwnProperty.call(C, O) && (R[O] = C[O]);
                        }
                        return R;
                      }).apply(this, arguments);
                  }
                  function c(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  function v(R, I) {
                    return (v =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  var N = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                    B = (function (R) {
                      function t(I) {
                        var C;
                        return (
                          ((C = R.call(this, I, '[level-controller]') || this)._levels = []),
                          (C._firstLevel = -1),
                          (C._startLevel = void 0),
                          (C.currentLevelIndex = -1),
                          (C.manualLevelIndex = -1),
                          (C.onParsedComplete = void 0),
                          C._registerListeners(),
                          C
                        );
                      }
                      !(function h(R, I) {
                        (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), v(R, I);
                      })(t, R);
                      var I = t.prototype;
                      return (
                        (I._registerListeners = function e() {
                          var R = this.hls;
                          R.on(w.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                            R.on(w.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                            R.on(w.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                            R.on(w.Events.FRAG_LOADED, this.onFragLoaded, this),
                            R.on(w.Events.ERROR, this.onError, this);
                        }),
                        (I._unregisterListeners = function e() {
                          var R = this.hls;
                          R.off(w.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                            R.off(w.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                            R.off(w.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                            R.off(w.Events.FRAG_LOADED, this.onFragLoaded, this),
                            R.off(w.Events.ERROR, this.onError, this);
                        }),
                        (I.destroy = function t() {
                          this._unregisterListeners(),
                            (this.manualLevelIndex = -1),
                            (this._levels.length = 0),
                            R.prototype.destroy.call(this);
                        }),
                        (I.startLoad = function t() {
                          this._levels.forEach(function (R) {
                            R.loadError = 0;
                          }),
                            R.prototype.startLoad.call(this);
                        }),
                        (I.onManifestLoaded = function e(R, I) {
                          var C,
                            F,
                            M = [],
                            B = [],
                            U = [],
                            G = {},
                            j = !1,
                            K = !1,
                            H = !1;
                          if (
                            (I.levels.forEach(function (R) {
                              var I = R.attrs;
                              (j = j || !(!R.width || !R.height)),
                                (K = K || !!R.videoCodec),
                                (H = H || !!R.audioCodec),
                                N &&
                                  R.audioCodec &&
                                  -1 !== R.audioCodec.indexOf('mp4a.40.34') &&
                                  (R.audioCodec = void 0);
                              var C = R.bitrate + '-' + R.attrs.RESOLUTION + '-' + R.attrs.CODECS;
                              (F = G[C]) ? F.url.push(R.url) : ((F = new O.Level(R)), (G[C] = F), M.push(F)),
                                I &&
                                  (I.AUDIO && Object(P.addGroupId)(F, 'audio', I.AUDIO),
                                  I.SUBTITLES && Object(P.addGroupId)(F, 'text', I.SUBTITLES));
                            }),
                            (j || K) &&
                              H &&
                              (M = M.filter(function (R) {
                                var I = R.videoCodec,
                                  C = R.width,
                                  O = R.height;
                                return !!I || !(!C || !O);
                              })),
                            (M = M.filter(function (R) {
                              var I = R.audioCodec,
                                C = R.videoCodec;
                              return (
                                (!I || Object(x.isCodecSupportedInMp4)(I, 'audio')) &&
                                (!C || Object(x.isCodecSupportedInMp4)(C, 'video'))
                              );
                            })),
                            I.audioTracks &&
                              ((B = I.audioTracks.filter(function (R) {
                                return !R.audioCodec || Object(x.isCodecSupportedInMp4)(R.audioCodec, 'audio');
                              })),
                              Object(P.assignTrackIdsByGroup)(B)),
                            I.subtitles && ((U = I.subtitles), Object(P.assignTrackIdsByGroup)(U)),
                            M.length > 0)
                          ) {
                            (C = M[0].bitrate),
                              M.sort(function (R, I) {
                                return R.bitrate - I.bitrate;
                              }),
                              (this._levels = M);
                            for (var V = 0; V < M.length; V++)
                              if (M[V].bitrate === C) {
                                (this._firstLevel = V),
                                  this.log('manifest loaded, ' + M.length + ' level(s) found, first bitrate: ' + C);
                                break;
                              }
                            var W = H && !K,
                              Y = {
                                levels: M,
                                audioTracks: B,
                                subtitleTracks: U,
                                firstLevel: this._firstLevel,
                                stats: I.stats,
                                audio: H,
                                video: K,
                                altAudio:
                                  !W &&
                                  B.some(function (R) {
                                    return !!R.url;
                                  }),
                              };
                            this.hls.trigger(w.Events.MANIFEST_PARSED, Y),
                              (this.hls.config.autoStartLoad || this.hls.forceStartLoad) &&
                                this.hls.startLoad(this.hls.config.startPosition);
                          } else
                            this.hls.trigger(w.Events.ERROR, {
                              type: _.ErrorTypes.MEDIA_ERROR,
                              details: _.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                              fatal: !0,
                              url: I.url,
                              reason: 'no level with compatible codecs found in manifest',
                            });
                        }),
                        (I.onError = function t(I, C) {
                          if ((R.prototype.onError.call(this, I, C), !C.fatal)) {
                            var O = C.context,
                              w = this._levels[this.currentLevelIndex];
                            if (
                              O &&
                              ((O.type === M.PlaylistContextType.AUDIO_TRACK &&
                                w.audioGroupIds &&
                                O.groupId === w.audioGroupIds[w.urlId]) ||
                                (O.type === M.PlaylistContextType.SUBTITLE_TRACK &&
                                  w.textGroupIds &&
                                  O.groupId === w.textGroupIds[w.urlId]))
                            )
                              this.redundantFailover(this.currentLevelIndex);
                            else {
                              var x,
                                P = !1,
                                F = !0;
                              switch (C.details) {
                                case _.ErrorDetails.FRAG_LOAD_ERROR:
                                case _.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                case _.ErrorDetails.KEY_LOAD_ERROR:
                                case _.ErrorDetails.KEY_LOAD_TIMEOUT:
                                  if (C.frag) {
                                    var N = this._levels[C.frag.level];
                                    N
                                      ? (N.fragmentError++,
                                        N.fragmentError > this.hls.config.fragLoadingMaxRetry && (x = C.frag.level))
                                      : (x = C.frag.level);
                                  }
                                  break;
                                case _.ErrorDetails.LEVEL_LOAD_ERROR:
                                case _.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                  O && (O.deliveryDirectives && (F = !1), (x = O.level)), (P = !0);
                                  break;
                                case _.ErrorDetails.REMUX_ALLOC_ERROR:
                                  (x = C.level), (P = !0);
                              }
                              void 0 !== x && this.recoverLevel(C, x, P, F);
                            }
                          }
                        }),
                        (I.recoverLevel = function e(R, I, C, O) {
                          var w = R.details,
                            _ = this._levels[I];
                          if ((_.loadError++, C)) {
                            if (!this.retryLoadingOrFail(R)) return void (this.currentLevelIndex = -1);
                            R.levelRetry = !0;
                          }
                          if (O) {
                            var x = _.url.length;
                            if (x > 1 && _.loadError < x) (R.levelRetry = !0), this.redundantFailover(I);
                            else if (-1 === this.manualLevelIndex) {
                              var P = 0 === I ? this._levels.length - 1 : I - 1;
                              this.currentLevelIndex !== P &&
                                0 === this._levels[P].loadError &&
                                (this.warn(w + ': switch to ' + P), (R.levelRetry = !0), (this.hls.nextAutoLevel = P));
                            }
                          }
                        }),
                        (I.redundantFailover = function e(R) {
                          var I = this._levels[R],
                            C = I.url.length;
                          if (C > 1) {
                            var O = (I.urlId + 1) % C;
                            this.warn('Switching to redundant URL-id ' + O),
                              this._levels.forEach(function (R) {
                                R.urlId = O;
                              }),
                              (this.level = R);
                          }
                        }),
                        (I.onFragLoaded = function e(R, I) {
                          var C = I.frag;
                          if (void 0 !== C && C.type === M.PlaylistLevelType.MAIN) {
                            var O = this._levels[C.level];
                            void 0 !== O && ((O.fragmentError = 0), (O.loadError = 0));
                          }
                        }),
                        (I.onLevelLoaded = function e(R, I) {
                          var C,
                            O,
                            w = I.level,
                            _ = I.details,
                            x = this._levels[w];
                          if (!x)
                            return (
                              this.warn('Invalid level index ' + w),
                              void (
                                null !== (O = I.deliveryDirectives) &&
                                void 0 !== O &&
                                O.skip &&
                                (_.deltaUpdateFailed = !0)
                              )
                            );
                          w === this.currentLevelIndex
                            ? (0 === x.fragmentError && ((x.loadError = 0), (this.retryCount = 0)),
                              this.playlistLoaded(w, I, x.details))
                            : null !== (C = I.deliveryDirectives) &&
                              void 0 !== C &&
                              C.skip &&
                              (_.deltaUpdateFailed = !0);
                        }),
                        (I.onAudioTrackSwitched = function e(R, I) {
                          var C = this.hls.levels[this.currentLevelIndex];
                          if (C && C.audioGroupIds) {
                            for (
                              var O = -1, w = this.hls.audioTracks[I.id].groupId, _ = 0;
                              _ < C.audioGroupIds.length;
                              _++
                            )
                              if (C.audioGroupIds[_] === w) {
                                O = _;
                                break;
                              }
                            O !== C.urlId && ((C.urlId = O), this.startLoad());
                          }
                        }),
                        (I.loadPlaylist = function e(R) {
                          var I = this.currentLevelIndex,
                            C = this._levels[I];
                          if (this.canLoad && C && C.url.length > 0) {
                            var O = C.urlId,
                              _ = C.url[O];
                            if (R)
                              try {
                                _ = R.addDirectives(_);
                              } catch (e) {
                                this.warn('Could not construct new URL with HLS Delivery Directives: ' + e);
                              }
                            this.log(
                              'Attempt loading level index ' +
                                I +
                                (R ? ' at sn ' + R.msn + ' part ' + R.part : '') +
                                ' with URL-id ' +
                                O +
                                ' ' +
                                _
                            ),
                              this.clearTimer(),
                              this.hls.trigger(w.Events.LEVEL_LOADING, {
                                url: _,
                                level: I,
                                id: O,
                                deliveryDirectives: R || null,
                              });
                          }
                        }),
                        (I.removeLevel = function e(R, I) {
                          var C = function e(R, C) {
                              return C !== I;
                            },
                            O = this._levels
                              .filter(function (O, w) {
                                return (
                                  w !== R ||
                                  (O.url.length > 1 &&
                                    void 0 !== I &&
                                    ((O.url = O.url.filter(C)),
                                    O.audioGroupIds && (O.audioGroupIds = O.audioGroupIds.filter(C)),
                                    O.textGroupIds && (O.textGroupIds = O.textGroupIds.filter(C)),
                                    (O.urlId = 0),
                                    !0))
                                );
                              })
                              .map(function (R, I) {
                                var C = R.details;
                                return (
                                  null != C &&
                                    C.fragments &&
                                    C.fragments.forEach(function (R) {
                                      R.level = I;
                                    }),
                                  R
                                );
                              });
                          (this._levels = O), this.hls.trigger(w.Events.LEVELS_UPDATED, { levels: O });
                        }),
                        (function d(R, I, C) {
                          return I && c(R.prototype, I), C && c(R, C), R;
                        })(t, [
                          {
                            key: 'levels',
                            get: function e() {
                              return 0 === this._levels.length ? null : this._levels;
                            },
                          },
                          {
                            key: 'level',
                            get: function e() {
                              return this.currentLevelIndex;
                            },
                            set: function e(R) {
                              var I,
                                C = this._levels;
                              if (
                                0 !== C.length &&
                                (this.currentLevelIndex !== R || null === (I = C[R]) || void 0 === I || !I.details)
                              ) {
                                if (R < 0 || R >= C.length) {
                                  var O = R < 0;
                                  if (
                                    (this.hls.trigger(w.Events.ERROR, {
                                      type: _.ErrorTypes.OTHER_ERROR,
                                      details: _.ErrorDetails.LEVEL_SWITCH_ERROR,
                                      level: R,
                                      fatal: O,
                                      reason: 'invalid level idx',
                                    }),
                                    O)
                                  )
                                    return;
                                  R = Math.min(R, C.length - 1);
                                }
                                this.clearTimer();
                                var x = this.currentLevelIndex,
                                  P = C[x],
                                  F = C[R];
                                this.log('switching to level ' + R + ' from ' + x), (this.currentLevelIndex = R);
                                var M = f({}, F, { level: R, maxBitrate: F.maxBitrate, uri: F.uri, urlId: F.urlId });
                                delete M._urlId, this.hls.trigger(w.Events.LEVEL_SWITCHING, M);
                                var N = F.details;
                                if (!N || N.live) {
                                  var B = this.switchParams(F.uri, null == P ? void 0 : P.details);
                                  this.loadPlaylist(B);
                                }
                              }
                            },
                          },
                          {
                            key: 'manualLevel',
                            get: function e() {
                              return this.manualLevelIndex;
                            },
                            set: function e(R) {
                              (this.manualLevelIndex = R),
                                void 0 === this._startLevel && (this._startLevel = R),
                                -1 !== R && (this.level = R);
                            },
                          },
                          {
                            key: 'firstLevel',
                            get: function e() {
                              return this._firstLevel;
                            },
                            set: function e(R) {
                              this._firstLevel = R;
                            },
                          },
                          {
                            key: 'startLevel',
                            get: function e() {
                              if (void 0 === this._startLevel) {
                                var R = this.hls.config.startLevel;
                                return void 0 !== R ? R : this._firstLevel;
                              }
                              return this._startLevel;
                            },
                            set: function e(R) {
                              this._startLevel = R;
                            },
                          },
                          {
                            key: 'nextLoadLevel',
                            get: function e() {
                              return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel;
                            },
                            set: function e(R) {
                              (this.level = R), -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = R);
                            },
                          },
                        ]),
                        t
                      );
                    })(F.default);
                },
                './src/controller/level-helper.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'addGroupId', function () {
                      return n;
                    }),
                    C.d(I, 'assignTrackIdsByGroup', function () {
                      return s;
                    }),
                    C.d(I, 'updatePTS', function () {
                      return o;
                    }),
                    C.d(I, 'updateFragPTSDTS', function () {
                      return u;
                    }),
                    C.d(I, 'mergeDetails', function () {
                      return f;
                    }),
                    C.d(I, 'mapPartIntersection', function () {
                      return c;
                    }),
                    C.d(I, 'mapFragmentIntersection', function () {
                      return d;
                    }),
                    C.d(I, 'adjustSliding', function () {
                      return h;
                    }),
                    C.d(I, 'addSliding', function () {
                      return v;
                    }),
                    C.d(I, 'computeReloadInterval', function () {
                      return g;
                    }),
                    C.d(I, 'getFragmentWithSN', function () {
                      return p;
                    }),
                    C.d(I, 'getPartWith', function () {
                      return m;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/utils/logger.ts');
                  function n(R, I, C) {
                    switch (I) {
                      case 'audio':
                        R.audioGroupIds || (R.audioGroupIds = []), R.audioGroupIds.push(C);
                        break;
                      case 'text':
                        R.textGroupIds || (R.textGroupIds = []), R.textGroupIds.push(C);
                    }
                  }
                  function s(R) {
                    var I = {};
                    R.forEach(function (R) {
                      var C = R.groupId || '';
                      (R.id = I[C] = I[C] || 0), I[C]++;
                    });
                  }
                  function o(R, I, C) {
                    l(R[I], R[C]);
                  }
                  function l(R, I) {
                    var C = I.startPTS;
                    if (Object(O.isFiniteNumber)(C)) {
                      var w,
                        _ = 0;
                      I.sn > R.sn ? ((_ = C - R.start), (w = R)) : ((_ = R.start - C), (w = I)),
                        w.duration !== _ && (w.duration = _);
                    } else if (I.sn > R.sn) {
                      R.cc === I.cc && R.minEndPTS
                        ? (I.start = R.start + (R.minEndPTS - R.start))
                        : (I.start = R.start + R.duration);
                    } else I.start = Math.max(R.start - I.duration, 0);
                  }
                  function u(R, I, C, _, x, P) {
                    _ - C <= 0 &&
                      (w.logger.warn('Fragment should have a positive duration', I),
                      (_ = C + I.duration),
                      (P = x + I.duration));
                    var F = C,
                      M = _,
                      N = I.startPTS,
                      B = I.endPTS;
                    if (Object(O.isFiniteNumber)(N)) {
                      var U = Math.abs(N - C);
                      Object(O.isFiniteNumber)(I.deltaPTS) ? (I.deltaPTS = Math.max(U, I.deltaPTS)) : (I.deltaPTS = U),
                        (F = Math.max(C, N)),
                        (C = Math.min(C, N)),
                        (x = Math.min(x, I.startDTS)),
                        (M = Math.min(_, B)),
                        (_ = Math.max(_, B)),
                        (P = Math.max(P, I.endDTS));
                    }
                    I.duration = _ - C;
                    var G = C - I.start;
                    (I.appendedPTS = _),
                      (I.start = I.startPTS = C),
                      (I.maxStartPTS = F),
                      (I.startDTS = x),
                      (I.endPTS = _),
                      (I.minEndPTS = M),
                      (I.endDTS = P);
                    var j,
                      K = I.sn;
                    if (!R || K < R.startSN || K > R.endSN) return 0;
                    var H = K - R.startSN,
                      V = R.fragments;
                    for (V[H] = I, j = H; j > 0; j--) l(V[j], V[j - 1]);
                    for (j = H; j < V.length - 1; j++) l(V[j], V[j + 1]);
                    return (
                      R.fragmentHint && l(V[V.length - 1], R.fragmentHint), (R.PTSKnown = R.alignedSliding = !0), G
                    );
                  }
                  function f(R, I) {
                    for (var C = null, _ = R.fragments, x = _.length - 1; x >= 0; x--) {
                      var P = _[x].initSegment;
                      if (P) {
                        C = P;
                        break;
                      }
                    }
                    R.fragmentHint && delete R.fragmentHint.endPTS;
                    var F,
                      M = 0;
                    (d(R, I, function (R, w) {
                      R.relurl && (M = R.cc - w.cc),
                        Object(O.isFiniteNumber)(R.startPTS) &&
                          Object(O.isFiniteNumber)(R.endPTS) &&
                          ((w.start = w.startPTS = R.startPTS),
                          (w.startDTS = R.startDTS),
                          (w.appendedPTS = R.appendedPTS),
                          (w.maxStartPTS = R.maxStartPTS),
                          (w.endPTS = R.endPTS),
                          (w.endDTS = R.endDTS),
                          (w.minEndPTS = R.minEndPTS),
                          (w.duration = R.endPTS - R.startPTS),
                          w.duration && (F = w),
                          (I.PTSKnown = I.alignedSliding = !0)),
                        (w.elementaryStreams = R.elementaryStreams),
                        (w.loader = R.loader),
                        (w.stats = R.stats),
                        (w.urlId = R.urlId),
                        R.initSegment && ((w.initSegment = R.initSegment), (C = R.initSegment));
                    }),
                    C) &&
                      (I.fragmentHint ? I.fragments.concat(I.fragmentHint) : I.fragments).forEach(function (R) {
                        var I;
                        (R.initSegment &&
                          R.initSegment.relurl !== (null === (I = C) || void 0 === I ? void 0 : I.relurl)) ||
                          (R.initSegment = C);
                      });
                    if (
                      I.skippedSegments &&
                      ((I.deltaUpdateFailed = I.fragments.some(function (R) {
                        return !R;
                      })),
                      I.deltaUpdateFailed)
                    ) {
                      w.logger.warn('[level-helper] Previous playlist missing segments skipped in delta playlist');
                      for (var N = I.skippedSegments; N--; ) I.fragments.shift();
                      (I.startSN = I.fragments[0].sn), (I.startCC = I.fragments[0].cc);
                    }
                    var B = I.fragments;
                    if (M) {
                      w.logger.warn('discontinuity sliding from playlist, take drift into account');
                      for (var U = 0; U < B.length; U++) B[U].cc += M;
                    }
                    I.skippedSegments && (I.startCC = I.fragments[0].cc),
                      c(R.partList, I.partList, function (R, I) {
                        (I.elementaryStreams = R.elementaryStreams), (I.stats = R.stats);
                      }),
                      F ? u(I, F, F.startPTS, F.endPTS, F.startDTS, F.endDTS) : h(R, I),
                      B.length && (I.totalduration = I.edge - B[0].start),
                      (I.driftStartTime = R.driftStartTime),
                      (I.driftStart = R.driftStart);
                    var G = I.advancedDateTime;
                    if (I.advanced && G) {
                      var j = I.edge;
                      I.driftStart || ((I.driftStartTime = G), (I.driftStart = j)),
                        (I.driftEndTime = G),
                        (I.driftEnd = j);
                    } else
                      (I.driftEndTime = R.driftEndTime),
                        (I.driftEnd = R.driftEnd),
                        (I.advancedDateTime = R.advancedDateTime);
                  }
                  function c(R, I, C) {
                    if (R && I)
                      for (var O = 0, w = 0, _ = R.length; w <= _; w++) {
                        var x = R[w],
                          P = I[w + O];
                        x && P && x.index === P.index && x.fragment.sn === P.fragment.sn ? C(x, P) : O--;
                      }
                  }
                  function d(R, I, C) {
                    for (
                      var O = I.skippedSegments,
                        w = Math.max(R.startSN, I.startSN) - I.startSN,
                        _ = (R.fragmentHint ? 1 : 0) + (O ? I.endSN : Math.min(R.endSN, I.endSN)) - I.startSN,
                        x = I.startSN - R.startSN,
                        P = I.fragmentHint ? I.fragments.concat(I.fragmentHint) : I.fragments,
                        F = R.fragmentHint ? R.fragments.concat(R.fragmentHint) : R.fragments,
                        M = w;
                      M <= _;
                      M++
                    ) {
                      var N = F[x + M],
                        B = P[M];
                      O && !B && M < O && (B = I.fragments[M] = N), N && B && C(N, B);
                    }
                  }
                  function h(R, I) {
                    var C = I.startSN + I.skippedSegments - R.startSN,
                      O = R.fragments;
                    C < 0 || C >= O.length || v(I, O[C].start);
                  }
                  function v(R, I) {
                    if (I) {
                      for (var C = R.fragments, O = R.skippedSegments; O < C.length; O++) C[O].start += I;
                      R.fragmentHint && (R.fragmentHint.start += I);
                    }
                  }
                  function g(R, I) {
                    var C,
                      O = 1e3 * R.levelTargetDuration,
                      w = O / 2,
                      _ = R.age,
                      x = _ > 0 && _ < 3 * O,
                      P = I.loading.end - I.loading.start,
                      F = R.availabilityDelay;
                    if (!1 === R.updated)
                      if (x) {
                        var M = 333 * R.misses;
                        (C = Math.max(Math.min(w, 2 * P), M)), (R.availabilityDelay = (R.availabilityDelay || 0) + C);
                      } else C = w;
                    else x ? ((F = Math.min(F || O / 2, _)), (R.availabilityDelay = F), (C = F + O - _)) : (C = O - P);
                    return Math.round(C);
                  }
                  function p(R, I, C) {
                    if (!R || !R.details) return null;
                    var O = R.details,
                      w = O.fragments[I - O.startSN];
                    return w || ((w = O.fragmentHint) && w.sn === I ? w : I < O.startSN && C && C.sn === I ? C : null);
                  }
                  function m(R, I, C) {
                    if (!R || !R.details) return null;
                    var O = R.details.partList;
                    if (O)
                      for (var w = O.length; w--; ) {
                        var _ = O[w];
                        if (_.index === C && _.fragment.sn === I) return _;
                      }
                    return null;
                  }
                },
                './src/controller/stream-controller.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return H;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/controller/base-stream-controller.ts'),
                    _ = C('./src/is-supported.ts'),
                    x = C('./src/events.ts'),
                    P = C('./src/utils/buffer-helper.ts'),
                    F = C('./src/controller/fragment-tracker.ts'),
                    M = C('./src/types/loader.ts'),
                    N = C('./src/loader/fragment.ts'),
                    B = C('./src/demux/transmuxer-interface.ts'),
                    U = C('./src/types/transmuxer.ts'),
                    G = C('./src/controller/gap-controller.ts'),
                    j = C('./src/errors.ts'),
                    K = C('./src/utils/logger.ts');
                  function p(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  function E(R, I) {
                    return (E =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  var H = (function (R) {
                    function t(I, C) {
                      var O;
                      return (
                        ((O = R.call(this, I, C, '[stream-controller]') || this).audioCodecSwap = !1),
                        (O.gapController = null),
                        (O.level = -1),
                        (O._forceStartLoad = !1),
                        (O.altAudio = !1),
                        (O.audioOnly = !1),
                        (O.fragPlaying = null),
                        (O.onvplaying = null),
                        (O.onvseeked = null),
                        (O.fragLastKbps = 0),
                        (O.stalled = !1),
                        (O.couldBacktrack = !1),
                        (O.audioCodecSwitch = !1),
                        (O.videoBuffer = null),
                        O._registerListeners(),
                        O
                      );
                    }
                    !(function y(R, I) {
                      (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), E(R, I);
                    })(t, R);
                    var I = t.prototype;
                    return (
                      (I._registerListeners = function e() {
                        var R = this.hls;
                        R.on(x.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          R.on(x.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          R.on(x.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.on(x.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                          R.on(x.Events.LEVEL_LOADING, this.onLevelLoading, this),
                          R.on(x.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                          R.on(x.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
                          R.on(x.Events.ERROR, this.onError, this),
                          R.on(x.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                          R.on(x.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                          R.on(x.Events.BUFFER_CREATED, this.onBufferCreated, this),
                          R.on(x.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                          R.on(x.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
                          R.on(x.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                      }),
                      (I._unregisterListeners = function e() {
                        var R = this.hls;
                        R.off(x.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          R.off(x.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          R.off(x.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.off(x.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                          R.off(x.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                          R.off(x.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
                          R.off(x.Events.ERROR, this.onError, this),
                          R.off(x.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                          R.off(x.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                          R.off(x.Events.BUFFER_CREATED, this.onBufferCreated, this),
                          R.off(x.Events.BUFFER_FLUSHED, this.onBufferFlushed, this),
                          R.off(x.Events.LEVELS_UPDATED, this.onLevelsUpdated, this),
                          R.off(x.Events.FRAG_BUFFERED, this.onFragBuffered, this);
                      }),
                      (I.onHandlerDestroying = function e() {
                        this._unregisterListeners(), this.onMediaDetaching();
                      }),
                      (I.startLoad = function e(R) {
                        if (this.levels) {
                          var I = this.lastCurrentTime,
                            C = this.hls;
                          if (
                            (this.stopLoad(),
                            this.setInterval(100),
                            (this.level = -1),
                            (this.fragLoadError = 0),
                            !this.startFragRequested)
                          ) {
                            var O = C.startLevel;
                            -1 === O &&
                              (C.config.testBandwidth ? ((O = 0), (this.bitrateTest = !0)) : (O = C.nextAutoLevel)),
                              (this.level = C.nextLoadLevel = O),
                              (this.loadedmetadata = !1);
                          }
                          I > 0 &&
                            -1 === R &&
                            (this.log('Override startPosition with lastCurrentTime @' + I.toFixed(3)), (R = I)),
                            (this.state = w.State.IDLE),
                            (this.nextLoadPosition = this.startPosition = this.lastCurrentTime = R),
                            this.tick();
                        } else (this._forceStartLoad = !0), (this.state = w.State.STOPPED);
                      }),
                      (I.stopLoad = function t() {
                        (this._forceStartLoad = !1), R.prototype.stopLoad.call(this);
                      }),
                      (I.doTick = function e() {
                        switch (this.state) {
                          case w.State.IDLE:
                            this.doTickIdle();
                            break;
                          case w.State.WAITING_LEVEL:
                            var R,
                              I = this.levels,
                              C = this.level,
                              O = null == I || null === (R = I[C]) || void 0 === R ? void 0 : R.details;
                            if (O && (!O.live || this.levelLastLoaded === this.level)) {
                              if (this.waitForCdnTuneIn(O)) break;
                              this.state = w.State.IDLE;
                              break;
                            }
                            break;
                          case w.State.FRAG_LOADING_WAITING_RETRY:
                            var _,
                              x = self.performance.now(),
                              P = this.retryDate;
                            (!P || x >= P || (null !== (_ = this.media) && void 0 !== _ && _.seeking)) &&
                              (this.log('retryDate reached, switch back to IDLE state'), (this.state = w.State.IDLE));
                        }
                        this.onTickEnd();
                      }),
                      (I.onTickEnd = function t() {
                        R.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
                      }),
                      (I.doTickIdle = function e() {
                        var R,
                          I,
                          C = this.hls,
                          O = this.levelLastLoaded,
                          _ = this.levels,
                          P = this.media,
                          B = C.config,
                          U = C.nextLoadLevel;
                        if (
                          null !== O &&
                          (P || (!this.startFragRequested && B.startFragPrefetch)) &&
                          (!this.altAudio || !this.audioOnly) &&
                          _ &&
                          _[U]
                        ) {
                          var G = _[U];
                          this.level = C.nextLoadLevel = U;
                          var j = G.details;
                          if (!j || this.state === w.State.WAITING_LEVEL || (j.live && this.levelLastLoaded !== U))
                            this.state = w.State.WAITING_LEVEL;
                          else {
                            var K = this.getFwdBufferInfo(
                              this.mediaBuffer ? this.mediaBuffer : P,
                              M.PlaylistLevelType.MAIN
                            );
                            if (null !== K)
                              if (!(K.len >= this.getMaxBufferLength(G.maxBitrate))) {
                                if (this._streamEnded(K, j)) {
                                  var H = {};
                                  return (
                                    this.altAudio && (H.type = 'video'),
                                    this.hls.trigger(x.Events.BUFFER_EOS, H),
                                    void (this.state = w.State.ENDED)
                                  );
                                }
                                var V = K.end,
                                  W = this.getNextFragment(V, j);
                                if (this.couldBacktrack && !this.fragPrevious && W && 'initSegment' !== W.sn) {
                                  var Y = W.sn - j.startSN;
                                  Y > 1 && ((W = j.fragments[Y - 1]), this.fragmentTracker.removeFragment(W));
                                }
                                if (
                                  W &&
                                  this.fragmentTracker.getState(W) === F.FragmentState.OK &&
                                  this.nextLoadPosition > V
                                ) {
                                  var z =
                                    this.audioOnly && !this.altAudio
                                      ? N.ElementaryStreamTypes.AUDIO
                                      : N.ElementaryStreamTypes.VIDEO;
                                  this.afterBufferFlushed(P, z, M.PlaylistLevelType.MAIN),
                                    (W = this.getNextFragment(this.nextLoadPosition, j));
                                }
                                W &&
                                  (!W.initSegment || W.initSegment.data || this.bitrateTest || (W = W.initSegment),
                                  'identity' !==
                                    (null === (R = W.decryptdata) || void 0 === R ? void 0 : R.keyFormat) ||
                                  (null !== (I = W.decryptdata) && void 0 !== I && I.key)
                                    ? this.loadFragment(W, j, V)
                                    : this.loadKey(W, j));
                              }
                          }
                        }
                      }),
                      (I.loadFragment = function t(I, C, O) {
                        var w,
                          _ = this.fragmentTracker.getState(I);
                        if (((this.fragCurrent = I), _ === F.FragmentState.BACKTRACKED)) {
                          var x = this.fragmentTracker.getBacktrackData(I);
                          if (x) return this._handleFragmentLoadProgress(x), void this._handleFragmentLoadComplete(x);
                          _ = F.FragmentState.NOT_LOADED;
                        }
                        _ === F.FragmentState.NOT_LOADED || _ === F.FragmentState.PARTIAL
                          ? 'initSegment' === I.sn
                            ? this._loadInitSegment(I)
                            : this.bitrateTest
                            ? ((I.bitrateTest = !0),
                              this.log(
                                'Fragment ' +
                                  I.sn +
                                  ' of level ' +
                                  I.level +
                                  ' is being downloaded to test bitrate and will not be buffered'
                              ),
                              this._loadBitrateTestFrag(I))
                            : ((this.startFragRequested = !0), R.prototype.loadFragment.call(this, I, C, O))
                          : _ === F.FragmentState.APPENDING
                          ? this.reduceMaxBufferLength(I.duration) && this.fragmentTracker.removeFragment(I)
                          : 0 === (null === (w = this.media) || void 0 === w ? void 0 : w.buffered.length) &&
                            this.fragmentTracker.removeAllFragments();
                      }),
                      (I.getAppendedFrag = function e(R) {
                        var I = this.fragmentTracker.getAppendedFrag(R, M.PlaylistLevelType.MAIN);
                        return I && 'fragment' in I ? I.fragment : I;
                      }),
                      (I.getBufferedFrag = function e(R) {
                        return this.fragmentTracker.getBufferedFrag(R, M.PlaylistLevelType.MAIN);
                      }),
                      (I.followingBufferedFrag = function e(R) {
                        return R ? this.getBufferedFrag(R.end + 0.5) : null;
                      }),
                      (I.immediateLevelSwitch = function e() {
                        this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
                      }),
                      (I.nextLevelSwitch = function e() {
                        var R = this.levels,
                          I = this.media;
                        if (null != I && I.readyState) {
                          var C,
                            O = this.getAppendedFrag(I.currentTime);
                          if ((O && O.start > 1 && this.flushMainBuffer(0, O.start - 1), !I.paused && R)) {
                            var w = R[this.hls.nextLoadLevel],
                              _ = this.fragLastKbps;
                            C = _ && this.fragCurrent ? (this.fragCurrent.duration * w.maxBitrate) / (1e3 * _) + 1 : 0;
                          } else C = 0;
                          var x = this.getBufferedFrag(I.currentTime + C);
                          if (x) {
                            var P = this.followingBufferedFrag(x);
                            if (P) {
                              this.abortCurrentFrag();
                              var F = P.maxStartPTS ? P.maxStartPTS : P.start,
                                M = P.duration,
                                N = Math.max(
                                  x.end,
                                  F + Math.min(Math.max(M - this.config.maxFragLookUpTolerance, 0.5 * M), 0.75 * M)
                                );
                              this.flushMainBuffer(N, Number.POSITIVE_INFINITY);
                            }
                          }
                        }
                      }),
                      (I.abortCurrentFrag = function e() {
                        var R = this.fragCurrent;
                        (this.fragCurrent = null),
                          null != R && R.loader && R.loader.abort(),
                          this.state === w.State.KEY_LOADING && (this.state = w.State.IDLE),
                          (this.nextLoadPosition = this.getLoadPosition());
                      }),
                      (I.flushMainBuffer = function t(I, C) {
                        R.prototype.flushMainBuffer.call(this, I, C, this.altAudio ? 'video' : null);
                      }),
                      (I.onMediaAttached = function t(I, C) {
                        R.prototype.onMediaAttached.call(this, I, C);
                        var O = C.media;
                        (this.onvplaying = this.onMediaPlaying.bind(this)),
                          (this.onvseeked = this.onMediaSeeked.bind(this)),
                          O.addEventListener('playing', this.onvplaying),
                          O.addEventListener('seeked', this.onvseeked),
                          (this.gapController = new G.default(this.config, O, this.fragmentTracker, this.hls));
                      }),
                      (I.onMediaDetaching = function t() {
                        var I = this.media;
                        I &&
                          (I.removeEventListener('playing', this.onvplaying),
                          I.removeEventListener('seeked', this.onvseeked),
                          (this.onvplaying = this.onvseeked = null),
                          (this.videoBuffer = null)),
                          (this.fragPlaying = null),
                          this.gapController && (this.gapController.destroy(), (this.gapController = null)),
                          R.prototype.onMediaDetaching.call(this);
                      }),
                      (I.onMediaPlaying = function e() {
                        this.tick();
                      }),
                      (I.onMediaSeeked = function e() {
                        var R = this.media,
                          I = R ? R.currentTime : null;
                        Object(O.isFiniteNumber)(I) && this.log('Media seeked to ' + I.toFixed(3)), this.tick();
                      }),
                      (I.onManifestLoading = function e() {
                        this.log('Trigger BUFFER_RESET'),
                          this.hls.trigger(x.Events.BUFFER_RESET, void 0),
                          this.fragmentTracker.removeAllFragments(),
                          (this.couldBacktrack = this.stalled = !1),
                          (this.startPosition = this.lastCurrentTime = 0),
                          (this.fragPlaying = null);
                      }),
                      (I.onManifestParsed = function e(R, I) {
                        var C,
                          O = !1,
                          w = !1;
                        I.levels.forEach(function (R) {
                          (C = R.audioCodec) &&
                            (-1 !== C.indexOf('mp4a.40.2') && (O = !0), -1 !== C.indexOf('mp4a.40.5') && (w = !0));
                        }),
                          (this.audioCodecSwitch = O && w && !Object(_.changeTypeSupported)()),
                          this.audioCodecSwitch &&
                            this.log('Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC'),
                          (this.levels = I.levels),
                          (this.startFragRequested = !1);
                      }),
                      (I.onLevelLoading = function e(R, I) {
                        var C = this.levels;
                        if (C && this.state === w.State.IDLE) {
                          var O = C[I.level];
                          (!O.details ||
                            (O.details.live && this.levelLastLoaded !== I.level) ||
                            this.waitForCdnTuneIn(O.details)) &&
                            (this.state = w.State.WAITING_LEVEL);
                        }
                      }),
                      (I.onLevelLoaded = function e(R, I) {
                        var C,
                          O = this.levels,
                          _ = I.level,
                          P = I.details,
                          F = P.totalduration;
                        if (O) {
                          this.log(
                            'Level ' +
                              _ +
                              ' loaded [' +
                              P.startSN +
                              ',' +
                              P.endSN +
                              '], cc [' +
                              P.startCC +
                              ', ' +
                              P.endCC +
                              '] duration:' +
                              F
                          );
                          var M = this.fragCurrent;
                          !M ||
                            (this.state !== w.State.FRAG_LOADING &&
                              this.state !== w.State.FRAG_LOADING_WAITING_RETRY) ||
                            (M.level !== I.level && M.loader && ((this.state = w.State.IDLE), M.loader.abort()));
                          var N = O[_],
                            B = 0;
                          if (P.live || (null !== (C = N.details) && void 0 !== C && C.live)) {
                            if ((P.fragments[0] || (P.deltaUpdateFailed = !0), P.deltaUpdateFailed)) return;
                            B = this.alignPlaylists(P, N.details);
                          }
                          if (
                            ((N.details = P),
                            (this.levelLastLoaded = _),
                            this.hls.trigger(x.Events.LEVEL_UPDATED, { details: P, level: _ }),
                            this.state === w.State.WAITING_LEVEL)
                          ) {
                            if (this.waitForCdnTuneIn(P)) return;
                            this.state = w.State.IDLE;
                          }
                          this.startFragRequested
                            ? P.live && this.synchronizeToLiveEdge(P)
                            : this.setStartPosition(P, B),
                            this.tick();
                        } else this.warn('Levels were reset while loading level ' + _);
                      }),
                      (I._handleFragmentLoadProgress = function e(R) {
                        var I,
                          C = R.frag,
                          O = R.part,
                          w = R.payload,
                          _ = this.levels;
                        if (_) {
                          var x = _[C.level],
                            P = x.details;
                          if (P) {
                            var F = x.videoCodec,
                              N = P.PTSKnown || !P.live,
                              G = null === (I = C.initSegment) || void 0 === I ? void 0 : I.data,
                              j = this._getAudioCodec(x),
                              K = (this.transmuxer =
                                this.transmuxer ||
                                new B.default(
                                  this.hls,
                                  M.PlaylistLevelType.MAIN,
                                  this._handleTransmuxComplete.bind(this),
                                  this._handleTransmuxerFlush.bind(this)
                                )),
                              H = O ? O.index : -1,
                              V = -1 !== H,
                              W = new U.ChunkMetadata(C.level, C.sn, C.stats.chunkCount, w.byteLength, H, V),
                              Y = this.initPTS[C.cc];
                            K.push(w, G, j, F, C, O, P.totalduration, N, W, Y);
                          } else
                            this.warn(
                              'Dropping fragment ' + C.sn + ' of level ' + C.level + ' after level details were reset'
                            );
                        } else
                          this.warn(
                            'Levels were reset while fragment load was in progress. Fragment ' +
                              C.sn +
                              ' of level ' +
                              C.level +
                              ' will not be buffered'
                          );
                      }),
                      (I.onAudioTrackSwitching = function e(R, I) {
                        var C = this.altAudio,
                          O = !!I.url,
                          w = I.id;
                        if (!O) {
                          if (this.mediaBuffer !== this.media) {
                            this.log('Switching on main audio, use media.buffered to schedule main fragment loading'),
                              (this.mediaBuffer = this.media);
                            var _ = this.fragCurrent;
                            null != _ &&
                              _.loader &&
                              (this.log('Switching to main audio track, cancel main fragment load'), _.loader.abort()),
                              this.resetTransmuxer(),
                              this.resetLoadingState();
                          } else this.audioOnly && this.resetTransmuxer();
                          var P = this.hls;
                          C &&
                            P.trigger(x.Events.BUFFER_FLUSHING, {
                              startOffset: 0,
                              endOffset: Number.POSITIVE_INFINITY,
                              type: 'audio',
                            }),
                            P.trigger(x.Events.AUDIO_TRACK_SWITCHED, { id: w });
                        }
                      }),
                      (I.onAudioTrackSwitched = function e(R, I) {
                        var C = I.id,
                          O = !!this.hls.audioTracks[C].url;
                        if (O) {
                          var w = this.videoBuffer;
                          w &&
                            this.mediaBuffer !== w &&
                            (this.log(
                              'Switching on alternate audio, use video.buffered to schedule main fragment loading'
                            ),
                            (this.mediaBuffer = w));
                        }
                        (this.altAudio = O), this.tick();
                      }),
                      (I.onBufferCreated = function e(R, I) {
                        var C,
                          O,
                          w = I.tracks,
                          _ = !1;
                        for (var x in w) {
                          var P = w[x];
                          if ('main' === P.id) {
                            if (((O = x), (C = P), 'video' === x)) {
                              var F = w[x];
                              F && (this.videoBuffer = F.buffer);
                            }
                          } else _ = !0;
                        }
                        _ && C
                          ? (this.log(
                              'Alternate track found, use ' + O + '.buffered to schedule main fragment loading'
                            ),
                            (this.mediaBuffer = C.buffer))
                          : (this.mediaBuffer = this.media);
                      }),
                      (I.onFragBuffered = function e(R, I) {
                        var C = I.frag,
                          O = I.part;
                        if (!C || C.type === M.PlaylistLevelType.MAIN) {
                          if (this.fragContextChanged(C))
                            return (
                              this.warn(
                                'Fragment ' +
                                  C.sn +
                                  (O ? ' p: ' + O.index : '') +
                                  ' of level ' +
                                  C.level +
                                  ' finished buffering, but was aborted. state: ' +
                                  this.state
                              ),
                              void (this.state === w.State.PARSED && (this.state = w.State.IDLE))
                            );
                          var _ = O ? O.stats : C.stats;
                          (this.fragLastKbps = Math.round((8 * _.total) / (_.buffering.end - _.loading.first))),
                            'initSegment' !== C.sn && (this.fragPrevious = C),
                            this.fragBufferedComplete(C, O);
                        }
                      }),
                      (I.onError = function e(R, I) {
                        switch (I.details) {
                          case j.ErrorDetails.FRAG_LOAD_ERROR:
                          case j.ErrorDetails.FRAG_LOAD_TIMEOUT:
                          case j.ErrorDetails.KEY_LOAD_ERROR:
                          case j.ErrorDetails.KEY_LOAD_TIMEOUT:
                            this.onFragmentOrKeyLoadError(M.PlaylistLevelType.MAIN, I);
                            break;
                          case j.ErrorDetails.LEVEL_LOAD_ERROR:
                          case j.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                            this.state !== w.State.ERROR &&
                              (I.fatal
                                ? (this.warn('' + I.details), (this.state = w.State.ERROR))
                                : I.levelRetry || this.state !== w.State.WAITING_LEVEL || (this.state = w.State.IDLE));
                            break;
                          case j.ErrorDetails.BUFFER_FULL_ERROR:
                            if (
                              'main' === I.parent &&
                              (this.state === w.State.PARSING || this.state === w.State.PARSED)
                            ) {
                              var C = !0,
                                O = this.getFwdBufferInfo(this.media, M.PlaylistLevelType.MAIN);
                              O && O.len > 0.5 && (C = !this.reduceMaxBufferLength(O.len)),
                                C &&
                                  (this.warn('buffer full error also media.currentTime is not buffered, flush main'),
                                  this.immediateLevelSwitch()),
                                this.resetLoadingState();
                            }
                        }
                      }),
                      (I.checkBuffer = function e() {
                        var R = this.media,
                          I = this.gapController;
                        if (R && I && R.readyState) {
                          var C = P.BufferHelper.getBuffered(R);
                          !this.loadedmetadata && C.length
                            ? ((this.loadedmetadata = !0), this.seekToStartPos())
                            : I.poll(this.lastCurrentTime),
                            (this.lastCurrentTime = R.currentTime);
                        }
                      }),
                      (I.onFragLoadEmergencyAborted = function e() {
                        (this.state = w.State.IDLE),
                          this.loadedmetadata ||
                            ((this.startFragRequested = !1), (this.nextLoadPosition = this.startPosition)),
                          this.tickImmediate();
                      }),
                      (I.onBufferFlushed = function e(R, I) {
                        var C = I.type;
                        if (C !== N.ElementaryStreamTypes.AUDIO || (this.audioOnly && !this.altAudio)) {
                          var O =
                            (C === N.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                          this.afterBufferFlushed(O, C, M.PlaylistLevelType.MAIN);
                        }
                      }),
                      (I.onLevelsUpdated = function e(R, I) {
                        this.levels = I.levels;
                      }),
                      (I.swapAudioCodec = function e() {
                        this.audioCodecSwap = !this.audioCodecSwap;
                      }),
                      (I.seekToStartPos = function e() {
                        var R = this.media,
                          I = R.currentTime,
                          C = this.startPosition;
                        if (C >= 0 && I < C) {
                          if (R.seeking)
                            return void K.logger.log('could not seek to ' + C + ', already seeking at ' + I);
                          var O = P.BufferHelper.getBuffered(R),
                            w = (O.length ? O.start(0) : 0) - C;
                          w > 0 &&
                            (w < this.config.maxBufferHole || w < this.config.maxFragLookUpTolerance) &&
                            (K.logger.log('adjusting start position by ' + w + ' to match buffer start'),
                            (C += w),
                            (this.startPosition = C)),
                            this.log('seek to target start position ' + C + ' from current time ' + I),
                            (R.currentTime = C);
                        }
                      }),
                      (I._getAudioCodec = function e(R) {
                        var I = this.config.defaultAudioCodec || R.audioCodec;
                        return (
                          this.audioCodecSwap &&
                            I &&
                            (this.log('Swapping audio codec'),
                            (I = -1 !== I.indexOf('mp4a.40.5') ? 'mp4a.40.2' : 'mp4a.40.5')),
                          I
                        );
                      }),
                      (I._loadBitrateTestFrag = function e(R) {
                        var I = this;
                        this._doFragLoad(R).then(function (C) {
                          var O = I.hls;
                          if (C && !O.nextLoadLevel && !I.fragContextChanged(R)) {
                            (I.fragLoadError = 0),
                              (I.state = w.State.IDLE),
                              (I.startFragRequested = !1),
                              (I.bitrateTest = !1);
                            var _ = R.stats;
                            (_.parsing.start =
                              _.parsing.end =
                              _.buffering.start =
                              _.buffering.end =
                                self.performance.now()),
                              O.trigger(x.Events.FRAG_LOADED, C);
                          }
                        });
                      }),
                      (I._handleTransmuxComplete = function e(R) {
                        var I,
                          C = 'main',
                          _ = this.hls,
                          P = R.remuxResult,
                          F = R.chunkMeta,
                          M = this.getCurrentContext(F);
                        if (!M)
                          return (
                            this.warn(
                              'The loading context changed while buffering fragment ' +
                                F.sn +
                                ' of level ' +
                                F.level +
                                '. This chunk will not be buffered.'
                            ),
                            void this.resetLiveStartWhenNotLoaded(F.level)
                          );
                        var B = M.frag,
                          U = M.part,
                          G = M.level,
                          j = P.video,
                          K = P.text,
                          H = P.id3,
                          V = P.initSegment,
                          W = this.altAudio ? void 0 : P.audio;
                        if (!this.fragContextChanged(B)) {
                          if (((this.state = w.State.PARSING), V)) {
                            V.tracks &&
                              (this._bufferInitSegment(G, V.tracks, B, F),
                              _.trigger(x.Events.FRAG_PARSING_INIT_SEGMENT, { frag: B, id: C, tracks: V.tracks }));
                            var Y = V.initPTS,
                              z = V.timescale;
                            Object(O.isFiniteNumber)(Y) &&
                              ((this.initPTS[B.cc] = Y),
                              _.trigger(x.Events.INIT_PTS_FOUND, { frag: B, id: C, initPTS: Y, timescale: z }));
                          }
                          if (j && !1 !== P.independent) {
                            if (G.details) {
                              var X = j.startPTS,
                                q = j.endPTS,
                                Z = j.startDTS,
                                Q = j.endDTS;
                              if (U) U.elementaryStreams[j.type] = { startPTS: X, endPTS: q, startDTS: Z, endDTS: Q };
                              else if (
                                (j.firstKeyFrame && j.independent && (this.couldBacktrack = !0),
                                j.dropped && j.independent)
                              ) {
                                if (this.getLoadPosition() + this.config.maxBufferHole < X)
                                  return void this.backtrack(B);
                                B.setElementaryStreamInfo(j.type, B.start, q, B.start, Q, !0);
                              }
                              B.setElementaryStreamInfo(j.type, X, q, Z, Q), this.bufferFragmentData(j, B, U, F);
                            }
                          } else if (!1 === P.independent) return void this.backtrack(B);
                          if (W) {
                            var J = W.startPTS,
                              $ = W.endPTS,
                              ee = W.startDTS,
                              te = W.endDTS;
                            U &&
                              (U.elementaryStreams[N.ElementaryStreamTypes.AUDIO] = {
                                startPTS: J,
                                endPTS: $,
                                startDTS: ee,
                                endDTS: te,
                              }),
                              B.setElementaryStreamInfo(N.ElementaryStreamTypes.AUDIO, J, $, ee, te),
                              this.bufferFragmentData(W, B, U, F);
                          }
                          if (null != H && null !== (I = H.samples) && void 0 !== I && I.length) {
                            var re = { frag: B, id: C, samples: H.samples };
                            _.trigger(x.Events.FRAG_PARSING_METADATA, re);
                          }
                          if (K) {
                            var ie = { frag: B, id: C, samples: K.samples };
                            _.trigger(x.Events.FRAG_PARSING_USERDATA, ie);
                          }
                        }
                      }),
                      (I._bufferInitSegment = function e(R, I, C, O) {
                        var _ = this;
                        if (this.state === w.State.PARSING) {
                          (this.audioOnly = !!I.audio && !I.video), this.altAudio && !this.audioOnly && delete I.audio;
                          var P = I.audio,
                            F = I.video,
                            M = I.audiovideo;
                          if (P) {
                            var N = R.audioCodec,
                              B = navigator.userAgent.toLowerCase();
                            this.audioCodecSwitch &&
                              (N && (N = -1 !== N.indexOf('mp4a.40.5') ? 'mp4a.40.2' : 'mp4a.40.5'),
                              1 !== P.metadata.channelCount && -1 === B.indexOf('firefox') && (N = 'mp4a.40.5')),
                              -1 !== B.indexOf('android') &&
                                'audio/mpeg' !== P.container &&
                                ((N = 'mp4a.40.2'), this.log('Android: force audio codec to ' + N)),
                              R.audioCodec &&
                                R.audioCodec !== N &&
                                this.log('Swapping manifest audio codec "' + R.audioCodec + '" for "' + N + '"'),
                              (P.levelCodec = N),
                              (P.id = 'main'),
                              this.log(
                                'Init audio buffer, container:' +
                                  P.container +
                                  ', codecs[selected/level/parsed]=[' +
                                  (N || '') +
                                  '/' +
                                  (R.audioCodec || '') +
                                  '/' +
                                  P.codec +
                                  ']'
                              );
                          }
                          F &&
                            ((F.levelCodec = R.videoCodec),
                            (F.id = 'main'),
                            this.log(
                              'Init video buffer, container:' +
                                F.container +
                                ', codecs[level/parsed]=[' +
                                (R.videoCodec || '') +
                                '/' +
                                F.codec +
                                ']'
                            )),
                            M &&
                              this.log(
                                'Init audiovideo buffer, container:' +
                                  M.container +
                                  ', codecs[level/parsed]=[' +
                                  (R.attrs.CODECS || '') +
                                  '/' +
                                  M.codec +
                                  ']'
                              ),
                            this.hls.trigger(x.Events.BUFFER_CODECS, I),
                            Object.keys(I).forEach(function (R) {
                              var w = I[R].initSegment;
                              null != w &&
                                w.byteLength &&
                                _.hls.trigger(x.Events.BUFFER_APPENDING, {
                                  type: R,
                                  data: w,
                                  frag: C,
                                  part: null,
                                  chunkMeta: O,
                                  parent: C.type,
                                });
                            }),
                            this.tick();
                        }
                      }),
                      (I.backtrack = function e(R) {
                        (this.couldBacktrack = !0), this.resetTransmuxer(), this.flushBufferGap(R);
                        var I = this.fragmentTracker.backtrack(R);
                        (this.fragPrevious = null),
                          (this.nextLoadPosition = R.start),
                          I ? this.resetFragmentLoading(R) : (this.state = w.State.BACKTRACKING);
                      }),
                      (I.checkFragmentChanged = function e() {
                        var R = this.media,
                          I = null;
                        if (R && R.readyState > 1 && !1 === R.seeking) {
                          var C = R.currentTime;
                          if (
                            (P.BufferHelper.isBuffered(R, C)
                              ? (I = this.getAppendedFrag(C))
                              : P.BufferHelper.isBuffered(R, C + 0.1) && (I = this.getAppendedFrag(C + 0.1)),
                            I)
                          ) {
                            var O = this.fragPlaying,
                              w = I.level;
                            (O && I.sn === O.sn && O.level === w && I.urlId === O.urlId) ||
                              (this.hls.trigger(x.Events.FRAG_CHANGED, { frag: I }),
                              (O && O.level === w) || this.hls.trigger(x.Events.LEVEL_SWITCHED, { level: w }),
                              (this.fragPlaying = I));
                          }
                        }
                      }),
                      (function m(R, I, C) {
                        return I && p(R.prototype, I), C && p(R, C), R;
                      })(t, [
                        {
                          key: 'nextLevel',
                          get: function e() {
                            var R = this.nextBufferedFrag;
                            return R ? R.level : -1;
                          },
                        },
                        {
                          key: 'currentLevel',
                          get: function e() {
                            var R = this.media;
                            if (R) {
                              var I = this.getAppendedFrag(R.currentTime);
                              if (I) return I.level;
                            }
                            return -1;
                          },
                        },
                        {
                          key: 'nextBufferedFrag',
                          get: function e() {
                            var R = this.media;
                            if (R) {
                              var I = this.getAppendedFrag(R.currentTime);
                              return this.followingBufferedFrag(I);
                            }
                            return null;
                          },
                        },
                        {
                          key: 'forceStartLoad',
                          get: function e() {
                            return this._forceStartLoad;
                          },
                        },
                      ]),
                      t
                    );
                  })(w.default);
                },
                './src/controller/subtitle-stream-controller.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'SubtitleStreamController', function () {
                      return U;
                    });
                  var O = C('./src/events.ts'),
                    w = C('./src/utils/buffer-helper.ts'),
                    _ = C('./src/controller/fragment-finders.ts'),
                    x = C('./src/utils/discontinuities.ts'),
                    P = C('./src/controller/level-helper.ts'),
                    F = C('./src/controller/fragment-tracker.ts'),
                    M = C('./src/controller/base-stream-controller.ts'),
                    N = C('./src/types/loader.ts'),
                    B = C('./src/types/level.ts');
                  function d(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  function g(R, I) {
                    return (g =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  var U = (function (R) {
                    function t(I, C) {
                      var O;
                      return (
                        ((O = R.call(this, I, C, '[subtitle-stream-controller]') || this).levels = []),
                        (O.currentTrackId = -1),
                        (O.tracksBuffered = []),
                        (O.mainDetails = null),
                        O._registerListeners(),
                        O
                      );
                    }
                    !(function v(R, I) {
                      (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), g(R, I);
                    })(t, R);
                    var I = t.prototype;
                    return (
                      (I.onHandlerDestroying = function e() {
                        this._unregisterListeners(), (this.mainDetails = null);
                      }),
                      (I._registerListeners = function e() {
                        var R = this.hls;
                        R.on(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          R.on(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          R.on(O.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.on(O.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                          R.on(O.Events.ERROR, this.onError, this),
                          R.on(O.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                          R.on(O.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                          R.on(O.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                          R.on(O.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                          R.on(O.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                      }),
                      (I._unregisterListeners = function e() {
                        var R = this.hls;
                        R.off(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          R.off(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          R.off(O.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.off(O.Events.LEVEL_LOADED, this.onLevelLoaded, this),
                          R.off(O.Events.ERROR, this.onError, this),
                          R.off(O.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                          R.off(O.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                          R.off(O.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                          R.off(O.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                          R.off(O.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                      }),
                      (I.startLoad = function e() {
                        this.stopLoad(), (this.state = M.State.IDLE), this.setInterval(500), this.tick();
                      }),
                      (I.onManifestLoading = function e() {
                        (this.mainDetails = null), this.fragmentTracker.removeAllFragments();
                      }),
                      (I.onLevelLoaded = function e(R, I) {
                        this.mainDetails = I.details;
                      }),
                      (I.onSubtitleFragProcessed = function e(R, I) {
                        var C = I.frag,
                          O = I.success;
                        if (((this.fragPrevious = C), (this.state = M.State.IDLE), O)) {
                          var w = this.tracksBuffered[this.currentTrackId];
                          if (w) {
                            for (var _, x = C.start, P = 0; P < w.length; P++)
                              if (x >= w[P].start && x <= w[P].end) {
                                _ = w[P];
                                break;
                              }
                            var F = C.start + C.duration;
                            _ ? (_.end = F) : ((_ = { start: x, end: F }), w.push(_)),
                              this.fragmentTracker.fragBuffered(C);
                          }
                        }
                      }),
                      (I.onBufferFlushing = function e(R, I) {
                        var C = I.startOffset,
                          O = I.endOffset;
                        if (0 === C && O !== Number.POSITIVE_INFINITY) {
                          var w = this.currentTrackId,
                            _ = this.levels;
                          if (!_.length || !_[w] || !_[w].details) return;
                          var x = O - _[w].details.targetduration;
                          if (x <= 0) return;
                          (I.endOffsetSubtitles = Math.max(0, x)),
                            this.tracksBuffered.forEach(function (R) {
                              for (var I = 0; I < R.length; )
                                if (R[I].end <= x) R.shift();
                                else {
                                  if (!(R[I].start < x)) break;
                                  (R[I].start = x), I++;
                                }
                            }),
                            this.fragmentTracker.removeFragmentsInRange(C, x, N.PlaylistLevelType.SUBTITLE);
                        }
                      }),
                      (I.onError = function e(R, I) {
                        var C,
                          O = I.frag;
                        O &&
                          O.type === N.PlaylistLevelType.SUBTITLE &&
                          (null !== (C = this.fragCurrent) &&
                            void 0 !== C &&
                            C.loader &&
                            this.fragCurrent.loader.abort(),
                          (this.state = M.State.IDLE));
                      }),
                      (I.onSubtitleTracksUpdated = function e(R, I) {
                        var C = this,
                          O = I.subtitleTracks;
                        (this.tracksBuffered = []),
                          (this.levels = O.map(function (R) {
                            return new B.Level(R);
                          })),
                          this.fragmentTracker.removeAllFragments(),
                          (this.fragPrevious = null),
                          this.levels.forEach(function (R) {
                            C.tracksBuffered[R.id] = [];
                          }),
                          (this.mediaBuffer = null);
                      }),
                      (I.onSubtitleTrackSwitch = function e(R, I) {
                        if (((this.currentTrackId = I.id), this.levels.length && -1 !== this.currentTrackId)) {
                          var C = this.levels[this.currentTrackId];
                          null != C && C.details
                            ? (this.mediaBuffer = this.mediaBufferTimeRanges)
                            : (this.mediaBuffer = null),
                            C && this.setInterval(500);
                        } else this.clearInterval();
                      }),
                      (I.onSubtitleTrackLoaded = function e(R, I) {
                        var C,
                          O = I.details,
                          w = I.id,
                          F = this.currentTrackId,
                          N = this.levels;
                        if (N.length) {
                          var B = N[F];
                          if (!(w >= N.length || w !== F) && B) {
                            if (
                              ((this.mediaBuffer = this.mediaBufferTimeRanges),
                              O.live || (null !== (C = B.details) && void 0 !== C && C.live))
                            ) {
                              var U = this.mainDetails;
                              if (O.deltaUpdateFailed || !U) return;
                              var G = U.fragments[0];
                              if (B.details)
                                0 === this.alignPlaylists(O, B.details) && G && Object(P.addSliding)(O, G.start);
                              else
                                O.hasProgramDateTime && U.hasProgramDateTime
                                  ? Object(x.alignMediaPlaylistByPDT)(O, U)
                                  : G && Object(P.addSliding)(O, G.start);
                            }
                            if (
                              ((B.details = O),
                              (this.levelLastLoaded = w),
                              this.tick(),
                              O.live && !this.fragCurrent && this.media && this.state === M.State.IDLE)
                            )
                              Object(_.findFragmentByPTS)(null, O.fragments, this.media.currentTime, 0) ||
                                (this.warn('Subtitle playlist not aligned with playback'), (B.details = void 0));
                          }
                        }
                      }),
                      (I._handleFragmentLoadComplete = function e(R) {
                        var I = R.frag,
                          C = R.payload,
                          w = I.decryptdata,
                          _ = this.hls;
                        if (
                          !this.fragContextChanged(I) &&
                          C &&
                          C.byteLength > 0 &&
                          w &&
                          w.key &&
                          w.iv &&
                          'AES-128' === w.method
                        ) {
                          var x = performance.now();
                          this.decrypter
                            .webCryptoDecrypt(new Uint8Array(C), w.key.buffer, w.iv.buffer)
                            .then(function (R) {
                              var C = performance.now();
                              _.trigger(O.Events.FRAG_DECRYPTED, {
                                frag: I,
                                payload: R,
                                stats: { tstart: x, tdecrypt: C },
                              });
                            });
                        }
                      }),
                      (I.doTick = function e() {
                        if (this.media) {
                          if (this.state === M.State.IDLE) {
                            var R,
                              I = this.currentTrackId,
                              C = this.levels;
                            if (!C.length || !C[I] || !C[I].details) return;
                            var O = C[I].details,
                              x = O.targetduration,
                              P = this.config,
                              N = this.media,
                              B = w.BufferHelper.bufferedInfo(
                                this.mediaBufferTimeRanges,
                                N.currentTime - x,
                                P.maxBufferHole
                              ),
                              U = B.end;
                            if (B.len > this.getMaxBufferLength() + x) return;
                            console.assert(
                              O,
                              'Subtitle track details are defined on idle subtitle stream controller tick'
                            );
                            var G,
                              j = O.fragments,
                              K = j.length,
                              H = O.edge,
                              V = this.fragPrevious;
                            if (U < H) {
                              var W = P.maxFragLookUpTolerance;
                              !(G = Object(_.findFragmentByPTS)(V, j, U, W)) && V && V.start < j[0].start && (G = j[0]);
                            } else G = j[K - 1];
                            null !== (R = G) && void 0 !== R && R.encrypted
                              ? this.loadKey(G, O)
                              : G &&
                                this.fragmentTracker.getState(G) === F.FragmentState.NOT_LOADED &&
                                this.loadFragment(G, O, U);
                          }
                        } else this.state = M.State.IDLE;
                      }),
                      (I.loadFragment = function t(I, C, O) {
                        (this.fragCurrent = I), R.prototype.loadFragment.call(this, I, C, O);
                      }),
                      (function h(R, I, C) {
                        return I && d(R.prototype, I), C && d(R, C), R;
                      })(t, [
                        {
                          key: 'mediaBufferTimeRanges',
                          get: function e() {
                            return this.tracksBuffered[this.currentTrackId] || [];
                          },
                        },
                      ]),
                      t
                    );
                  })(M.default);
                },
                './src/controller/subtitle-track-controller.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/events.ts'),
                    w = C('./src/utils/texttrack-utils.ts'),
                    _ = C('./src/controller/base-playlist-controller.ts'),
                    x = C('./src/types/loader.ts');
                  function o(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  function f(R, I) {
                    return (f =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  var P = (function (R) {
                    function t(I) {
                      var C;
                      return (
                        ((C = R.call(this, I, '[subtitle-track-controller]') || this).media = null),
                        (C.tracks = []),
                        (C.groupId = null),
                        (C.tracksInGroup = []),
                        (C.trackId = -1),
                        (C.selectDefaultTrack = !0),
                        (C.queuedDefaultTrack = -1),
                        (C.trackChangeListener = function () {
                          return C.onTextTracksChanged();
                        }),
                        (C.asyncPollTrackChange = function () {
                          return C.pollTrackChange(0);
                        }),
                        (C.useTextTrackPolling = !1),
                        (C.subtitlePollingInterval = -1),
                        (C.subtitleDisplay = !0),
                        C.registerListeners(),
                        C
                      );
                    }
                    !(function u(R, I) {
                      (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), f(R, I);
                    })(t, R);
                    var I = t.prototype;
                    return (
                      (I.destroy = function t() {
                        this.unregisterListeners(),
                          (this.tracks.length = 0),
                          (this.tracksInGroup.length = 0),
                          (this.trackChangeListener = this.asyncPollTrackChange = null),
                          R.prototype.destroy.call(this);
                      }),
                      (I.registerListeners = function e() {
                        var R = this.hls;
                        R.on(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          R.on(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          R.on(O.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.on(O.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                          R.on(O.Events.LEVEL_LOADING, this.onLevelLoading, this),
                          R.on(O.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                          R.on(O.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                          R.on(O.Events.ERROR, this.onError, this);
                      }),
                      (I.unregisterListeners = function e() {
                        var R = this.hls;
                        R.off(O.Events.MEDIA_ATTACHED, this.onMediaAttached, this),
                          R.off(O.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          R.off(O.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.off(O.Events.MANIFEST_PARSED, this.onManifestParsed, this),
                          R.off(O.Events.LEVEL_LOADING, this.onLevelLoading, this),
                          R.off(O.Events.LEVEL_SWITCHING, this.onLevelSwitching, this),
                          R.off(O.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                          R.off(O.Events.ERROR, this.onError, this);
                      }),
                      (I.onMediaAttached = function e(R, I) {
                        (this.media = I.media),
                          this.media &&
                            (this.queuedDefaultTrack > -1 &&
                              ((this.subtitleTrack = this.queuedDefaultTrack), (this.queuedDefaultTrack = -1)),
                            (this.useTextTrackPolling = !(
                              this.media.textTracks && 'onchange' in this.media.textTracks
                            )),
                            this.useTextTrackPolling
                              ? this.pollTrackChange(500)
                              : this.media.textTracks.addEventListener('change', this.asyncPollTrackChange));
                      }),
                      (I.pollTrackChange = function e(R) {
                        self.clearInterval(this.subtitlePollingInterval),
                          (this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, R));
                      }),
                      (I.onMediaDetaching = function e() {
                        this.media &&
                          (self.clearInterval(this.subtitlePollingInterval),
                          this.useTextTrackPolling ||
                            this.media.textTracks.removeEventListener('change', this.asyncPollTrackChange),
                          this.trackId > -1 && (this.queuedDefaultTrack = this.trackId),
                          d(this.media.textTracks).forEach(function (R) {
                            Object(w.clearCurrentCues)(R);
                          }),
                          (this.subtitleTrack = -1),
                          (this.media = null));
                      }),
                      (I.onManifestLoading = function e() {
                        (this.tracks = []),
                          (this.groupId = null),
                          (this.tracksInGroup = []),
                          (this.trackId = -1),
                          (this.selectDefaultTrack = !0);
                      }),
                      (I.onManifestParsed = function e(R, I) {
                        this.tracks = I.subtitleTracks;
                      }),
                      (I.onSubtitleTrackLoaded = function e(R, I) {
                        var C = I.id,
                          O = I.details,
                          w = this.trackId,
                          _ = this.tracksInGroup[w];
                        if (_) {
                          var x = _.details;
                          (_.details = I.details),
                            this.log('subtitle track ' + C + ' loaded [' + O.startSN + '-' + O.endSN + ']'),
                            C === this.trackId && ((this.retryCount = 0), this.playlistLoaded(C, I, x));
                        } else this.warn('Invalid subtitle track id ' + C);
                      }),
                      (I.onLevelLoading = function e(R, I) {
                        this.switchLevel(I.level);
                      }),
                      (I.onLevelSwitching = function e(R, I) {
                        this.switchLevel(I.level);
                      }),
                      (I.switchLevel = function e(R) {
                        var I = this.hls.levels[R];
                        if (null != I && I.textGroupIds) {
                          var C = I.textGroupIds[I.urlId];
                          if (this.groupId !== C) {
                            var w = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0,
                              _ = this.tracks.filter(function (R) {
                                return !C || R.groupId === C;
                              });
                            this.tracksInGroup = _;
                            var x = this.findTrackId(null == w ? void 0 : w.name) || this.findTrackId();
                            this.groupId = C;
                            var P = { subtitleTracks: _ };
                            this.log(
                              'Updating subtitle tracks, ' + _.length + ' track(s) found in "' + C + '" group-id'
                            ),
                              this.hls.trigger(O.Events.SUBTITLE_TRACKS_UPDATED, P),
                              -1 !== x && this.setSubtitleTrack(x, w);
                          }
                        }
                      }),
                      (I.findTrackId = function e(R) {
                        for (var I = this.tracksInGroup, C = 0; C < I.length; C++) {
                          var O = I[C];
                          if ((!this.selectDefaultTrack || O.default) && (!R || R === O.name)) return O.id;
                        }
                        return -1;
                      }),
                      (I.onError = function t(I, C) {
                        R.prototype.onError.call(this, I, C),
                          !C.fatal &&
                            C.context &&
                            C.context.type === x.PlaylistContextType.SUBTITLE_TRACK &&
                            C.context.id === this.trackId &&
                            C.context.groupId === this.groupId &&
                            this.retryLoadingOrFail(C);
                      }),
                      (I.loadPlaylist = function e(R) {
                        var I = this.tracksInGroup[this.trackId];
                        if (this.shouldLoadTrack(I)) {
                          var C = I.id,
                            w = I.groupId,
                            _ = I.url;
                          if (R)
                            try {
                              _ = R.addDirectives(_);
                            } catch (e) {
                              this.warn('Could not construct new URL with HLS Delivery Directives: ' + e);
                            }
                          this.log('Loading subtitle playlist for id ' + C),
                            this.hls.trigger(O.Events.SUBTITLE_TRACK_LOADING, {
                              url: _,
                              id: C,
                              groupId: w,
                              deliveryDirectives: R || null,
                            });
                        }
                      }),
                      (I.toggleTrackModes = function e(R) {
                        var I = this,
                          C = this.media,
                          O = this.subtitleDisplay,
                          w = this.trackId;
                        if (C) {
                          var _ = d(C.textTracks),
                            x = _.filter(function (R) {
                              return R.groupId === I.groupId;
                            });
                          if (-1 === R)
                            [].slice.call(_).forEach(function (R) {
                              R.mode = 'disabled';
                            });
                          else {
                            var P = x[w];
                            P && (P.mode = 'disabled');
                          }
                          var F = x[R];
                          F && (F.mode = O ? 'showing' : 'hidden');
                        }
                      }),
                      (I.setSubtitleTrack = function e(R, I) {
                        var C,
                          w = this.tracksInGroup;
                        if (this.media) {
                          if (
                            (this.trackId !== R && this.toggleTrackModes(R),
                            !(
                              (this.trackId === R &&
                                (-1 === R || (null !== (C = w[R]) && void 0 !== C && C.details))) ||
                              R < -1 ||
                              R >= w.length
                            ))
                          ) {
                            this.clearTimer();
                            var _ = w[R];
                            if ((this.log('Switching to subtitle track ' + R), (this.trackId = R), _)) {
                              var x = _.id,
                                P = _.groupId,
                                F = void 0 === P ? '' : P,
                                M = _.name,
                                N = _.type,
                                B = _.url;
                              this.hls.trigger(O.Events.SUBTITLE_TRACK_SWITCH, {
                                id: x,
                                groupId: F,
                                name: M,
                                type: N,
                                url: B,
                              });
                              var U = this.switchParams(_.url, null == I ? void 0 : I.details);
                              this.loadPlaylist(U);
                            } else this.hls.trigger(O.Events.SUBTITLE_TRACK_SWITCH, { id: R });
                          }
                        } else this.queuedDefaultTrack = R;
                      }),
                      (I.onTextTracksChanged = function e() {
                        if (
                          (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval),
                          this.media && this.hls.config.renderTextTracksNatively)
                        ) {
                          for (var R = -1, I = d(this.media.textTracks), C = 0; C < I.length; C++)
                            if ('hidden' === I[C].mode) R = C;
                            else if ('showing' === I[C].mode) {
                              R = C;
                              break;
                            }
                          this.subtitleTrack !== R && (this.subtitleTrack = R);
                        }
                      }),
                      (function l(R, I, C) {
                        return I && o(R.prototype, I), C && o(R, C), R;
                      })(t, [
                        {
                          key: 'subtitleTracks',
                          get: function e() {
                            return this.tracksInGroup;
                          },
                        },
                        {
                          key: 'subtitleTrack',
                          get: function e() {
                            return this.trackId;
                          },
                          set: function e(R) {
                            this.selectDefaultTrack = !1;
                            var I = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                            this.setSubtitleTrack(R, I);
                          },
                        },
                      ]),
                      t
                    );
                  })(_.default);
                  function d(R) {
                    for (var I = [], C = 0; C < R.length; C++) {
                      var O = R[C];
                      'subtitles' === O.kind && O.label && I.push(R[C]);
                    }
                    return I;
                  }
                  I.default = P;
                },
                './src/controller/timeline-controller.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'TimelineController', function () {
                      return U;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/events.ts'),
                    _ = C('./src/utils/cea-608-parser.ts'),
                    x = C('./src/utils/output-filter.ts'),
                    P = C('./src/utils/webvtt-parser.ts'),
                    F = C('./src/utils/texttrack-utils.ts'),
                    M = C('./src/utils/imsc1-ttml-parser.ts'),
                    N = C('./src/types/loader.ts'),
                    B = C('./src/utils/logger.ts'),
                    U = (function () {
                      function e(R) {
                        if (
                          ((this.hls = void 0),
                          (this.media = null),
                          (this.config = void 0),
                          (this.enabled = !0),
                          (this.Cues = void 0),
                          (this.textTracks = []),
                          (this.tracks = []),
                          (this.initPTS = []),
                          (this.timescale = []),
                          (this.unparsedVttFrags = []),
                          (this.captionsTracks = {}),
                          (this.nonNativeCaptionsTracks = {}),
                          (this.cea608Parser1 = void 0),
                          (this.cea608Parser2 = void 0),
                          (this.lastSn = -1),
                          (this.lastPartIndex = -1),
                          (this.prevCC = -1),
                          (this.vttCCs = { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: !1 } }),
                          (this.captionsProperties = void 0),
                          (this.hls = R),
                          (this.config = R.config),
                          (this.Cues = R.config.cueHandler),
                          (this.captionsProperties = {
                            textTrack1: {
                              label: this.config.captionsTextTrack1Label,
                              languageCode: this.config.captionsTextTrack1LanguageCode,
                            },
                            textTrack2: {
                              label: this.config.captionsTextTrack2Label,
                              languageCode: this.config.captionsTextTrack2LanguageCode,
                            },
                            textTrack3: {
                              label: this.config.captionsTextTrack3Label,
                              languageCode: this.config.captionsTextTrack3LanguageCode,
                            },
                            textTrack4: {
                              label: this.config.captionsTextTrack4Label,
                              languageCode: this.config.captionsTextTrack4LanguageCode,
                            },
                          }),
                          this.config.enableCEA708Captions)
                        ) {
                          var I = new x.default(this, 'textTrack1'),
                            C = new x.default(this, 'textTrack2'),
                            O = new x.default(this, 'textTrack3'),
                            P = new x.default(this, 'textTrack4');
                          (this.cea608Parser1 = new _.default(1, I, C)), (this.cea608Parser2 = new _.default(3, O, P));
                        }
                        R.on(w.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                          R.on(w.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                          R.on(w.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.on(w.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                          R.on(w.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                          R.on(w.Events.FRAG_LOADING, this.onFragLoading, this),
                          R.on(w.Events.FRAG_LOADED, this.onFragLoaded, this),
                          R.on(w.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                          R.on(w.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
                          R.on(w.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                          R.on(w.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                          R.on(w.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {
                          var R = this.hls;
                          R.off(w.Events.MEDIA_ATTACHING, this.onMediaAttaching, this),
                            R.off(w.Events.MEDIA_DETACHING, this.onMediaDetaching, this),
                            R.off(w.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                            R.off(w.Events.MANIFEST_LOADED, this.onManifestLoaded, this),
                            R.off(w.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                            R.off(w.Events.FRAG_LOADING, this.onFragLoading, this),
                            R.off(w.Events.FRAG_LOADED, this.onFragLoaded, this),
                            R.off(w.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                            R.off(w.Events.FRAG_DECRYPTED, this.onFragDecrypted, this),
                            R.off(w.Events.INIT_PTS_FOUND, this.onInitPtsFound, this),
                            R.off(w.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                            R.off(w.Events.BUFFER_FLUSHING, this.onBufferFlushing, this),
                            (this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null);
                        }),
                        (R.addCues = function e(R, I, C, O, _) {
                          for (var x = !1, P = _.length; P--; ) {
                            var F = _[P],
                              M = v(F[0], F[1], I, C);
                            if (
                              M >= 0 &&
                              ((F[0] = Math.min(F[0], I)), (F[1] = Math.max(F[1], C)), (x = !0), M / (C - I) > 0.5)
                            )
                              return;
                          }
                          if ((x || _.push([I, C]), this.config.renderTextTracksNatively)) {
                            var N = this.captionsTracks[R];
                            this.Cues.newCue(N, I, C, O);
                          } else {
                            var B = this.Cues.newCue(null, I, C, O);
                            this.hls.trigger(w.Events.CUES_PARSED, { type: 'captions', cues: B, track: R });
                          }
                        }),
                        (R.onInitPtsFound = function e(R, I) {
                          var C = this,
                            O = I.frag,
                            _ = I.id,
                            x = I.initPTS,
                            P = I.timescale,
                            F = this.unparsedVttFrags;
                          'main' === _ && ((this.initPTS[O.cc] = x), (this.timescale[O.cc] = P)),
                            F.length &&
                              ((this.unparsedVttFrags = []),
                              F.forEach(function (R) {
                                C.onFragLoaded(w.Events.FRAG_LOADED, R);
                              }));
                        }),
                        (R.getExistingTrack = function e(R) {
                          var I = this.media;
                          if (I)
                            for (var C = 0; C < I.textTracks.length; C++) {
                              var O = I.textTracks[C];
                              if (O[R]) return O;
                            }
                          return null;
                        }),
                        (R.createCaptionsTrack = function e(R) {
                          this.config.renderTextTracksNatively
                            ? this.createNativeTrack(R)
                            : this.createNonNativeTrack(R);
                        }),
                        (R.createNativeTrack = function e(R) {
                          if (!this.captionsTracks[R]) {
                            var I = this.captionsProperties,
                              C = this.captionsTracks,
                              O = this.media,
                              w = I[R],
                              _ = w.label,
                              x = w.languageCode,
                              P = this.getExistingTrack(R);
                            if (P) (C[R] = P), Object(F.clearCurrentCues)(C[R]), Object(F.sendAddTrackEvent)(C[R], O);
                            else {
                              var M = this.createTextTrack('captions', _, x);
                              M && ((M[R] = !0), (C[R] = M));
                            }
                          }
                        }),
                        (R.createNonNativeTrack = function e(R) {
                          if (!this.nonNativeCaptionsTracks[R]) {
                            var I = this.captionsProperties[R];
                            if (I) {
                              var C = {
                                _id: R,
                                label: I.label,
                                kind: 'captions',
                                default: !!I.media && !!I.media.default,
                                closedCaptions: I.media,
                              };
                              (this.nonNativeCaptionsTracks[R] = C),
                                this.hls.trigger(w.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [C] });
                            }
                          }
                        }),
                        (R.createTextTrack = function e(R, I, C) {
                          var O = this.media;
                          if (O) return O.addTextTrack(R, I, C);
                        }),
                        (R.onMediaAttaching = function e(R, I) {
                          (this.media = I.media), this._cleanTracks();
                        }),
                        (R.onMediaDetaching = function e() {
                          var R = this.captionsTracks;
                          Object.keys(R).forEach(function (I) {
                            Object(F.clearCurrentCues)(R[I]), delete R[I];
                          }),
                            (this.nonNativeCaptionsTracks = {});
                        }),
                        (R.onManifestLoading = function e() {
                          (this.lastSn = -1),
                            (this.lastPartIndex = -1),
                            (this.prevCC = -1),
                            (this.vttCCs = {
                              ccOffset: 0,
                              presentationOffset: 0,
                              0: { start: 0, prevCC: -1, new: !1 },
                            }),
                            this._cleanTracks(),
                            (this.tracks = []),
                            (this.captionsTracks = {}),
                            (this.nonNativeCaptionsTracks = {}),
                            (this.textTracks = []),
                            (this.unparsedVttFrags = this.unparsedVttFrags || []),
                            (this.initPTS = []),
                            (this.timescale = []),
                            this.cea608Parser1 &&
                              this.cea608Parser2 &&
                              (this.cea608Parser1.reset(), this.cea608Parser2.reset());
                        }),
                        (R._cleanTracks = function e() {
                          var R = this.media;
                          if (R) {
                            var I = R.textTracks;
                            if (I) for (var C = 0; C < I.length; C++) Object(F.clearCurrentCues)(I[C]);
                          }
                        }),
                        (R.onSubtitleTracksUpdated = function e(R, I) {
                          var C = this;
                          this.textTracks = [];
                          var O = I.subtitleTracks || [],
                            _ = O.some(function (R) {
                              return R.textCodec === M.IMSC1_CODEC;
                            });
                          if (this.config.enableWebVTT || (_ && this.config.enableIMSC1)) {
                            var x = this.tracks && O && this.tracks.length === O.length;
                            if (((this.tracks = O || []), this.config.renderTextTracksNatively)) {
                              var P = this.media ? this.media.textTracks : [];
                              this.tracks.forEach(function (R, I) {
                                var O;
                                if (I < P.length) {
                                  for (var w = null, _ = 0; _ < P.length; _++)
                                    if (h(P[_], R)) {
                                      w = P[_];
                                      break;
                                    }
                                  w && (O = w);
                                }
                                O
                                  ? Object(F.clearCurrentCues)(O)
                                  : (O = C.createTextTrack('subtitles', R.name, R.lang)) && (O.mode = 'disabled'),
                                  O && ((O.groupId = R.groupId), C.textTracks.push(O));
                              });
                            } else if (!x && this.tracks && this.tracks.length) {
                              var N = this.tracks.map(function (R) {
                                return {
                                  label: R.name,
                                  kind: R.type.toLowerCase(),
                                  default: R.default,
                                  subtitleTrack: R,
                                };
                              });
                              this.hls.trigger(w.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: N });
                            }
                          }
                        }),
                        (R.onManifestLoaded = function e(R, I) {
                          var C = this;
                          this.config.enableCEA708Captions &&
                            I.captions &&
                            I.captions.forEach(function (R) {
                              var I = /(?:CC|SERVICE)([1-4])/.exec(R.instreamId);
                              if (I) {
                                var O = 'textTrack' + I[1],
                                  w = C.captionsProperties[O];
                                w && ((w.label = R.name), R.lang && (w.languageCode = R.lang), (w.media = R));
                              }
                            });
                        }),
                        (R.onFragLoading = function e(R, I) {
                          var C = this.cea608Parser1,
                            O = this.cea608Parser2,
                            w = this.lastSn,
                            _ = this.lastPartIndex;
                          if (this.enabled && C && O && I.frag.type === N.PlaylistLevelType.MAIN) {
                            var x,
                              P,
                              F = I.frag.sn,
                              M =
                                null != (x = null == I || null === (P = I.part) || void 0 === P ? void 0 : P.index)
                                  ? x
                                  : -1;
                            F === w + 1 || (F === w && M === _ + 1) || (C.reset(), O.reset()),
                              (this.lastSn = F),
                              (this.lastPartIndex = M);
                          }
                        }),
                        (R.onFragLoaded = function e(R, I) {
                          var C = I.frag,
                            _ = I.payload,
                            x = this.initPTS,
                            P = this.unparsedVttFrags;
                          if (C.type === N.PlaylistLevelType.SUBTITLE)
                            if (_.byteLength) {
                              if (!Object(O.isFiniteNumber)(x[C.cc]))
                                return (
                                  P.push(I),
                                  void (
                                    x.length &&
                                    this.hls.trigger(w.Events.SUBTITLE_FRAG_PROCESSED, {
                                      success: !1,
                                      frag: C,
                                      error: new Error('Missing initial subtitle PTS'),
                                    })
                                  )
                                );
                              var F = C.decryptdata,
                                B = 'stats' in I;
                              if (null == F || null == F.key || 'AES-128' !== F.method || B) {
                                var U = this.tracks[C.level],
                                  G = this.vttCCs;
                                G[C.cc] ||
                                  ((G[C.cc] = { start: C.start, prevCC: this.prevCC, new: !0 }), (this.prevCC = C.cc)),
                                  U && U.textCodec === M.IMSC1_CODEC
                                    ? this._parseIMSC1(C, _)
                                    : this._parseVTTs(C, _, G);
                              }
                            } else
                              this.hls.trigger(w.Events.SUBTITLE_FRAG_PROCESSED, {
                                success: !1,
                                frag: C,
                                error: new Error('Empty subtitle payload'),
                              });
                        }),
                        (R._parseIMSC1 = function e(R, I) {
                          var C = this,
                            O = this.hls;
                          Object(M.parseIMSC1)(
                            I,
                            this.initPTS[R.cc],
                            this.timescale[R.cc],
                            function (I) {
                              C._appendCues(I, R.level),
                                O.trigger(w.Events.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: R });
                            },
                            function (I) {
                              B.logger.log('Failed to parse IMSC1: ' + I),
                                O.trigger(w.Events.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: R, error: I });
                            }
                          );
                        }),
                        (R._parseVTTs = function e(R, I, C) {
                          var O = this,
                            _ = this.hls;
                          Object(P.parseWebVTT)(
                            I,
                            this.initPTS[R.cc],
                            this.timescale[R.cc],
                            C,
                            R.cc,
                            R.start,
                            function (I) {
                              O._appendCues(I, R.level),
                                _.trigger(w.Events.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: R });
                            },
                            function (C) {
                              O._fallbackToIMSC1(R, I),
                                B.logger.log('Failed to parse VTT cue: ' + C),
                                _.trigger(w.Events.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: R, error: C });
                            }
                          );
                        }),
                        (R._fallbackToIMSC1 = function e(R, I) {
                          var C = this,
                            O = this.tracks[R.level];
                          O.textCodec ||
                            Object(M.parseIMSC1)(
                              I,
                              this.initPTS[R.cc],
                              this.timescale[R.cc],
                              function () {
                                (O.textCodec = M.IMSC1_CODEC), C._parseIMSC1(R, I);
                              },
                              function () {
                                O.textCodec = 'wvtt';
                              }
                            );
                        }),
                        (R._appendCues = function e(R, I) {
                          var C = this.hls;
                          if (this.config.renderTextTracksNatively) {
                            var O = this.textTracks[I];
                            if ('disabled' === O.mode) return;
                            R.forEach(function (R) {
                              return Object(F.addCueToTrack)(O, R);
                            });
                          } else {
                            var _ = this.tracks[I].default ? 'default' : 'subtitles' + I;
                            C.trigger(w.Events.CUES_PARSED, { type: 'subtitles', cues: R, track: _ });
                          }
                        }),
                        (R.onFragDecrypted = function e(R, I) {
                          var C = I.frag;
                          if (C.type === N.PlaylistLevelType.SUBTITLE) {
                            if (!Object(O.isFiniteNumber)(this.initPTS[C.cc]))
                              return void this.unparsedVttFrags.push(I);
                            this.onFragLoaded(w.Events.FRAG_LOADED, I);
                          }
                        }),
                        (R.onSubtitleTracksCleared = function e() {
                          (this.tracks = []), (this.captionsTracks = {});
                        }),
                        (R.onFragParsingUserdata = function e(R, I) {
                          var C = this.cea608Parser1,
                            O = this.cea608Parser2;
                          if (this.enabled && C && O)
                            for (var w = 0; w < I.samples.length; w++) {
                              var _ = I.samples[w].bytes;
                              if (_) {
                                var x = this.extractCea608Data(_);
                                C.addData(I.samples[w].pts, x[0]), O.addData(I.samples[w].pts, x[1]);
                              }
                            }
                        }),
                        (R.onBufferFlushing = function e(R, I) {
                          var C = I.startOffset,
                            O = I.endOffset,
                            w = I.endOffsetSubtitles,
                            _ = I.type,
                            x = this.media;
                          if (x && !(x.currentTime < O)) {
                            if (!_ || 'video' === _) {
                              var P = this.captionsTracks;
                              Object.keys(P).forEach(function (R) {
                                return Object(F.removeCuesInRange)(P[R], C, O);
                              });
                            }
                            if (this.config.renderTextTracksNatively && 0 === C && void 0 !== w) {
                              var M = this.textTracks;
                              Object.keys(M).forEach(function (R) {
                                return Object(F.removeCuesInRange)(M[R], C, w);
                              });
                            }
                          }
                        }),
                        (R.extractCea608Data = function e(R) {
                          for (var I = 31 & R[0], C = 2, O = [[], []], w = 0; w < I; w++) {
                            var _ = R[C++],
                              x = 127 & R[C++],
                              P = 127 & R[C++],
                              F = 3 & _;
                            (0 === x && 0 === P) ||
                              (0 != (4 & _) && ((0 !== F && 1 !== F) || (O[F].push(x), O[F].push(P))));
                          }
                          return O;
                        }),
                        e
                      );
                    })();
                  function h(R, I) {
                    return R && R.label === I.name && !(R.textTrack1 || R.textTrack2);
                  }
                  function v(R, I, C, O) {
                    return Math.min(I, O) - Math.max(R, C);
                  }
                },
                './src/crypt/aes-crypto.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return O;
                    });
                  var O = (function () {
                    function e(R, I) {
                      (this.subtle = void 0), (this.aesIV = void 0), (this.subtle = R), (this.aesIV = I);
                    }
                    return (
                      (e.prototype.decrypt = function e(R, I) {
                        return this.subtle.decrypt({ name: 'AES-CBC', iv: this.aesIV }, I, R);
                      }),
                      e
                    );
                  })();
                },
                './src/crypt/aes-decryptor.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'removePadding', function () {
                      return a;
                    }),
                    C.d(I, 'default', function () {
                      return w;
                    });
                  var O = C('./src/utils/typed-array.ts');
                  function a(R) {
                    var I = R.byteLength,
                      C = I && new DataView(R.buffer).getUint8(I - 1);
                    return C ? Object(O.sliceUint8)(R, 0, I - C) : R;
                  }
                  var w = (function () {
                    function e() {
                      (this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]),
                        (this.subMix = [
                          new Uint32Array(256),
                          new Uint32Array(256),
                          new Uint32Array(256),
                          new Uint32Array(256),
                        ]),
                        (this.invSubMix = [
                          new Uint32Array(256),
                          new Uint32Array(256),
                          new Uint32Array(256),
                          new Uint32Array(256),
                        ]),
                        (this.sBox = new Uint32Array(256)),
                        (this.invSBox = new Uint32Array(256)),
                        (this.key = new Uint32Array(0)),
                        (this.ksRows = 0),
                        (this.keySize = 0),
                        (this.keySchedule = void 0),
                        (this.invKeySchedule = void 0),
                        this.initTable();
                    }
                    var R = e.prototype;
                    return (
                      (R.uint8ArrayToUint32Array_ = function e(R) {
                        for (var I = new DataView(R), C = new Uint32Array(4), O = 0; O < 4; O++)
                          C[O] = I.getUint32(4 * O);
                        return C;
                      }),
                      (R.initTable = function e() {
                        var R = this.sBox,
                          I = this.invSBox,
                          C = this.subMix,
                          O = C[0],
                          w = C[1],
                          _ = C[2],
                          x = C[3],
                          P = this.invSubMix,
                          F = P[0],
                          M = P[1],
                          N = P[2],
                          B = P[3],
                          U = new Uint32Array(256),
                          G = 0,
                          j = 0,
                          K = 0;
                        for (K = 0; K < 256; K++) U[K] = K < 128 ? K << 1 : (K << 1) ^ 283;
                        for (K = 0; K < 256; K++) {
                          var H = j ^ (j << 1) ^ (j << 2) ^ (j << 3) ^ (j << 4);
                          (H = (H >>> 8) ^ (255 & H) ^ 99), (R[G] = H), (I[H] = G);
                          var V = U[G],
                            W = U[V],
                            Y = U[W],
                            z = (257 * U[H]) ^ (16843008 * H);
                          (O[G] = (z << 24) | (z >>> 8)),
                            (w[G] = (z << 16) | (z >>> 16)),
                            (_[G] = (z << 8) | (z >>> 24)),
                            (x[G] = z),
                            (z = (16843009 * Y) ^ (65537 * W) ^ (257 * V) ^ (16843008 * G)),
                            (F[H] = (z << 24) | (z >>> 8)),
                            (M[H] = (z << 16) | (z >>> 16)),
                            (N[H] = (z << 8) | (z >>> 24)),
                            (B[H] = z),
                            G ? ((G = V ^ U[U[U[Y ^ V]]]), (j ^= U[U[j]])) : (G = j = 1);
                        }
                      }),
                      (R.expandKey = function e(R) {
                        for (var I = this.uint8ArrayToUint32Array_(R), C = !0, O = 0; O < I.length && C; )
                          (C = I[O] === this.key[O]), O++;
                        if (!C) {
                          this.key = I;
                          var w = (this.keySize = I.length);
                          if (4 !== w && 6 !== w && 8 !== w) throw new Error('Invalid aes key size=' + w);
                          var _,
                            x,
                            P,
                            F,
                            M = (this.ksRows = 4 * (w + 6 + 1)),
                            N = (this.keySchedule = new Uint32Array(M)),
                            B = (this.invKeySchedule = new Uint32Array(M)),
                            U = this.sBox,
                            G = this.rcon,
                            j = this.invSubMix,
                            K = j[0],
                            H = j[1],
                            V = j[2],
                            W = j[3];
                          for (_ = 0; _ < M; _++)
                            _ < w
                              ? (P = N[_] = I[_])
                              : ((F = P),
                                _ % w == 0
                                  ? ((F =
                                      (U[(F = (F << 8) | (F >>> 24)) >>> 24] << 24) |
                                      (U[(F >>> 16) & 255] << 16) |
                                      (U[(F >>> 8) & 255] << 8) |
                                      U[255 & F]),
                                    (F ^= G[(_ / w) | 0] << 24))
                                  : w > 6 &&
                                    _ % w == 4 &&
                                    (F =
                                      (U[F >>> 24] << 24) |
                                      (U[(F >>> 16) & 255] << 16) |
                                      (U[(F >>> 8) & 255] << 8) |
                                      U[255 & F]),
                                (N[_] = P = (N[_ - w] ^ F) >>> 0));
                          for (x = 0; x < M; x++)
                            (_ = M - x),
                              (F = 3 & x ? N[_] : N[_ - 4]),
                              (B[x] =
                                x < 4 || _ <= 4
                                  ? F
                                  : K[U[F >>> 24]] ^ H[U[(F >>> 16) & 255]] ^ V[U[(F >>> 8) & 255]] ^ W[U[255 & F]]),
                              (B[x] = B[x] >>> 0);
                        }
                      }),
                      (R.networkToHostOrderSwap = function e(R) {
                        return (R << 24) | ((65280 & R) << 8) | ((16711680 & R) >> 8) | (R >>> 24);
                      }),
                      (R.decrypt = function e(R, I, C) {
                        for (
                          var O,
                            w,
                            _,
                            x,
                            P,
                            F,
                            M,
                            N,
                            B,
                            U,
                            G,
                            j,
                            K,
                            H,
                            V = this.keySize + 6,
                            W = this.invKeySchedule,
                            Y = this.invSBox,
                            z = this.invSubMix,
                            X = z[0],
                            q = z[1],
                            Z = z[2],
                            Q = z[3],
                            J = this.uint8ArrayToUint32Array_(C),
                            $ = J[0],
                            ee = J[1],
                            te = J[2],
                            re = J[3],
                            ie = new Int32Array(R),
                            ne = new Int32Array(ie.length),
                            se = this.networkToHostOrderSwap;
                          I < ie.length;

                        ) {
                          for (
                            B = se(ie[I]),
                              U = se(ie[I + 1]),
                              G = se(ie[I + 2]),
                              j = se(ie[I + 3]),
                              P = B ^ W[0],
                              F = j ^ W[1],
                              M = G ^ W[2],
                              N = U ^ W[3],
                              K = 4,
                              H = 1;
                            H < V;
                            H++
                          )
                            (O = X[P >>> 24] ^ q[(F >> 16) & 255] ^ Z[(M >> 8) & 255] ^ Q[255 & N] ^ W[K]),
                              (w = X[F >>> 24] ^ q[(M >> 16) & 255] ^ Z[(N >> 8) & 255] ^ Q[255 & P] ^ W[K + 1]),
                              (_ = X[M >>> 24] ^ q[(N >> 16) & 255] ^ Z[(P >> 8) & 255] ^ Q[255 & F] ^ W[K + 2]),
                              (x = X[N >>> 24] ^ q[(P >> 16) & 255] ^ Z[(F >> 8) & 255] ^ Q[255 & M] ^ W[K + 3]),
                              (P = O),
                              (F = w),
                              (M = _),
                              (N = x),
                              (K += 4);
                          (O =
                            (Y[P >>> 24] << 24) ^
                            (Y[(F >> 16) & 255] << 16) ^
                            (Y[(M >> 8) & 255] << 8) ^
                            Y[255 & N] ^
                            W[K]),
                            (w =
                              (Y[F >>> 24] << 24) ^
                              (Y[(M >> 16) & 255] << 16) ^
                              (Y[(N >> 8) & 255] << 8) ^
                              Y[255 & P] ^
                              W[K + 1]),
                            (_ =
                              (Y[M >>> 24] << 24) ^
                              (Y[(N >> 16) & 255] << 16) ^
                              (Y[(P >> 8) & 255] << 8) ^
                              Y[255 & F] ^
                              W[K + 2]),
                            (x =
                              (Y[N >>> 24] << 24) ^
                              (Y[(P >> 16) & 255] << 16) ^
                              (Y[(F >> 8) & 255] << 8) ^
                              Y[255 & M] ^
                              W[K + 3]),
                            (ne[I] = se(O ^ $)),
                            (ne[I + 1] = se(x ^ ee)),
                            (ne[I + 2] = se(_ ^ te)),
                            (ne[I + 3] = se(w ^ re)),
                            ($ = B),
                            (ee = U),
                            (te = G),
                            (re = j),
                            (I += 4);
                        }
                        return ne.buffer;
                      }),
                      e
                    );
                  })();
                },
                './src/crypt/decrypter.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return M;
                    });
                  var O = C('./src/crypt/aes-crypto.ts'),
                    w = C('./src/crypt/fast-aes-key.ts'),
                    _ = C('./src/crypt/aes-decryptor.ts'),
                    x = C('./src/utils/logger.ts'),
                    P = C('./src/utils/mp4-tools.ts'),
                    F = C('./src/utils/typed-array.ts'),
                    M = (function () {
                      function e(R, I, C) {
                        var O = (void 0 === C ? {} : C).removePKCS7Padding,
                          w = void 0 === O || O;
                        if (
                          ((this.logEnabled = !0),
                          (this.observer = void 0),
                          (this.config = void 0),
                          (this.removePKCS7Padding = void 0),
                          (this.subtle = null),
                          (this.softwareDecrypter = null),
                          (this.key = null),
                          (this.fastAesKey = null),
                          (this.remainderData = null),
                          (this.currentIV = null),
                          (this.currentResult = null),
                          (this.observer = R),
                          (this.config = I),
                          (this.removePKCS7Padding = w),
                          w)
                        )
                          try {
                            var _ = self.crypto;
                            _ && (this.subtle = _.subtle || _.webkitSubtle);
                          } catch (R) {}
                        null === this.subtle && (this.config.enableSoftwareAES = !0);
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {
                          this.observer = null;
                        }),
                        (R.isSync = function e() {
                          return this.config.enableSoftwareAES;
                        }),
                        (R.flush = function e() {
                          var R = this.currentResult;
                          if (R) {
                            var I = new Uint8Array(R);
                            return this.reset(), this.removePKCS7Padding ? Object(_.removePadding)(I) : I;
                          }
                          this.reset();
                        }),
                        (R.reset = function e() {
                          (this.currentResult = null),
                            (this.currentIV = null),
                            (this.remainderData = null),
                            this.softwareDecrypter && (this.softwareDecrypter = null);
                        }),
                        (R.decrypt = function e(R, I, C, O) {
                          if (this.config.enableSoftwareAES) {
                            this.softwareDecrypt(new Uint8Array(R), I, C);
                            var w = this.flush();
                            w && O(w.buffer);
                          } else this.webCryptoDecrypt(new Uint8Array(R), I, C).then(O);
                        }),
                        (R.softwareDecrypt = function e(R, I, C) {
                          var O = this.currentIV,
                            w = this.currentResult,
                            x = this.remainderData;
                          this.logOnce('JS AES decrypt'),
                            x && ((R = Object(P.appendUint8Array)(x, R)), (this.remainderData = null));
                          var M = this.getValidChunk(R);
                          if (!M.length) return null;
                          O && (C = O);
                          var N = this.softwareDecrypter;
                          N || (N = this.softwareDecrypter = new _.default()), N.expandKey(I);
                          var B = w;
                          return (
                            (this.currentResult = N.decrypt(M.buffer, 0, C)),
                            (this.currentIV = Object(F.sliceUint8)(M, -16).buffer),
                            B || null
                          );
                        }),
                        (R.webCryptoDecrypt = function e(R, I, C) {
                          var _ = this,
                            x = this.subtle;
                          return (
                            (this.key === I && this.fastAesKey) ||
                              ((this.key = I), (this.fastAesKey = new w.default(x, I))),
                            this.fastAesKey
                              .expandKey()
                              .then(function (I) {
                                return x
                                  ? new O.default(x, C).decrypt(R.buffer, I)
                                  : Promise.reject(new Error('web crypto not initialized'));
                              })
                              .catch(function (O) {
                                return _.onWebCryptoError(O, R, I, C);
                              })
                          );
                        }),
                        (R.onWebCryptoError = function e(R, I, C, O) {
                          return (
                            x.logger.warn('[decrypter.ts]: WebCrypto Error, disable WebCrypto API:', R),
                            (this.config.enableSoftwareAES = !0),
                            (this.logEnabled = !0),
                            this.softwareDecrypt(I, C, O)
                          );
                        }),
                        (R.getValidChunk = function e(R) {
                          var I = R,
                            C = R.length - (R.length % 16);
                          return (
                            C !== R.length &&
                              ((I = Object(F.sliceUint8)(R, 0, C)), (this.remainderData = Object(F.sliceUint8)(R, C))),
                            I
                          );
                        }),
                        (R.logOnce = function e(R) {
                          this.logEnabled && (x.logger.log('[decrypter.ts]: ' + R), (this.logEnabled = !1));
                        }),
                        e
                      );
                    })();
                },
                './src/crypt/fast-aes-key.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return O;
                    });
                  var O = (function () {
                    function e(R, I) {
                      (this.subtle = void 0), (this.key = void 0), (this.subtle = R), (this.key = I);
                    }
                    return (
                      (e.prototype.expandKey = function e() {
                        return this.subtle.importKey('raw', this.key, { name: 'AES-CBC' }, !1, ['encrypt', 'decrypt']);
                      }),
                      e
                    );
                  })();
                },
                './src/demux/aacdemuxer.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/demux/base-audio-demuxer.ts'),
                    w = C('./src/demux/adts.ts'),
                    _ = C('./src/utils/logger.ts'),
                    x = C('./src/demux/id3.ts');
                  function l(R, I) {
                    return (l =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  var P = (function (R) {
                    function t(I, C) {
                      var O;
                      return (
                        ((O = R.call(this) || this).observer = void 0),
                        (O.config = void 0),
                        (O.observer = I),
                        (O.config = C),
                        O
                      );
                    }
                    !(function o(R, I) {
                      (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), l(R, I);
                    })(t, R);
                    var I = t.prototype;
                    return (
                      (I.resetInitSegment = function t(I, C, O) {
                        R.prototype.resetInitSegment.call(this, I, C, O),
                          (this._audioTrack = {
                            container: 'audio/adts',
                            type: 'audio',
                            id: 2,
                            pid: -1,
                            sequenceNumber: 0,
                            isAAC: !0,
                            samples: [],
                            manifestCodec: I,
                            duration: O,
                            inputTimeScale: 9e4,
                            dropped: 0,
                          });
                      }),
                      (t.probe = function e(R) {
                        if (!R) return !1;
                        for (var I = (x.getID3Data(R, 0) || []).length, C = R.length; I < C; I++)
                          if (w.probe(R, I)) return _.logger.log('ADTS sync word found !'), !0;
                        return !1;
                      }),
                      (I.canParse = function e(R, I) {
                        return w.canParse(R, I);
                      }),
                      (I.appendFrame = function e(R, I, C) {
                        w.initTrackConfig(R, this.observer, I, C, R.manifestCodec);
                        var O = w.appendFrame(R, I, C, this.initPTS, this.frameIndex);
                        if (O && 0 === O.missing) return O;
                      }),
                      t
                    );
                  })(O.default);
                  (P.minProbeByteLength = 9), (I.default = P);
                },
                './src/demux/adts.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'getAudioConfig', function () {
                      return s;
                    }),
                    C.d(I, 'isHeaderPattern', function () {
                      return o;
                    }),
                    C.d(I, 'getHeaderLength', function () {
                      return l;
                    }),
                    C.d(I, 'getFullFrameLength', function () {
                      return u;
                    }),
                    C.d(I, 'canGetFrameLength', function () {
                      return f;
                    }),
                    C.d(I, 'isHeader', function () {
                      return c;
                    }),
                    C.d(I, 'canParse', function () {
                      return d;
                    }),
                    C.d(I, 'probe', function () {
                      return h;
                    }),
                    C.d(I, 'initTrackConfig', function () {
                      return v;
                    }),
                    C.d(I, 'getFrameDuration', function () {
                      return g;
                    }),
                    C.d(I, 'parseFrameHeader', function () {
                      return p;
                    }),
                    C.d(I, 'appendFrame', function () {
                      return m;
                    });
                  var O = C('./src/utils/logger.ts'),
                    w = C('./src/errors.ts'),
                    _ = C('./src/events.ts');
                  function s(R, I, C, x) {
                    var P,
                      F,
                      M,
                      N,
                      B = navigator.userAgent.toLowerCase(),
                      U = x,
                      G = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                    P = 1 + ((192 & I[C + 2]) >>> 6);
                    var j = (60 & I[C + 2]) >>> 2;
                    if (!(j > G.length - 1))
                      return (
                        (M = (1 & I[C + 2]) << 2),
                        (M |= (192 & I[C + 3]) >>> 6),
                        O.logger.log('manifest codec:' + x + ', ADTS type:' + P + ', samplingIndex:' + j),
                        /firefox/i.test(B)
                          ? j >= 6
                            ? ((P = 5), (N = new Array(4)), (F = j - 3))
                            : ((P = 2), (N = new Array(2)), (F = j))
                          : -1 !== B.indexOf('android')
                          ? ((P = 2), (N = new Array(2)), (F = j))
                          : ((P = 5),
                            (N = new Array(4)),
                            (x && (-1 !== x.indexOf('mp4a.40.29') || -1 !== x.indexOf('mp4a.40.5'))) || (!x && j >= 6)
                              ? (F = j - 3)
                              : (((x && -1 !== x.indexOf('mp4a.40.2') && ((j >= 6 && 1 === M) || /vivaldi/i.test(B))) ||
                                  (!x && 1 === M)) &&
                                  ((P = 2), (N = new Array(2))),
                                (F = j))),
                        (N[0] = P << 3),
                        (N[0] |= (14 & j) >> 1),
                        (N[1] |= (1 & j) << 7),
                        (N[1] |= M << 3),
                        5 === P && ((N[1] |= (14 & F) >> 1), (N[2] = (1 & F) << 7), (N[2] |= 8), (N[3] = 0)),
                        { config: N, samplerate: G[j], channelCount: M, codec: 'mp4a.40.' + P, manifestCodec: U }
                      );
                    R.trigger(_.Events.ERROR, {
                      type: w.ErrorTypes.MEDIA_ERROR,
                      details: w.ErrorDetails.FRAG_PARSING_ERROR,
                      fatal: !0,
                      reason: 'invalid ADTS sampling index:' + j,
                    });
                  }
                  function o(R, I) {
                    return 255 === R[I] && 240 == (246 & R[I + 1]);
                  }
                  function l(R, I) {
                    return 1 & R[I + 1] ? 7 : 9;
                  }
                  function u(R, I) {
                    return ((3 & R[I + 3]) << 11) | (R[I + 4] << 3) | ((224 & R[I + 5]) >>> 5);
                  }
                  function f(R, I) {
                    return I + 5 < R.length;
                  }
                  function c(R, I) {
                    return I + 1 < R.length && o(R, I);
                  }
                  function d(R, I) {
                    return f(R, I) && o(R, I) && u(R, I) <= R.length - I;
                  }
                  function h(R, I) {
                    if (c(R, I)) {
                      var C = l(R, I);
                      if (I + C >= R.length) return !1;
                      var O = u(R, I);
                      if (O <= C) return !1;
                      var w = I + O;
                      return w === R.length || c(R, w);
                    }
                    return !1;
                  }
                  function v(R, I, C, w, _) {
                    if (!R.samplerate) {
                      var x = s(I, C, w, _);
                      if (!x) return;
                      (R.config = x.config),
                        (R.samplerate = x.samplerate),
                        (R.channelCount = x.channelCount),
                        (R.codec = x.codec),
                        (R.manifestCodec = x.manifestCodec),
                        O.logger.log(
                          'parsed codec:' + R.codec + ', rate:' + x.samplerate + ', channels:' + x.channelCount
                        );
                    }
                  }
                  function g(R) {
                    return 9216e4 / R;
                  }
                  function p(R, I, C, O, w) {
                    var _ = l(R, I),
                      x = u(R, I);
                    if ((x -= _) > 0) return { headerLength: _, frameLength: x, stamp: C + O * w };
                  }
                  function m(R, I, C, O, w) {
                    var _ = p(I, C, O, w, g(R.samplerate));
                    if (_) {
                      var x,
                        P = _.frameLength,
                        F = _.headerLength,
                        M = _.stamp,
                        N = F + P,
                        B = Math.max(0, C + N - I.length);
                      B
                        ? (x = new Uint8Array(N - F)).set(I.subarray(C + F, I.length), 0)
                        : (x = I.subarray(C + F, C + N));
                      var U = { unit: x, pts: M };
                      return B || R.samples.push(U), { sample: U, length: N, missing: B };
                    }
                  }
                },
                './src/demux/base-audio-demuxer.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'initPTSFn', function () {
                      return M;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/demux/id3.ts'),
                    _ = C('./src/demux/dummy-demuxed-track.ts'),
                    x = C('./src/utils/mp4-tools.ts'),
                    P = C('./src/utils/typed-array.ts'),
                    F = (function () {
                      function e() {
                        (this._audioTrack = void 0),
                          (this._id3Track = void 0),
                          (this.frameIndex = 0),
                          (this.cachedData = null),
                          (this.initPTS = null);
                      }
                      var R = e.prototype;
                      return (
                        (R.resetInitSegment = function e(R, I, C) {
                          this._id3Track = {
                            type: 'id3',
                            id: 3,
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: 0,
                            samples: [],
                            dropped: 0,
                          };
                        }),
                        (R.resetTimeStamp = function e() {}),
                        (R.resetContiguity = function e() {}),
                        (R.canParse = function e(R, I) {
                          return !1;
                        }),
                        (R.appendFrame = function e(R, I, C) {}),
                        (R.demux = function e(R, I) {
                          this.cachedData &&
                            ((R = Object(x.appendUint8Array)(this.cachedData, R)), (this.cachedData = null));
                          var C,
                            O,
                            F = w.getID3Data(R, 0),
                            N = F ? F.length : 0,
                            B = this._audioTrack,
                            U = this._id3Track,
                            G = F ? w.getTimeStamp(F) : void 0,
                            j = R.length;
                          for (
                            (0 !== this.frameIndex && null !== this.initPTS) || (this.initPTS = M(G, I)),
                              F && F.length > 0 && U.samples.push({ pts: this.initPTS, dts: this.initPTS, data: F }),
                              O = this.initPTS;
                            N < j;

                          ) {
                            if (this.canParse(R, N)) {
                              var K = this.appendFrame(B, R, N);
                              K ? (this.frameIndex++, (O = K.sample.pts), (C = N += K.length)) : (N = j);
                            } else
                              w.canParse(R, N)
                                ? ((F = w.getID3Data(R, N)),
                                  U.samples.push({ pts: O, dts: O, data: F }),
                                  (C = N += F.length))
                                : N++;
                            if (N === j && C !== j) {
                              var H = Object(P.sliceUint8)(R, C);
                              this.cachedData
                                ? (this.cachedData = Object(x.appendUint8Array)(this.cachedData, H))
                                : (this.cachedData = H);
                            }
                          }
                          return {
                            audioTrack: B,
                            avcTrack: Object(_.dummyTrack)(),
                            id3Track: U,
                            textTrack: Object(_.dummyTrack)(),
                          };
                        }),
                        (R.demuxSampleAes = function e(R, I, C) {
                          return Promise.reject(
                            new Error('[' + this + '] This demuxer does not support Sample-AES decryption')
                          );
                        }),
                        (R.flush = function e(R) {
                          var I = this.cachedData;
                          return (
                            I && ((this.cachedData = null), this.demux(I, 0)),
                            (this.frameIndex = 0),
                            {
                              audioTrack: this._audioTrack,
                              avcTrack: Object(_.dummyTrack)(),
                              id3Track: this._id3Track,
                              textTrack: Object(_.dummyTrack)(),
                            }
                          );
                        }),
                        (R.destroy = function e() {}),
                        e
                      );
                    })(),
                    M = function e(R, I) {
                      return Object(O.isFiniteNumber)(R) ? 90 * R : 9e4 * I;
                    };
                  I.default = F;
                },
                './src/demux/chunk-cache.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return O;
                    });
                  var O = (function () {
                    function e() {
                      (this.chunks = []), (this.dataLength = 0);
                    }
                    var R = e.prototype;
                    return (
                      (R.push = function e(R) {
                        this.chunks.push(R), (this.dataLength += R.length);
                      }),
                      (R.flush = function e() {
                        var R,
                          I = this.chunks,
                          C = this.dataLength;
                        return I.length
                          ? ((R =
                              1 === I.length
                                ? I[0]
                                : (function a(R, I) {
                                    for (var C = new Uint8Array(I), O = 0, w = 0; w < R.length; w++) {
                                      var _ = R[w];
                                      C.set(_, O), (O += _.length);
                                    }
                                    return C;
                                  })(I, C)),
                            this.reset(),
                            R)
                          : new Uint8Array(0);
                      }),
                      (R.reset = function e() {
                        (this.chunks.length = 0), (this.dataLength = 0);
                      }),
                      e
                    );
                  })();
                },
                './src/demux/dummy-demuxed-track.ts': function (R, I, C) {
                  function i() {
                    return {
                      type: '',
                      id: -1,
                      pid: -1,
                      inputTimeScale: 9e4,
                      sequenceNumber: -1,
                      samples: [],
                      dropped: 0,
                    };
                  }
                  C.r(I),
                    C.d(I, 'dummyTrack', function () {
                      return i;
                    });
                },
                './src/demux/exp-golomb.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/utils/logger.ts'),
                    w = (function () {
                      function e(R) {
                        (this.data = void 0),
                          (this.bytesAvailable = void 0),
                          (this.word = void 0),
                          (this.bitsAvailable = void 0),
                          (this.data = R),
                          (this.bytesAvailable = R.byteLength),
                          (this.word = 0),
                          (this.bitsAvailable = 0);
                      }
                      var R = e.prototype;
                      return (
                        (R.loadWord = function e() {
                          var R = this.data,
                            I = this.bytesAvailable,
                            C = R.byteLength - I,
                            O = new Uint8Array(4),
                            w = Math.min(4, I);
                          if (0 === w) throw new Error('no bytes available');
                          O.set(R.subarray(C, C + w)),
                            (this.word = new DataView(O.buffer).getUint32(0)),
                            (this.bitsAvailable = 8 * w),
                            (this.bytesAvailable -= w);
                        }),
                        (R.skipBits = function e(R) {
                          var I;
                          this.bitsAvailable > R
                            ? ((this.word <<= R), (this.bitsAvailable -= R))
                            : ((R -= this.bitsAvailable),
                              (R -= (I = R >> 3) >> 3),
                              (this.bytesAvailable -= I),
                              this.loadWord(),
                              (this.word <<= R),
                              (this.bitsAvailable -= R));
                        }),
                        (R.readBits = function e(R) {
                          var I = Math.min(this.bitsAvailable, R),
                            C = this.word >>> (32 - I);
                          return (
                            R > 32 && O.logger.error('Cannot read more than 32 bits at a time'),
                            (this.bitsAvailable -= I),
                            this.bitsAvailable > 0 ? (this.word <<= I) : this.bytesAvailable > 0 && this.loadWord(),
                            (I = R - I) > 0 && this.bitsAvailable ? (C << I) | this.readBits(I) : C
                          );
                        }),
                        (R.skipLZ = function e() {
                          var R;
                          for (R = 0; R < this.bitsAvailable; ++R)
                            if (0 != (this.word & (2147483648 >>> R)))
                              return (this.word <<= R), (this.bitsAvailable -= R), R;
                          return this.loadWord(), R + this.skipLZ();
                        }),
                        (R.skipUEG = function e() {
                          this.skipBits(1 + this.skipLZ());
                        }),
                        (R.skipEG = function e() {
                          this.skipBits(1 + this.skipLZ());
                        }),
                        (R.readUEG = function e() {
                          var R = this.skipLZ();
                          return this.readBits(R + 1) - 1;
                        }),
                        (R.readEG = function e() {
                          var R = this.readUEG();
                          return 1 & R ? (1 + R) >>> 1 : -1 * (R >>> 1);
                        }),
                        (R.readBoolean = function e() {
                          return 1 === this.readBits(1);
                        }),
                        (R.readUByte = function e() {
                          return this.readBits(8);
                        }),
                        (R.readUShort = function e() {
                          return this.readBits(16);
                        }),
                        (R.readUInt = function e() {
                          return this.readBits(32);
                        }),
                        (R.skipScalingList = function e(R) {
                          for (var I = 8, C = 8, O = 0; O < R; O++)
                            0 !== C && (C = (I + this.readEG() + 256) % 256), (I = 0 === C ? I : C);
                        }),
                        (R.readSPS = function e() {
                          var R,
                            I,
                            C,
                            O = 0,
                            w = 0,
                            _ = 0,
                            x = 0,
                            P = this.readUByte.bind(this),
                            F = this.readBits.bind(this),
                            M = this.readUEG.bind(this),
                            N = this.readBoolean.bind(this),
                            B = this.skipBits.bind(this),
                            U = this.skipEG.bind(this),
                            G = this.skipUEG.bind(this),
                            j = this.skipScalingList.bind(this);
                          P();
                          var K = P();
                          if (
                            (F(5),
                            B(3),
                            P(),
                            G(),
                            100 === K ||
                              110 === K ||
                              122 === K ||
                              244 === K ||
                              44 === K ||
                              83 === K ||
                              86 === K ||
                              118 === K ||
                              128 === K)
                          ) {
                            var H = M();
                            if ((3 === H && B(1), G(), G(), B(1), N()))
                              for (I = 3 !== H ? 8 : 12, C = 0; C < I; C++) N() && j(C < 6 ? 16 : 64);
                          }
                          G();
                          var V = M();
                          if (0 === V) M();
                          else if (1 === V) for (B(1), U(), U(), R = M(), C = 0; C < R; C++) U();
                          G(), B(1);
                          var W = M(),
                            Y = M(),
                            z = F(1);
                          0 === z && B(1), B(1), N() && ((O = M()), (w = M()), (_ = M()), (x = M()));
                          var X = [1, 1];
                          if (N() && N())
                            switch (P()) {
                              case 1:
                                X = [1, 1];
                                break;
                              case 2:
                                X = [12, 11];
                                break;
                              case 3:
                                X = [10, 11];
                                break;
                              case 4:
                                X = [16, 11];
                                break;
                              case 5:
                                X = [40, 33];
                                break;
                              case 6:
                                X = [24, 11];
                                break;
                              case 7:
                                X = [20, 11];
                                break;
                              case 8:
                                X = [32, 11];
                                break;
                              case 9:
                                X = [80, 33];
                                break;
                              case 10:
                                X = [18, 11];
                                break;
                              case 11:
                                X = [15, 11];
                                break;
                              case 12:
                                X = [64, 33];
                                break;
                              case 13:
                                X = [160, 99];
                                break;
                              case 14:
                                X = [4, 3];
                                break;
                              case 15:
                                X = [3, 2];
                                break;
                              case 16:
                                X = [2, 1];
                                break;
                              case 255:
                                X = [(P() << 8) | P(), (P() << 8) | P()];
                            }
                          return {
                            width: Math.ceil(16 * (W + 1) - 2 * O - 2 * w),
                            height: (2 - z) * (Y + 1) * 16 - (z ? 2 : 4) * (_ + x),
                            pixelRatio: X,
                          };
                        }),
                        (R.readSliceType = function e() {
                          return this.readUByte(), this.readUEG(), this.readUEG();
                        }),
                        e
                      );
                    })();
                  I.default = w;
                },
                './src/demux/id3.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'isHeader', function () {
                      return w;
                    }),
                    C.d(I, 'isFooter', function () {
                      return _;
                    }),
                    C.d(I, 'getID3Data', function () {
                      return x;
                    }),
                    C.d(I, 'canParse', function () {
                      return F;
                    }),
                    C.d(I, 'getTimeStamp', function () {
                      return M;
                    }),
                    C.d(I, 'isTimeStampFrame', function () {
                      return N;
                    }),
                    C.d(I, 'getID3Frames', function () {
                      return U;
                    }),
                    C.d(I, 'decodeFrame', function () {
                      return G;
                    }),
                    C.d(I, 'utf8ArrayToStr', function () {
                      return W;
                    }),
                    C.d(I, 'testables', function () {
                      return Y;
                    });
                  var O,
                    w = function e(R, I) {
                      return (
                        I + 10 <= R.length &&
                        73 === R[I] &&
                        68 === R[I + 1] &&
                        51 === R[I + 2] &&
                        R[I + 3] < 255 &&
                        R[I + 4] < 255 &&
                        R[I + 6] < 128 &&
                        R[I + 7] < 128 &&
                        R[I + 8] < 128 &&
                        R[I + 9] < 128
                      );
                    },
                    _ = function e(R, I) {
                      return (
                        I + 10 <= R.length &&
                        51 === R[I] &&
                        68 === R[I + 1] &&
                        73 === R[I + 2] &&
                        R[I + 3] < 255 &&
                        R[I + 4] < 255 &&
                        R[I + 6] < 128 &&
                        R[I + 7] < 128 &&
                        R[I + 8] < 128 &&
                        R[I + 9] < 128
                      );
                    },
                    x = function e(R, I) {
                      for (var C = I, O = 0; w(R, I); ) {
                        (O += 10), (O += P(R, I + 6)), _(R, I + 10) && (O += 10), (I += O);
                      }
                      if (O > 0) return R.subarray(C, C + O);
                    },
                    P = function e(R, I) {
                      var C = 0;
                      return (
                        (C = (127 & R[I]) << 21),
                        (C |= (127 & R[I + 1]) << 14),
                        (C |= (127 & R[I + 2]) << 7),
                        (C |= 127 & R[I + 3])
                      );
                    },
                    F = function e(R, I) {
                      return w(R, I) && P(R, I + 6) + 10 <= R.length - I;
                    },
                    M = function e(R) {
                      for (var I = U(R), C = 0; C < I.length; C++) {
                        var O = I[C];
                        if (N(O)) return V(O);
                      }
                    },
                    N = function e(R) {
                      return R && 'PRIV' === R.key && 'com.apple.streaming.transportStreamTimestamp' === R.info;
                    },
                    B = function e(R) {
                      var I = String.fromCharCode(R[0], R[1], R[2], R[3]),
                        C = P(R, 4);
                      return { type: I, size: C, data: R.subarray(10, 10 + C) };
                    },
                    U = function e(R) {
                      for (var I = 0, C = []; w(R, I); ) {
                        for (var O = P(R, I + 6), x = (I += 10) + O; I + 8 < x; ) {
                          var F = B(R.subarray(I)),
                            M = G(F);
                          M && C.push(M), (I += F.size + 10);
                        }
                        _(R, I) && (I += 10);
                      }
                      return C;
                    },
                    G = function e(R) {
                      return 'PRIV' === R.type ? j(R) : 'W' === R.type[0] ? H(R) : K(R);
                    },
                    j = function e(R) {
                      if (!(R.size < 2)) {
                        var I = W(R.data, !0),
                          C = new Uint8Array(R.data.subarray(I.length + 1));
                        return { key: R.type, info: I, data: C.buffer };
                      }
                    },
                    K = function e(R) {
                      if (!(R.size < 2)) {
                        if ('TXXX' === R.type) {
                          var I = 1,
                            C = W(R.data.subarray(I), !0);
                          I += C.length + 1;
                          var O = W(R.data.subarray(I));
                          return { key: R.type, info: C, data: O };
                        }
                        var w = W(R.data.subarray(1));
                        return { key: R.type, data: w };
                      }
                    },
                    H = function e(R) {
                      if ('WXXX' === R.type) {
                        if (R.size < 2) return;
                        var I = 1,
                          C = W(R.data.subarray(I), !0);
                        I += C.length + 1;
                        var O = W(R.data.subarray(I));
                        return { key: R.type, info: C, data: O };
                      }
                      var w = W(R.data);
                      return { key: R.type, data: w };
                    },
                    V = function e(R) {
                      if (8 === R.data.byteLength) {
                        var I = new Uint8Array(R.data),
                          C = 1 & I[3],
                          O = (I[4] << 23) + (I[5] << 15) + (I[6] << 7) + I[7];
                        return (O /= 45), C && (O += 47721858.84), Math.round(O);
                      }
                    },
                    W = function e(R, I) {
                      void 0 === I && (I = !1);
                      var C = (function T() {
                        O || void 0 === self.TextDecoder || (O = new self.TextDecoder('utf-8'));
                        return O;
                      })();
                      if (C) {
                        var w = C.decode(R);
                        if (I) {
                          var _ = w.indexOf('\0');
                          return -1 !== _ ? w.substring(0, _) : w;
                        }
                        return w.replace(/\0/g, '');
                      }
                      for (var x, P, F, M = R.length, N = '', B = 0; B < M; ) {
                        if (0 === (x = R[B++]) && I) return N;
                        if (0 !== x && 3 !== x)
                          switch (x >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                              N += String.fromCharCode(x);
                              break;
                            case 12:
                            case 13:
                              (P = R[B++]), (N += String.fromCharCode(((31 & x) << 6) | (63 & P)));
                              break;
                            case 14:
                              (P = R[B++]),
                                (F = R[B++]),
                                (N += String.fromCharCode(((15 & x) << 12) | ((63 & P) << 6) | ((63 & F) << 0)));
                          }
                      }
                      return N;
                    },
                    Y = { decodeTextFrame: K };
                },
                './src/demux/mp3demuxer.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/demux/base-audio-demuxer.ts'),
                    w = C('./src/demux/id3.ts'),
                    _ = C('./src/utils/logger.ts'),
                    x = C('./src/demux/mpegaudio.ts');
                  function l(R, I) {
                    return (l =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  var P = (function (R) {
                    function t() {
                      return R.apply(this, arguments) || this;
                    }
                    !(function o(R, I) {
                      (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), l(R, I);
                    })(t, R);
                    var I = t.prototype;
                    return (
                      (I.resetInitSegment = function t(I, C, O) {
                        R.prototype.resetInitSegment.call(this, I, C, O),
                          (this._audioTrack = {
                            container: 'audio/mpeg',
                            type: 'audio',
                            id: 2,
                            pid: -1,
                            sequenceNumber: 0,
                            isAAC: !1,
                            samples: [],
                            manifestCodec: I,
                            duration: O,
                            inputTimeScale: 9e4,
                            dropped: 0,
                          });
                      }),
                      (t.probe = function e(R) {
                        if (!R) return !1;
                        for (var I = (w.getID3Data(R, 0) || []).length, C = R.length; I < C; I++)
                          if (x.probe(R, I)) return _.logger.log('MPEG Audio sync word found !'), !0;
                        return !1;
                      }),
                      (I.canParse = function e(R, I) {
                        return x.canParse(R, I);
                      }),
                      (I.appendFrame = function e(R, I, C) {
                        if (null !== this.initPTS) return x.appendFrame(R, I, C, this.initPTS, this.frameIndex);
                      }),
                      t
                    );
                  })(O.default);
                  (P.minProbeByteLength = 4), (I.default = P);
                },
                './src/demux/mp4demuxer.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/utils/mp4-tools.ts'),
                    w = C('./src/demux/dummy-demuxed-track.ts'),
                    _ = (function () {
                      function e(R, I) {
                        (this.remainderData = null), (this.config = void 0), (this.config = I);
                      }
                      var R = e.prototype;
                      return (
                        (R.resetTimeStamp = function e() {}),
                        (R.resetInitSegment = function e() {}),
                        (R.resetContiguity = function e() {}),
                        (e.probe = function e(R) {
                          return (
                            Object(O.findBox)({ data: R, start: 0, end: Math.min(R.length, 16384) }, ['moof']).length >
                            0
                          );
                        }),
                        (R.demux = function e(R) {
                          var I = R,
                            C = Object(w.dummyTrack)();
                          if (this.config.progressive) {
                            this.remainderData && (I = Object(O.appendUint8Array)(this.remainderData, R));
                            var _ = Object(O.segmentValidRange)(I);
                            (this.remainderData = _.remainder), (C.samples = _.valid || new Uint8Array());
                          } else C.samples = I;
                          return {
                            audioTrack: Object(w.dummyTrack)(),
                            avcTrack: C,
                            id3Track: Object(w.dummyTrack)(),
                            textTrack: Object(w.dummyTrack)(),
                          };
                        }),
                        (R.flush = function e() {
                          var R = Object(w.dummyTrack)();
                          return (
                            (R.samples = this.remainderData || new Uint8Array()),
                            (this.remainderData = null),
                            {
                              audioTrack: Object(w.dummyTrack)(),
                              avcTrack: R,
                              id3Track: Object(w.dummyTrack)(),
                              textTrack: Object(w.dummyTrack)(),
                            }
                          );
                        }),
                        (R.demuxSampleAes = function e(R, I, C) {
                          return Promise.reject(new Error('The MP4 demuxer does not support SAMPLE-AES decryption'));
                        }),
                        (R.destroy = function e() {}),
                        e
                      );
                    })();
                  (_.minProbeByteLength = 1024), (I.default = _);
                },
                './src/demux/mpegaudio.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'appendFrame', function () {
                      return l;
                    }),
                    C.d(I, 'parseHeader', function () {
                      return u;
                    }),
                    C.d(I, 'isHeaderPattern', function () {
                      return f;
                    }),
                    C.d(I, 'isHeader', function () {
                      return c;
                    }),
                    C.d(I, 'canParse', function () {
                      return d;
                    }),
                    C.d(I, 'probe', function () {
                      return h;
                    });
                  var O = null,
                    w = [
                      32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112,
                      128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320,
                      32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80,
                      96, 112, 128, 144, 160,
                    ],
                    _ = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                    x = [
                      [0, 72, 144, 12],
                      [0, 0, 0, 0],
                      [0, 72, 144, 12],
                      [0, 144, 144, 12],
                    ],
                    P = [0, 1, 1, 4];
                  function l(R, I, C, O, w) {
                    if (!(C + 24 > I.length)) {
                      var _ = u(I, C);
                      if (_ && C + _.frameLength <= I.length) {
                        var x = O + w * ((9e4 * _.samplesPerFrame) / _.sampleRate),
                          P = { unit: I.subarray(C, C + _.frameLength), pts: x, dts: x };
                        return (
                          (R.config = []),
                          (R.channelCount = _.channelCount),
                          (R.samplerate = _.sampleRate),
                          R.samples.push(P),
                          { sample: P, length: _.frameLength, missing: 0 }
                        );
                      }
                    }
                  }
                  function u(R, I) {
                    var C = (R[I + 1] >> 3) & 3,
                      F = (R[I + 1] >> 1) & 3,
                      M = (R[I + 2] >> 4) & 15,
                      N = (R[I + 2] >> 2) & 3;
                    if (1 !== C && 0 !== M && 15 !== M && 3 !== N) {
                      var B = (R[I + 2] >> 1) & 1,
                        U = R[I + 3] >> 6,
                        G = 1e3 * w[14 * (3 === C ? 3 - F : 3 === F ? 3 : 4) + M - 1],
                        j = _[3 * (3 === C ? 0 : 2 === C ? 1 : 2) + N],
                        K = 3 === U ? 1 : 2,
                        H = x[C][F],
                        V = P[F],
                        W = 8 * H * V,
                        Y = Math.floor((H * G) / j + B) * V;
                      if (null === O) {
                        var z = (navigator.userAgent || '').match(/Chrome\/(\d+)/i);
                        O = z ? parseInt(z[1]) : 0;
                      }
                      return (
                        !!O && O <= 87 && 2 === F && G >= 224e3 && 0 === U && (R[I + 3] = 128 | R[I + 3]),
                        { sampleRate: j, channelCount: K, frameLength: Y, samplesPerFrame: W }
                      );
                    }
                  }
                  function f(R, I) {
                    return 255 === R[I] && 224 == (224 & R[I + 1]) && 0 != (6 & R[I + 1]);
                  }
                  function c(R, I) {
                    return I + 1 < R.length && f(R, I);
                  }
                  function d(R, I) {
                    return f(R, I) && 4 <= R.length - I;
                  }
                  function h(R, I) {
                    if (I + 1 < R.length && f(R, I)) {
                      var C = u(R, I),
                        O = 4;
                      null != C && C.frameLength && (O = C.frameLength);
                      var w = I + O;
                      return w === R.length || c(R, w);
                    }
                    return !1;
                  }
                },
                './src/demux/sample-aes.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/crypt/decrypter.ts'),
                    w = C('./src/demux/tsdemuxer.ts'),
                    _ = (function () {
                      function e(R, I, C) {
                        (this.keyData = void 0),
                          (this.decrypter = void 0),
                          (this.keyData = C),
                          (this.decrypter = new O.default(R, I, { removePKCS7Padding: !1 }));
                      }
                      var R = e.prototype;
                      return (
                        (R.decryptBuffer = function e(R, I) {
                          this.decrypter.decrypt(R, this.keyData.key.buffer, this.keyData.iv.buffer, I);
                        }),
                        (R.decryptAacSample = function e(R, I, C, O) {
                          var w = R[I].unit,
                            _ = w.subarray(16, w.length - (w.length % 16)),
                            x = _.buffer.slice(_.byteOffset, _.byteOffset + _.length),
                            P = this;
                          this.decryptBuffer(x, function (_) {
                            var x = new Uint8Array(_);
                            w.set(x, 16), O || P.decryptAacSamples(R, I + 1, C);
                          });
                        }),
                        (R.decryptAacSamples = function e(R, I, C) {
                          for (; ; I++) {
                            if (I >= R.length) return void C();
                            if (!(R[I].unit.length < 32)) {
                              var O = this.decrypter.isSync();
                              if ((this.decryptAacSample(R, I, C, O), !O)) return;
                            }
                          }
                        }),
                        (R.getAvcEncryptedData = function e(R) {
                          for (
                            var I = 16 * Math.floor((R.length - 48) / 160) + 16, C = new Int8Array(I), O = 0, w = 32;
                            w < R.length - 16;
                            w += 160, O += 16
                          )
                            C.set(R.subarray(w, w + 16), O);
                          return C;
                        }),
                        (R.getAvcDecryptedUnit = function e(R, I) {
                          for (var C = new Uint8Array(I), O = 0, w = 32; w < R.length - 16; w += 160, O += 16)
                            R.set(C.subarray(O, O + 16), w);
                          return R;
                        }),
                        (R.decryptAvcSample = function e(R, I, C, O, _, x) {
                          var P = Object(w.discardEPB)(_.data),
                            F = this.getAvcEncryptedData(P),
                            M = this;
                          this.decryptBuffer(F.buffer, function (w) {
                            (_.data = M.getAvcDecryptedUnit(P, w)), x || M.decryptAvcSamples(R, I, C + 1, O);
                          });
                        }),
                        (R.decryptAvcSamples = function e(R, I, C, O) {
                          if (R instanceof Uint8Array) throw new Error('Cannot decrypt samples of type Uint8Array');
                          for (; ; I++, C = 0) {
                            if (I >= R.length) return void O();
                            for (var w = R[I].units; !(C >= w.length); C++) {
                              var _ = w[C];
                              if (!(_.data.length <= 48 || (1 !== _.type && 5 !== _.type))) {
                                var x = this.decrypter.isSync();
                                if ((this.decryptAvcSample(R, I, C, O, _, x), !x)) return;
                              }
                            }
                          }
                        }),
                        e
                      );
                    })();
                  I.default = _;
                },
                './src/demux/transmuxer-interface.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return B;
                    });
                  var O = C('./node_modules/webworkify-webpack/index.js'),
                    w = C('./src/events.ts'),
                    _ = C('./src/demux/transmuxer.ts'),
                    x = C('./src/utils/logger.ts'),
                    P = C('./src/errors.ts'),
                    F = C('./src/utils/mediasource-helper.ts'),
                    M = C('./node_modules/eventemitter3/index.js'),
                    N = Object(F.getMediaSource)() || {
                      isTypeSupported: function e() {
                        return !1;
                      },
                    },
                    B = (function () {
                      function e(R, I, C, F) {
                        var B = this;
                        (this.hls = void 0),
                          (this.id = void 0),
                          (this.observer = void 0),
                          (this.frag = null),
                          (this.part = null),
                          (this.worker = void 0),
                          (this.onwmsg = void 0),
                          (this.transmuxer = null),
                          (this.onTransmuxComplete = void 0),
                          (this.onFlush = void 0),
                          (this.hls = R),
                          (this.id = I),
                          (this.onTransmuxComplete = C),
                          (this.onFlush = F);
                        var U = R.config,
                          G = function t(I, C) {
                            ((C = C || {}).frag = B.frag), (C.id = B.id), R.trigger(I, C);
                          };
                        (this.observer = new M.EventEmitter()),
                          this.observer.on(w.Events.FRAG_DECRYPTED, G),
                          this.observer.on(w.Events.ERROR, G);
                        var j = {
                            mp4: N.isTypeSupported('video/mp4'),
                            mpeg: N.isTypeSupported('audio/mpeg'),
                            mp3: N.isTypeSupported('audio/mp4; codecs="mp3"'),
                          },
                          K = navigator.vendor;
                        if (U.enableWorker && 'undefined' != typeof Worker) {
                          var H;
                          x.logger.log('demuxing in webworker');
                          try {
                            (H = this.worker = O('./src/demux/transmuxer-worker.ts')),
                              (this.onwmsg = this.onWorkerMessage.bind(this)),
                              H.addEventListener('message', this.onwmsg),
                              (H.onerror = function (I) {
                                R.trigger(w.Events.ERROR, {
                                  type: P.ErrorTypes.OTHER_ERROR,
                                  details: P.ErrorDetails.INTERNAL_EXCEPTION,
                                  fatal: !0,
                                  event: 'demuxerWorker',
                                  error: new Error(I.message + '  (' + I.filename + ':' + I.lineno + ')'),
                                });
                              }),
                              H.postMessage({
                                cmd: 'init',
                                typeSupported: j,
                                vendor: K,
                                id: I,
                                config: JSON.stringify(U),
                              });
                          } catch (R) {
                            x.logger.warn('Error in worker:', R),
                              x.logger.error('Error while initializing DemuxerWorker, fallback to inline'),
                              H && self.URL.revokeObjectURL(H.objectURL),
                              (this.transmuxer = new _.default(this.observer, j, U, K, I)),
                              (this.worker = null);
                          }
                        } else this.transmuxer = new _.default(this.observer, j, U, K, I);
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {
                          var R = this.worker;
                          if (R) R.removeEventListener('message', this.onwmsg), R.terminate(), (this.worker = null);
                          else {
                            var I = this.transmuxer;
                            I && (I.destroy(), (this.transmuxer = null));
                          }
                          var C = this.observer;
                          C && C.removeAllListeners(), (this.observer = null);
                        }),
                        (R.push = function e(R, I, C, O, w, P, F, M, N, B) {
                          var U,
                            G,
                            j = this;
                          N.transmuxing.start = self.performance.now();
                          var K = this.transmuxer,
                            H = this.worker,
                            V = P ? P.start : w.start,
                            W = w.decryptdata,
                            Y = this.frag,
                            z = !(Y && w.cc === Y.cc),
                            X = !(Y && N.level === Y.level),
                            q = Y ? N.sn - Y.sn : -1,
                            Z = this.part ? N.part - this.part.index : 1,
                            Q = !X && (1 === q || (0 === q && 1 === Z)),
                            J = self.performance.now();
                          (X || q || 0 === w.stats.parsing.start) && (w.stats.parsing.start = J),
                            !P || (!Z && Q) || (P.stats.parsing.start = J);
                          var $ = !(
                              Y &&
                              (null === (U = w.initSegment) || void 0 === U ? void 0 : U.url) ===
                                (null === (G = Y.initSegment) || void 0 === G ? void 0 : G.url)
                            ),
                            ee = new _.TransmuxState(z, Q, M, X, V, $);
                          if (!Q || z || $) {
                            x.logger.log(
                              '[transmuxer-interface, ' +
                                w.type +
                                ']: Starting new transmux session for sn: ' +
                                N.sn +
                                ' p: ' +
                                N.part +
                                ' level: ' +
                                N.level +
                                ' id: ' +
                                N.id +
                                '\n        discontinuity: ' +
                                z +
                                '\n        trackSwitch: ' +
                                X +
                                '\n        contiguous: ' +
                                Q +
                                '\n        accurateTimeOffset: ' +
                                M +
                                '\n        timeOffset: ' +
                                V +
                                '\n        initSegmentChange: ' +
                                $
                            );
                            var te = new _.TransmuxConfig(C, O, I, F, B);
                            this.configureTransmuxer(te);
                          }
                          if (((this.frag = w), (this.part = P), H))
                            H.postMessage(
                              { cmd: 'demux', data: R, decryptdata: W, chunkMeta: N, state: ee },
                              R instanceof ArrayBuffer ? [R] : []
                            );
                          else if (K) {
                            var re = K.push(R, W, N, ee);
                            Object(_.isPromise)(re)
                              ? re.then(function (R) {
                                  j.handleTransmuxComplete(R);
                                })
                              : this.handleTransmuxComplete(re);
                          }
                        }),
                        (R.flush = function e(R) {
                          var I = this;
                          R.transmuxing.start = self.performance.now();
                          var C = this.transmuxer,
                            O = this.worker;
                          if (O) O.postMessage({ cmd: 'flush', chunkMeta: R });
                          else if (C) {
                            var w = C.flush(R);
                            Object(_.isPromise)(w)
                              ? w.then(function (C) {
                                  I.handleFlushResult(C, R);
                                })
                              : this.handleFlushResult(w, R);
                          }
                        }),
                        (R.handleFlushResult = function e(R, I) {
                          var C = this;
                          R.forEach(function (R) {
                            C.handleTransmuxComplete(R);
                          }),
                            this.onFlush(I);
                        }),
                        (R.onWorkerMessage = function e(R) {
                          var I = R.data,
                            C = this.hls;
                          switch (I.event) {
                            case 'init':
                              self.URL.revokeObjectURL(this.worker.objectURL);
                              break;
                            case 'transmuxComplete':
                              this.handleTransmuxComplete(I.data);
                              break;
                            case 'flush':
                              this.onFlush(I.data);
                              break;
                            default:
                              (I.data = I.data || {}),
                                (I.data.frag = this.frag),
                                (I.data.id = this.id),
                                C.trigger(I.event, I.data);
                          }
                        }),
                        (R.configureTransmuxer = function e(R) {
                          var I = this.worker,
                            C = this.transmuxer;
                          I ? I.postMessage({ cmd: 'configure', config: R }) : C && C.configure(R);
                        }),
                        (R.handleTransmuxComplete = function e(R) {
                          (R.chunkMeta.transmuxing.end = self.performance.now()), this.onTransmuxComplete(R);
                        }),
                        e
                      );
                    })();
                },
                './src/demux/transmuxer-worker.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return o;
                    });
                  var O = C('./src/demux/transmuxer.ts'),
                    w = C('./src/events.ts'),
                    _ = C('./src/utils/logger.ts'),
                    x = C('./node_modules/eventemitter3/index.js');
                  function o(R) {
                    var I = new x.EventEmitter(),
                      C = function t(I, C) {
                        R.postMessage({ event: I, data: C });
                      };
                    I.on(w.Events.FRAG_DECRYPTED, C),
                      I.on(w.Events.ERROR, C),
                      R.addEventListener('message', function (w) {
                        var x = w.data;
                        switch (x.cmd) {
                          case 'init':
                            var P = JSON.parse(x.config);
                            (R.transmuxer = new O.default(I, x.typeSupported, P, x.vendor, x.id)),
                              Object(_.enableLogs)(P.debug),
                              C('init', null);
                            break;
                          case 'configure':
                            R.transmuxer.configure(x.config);
                            break;
                          case 'demux':
                            var F = R.transmuxer.push(x.data, x.decryptdata, x.chunkMeta, x.state);
                            Object(O.isPromise)(F)
                              ? F.then(function (I) {
                                  l(R, I);
                                })
                              : l(R, F);
                            break;
                          case 'flush':
                            var M = x.chunkMeta,
                              N = R.transmuxer.flush(M);
                            Object(O.isPromise)(N)
                              ? N.then(function (I) {
                                  f(R, I, M);
                                })
                              : f(R, N, M);
                        }
                      });
                  }
                  function l(R, I) {
                    if (
                      !(function c(R) {
                        return !(R.audio || R.video || R.text || R.id3 || R.initSegment);
                      })(I.remuxResult)
                    ) {
                      var C = [],
                        O = I.remuxResult,
                        w = O.audio,
                        _ = O.video;
                      w && u(C, w), _ && u(C, _), R.postMessage({ event: 'transmuxComplete', data: I }, C);
                    }
                  }
                  function u(R, I) {
                    I.data1 && R.push(I.data1.buffer), I.data2 && R.push(I.data2.buffer);
                  }
                  function f(R, I, C) {
                    I.forEach(function (I) {
                      l(R, I);
                    }),
                      R.postMessage({ event: 'flush', data: C });
                  }
                },
                './src/demux/transmuxer.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return W;
                    }),
                    C.d(I, 'isPromise', function () {
                      return b;
                    }),
                    C.d(I, 'TransmuxConfig', function () {
                      return z;
                    }),
                    C.d(I, 'TransmuxState', function () {
                      return X;
                    });
                  var O,
                    w = C('./src/events.ts'),
                    _ = C('./src/errors.ts'),
                    x = C('./src/crypt/decrypter.ts'),
                    P = C('./src/demux/aacdemuxer.ts'),
                    F = C('./src/demux/mp4demuxer.ts'),
                    M = C('./src/demux/tsdemuxer.ts'),
                    N = C('./src/demux/mp3demuxer.ts'),
                    B = C('./src/remux/mp4-remuxer.ts'),
                    U = C('./src/remux/passthrough-remuxer.ts'),
                    G = C('./src/demux/chunk-cache.ts'),
                    j = C('./src/utils/mp4-tools.ts'),
                    K = C('./src/utils/logger.ts');
                  try {
                    O = self.performance.now.bind(self.performance);
                  } catch (R) {
                    K.logger.debug('Unable to use Performance API on this environment'), (O = self.Date.now);
                  }
                  var H = [
                      { demux: M.default, remux: B.default },
                      { demux: F.default, remux: U.default },
                      { demux: P.default, remux: B.default },
                      { demux: N.default, remux: B.default },
                    ],
                    V = 1024;
                  H.forEach(function (R) {
                    var I = R.demux;
                    V = Math.max(V, I.minProbeByteLength);
                  });
                  var W = (function () {
                    function e(R, I, C, O, w) {
                      (this.observer = void 0),
                        (this.typeSupported = void 0),
                        (this.config = void 0),
                        (this.vendor = void 0),
                        (this.id = void 0),
                        (this.demuxer = void 0),
                        (this.remuxer = void 0),
                        (this.decrypter = void 0),
                        (this.probe = void 0),
                        (this.decryptionPromise = null),
                        (this.transmuxConfig = void 0),
                        (this.currentTransmuxState = void 0),
                        (this.cache = new G.default()),
                        (this.observer = R),
                        (this.typeSupported = I),
                        (this.config = C),
                        (this.vendor = O),
                        (this.id = w);
                    }
                    var R = e.prototype;
                    return (
                      (R.configure = function e(R) {
                        (this.transmuxConfig = R), this.decrypter && this.decrypter.reset();
                      }),
                      (R.push = function e(R, I, C, w) {
                        var _ = this,
                          x = C.transmuxing;
                        x.executeStart = O();
                        var P = new Uint8Array(R),
                          F = this.cache,
                          M = this.config,
                          N = this.currentTransmuxState,
                          B = this.transmuxConfig;
                        w && (this.currentTransmuxState = w);
                        var U = (function E(R, I) {
                          var C = null;
                          R.byteLength > 0 &&
                            null != I &&
                            null != I.key &&
                            null !== I.iv &&
                            null != I.method &&
                            (C = I);
                          return C;
                        })(P, I);
                        if (U && 'AES-128' === U.method) {
                          var G = this.getDecrypter();
                          if (!M.enableSoftwareAES)
                            return (
                              (this.decryptionPromise = G.webCryptoDecrypt(P, U.key.buffer, U.iv.buffer).then(function (
                                R
                              ) {
                                var I = _.push(R, null, C);
                                return (_.decryptionPromise = null), I;
                              })),
                              this.decryptionPromise
                            );
                          var K = G.softwareDecrypt(P, U.key.buffer, U.iv.buffer);
                          if (!K) return (x.executeEnd = O()), Y(C);
                          P = new Uint8Array(K);
                        }
                        var H = w || N,
                          V = H.contiguous,
                          W = H.discontinuity,
                          z = H.trackSwitch,
                          X = H.accurateTimeOffset,
                          q = H.timeOffset,
                          Z = H.initSegmentChange,
                          Q = B.audioCodec,
                          J = B.videoCodec,
                          $ = B.defaultInitPts,
                          ee = B.duration,
                          te = B.initSegmentData;
                        if (
                          ((W || z || Z) && this.resetInitSegment(te, Q, J, ee),
                          (W || Z) && this.resetInitialTimestamp($),
                          V || this.resetContiguity(),
                          this.needsProbing(P, W, z))
                        ) {
                          if (F.dataLength) {
                            var re = F.flush();
                            P = Object(j.appendUint8Array)(re, P);
                          }
                          this.configureTransmuxer(P, B);
                        }
                        var ie = this.transmux(P, U, q, X, C),
                          ne = this.currentTransmuxState;
                        return (
                          (ne.contiguous = !0), (ne.discontinuity = !1), (ne.trackSwitch = !1), (x.executeEnd = O()), ie
                        );
                      }),
                      (R.flush = function e(R) {
                        var I = this,
                          C = R.transmuxing;
                        C.executeStart = O();
                        var x = this.decrypter,
                          P = this.cache,
                          F = this.currentTransmuxState,
                          M = this.decryptionPromise;
                        if (M)
                          return M.then(function () {
                            return I.flush(R);
                          });
                        var N = [],
                          B = F.timeOffset;
                        if (x) {
                          var U = x.flush();
                          U && N.push(this.push(U, null, R));
                        }
                        var G = P.dataLength;
                        P.reset();
                        var j = this.demuxer,
                          K = this.remuxer;
                        if (!j || !K)
                          return (
                            G >= V &&
                              this.observer.emit(w.Events.ERROR, w.Events.ERROR, {
                                type: _.ErrorTypes.MEDIA_ERROR,
                                details: _.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !0,
                                reason: 'no demux matching with content found',
                              }),
                            (C.executeEnd = O()),
                            [Y(R)]
                          );
                        var H = j.flush(B);
                        return b(H)
                          ? H.then(function (C) {
                              return I.flushRemux(N, C, R), N;
                            })
                          : (this.flushRemux(N, H, R), N);
                      }),
                      (R.flushRemux = function e(R, I, C) {
                        var w = I.audioTrack,
                          _ = I.avcTrack,
                          x = I.id3Track,
                          P = I.textTrack,
                          F = this.currentTransmuxState,
                          M = F.accurateTimeOffset,
                          N = F.timeOffset;
                        K.logger.log(
                          '[transmuxer.ts]: Flushed fragment ' +
                            C.sn +
                            (C.part > -1 ? ' p: ' + C.part : '') +
                            ' of level ' +
                            C.level
                        );
                        var B = this.remuxer.remux(w, _, x, P, N, M, !0, this.id);
                        R.push({ remuxResult: B, chunkMeta: C }), (C.transmuxing.executeEnd = O());
                      }),
                      (R.resetInitialTimestamp = function e(R) {
                        var I = this.demuxer,
                          C = this.remuxer;
                        I && C && (I.resetTimeStamp(R), C.resetTimeStamp(R));
                      }),
                      (R.resetContiguity = function e() {
                        var R = this.demuxer,
                          I = this.remuxer;
                        R && I && (R.resetContiguity(), I.resetNextTimestamp());
                      }),
                      (R.resetInitSegment = function e(R, I, C, O) {
                        var w = this.demuxer,
                          _ = this.remuxer;
                        w && _ && (w.resetInitSegment(I, C, O), _.resetInitSegment(R, I, C));
                      }),
                      (R.destroy = function e() {
                        this.demuxer && (this.demuxer.destroy(), (this.demuxer = void 0)),
                          this.remuxer && (this.remuxer.destroy(), (this.remuxer = void 0));
                      }),
                      (R.transmux = function e(R, I, C, O, w) {
                        return I && 'SAMPLE-AES' === I.method
                          ? this.transmuxSampleAes(R, I, C, O, w)
                          : this.transmuxUnencrypted(R, C, O, w);
                      }),
                      (R.transmuxUnencrypted = function e(R, I, C, O) {
                        var w = this.demuxer.demux(R, I, !1, !this.config.progressive),
                          _ = w.audioTrack,
                          x = w.avcTrack,
                          P = w.id3Track,
                          F = w.textTrack;
                        return { remuxResult: this.remuxer.remux(_, x, P, F, I, C, !1, this.id), chunkMeta: O };
                      }),
                      (R.transmuxSampleAes = function e(R, I, C, O, w) {
                        var _ = this;
                        return this.demuxer.demuxSampleAes(R, I, C).then(function (R) {
                          return {
                            remuxResult: _.remuxer.remux(
                              R.audioTrack,
                              R.avcTrack,
                              R.id3Track,
                              R.textTrack,
                              C,
                              O,
                              !1,
                              _.id
                            ),
                            chunkMeta: w,
                          };
                        });
                      }),
                      (R.configureTransmuxer = function e(R, I) {
                        for (
                          var C,
                            O = this.config,
                            w = this.observer,
                            _ = this.typeSupported,
                            x = this.vendor,
                            P = I.audioCodec,
                            M = I.defaultInitPts,
                            N = I.duration,
                            B = I.initSegmentData,
                            G = I.videoCodec,
                            j = 0,
                            V = H.length;
                          j < V;
                          j++
                        )
                          if (H[j].demux.probe(R)) {
                            C = H[j];
                            break;
                          }
                        C ||
                          (K.logger.warn('Failed to find demuxer by probing frag, treating as mp4 passthrough'),
                          (C = { demux: F.default, remux: U.default }));
                        var W = this.demuxer,
                          Y = this.remuxer,
                          z = C.remux,
                          X = C.demux;
                        (Y && Y instanceof z) || (this.remuxer = new z(w, O, _, x)),
                          (W && W instanceof X) || ((this.demuxer = new X(w, O, _)), (this.probe = X.probe)),
                          this.resetInitSegment(B, P, G, N),
                          this.resetInitialTimestamp(M);
                      }),
                      (R.needsProbing = function e(R, I, C) {
                        return !this.demuxer || !this.remuxer || I || C;
                      }),
                      (R.getDecrypter = function e() {
                        var R = this.decrypter;
                        return R || (R = this.decrypter = new x.default(this.observer, this.config)), R;
                      }),
                      e
                    );
                  })();
                  var Y = function e(R) {
                    return { remuxResult: {}, chunkMeta: R };
                  };
                  function b(R) {
                    return 'then' in R && R.then instanceof Function;
                  }
                  var z = function e(R, I, C, O, w) {
                      (this.audioCodec = void 0),
                        (this.videoCodec = void 0),
                        (this.initSegmentData = void 0),
                        (this.duration = void 0),
                        (this.defaultInitPts = void 0),
                        (this.audioCodec = R),
                        (this.videoCodec = I),
                        (this.initSegmentData = C),
                        (this.duration = O),
                        (this.defaultInitPts = w);
                    },
                    X = function e(R, I, C, O, w, _) {
                      (this.discontinuity = void 0),
                        (this.contiguous = void 0),
                        (this.accurateTimeOffset = void 0),
                        (this.trackSwitch = void 0),
                        (this.timeOffset = void 0),
                        (this.initSegmentChange = void 0),
                        (this.discontinuity = R),
                        (this.contiguous = I),
                        (this.accurateTimeOffset = C),
                        (this.trackSwitch = O),
                        (this.timeOffset = w),
                        (this.initSegmentChange = _);
                    };
                },
                './src/demux/tsdemuxer.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'discardEPB', function () {
                      return T;
                    });
                  var O = C('./src/demux/adts.ts'),
                    w = C('./src/demux/mpegaudio.ts'),
                    _ = C('./src/demux/exp-golomb.ts'),
                    x = C('./src/demux/id3.ts'),
                    P = C('./src/demux/sample-aes.ts'),
                    F = C('./src/events.ts'),
                    M = C('./src/utils/mp4-tools.ts'),
                    N = C('./src/utils/logger.ts'),
                    B = C('./src/errors.ts'),
                    U = { video: 1, audio: 2, id3: 3, text: 4 },
                    G = (function () {
                      function e(R, I, C) {
                        (this.observer = void 0),
                          (this.config = void 0),
                          (this.typeSupported = void 0),
                          (this.sampleAes = null),
                          (this.pmtParsed = !1),
                          (this.audioCodec = void 0),
                          (this.videoCodec = void 0),
                          (this._duration = 0),
                          (this.aacLastPTS = null),
                          (this._initPTS = null),
                          (this._initDTS = null),
                          (this._pmtId = -1),
                          (this._avcTrack = void 0),
                          (this._audioTrack = void 0),
                          (this._id3Track = void 0),
                          (this._txtTrack = void 0),
                          (this.aacOverFlow = null),
                          (this.avcSample = null),
                          (this.remainderData = null),
                          (this.observer = R),
                          (this.config = I),
                          (this.typeSupported = C);
                      }
                      (e.probe = function t(R) {
                        var I = e.syncOffset(R);
                        return (
                          !(I < 0) &&
                          (I &&
                            N.logger.warn(
                              'MPEG2-TS detected but first sync word found @ offset ' + I + ', junk ahead ?'
                            ),
                          !0)
                        );
                      }),
                        (e.syncOffset = function e(R) {
                          for (var I = Math.min(1e3, R.length - 564), C = 0; C < I; ) {
                            if (71 === R[C] && 71 === R[C + 188] && 71 === R[C + 376]) return C;
                            C++;
                          }
                          return -1;
                        }),
                        (e.createTrack = function e(R, I) {
                          return {
                            container: 'video' === R || 'audio' === R ? 'video/mp2t' : void 0,
                            type: R,
                            id: U[R],
                            pid: -1,
                            inputTimeScale: 9e4,
                            sequenceNumber: 0,
                            samples: [],
                            dropped: 0,
                            duration: 'audio' === R ? I : void 0,
                          };
                        });
                      var R = e.prototype;
                      return (
                        (R.resetInitSegment = function t(R, I, C) {
                          (this.pmtParsed = !1),
                            (this._pmtId = -1),
                            (this._avcTrack = e.createTrack('video', C)),
                            (this._audioTrack = e.createTrack('audio', C)),
                            (this._id3Track = e.createTrack('id3', C)),
                            (this._txtTrack = e.createTrack('text', C)),
                            (this._audioTrack.isAAC = !0),
                            (this.aacOverFlow = null),
                            (this.aacLastPTS = null),
                            (this.avcSample = null),
                            (this.audioCodec = R),
                            (this.videoCodec = I),
                            (this._duration = C);
                        }),
                        (R.resetTimeStamp = function e() {}),
                        (R.resetContiguity = function e() {
                          var R = this._audioTrack,
                            I = this._avcTrack,
                            C = this._id3Track;
                          R && (R.pesData = null),
                            I && (I.pesData = null),
                            C && (C.pesData = null),
                            (this.aacOverFlow = null),
                            (this.aacLastPTS = null);
                        }),
                        (R.demux = function t(R, I, C, O) {
                          var w;
                          void 0 === C && (C = !1), void 0 === O && (O = !1), C || (this.sampleAes = null);
                          var _ = this._avcTrack,
                            x = this._audioTrack,
                            P = this._id3Track,
                            U = _.pid,
                            G = _.pesData,
                            j = x.pid,
                            K = P.pid,
                            H = x.pesData,
                            V = P.pesData,
                            W = !1,
                            Y = this.pmtParsed,
                            z = this._pmtId,
                            X = R.length;
                          if (
                            (this.remainderData &&
                              ((X = (R = Object(M.appendUint8Array)(this.remainderData, R)).length),
                              (this.remainderData = null)),
                            X < 188 && !O)
                          )
                            return (
                              (this.remainderData = R),
                              { audioTrack: x, avcTrack: _, id3Track: P, textTrack: this._txtTrack }
                            );
                          var q = Math.max(0, e.syncOffset(R));
                          (X -= (X + q) % 188) < R.byteLength &&
                            !O &&
                            (this.remainderData = new Uint8Array(R.buffer, X, R.buffer.byteLength - X));
                          for (var Z = 0, Q = q; Q < X; Q += 188)
                            if (71 === R[Q]) {
                              var J = !!(64 & R[Q + 1]),
                                $ = ((31 & R[Q + 1]) << 8) + R[Q + 2],
                                ee = void 0;
                              if ((48 & R[Q + 3]) >> 4 > 1) {
                                if ((ee = Q + 5 + R[Q + 4]) === Q + 188) continue;
                              } else ee = Q + 4;
                              switch ($) {
                                case U:
                                  J && (G && (w = m(G)) && this.parseAVCPES(w, !1), (G = { data: [], size: 0 })),
                                    G && (G.data.push(R.subarray(ee, Q + 188)), (G.size += Q + 188 - ee));
                                  break;
                                case j:
                                  J &&
                                    (H && (w = m(H)) && (x.isAAC ? this.parseAACPES(w) : this.parseMPEGPES(w)),
                                    (H = { data: [], size: 0 })),
                                    H && (H.data.push(R.subarray(ee, Q + 188)), (H.size += Q + 188 - ee));
                                  break;
                                case K:
                                  J && (V && (w = m(V)) && this.parseID3PES(w), (V = { data: [], size: 0 })),
                                    V && (V.data.push(R.subarray(ee, Q + 188)), (V.size += Q + 188 - ee));
                                  break;
                                case 0:
                                  J && (ee += R[ee] + 1), (z = this._pmtId = g(R, ee));
                                  break;
                                case z:
                                  J && (ee += R[ee] + 1);
                                  var te = p(R, ee, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, C);
                                  (U = te.avc) > 0 && (_.pid = U),
                                    (j = te.audio) > 0 && ((x.pid = j), (x.isAAC = te.isAAC)),
                                    (K = te.id3) > 0 && (P.pid = K),
                                    W && !Y && (N.logger.log('reparse from beginning'), (W = !1), (Q = q - 188)),
                                    (Y = this.pmtParsed = !0);
                                  break;
                                case 17:
                                case 8191:
                                  break;
                                default:
                                  W = !0;
                              }
                            } else Z++;
                          Z > 0 &&
                            this.observer.emit(F.Events.ERROR, F.Events.ERROR, {
                              type: B.ErrorTypes.MEDIA_ERROR,
                              details: B.ErrorDetails.FRAG_PARSING_ERROR,
                              fatal: !1,
                              reason: 'Found ' + Z + ' TS packet/s that do not start with 0x47',
                            }),
                            (_.pesData = G),
                            (x.pesData = H),
                            (P.pesData = V);
                          var re = { audioTrack: x, avcTrack: _, id3Track: P, textTrack: this._txtTrack };
                          return O && this.extractRemainingSamples(re), re;
                        }),
                        (R.flush = function e() {
                          var R,
                            I = this.remainderData;
                          return (
                            (this.remainderData = null),
                            (R = I
                              ? this.demux(I, -1, !1, !0)
                              : {
                                  audioTrack: this._audioTrack,
                                  avcTrack: this._avcTrack,
                                  textTrack: this._txtTrack,
                                  id3Track: this._id3Track,
                                }),
                            this.extractRemainingSamples(R),
                            this.sampleAes ? this.decrypt(R, this.sampleAes) : R
                          );
                        }),
                        (R.extractRemainingSamples = function e(R) {
                          var I,
                            C = R.audioTrack,
                            O = R.avcTrack,
                            w = R.id3Track,
                            _ = O.pesData,
                            x = C.pesData,
                            P = w.pesData;
                          _ && (I = m(_)) ? (this.parseAVCPES(I, !0), (O.pesData = null)) : (O.pesData = _),
                            x && (I = m(x))
                              ? (C.isAAC ? this.parseAACPES(I) : this.parseMPEGPES(I), (C.pesData = null))
                              : (null != x &&
                                  x.size &&
                                  N.logger.log('last AAC PES packet truncated,might overlap between fragments'),
                                (C.pesData = x)),
                            P && (I = m(P)) ? (this.parseID3PES(I), (w.pesData = null)) : (w.pesData = P);
                        }),
                        (R.demuxSampleAes = function e(R, I, C) {
                          var O = this.demux(R, C, !0, !this.config.progressive),
                            w = (this.sampleAes = new P.default(this.observer, this.config, I));
                          return this.decrypt(O, w);
                        }),
                        (R.decrypt = function e(R, I) {
                          return new Promise(function (C) {
                            var O = R.audioTrack,
                              w = R.avcTrack;
                            O.samples && O.isAAC
                              ? I.decryptAacSamples(O.samples, 0, function () {
                                  w.samples
                                    ? I.decryptAvcSamples(w.samples, 0, 0, function () {
                                        C(R);
                                      })
                                    : C(R);
                                })
                              : w.samples &&
                                I.decryptAvcSamples(w.samples, 0, 0, function () {
                                  C(R);
                                });
                          });
                        }),
                        (R.destroy = function e() {
                          (this._initPTS = this._initDTS = null), (this._duration = 0);
                        }),
                        (R.parseAVCPES = function e(R, I) {
                          var C,
                            O = this,
                            w = this._avcTrack,
                            P = this.parseAVCNALu(R.data),
                            F = this.avcSample,
                            M = !1;
                          (R.data = null),
                            F && P.length && !w.audFound && (y(F, w), (F = this.avcSample = v(!1, R.pts, R.dts, ''))),
                            P.forEach(function (I) {
                              switch (I.type) {
                                case 1:
                                  (C = !0), F || (F = O.avcSample = v(!0, R.pts, R.dts, '')), (F.frame = !0);
                                  var P = I.data;
                                  if (M && P.length > 4) {
                                    var N = new _.default(P).readSliceType();
                                    (2 !== N && 4 !== N && 7 !== N && 9 !== N) || (F.key = !0);
                                  }
                                  break;
                                case 5:
                                  (C = !0),
                                    F || (F = O.avcSample = v(!0, R.pts, R.dts, '')),
                                    (F.key = !0),
                                    (F.frame = !0);
                                  break;
                                case 6:
                                  C = !0;
                                  var B = new _.default(T(I.data));
                                  B.readUByte();
                                  for (var U = 0, G = 0, j = !1, K = 0; !j && B.bytesAvailable > 1; ) {
                                    U = 0;
                                    do {
                                      U += K = B.readUByte();
                                    } while (255 === K);
                                    G = 0;
                                    do {
                                      G += K = B.readUByte();
                                    } while (255 === K);
                                    if (4 === U && 0 !== B.bytesAvailable) {
                                      if (((j = !0), 181 === B.readUByte()))
                                        if (49 === B.readUShort())
                                          if (1195456820 === B.readUInt())
                                            if (3 === B.readUByte()) {
                                              for (
                                                var H = B.readUByte(), V = 31 & H, W = [H, B.readUByte()], Y = 0;
                                                Y < V;
                                                Y++
                                              )
                                                W.push(B.readUByte()), W.push(B.readUByte()), W.push(B.readUByte());
                                              E(O._txtTrack.samples, { type: 3, pts: R.pts, bytes: W });
                                            }
                                    } else if (5 === U && 0 !== B.bytesAvailable) {
                                      if (((j = !0), G > 16)) {
                                        for (var z = [], X = 0; X < 16; X++)
                                          z.push(B.readUByte().toString(16)),
                                            (3 !== X && 5 !== X && 7 !== X && 9 !== X) || z.push('-');
                                        for (var q = G - 16, Z = new Uint8Array(q), Q = 0; Q < q; Q++)
                                          Z[Q] = B.readUByte();
                                        E(O._txtTrack.samples, {
                                          pts: R.pts,
                                          payloadType: U,
                                          uuid: z.join(''),
                                          userData: Object(x.utf8ArrayToStr)(Z),
                                          userDataBytes: Z,
                                        });
                                      }
                                    } else if (G < B.bytesAvailable) for (var J = 0; J < G; J++) B.readUByte();
                                  }
                                  break;
                                case 7:
                                  if (((C = !0), (M = !0), !w.sps)) {
                                    var $ = new _.default(I.data).readSPS();
                                    (w.width = $.width),
                                      (w.height = $.height),
                                      (w.pixelRatio = $.pixelRatio),
                                      (w.sps = [I.data]),
                                      (w.duration = O._duration);
                                    for (var ee = I.data.subarray(1, 4), te = 'avc1.', re = 0; re < 3; re++) {
                                      var ie = ee[re].toString(16);
                                      ie.length < 2 && (ie = '0' + ie), (te += ie);
                                    }
                                    w.codec = te;
                                  }
                                  break;
                                case 8:
                                  (C = !0), w.pps || (w.pps = [I.data]);
                                  break;
                                case 9:
                                  (C = !1),
                                    (w.audFound = !0),
                                    F && y(F, w),
                                    (F = O.avcSample = v(!1, R.pts, R.dts, ''));
                                  break;
                                case 12:
                                  C = !1;
                                  break;
                                default:
                                  (C = !1), F && (F.debug += 'unknown NAL ' + I.type + ' ');
                              }
                              F && C && F.units.push(I);
                            }),
                            I && F && (y(F, w), (this.avcSample = null));
                        }),
                        (R.getLastNalUnit = function e() {
                          var R,
                            I,
                            C = this.avcSample;
                          if (!C || 0 === C.units.length) {
                            var O = this._avcTrack.samples;
                            C = O[O.length - 1];
                          }
                          if (null !== (R = C) && void 0 !== R && R.units) {
                            var w = C.units;
                            I = w[w.length - 1];
                          }
                          return I;
                        }),
                        (R.parseAVCNALu = function e(R) {
                          var I,
                            C,
                            O = R.byteLength,
                            w = this._avcTrack,
                            _ = w.naluState || 0,
                            x = _,
                            P = [],
                            F = 0,
                            M = -1,
                            N = 0;
                          for (-1 === _ && ((M = 0), (N = 31 & R[0]), (_ = 0), (F = 1)); F < O; )
                            if (((I = R[F++]), _))
                              if (1 !== _)
                                if (I)
                                  if (1 === I) {
                                    if (M >= 0) {
                                      var B = { data: R.subarray(M, F - _ - 1), type: N };
                                      P.push(B);
                                    } else {
                                      var U = this.getLastNalUnit();
                                      if (
                                        U &&
                                        (x &&
                                          F <= 4 - x &&
                                          U.state &&
                                          (U.data = U.data.subarray(0, U.data.byteLength - x)),
                                        (C = F - _ - 1) > 0)
                                      ) {
                                        var G = new Uint8Array(U.data.byteLength + C);
                                        G.set(U.data, 0),
                                          G.set(R.subarray(0, C), U.data.byteLength),
                                          (U.data = G),
                                          (U.state = 0);
                                      }
                                    }
                                    F < O ? ((M = F), (N = 31 & R[F]), (_ = 0)) : (_ = -1);
                                  } else _ = 0;
                                else _ = 3;
                              else _ = I ? 0 : 2;
                            else _ = I ? 0 : 1;
                          if (M >= 0 && _ >= 0) {
                            var j = { data: R.subarray(M, O), type: N, state: _ };
                            P.push(j);
                          }
                          if (0 === P.length) {
                            var K = this.getLastNalUnit();
                            if (K) {
                              var H = new Uint8Array(K.data.byteLength + R.byteLength);
                              H.set(K.data, 0), H.set(R, K.data.byteLength), (K.data = H);
                            }
                          }
                          return (w.naluState = _), P;
                        }),
                        (R.parseAACPES = function e(R) {
                          var I,
                            C,
                            w,
                            _,
                            x,
                            P = 0,
                            M = this._audioTrack,
                            U = this.aacOverFlow,
                            G = R.data;
                          if (U) {
                            this.aacOverFlow = null;
                            var j = U.sample.unit.byteLength,
                              K = Math.min(U.missing, j),
                              H = j - K;
                            U.sample.unit.set(G.subarray(0, K), H), M.samples.push(U.sample), (P = U.missing);
                          }
                          for (I = P, C = G.length; I < C - 1 && !O.isHeader(G, I); I++);
                          if (
                            I !== P &&
                            (I < C - 1
                              ? ((w = 'AAC PES did not start with ADTS header,offset:' + I), (_ = !1))
                              : ((w = 'no ADTS header found in AAC PES'), (_ = !0)),
                            N.logger.warn('parsing error:' + w),
                            this.observer.emit(F.Events.ERROR, F.Events.ERROR, {
                              type: B.ErrorTypes.MEDIA_ERROR,
                              details: B.ErrorDetails.FRAG_PARSING_ERROR,
                              fatal: _,
                              reason: w,
                            }),
                            _)
                          )
                            return;
                          if ((O.initTrackConfig(M, this.observer, G, I, this.audioCodec), void 0 !== R.pts)) x = R.pts;
                          else {
                            if (!U) return void N.logger.warn('[tsdemuxer]: AAC PES unknown PTS');
                            var V = O.getFrameDuration(M.samplerate);
                            x = U.sample.pts + V;
                          }
                          for (var W = 0; I < C; ) {
                            if (O.isHeader(G, I)) {
                              if (I + 5 < C) {
                                var Y = O.appendFrame(M, G, I, x, W);
                                if (Y) {
                                  if (!Y.missing) {
                                    (I += Y.length), W++;
                                    continue;
                                  }
                                  this.aacOverFlow = Y;
                                }
                              }
                              break;
                            }
                            I++;
                          }
                        }),
                        (R.parseMPEGPES = function e(R) {
                          var I = R.data,
                            C = I.length,
                            O = 0,
                            _ = 0,
                            x = R.pts;
                          if (void 0 !== x)
                            for (; _ < C; )
                              if (w.isHeader(I, _)) {
                                var P = w.appendFrame(this._audioTrack, I, _, x, O);
                                if (!P) break;
                                (_ += P.length), O++;
                              } else _++;
                          else N.logger.warn('[tsdemuxer]: MPEG PES unknown PTS');
                        }),
                        (R.parseID3PES = function e(R) {
                          void 0 !== R.pts
                            ? this._id3Track.samples.push(R)
                            : N.logger.warn('[tsdemuxer]: ID3 PES unknown PTS');
                        }),
                        e
                      );
                    })();
                  function v(R, I, C, O) {
                    return { key: R, frame: !1, pts: I, dts: C, units: [], debug: O, length: 0 };
                  }
                  function g(R, I) {
                    return ((31 & R[I + 10]) << 8) | R[I + 11];
                  }
                  function p(R, I, C, O) {
                    var w = { audio: -1, avc: -1, id3: -1, isAAC: !0 },
                      _ = I + 3 + (((15 & R[I + 1]) << 8) | R[I + 2]) - 4;
                    for (I += 12 + (((15 & R[I + 10]) << 8) | R[I + 11]); I < _; ) {
                      var x = ((31 & R[I + 1]) << 8) | R[I + 2];
                      switch (R[I]) {
                        case 207:
                          if (!O) {
                            N.logger.log('ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream');
                            break;
                          }
                        case 15:
                          -1 === w.audio && (w.audio = x);
                          break;
                        case 21:
                          -1 === w.id3 && (w.id3 = x);
                          break;
                        case 219:
                          if (!O) {
                            N.logger.log('H.264 with AES-128-CBC slice encryption found in unencrypted stream');
                            break;
                          }
                        case 27:
                          -1 === w.avc && (w.avc = x);
                          break;
                        case 3:
                        case 4:
                          C
                            ? -1 === w.audio && ((w.audio = x), (w.isAAC = !1))
                            : N.logger.log('MPEG audio found, not supported in this browser');
                          break;
                        case 36:
                          N.logger.warn('Unsupported HEVC stream type found');
                      }
                      I += 5 + (((15 & R[I + 3]) << 8) | R[I + 4]);
                    }
                    return w;
                  }
                  function m(R) {
                    var I,
                      C,
                      O,
                      w,
                      _,
                      x = 0,
                      P = R.data;
                    if (!R || 0 === R.size) return null;
                    for (; P[0].length < 19 && P.length > 1; ) {
                      var F = new Uint8Array(P[0].length + P[1].length);
                      F.set(P[0]), F.set(P[1], P[0].length), (P[0] = F), P.splice(1, 1);
                    }
                    if (1 === ((I = P[0])[0] << 16) + (I[1] << 8) + I[2]) {
                      if ((C = (I[4] << 8) + I[5]) && C > R.size - 6) return null;
                      var M = I[7];
                      192 & M &&
                        ((w =
                          536870912 * (14 & I[9]) +
                          4194304 * (255 & I[10]) +
                          16384 * (254 & I[11]) +
                          128 * (255 & I[12]) +
                          (254 & I[13]) / 2),
                        64 & M
                          ? w -
                              (_ =
                                536870912 * (14 & I[14]) +
                                4194304 * (255 & I[15]) +
                                16384 * (254 & I[16]) +
                                128 * (255 & I[17]) +
                                (254 & I[18]) / 2) >
                              54e5 &&
                            (N.logger.warn(Math.round((w - _) / 9e4) + 's delta between PTS and DTS, align them'),
                            (w = _))
                          : (_ = w));
                      var B = (O = I[8]) + 9;
                      if (R.size <= B) return null;
                      R.size -= B;
                      for (var U = new Uint8Array(R.size), G = 0, j = P.length; G < j; G++) {
                        var K = (I = P[G]).byteLength;
                        if (B) {
                          if (B > K) {
                            B -= K;
                            continue;
                          }
                          (I = I.subarray(B)), (K -= B), (B = 0);
                        }
                        U.set(I, x), (x += K);
                      }
                      return C && (C -= O + 3), { data: U, pts: w, dts: _, len: C };
                    }
                    return null;
                  }
                  function y(R, I) {
                    if (R.units.length && R.frame) {
                      if (void 0 === R.pts) {
                        var C = I.samples,
                          O = C.length;
                        if (!O) return void I.dropped++;
                        var w = C[O - 1];
                        (R.pts = w.pts), (R.dts = w.dts);
                      }
                      I.samples.push(R);
                    }
                    R.debug.length && N.logger.log(R.pts + '/' + R.dts + ':' + R.debug);
                  }
                  function E(R, I) {
                    var C = R.length;
                    if (C > 0) {
                      if (I.pts >= R[C - 1].pts) R.push(I);
                      else
                        for (var O = C - 1; O >= 0; O--)
                          if (I.pts < R[O].pts) {
                            R.splice(O, 0, I);
                            break;
                          }
                    } else R.push(I);
                  }
                  function T(R) {
                    for (var I = R.byteLength, C = [], O = 1; O < I - 2; )
                      0 === R[O] && 0 === R[O + 1] && 3 === R[O + 2] ? (C.push(O + 2), (O += 2)) : O++;
                    if (0 === C.length) return R;
                    var w = I - C.length,
                      _ = new Uint8Array(w),
                      x = 0;
                    for (O = 0; O < w; x++, O++) x === C[0] && (x++, C.shift()), (_[O] = R[x]);
                    return _;
                  }
                  (G.minProbeByteLength = 188), (I.default = G);
                },
                './src/errors.ts': function (R, I, C) {
                  var O, w;
                  C.r(I),
                    C.d(I, 'ErrorTypes', function () {
                      return O;
                    }),
                    C.d(I, 'ErrorDetails', function () {
                      return w;
                    }),
                    (function (R) {
                      (R.NETWORK_ERROR = 'networkError'),
                        (R.MEDIA_ERROR = 'mediaError'),
                        (R.KEY_SYSTEM_ERROR = 'keySystemError'),
                        (R.MUX_ERROR = 'muxError'),
                        (R.OTHER_ERROR = 'otherError');
                    })(O || (O = {})),
                    (function (R) {
                      (R.KEY_SYSTEM_NO_KEYS = 'keySystemNoKeys'),
                        (R.KEY_SYSTEM_NO_ACCESS = 'keySystemNoAccess'),
                        (R.KEY_SYSTEM_NO_SESSION = 'keySystemNoSession'),
                        (R.KEY_SYSTEM_LICENSE_REQUEST_FAILED = 'keySystemLicenseRequestFailed'),
                        (R.KEY_SYSTEM_NO_INIT_DATA = 'keySystemNoInitData'),
                        (R.MANIFEST_LOAD_ERROR = 'manifestLoadError'),
                        (R.MANIFEST_LOAD_TIMEOUT = 'manifestLoadTimeOut'),
                        (R.MANIFEST_PARSING_ERROR = 'manifestParsingError'),
                        (R.MANIFEST_INCOMPATIBLE_CODECS_ERROR = 'manifestIncompatibleCodecsError'),
                        (R.LEVEL_EMPTY_ERROR = 'levelEmptyError'),
                        (R.LEVEL_LOAD_ERROR = 'levelLoadError'),
                        (R.LEVEL_LOAD_TIMEOUT = 'levelLoadTimeOut'),
                        (R.LEVEL_SWITCH_ERROR = 'levelSwitchError'),
                        (R.AUDIO_TRACK_LOAD_ERROR = 'audioTrackLoadError'),
                        (R.AUDIO_TRACK_LOAD_TIMEOUT = 'audioTrackLoadTimeOut'),
                        (R.SUBTITLE_LOAD_ERROR = 'subtitleTrackLoadError'),
                        (R.SUBTITLE_TRACK_LOAD_TIMEOUT = 'subtitleTrackLoadTimeOut'),
                        (R.FRAG_LOAD_ERROR = 'fragLoadError'),
                        (R.FRAG_LOAD_TIMEOUT = 'fragLoadTimeOut'),
                        (R.FRAG_DECRYPT_ERROR = 'fragDecryptError'),
                        (R.FRAG_PARSING_ERROR = 'fragParsingError'),
                        (R.REMUX_ALLOC_ERROR = 'remuxAllocError'),
                        (R.KEY_LOAD_ERROR = 'keyLoadError'),
                        (R.KEY_LOAD_TIMEOUT = 'keyLoadTimeOut'),
                        (R.BUFFER_ADD_CODEC_ERROR = 'bufferAddCodecError'),
                        (R.BUFFER_INCOMPATIBLE_CODECS_ERROR = 'bufferIncompatibleCodecsError'),
                        (R.BUFFER_APPEND_ERROR = 'bufferAppendError'),
                        (R.BUFFER_APPENDING_ERROR = 'bufferAppendingError'),
                        (R.BUFFER_STALLED_ERROR = 'bufferStalledError'),
                        (R.BUFFER_FULL_ERROR = 'bufferFullError'),
                        (R.BUFFER_SEEK_OVER_HOLE = 'bufferSeekOverHole'),
                        (R.BUFFER_NUDGE_ON_STALL = 'bufferNudgeOnStall'),
                        (R.INTERNAL_EXCEPTION = 'internalException'),
                        (R.INTERNAL_ABORTED = 'aborted'),
                        (R.UNKNOWN = 'unknown');
                    })(w || (w = {}));
                },
                './src/events.ts': function (R, I, C) {
                  var O;
                  C.r(I),
                    C.d(I, 'Events', function () {
                      return O;
                    }),
                    (function (R) {
                      (R.MEDIA_ATTACHING = 'hlsMediaAttaching'),
                        (R.MEDIA_ATTACHED = 'hlsMediaAttached'),
                        (R.MEDIA_DETACHING = 'hlsMediaDetaching'),
                        (R.MEDIA_DETACHED = 'hlsMediaDetached'),
                        (R.BUFFER_RESET = 'hlsBufferReset'),
                        (R.BUFFER_CODECS = 'hlsBufferCodecs'),
                        (R.BUFFER_CREATED = 'hlsBufferCreated'),
                        (R.BUFFER_APPENDING = 'hlsBufferAppending'),
                        (R.BUFFER_APPENDED = 'hlsBufferAppended'),
                        (R.BUFFER_EOS = 'hlsBufferEos'),
                        (R.BUFFER_FLUSHING = 'hlsBufferFlushing'),
                        (R.BUFFER_FLUSHED = 'hlsBufferFlushed'),
                        (R.MANIFEST_LOADING = 'hlsManifestLoading'),
                        (R.MANIFEST_LOADED = 'hlsManifestLoaded'),
                        (R.MANIFEST_PARSED = 'hlsManifestParsed'),
                        (R.LEVEL_SWITCHING = 'hlsLevelSwitching'),
                        (R.LEVEL_SWITCHED = 'hlsLevelSwitched'),
                        (R.LEVEL_LOADING = 'hlsLevelLoading'),
                        (R.LEVEL_LOADED = 'hlsLevelLoaded'),
                        (R.LEVEL_UPDATED = 'hlsLevelUpdated'),
                        (R.LEVEL_PTS_UPDATED = 'hlsLevelPtsUpdated'),
                        (R.LEVELS_UPDATED = 'hlsLevelsUpdated'),
                        (R.AUDIO_TRACKS_UPDATED = 'hlsAudioTracksUpdated'),
                        (R.AUDIO_TRACK_SWITCHING = 'hlsAudioTrackSwitching'),
                        (R.AUDIO_TRACK_SWITCHED = 'hlsAudioTrackSwitched'),
                        (R.AUDIO_TRACK_LOADING = 'hlsAudioTrackLoading'),
                        (R.AUDIO_TRACK_LOADED = 'hlsAudioTrackLoaded'),
                        (R.SUBTITLE_TRACKS_UPDATED = 'hlsSubtitleTracksUpdated'),
                        (R.SUBTITLE_TRACKS_CLEARED = 'hlsSubtitleTracksCleared'),
                        (R.SUBTITLE_TRACK_SWITCH = 'hlsSubtitleTrackSwitch'),
                        (R.SUBTITLE_TRACK_LOADING = 'hlsSubtitleTrackLoading'),
                        (R.SUBTITLE_TRACK_LOADED = 'hlsSubtitleTrackLoaded'),
                        (R.SUBTITLE_FRAG_PROCESSED = 'hlsSubtitleFragProcessed'),
                        (R.CUES_PARSED = 'hlsCuesParsed'),
                        (R.NON_NATIVE_TEXT_TRACKS_FOUND = 'hlsNonNativeTextTracksFound'),
                        (R.INIT_PTS_FOUND = 'hlsInitPtsFound'),
                        (R.FRAG_LOADING = 'hlsFragLoading'),
                        (R.FRAG_LOAD_EMERGENCY_ABORTED = 'hlsFragLoadEmergencyAborted'),
                        (R.FRAG_LOADED = 'hlsFragLoaded'),
                        (R.FRAG_DECRYPTED = 'hlsFragDecrypted'),
                        (R.FRAG_PARSING_INIT_SEGMENT = 'hlsFragParsingInitSegment'),
                        (R.FRAG_PARSING_USERDATA = 'hlsFragParsingUserdata'),
                        (R.FRAG_PARSING_METADATA = 'hlsFragParsingMetadata'),
                        (R.FRAG_PARSED = 'hlsFragParsed'),
                        (R.FRAG_BUFFERED = 'hlsFragBuffered'),
                        (R.FRAG_CHANGED = 'hlsFragChanged'),
                        (R.FPS_DROP = 'hlsFpsDrop'),
                        (R.FPS_DROP_LEVEL_CAPPING = 'hlsFpsDropLevelCapping'),
                        (R.ERROR = 'hlsError'),
                        (R.DESTROYING = 'hlsDestroying'),
                        (R.KEY_LOADING = 'hlsKeyLoading'),
                        (R.KEY_LOADED = 'hlsKeyLoaded'),
                        (R.LIVE_BACK_BUFFER_REACHED = 'hlsLiveBackBufferReached'),
                        (R.BACK_BUFFER_REACHED = 'hlsBackBufferReached');
                    })(O || (O = {}));
                },
                './src/hls.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return V;
                    });
                  var O = C('./node_modules/url-toolkit/src/url-toolkit.js'),
                    w = C('./src/loader/playlist-loader.ts'),
                    _ = C('./src/loader/key-loader.ts'),
                    x = C('./src/controller/id3-track-controller.ts'),
                    P = C('./src/controller/latency-controller.ts'),
                    F = C('./src/controller/level-controller.ts'),
                    M = C('./src/controller/fragment-tracker.ts'),
                    N = C('./src/controller/stream-controller.ts'),
                    B = C('./src/is-supported.ts'),
                    U = C('./src/utils/logger.ts'),
                    G = C('./src/config.ts'),
                    j = C('./node_modules/eventemitter3/index.js'),
                    K = C('./src/events.ts'),
                    H = C('./src/errors.ts');
                  function m(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  var V = (function () {
                    function e(R) {
                      void 0 === R && (R = {}),
                        (this.config = void 0),
                        (this.userConfig = void 0),
                        (this.coreComponents = void 0),
                        (this.networkControllers = void 0),
                        (this._emitter = new j.EventEmitter()),
                        (this._autoLevelCapping = void 0),
                        (this.abrController = void 0),
                        (this.bufferController = void 0),
                        (this.capLevelController = void 0),
                        (this.latencyController = void 0),
                        (this.levelController = void 0),
                        (this.streamController = void 0),
                        (this.audioTrackController = void 0),
                        (this.subtitleTrackController = void 0),
                        (this.emeController = void 0),
                        (this.cmcdController = void 0),
                        (this._media = null),
                        (this.url = null);
                      var I = (this.config = Object(G.mergeConfig)(e.DefaultConfig, R));
                      (this.userConfig = R),
                        Object(U.enableLogs)(I.debug),
                        (this._autoLevelCapping = -1),
                        I.progressive && Object(G.enableStreamingMode)(I);
                      var C = I.abrController,
                        O = I.bufferController,
                        B = I.capLevelController,
                        K = I.fpsController,
                        H = (this.abrController = new C(this)),
                        V = (this.bufferController = new O(this)),
                        W = (this.capLevelController = new B(this)),
                        Y = new K(this),
                        z = new w.default(this),
                        X = new _.default(this),
                        q = new x.default(this),
                        Z = (this.levelController = new F.default(this)),
                        Q = new M.FragmentTracker(this),
                        J = (this.streamController = new N.default(this, Q));
                      W.setStreamController(J), Y.setStreamController(J);
                      var $ = [Z, J];
                      this.networkControllers = $;
                      var ee = [z, X, H, V, W, Y, q, Q];
                      (this.audioTrackController = this.createController(I.audioTrackController, null, $)),
                        this.createController(I.audioStreamController, Q, $),
                        (this.subtitleTrackController = this.createController(I.subtitleTrackController, null, $)),
                        this.createController(I.subtitleStreamController, Q, $),
                        this.createController(I.timelineController, null, ee),
                        (this.emeController = this.createController(I.emeController, null, ee)),
                        (this.cmcdController = this.createController(I.cmcdController, null, ee)),
                        (this.latencyController = this.createController(P.default, null, ee)),
                        (this.coreComponents = ee);
                    }
                    e.isSupported = function e() {
                      return Object(B.isSupported)();
                    };
                    var R = e.prototype;
                    return (
                      (R.createController = function e(R, I, C) {
                        if (R) {
                          var O = I ? new R(this, I) : new R(this);
                          return C && C.push(O), O;
                        }
                        return null;
                      }),
                      (R.on = function e(R, I, C) {
                        void 0 === C && (C = this), this._emitter.on(R, I, C);
                      }),
                      (R.once = function e(R, I, C) {
                        void 0 === C && (C = this), this._emitter.once(R, I, C);
                      }),
                      (R.removeAllListeners = function e(R) {
                        this._emitter.removeAllListeners(R);
                      }),
                      (R.off = function e(R, I, C, O) {
                        void 0 === C && (C = this), this._emitter.off(R, I, C, O);
                      }),
                      (R.listeners = function e(R) {
                        return this._emitter.listeners(R);
                      }),
                      (R.emit = function e(R, I, C) {
                        return this._emitter.emit(R, I, C);
                      }),
                      (R.trigger = function e(R, I) {
                        if (this.config.debug) return this.emit(R, R, I);
                        try {
                          return this.emit(R, R, I);
                        } catch (e) {
                          U.logger.error(
                            'An internal error happened while handling event ' +
                              R +
                              '. Error message: "' +
                              e.message +
                              '". Here is a stacktrace:',
                            e
                          ),
                            this.trigger(K.Events.ERROR, {
                              type: H.ErrorTypes.OTHER_ERROR,
                              details: H.ErrorDetails.INTERNAL_EXCEPTION,
                              fatal: !1,
                              event: R,
                              error: e,
                            });
                        }
                        return !1;
                      }),
                      (R.listenerCount = function e(R) {
                        return this._emitter.listenerCount(R);
                      }),
                      (R.destroy = function e() {
                        U.logger.log('destroy'),
                          this.trigger(K.Events.DESTROYING, void 0),
                          this.detachMedia(),
                          this.removeAllListeners(),
                          (this._autoLevelCapping = -1),
                          (this.url = null),
                          this.networkControllers.forEach(function (R) {
                            return R.destroy();
                          }),
                          (this.networkControllers.length = 0),
                          this.coreComponents.forEach(function (R) {
                            return R.destroy();
                          }),
                          (this.coreComponents.length = 0);
                      }),
                      (R.attachMedia = function e(R) {
                        U.logger.log('attachMedia'),
                          (this._media = R),
                          this.trigger(K.Events.MEDIA_ATTACHING, { media: R });
                      }),
                      (R.detachMedia = function e() {
                        U.logger.log('detachMedia'),
                          this.trigger(K.Events.MEDIA_DETACHING, void 0),
                          (this._media = null);
                      }),
                      (R.loadSource = function e(R) {
                        this.stopLoad();
                        var I = this.media,
                          C = this.url,
                          w = (this.url = O.buildAbsoluteURL(self.location.href, R, { alwaysNormalize: !0 }));
                        U.logger.log('loadSource:' + w),
                          I &&
                            C &&
                            C !== w &&
                            this.bufferController.hasSourceTypes() &&
                            (this.detachMedia(), this.attachMedia(I)),
                          this.trigger(K.Events.MANIFEST_LOADING, { url: R });
                      }),
                      (R.startLoad = function e(R) {
                        void 0 === R && (R = -1),
                          U.logger.log('startLoad(' + R + ')'),
                          this.networkControllers.forEach(function (I) {
                            I.startLoad(R);
                          });
                      }),
                      (R.stopLoad = function e() {
                        U.logger.log('stopLoad'),
                          this.networkControllers.forEach(function (R) {
                            R.stopLoad();
                          });
                      }),
                      (R.swapAudioCodec = function e() {
                        U.logger.log('swapAudioCodec'), this.streamController.swapAudioCodec();
                      }),
                      (R.recoverMediaError = function e() {
                        U.logger.log('recoverMediaError');
                        var R = this._media;
                        this.detachMedia(), R && this.attachMedia(R);
                      }),
                      (R.removeLevel = function e(R, I) {
                        void 0 === I && (I = 0), this.levelController.removeLevel(R, I);
                      }),
                      (function y(R, I, C) {
                        return I && m(R.prototype, I), C && m(R, C), R;
                      })(
                        e,
                        [
                          {
                            key: 'levels',
                            get: function e() {
                              var R = this.levelController.levels;
                              return R || [];
                            },
                          },
                          {
                            key: 'currentLevel',
                            get: function e() {
                              return this.streamController.currentLevel;
                            },
                            set: function e(R) {
                              U.logger.log('set currentLevel:' + R),
                                (this.loadLevel = R),
                                this.abrController.clearTimer(),
                                this.streamController.immediateLevelSwitch();
                            },
                          },
                          {
                            key: 'nextLevel',
                            get: function e() {
                              return this.streamController.nextLevel;
                            },
                            set: function e(R) {
                              U.logger.log('set nextLevel:' + R),
                                (this.levelController.manualLevel = R),
                                this.streamController.nextLevelSwitch();
                            },
                          },
                          {
                            key: 'loadLevel',
                            get: function e() {
                              return this.levelController.level;
                            },
                            set: function e(R) {
                              U.logger.log('set loadLevel:' + R), (this.levelController.manualLevel = R);
                            },
                          },
                          {
                            key: 'nextLoadLevel',
                            get: function e() {
                              return this.levelController.nextLoadLevel;
                            },
                            set: function e(R) {
                              this.levelController.nextLoadLevel = R;
                            },
                          },
                          {
                            key: 'firstLevel',
                            get: function e() {
                              return Math.max(this.levelController.firstLevel, this.minAutoLevel);
                            },
                            set: function e(R) {
                              U.logger.log('set firstLevel:' + R), (this.levelController.firstLevel = R);
                            },
                          },
                          {
                            key: 'startLevel',
                            get: function e() {
                              return this.levelController.startLevel;
                            },
                            set: function e(R) {
                              U.logger.log('set startLevel:' + R),
                                -1 !== R && (R = Math.max(R, this.minAutoLevel)),
                                (this.levelController.startLevel = R);
                            },
                          },
                          {
                            key: 'capLevelToPlayerSize',
                            get: function e() {
                              return this.config.capLevelToPlayerSize;
                            },
                            set: function e(R) {
                              var I = !!R;
                              I !== this.config.capLevelToPlayerSize &&
                                (I
                                  ? this.capLevelController.startCapping()
                                  : (this.capLevelController.stopCapping(),
                                    (this.autoLevelCapping = -1),
                                    this.streamController.nextLevelSwitch()),
                                (this.config.capLevelToPlayerSize = I));
                            },
                          },
                          {
                            key: 'autoLevelCapping',
                            get: function e() {
                              return this._autoLevelCapping;
                            },
                            set: function e(R) {
                              this._autoLevelCapping !== R &&
                                (U.logger.log('set autoLevelCapping:' + R), (this._autoLevelCapping = R));
                            },
                          },
                          {
                            key: 'bandwidthEstimate',
                            get: function e() {
                              var R = this.abrController.bwEstimator;
                              return R ? R.getEstimate() : NaN;
                            },
                          },
                          {
                            key: 'autoLevelEnabled',
                            get: function e() {
                              return -1 === this.levelController.manualLevel;
                            },
                          },
                          {
                            key: 'manualLevel',
                            get: function e() {
                              return this.levelController.manualLevel;
                            },
                          },
                          {
                            key: 'minAutoLevel',
                            get: function e() {
                              var R = this.levels,
                                I = this.config.minAutoBitrate;
                              if (!R) return 0;
                              for (var C = R.length, O = 0; O < C; O++) if (R[O].maxBitrate > I) return O;
                              return 0;
                            },
                          },
                          {
                            key: 'maxAutoLevel',
                            get: function e() {
                              var R = this.levels,
                                I = this.autoLevelCapping;
                              return -1 === I && R && R.length ? R.length - 1 : I;
                            },
                          },
                          {
                            key: 'nextAutoLevel',
                            get: function e() {
                              return Math.min(
                                Math.max(this.abrController.nextAutoLevel, this.minAutoLevel),
                                this.maxAutoLevel
                              );
                            },
                            set: function e(R) {
                              this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, R);
                            },
                          },
                          {
                            key: 'audioTracks',
                            get: function e() {
                              var R = this.audioTrackController;
                              return R ? R.audioTracks : [];
                            },
                          },
                          {
                            key: 'audioTrack',
                            get: function e() {
                              var R = this.audioTrackController;
                              return R ? R.audioTrack : -1;
                            },
                            set: function e(R) {
                              var I = this.audioTrackController;
                              I && (I.audioTrack = R);
                            },
                          },
                          {
                            key: 'subtitleTracks',
                            get: function e() {
                              var R = this.subtitleTrackController;
                              return R ? R.subtitleTracks : [];
                            },
                          },
                          {
                            key: 'subtitleTrack',
                            get: function e() {
                              var R = this.subtitleTrackController;
                              return R ? R.subtitleTrack : -1;
                            },
                            set: function e(R) {
                              var I = this.subtitleTrackController;
                              I && (I.subtitleTrack = R);
                            },
                          },
                          {
                            key: 'media',
                            get: function e() {
                              return this._media;
                            },
                          },
                          {
                            key: 'subtitleDisplay',
                            get: function e() {
                              var R = this.subtitleTrackController;
                              return !!R && R.subtitleDisplay;
                            },
                            set: function e(R) {
                              var I = this.subtitleTrackController;
                              I && (I.subtitleDisplay = R);
                            },
                          },
                          {
                            key: 'lowLatencyMode',
                            get: function e() {
                              return this.config.lowLatencyMode;
                            },
                            set: function e(R) {
                              this.config.lowLatencyMode = R;
                            },
                          },
                          {
                            key: 'liveSyncPosition',
                            get: function e() {
                              return this.latencyController.liveSyncPosition;
                            },
                          },
                          {
                            key: 'latency',
                            get: function e() {
                              return this.latencyController.latency;
                            },
                          },
                          {
                            key: 'maxLatency',
                            get: function e() {
                              return this.latencyController.maxLatency;
                            },
                          },
                          {
                            key: 'targetLatency',
                            get: function e() {
                              return this.latencyController.targetLatency;
                            },
                          },
                          {
                            key: 'drift',
                            get: function e() {
                              return this.latencyController.drift;
                            },
                          },
                          {
                            key: 'forceStartLoad',
                            get: function e() {
                              return this.streamController.forceStartLoad;
                            },
                          },
                        ],
                        [
                          {
                            key: 'version',
                            get: function e() {
                              return '1.1.5';
                            },
                          },
                          {
                            key: 'Events',
                            get: function e() {
                              return K.Events;
                            },
                          },
                          {
                            key: 'ErrorTypes',
                            get: function e() {
                              return H.ErrorTypes;
                            },
                          },
                          {
                            key: 'ErrorDetails',
                            get: function e() {
                              return H.ErrorDetails;
                            },
                          },
                          {
                            key: 'DefaultConfig',
                            get: function t() {
                              return e.defaultConfig ? e.defaultConfig : G.hlsDefaultConfig;
                            },
                            set: function t(R) {
                              e.defaultConfig = R;
                            },
                          },
                        ]
                      ),
                      e
                    );
                  })();
                  V.defaultConfig = void 0;
                },
                './src/is-supported.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'isSupported', function () {
                      return n;
                    }),
                    C.d(I, 'changeTypeSupported', function () {
                      return s;
                    });
                  var O = C('./src/utils/mediasource-helper.ts');
                  function a() {
                    return self.SourceBuffer || self.WebKitSourceBuffer;
                  }
                  function n() {
                    var R = Object(O.getMediaSource)();
                    if (!R) return !1;
                    var I = a(),
                      C =
                        R &&
                        'function' == typeof R.isTypeSupported &&
                        R.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                      w =
                        !I ||
                        (I.prototype &&
                          'function' == typeof I.prototype.appendBuffer &&
                          'function' == typeof I.prototype.remove);
                    return !!C && !!w;
                  }
                  function s() {
                    var R,
                      I = a();
                    return (
                      'function' ==
                      typeof (null == I || null === (R = I.prototype) || void 0 === R ? void 0 : R.changeType)
                    );
                  }
                },
                './src/loader/fragment-loader.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return x;
                    }),
                    C.d(I, 'LoadError', function () {
                      return P;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/errors.ts');
                  function s(R) {
                    var I = 'function' == typeof Map ? new Map() : void 0;
                    return (s = function e(R) {
                      if (
                        null === R ||
                        !(function u(R) {
                          return -1 !== Function.toString.call(R).indexOf('[native code]');
                        })(R)
                      )
                        return R;
                      if ('function' != typeof R)
                        throw new TypeError('Super expression must either be null or a function');
                      if (void 0 !== I) {
                        if (I.has(R)) return I.get(R);
                        I.set(R, i);
                      }
                      function i() {
                        return o(R, arguments, c(this).constructor);
                      }
                      return (
                        (i.prototype = Object.create(R.prototype, {
                          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
                        })),
                        f(i, R)
                      );
                    })(R);
                  }
                  function o(R, I, C) {
                    return (o = l()
                      ? Reflect.construct
                      : function e(R, I, C) {
                          var O = [null];
                          O.push.apply(O, I);
                          var w = new (Function.bind.apply(R, O))();
                          return C && f(w, C.prototype), w;
                        }).apply(null, arguments);
                  }
                  function l() {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (R) {
                      return !1;
                    }
                  }
                  function f(R, I) {
                    return (f =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  function c(R) {
                    return (c = Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function e(R) {
                          return R.__proto__ || Object.getPrototypeOf(R);
                        })(R);
                  }
                  var _ = Math.pow(2, 17),
                    x = (function () {
                      function e(R) {
                        (this.config = void 0), (this.loader = null), (this.partLoadTimeout = -1), (this.config = R);
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {
                          this.loader && (this.loader.destroy(), (this.loader = null));
                        }),
                        (R.abort = function e() {
                          this.loader && this.loader.abort();
                        }),
                        (R.load = function e(R, I) {
                          var C = this,
                            O = R.url;
                          if (!O)
                            return Promise.reject(
                              new P(
                                {
                                  type: w.ErrorTypes.NETWORK_ERROR,
                                  details: w.ErrorDetails.FRAG_LOAD_ERROR,
                                  fatal: !1,
                                  frag: R,
                                  networkDetails: null,
                                },
                                'Fragment does not have a ' + (O ? 'part list' : 'url')
                              )
                            );
                          this.abort();
                          var x = this.config,
                            F = x.fLoader,
                            M = x.loader;
                          return new Promise(function (O, N) {
                            C.loader && C.loader.destroy();
                            var B = (C.loader = R.loader = F ? new F(x) : new M(x)),
                              U = v(R),
                              G = {
                                timeout: x.fragLoadingTimeOut,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: x.fragLoadingMaxRetryTimeout,
                                highWaterMark: _,
                              };
                            (R.stats = B.stats),
                              B.load(U, G, {
                                onSuccess: function r(I, w, _, x) {
                                  C.resetLoader(R, B), O({ frag: R, part: null, payload: I.data, networkDetails: x });
                                },
                                onError: function e(I, O, _) {
                                  C.resetLoader(R, B),
                                    N(
                                      new P({
                                        type: w.ErrorTypes.NETWORK_ERROR,
                                        details: w.ErrorDetails.FRAG_LOAD_ERROR,
                                        fatal: !1,
                                        frag: R,
                                        response: I,
                                        networkDetails: _,
                                      })
                                    );
                                },
                                onAbort: function e(I, O, _) {
                                  C.resetLoader(R, B),
                                    N(
                                      new P({
                                        type: w.ErrorTypes.NETWORK_ERROR,
                                        details: w.ErrorDetails.INTERNAL_ABORTED,
                                        fatal: !1,
                                        frag: R,
                                        networkDetails: _,
                                      })
                                    );
                                },
                                onTimeout: function e(I, O, _) {
                                  C.resetLoader(R, B),
                                    N(
                                      new P({
                                        type: w.ErrorTypes.NETWORK_ERROR,
                                        details: w.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                        fatal: !1,
                                        frag: R,
                                        networkDetails: _,
                                      })
                                    );
                                },
                                onProgress: function e(C, O, w, _) {
                                  I && I({ frag: R, part: null, payload: w, networkDetails: _ });
                                },
                              });
                          });
                        }),
                        (R.loadPart = function e(R, I, C) {
                          var O = this;
                          this.abort();
                          var x = this.config,
                            F = x.fLoader,
                            M = x.loader;
                          return new Promise(function (N, B) {
                            O.loader && O.loader.destroy();
                            var U = (O.loader = R.loader = F ? new F(x) : new M(x)),
                              G = v(R, I),
                              j = {
                                timeout: x.fragLoadingTimeOut,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: x.fragLoadingMaxRetryTimeout,
                                highWaterMark: _,
                              };
                            (I.stats = U.stats),
                              U.load(G, j, {
                                onSuccess: function a(w, _, x, P) {
                                  O.resetLoader(R, U), O.updateStatsFromPart(R, I);
                                  var F = { frag: R, part: I, payload: w.data, networkDetails: P };
                                  C(F), N(F);
                                },
                                onError: function e(C, _, x) {
                                  O.resetLoader(R, U),
                                    B(
                                      new P({
                                        type: w.ErrorTypes.NETWORK_ERROR,
                                        details: w.ErrorDetails.FRAG_LOAD_ERROR,
                                        fatal: !1,
                                        frag: R,
                                        part: I,
                                        response: C,
                                        networkDetails: x,
                                      })
                                    );
                                },
                                onAbort: function e(C, _, x) {
                                  (R.stats.aborted = I.stats.aborted),
                                    O.resetLoader(R, U),
                                    B(
                                      new P({
                                        type: w.ErrorTypes.NETWORK_ERROR,
                                        details: w.ErrorDetails.INTERNAL_ABORTED,
                                        fatal: !1,
                                        frag: R,
                                        part: I,
                                        networkDetails: x,
                                      })
                                    );
                                },
                                onTimeout: function e(C, _, x) {
                                  O.resetLoader(R, U),
                                    B(
                                      new P({
                                        type: w.ErrorTypes.NETWORK_ERROR,
                                        details: w.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                        fatal: !1,
                                        frag: R,
                                        part: I,
                                        networkDetails: x,
                                      })
                                    );
                                },
                              });
                          });
                        }),
                        (R.updateStatsFromPart = function e(R, I) {
                          var C = R.stats,
                            O = I.stats,
                            w = O.total;
                          if (((C.loaded += O.loaded), w)) {
                            var _ = Math.round(R.duration / I.duration),
                              x = Math.min(Math.round(C.loaded / w), _),
                              P = (_ - x) * Math.round(C.loaded / x);
                            C.total = C.loaded + P;
                          } else C.total = Math.max(C.loaded, C.total);
                          var F = C.loading,
                            M = O.loading;
                          F.start ? (F.first += M.first - M.start) : ((F.start = M.start), (F.first = M.first)),
                            (F.end = M.end);
                        }),
                        (R.resetLoader = function e(R, I) {
                          (R.loader = null),
                            this.loader === I && (self.clearTimeout(this.partLoadTimeout), (this.loader = null)),
                            I.destroy();
                        }),
                        e
                      );
                    })();
                  function v(R, I) {
                    void 0 === I && (I = null);
                    var C = I || R,
                      w = {
                        frag: R,
                        part: I,
                        responseType: 'arraybuffer',
                        url: C.url,
                        headers: {},
                        rangeStart: 0,
                        rangeEnd: 0,
                      },
                      _ = C.byteRangeStartOffset,
                      x = C.byteRangeEndOffset;
                    return (
                      Object(O.isFiniteNumber)(_) &&
                        Object(O.isFiniteNumber)(x) &&
                        ((w.rangeStart = _), (w.rangeEnd = x)),
                      w
                    );
                  }
                  var P = (function (R) {
                    function t(I) {
                      for (var C, O = arguments.length, w = new Array(O > 1 ? O - 1 : 0), _ = 1; _ < O; _++)
                        w[_ - 1] = arguments[_];
                      return ((C = R.call.apply(R, [this].concat(w)) || this).data = void 0), (C.data = I), C;
                    }
                    return (
                      (function n(R, I) {
                        (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), f(R, I);
                      })(t, R),
                      t
                    );
                  })(s(Error));
                },
                './src/loader/fragment.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'ElementaryStreamTypes', function () {
                      return O;
                    }),
                    C.d(I, 'BaseSegment', function () {
                      return M;
                    }),
                    C.d(I, 'Fragment', function () {
                      return N;
                    }),
                    C.d(I, 'Part', function () {
                      return B;
                    });
                  var O,
                    w = C('./src/polyfills/number.ts'),
                    _ = C('./node_modules/url-toolkit/src/url-toolkit.js'),
                    x = C('./src/utils/logger.ts'),
                    P = C('./src/loader/level-key.ts'),
                    F = C('./src/loader/load-stats.ts');
                  function l(R, I) {
                    (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), u(R, I);
                  }
                  function u(R, I) {
                    return (u =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  function f(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  function c(R, I, C) {
                    return I && f(R.prototype, I), C && f(R, C), R;
                  }
                  !(function (R) {
                    (R.AUDIO = 'audio'), (R.VIDEO = 'video'), (R.AUDIOVIDEO = 'audiovideo');
                  })(O || (O = {}));
                  var M = (function () {
                      function e(R) {
                        var I;
                        (this._byteRange = null),
                          (this._url = null),
                          (this.baseurl = void 0),
                          (this.relurl = void 0),
                          (this.elementaryStreams =
                            (((I = {})[O.AUDIO] = null), (I[O.VIDEO] = null), (I[O.AUDIOVIDEO] = null), I)),
                          (this.baseurl = R);
                      }
                      return (
                        (e.prototype.setByteRange = function e(R, I) {
                          var C = R.split('@', 2),
                            O = [];
                          1 === C.length ? (O[0] = I ? I.byteRangeEndOffset : 0) : (O[0] = parseInt(C[1])),
                            (O[1] = parseInt(C[0]) + O[0]),
                            (this._byteRange = O);
                        }),
                        c(e, [
                          {
                            key: 'byteRange',
                            get: function e() {
                              return this._byteRange ? this._byteRange : [];
                            },
                          },
                          {
                            key: 'byteRangeStartOffset',
                            get: function e() {
                              return this.byteRange[0];
                            },
                          },
                          {
                            key: 'byteRangeEndOffset',
                            get: function e() {
                              return this.byteRange[1];
                            },
                          },
                          {
                            key: 'url',
                            get: function e() {
                              return (
                                !this._url &&
                                  this.baseurl &&
                                  this.relurl &&
                                  (this._url = Object(_.buildAbsoluteURL)(this.baseurl, this.relurl, {
                                    alwaysNormalize: !0,
                                  })),
                                this._url || ''
                              );
                            },
                            set: function e(R) {
                              this._url = R;
                            },
                          },
                        ]),
                        e
                      );
                    })(),
                    N = (function (R) {
                      function t(I, C) {
                        var O;
                        return (
                          ((O = R.call(this, C) || this)._decryptdata = null),
                          (O.rawProgramDateTime = null),
                          (O.programDateTime = null),
                          (O.tagList = []),
                          (O.duration = 0),
                          (O.sn = 0),
                          (O.levelkey = void 0),
                          (O.type = void 0),
                          (O.loader = null),
                          (O.level = -1),
                          (O.cc = 0),
                          (O.startPTS = void 0),
                          (O.endPTS = void 0),
                          (O.appendedPTS = void 0),
                          (O.startDTS = void 0),
                          (O.endDTS = void 0),
                          (O.start = 0),
                          (O.deltaPTS = void 0),
                          (O.maxStartPTS = void 0),
                          (O.minEndPTS = void 0),
                          (O.stats = new F.LoadStats()),
                          (O.urlId = 0),
                          (O.data = void 0),
                          (O.bitrateTest = !1),
                          (O.title = null),
                          (O.initSegment = null),
                          (O.type = I),
                          O
                        );
                      }
                      l(t, R);
                      var I = t.prototype;
                      return (
                        (I.createInitializationVector = function e(R) {
                          for (var I = new Uint8Array(16), C = 12; C < 16; C++) I[C] = (R >> (8 * (15 - C))) & 255;
                          return I;
                        }),
                        (I.setDecryptDataFromLevelKey = function e(R, I) {
                          var C = R;
                          return (
                            'AES-128' === (null == R ? void 0 : R.method) &&
                              R.uri &&
                              !R.iv &&
                              (((C = P.LevelKey.fromURI(R.uri)).method = R.method),
                              (C.iv = this.createInitializationVector(I)),
                              (C.keyFormat = 'identity')),
                            C
                          );
                        }),
                        (I.setElementaryStreamInfo = function e(R, I, C, O, w, _) {
                          void 0 === _ && (_ = !1);
                          var x = this.elementaryStreams,
                            P = x[R];
                          P
                            ? ((P.startPTS = Math.min(P.startPTS, I)),
                              (P.endPTS = Math.max(P.endPTS, C)),
                              (P.startDTS = Math.min(P.startDTS, O)),
                              (P.endDTS = Math.max(P.endDTS, w)))
                            : (x[R] = { startPTS: I, endPTS: C, startDTS: O, endDTS: w, partial: _ });
                        }),
                        (I.clearElementaryStreamInfo = function e() {
                          var R = this.elementaryStreams;
                          (R[O.AUDIO] = null), (R[O.VIDEO] = null), (R[O.AUDIOVIDEO] = null);
                        }),
                        c(t, [
                          {
                            key: 'decryptdata',
                            get: function e() {
                              if (!this.levelkey && !this._decryptdata) return null;
                              if (!this._decryptdata && this.levelkey) {
                                var R = this.sn;
                                'number' != typeof R &&
                                  (this.levelkey &&
                                    'AES-128' === this.levelkey.method &&
                                    !this.levelkey.iv &&
                                    x.logger.warn(
                                      'missing IV for initialization segment with method="' +
                                        this.levelkey.method +
                                        '" - compliance issue'
                                    ),
                                  (R = 0)),
                                  (this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, R));
                              }
                              return this._decryptdata;
                            },
                          },
                          {
                            key: 'end',
                            get: function e() {
                              return this.start + this.duration;
                            },
                          },
                          {
                            key: 'endProgramDateTime',
                            get: function e() {
                              if (null === this.programDateTime) return null;
                              if (!Object(w.isFiniteNumber)(this.programDateTime)) return null;
                              var R = Object(w.isFiniteNumber)(this.duration) ? this.duration : 0;
                              return this.programDateTime + 1e3 * R;
                            },
                          },
                          {
                            key: 'encrypted',
                            get: function e() {
                              var R;
                              return !(
                                null === (R = this.decryptdata) ||
                                void 0 === R ||
                                !R.keyFormat ||
                                !this.decryptdata.uri
                              );
                            },
                          },
                        ]),
                        t
                      );
                    })(M),
                    B = (function (R) {
                      function t(I, C, O, w, _) {
                        var x;
                        ((x = R.call(this, O) || this).fragOffset = 0),
                          (x.duration = 0),
                          (x.gap = !1),
                          (x.independent = !1),
                          (x.relurl = void 0),
                          (x.fragment = void 0),
                          (x.index = void 0),
                          (x.stats = new F.LoadStats()),
                          (x.duration = I.decimalFloatingPoint('DURATION')),
                          (x.gap = I.bool('GAP')),
                          (x.independent = I.bool('INDEPENDENT')),
                          (x.relurl = I.enumeratedString('URI')),
                          (x.fragment = C),
                          (x.index = w);
                        var P = I.enumeratedString('BYTERANGE');
                        return P && x.setByteRange(P, _), _ && (x.fragOffset = _.fragOffset + _.duration), x;
                      }
                      return (
                        l(t, R),
                        c(t, [
                          {
                            key: 'start',
                            get: function e() {
                              return this.fragment.start + this.fragOffset;
                            },
                          },
                          {
                            key: 'end',
                            get: function e() {
                              return this.start + this.duration;
                            },
                          },
                          {
                            key: 'loaded',
                            get: function e() {
                              var R = this.elementaryStreams;
                              return !!(R.audio || R.video || R.audiovideo);
                            },
                          },
                        ]),
                        t
                      );
                    })(M);
                },
                './src/loader/key-loader.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return x;
                    });
                  var O = C('./src/events.ts'),
                    w = C('./src/errors.ts'),
                    _ = C('./src/utils/logger.ts'),
                    x = (function () {
                      function e(R) {
                        (this.hls = void 0),
                          (this.loaders = {}),
                          (this.decryptkey = null),
                          (this.decrypturl = null),
                          (this.hls = R),
                          this._registerListeners();
                      }
                      var R = e.prototype;
                      return (
                        (R._registerListeners = function e() {
                          this.hls.on(O.Events.KEY_LOADING, this.onKeyLoading, this);
                        }),
                        (R._unregisterListeners = function e() {
                          this.hls.off(O.Events.KEY_LOADING, this.onKeyLoading);
                        }),
                        (R.destroy = function e() {
                          for (var R in (this._unregisterListeners(), this.loaders)) {
                            var I = this.loaders[R];
                            I && I.destroy();
                          }
                          this.loaders = {};
                        }),
                        (R.onKeyLoading = function e(R, I) {
                          var C = I.frag,
                            w = C.type,
                            x = this.loaders[w];
                          if (C.decryptdata) {
                            var P = C.decryptdata.uri;
                            if (P !== this.decrypturl || null === this.decryptkey) {
                              var F = this.hls.config;
                              if ((x && (_.logger.warn('abort previous key loader for type:' + w), x.abort()), !P))
                                return void _.logger.warn('key uri is falsy');
                              var M = F.loader,
                                N = (C.loader = this.loaders[w] = new M(F));
                              (this.decrypturl = P), (this.decryptkey = null);
                              var B = { url: P, frag: C, responseType: 'arraybuffer' },
                                U = {
                                  timeout: F.fragLoadingTimeOut,
                                  maxRetry: 0,
                                  retryDelay: F.fragLoadingRetryDelay,
                                  maxRetryDelay: F.fragLoadingMaxRetryTimeout,
                                  highWaterMark: 0,
                                },
                                G = {
                                  onSuccess: this.loadsuccess.bind(this),
                                  onError: this.loaderror.bind(this),
                                  onTimeout: this.loadtimeout.bind(this),
                                };
                              N.load(B, U, G);
                            } else
                              this.decryptkey &&
                                ((C.decryptdata.key = this.decryptkey),
                                this.hls.trigger(O.Events.KEY_LOADED, { frag: C }));
                          } else _.logger.warn('Missing decryption data on fragment in onKeyLoading');
                        }),
                        (R.loadsuccess = function e(R, I, C) {
                          var w = C.frag;
                          w.decryptdata
                            ? ((this.decryptkey = w.decryptdata.key = new Uint8Array(R.data)),
                              (w.loader = null),
                              delete this.loaders[w.type],
                              this.hls.trigger(O.Events.KEY_LOADED, { frag: w }))
                            : _.logger.error('after key load, decryptdata unset');
                        }),
                        (R.loaderror = function e(R, I) {
                          var C = I.frag,
                            _ = C.loader;
                          _ && _.abort(),
                            delete this.loaders[C.type],
                            this.hls.trigger(O.Events.ERROR, {
                              type: w.ErrorTypes.NETWORK_ERROR,
                              details: w.ErrorDetails.KEY_LOAD_ERROR,
                              fatal: !1,
                              frag: C,
                              response: R,
                            });
                        }),
                        (R.loadtimeout = function e(R, I) {
                          var C = I.frag,
                            _ = C.loader;
                          _ && _.abort(),
                            delete this.loaders[C.type],
                            this.hls.trigger(O.Events.ERROR, {
                              type: w.ErrorTypes.NETWORK_ERROR,
                              details: w.ErrorDetails.KEY_LOAD_TIMEOUT,
                              fatal: !1,
                              frag: C,
                            });
                        }),
                        e
                      );
                    })();
                },
                './src/loader/level-details.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'LevelDetails', function () {
                      return w;
                    });
                  var O = C('./src/polyfills/number.ts');
                  function a(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  var w = (function () {
                    function e(R) {
                      (this.PTSKnown = !1),
                        (this.alignedSliding = !1),
                        (this.averagetargetduration = void 0),
                        (this.endCC = 0),
                        (this.endSN = 0),
                        (this.fragments = void 0),
                        (this.fragmentHint = void 0),
                        (this.partList = null),
                        (this.live = !0),
                        (this.ageHeader = 0),
                        (this.advancedDateTime = void 0),
                        (this.updated = !0),
                        (this.advanced = !0),
                        (this.availabilityDelay = void 0),
                        (this.misses = 0),
                        (this.needSidxRanges = !1),
                        (this.startCC = 0),
                        (this.startSN = 0),
                        (this.startTimeOffset = null),
                        (this.targetduration = 0),
                        (this.totalduration = 0),
                        (this.type = null),
                        (this.url = void 0),
                        (this.m3u8 = ''),
                        (this.version = null),
                        (this.canBlockReload = !1),
                        (this.canSkipUntil = 0),
                        (this.canSkipDateRanges = !1),
                        (this.skippedSegments = 0),
                        (this.recentlyRemovedDateranges = void 0),
                        (this.partHoldBack = 0),
                        (this.holdBack = 0),
                        (this.partTarget = 0),
                        (this.preloadHint = void 0),
                        (this.renditionReports = void 0),
                        (this.tuneInGoal = 0),
                        (this.deltaUpdateFailed = void 0),
                        (this.driftStartTime = 0),
                        (this.driftEndTime = 0),
                        (this.driftStart = 0),
                        (this.driftEnd = 0),
                        (this.fragments = []),
                        (this.url = R);
                    }
                    return (
                      (e.prototype.reloaded = function e(R) {
                        if (!R) return (this.advanced = !0), void (this.updated = !0);
                        var I = this.lastPartSn - R.lastPartSn,
                          C = this.lastPartIndex - R.lastPartIndex;
                        (this.updated = this.endSN !== R.endSN || !!C || !!I),
                          (this.advanced = this.endSN > R.endSN || I > 0 || (0 === I && C > 0)),
                          this.updated || this.advanced
                            ? (this.misses = Math.floor(0.6 * R.misses))
                            : (this.misses = R.misses + 1),
                          (this.availabilityDelay = R.availabilityDelay);
                      }),
                      (function n(R, I, C) {
                        return I && a(R.prototype, I), C && a(R, C), R;
                      })(e, [
                        {
                          key: 'hasProgramDateTime',
                          get: function e() {
                            return (
                              !!this.fragments.length &&
                              Object(O.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime)
                            );
                          },
                        },
                        {
                          key: 'levelTargetDuration',
                          get: function e() {
                            return this.averagetargetduration || this.targetduration || 10;
                          },
                        },
                        {
                          key: 'drift',
                          get: function e() {
                            var R = this.driftEndTime - this.driftStartTime;
                            return R > 0 ? (1e3 * (this.driftEnd - this.driftStart)) / R : 1;
                          },
                        },
                        {
                          key: 'edge',
                          get: function e() {
                            return this.partEnd || this.fragmentEnd;
                          },
                        },
                        {
                          key: 'partEnd',
                          get: function e() {
                            var R;
                            return null !== (R = this.partList) && void 0 !== R && R.length
                              ? this.partList[this.partList.length - 1].end
                              : this.fragmentEnd;
                          },
                        },
                        {
                          key: 'fragmentEnd',
                          get: function e() {
                            var R;
                            return null !== (R = this.fragments) && void 0 !== R && R.length
                              ? this.fragments[this.fragments.length - 1].end
                              : 0;
                          },
                        },
                        {
                          key: 'age',
                          get: function e() {
                            return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
                          },
                        },
                        {
                          key: 'lastPartIndex',
                          get: function e() {
                            var R;
                            return null !== (R = this.partList) && void 0 !== R && R.length
                              ? this.partList[this.partList.length - 1].index
                              : -1;
                          },
                        },
                        {
                          key: 'lastPartSn',
                          get: function e() {
                            var R;
                            return null !== (R = this.partList) && void 0 !== R && R.length
                              ? this.partList[this.partList.length - 1].fragment.sn
                              : this.endSN;
                          },
                        },
                      ]),
                      e
                    );
                  })();
                },
                './src/loader/level-key.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'LevelKey', function () {
                      return w;
                    });
                  var O = C('./node_modules/url-toolkit/src/url-toolkit.js');
                  function a(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  var w = (function () {
                    function e(R, I) {
                      (this._uri = null),
                        (this.method = null),
                        (this.keyFormat = null),
                        (this.keyFormatVersions = null),
                        (this.keyID = null),
                        (this.key = null),
                        (this.iv = null),
                        (this._uri = I ? Object(O.buildAbsoluteURL)(R, I, { alwaysNormalize: !0 }) : R);
                    }
                    return (
                      (e.fromURL = function t(R, I) {
                        return new e(R, I);
                      }),
                      (e.fromURI = function t(R) {
                        return new e(R);
                      }),
                      (function n(R, I, C) {
                        return I && a(R.prototype, I), C && a(R, C), R;
                      })(e, [
                        {
                          key: 'uri',
                          get: function e() {
                            return this._uri;
                          },
                        },
                      ]),
                      e
                    );
                  })();
                },
                './src/loader/load-stats.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'LoadStats', function () {
                      return O;
                    });
                  var O = function e() {
                    (this.aborted = !1),
                      (this.loaded = 0),
                      (this.retry = 0),
                      (this.total = 0),
                      (this.chunkCount = 0),
                      (this.bwEstimate = 0),
                      (this.loading = { start: 0, first: 0, end: 0 }),
                      (this.parsing = { start: 0, end: 0 }),
                      (this.buffering = { start: 0, first: 0, end: 0 });
                  };
                },
                './src/loader/m3u8-parser.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return H;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./node_modules/url-toolkit/src/url-toolkit.js'),
                    _ = C('./src/loader/fragment.ts'),
                    x = C('./src/loader/level-details.ts'),
                    P = C('./src/loader/level-key.ts'),
                    F = C('./src/utils/attr-list.ts'),
                    M = C('./src/utils/logger.ts'),
                    N = C('./src/utils/codecs.ts'),
                    B =
                      /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
                    U = /#EXT-X-MEDIA:(.*)/g,
                    G = new RegExp(
                      [
                        /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
                        /(?!#) *(\S[\S ]*)/.source,
                        /#EXT-X-BYTERANGE:*(.+)/.source,
                        /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
                        /#.*/.source,
                      ].join('|'),
                      'g'
                    ),
                    j = new RegExp(
                      [
                        /#(EXTM3U)/.source,
                        /#EXT-X-(PLAYLIST-TYPE):(.+)/.source,
                        /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source,
                        /#EXT-X-(SKIP):(.+)/.source,
                        /#EXT-X-(TARGETDURATION): *(\d+)/.source,
                        /#EXT-X-(KEY):(.+)/.source,
                        /#EXT-X-(START):(.+)/.source,
                        /#EXT-X-(ENDLIST)/.source,
                        /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source,
                        /#EXT-X-(DIS)CONTINUITY/.source,
                        /#EXT-X-(VERSION):(\d+)/.source,
                        /#EXT-X-(MAP):(.+)/.source,
                        /#EXT-X-(SERVER-CONTROL):(.+)/.source,
                        /#EXT-X-(PART-INF):(.+)/.source,
                        /#EXT-X-(GAP)/.source,
                        /#EXT-X-(BITRATE):\s*(\d+)/.source,
                        /#EXT-X-(PART):(.+)/.source,
                        /#EXT-X-(PRELOAD-HINT):(.+)/.source,
                        /#EXT-X-(RENDITION-REPORT):(.+)/.source,
                        /(#)([^:]*):(.*)/.source,
                        /(#)(.*)(?:.*)\r?\n?/.source,
                      ].join('|')
                    ),
                    K = /\.(mp4|m4s|m4v|m4a)$/i;
                  function p(R) {
                    var I, C;
                    return K.test(
                      null != (I = null === (C = w.parseURL(R)) || void 0 === C ? void 0 : C.path) ? I : ''
                    );
                  }
                  var H = (function () {
                    function e() {}
                    return (
                      (e.findGroup = function e(R, I) {
                        for (var C = 0; C < R.length; C++) {
                          var O = R[C];
                          if (O.id === I) return O;
                        }
                      }),
                      (e.convertAVC1ToAVCOTI = function e(R) {
                        var I = R.split('.');
                        if (I.length > 2) {
                          var C = I.shift() + '.';
                          return (
                            (C += parseInt(I.shift()).toString(16)),
                            (C += ('000' + parseInt(I.shift()).toString(16)).substr(-4))
                          );
                        }
                        return R;
                      }),
                      (e.resolve = function e(R, I) {
                        return w.buildAbsoluteURL(I, R, { alwaysNormalize: !0 });
                      }),
                      (e.parseMasterPlaylist = function t(R, I) {
                        var C,
                          O = [],
                          w = {},
                          _ = !1;
                        for (B.lastIndex = 0; null != (C = B.exec(R)); )
                          if (C[1]) {
                            var x = new F.AttrList(C[1]),
                              P = {
                                attrs: x,
                                bitrate: x.decimalInteger('AVERAGE-BANDWIDTH') || x.decimalInteger('BANDWIDTH'),
                                name: x.NAME,
                                url: e.resolve(C[2], I),
                              },
                              M = x.decimalResolution('RESOLUTION');
                            M && ((P.width = M.width), (P.height = M.height)),
                              y(
                                (x.CODECS || '').split(/[ ,]+/).filter(function (R) {
                                  return R;
                                }),
                                P
                              ),
                              P.videoCodec &&
                                -1 !== P.videoCodec.indexOf('avc1') &&
                                (P.videoCodec = e.convertAVC1ToAVCOTI(P.videoCodec)),
                              O.push(P);
                          } else if (C[3]) {
                            var N = new F.AttrList(C[3]);
                            N['DATA-ID'] && ((_ = !0), (w[N['DATA-ID']] = N));
                          }
                        return { levels: O, sessionData: _ ? w : null };
                      }),
                      (e.parseMasterPlaylistMedia = function t(R, I, C, O) {
                        var w;
                        void 0 === O && (O = []);
                        var _ = [],
                          x = 0;
                        for (U.lastIndex = 0; null !== (w = U.exec(R)); ) {
                          var P = new F.AttrList(w[1]);
                          if (P.TYPE === C) {
                            var M = {
                              attrs: P,
                              bitrate: 0,
                              id: x++,
                              groupId: P['GROUP-ID'],
                              instreamId: P['INSTREAM-ID'],
                              name: P.NAME || P.LANGUAGE || '',
                              type: C,
                              default: P.bool('DEFAULT'),
                              autoselect: P.bool('AUTOSELECT'),
                              forced: P.bool('FORCED'),
                              lang: P.LANGUAGE,
                              url: P.URI ? e.resolve(P.URI, I) : '',
                            };
                            if (O.length) {
                              var N = e.findGroup(O, M.groupId) || O[0];
                              E(M, N, 'audioCodec'), E(M, N, 'textCodec');
                            }
                            _.push(M);
                          }
                        }
                        return _;
                      }),
                      (e.parseLevelPlaylist = function e(R, I, C, w, N) {
                        var B,
                          U,
                          K,
                          H = new x.LevelDetails(I),
                          V = H.fragments,
                          W = null,
                          Y = 0,
                          z = 0,
                          X = 0,
                          q = 0,
                          Z = null,
                          Q = new _.Fragment(w, I),
                          J = -1,
                          $ = !1;
                        for (G.lastIndex = 0, H.m3u8 = R; null !== (B = G.exec(R)); ) {
                          $ &&
                            (($ = !1),
                            ((Q = new _.Fragment(w, I)).start = X),
                            (Q.sn = Y),
                            (Q.cc = q),
                            (Q.level = C),
                            W && ((Q.initSegment = W), (Q.rawProgramDateTime = W.rawProgramDateTime)));
                          var ee = B[1];
                          if (ee) {
                            Q.duration = parseFloat(ee);
                            var te = (' ' + B[2]).slice(1);
                            (Q.title = te || null), Q.tagList.push(te ? ['INF', ee, te] : ['INF', ee]);
                          } else if (B[3])
                            Object(O.isFiniteNumber)(Q.duration) &&
                              ((Q.start = X),
                              K && (Q.levelkey = K),
                              (Q.sn = Y),
                              (Q.level = C),
                              (Q.cc = q),
                              (Q.urlId = N),
                              V.push(Q),
                              (Q.relurl = (' ' + B[3]).slice(1)),
                              b(Q, Z),
                              (Z = Q),
                              (X += Q.duration),
                              Y++,
                              (z = 0),
                              ($ = !0));
                          else if (B[4]) {
                            var re = (' ' + B[4]).slice(1);
                            Z ? Q.setByteRange(re, Z) : Q.setByteRange(re);
                          } else if (B[5])
                            (Q.rawProgramDateTime = (' ' + B[5]).slice(1)),
                              Q.tagList.push(['PROGRAM-DATE-TIME', Q.rawProgramDateTime]),
                              -1 === J && (J = V.length);
                          else {
                            if (!(B = B[0].match(j))) {
                              M.logger.warn('No matches on slow regex match for level playlist!');
                              continue;
                            }
                            for (U = 1; U < B.length && void 0 === B[U]; U++);
                            var ie = (' ' + B[U]).slice(1),
                              ne = (' ' + B[U + 1]).slice(1),
                              se = B[U + 2] ? (' ' + B[U + 2]).slice(1) : '';
                            switch (ie) {
                              case 'PLAYLIST-TYPE':
                                H.type = ne.toUpperCase();
                                break;
                              case 'MEDIA-SEQUENCE':
                                Y = H.startSN = parseInt(ne);
                                break;
                              case 'SKIP':
                                var ae = new F.AttrList(ne),
                                  oe = ae.decimalInteger('SKIPPED-SEGMENTS');
                                if (Object(O.isFiniteNumber)(oe)) {
                                  H.skippedSegments = oe;
                                  for (var le = oe; le--; ) V.unshift(null);
                                  Y += oe;
                                }
                                var ue = ae.enumeratedString('RECENTLY-REMOVED-DATERANGES');
                                ue && (H.recentlyRemovedDateranges = ue.split('\t'));
                                break;
                              case 'TARGETDURATION':
                                H.targetduration = parseFloat(ne);
                                break;
                              case 'VERSION':
                                H.version = parseInt(ne);
                                break;
                              case 'EXTM3U':
                                break;
                              case 'ENDLIST':
                                H.live = !1;
                                break;
                              case '#':
                                (ne || se) && Q.tagList.push(se ? [ne, se] : [ne]);
                                break;
                              case 'DIS':
                                q++;
                              case 'GAP':
                                Q.tagList.push([ie]);
                                break;
                              case 'BITRATE':
                                Q.tagList.push([ie, ne]);
                                break;
                              case 'DISCONTINUITY-SEQ':
                                q = parseInt(ne);
                                break;
                              case 'KEY':
                                var ce,
                                  de = new F.AttrList(ne),
                                  he = de.enumeratedString('METHOD'),
                                  fe = de.URI,
                                  ge = de.hexadecimalInteger('IV'),
                                  ve = de.enumeratedString('KEYFORMATVERSIONS'),
                                  pe = de.enumeratedString('KEYID'),
                                  me = null != (ce = de.enumeratedString('KEYFORMAT')) ? ce : 'identity';
                                if (
                                  [
                                    'com.apple.streamingkeydelivery',
                                    'com.microsoft.playready',
                                    'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed',
                                    'com.widevine',
                                  ].indexOf(me) > -1
                                ) {
                                  M.logger.warn('Keyformat ' + me + ' is not supported from the manifest');
                                  continue;
                                }
                                if ('identity' !== me) continue;
                                he &&
                                  ((K = P.LevelKey.fromURL(I, fe)),
                                  fe &&
                                    ['AES-128', 'SAMPLE-AES', 'SAMPLE-AES-CENC'].indexOf(he) >= 0 &&
                                    ((K.method = he),
                                    (K.keyFormat = me),
                                    pe && (K.keyID = pe),
                                    ve && (K.keyFormatVersions = ve),
                                    (K.iv = ge)));
                                break;
                              case 'START':
                                var ye = new F.AttrList(ne).decimalFloatingPoint('TIME-OFFSET');
                                Object(O.isFiniteNumber)(ye) && (H.startTimeOffset = ye);
                                break;
                              case 'MAP':
                                var Ee = new F.AttrList(ne);
                                (Q.relurl = Ee.URI),
                                  Ee.BYTERANGE && Q.setByteRange(Ee.BYTERANGE),
                                  (Q.level = C),
                                  (Q.sn = 'initSegment'),
                                  K && (Q.levelkey = K),
                                  (Q.initSegment = null),
                                  (W = Q),
                                  ($ = !0);
                                break;
                              case 'SERVER-CONTROL':
                                var Te = new F.AttrList(ne);
                                (H.canBlockReload = Te.bool('CAN-BLOCK-RELOAD')),
                                  (H.canSkipUntil = Te.optionalFloat('CAN-SKIP-UNTIL', 0)),
                                  (H.canSkipDateRanges = H.canSkipUntil > 0 && Te.bool('CAN-SKIP-DATERANGES')),
                                  (H.partHoldBack = Te.optionalFloat('PART-HOLD-BACK', 0)),
                                  (H.holdBack = Te.optionalFloat('HOLD-BACK', 0));
                                break;
                              case 'PART-INF':
                                var be = new F.AttrList(ne);
                                H.partTarget = be.decimalFloatingPoint('PART-TARGET');
                                break;
                              case 'PART':
                                var Se = H.partList;
                                Se || (Se = H.partList = []);
                                var Ae = z > 0 ? Se[Se.length - 1] : void 0,
                                  Le = z++,
                                  De = new _.Part(new F.AttrList(ne), Q, I, Le, Ae);
                                Se.push(De), (Q.duration += De.duration);
                                break;
                              case 'PRELOAD-HINT':
                                var Re = new F.AttrList(ne);
                                H.preloadHint = Re;
                                break;
                              case 'RENDITION-REPORT':
                                var ke = new F.AttrList(ne);
                                (H.renditionReports = H.renditionReports || []), H.renditionReports.push(ke);
                                break;
                              default:
                                M.logger.warn('line parsed but not handled: ' + B);
                            }
                          }
                        }
                        Z && !Z.relurl
                          ? (V.pop(), (X -= Z.duration), H.partList && (H.fragmentHint = Z))
                          : H.partList && (b(Q, Z), (Q.cc = q), (H.fragmentHint = Q));
                        var Ie = V.length,
                          Ce = V[0],
                          Oe = V[Ie - 1];
                        if ((X += H.skippedSegments * H.targetduration) > 0 && Ie && Oe) {
                          H.averagetargetduration = X / Ie;
                          var we = Oe.sn;
                          (H.endSN = 'initSegment' !== we ? we : 0),
                            Ce &&
                              ((H.startCC = Ce.cc),
                              Ce.initSegment ||
                                (H.fragments.every(function (R) {
                                  return R.relurl && p(R.relurl);
                                }) &&
                                  (M.logger.warn(
                                    'MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX'
                                  ),
                                  ((Q = new _.Fragment(w, I)).relurl = Oe.relurl),
                                  (Q.level = C),
                                  (Q.sn = 'initSegment'),
                                  (Ce.initSegment = Q),
                                  (H.needSidxRanges = !0))));
                        } else (H.endSN = 0), (H.startCC = 0);
                        return (
                          H.fragmentHint && (X += H.fragmentHint.duration),
                          (H.totalduration = X),
                          (H.endCC = q),
                          J > 0 &&
                            (function T(R, I) {
                              for (var C = R[I], O = I; O--; ) {
                                var w = R[O];
                                if (!w) return;
                                (w.programDateTime = C.programDateTime - 1e3 * w.duration), (C = w);
                              }
                            })(V, J),
                          H
                        );
                      }),
                      e
                    );
                  })();
                  function y(R, I) {
                    ['video', 'audio', 'text'].forEach(function (C) {
                      var O = R.filter(function (R) {
                        return Object(N.isCodecType)(R, C);
                      });
                      if (O.length) {
                        var w = O.filter(function (R) {
                          return 0 === R.lastIndexOf('avc1', 0) || 0 === R.lastIndexOf('mp4a', 0);
                        });
                        (I[C + 'Codec'] = w.length > 0 ? w[0] : O[0]),
                          (R = R.filter(function (R) {
                            return -1 === O.indexOf(R);
                          }));
                      }
                    }),
                      (I.unknownCodecs = R);
                  }
                  function E(R, I, C) {
                    var O = I[C];
                    O && (R[C] = O);
                  }
                  function b(R, I) {
                    R.rawProgramDateTime
                      ? (R.programDateTime = Date.parse(R.rawProgramDateTime))
                      : null != I && I.programDateTime && (R.programDateTime = I.endProgramDateTime),
                      Object(O.isFiniteNumber)(R.programDateTime) ||
                        ((R.programDateTime = null), (R.rawProgramDateTime = null));
                  }
                },
                './src/loader/playlist-loader.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/events.ts'),
                    _ = C('./src/errors.ts'),
                    x = C('./src/utils/logger.ts'),
                    P = C('./src/utils/mp4-tools.ts'),
                    F = C('./src/loader/m3u8-parser.ts'),
                    M = C('./src/types/loader.ts'),
                    N = C('./src/utils/attr-list.ts');
                  function d(R, I) {
                    var C = R.url;
                    return (void 0 !== C && 0 !== C.indexOf('data:')) || (C = I.url), C;
                  }
                  var B = (function () {
                    function e(R) {
                      (this.hls = void 0),
                        (this.loaders = Object.create(null)),
                        (this.hls = R),
                        this.registerListeners();
                    }
                    var R = e.prototype;
                    return (
                      (R.registerListeners = function e() {
                        var R = this.hls;
                        R.on(w.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.on(w.Events.LEVEL_LOADING, this.onLevelLoading, this),
                          R.on(w.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
                          R.on(w.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
                      }),
                      (R.unregisterListeners = function e() {
                        var R = this.hls;
                        R.off(w.Events.MANIFEST_LOADING, this.onManifestLoading, this),
                          R.off(w.Events.LEVEL_LOADING, this.onLevelLoading, this),
                          R.off(w.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
                          R.off(w.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
                      }),
                      (R.createInternalLoader = function e(R) {
                        var I = this.hls.config,
                          C = I.pLoader,
                          O = I.loader,
                          w = new (C || O)(I);
                        return (R.loader = w), (this.loaders[R.type] = w), w;
                      }),
                      (R.getInternalLoader = function e(R) {
                        return this.loaders[R.type];
                      }),
                      (R.resetInternalLoader = function e(R) {
                        this.loaders[R] && delete this.loaders[R];
                      }),
                      (R.destroyInternalLoaders = function e() {
                        for (var R in this.loaders) {
                          var I = this.loaders[R];
                          I && I.destroy(), this.resetInternalLoader(R);
                        }
                      }),
                      (R.destroy = function e() {
                        this.unregisterListeners(), this.destroyInternalLoaders();
                      }),
                      (R.onManifestLoading = function e(R, I) {
                        var C = I.url;
                        this.load({
                          id: null,
                          groupId: null,
                          level: 0,
                          responseType: 'text',
                          type: M.PlaylistContextType.MANIFEST,
                          url: C,
                          deliveryDirectives: null,
                        });
                      }),
                      (R.onLevelLoading = function e(R, I) {
                        var C = I.id,
                          O = I.level,
                          w = I.url,
                          _ = I.deliveryDirectives;
                        this.load({
                          id: C,
                          groupId: null,
                          level: O,
                          responseType: 'text',
                          type: M.PlaylistContextType.LEVEL,
                          url: w,
                          deliveryDirectives: _,
                        });
                      }),
                      (R.onAudioTrackLoading = function e(R, I) {
                        var C = I.id,
                          O = I.groupId,
                          w = I.url,
                          _ = I.deliveryDirectives;
                        this.load({
                          id: C,
                          groupId: O,
                          level: null,
                          responseType: 'text',
                          type: M.PlaylistContextType.AUDIO_TRACK,
                          url: w,
                          deliveryDirectives: _,
                        });
                      }),
                      (R.onSubtitleTrackLoading = function e(R, I) {
                        var C = I.id,
                          O = I.groupId,
                          w = I.url,
                          _ = I.deliveryDirectives;
                        this.load({
                          id: C,
                          groupId: O,
                          level: null,
                          responseType: 'text',
                          type: M.PlaylistContextType.SUBTITLE_TRACK,
                          url: w,
                          deliveryDirectives: _,
                        });
                      }),
                      (R.load = function e(R) {
                        var I,
                          C,
                          O,
                          w,
                          _,
                          P,
                          F = this.hls.config,
                          N = this.getInternalLoader(R);
                        if (N) {
                          var B = N.context;
                          if (B && B.url === R.url)
                            return void x.logger.trace('[playlist-loader]: playlist request ongoing');
                          x.logger.log('[playlist-loader]: aborting previous loader for type: ' + R.type), N.abort();
                        }
                        switch (R.type) {
                          case M.PlaylistContextType.MANIFEST:
                            (C = F.manifestLoadingMaxRetry),
                              (O = F.manifestLoadingTimeOut),
                              (w = F.manifestLoadingRetryDelay),
                              (_ = F.manifestLoadingMaxRetryTimeout);
                            break;
                          case M.PlaylistContextType.LEVEL:
                          case M.PlaylistContextType.AUDIO_TRACK:
                          case M.PlaylistContextType.SUBTITLE_TRACK:
                            (C = 0), (O = F.levelLoadingTimeOut);
                            break;
                          default:
                            (C = F.levelLoadingMaxRetry),
                              (O = F.levelLoadingTimeOut),
                              (w = F.levelLoadingRetryDelay),
                              (_ = F.levelLoadingMaxRetryTimeout);
                        }
                        if (
                          ((N = this.createInternalLoader(R)),
                          null !== (I = R.deliveryDirectives) && void 0 !== I && I.part) &&
                          (R.type === M.PlaylistContextType.LEVEL && null !== R.level
                            ? (P = this.hls.levels[R.level].details)
                            : R.type === M.PlaylistContextType.AUDIO_TRACK && null !== R.id
                            ? (P = this.hls.audioTracks[R.id].details)
                            : R.type === M.PlaylistContextType.SUBTITLE_TRACK &&
                              null !== R.id &&
                              (P = this.hls.subtitleTracks[R.id].details),
                          P)
                        ) {
                          var U = P.partTarget,
                            G = P.targetduration;
                          U && G && (O = Math.min(1e3 * Math.max(3 * U, 0.8 * G), O));
                        }
                        var j = { timeout: O, maxRetry: C, retryDelay: w, maxRetryDelay: _, highWaterMark: 0 },
                          K = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this),
                          };
                        N.load(R, j, K);
                      }),
                      (R.loadsuccess = function e(R, I, C, O) {
                        if ((void 0 === O && (O = null), C.isSidxRequest))
                          return this.handleSidxRequest(R, C), void this.handlePlaylistLoaded(R, I, C, O);
                        this.resetInternalLoader(C.type);
                        var w = R.data;
                        0 === w.indexOf('#EXTM3U')
                          ? ((I.parsing.start = performance.now()),
                            w.indexOf('#EXTINF:') > 0 || w.indexOf('#EXT-X-TARGETDURATION:') > 0
                              ? this.handleTrackOrLevelPlaylist(R, I, C, O)
                              : this.handleMasterPlaylist(R, I, C, O))
                          : this.handleManifestParsingError(R, C, 'no EXTM3U delimiter', O);
                      }),
                      (R.loaderror = function e(R, I, C) {
                        void 0 === C && (C = null), this.handleNetworkError(I, C, !1, R);
                      }),
                      (R.loadtimeout = function e(R, I, C) {
                        void 0 === C && (C = null), this.handleNetworkError(I, C, !0);
                      }),
                      (R.handleMasterPlaylist = function e(R, I, C, O) {
                        var _ = this.hls,
                          P = R.data,
                          M = d(R, C),
                          B = F.default.parseMasterPlaylist(P, M),
                          U = B.levels,
                          G = B.sessionData;
                        if (U.length) {
                          var j = U.map(function (R) {
                              return { id: R.attrs.AUDIO, audioCodec: R.audioCodec };
                            }),
                            K = U.map(function (R) {
                              return { id: R.attrs.SUBTITLES, textCodec: R.textCodec };
                            }),
                            H = F.default.parseMasterPlaylistMedia(P, M, 'AUDIO', j),
                            V = F.default.parseMasterPlaylistMedia(P, M, 'SUBTITLES', K),
                            W = F.default.parseMasterPlaylistMedia(P, M, 'CLOSED-CAPTIONS');
                          if (H.length)
                            H.some(function (R) {
                              return !R.url;
                            }) ||
                              !U[0].audioCodec ||
                              U[0].attrs.AUDIO ||
                              (x.logger.log(
                                '[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one'
                              ),
                              H.unshift({
                                type: 'main',
                                name: 'main',
                                default: !1,
                                autoselect: !1,
                                forced: !1,
                                id: -1,
                                attrs: new N.AttrList({}),
                                bitrate: 0,
                                url: '',
                              }));
                          _.trigger(w.Events.MANIFEST_LOADED, {
                            levels: U,
                            audioTracks: H,
                            subtitles: V,
                            captions: W,
                            url: M,
                            stats: I,
                            networkDetails: O,
                            sessionData: G,
                          });
                        } else this.handleManifestParsingError(R, C, 'no level found in manifest', O);
                      }),
                      (R.handleTrackOrLevelPlaylist = function e(R, I, C, x) {
                        var P = this.hls,
                          B = C.id,
                          U = C.level,
                          G = C.type,
                          j = d(R, C),
                          K = Object(O.isFiniteNumber)(B) ? B : 0,
                          H = Object(O.isFiniteNumber)(U) ? U : K,
                          V = (function c(R) {
                            switch (R.type) {
                              case M.PlaylistContextType.AUDIO_TRACK:
                                return M.PlaylistLevelType.AUDIO;
                              case M.PlaylistContextType.SUBTITLE_TRACK:
                                return M.PlaylistLevelType.SUBTITLE;
                              default:
                                return M.PlaylistLevelType.MAIN;
                            }
                          })(C),
                          W = F.default.parseLevelPlaylist(R.data, j, H, V, K);
                        if (W.fragments.length) {
                          if (G === M.PlaylistContextType.MANIFEST) {
                            var Y = { attrs: new N.AttrList({}), bitrate: 0, details: W, name: '', url: j };
                            P.trigger(w.Events.MANIFEST_LOADED, {
                              levels: [Y],
                              audioTracks: [],
                              url: j,
                              stats: I,
                              networkDetails: x,
                              sessionData: null,
                            });
                          }
                          if (((I.parsing.end = performance.now()), W.needSidxRanges)) {
                            var z,
                              X = null === (z = W.fragments[0].initSegment) || void 0 === z ? void 0 : z.url;
                            this.load({
                              url: X,
                              isSidxRequest: !0,
                              type: G,
                              level: U,
                              levelDetails: W,
                              id: B,
                              groupId: null,
                              rangeStart: 0,
                              rangeEnd: 2048,
                              responseType: 'arraybuffer',
                              deliveryDirectives: null,
                            });
                          } else (C.levelDetails = W), this.handlePlaylistLoaded(R, I, C, x);
                        } else
                          P.trigger(w.Events.ERROR, {
                            type: _.ErrorTypes.NETWORK_ERROR,
                            details: _.ErrorDetails.LEVEL_EMPTY_ERROR,
                            fatal: !1,
                            url: j,
                            reason: 'no fragments found in level',
                            level: 'number' == typeof C.level ? C.level : void 0,
                          });
                      }),
                      (R.handleSidxRequest = function e(R, I) {
                        var C = Object(P.parseSegmentIndex)(new Uint8Array(R.data));
                        if (C) {
                          var O = C.references,
                            w = I.levelDetails;
                          O.forEach(function (R, I) {
                            var O = R.info,
                              _ = w.fragments[I];
                            0 === _.byteRange.length &&
                              _.setByteRange(String(1 + O.end - O.start) + '@' + String(O.start)),
                              _.initSegment && _.initSegment.setByteRange(String(C.moovEndOffset) + '@0');
                          });
                        }
                      }),
                      (R.handleManifestParsingError = function e(R, I, C, O) {
                        this.hls.trigger(w.Events.ERROR, {
                          type: _.ErrorTypes.NETWORK_ERROR,
                          details: _.ErrorDetails.MANIFEST_PARSING_ERROR,
                          fatal: I.type === M.PlaylistContextType.MANIFEST,
                          url: R.url,
                          reason: C,
                          response: R,
                          context: I,
                          networkDetails: O,
                        });
                      }),
                      (R.handleNetworkError = function e(R, I, C, O) {
                        void 0 === C && (C = !1),
                          x.logger.warn(
                            '[playlist-loader]: A network ' +
                              (C ? 'timeout' : 'error') +
                              ' occurred while loading ' +
                              R.type +
                              ' level: ' +
                              R.level +
                              ' id: ' +
                              R.id +
                              ' group-id: "' +
                              R.groupId +
                              '"'
                          );
                        var P = _.ErrorDetails.UNKNOWN,
                          F = !1,
                          N = this.getInternalLoader(R);
                        switch (R.type) {
                          case M.PlaylistContextType.MANIFEST:
                            (P = C ? _.ErrorDetails.MANIFEST_LOAD_TIMEOUT : _.ErrorDetails.MANIFEST_LOAD_ERROR),
                              (F = !0);
                            break;
                          case M.PlaylistContextType.LEVEL:
                            (P = C ? _.ErrorDetails.LEVEL_LOAD_TIMEOUT : _.ErrorDetails.LEVEL_LOAD_ERROR), (F = !1);
                            break;
                          case M.PlaylistContextType.AUDIO_TRACK:
                            (P = C ? _.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : _.ErrorDetails.AUDIO_TRACK_LOAD_ERROR),
                              (F = !1);
                            break;
                          case M.PlaylistContextType.SUBTITLE_TRACK:
                            (P = C ? _.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : _.ErrorDetails.SUBTITLE_LOAD_ERROR),
                              (F = !1);
                        }
                        N && this.resetInternalLoader(R.type);
                        var B = {
                          type: _.ErrorTypes.NETWORK_ERROR,
                          details: P,
                          fatal: F,
                          url: R.url,
                          loader: N,
                          context: R,
                          networkDetails: I,
                        };
                        O && (B.response = O), this.hls.trigger(w.Events.ERROR, B);
                      }),
                      (R.handlePlaylistLoaded = function e(R, I, C, O) {
                        var _ = C.type,
                          x = C.level,
                          P = C.id,
                          F = C.groupId,
                          N = C.loader,
                          B = C.levelDetails,
                          U = C.deliveryDirectives;
                        if (null != B && B.targetduration) {
                          if (N)
                            switch (
                              (B.live &&
                                (N.getCacheAge && (B.ageHeader = N.getCacheAge() || 0),
                                (N.getCacheAge && !isNaN(B.ageHeader)) || (B.ageHeader = 0)),
                              _)
                            ) {
                              case M.PlaylistContextType.MANIFEST:
                              case M.PlaylistContextType.LEVEL:
                                this.hls.trigger(w.Events.LEVEL_LOADED, {
                                  details: B,
                                  level: x || 0,
                                  id: P || 0,
                                  stats: I,
                                  networkDetails: O,
                                  deliveryDirectives: U,
                                });
                                break;
                              case M.PlaylistContextType.AUDIO_TRACK:
                                this.hls.trigger(w.Events.AUDIO_TRACK_LOADED, {
                                  details: B,
                                  id: P || 0,
                                  groupId: F || '',
                                  stats: I,
                                  networkDetails: O,
                                  deliveryDirectives: U,
                                });
                                break;
                              case M.PlaylistContextType.SUBTITLE_TRACK:
                                this.hls.trigger(w.Events.SUBTITLE_TRACK_LOADED, {
                                  details: B,
                                  id: P || 0,
                                  groupId: F || '',
                                  stats: I,
                                  networkDetails: O,
                                  deliveryDirectives: U,
                                });
                            }
                        } else this.handleManifestParsingError(R, C, 'invalid target duration', O);
                      }),
                      e
                    );
                  })();
                  I.default = B;
                },
                './src/polyfills/number.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'isFiniteNumber', function () {
                      return O;
                    }),
                    C.d(I, 'MAX_SAFE_INTEGER', function () {
                      return w;
                    });
                  var O =
                      Number.isFinite ||
                      function (R) {
                        return 'number' == typeof R && isFinite(R);
                      },
                    w = Number.MAX_SAFE_INTEGER || 9007199254740991;
                },
                './src/remux/aac-helper.ts': function (R, I, C) {
                  C.r(I);
                  var O = (function () {
                    function e() {}
                    return (
                      (e.getSilentFrame = function e(R, I) {
                        switch (R) {
                          case 'mp4a.40.2':
                            if (1 === I) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                            if (2 === I) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                            if (3 === I) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                            if (4 === I)
                              return new Uint8Array([
                                0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56,
                              ]);
                            if (5 === I)
                              return new Uint8Array([
                                0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56,
                              ]);
                            if (6 === I)
                              return new Uint8Array([
                                0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178,
                                0, 32, 8, 224,
                              ]);
                            break;
                          default:
                            if (1 === I)
                              return new Uint8Array([
                                1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90,
                                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                              ]);
                            if (2 === I)
                              return new Uint8Array([
                                1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90,
                                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                              ]);
                            if (3 === I)
                              return new Uint8Array([
                                1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90,
                                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                              ]);
                        }
                      }),
                      e
                    );
                  })();
                  I.default = O;
                },
                './src/remux/mp4-generator.ts': function (R, I, C) {
                  C.r(I);
                  var O = Math.pow(2, 32) - 1,
                    w = (function () {
                      function e() {}
                      return (
                        (e.init = function t() {
                          var R;
                          for (R in ((e.types = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            '.mp3': [],
                            mvex: [],
                            mvhd: [],
                            pasp: [],
                            sdtp: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: [],
                            smhd: [],
                          }),
                          e.types))
                            e.types.hasOwnProperty(R) &&
                              (e.types[R] = [R.charCodeAt(0), R.charCodeAt(1), R.charCodeAt(2), R.charCodeAt(3)]);
                          var I = new Uint8Array([
                              0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105,
                              100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0,
                            ]),
                            C = new Uint8Array([
                              0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111,
                              117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0,
                            ]);
                          e.HDLR_TYPES = { video: I, audio: C };
                          var O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                            w = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                          (e.STTS = e.STSC = e.STCO = w),
                            (e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                            (e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])),
                            (e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                            (e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
                          var _ = new Uint8Array([105, 115, 111, 109]),
                            x = new Uint8Array([97, 118, 99, 49]),
                            P = new Uint8Array([0, 0, 0, 1]);
                          (e.FTYP = e.box(e.types.ftyp, _, P, _, x)),
                            (e.DINF = e.box(e.types.dinf, e.box(e.types.dref, O)));
                        }),
                        (e.box = function e(R) {
                          for (var I = 8, C = arguments.length, O = new Array(C > 1 ? C - 1 : 0), w = 1; w < C; w++)
                            O[w - 1] = arguments[w];
                          for (var _ = O.length, x = _; _--; ) I += O[_].byteLength;
                          var P = new Uint8Array(I);
                          for (
                            P[0] = (I >> 24) & 255,
                              P[1] = (I >> 16) & 255,
                              P[2] = (I >> 8) & 255,
                              P[3] = 255 & I,
                              P.set(R, 4),
                              _ = 0,
                              I = 8;
                            _ < x;
                            _++
                          )
                            P.set(O[_], I), (I += O[_].byteLength);
                          return P;
                        }),
                        (e.hdlr = function t(R) {
                          return e.box(e.types.hdlr, e.HDLR_TYPES[R]);
                        }),
                        (e.mdat = function t(R) {
                          return e.box(e.types.mdat, R);
                        }),
                        (e.mdhd = function t(R, I) {
                          I *= R;
                          var C = Math.floor(I / (O + 1)),
                            w = Math.floor(I % (O + 1));
                          return e.box(
                            e.types.mdhd,
                            new Uint8Array([
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              2,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              3,
                              (R >> 24) & 255,
                              (R >> 16) & 255,
                              (R >> 8) & 255,
                              255 & R,
                              C >> 24,
                              (C >> 16) & 255,
                              (C >> 8) & 255,
                              255 & C,
                              w >> 24,
                              (w >> 16) & 255,
                              (w >> 8) & 255,
                              255 & w,
                              85,
                              196,
                              0,
                              0,
                            ])
                          );
                        }),
                        (e.mdia = function t(R) {
                          return e.box(e.types.mdia, e.mdhd(R.timescale, R.duration), e.hdlr(R.type), e.minf(R));
                        }),
                        (e.mfhd = function t(R) {
                          return e.box(
                            e.types.mfhd,
                            new Uint8Array([0, 0, 0, 0, R >> 24, (R >> 16) & 255, (R >> 8) & 255, 255 & R])
                          );
                        }),
                        (e.minf = function t(R) {
                          return 'audio' === R.type
                            ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(R))
                            : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(R));
                        }),
                        (e.moof = function t(R, I, C) {
                          return e.box(e.types.moof, e.mfhd(R), e.traf(C, I));
                        }),
                        (e.moov = function t(R) {
                          for (var I = R.length, C = []; I--; ) C[I] = e.trak(R[I]);
                          return e.box.apply(
                            null,
                            [e.types.moov, e.mvhd(R[0].timescale, R[0].duration)].concat(C).concat(e.mvex(R))
                          );
                        }),
                        (e.mvex = function t(R) {
                          for (var I = R.length, C = []; I--; ) C[I] = e.trex(R[I]);
                          return e.box.apply(null, [e.types.mvex].concat(C));
                        }),
                        (e.mvhd = function t(R, I) {
                          I *= R;
                          var C = Math.floor(I / (O + 1)),
                            w = Math.floor(I % (O + 1)),
                            _ = new Uint8Array([
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              2,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              3,
                              (R >> 24) & 255,
                              (R >> 16) & 255,
                              (R >> 8) & 255,
                              255 & R,
                              C >> 24,
                              (C >> 16) & 255,
                              (C >> 8) & 255,
                              255 & C,
                              w >> 24,
                              (w >> 16) & 255,
                              (w >> 8) & 255,
                              255 & w,
                              0,
                              1,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              64,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              255,
                              255,
                              255,
                              255,
                            ]);
                          return e.box(e.types.mvhd, _);
                        }),
                        (e.sdtp = function t(R) {
                          var I,
                            C,
                            O = R.samples || [],
                            w = new Uint8Array(4 + O.length);
                          for (I = 0; I < O.length; I++)
                            (C = O[I].flags), (w[I + 4] = (C.dependsOn << 4) | (C.isDependedOn << 2) | C.hasRedundancy);
                          return e.box(e.types.sdtp, w);
                        }),
                        (e.stbl = function t(R) {
                          return e.box(
                            e.types.stbl,
                            e.stsd(R),
                            e.box(e.types.stts, e.STTS),
                            e.box(e.types.stsc, e.STSC),
                            e.box(e.types.stsz, e.STSZ),
                            e.box(e.types.stco, e.STCO)
                          );
                        }),
                        (e.avc1 = function t(R) {
                          var I,
                            C,
                            O,
                            w = [],
                            _ = [];
                          for (I = 0; I < R.sps.length; I++)
                            (O = (C = R.sps[I]).byteLength),
                              w.push((O >>> 8) & 255),
                              w.push(255 & O),
                              (w = w.concat(Array.prototype.slice.call(C)));
                          for (I = 0; I < R.pps.length; I++)
                            (O = (C = R.pps[I]).byteLength),
                              _.push((O >>> 8) & 255),
                              _.push(255 & O),
                              (_ = _.concat(Array.prototype.slice.call(C)));
                          var x = e.box(
                              e.types.avcC,
                              new Uint8Array(
                                [1, w[3], w[4], w[5], 255, 224 | R.sps.length]
                                  .concat(w)
                                  .concat([R.pps.length])
                                  .concat(_)
                              )
                            ),
                            P = R.width,
                            F = R.height,
                            M = R.pixelRatio[0],
                            N = R.pixelRatio[1];
                          return e.box(
                            e.types.avc1,
                            new Uint8Array([
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              (P >> 8) & 255,
                              255 & P,
                              (F >> 8) & 255,
                              255 & F,
                              0,
                              72,
                              0,
                              0,
                              0,
                              72,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              18,
                              100,
                              97,
                              105,
                              108,
                              121,
                              109,
                              111,
                              116,
                              105,
                              111,
                              110,
                              47,
                              104,
                              108,
                              115,
                              46,
                              106,
                              115,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              24,
                              17,
                              17,
                            ]),
                            x,
                            e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])),
                            e.box(
                              e.types.pasp,
                              new Uint8Array([
                                M >> 24,
                                (M >> 16) & 255,
                                (M >> 8) & 255,
                                255 & M,
                                N >> 24,
                                (N >> 16) & 255,
                                (N >> 8) & 255,
                                255 & N,
                              ])
                            )
                          );
                        }),
                        (e.esds = function e(R) {
                          var I = R.config.length;
                          return new Uint8Array(
                            [0, 0, 0, 0, 3, 23 + I, 0, 1, 0, 4, 15 + I, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5]
                              .concat([I])
                              .concat(R.config)
                              .concat([6, 1, 2])
                          );
                        }),
                        (e.mp4a = function t(R) {
                          var I = R.samplerate;
                          return e.box(
                            e.types.mp4a,
                            new Uint8Array([
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              R.channelCount,
                              0,
                              16,
                              0,
                              0,
                              0,
                              0,
                              (I >> 8) & 255,
                              255 & I,
                              0,
                              0,
                            ]),
                            e.box(e.types.esds, e.esds(R))
                          );
                        }),
                        (e.mp3 = function t(R) {
                          var I = R.samplerate;
                          return e.box(
                            e.types['.mp3'],
                            new Uint8Array([
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              R.channelCount,
                              0,
                              16,
                              0,
                              0,
                              0,
                              0,
                              (I >> 8) & 255,
                              255 & I,
                              0,
                              0,
                            ])
                          );
                        }),
                        (e.stsd = function t(R) {
                          return 'audio' === R.type
                            ? R.isAAC || 'mp3' !== R.codec
                              ? e.box(e.types.stsd, e.STSD, e.mp4a(R))
                              : e.box(e.types.stsd, e.STSD, e.mp3(R))
                            : e.box(e.types.stsd, e.STSD, e.avc1(R));
                        }),
                        (e.tkhd = function t(R) {
                          var I = R.id,
                            C = R.duration * R.timescale,
                            w = R.width,
                            _ = R.height,
                            x = Math.floor(C / (O + 1)),
                            P = Math.floor(C % (O + 1));
                          return e.box(
                            e.types.tkhd,
                            new Uint8Array([
                              1,
                              0,
                              0,
                              7,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              2,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              3,
                              (I >> 24) & 255,
                              (I >> 16) & 255,
                              (I >> 8) & 255,
                              255 & I,
                              0,
                              0,
                              0,
                              0,
                              x >> 24,
                              (x >> 16) & 255,
                              (x >> 8) & 255,
                              255 & x,
                              P >> 24,
                              (P >> 16) & 255,
                              (P >> 8) & 255,
                              255 & P,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              64,
                              0,
                              0,
                              0,
                              (w >> 8) & 255,
                              255 & w,
                              0,
                              0,
                              (_ >> 8) & 255,
                              255 & _,
                              0,
                              0,
                            ])
                          );
                        }),
                        (e.traf = function t(R, I) {
                          var C = e.sdtp(R),
                            w = R.id,
                            _ = Math.floor(I / (O + 1)),
                            x = Math.floor(I % (O + 1));
                          return e.box(
                            e.types.traf,
                            e.box(
                              e.types.tfhd,
                              new Uint8Array([0, 0, 0, 0, w >> 24, (w >> 16) & 255, (w >> 8) & 255, 255 & w])
                            ),
                            e.box(
                              e.types.tfdt,
                              new Uint8Array([
                                1,
                                0,
                                0,
                                0,
                                _ >> 24,
                                (_ >> 16) & 255,
                                (_ >> 8) & 255,
                                255 & _,
                                x >> 24,
                                (x >> 16) & 255,
                                (x >> 8) & 255,
                                255 & x,
                              ])
                            ),
                            e.trun(R, C.length + 16 + 20 + 8 + 16 + 8 + 8),
                            C
                          );
                        }),
                        (e.trak = function t(R) {
                          return (R.duration = R.duration || 4294967295), e.box(e.types.trak, e.tkhd(R), e.mdia(R));
                        }),
                        (e.trex = function t(R) {
                          var I = R.id;
                          return e.box(
                            e.types.trex,
                            new Uint8Array([
                              0,
                              0,
                              0,
                              0,
                              I >> 24,
                              (I >> 16) & 255,
                              (I >> 8) & 255,
                              255 & I,
                              0,
                              0,
                              0,
                              1,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              0,
                              1,
                            ])
                          );
                        }),
                        (e.trun = function t(R, I) {
                          var C,
                            O,
                            w,
                            _,
                            x,
                            P,
                            F = R.samples || [],
                            M = F.length,
                            N = 12 + 16 * M,
                            B = new Uint8Array(N);
                          for (
                            I += 8 + N,
                              B.set(
                                [
                                  0,
                                  0,
                                  15,
                                  1,
                                  (M >>> 24) & 255,
                                  (M >>> 16) & 255,
                                  (M >>> 8) & 255,
                                  255 & M,
                                  (I >>> 24) & 255,
                                  (I >>> 16) & 255,
                                  (I >>> 8) & 255,
                                  255 & I,
                                ],
                                0
                              ),
                              C = 0;
                            C < M;
                            C++
                          )
                            (w = (O = F[C]).duration),
                              (_ = O.size),
                              (x = O.flags),
                              (P = O.cts),
                              B.set(
                                [
                                  (w >>> 24) & 255,
                                  (w >>> 16) & 255,
                                  (w >>> 8) & 255,
                                  255 & w,
                                  (_ >>> 24) & 255,
                                  (_ >>> 16) & 255,
                                  (_ >>> 8) & 255,
                                  255 & _,
                                  (x.isLeading << 2) | x.dependsOn,
                                  (x.isDependedOn << 6) | (x.hasRedundancy << 4) | (x.paddingValue << 1) | x.isNonSync,
                                  61440 & x.degradPrio,
                                  15 & x.degradPrio,
                                  (P >>> 24) & 255,
                                  (P >>> 16) & 255,
                                  (P >>> 8) & 255,
                                  255 & P,
                                ],
                                12 + 16 * C
                              );
                          return e.box(e.types.trun, B);
                        }),
                        (e.initSegment = function t(R) {
                          e.types || e.init();
                          var I = e.moov(R),
                            C = new Uint8Array(e.FTYP.byteLength + I.byteLength);
                          return C.set(e.FTYP), C.set(I, e.FTYP.byteLength), C;
                        }),
                        e
                      );
                    })();
                  (w.types = void 0),
                    (w.HDLR_TYPES = void 0),
                    (w.STTS = void 0),
                    (w.STSC = void 0),
                    (w.STCO = void 0),
                    (w.STSZ = void 0),
                    (w.VMHD = void 0),
                    (w.SMHD = void 0),
                    (w.STSD = void 0),
                    (w.FTYP = void 0),
                    (w.DINF = void 0),
                    (I.default = w);
                },
                './src/remux/mp4-remuxer.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return j;
                    }),
                    C.d(I, 'normalizePts', function () {
                      return E;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/remux/aac-helper.ts'),
                    _ = C('./src/remux/mp4-generator.ts'),
                    x = C('./src/events.ts'),
                    P = C('./src/errors.ts'),
                    F = C('./src/utils/logger.ts'),
                    M = C('./src/types/loader.ts'),
                    N = C('./src/utils/timescale-conversion.ts');
                  function c() {
                    return (c =
                      Object.assign ||
                      function (R) {
                        for (var I = 1; I < arguments.length; I++) {
                          var C = arguments[I];
                          for (var O in C) Object.prototype.hasOwnProperty.call(C, O) && (R[O] = C[O]);
                        }
                        return R;
                      }).apply(this, arguments);
                  }
                  var B = null,
                    U = null,
                    G = !1,
                    j = (function () {
                      function e(R, I, C, O) {
                        if (
                          ((this.observer = void 0),
                          (this.config = void 0),
                          (this.typeSupported = void 0),
                          (this.ISGenerated = !1),
                          (this._initPTS = void 0),
                          (this._initDTS = void 0),
                          (this.nextAvcDts = null),
                          (this.nextAudioPts = null),
                          (this.isAudioContiguous = !1),
                          (this.isVideoContiguous = !1),
                          (this.observer = R),
                          (this.config = I),
                          (this.typeSupported = C),
                          (this.ISGenerated = !1),
                          null === B)
                        ) {
                          var w = (navigator.userAgent || '').match(/Chrome\/(\d+)/i);
                          B = w ? parseInt(w[1]) : 0;
                        }
                        if (null === U) {
                          var _ = navigator.userAgent.match(/Safari\/(\d+)/i);
                          U = _ ? parseInt(_[1]) : 0;
                        }
                        G = (!!B && B < 75) || (!!U && U < 600);
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {}),
                        (R.resetTimeStamp = function e(R) {
                          F.logger.log('[mp4-remuxer]: initPTS & initDTS reset'), (this._initPTS = this._initDTS = R);
                        }),
                        (R.resetNextTimestamp = function e() {
                          F.logger.log('[mp4-remuxer]: reset next timestamp'),
                            (this.isVideoContiguous = !1),
                            (this.isAudioContiguous = !1);
                        }),
                        (R.resetInitSegment = function e() {
                          F.logger.log('[mp4-remuxer]: ISGenerated flag reset'), (this.ISGenerated = !1);
                        }),
                        (R.getVideoStartPts = function e(R) {
                          var I = !1,
                            C = R.reduce(function (R, C) {
                              var O = C.pts - R;
                              return O < -4294967296 ? ((I = !0), E(R, C.pts)) : O > 0 ? R : C.pts;
                            }, R[0].pts);
                          return I && F.logger.debug('PTS rollover detected'), C;
                        }),
                        (R.remux = function e(R, I, C, O, w, _, x, P) {
                          var N,
                            B,
                            U,
                            G,
                            j,
                            K,
                            H = w,
                            V = w,
                            W = R.pid > -1,
                            Y = I.pid > -1,
                            z = I.samples.length,
                            X = R.samples.length > 0,
                            q = z > 1;
                          if (((!W || X) && (!Y || q)) || this.ISGenerated || x) {
                            this.ISGenerated || (U = this.generateIS(R, I, w));
                            var Z = this.isVideoContiguous,
                              Q = -1;
                            if (
                              q &&
                              ((Q = (function T(R) {
                                for (var I = 0; I < R.length; I++) if (R[I].key) return I;
                                return -1;
                              })(I.samples)),
                              !Z && this.config.forceKeyFrameOnDiscontinuity)
                            )
                              if (((K = !0), Q > 0)) {
                                F.logger.warn(
                                  '[mp4-remuxer]: Dropped ' +
                                    Q +
                                    ' out of ' +
                                    z +
                                    ' video samples due to a missing keyframe'
                                );
                                var J = this.getVideoStartPts(I.samples);
                                (I.samples = I.samples.slice(Q)),
                                  (I.dropped += Q),
                                  (V += (I.samples[0].pts - J) / (I.timescale || 9e4));
                              } else
                                -1 === Q &&
                                  (F.logger.warn('[mp4-remuxer]: No keyframe found out of ' + z + ' video samples'),
                                  (K = !1));
                            if (this.ISGenerated) {
                              if (X && q) {
                                var $ = this.getVideoStartPts(I.samples),
                                  ee = (E(R.samples[0].pts, $) - $) / I.inputTimeScale;
                                (H += Math.max(0, ee)), (V += Math.max(0, -ee));
                              }
                              if (X) {
                                if (
                                  (R.samplerate ||
                                    (F.logger.warn('[mp4-remuxer]: regenerate InitSegment as audio detected'),
                                    (U = this.generateIS(R, I, w))),
                                  (B = this.remuxAudio(
                                    R,
                                    H,
                                    this.isAudioContiguous,
                                    _,
                                    Y || q || P === M.PlaylistLevelType.AUDIO ? V : void 0
                                  )),
                                  q)
                                ) {
                                  var te = B ? B.endPTS - B.startPTS : 0;
                                  I.inputTimeScale ||
                                    (F.logger.warn('[mp4-remuxer]: regenerate InitSegment as video detected'),
                                    (U = this.generateIS(R, I, w))),
                                    (N = this.remuxVideo(I, V, Z, te));
                                }
                              } else q && (N = this.remuxVideo(I, V, Z, 0));
                              N && ((N.firstKeyFrame = Q), (N.independent = -1 !== Q));
                            }
                          }
                          return (
                            this.ISGenerated &&
                              (C.samples.length && (j = this.remuxID3(C, w)),
                              O.samples.length && (G = this.remuxText(O, w))),
                            { audio: B, video: N, initSegment: U, independent: K, text: G, id3: j }
                          );
                        }),
                        (R.generateIS = function e(R, I, C) {
                          var w,
                            x,
                            P,
                            F = R.samples,
                            M = I.samples,
                            N = this.typeSupported,
                            B = {},
                            U = !Object(O.isFiniteNumber)(this._initPTS),
                            G = 'audio/mp4';
                          if (
                            (U && (w = x = 1 / 0),
                            R.config &&
                              F.length &&
                              ((R.timescale = R.samplerate),
                              R.isAAC || (N.mpeg ? ((G = 'audio/mpeg'), (R.codec = '')) : N.mp3 && (R.codec = 'mp3')),
                              (B.audio = {
                                id: 'audio',
                                container: G,
                                codec: R.codec,
                                initSegment: !R.isAAC && N.mpeg ? new Uint8Array(0) : _.default.initSegment([R]),
                                metadata: { channelCount: R.channelCount },
                              }),
                              U && ((P = R.inputTimeScale), (w = x = F[0].pts - Math.round(P * C)))),
                            I.sps &&
                              I.pps &&
                              M.length &&
                              ((I.timescale = I.inputTimeScale),
                              (B.video = {
                                id: 'main',
                                container: 'video/mp4',
                                codec: I.codec,
                                initSegment: _.default.initSegment([I]),
                                metadata: { width: I.width, height: I.height },
                              }),
                              U))
                          ) {
                            P = I.inputTimeScale;
                            var j = this.getVideoStartPts(M),
                              K = Math.round(P * C);
                            (x = Math.min(x, E(M[0].dts, j) - K)), (w = Math.min(w, j - K));
                          }
                          if (Object.keys(B).length)
                            return (
                              (this.ISGenerated = !0),
                              U && ((this._initPTS = w), (this._initDTS = x)),
                              { tracks: B, initPTS: w, timescale: P }
                            );
                        }),
                        (R.remuxVideo = function e(R, I, C, O) {
                          var w,
                            M,
                            U,
                            j = R.inputTimeScale,
                            H = R.samples,
                            V = [],
                            W = H.length,
                            Y = this._initPTS,
                            z = this.nextAvcDts,
                            X = 8,
                            q = Number.POSITIVE_INFINITY,
                            Z = Number.NEGATIVE_INFINITY,
                            Q = 0,
                            J = !1;
                          (C && null !== z) || (z = I * j - (H[0].pts - E(H[0].dts, H[0].pts)));
                          for (var $ = 0; $ < W; $++) {
                            var ee = H[$];
                            if (((ee.pts = E(ee.pts - Y, z)), (ee.dts = E(ee.dts - Y, z)), ee.dts > ee.pts)) {
                              Q = Math.max(Math.min(Q, ee.pts - ee.dts), -18e3);
                            }
                            ee.dts < H[$ > 0 ? $ - 1 : $].dts && (J = !0);
                          }
                          J &&
                            H.sort(function (R, I) {
                              var C = R.dts - I.dts,
                                O = R.pts - I.pts;
                              return C || O;
                            }),
                            (M = H[0].dts),
                            (U = H[H.length - 1].dts);
                          var te = Math.round((U - M) / (W - 1));
                          if (Q < 0) {
                            if (Q < -2 * te) {
                              F.logger.warn(
                                'PTS < DTS detected in video samples, offsetting DTS from PTS by ' +
                                  Object(N.toMsFromMpegTsClock)(-te, !0) +
                                  ' ms'
                              );
                              for (var re = Q, ie = 0; ie < W; ie++)
                                (H[ie].dts = re = Math.max(re, H[ie].pts - te)), (H[ie].pts = Math.max(re, H[ie].pts));
                            } else {
                              F.logger.warn(
                                'PTS < DTS detected in video samples, shifting DTS by ' +
                                  Object(N.toMsFromMpegTsClock)(Q, !0) +
                                  ' ms to overcome this issue'
                              );
                              for (var ne = 0; ne < W; ne++) H[ne].dts = H[ne].dts + Q;
                            }
                            M = H[0].dts;
                          }
                          if (C) {
                            var se = M - z,
                              ae = se > te;
                            if (ae || se < -1) {
                              ae
                                ? F.logger.warn(
                                    'AVC: ' +
                                      Object(N.toMsFromMpegTsClock)(se, !0) +
                                      ' ms (' +
                                      se +
                                      'dts) hole between fragments detected, filling it'
                                  )
                                : F.logger.warn(
                                    'AVC: ' +
                                      Object(N.toMsFromMpegTsClock)(-se, !0) +
                                      ' ms (' +
                                      se +
                                      'dts) overlapping between fragments detected'
                                  ),
                                (M = z);
                              var oe = H[0].pts - se;
                              (H[0].dts = M),
                                (H[0].pts = oe),
                                F.logger.log(
                                  'Video: First PTS/DTS adjusted: ' +
                                    Object(N.toMsFromMpegTsClock)(oe, !0) +
                                    '/' +
                                    Object(N.toMsFromMpegTsClock)(M, !0) +
                                    ', delta: ' +
                                    Object(N.toMsFromMpegTsClock)(se, !0) +
                                    ' ms'
                                );
                            }
                          }
                          G && (M = Math.max(0, M));
                          for (var le = 0, ue = 0, ce = 0; ce < W; ce++) {
                            for (var de = H[ce], he = de.units, fe = he.length, ge = 0, ve = 0; ve < fe; ve++)
                              ge += he[ve].data.length;
                            (ue += ge),
                              (le += fe),
                              (de.length = ge),
                              (de.dts = Math.max(de.dts, M)),
                              (de.pts = Math.max(de.pts, de.dts, 0)),
                              (q = Math.min(de.pts, q)),
                              (Z = Math.max(de.pts, Z));
                          }
                          U = H[W - 1].dts;
                          var pe,
                            me = ue + 4 * le + 8;
                          try {
                            pe = new Uint8Array(me);
                          } catch (e) {
                            return void this.observer.emit(x.Events.ERROR, x.Events.ERROR, {
                              type: P.ErrorTypes.MUX_ERROR,
                              details: P.ErrorDetails.REMUX_ALLOC_ERROR,
                              fatal: !1,
                              bytes: me,
                              reason: 'fail allocating video mdat ' + me,
                            });
                          }
                          var ye = new DataView(pe.buffer);
                          ye.setUint32(0, me), pe.set(_.default.types.mdat, 4);
                          for (var Ee = 0; Ee < W; Ee++) {
                            for (var Te = H[Ee], be = Te.units, Se = 0, Ae = 0, Le = be.length; Ae < Le; Ae++) {
                              var De = be[Ae],
                                Re = De.data,
                                ke = De.data.byteLength;
                              ye.setUint32(X, ke), (X += 4), pe.set(Re, X), (X += ke), (Se += 4 + ke);
                            }
                            if (Ee < W - 1) w = H[Ee + 1].dts - Te.dts;
                            else {
                              var Ie = this.config,
                                Ce = Te.dts - H[Ee > 0 ? Ee - 1 : Ee].dts;
                              if (Ie.stretchShortVideoTrack && null !== this.nextAudioPts) {
                                var Oe = Math.floor(Ie.maxBufferHole * j),
                                  we = (O ? q + O * j : this.nextAudioPts) - Te.pts;
                                we > Oe
                                  ? ((w = we - Ce) < 0 && (w = Ce),
                                    F.logger.log(
                                      '[mp4-remuxer]: It is approximately ' +
                                        we / 90 +
                                        ' ms to the next segment; using duration ' +
                                        w / 90 +
                                        ' ms for the last video frame.'
                                    ))
                                  : (w = Ce);
                              } else w = Ce;
                            }
                            var _e = Math.round(Te.pts - Te.dts);
                            V.push(new K(Te.key, w, Se, _e));
                          }
                          if (V.length && B && B < 70) {
                            var xe = V[0].flags;
                            (xe.dependsOn = 2), (xe.isNonSync = 0);
                          }
                          console.assert(void 0 !== w, 'mp4SampleDuration must be computed'),
                            (this.nextAvcDts = z = U + w),
                            (this.isVideoContiguous = !0);
                          var Pe = {
                            data1: _.default.moof(R.sequenceNumber++, M, c({}, R, { samples: V })),
                            data2: pe,
                            startPTS: q / j,
                            endPTS: (Z + w) / j,
                            startDTS: M / j,
                            endDTS: z / j,
                            type: 'video',
                            hasAudio: !1,
                            hasVideo: !0,
                            nb: V.length,
                            dropped: R.dropped,
                          };
                          return (
                            (R.samples = []),
                            (R.dropped = 0),
                            console.assert(pe.length, 'MDAT length must not be zero'),
                            Pe
                          );
                        }),
                        (R.remuxAudio = function e(R, I, C, O, M) {
                          var N = R.inputTimeScale,
                            B = N / (R.samplerate ? R.samplerate : N),
                            U = R.isAAC ? 1024 : 1152,
                            G = U * B,
                            j = this._initPTS,
                            H = !R.isAAC && this.typeSupported.mpeg,
                            V = [],
                            W = R.samples,
                            Y = H ? 0 : 8,
                            z = this.nextAudioPts || -1,
                            X = I * N;
                          if (
                            ((this.isAudioContiguous = C =
                              C ||
                              (W.length &&
                                z > 0 &&
                                ((O && Math.abs(X - z) < 9e3) || Math.abs(E(W[0].pts - j, X) - z) < 20 * G))),
                            W.forEach(function (R) {
                              R.pts = E(R.pts - j, X);
                            }),
                            !C || z < 0)
                          ) {
                            if (
                              !(W = W.filter(function (R) {
                                return R.pts >= 0;
                              })).length
                            )
                              return;
                            z = 0 === M ? 0 : O ? Math.max(0, X) : W[0].pts;
                          }
                          if (R.isAAC)
                            for (
                              var q = void 0 !== M, Z = this.config.maxAudioFramesDrift, Q = 0, J = z;
                              Q < W.length;
                              Q++
                            ) {
                              var $ = W[Q],
                                ee = $.pts,
                                te = ee - J,
                                re = Math.abs((1e3 * te) / N);
                              if (te <= -Z * G && q)
                                0 === Q &&
                                  (F.logger.warn(
                                    'Audio frame @ ' +
                                      (ee / N).toFixed(3) +
                                      's overlaps nextAudioPts by ' +
                                      Math.round((1e3 * te) / N) +
                                      ' ms.'
                                  ),
                                  (this.nextAudioPts = z = J = ee));
                              else if (te >= Z * G && re < 1e4 && q) {
                                var ie = Math.round(te / G);
                                (J = ee - ie * G) < 0 && (ie--, (J += G)),
                                  0 === Q && (this.nextAudioPts = z = J),
                                  F.logger.warn(
                                    '[mp4-remuxer]: Injecting ' +
                                      ie +
                                      ' audio frame @ ' +
                                      (J / N).toFixed(3) +
                                      's due to ' +
                                      Math.round((1e3 * te) / N) +
                                      ' ms gap.'
                                  );
                                for (var ne = 0; ne < ie; ne++) {
                                  var se = Math.max(J, 0),
                                    ae = w.default.getSilentFrame(R.manifestCodec || R.codec, R.channelCount);
                                  ae ||
                                    (F.logger.log(
                                      '[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead.'
                                    ),
                                    (ae = $.unit.subarray())),
                                    W.splice(Q, 0, { unit: ae, pts: se }),
                                    (J += G),
                                    Q++;
                                }
                              }
                              ($.pts = J), (J += G);
                            }
                          for (var oe, le = null, ue = null, ce = 0, de = W.length; de--; ) ce += W[de].unit.byteLength;
                          for (var he = 0, fe = W.length; he < fe; he++) {
                            var ge = W[he],
                              ve = ge.unit,
                              pe = ge.pts;
                            if (null !== ue) {
                              V[he - 1].duration = Math.round((pe - ue) / B);
                            } else {
                              if ((C && R.isAAC && (pe = z), (le = pe), !(ce > 0))) return;
                              ce += Y;
                              try {
                                oe = new Uint8Array(ce);
                              } catch (e) {
                                return void this.observer.emit(x.Events.ERROR, x.Events.ERROR, {
                                  type: P.ErrorTypes.MUX_ERROR,
                                  details: P.ErrorDetails.REMUX_ALLOC_ERROR,
                                  fatal: !1,
                                  bytes: ce,
                                  reason: 'fail allocating audio mdat ' + ce,
                                });
                              }
                              H || (new DataView(oe.buffer).setUint32(0, ce), oe.set(_.default.types.mdat, 4));
                            }
                            oe.set(ve, Y);
                            var me = ve.byteLength;
                            (Y += me), V.push(new K(!0, U, me, 0)), (ue = pe);
                          }
                          var ye = V.length;
                          if (ye) {
                            var Ee = V[V.length - 1];
                            this.nextAudioPts = z = ue + B * Ee.duration;
                            var Te = H
                              ? new Uint8Array(0)
                              : _.default.moof(R.sequenceNumber++, le / B, c({}, R, { samples: V }));
                            R.samples = [];
                            var be = le / N,
                              Se = z / N,
                              Ae = {
                                data1: Te,
                                data2: oe,
                                startPTS: be,
                                endPTS: Se,
                                startDTS: be,
                                endDTS: Se,
                                type: 'audio',
                                hasAudio: !0,
                                hasVideo: !1,
                                nb: ye,
                              };
                            return (
                              (this.isAudioContiguous = !0),
                              console.assert(oe.length, 'MDAT length must not be zero'),
                              Ae
                            );
                          }
                        }),
                        (R.remuxEmptyAudio = function e(R, I, C, O) {
                          var _ = R.inputTimeScale,
                            x = _ / (R.samplerate ? R.samplerate : _),
                            P = this.nextAudioPts,
                            M = (null !== P ? P : O.startDTS * _) + this._initDTS,
                            N = O.endDTS * _ + this._initDTS,
                            B = 1024 * x,
                            U = Math.ceil((N - M) / B),
                            G = w.default.getSilentFrame(R.manifestCodec || R.codec, R.channelCount);
                          if ((F.logger.warn('[mp4-remuxer]: remux empty Audio'), G)) {
                            for (var j = [], K = 0; K < U; K++) {
                              var H = M + K * B;
                              j.push({ unit: G, pts: H, dts: H });
                            }
                            return (R.samples = j), this.remuxAudio(R, I, C, !1);
                          }
                          F.logger.trace(
                            '[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec'
                          );
                        }),
                        (R.remuxID3 = function e(R, I) {
                          var C = R.samples.length;
                          if (C) {
                            for (var O = R.inputTimeScale, w = this._initPTS, _ = this._initDTS, x = 0; x < C; x++) {
                              var P = R.samples[x];
                              (P.pts = E(P.pts - w, I * O) / O), (P.dts = E(P.dts - _, I * O) / O);
                            }
                            var F = R.samples;
                            return (R.samples = []), { samples: F };
                          }
                        }),
                        (R.remuxText = function e(R, I) {
                          var C = R.samples.length;
                          if (C) {
                            for (var O = R.inputTimeScale, w = this._initPTS, _ = 0; _ < C; _++) {
                              var x = R.samples[_];
                              x.pts = E(x.pts - w, I * O) / O;
                            }
                            R.samples.sort(function (R, I) {
                              return R.pts - I.pts;
                            });
                            var P = R.samples;
                            return (R.samples = []), { samples: P };
                          }
                        }),
                        e
                      );
                    })();
                  function E(R, I) {
                    var C;
                    if (null === I) return R;
                    for (C = I < R ? -8589934592 : 8589934592; Math.abs(R - I) > 4294967296; ) R += C;
                    return R;
                  }
                  var K = function e(R, I, C, O) {
                      (this.size = void 0),
                        (this.duration = void 0),
                        (this.cts = void 0),
                        (this.flags = void 0),
                        (this.duration = I),
                        (this.size = C),
                        (this.cts = O),
                        (this.flags = new H(R));
                    },
                    H = function e(R) {
                      (this.isLeading = 0),
                        (this.isDependedOn = 0),
                        (this.hasRedundancy = 0),
                        (this.degradPrio = 0),
                        (this.dependsOn = 1),
                        (this.isNonSync = 1),
                        (this.dependsOn = R ? 2 : 1),
                        (this.isNonSync = R ? 0 : 1);
                    };
                },
                './src/remux/passthrough-remuxer.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/utils/mp4-tools.ts'),
                    _ = C('./src/loader/fragment.ts'),
                    x = C('./src/utils/logger.ts'),
                    P = (function () {
                      function e() {
                        (this.emitInitSegment = !1),
                          (this.audioCodec = void 0),
                          (this.videoCodec = void 0),
                          (this.initData = void 0),
                          (this.initPTS = void 0),
                          (this.initTracks = void 0),
                          (this.lastEndDTS = null);
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {}),
                        (R.resetTimeStamp = function e(R) {
                          (this.initPTS = R), (this.lastEndDTS = null);
                        }),
                        (R.resetNextTimestamp = function e() {
                          this.lastEndDTS = null;
                        }),
                        (R.resetInitSegment = function e(R, I, C) {
                          (this.audioCodec = I),
                            (this.videoCodec = C),
                            this.generateInitSegment(R),
                            (this.emitInitSegment = !0);
                        }),
                        (R.generateInitSegment = function e(R) {
                          var I = this.audioCodec,
                            C = this.videoCodec;
                          if (!R || !R.byteLength) return (this.initTracks = void 0), void (this.initData = void 0);
                          var O = (this.initData = Object(w.parseInitSegment)(R));
                          I || (I = u(O.audio, _.ElementaryStreamTypes.AUDIO)),
                            C || (C = u(O.video, _.ElementaryStreamTypes.VIDEO));
                          var P = {};
                          O.audio && O.video
                            ? (P.audiovideo = {
                                container: 'video/mp4',
                                codec: I + ',' + C,
                                initSegment: R,
                                id: 'main',
                              })
                            : O.audio
                            ? (P.audio = { container: 'audio/mp4', codec: I, initSegment: R, id: 'audio' })
                            : O.video
                            ? (P.video = { container: 'video/mp4', codec: C, initSegment: R, id: 'main' })
                            : x.logger.warn(
                                '[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes.'
                              ),
                            (this.initTracks = P);
                        }),
                        (R.remux = function e(R, I, C, _, P) {
                          var M = this.initPTS,
                            N = this.lastEndDTS,
                            B = { audio: void 0, video: void 0, text: _, id3: C, initSegment: void 0 };
                          Object(O.isFiniteNumber)(N) || (N = this.lastEndDTS = P || 0);
                          var U = I.samples;
                          if (!U || !U.length) return B;
                          var G = { initPTS: void 0, timescale: 1 },
                            j = this.initData;
                          if (((j && j.length) || (this.generateInitSegment(U), (j = this.initData)), !j || !j.length))
                            return x.logger.warn('[passthrough-remuxer.ts]: Failed to generate initSegment.'), B;
                          this.emitInitSegment && ((G.tracks = this.initTracks), (this.emitInitSegment = !1)),
                            Object(O.isFiniteNumber)(M) || (this.initPTS = G.initPTS = M = F(j, U, N));
                          var K = Object(w.getDuration)(U, j),
                            H = N,
                            V = K + H;
                          Object(w.offsetStartDTS)(j, U, M),
                            K > 0
                              ? (this.lastEndDTS = V)
                              : (x.logger.warn('Duration parsed from mp4 should be greater than zero'),
                                this.resetNextTimestamp());
                          var W = !!j.audio,
                            Y = !!j.video,
                            z = '';
                          W && (z += 'audio'), Y && (z += 'video');
                          var X = {
                            data1: U,
                            startPTS: H,
                            startDTS: H,
                            endPTS: V,
                            endDTS: V,
                            type: z,
                            hasAudio: W,
                            hasVideo: Y,
                            nb: 1,
                            dropped: 0,
                          };
                          return (
                            (B.audio = 'audio' === X.type ? X : void 0),
                            (B.video = 'audio' !== X.type ? X : void 0),
                            (B.text = _),
                            (B.id3 = C),
                            (B.initSegment = G),
                            B
                          );
                        }),
                        e
                      );
                    })(),
                    F = function e(R, I, C) {
                      return Object(w.getStartDTS)(R, I) - C;
                    };
                  function u(R, I) {
                    var C = null == R ? void 0 : R.codec;
                    return C && C.length > 4
                      ? C
                      : 'hvc1' === C
                      ? 'hvc1.1.c.L120.90'
                      : 'av01' === C
                      ? 'av01.0.04M.08'
                      : 'avc1' === C || I === _.ElementaryStreamTypes.VIDEO
                      ? 'avc1.42e01e'
                      : 'mp4a.40.5';
                  }
                  I.default = P;
                },
                './src/task-loop.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return O;
                    });
                  var O = (function () {
                    function e() {
                      (this._boundTick = void 0),
                        (this._tickTimer = null),
                        (this._tickInterval = null),
                        (this._tickCallCount = 0),
                        (this._boundTick = this.tick.bind(this));
                    }
                    var R = e.prototype;
                    return (
                      (R.destroy = function e() {
                        this.onHandlerDestroying(), this.onHandlerDestroyed();
                      }),
                      (R.onHandlerDestroying = function e() {
                        this.clearNextTick(), this.clearInterval();
                      }),
                      (R.onHandlerDestroyed = function e() {}),
                      (R.hasInterval = function e() {
                        return !!this._tickInterval;
                      }),
                      (R.hasNextTick = function e() {
                        return !!this._tickTimer;
                      }),
                      (R.setInterval = function e(R) {
                        return !this._tickInterval && ((this._tickInterval = self.setInterval(this._boundTick, R)), !0);
                      }),
                      (R.clearInterval = function e() {
                        return (
                          !!this._tickInterval &&
                          (self.clearInterval(this._tickInterval), (this._tickInterval = null), !0)
                        );
                      }),
                      (R.clearNextTick = function e() {
                        return !!this._tickTimer && (self.clearTimeout(this._tickTimer), (this._tickTimer = null), !0);
                      }),
                      (R.tick = function e() {
                        this._tickCallCount++,
                          1 === this._tickCallCount &&
                            (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), (this._tickCallCount = 0));
                      }),
                      (R.tickImmediate = function e() {
                        this.clearNextTick(), (this._tickTimer = self.setTimeout(this._boundTick, 0));
                      }),
                      (R.doTick = function e() {}),
                      e
                    );
                  })();
                },
                './src/types/cmcd.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'CMCDVersion', function () {
                      return x;
                    }),
                    C.d(I, 'CMCDObjectType', function () {
                      return O;
                    }),
                    C.d(I, 'CMCDStreamingFormat', function () {
                      return w;
                    }),
                    C.d(I, 'CMCDStreamType', function () {
                      return _;
                    });
                  var O,
                    w,
                    _,
                    x = 1;
                  !(function (R) {
                    (R.MANIFEST = 'm'),
                      (R.AUDIO = 'a'),
                      (R.VIDEO = 'v'),
                      (R.MUXED = 'av'),
                      (R.INIT = 'i'),
                      (R.CAPTION = 'c'),
                      (R.TIMED_TEXT = 'tt'),
                      (R.KEY = 'k'),
                      (R.OTHER = 'o');
                  })(O || (O = {})),
                    (function (R) {
                      (R.DASH = 'd'), (R.HLS = 'h'), (R.SMOOTH = 's'), (R.OTHER = 'o');
                    })(w || (w = {})),
                    (function (R) {
                      (R.VOD = 'v'), (R.LIVE = 'l');
                    })(_ || (_ = {}));
                },
                './src/types/level.ts': function (R, I, C) {
                  function i(R, I) {
                    for (var C = 0; C < I.length; C++) {
                      var O = I[C];
                      (O.enumerable = O.enumerable || !1),
                        (O.configurable = !0),
                        'value' in O && (O.writable = !0),
                        Object.defineProperty(R, O.key, O);
                    }
                  }
                  var O;
                  function s(R, I) {
                    var C = R.canSkipUntil,
                      w = R.canSkipDateRanges,
                      _ = R.endSN;
                    return C && (void 0 !== I ? I - _ : 0) < C ? (w ? O.v2 : O.Yes) : O.No;
                  }
                  C.r(I),
                    C.d(I, 'HlsSkip', function () {
                      return O;
                    }),
                    C.d(I, 'getSkipValue', function () {
                      return s;
                    }),
                    C.d(I, 'HlsUrlParameters', function () {
                      return w;
                    }),
                    C.d(I, 'Level', function () {
                      return _;
                    }),
                    (function (R) {
                      (R.No = ''), (R.Yes = 'YES'), (R.v2 = 'v2');
                    })(O || (O = {}));
                  var w = (function () {
                      function e(R, I, C) {
                        (this.msn = void 0),
                          (this.part = void 0),
                          (this.skip = void 0),
                          (this.msn = R),
                          (this.part = I),
                          (this.skip = C);
                      }
                      return (
                        (e.prototype.addDirectives = function e(R) {
                          var I = new self.URL(R);
                          return (
                            void 0 !== this.msn && I.searchParams.set('_HLS_msn', this.msn.toString()),
                            void 0 !== this.part && I.searchParams.set('_HLS_part', this.part.toString()),
                            this.skip && I.searchParams.set('_HLS_skip', this.skip),
                            I.toString()
                          );
                        }),
                        e
                      );
                    })(),
                    _ = (function () {
                      function e(R) {
                        (this.attrs = void 0),
                          (this.audioCodec = void 0),
                          (this.bitrate = void 0),
                          (this.codecSet = void 0),
                          (this.height = void 0),
                          (this.id = void 0),
                          (this.name = void 0),
                          (this.videoCodec = void 0),
                          (this.width = void 0),
                          (this.unknownCodecs = void 0),
                          (this.audioGroupIds = void 0),
                          (this.details = void 0),
                          (this.fragmentError = 0),
                          (this.loadError = 0),
                          (this.loaded = void 0),
                          (this.realBitrate = 0),
                          (this.textGroupIds = void 0),
                          (this.url = void 0),
                          (this._urlId = 0),
                          (this.url = [R.url]),
                          (this.attrs = R.attrs),
                          (this.bitrate = R.bitrate),
                          R.details && (this.details = R.details),
                          (this.id = R.id || 0),
                          (this.name = R.name),
                          (this.width = R.width || 0),
                          (this.height = R.height || 0),
                          (this.audioCodec = R.audioCodec),
                          (this.videoCodec = R.videoCodec),
                          (this.unknownCodecs = R.unknownCodecs),
                          (this.codecSet = [R.videoCodec, R.audioCodec]
                            .filter(function (R) {
                              return R;
                            })
                            .join(',')
                            .replace(/\.[^.,]+/g, ''));
                      }
                      return (
                        (function a(R, I, C) {
                          return I && i(R.prototype, I), C && i(R, C), R;
                        })(e, [
                          {
                            key: 'maxBitrate',
                            get: function e() {
                              return Math.max(this.realBitrate, this.bitrate);
                            },
                          },
                          {
                            key: 'uri',
                            get: function e() {
                              return this.url[this._urlId] || '';
                            },
                          },
                          {
                            key: 'urlId',
                            get: function e() {
                              return this._urlId;
                            },
                            set: function e(R) {
                              var I = R % this.url.length;
                              this._urlId !== I && ((this.details = void 0), (this._urlId = I));
                            },
                          },
                        ]),
                        e
                      );
                    })();
                },
                './src/types/loader.ts': function (R, I, C) {
                  var O, w;
                  C.r(I),
                    C.d(I, 'PlaylistContextType', function () {
                      return O;
                    }),
                    C.d(I, 'PlaylistLevelType', function () {
                      return w;
                    }),
                    (function (R) {
                      (R.MANIFEST = 'manifest'),
                        (R.LEVEL = 'level'),
                        (R.AUDIO_TRACK = 'audioTrack'),
                        (R.SUBTITLE_TRACK = 'subtitleTrack');
                    })(O || (O = {})),
                    (function (R) {
                      (R.MAIN = 'main'), (R.AUDIO = 'audio'), (R.SUBTITLE = 'subtitle');
                    })(w || (w = {}));
                },
                './src/types/transmuxer.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'ChunkMetadata', function () {
                      return O;
                    });
                  var O = function e(R, I, C, O, w, _) {
                    void 0 === O && (O = 0),
                      void 0 === w && (w = -1),
                      void 0 === _ && (_ = !1),
                      (this.level = void 0),
                      (this.sn = void 0),
                      (this.part = void 0),
                      (this.id = void 0),
                      (this.size = void 0),
                      (this.partial = void 0),
                      (this.transmuxing = { start: 0, executeStart: 0, executeEnd: 0, end: 0 }),
                      (this.buffering = {
                        audio: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
                        video: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
                        audiovideo: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
                      }),
                      (this.level = R),
                      (this.sn = I),
                      (this.id = C),
                      (this.size = O),
                      (this.part = w),
                      (this.partial = _);
                  };
                },
                './src/utils/attr-list.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'AttrList', function () {
                      return _;
                    });
                  var O = /^(\d+)x(\d+)$/,
                    w = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                    _ = (function () {
                      function e(R) {
                        for (var I in ('string' == typeof R && (R = e.parseAttrList(R)), R))
                          R.hasOwnProperty(I) && (this[I] = R[I]);
                      }
                      var R = e.prototype;
                      return (
                        (R.decimalInteger = function e(R) {
                          var I = parseInt(this[R], 10);
                          return I > Number.MAX_SAFE_INTEGER ? 1 / 0 : I;
                        }),
                        (R.hexadecimalInteger = function e(R) {
                          if (this[R]) {
                            var I = (this[R] || '0x').slice(2);
                            I = (1 & I.length ? '0' : '') + I;
                            for (var C = new Uint8Array(I.length / 2), O = 0; O < I.length / 2; O++)
                              C[O] = parseInt(I.slice(2 * O, 2 * O + 2), 16);
                            return C;
                          }
                          return null;
                        }),
                        (R.hexadecimalIntegerAsNumber = function e(R) {
                          var I = parseInt(this[R], 16);
                          return I > Number.MAX_SAFE_INTEGER ? 1 / 0 : I;
                        }),
                        (R.decimalFloatingPoint = function e(R) {
                          return parseFloat(this[R]);
                        }),
                        (R.optionalFloat = function e(R, I) {
                          var C = this[R];
                          return C ? parseFloat(C) : I;
                        }),
                        (R.enumeratedString = function e(R) {
                          return this[R];
                        }),
                        (R.bool = function e(R) {
                          return 'YES' === this[R];
                        }),
                        (R.decimalResolution = function e(R) {
                          var I = O.exec(this[R]);
                          if (null !== I) return { width: parseInt(I[1], 10), height: parseInt(I[2], 10) };
                        }),
                        (e.parseAttrList = function e(R) {
                          var I,
                            C = {};
                          for (w.lastIndex = 0; null !== (I = w.exec(R)); ) {
                            var O = I[2];
                            0 === O.indexOf('"') && O.lastIndexOf('"') === O.length - 1 && (O = O.slice(1, -1)),
                              (C[I[1]] = O);
                          }
                          return C;
                        }),
                        e
                      );
                    })();
                },
                './src/utils/binary-search.ts': function (R, I, C) {
                  C.r(I);
                  I.default = {
                    search: function e(R, I) {
                      for (var C = 0, O = R.length - 1, w = null, _ = null; C <= O; ) {
                        var x = I((_ = R[(w = ((C + O) / 2) | 0)]));
                        if (x > 0) C = w + 1;
                        else {
                          if (!(x < 0)) return _;
                          O = w - 1;
                        }
                      }
                      return null;
                    },
                  };
                },
                './src/utils/buffer-helper.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'BufferHelper', function () {
                      return _;
                    });
                  var O = C('./src/utils/logger.ts'),
                    w = {
                      length: 0,
                      start: function e() {
                        return 0;
                      },
                      end: function e() {
                        return 0;
                      },
                    },
                    _ = (function () {
                      function e() {}
                      return (
                        (e.isBuffered = function t(R, I) {
                          try {
                            if (R)
                              for (var C = e.getBuffered(R), O = 0; O < C.length; O++)
                                if (I >= C.start(O) && I <= C.end(O)) return !0;
                          } catch (R) {}
                          return !1;
                        }),
                        (e.bufferInfo = function t(R, I, C) {
                          try {
                            if (R) {
                              var O,
                                w = e.getBuffered(R),
                                _ = [];
                              for (O = 0; O < w.length; O++) _.push({ start: w.start(O), end: w.end(O) });
                              return this.bufferedInfo(_, I, C);
                            }
                          } catch (R) {}
                          return { len: 0, start: I, end: I, nextStart: void 0 };
                        }),
                        (e.bufferedInfo = function e(R, I, C) {
                          (I = Math.max(0, I)),
                            R.sort(function (R, I) {
                              var C = R.start - I.start;
                              return C || I.end - R.end;
                            });
                          var O = [];
                          if (C)
                            for (var w = 0; w < R.length; w++) {
                              var _ = O.length;
                              if (_) {
                                var x = O[_ - 1].end;
                                R[w].start - x < C ? R[w].end > x && (O[_ - 1].end = R[w].end) : O.push(R[w]);
                              } else O.push(R[w]);
                            }
                          else O = R;
                          for (var P, F = 0, M = I, N = I, B = 0; B < O.length; B++) {
                            var U = O[B].start,
                              G = O[B].end;
                            if (I + C >= U && I < G) (M = U), (F = (N = G) - I);
                            else if (I + C < U) {
                              P = U;
                              break;
                            }
                          }
                          return { len: F, start: M || 0, end: N || 0, nextStart: P };
                        }),
                        (e.getBuffered = function e(R) {
                          try {
                            return R.buffered;
                          } catch (e) {
                            return O.logger.log('failed to get media.buffered', e), w;
                          }
                        }),
                        e
                      );
                    })();
                },
                './src/utils/cea-608-parser.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'Row', function () {
                      return W;
                    }),
                    C.d(I, 'CaptionScreen', function () {
                      return Y;
                    });
                  var O,
                    w = C('./src/utils/logger.ts'),
                    _ = {
                      42: 225,
                      92: 233,
                      94: 237,
                      95: 243,
                      96: 250,
                      123: 231,
                      124: 247,
                      125: 209,
                      126: 241,
                      127: 9608,
                      128: 174,
                      129: 176,
                      130: 189,
                      131: 191,
                      132: 8482,
                      133: 162,
                      134: 163,
                      135: 9834,
                      136: 224,
                      137: 32,
                      138: 232,
                      139: 226,
                      140: 234,
                      141: 238,
                      142: 244,
                      143: 251,
                      144: 193,
                      145: 201,
                      146: 211,
                      147: 218,
                      148: 220,
                      149: 252,
                      150: 8216,
                      151: 161,
                      152: 42,
                      153: 8217,
                      154: 9473,
                      155: 169,
                      156: 8480,
                      157: 8226,
                      158: 8220,
                      159: 8221,
                      160: 192,
                      161: 194,
                      162: 199,
                      163: 200,
                      164: 202,
                      165: 203,
                      166: 235,
                      167: 206,
                      168: 207,
                      169: 239,
                      170: 212,
                      171: 217,
                      172: 249,
                      173: 219,
                      174: 171,
                      175: 187,
                      176: 195,
                      177: 227,
                      178: 205,
                      179: 204,
                      180: 236,
                      181: 210,
                      182: 242,
                      183: 213,
                      184: 245,
                      185: 123,
                      186: 125,
                      187: 92,
                      188: 94,
                      189: 95,
                      190: 124,
                      191: 8764,
                      192: 196,
                      193: 228,
                      194: 214,
                      195: 246,
                      196: 223,
                      197: 165,
                      198: 164,
                      199: 9475,
                      200: 197,
                      201: 229,
                      202: 216,
                      203: 248,
                      204: 9487,
                      205: 9491,
                      206: 9495,
                      207: 9499,
                    },
                    x = function e(R) {
                      var I = R;
                      return _.hasOwnProperty(R) && (I = _[R]), String.fromCharCode(I);
                    },
                    P = 15,
                    F = 100,
                    M = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
                    N = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
                    B = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
                    U = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
                    G = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'black', 'transparent'];
                  !(function (R) {
                    (R[(R.ERROR = 0)] = 'ERROR'),
                      (R[(R.TEXT = 1)] = 'TEXT'),
                      (R[(R.WARNING = 2)] = 'WARNING'),
                      (R[(R.INFO = 2)] = 'INFO'),
                      (R[(R.DEBUG = 3)] = 'DEBUG'),
                      (R[(R.DATA = 3)] = 'DATA');
                  })(O || (O = {}));
                  var j = (function () {
                      function e() {
                        (this.time = null), (this.verboseLevel = O.ERROR);
                      }
                      return (
                        (e.prototype.log = function e(R, I) {
                          this.verboseLevel >= R && w.logger.log(this.time + ' [' + R + '] ' + I);
                        }),
                        e
                      );
                    })(),
                    K = function e(R) {
                      for (var I = [], C = 0; C < R.length; C++) I.push(R[C].toString(16));
                      return I;
                    },
                    H = (function () {
                      function e(R, I, C, O, w) {
                        (this.foreground = void 0),
                          (this.underline = void 0),
                          (this.italics = void 0),
                          (this.background = void 0),
                          (this.flash = void 0),
                          (this.foreground = R || 'white'),
                          (this.underline = I || !1),
                          (this.italics = C || !1),
                          (this.background = O || 'black'),
                          (this.flash = w || !1);
                      }
                      var R = e.prototype;
                      return (
                        (R.reset = function e() {
                          (this.foreground = 'white'),
                            (this.underline = !1),
                            (this.italics = !1),
                            (this.background = 'black'),
                            (this.flash = !1);
                        }),
                        (R.setStyles = function e(R) {
                          for (
                            var I = ['foreground', 'underline', 'italics', 'background', 'flash'], C = 0;
                            C < I.length;
                            C++
                          ) {
                            var O = I[C];
                            R.hasOwnProperty(O) && (this[O] = R[O]);
                          }
                        }),
                        (R.isDefault = function e() {
                          return (
                            'white' === this.foreground &&
                            !this.underline &&
                            !this.italics &&
                            'black' === this.background &&
                            !this.flash
                          );
                        }),
                        (R.equals = function e(R) {
                          return (
                            this.foreground === R.foreground &&
                            this.underline === R.underline &&
                            this.italics === R.italics &&
                            this.background === R.background &&
                            this.flash === R.flash
                          );
                        }),
                        (R.copy = function e(R) {
                          (this.foreground = R.foreground),
                            (this.underline = R.underline),
                            (this.italics = R.italics),
                            (this.background = R.background),
                            (this.flash = R.flash);
                        }),
                        (R.toString = function e() {
                          return (
                            'color=' +
                            this.foreground +
                            ', underline=' +
                            this.underline +
                            ', italics=' +
                            this.italics +
                            ', background=' +
                            this.background +
                            ', flash=' +
                            this.flash
                          );
                        }),
                        e
                      );
                    })(),
                    V = (function () {
                      function e(R, I, C, O, w, _) {
                        (this.uchar = void 0),
                          (this.penState = void 0),
                          (this.uchar = R || ' '),
                          (this.penState = new H(I, C, O, w, _));
                      }
                      var R = e.prototype;
                      return (
                        (R.reset = function e() {
                          (this.uchar = ' '), this.penState.reset();
                        }),
                        (R.setChar = function e(R, I) {
                          (this.uchar = R), this.penState.copy(I);
                        }),
                        (R.setPenState = function e(R) {
                          this.penState.copy(R);
                        }),
                        (R.equals = function e(R) {
                          return this.uchar === R.uchar && this.penState.equals(R.penState);
                        }),
                        (R.copy = function e(R) {
                          (this.uchar = R.uchar), this.penState.copy(R.penState);
                        }),
                        (R.isEmpty = function e() {
                          return ' ' === this.uchar && this.penState.isDefault();
                        }),
                        e
                      );
                    })(),
                    W = (function () {
                      function e(R) {
                        (this.chars = void 0),
                          (this.pos = void 0),
                          (this.currPenState = void 0),
                          (this.cueStartTime = void 0),
                          (this.logger = void 0),
                          (this.chars = []);
                        for (var I = 0; I < F; I++) this.chars.push(new V());
                        (this.logger = R), (this.pos = 0), (this.currPenState = new H());
                      }
                      var R = e.prototype;
                      return (
                        (R.equals = function e(R) {
                          for (var I = !0, C = 0; C < F; C++)
                            if (!this.chars[C].equals(R.chars[C])) {
                              I = !1;
                              break;
                            }
                          return I;
                        }),
                        (R.copy = function e(R) {
                          for (var I = 0; I < F; I++) this.chars[I].copy(R.chars[I]);
                        }),
                        (R.isEmpty = function e() {
                          for (var R = !0, I = 0; I < F; I++)
                            if (!this.chars[I].isEmpty()) {
                              R = !1;
                              break;
                            }
                          return R;
                        }),
                        (R.setCursor = function e(R) {
                          this.pos !== R && (this.pos = R),
                            this.pos < 0
                              ? (this.logger.log(O.DEBUG, 'Negative cursor position ' + this.pos), (this.pos = 0))
                              : this.pos > F &&
                                (this.logger.log(O.DEBUG, 'Too large cursor position ' + this.pos), (this.pos = F));
                        }),
                        (R.moveCursor = function e(R) {
                          var I = this.pos + R;
                          if (R > 1)
                            for (var C = this.pos + 1; C < I + 1; C++) this.chars[C].setPenState(this.currPenState);
                          this.setCursor(I);
                        }),
                        (R.backSpace = function e() {
                          this.moveCursor(-1), this.chars[this.pos].setChar(' ', this.currPenState);
                        }),
                        (R.insertChar = function e(R) {
                          R >= 144 && this.backSpace();
                          var I = x(R);
                          this.pos >= F
                            ? this.logger.log(
                                O.ERROR,
                                'Cannot insert ' +
                                  R.toString(16) +
                                  ' (' +
                                  I +
                                  ') at position ' +
                                  this.pos +
                                  '. Skipping it!'
                              )
                            : (this.chars[this.pos].setChar(I, this.currPenState), this.moveCursor(1));
                        }),
                        (R.clearFromPos = function e(R) {
                          var I;
                          for (I = R; I < F; I++) this.chars[I].reset();
                        }),
                        (R.clear = function e() {
                          this.clearFromPos(0), (this.pos = 0), this.currPenState.reset();
                        }),
                        (R.clearToEndOfRow = function e() {
                          this.clearFromPos(this.pos);
                        }),
                        (R.getTextString = function e() {
                          for (var R = [], I = !0, C = 0; C < F; C++) {
                            var O = this.chars[C].uchar;
                            ' ' !== O && (I = !1), R.push(O);
                          }
                          return I ? '' : R.join('');
                        }),
                        (R.setPenStyles = function e(R) {
                          this.currPenState.setStyles(R), this.chars[this.pos].setPenState(this.currPenState);
                        }),
                        e
                      );
                    })(),
                    Y = (function () {
                      function e(R) {
                        (this.rows = void 0),
                          (this.currRow = void 0),
                          (this.nrRollUpRows = void 0),
                          (this.lastOutputScreen = void 0),
                          (this.logger = void 0),
                          (this.rows = []);
                        for (var I = 0; I < P; I++) this.rows.push(new W(R));
                        (this.logger = R),
                          (this.currRow = 14),
                          (this.nrRollUpRows = null),
                          (this.lastOutputScreen = null),
                          this.reset();
                      }
                      var R = e.prototype;
                      return (
                        (R.reset = function e() {
                          for (var R = 0; R < P; R++) this.rows[R].clear();
                          this.currRow = 14;
                        }),
                        (R.equals = function e(R) {
                          for (var I = !0, C = 0; C < P; C++)
                            if (!this.rows[C].equals(R.rows[C])) {
                              I = !1;
                              break;
                            }
                          return I;
                        }),
                        (R.copy = function e(R) {
                          for (var I = 0; I < P; I++) this.rows[I].copy(R.rows[I]);
                        }),
                        (R.isEmpty = function e() {
                          for (var R = !0, I = 0; I < P; I++)
                            if (!this.rows[I].isEmpty()) {
                              R = !1;
                              break;
                            }
                          return R;
                        }),
                        (R.backSpace = function e() {
                          this.rows[this.currRow].backSpace();
                        }),
                        (R.clearToEndOfRow = function e() {
                          this.rows[this.currRow].clearToEndOfRow();
                        }),
                        (R.insertChar = function e(R) {
                          this.rows[this.currRow].insertChar(R);
                        }),
                        (R.setPen = function e(R) {
                          this.rows[this.currRow].setPenStyles(R);
                        }),
                        (R.moveCursor = function e(R) {
                          this.rows[this.currRow].moveCursor(R);
                        }),
                        (R.setCursor = function e(R) {
                          this.logger.log(O.INFO, 'setCursor: ' + R), this.rows[this.currRow].setCursor(R);
                        }),
                        (R.setPAC = function e(R) {
                          this.logger.log(O.INFO, 'pacData = ' + JSON.stringify(R));
                          var I = R.row - 1;
                          if (
                            (this.nrRollUpRows && I < this.nrRollUpRows - 1 && (I = this.nrRollUpRows - 1),
                            this.nrRollUpRows && this.currRow !== I)
                          ) {
                            for (var C = 0; C < P; C++) this.rows[C].clear();
                            var w = this.currRow + 1 - this.nrRollUpRows,
                              _ = this.lastOutputScreen;
                            if (_) {
                              var x = _.rows[w].cueStartTime,
                                F = this.logger.time;
                              if (x && null !== F && x < F)
                                for (var M = 0; M < this.nrRollUpRows; M++)
                                  this.rows[I - this.nrRollUpRows + M + 1].copy(_.rows[w + M]);
                            }
                          }
                          this.currRow = I;
                          var N = this.rows[this.currRow];
                          if (null !== R.indent) {
                            var B = R.indent,
                              U = Math.max(B - 1, 0);
                            N.setCursor(R.indent), (R.color = N.chars[U].penState.foreground);
                          }
                          var G = {
                            foreground: R.color,
                            underline: R.underline,
                            italics: R.italics,
                            background: 'black',
                            flash: !1,
                          };
                          this.setPen(G);
                        }),
                        (R.setBkgData = function e(R) {
                          this.logger.log(O.INFO, 'bkgData = ' + JSON.stringify(R)),
                            this.backSpace(),
                            this.setPen(R),
                            this.insertChar(32);
                        }),
                        (R.setRollUpRows = function e(R) {
                          this.nrRollUpRows = R;
                        }),
                        (R.rollUp = function e() {
                          if (null !== this.nrRollUpRows) {
                            this.logger.log(O.TEXT, this.getDisplayText());
                            var R = this.currRow + 1 - this.nrRollUpRows,
                              I = this.rows.splice(R, 1)[0];
                            I.clear(), this.rows.splice(this.currRow, 0, I), this.logger.log(O.INFO, 'Rolling up');
                          } else this.logger.log(O.DEBUG, 'roll_up but nrRollUpRows not set yet');
                        }),
                        (R.getDisplayText = function e(R) {
                          R = R || !1;
                          for (var I = [], C = '', O = -1, w = 0; w < P; w++) {
                            var _ = this.rows[w].getTextString();
                            _ && ((O = w + 1), R ? I.push('Row ' + O + ": '" + _ + "'") : I.push(_.trim()));
                          }
                          return I.length > 0 && (C = R ? '[' + I.join(' | ') + ']' : I.join('\n')), C;
                        }),
                        (R.getTextAndFormat = function e() {
                          return this.rows;
                        }),
                        e
                      );
                    })(),
                    z = (function () {
                      function e(R, I, C) {
                        (this.chNr = void 0),
                          (this.outputFilter = void 0),
                          (this.mode = void 0),
                          (this.verbose = void 0),
                          (this.displayedMemory = void 0),
                          (this.nonDisplayedMemory = void 0),
                          (this.lastOutputScreen = void 0),
                          (this.currRollUpRow = void 0),
                          (this.writeScreen = void 0),
                          (this.cueStartTime = void 0),
                          (this.logger = void 0),
                          (this.chNr = R),
                          (this.outputFilter = I),
                          (this.mode = null),
                          (this.verbose = 0),
                          (this.displayedMemory = new Y(C)),
                          (this.nonDisplayedMemory = new Y(C)),
                          (this.lastOutputScreen = new Y(C)),
                          (this.currRollUpRow = this.displayedMemory.rows[14]),
                          (this.writeScreen = this.displayedMemory),
                          (this.mode = null),
                          (this.cueStartTime = null),
                          (this.logger = C);
                      }
                      var R = e.prototype;
                      return (
                        (R.reset = function e() {
                          (this.mode = null),
                            this.displayedMemory.reset(),
                            this.nonDisplayedMemory.reset(),
                            this.lastOutputScreen.reset(),
                            this.outputFilter.reset(),
                            (this.currRollUpRow = this.displayedMemory.rows[14]),
                            (this.writeScreen = this.displayedMemory),
                            (this.mode = null),
                            (this.cueStartTime = null);
                        }),
                        (R.getHandler = function e() {
                          return this.outputFilter;
                        }),
                        (R.setHandler = function e(R) {
                          this.outputFilter = R;
                        }),
                        (R.setPAC = function e(R) {
                          this.writeScreen.setPAC(R);
                        }),
                        (R.setBkgData = function e(R) {
                          this.writeScreen.setBkgData(R);
                        }),
                        (R.setMode = function e(R) {
                          R !== this.mode &&
                            ((this.mode = R),
                            this.logger.log(O.INFO, 'MODE=' + R),
                            'MODE_POP-ON' === this.mode
                              ? (this.writeScreen = this.nonDisplayedMemory)
                              : ((this.writeScreen = this.displayedMemory), this.writeScreen.reset()),
                            'MODE_ROLL-UP' !== this.mode &&
                              ((this.displayedMemory.nrRollUpRows = null),
                              (this.nonDisplayedMemory.nrRollUpRows = null)),
                            (this.mode = R));
                        }),
                        (R.insertChars = function e(R) {
                          for (var I = 0; I < R.length; I++) this.writeScreen.insertChar(R[I]);
                          var C = this.writeScreen === this.displayedMemory ? 'DISP' : 'NON_DISP';
                          this.logger.log(O.INFO, C + ': ' + this.writeScreen.getDisplayText(!0)),
                            ('MODE_PAINT-ON' !== this.mode && 'MODE_ROLL-UP' !== this.mode) ||
                              (this.logger.log(O.TEXT, 'DISPLAYED: ' + this.displayedMemory.getDisplayText(!0)),
                              this.outputDataUpdate());
                        }),
                        (R.ccRCL = function e() {
                          this.logger.log(O.INFO, 'RCL - Resume Caption Loading'), this.setMode('MODE_POP-ON');
                        }),
                        (R.ccBS = function e() {
                          this.logger.log(O.INFO, 'BS - BackSpace'),
                            'MODE_TEXT' !== this.mode &&
                              (this.writeScreen.backSpace(),
                              this.writeScreen === this.displayedMemory && this.outputDataUpdate());
                        }),
                        (R.ccAOF = function e() {}),
                        (R.ccAON = function e() {}),
                        (R.ccDER = function e() {
                          this.logger.log(O.INFO, 'DER- Delete to End of Row'),
                            this.writeScreen.clearToEndOfRow(),
                            this.outputDataUpdate();
                        }),
                        (R.ccRU = function e(R) {
                          this.logger.log(O.INFO, 'RU(' + R + ') - Roll Up'),
                            (this.writeScreen = this.displayedMemory),
                            this.setMode('MODE_ROLL-UP'),
                            this.writeScreen.setRollUpRows(R);
                        }),
                        (R.ccFON = function e() {
                          this.logger.log(O.INFO, 'FON - Flash On'), this.writeScreen.setPen({ flash: !0 });
                        }),
                        (R.ccRDC = function e() {
                          this.logger.log(O.INFO, 'RDC - Resume Direct Captioning'), this.setMode('MODE_PAINT-ON');
                        }),
                        (R.ccTR = function e() {
                          this.logger.log(O.INFO, 'TR'), this.setMode('MODE_TEXT');
                        }),
                        (R.ccRTD = function e() {
                          this.logger.log(O.INFO, 'RTD'), this.setMode('MODE_TEXT');
                        }),
                        (R.ccEDM = function e() {
                          this.logger.log(O.INFO, 'EDM - Erase Displayed Memory'),
                            this.displayedMemory.reset(),
                            this.outputDataUpdate(!0);
                        }),
                        (R.ccCR = function e() {
                          this.logger.log(O.INFO, 'CR - Carriage Return'),
                            this.writeScreen.rollUp(),
                            this.outputDataUpdate(!0);
                        }),
                        (R.ccENM = function e() {
                          this.logger.log(O.INFO, 'ENM - Erase Non-displayed Memory'), this.nonDisplayedMemory.reset();
                        }),
                        (R.ccEOC = function e() {
                          if ((this.logger.log(O.INFO, 'EOC - End Of Caption'), 'MODE_POP-ON' === this.mode)) {
                            var R = this.displayedMemory;
                            (this.displayedMemory = this.nonDisplayedMemory),
                              (this.nonDisplayedMemory = R),
                              (this.writeScreen = this.nonDisplayedMemory),
                              this.logger.log(O.TEXT, 'DISP: ' + this.displayedMemory.getDisplayText());
                          }
                          this.outputDataUpdate(!0);
                        }),
                        (R.ccTO = function e(R) {
                          this.logger.log(O.INFO, 'TO(' + R + ') - Tab Offset'), this.writeScreen.moveCursor(R);
                        }),
                        (R.ccMIDROW = function e(R) {
                          var I = { flash: !1 };
                          if (((I.underline = R % 2 == 1), (I.italics = R >= 46), I.italics)) I.foreground = 'white';
                          else {
                            var C = Math.floor(R / 2) - 16;
                            I.foreground = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta'][C];
                          }
                          this.logger.log(O.INFO, 'MIDROW: ' + JSON.stringify(I)), this.writeScreen.setPen(I);
                        }),
                        (R.outputDataUpdate = function e(R) {
                          void 0 === R && (R = !1);
                          var I = this.logger.time;
                          null !== I &&
                            this.outputFilter &&
                            (null !== this.cueStartTime || this.displayedMemory.isEmpty()
                              ? this.displayedMemory.equals(this.lastOutputScreen) ||
                                (this.outputFilter.newCue(this.cueStartTime, I, this.lastOutputScreen),
                                R && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(),
                                (this.cueStartTime = this.displayedMemory.isEmpty() ? null : I))
                              : (this.cueStartTime = I),
                            this.lastOutputScreen.copy(this.displayedMemory));
                        }),
                        (R.cueSplitAtTime = function e(R) {
                          this.outputFilter &&
                            (this.displayedMemory.isEmpty() ||
                              (this.outputFilter.newCue &&
                                this.outputFilter.newCue(this.cueStartTime, R, this.displayedMemory),
                              (this.cueStartTime = R)));
                        }),
                        e
                      );
                    })(),
                    X = (function () {
                      function e(R, I, C) {
                        (this.channels = void 0),
                          (this.currentChannel = 0),
                          (this.cmdHistory = void 0),
                          (this.logger = void 0);
                        var O = new j();
                        (this.channels = [null, new z(R, I, O), new z(R + 1, C, O)]),
                          (this.cmdHistory = { a: null, b: null }),
                          (this.logger = O);
                      }
                      var R = e.prototype;
                      return (
                        (R.getHandler = function e(R) {
                          return this.channels[R].getHandler();
                        }),
                        (R.setHandler = function e(R, I) {
                          this.channels[R].setHandler(I);
                        }),
                        (R.addData = function e(R, I) {
                          var C,
                            w,
                            _,
                            x = !1;
                          this.logger.time = R;
                          for (var P = 0; P < I.length; P += 2)
                            if (((w = 127 & I[P]), (_ = 127 & I[P + 1]), 0 !== w || 0 !== _)) {
                              if (
                                (this.logger.log(O.DATA, '[' + K([I[P], I[P + 1]]) + '] -> (' + K([w, _]) + ')'),
                                (C = this.parseCmd(w, _)) || (C = this.parseMidrow(w, _)),
                                C || (C = this.parsePAC(w, _)),
                                C || (C = this.parseBackgroundAttributes(w, _)),
                                !C && (x = this.parseChars(w, _)))
                              ) {
                                var F = this.currentChannel;
                                if (F && F > 0) this.channels[F].insertChars(x);
                                else this.logger.log(O.WARNING, 'No channel found yet. TEXT-MODE?');
                              }
                              C ||
                                x ||
                                this.logger.log(
                                  O.WARNING,
                                  "Couldn't parse cleaned data " + K([w, _]) + ' orig: ' + K([I[P], I[P + 1]])
                                );
                            }
                        }),
                        (R.parseCmd = function e(R, I) {
                          var C = this.cmdHistory;
                          if (
                            !((20 === R || 28 === R || 21 === R || 29 === R) && I >= 32 && I <= 47) &&
                            !((23 === R || 31 === R) && I >= 33 && I <= 35)
                          )
                            return !1;
                          if (A(R, I, C))
                            return (
                              S(null, null, C),
                              this.logger.log(O.DEBUG, 'Repeated command (' + K([R, I]) + ') is dropped'),
                              !0
                            );
                          var w = 20 === R || 21 === R || 23 === R ? 1 : 2,
                            _ = this.channels[w];
                          return (
                            20 === R || 21 === R || 28 === R || 29 === R
                              ? 32 === I
                                ? _.ccRCL()
                                : 33 === I
                                ? _.ccBS()
                                : 34 === I
                                ? _.ccAOF()
                                : 35 === I
                                ? _.ccAON()
                                : 36 === I
                                ? _.ccDER()
                                : 37 === I
                                ? _.ccRU(2)
                                : 38 === I
                                ? _.ccRU(3)
                                : 39 === I
                                ? _.ccRU(4)
                                : 40 === I
                                ? _.ccFON()
                                : 41 === I
                                ? _.ccRDC()
                                : 42 === I
                                ? _.ccTR()
                                : 43 === I
                                ? _.ccRTD()
                                : 44 === I
                                ? _.ccEDM()
                                : 45 === I
                                ? _.ccCR()
                                : 46 === I
                                ? _.ccENM()
                                : 47 === I && _.ccEOC()
                              : _.ccTO(I - 32),
                            S(R, I, C),
                            (this.currentChannel = w),
                            !0
                          );
                        }),
                        (R.parseMidrow = function e(R, I) {
                          var C = 0;
                          if ((17 === R || 25 === R) && I >= 32 && I <= 47) {
                            if ((C = 17 === R ? 1 : 2) !== this.currentChannel)
                              return this.logger.log(O.ERROR, 'Mismatch channel in midrow parsing'), !1;
                            var w = this.channels[C];
                            return !!w && (w.ccMIDROW(I), this.logger.log(O.DEBUG, 'MIDROW (' + K([R, I]) + ')'), !0);
                          }
                          return !1;
                        }),
                        (R.parsePAC = function e(R, I) {
                          var C,
                            O = this.cmdHistory;
                          if (
                            !(((R >= 17 && R <= 23) || (R >= 25 && R <= 31)) && I >= 64 && I <= 127) &&
                            !((16 === R || 24 === R) && I >= 64 && I <= 95)
                          )
                            return !1;
                          if (A(R, I, O)) return S(null, null, O), !0;
                          var w = R <= 23 ? 1 : 2;
                          C = I >= 64 && I <= 95 ? (1 === w ? M[R] : B[R]) : 1 === w ? N[R] : U[R];
                          var _ = this.channels[w];
                          return !!_ && (_.setPAC(this.interpretPAC(C, I)), S(R, I, O), (this.currentChannel = w), !0);
                        }),
                        (R.interpretPAC = function e(R, I) {
                          var C,
                            O = { color: null, italics: !1, indent: null, underline: !1, row: R };
                          return (
                            (C = I > 95 ? I - 96 : I - 64),
                            (O.underline = 1 == (1 & C)),
                            C <= 13
                              ? (O.color = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta', 'white'][
                                  Math.floor(C / 2)
                                ])
                              : C <= 15
                              ? ((O.italics = !0), (O.color = 'white'))
                              : (O.indent = 4 * Math.floor((C - 16) / 2)),
                            O
                          );
                        }),
                        (R.parseChars = function e(R, I) {
                          var C,
                            w,
                            _ = null,
                            P = null;
                          (R >= 25 ? ((C = 2), (P = R - 8)) : ((C = 1), (P = R)), P >= 17 && P <= 19)
                            ? ((w = 17 === P ? I + 80 : 18 === P ? I + 112 : I + 144),
                              this.logger.log(O.INFO, "Special char '" + x(w) + "' in channel " + C),
                              (_ = [w]))
                            : R >= 32 && R <= 127 && (_ = 0 === I ? [R] : [R, I]);
                          if (_) {
                            var F = K(_);
                            this.logger.log(O.DEBUG, 'Char codes =  ' + F.join(',')), S(R, I, this.cmdHistory);
                          }
                          return _;
                        }),
                        (R.parseBackgroundAttributes = function e(R, I) {
                          var C;
                          if (
                            !((16 === R || 24 === R) && I >= 32 && I <= 47) &&
                            !((23 === R || 31 === R) && I >= 45 && I <= 47)
                          )
                            return !1;
                          var O = {};
                          16 === R || 24 === R
                            ? ((C = Math.floor((I - 32) / 2)),
                              (O.background = G[C]),
                              I % 2 == 1 && (O.background = O.background + '_semi'))
                            : 45 === I
                            ? (O.background = 'transparent')
                            : ((O.foreground = 'black'), 47 === I && (O.underline = !0));
                          var w = R <= 23 ? 1 : 2;
                          return this.channels[w].setBkgData(O), S(R, I, this.cmdHistory), !0;
                        }),
                        (R.reset = function e() {
                          for (var R = 0; R < Object.keys(this.channels).length; R++) {
                            var I = this.channels[R];
                            I && I.reset();
                          }
                          this.cmdHistory = { a: null, b: null };
                        }),
                        (R.cueSplitAtTime = function e(R) {
                          for (var I = 0; I < this.channels.length; I++) {
                            var C = this.channels[I];
                            C && C.cueSplitAtTime(R);
                          }
                        }),
                        e
                      );
                    })();
                  function S(R, I, C) {
                    (C.a = R), (C.b = I);
                  }
                  function A(R, I, C) {
                    return C.a === R && C.b === I;
                  }
                  I.default = X;
                },
                './src/utils/codecs.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'isCodecType', function () {
                      return a;
                    }),
                    C.d(I, 'isCodecSupportedInMp4', function () {
                      return n;
                    });
                  var O = {
                    audio: {
                      a3ds: !0,
                      'ac-3': !0,
                      'ac-4': !0,
                      alac: !0,
                      alaw: !0,
                      dra1: !0,
                      'dts+': !0,
                      'dts-': !0,
                      dtsc: !0,
                      dtse: !0,
                      dtsh: !0,
                      'ec-3': !0,
                      enca: !0,
                      g719: !0,
                      g726: !0,
                      m4ae: !0,
                      mha1: !0,
                      mha2: !0,
                      mhm1: !0,
                      mhm2: !0,
                      mlpa: !0,
                      mp4a: !0,
                      'raw ': !0,
                      Opus: !0,
                      samr: !0,
                      sawb: !0,
                      sawp: !0,
                      sevc: !0,
                      sqcp: !0,
                      ssmv: !0,
                      twos: !0,
                      ulaw: !0,
                    },
                    video: {
                      avc1: !0,
                      avc2: !0,
                      avc3: !0,
                      avc4: !0,
                      avcp: !0,
                      av01: !0,
                      drac: !0,
                      dvav: !0,
                      dvhe: !0,
                      encv: !0,
                      hev1: !0,
                      hvc1: !0,
                      mjp2: !0,
                      mp4v: !0,
                      mvc1: !0,
                      mvc2: !0,
                      mvc3: !0,
                      mvc4: !0,
                      resv: !0,
                      rv60: !0,
                      s263: !0,
                      svc1: !0,
                      svc2: !0,
                      'vc-1': !0,
                      vp08: !0,
                      vp09: !0,
                    },
                    text: { stpp: !0, wvtt: !0 },
                  };
                  function a(R, I) {
                    var C = O[I];
                    return !!C && !0 === C[R.slice(0, 4)];
                  }
                  function n(R, I) {
                    return MediaSource.isTypeSupported((I || 'video') + '/mp4;codecs="' + R + '"');
                  }
                },
                './src/utils/cues.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/utils/vttparser.ts'),
                    w = C('./src/utils/webvtt-parser.ts'),
                    _ = C('./src/utils/texttrack-utils.ts'),
                    x = /\s/,
                    P = {
                      newCue: function e(R, I, C, P) {
                        for (
                          var F, M, N, B, U, G = [], j = self.VTTCue || self.TextTrackCue, K = 0;
                          K < P.rows.length;
                          K++
                        )
                          if (((N = !0), (B = 0), (U = ''), !(F = P.rows[K]).isEmpty())) {
                            for (var H = 0; H < F.chars.length; H++)
                              x.test(F.chars[H].uchar) && N ? B++ : ((U += F.chars[H].uchar), (N = !1));
                            (F.cueStartTime = I), I === C && (C += 1e-4), B >= 16 ? B-- : B++;
                            var V = Object(O.fixLineBreaks)(U.trim()),
                              W = Object(w.generateCueId)(I, C, V);
                            (R && R.cues && R.cues.getCueById(W)) ||
                              (((M = new j(I, C, V)).id = W),
                              (M.line = K + 1),
                              (M.align = 'left'),
                              (M.position = 10 + Math.min(80, 10 * Math.floor((8 * B) / 32))),
                              G.push(M));
                          }
                        return (
                          R &&
                            G.length &&
                            (G.sort(function (R, I) {
                              return 'auto' === R.line || 'auto' === I.line
                                ? 0
                                : R.line > 8 && I.line > 8
                                ? I.line - R.line
                                : R.line - I.line;
                            }),
                            G.forEach(function (I) {
                              return Object(_.addCueToTrack)(R, I);
                            })),
                          G
                        );
                      },
                    };
                  I.default = P;
                },
                './src/utils/discontinuities.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'findFirstFragWithCC', function () {
                      return s;
                    }),
                    C.d(I, 'shouldAlignOnDiscontinuities', function () {
                      return o;
                    }),
                    C.d(I, 'findDiscontinuousReferenceFrag', function () {
                      return l;
                    }),
                    C.d(I, 'adjustSlidingStart', function () {
                      return f;
                    }),
                    C.d(I, 'alignStream', function () {
                      return c;
                    }),
                    C.d(I, 'alignPDT', function () {
                      return h;
                    }),
                    C.d(I, 'alignFragmentByPDTDelta', function () {
                      return v;
                    }),
                    C.d(I, 'alignMediaPlaylistByPDT', function () {
                      return g;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/utils/logger.ts'),
                    _ = C('./src/controller/level-helper.ts');
                  function s(R, I) {
                    for (var C = null, O = 0, w = R.length; O < w; O++) {
                      var _ = R[O];
                      if (_ && _.cc === I) {
                        C = _;
                        break;
                      }
                    }
                    return C;
                  }
                  function o(R, I, C) {
                    return !(!I.details || !(C.endCC > C.startCC || (R && R.cc < C.startCC)));
                  }
                  function l(R, I) {
                    var C = R.fragments,
                      O = I.fragments;
                    if (O.length && C.length) {
                      var _ = s(C, O[0].cc);
                      if (_ && (!_ || _.startPTS)) return _;
                      w.logger.log('No frag in previous level to align on');
                    } else w.logger.log('No fragments to align');
                  }
                  function u(R, I) {
                    if (R) {
                      var C = R.start + I;
                      (R.start = R.startPTS = C), (R.endPTS = C + R.duration);
                    }
                  }
                  function f(R, I) {
                    for (var C = I.fragments, O = 0, w = C.length; O < w; O++) u(C[O], R);
                    I.fragmentHint && u(I.fragmentHint, R), (I.alignedSliding = !0);
                  }
                  function c(R, I, C) {
                    I &&
                      (!(function d(R, I, C) {
                        if (o(R, C, I)) {
                          var _ = l(C.details, I);
                          _ &&
                            Object(O.isFiniteNumber)(_.start) &&
                            (w.logger.log(
                              'Adjusting PTS using last level due to CC increase within current level ' + I.url
                            ),
                            f(_.start, I));
                        }
                      })(R, C, I),
                      !C.alignedSliding && I.details && h(C, I.details),
                      C.alignedSliding || !I.details || C.skippedSegments || Object(_.adjustSliding)(I.details, C));
                  }
                  function h(R, I) {
                    if (I.fragments.length && R.hasProgramDateTime && I.hasProgramDateTime) {
                      var C = I.fragments[0].programDateTime,
                        _ = R.fragments[0].programDateTime,
                        x = (_ - C) / 1e3 + I.fragments[0].start;
                      x &&
                        Object(O.isFiniteNumber)(x) &&
                        (w.logger.log(
                          'Adjusting PTS using programDateTime delta ' +
                            (_ - C) +
                            'ms, sliding:' +
                            x.toFixed(3) +
                            ' ' +
                            R.url +
                            ' '
                        ),
                        f(x, R));
                    }
                  }
                  function v(R, I) {
                    var C = R.programDateTime;
                    if (C) {
                      var O = (C - I) / 1e3;
                      (R.start = R.startPTS = O), (R.endPTS = O + R.duration);
                    }
                  }
                  function g(R, I) {
                    if (I.fragments.length && R.hasProgramDateTime && I.hasProgramDateTime) {
                      var C = I.fragments[0].programDateTime - 1e3 * I.fragments[0].start;
                      R.fragments.forEach(function (R) {
                        v(R, C);
                      }),
                        R.fragmentHint && v(R.fragmentHint, C),
                        (R.alignedSliding = !0);
                    }
                  }
                },
                './src/utils/ewma-bandwidth-estimator.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/utils/ewma.ts'),
                    w = (function () {
                      function e(R, I, C) {
                        (this.defaultEstimate_ = void 0),
                          (this.minWeight_ = void 0),
                          (this.minDelayMs_ = void 0),
                          (this.slow_ = void 0),
                          (this.fast_ = void 0),
                          (this.defaultEstimate_ = C),
                          (this.minWeight_ = 0.001),
                          (this.minDelayMs_ = 50),
                          (this.slow_ = new O.default(R)),
                          (this.fast_ = new O.default(I));
                      }
                      var R = e.prototype;
                      return (
                        (R.update = function e(R, I) {
                          var C = this.slow_,
                            w = this.fast_;
                          this.slow_.halfLife !== R &&
                            (this.slow_ = new O.default(R, C.getEstimate(), C.getTotalWeight())),
                            this.fast_.halfLife !== I &&
                              (this.fast_ = new O.default(I, w.getEstimate(), w.getTotalWeight()));
                        }),
                        (R.sample = function e(R, I) {
                          var C = (R = Math.max(R, this.minDelayMs_)) / 1e3,
                            O = (8 * I) / C;
                          this.fast_.sample(C, O), this.slow_.sample(C, O);
                        }),
                        (R.canEstimate = function e() {
                          var R = this.fast_;
                          return R && R.getTotalWeight() >= this.minWeight_;
                        }),
                        (R.getEstimate = function e() {
                          return this.canEstimate()
                            ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate())
                            : this.defaultEstimate_;
                        }),
                        (R.destroy = function e() {}),
                        e
                      );
                    })();
                  I.default = w;
                },
                './src/utils/ewma.ts': function (R, I, C) {
                  C.r(I);
                  var O = (function () {
                    function e(R, I, C) {
                      void 0 === I && (I = 0),
                        void 0 === C && (C = 0),
                        (this.halfLife = void 0),
                        (this.alpha_ = void 0),
                        (this.estimate_ = void 0),
                        (this.totalWeight_ = void 0),
                        (this.halfLife = R),
                        (this.alpha_ = R ? Math.exp(Math.log(0.5) / R) : 0),
                        (this.estimate_ = I),
                        (this.totalWeight_ = C);
                    }
                    var R = e.prototype;
                    return (
                      (R.sample = function e(R, I) {
                        var C = Math.pow(this.alpha_, R);
                        (this.estimate_ = I * (1 - C) + C * this.estimate_), (this.totalWeight_ += R);
                      }),
                      (R.getTotalWeight = function e() {
                        return this.totalWeight_;
                      }),
                      (R.getEstimate = function e() {
                        if (this.alpha_) {
                          var R = 1 - Math.pow(this.alpha_, this.totalWeight_);
                          if (R) return this.estimate_ / R;
                        }
                        return this.estimate_;
                      }),
                      e
                    );
                  })();
                  I.default = O;
                },
                './src/utils/fetch-loader.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'fetchSupported', function () {
                      return v;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/loader/load-stats.ts'),
                    _ = C('./src/demux/chunk-cache.ts');
                  function o(R) {
                    var I = 'function' == typeof Map ? new Map() : void 0;
                    return (o = function e(R) {
                      if (
                        null === R ||
                        !(function f(R) {
                          return -1 !== Function.toString.call(R).indexOf('[native code]');
                        })(R)
                      )
                        return R;
                      if ('function' != typeof R)
                        throw new TypeError('Super expression must either be null or a function');
                      if (void 0 !== I) {
                        if (I.has(R)) return I.get(R);
                        I.set(R, i);
                      }
                      function i() {
                        return l(R, arguments, d(this).constructor);
                      }
                      return (
                        (i.prototype = Object.create(R.prototype, {
                          constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
                        })),
                        c(i, R)
                      );
                    })(R);
                  }
                  function l(R, I, C) {
                    return (l = u()
                      ? Reflect.construct
                      : function e(R, I, C) {
                          var O = [null];
                          O.push.apply(O, I);
                          var w = new (Function.bind.apply(R, O))();
                          return C && c(w, C.prototype), w;
                        }).apply(null, arguments);
                  }
                  function u() {
                    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ('function' == typeof Proxy) return !0;
                    try {
                      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (R) {
                      return !1;
                    }
                  }
                  function c(R, I) {
                    return (c =
                      Object.setPrototypeOf ||
                      function e(R, I) {
                        return (R.__proto__ = I), R;
                      })(R, I);
                  }
                  function d(R) {
                    return (d = Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function e(R) {
                          return R.__proto__ || Object.getPrototypeOf(R);
                        })(R);
                  }
                  function h() {
                    return (h =
                      Object.assign ||
                      function (R) {
                        for (var I = 1; I < arguments.length; I++) {
                          var C = arguments[I];
                          for (var O in C) Object.prototype.hasOwnProperty.call(C, O) && (R[O] = C[O]);
                        }
                        return R;
                      }).apply(this, arguments);
                  }
                  function v() {
                    if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
                      try {
                        return new self.ReadableStream({}), !0;
                      } catch (R) {}
                    return !1;
                  }
                  var x = (function () {
                    function e(R) {
                      (this.fetchSetup = void 0),
                        (this.requestTimeout = void 0),
                        (this.request = void 0),
                        (this.response = void 0),
                        (this.controller = void 0),
                        (this.context = void 0),
                        (this.config = null),
                        (this.callbacks = null),
                        (this.stats = void 0),
                        (this.loader = null),
                        (this.fetchSetup = R.fetchSetup || m),
                        (this.controller = new self.AbortController()),
                        (this.stats = new w.LoadStats());
                    }
                    var R = e.prototype;
                    return (
                      (R.destroy = function e() {
                        (this.loader = this.callbacks = null), this.abortInternal();
                      }),
                      (R.abortInternal = function e() {
                        var R = this.response;
                        (R && R.ok) || ((this.stats.aborted = !0), this.controller.abort());
                      }),
                      (R.abort = function e() {
                        var R;
                        this.abortInternal(),
                          null !== (R = this.callbacks) &&
                            void 0 !== R &&
                            R.onAbort &&
                            this.callbacks.onAbort(this.stats, this.context, this.response);
                      }),
                      (R.load = function e(R, I, C) {
                        var w = this,
                          _ = this.stats;
                        if (_.loading.start) throw new Error('Loader can only be used once.');
                        _.loading.start = self.performance.now();
                        var x = (function p(R, I) {
                            var C = {
                              method: 'GET',
                              mode: 'cors',
                              credentials: 'same-origin',
                              signal: I,
                              headers: new self.Headers(h({}, R.headers)),
                            };
                            R.rangeEnd &&
                              C.headers.set('Range', 'bytes=' + R.rangeStart + '-' + String(R.rangeEnd - 1));
                            return C;
                          })(R, this.controller.signal),
                          F = C.onProgress,
                          M = 'arraybuffer' === R.responseType,
                          N = M ? 'byteLength' : 'length';
                        (this.context = R),
                          (this.config = I),
                          (this.callbacks = C),
                          (this.request = this.fetchSetup(R, x)),
                          self.clearTimeout(this.requestTimeout),
                          (this.requestTimeout = self.setTimeout(function () {
                            w.abortInternal(), C.onTimeout(_, R, w.response);
                          }, I.timeout)),
                          self
                            .fetch(this.request)
                            .then(function (C) {
                              if (((w.response = w.loader = C), !C.ok)) {
                                var x = C.status,
                                  N = C.statusText;
                                throw new P(N || 'fetch, bad network response', x, C);
                              }
                              return (
                                (_.loading.first = Math.max(self.performance.now(), _.loading.start)),
                                (_.total = parseInt(C.headers.get('Content-Length') || '0')),
                                F && Object(O.isFiniteNumber)(I.highWaterMark)
                                  ? w.loadProgressively(C, _, R, I.highWaterMark, F)
                                  : M
                                  ? C.arrayBuffer()
                                  : C.text()
                              );
                            })
                            .then(function (x) {
                              var P = w.response;
                              self.clearTimeout(w.requestTimeout),
                                (_.loading.end = Math.max(self.performance.now(), _.loading.first)),
                                (_.loaded = _.total = x[N]);
                              var M = { url: P.url, data: x };
                              F && !Object(O.isFiniteNumber)(I.highWaterMark) && F(_, R, x, P), C.onSuccess(M, _, R, P);
                            })
                            .catch(function (I) {
                              if ((self.clearTimeout(w.requestTimeout), !_.aborted)) {
                                var O = I.code || 0;
                                C.onError({ code: O, text: I.message }, R, I.details);
                              }
                            });
                      }),
                      (R.getCacheAge = function e() {
                        var R = null;
                        if (this.response) {
                          var I = this.response.headers.get('age');
                          R = I ? parseFloat(I) : null;
                        }
                        return R;
                      }),
                      (R.loadProgressively = function e(R, I, C, O, w) {
                        void 0 === O && (O = 0);
                        var x = new _.default(),
                          P = R.body.getReader();
                        return (function e() {
                          return P.read()
                            .then(function (_) {
                              if (_.done)
                                return x.dataLength && w(I, C, x.flush(), R), Promise.resolve(new ArrayBuffer(0));
                              var P = _.value,
                                F = P.length;
                              return (
                                (I.loaded += F),
                                F < O || x.dataLength
                                  ? (x.push(P), x.dataLength >= O && w(I, C, x.flush(), R))
                                  : w(I, C, P, R),
                                e()
                              );
                            })
                            .catch(function () {
                              return Promise.reject();
                            });
                        })();
                      }),
                      e
                    );
                  })();
                  function m(R, I) {
                    return new self.Request(R.url, I);
                  }
                  var P = (function (R) {
                    function t(I, C, O) {
                      var w;
                      return (
                        ((w = R.call(this, I) || this).code = void 0),
                        (w.details = void 0),
                        (w.code = C),
                        (w.details = O),
                        w
                      );
                    }
                    return (
                      (function s(R, I) {
                        (R.prototype = Object.create(I.prototype)), (R.prototype.constructor = R), c(R, I);
                      })(t, R),
                      t
                    );
                  })(o(Error));
                  I.default = x;
                },
                './src/utils/imsc1-ttml-parser.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'IMSC1_CODEC', function () {
                      return M;
                    }),
                    C.d(I, 'parseIMSC1', function () {
                      return v;
                    });
                  var O = C('./src/utils/mp4-tools.ts'),
                    w = C('./src/utils/vttparser.ts'),
                    _ = C('./src/utils/vttcue.ts'),
                    x = C('./src/demux/id3.ts'),
                    P = C('./src/utils/timescale-conversion.ts'),
                    F = C('./src/utils/webvtt-parser.ts');
                  function u() {
                    return (u =
                      Object.assign ||
                      function (R) {
                        for (var I = 1; I < arguments.length; I++) {
                          var C = arguments[I];
                          for (var O in C) Object.prototype.hasOwnProperty.call(C, O) && (R[O] = C[O]);
                        }
                        return R;
                      }).apply(this, arguments);
                  }
                  var M = 'stpp.ttml.im1t',
                    N = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
                    B = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
                    U = { left: 'start', center: 'center', right: 'end', start: 'start', end: 'end' };
                  function v(R, I, C, w, _) {
                    var F = Object(O.findBox)(new Uint8Array(R), ['mdat']);
                    if (0 !== F.length) {
                      var M = F[0],
                        N = Object(x.utf8ArrayToStr)(new Uint8Array(R, M.start, M.end - M.start)),
                        B = Object(P.toTimescaleFromScale)(I, 1, C);
                      try {
                        w(g(N, B));
                      } catch (R) {
                        _(R);
                      }
                    } else _(new Error('Could not parse IMSC1 mdat'));
                  }
                  function g(R, I) {
                    var C = new DOMParser().parseFromString(R, 'text/xml').getElementsByTagName('tt')[0];
                    if (!C) throw new Error('Invalid ttml');
                    var O = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 },
                      w = Object.keys(O).reduce(function (R, I) {
                        return (R[I] = C.getAttribute('ttp:' + I) || O[I]), R;
                      }, {}),
                      x = 'preserve' !== C.getAttribute('xml:space'),
                      P = m(p(C, 'styling', 'style')),
                      M = m(p(C, 'layout', 'region')),
                      N = p(C, 'body', '[begin]');
                    return [].map
                      .call(N, function (R) {
                        var C = (function y(R, I) {
                          return [].slice.call(R.childNodes).reduce(function (R, C, O) {
                            var w;
                            return 'br' === C.nodeName && O
                              ? R + '\n'
                              : null !== (w = C.childNodes) && void 0 !== w && w.length
                              ? y(C, I)
                              : I
                              ? R + C.textContent.trim().replace(/\s+/g, ' ')
                              : R + C.textContent;
                          }, '');
                        })(R, x);
                        if (!C || !R.hasAttribute('begin')) return null;
                        var O = S(R.getAttribute('begin'), w),
                          N = S(R.getAttribute('dur'), w),
                          B = S(R.getAttribute('end'), w);
                        if (null === O) throw b(R);
                        if (null === B) {
                          if (null === N) throw b(R);
                          B = O + N;
                        }
                        var G = new _.default(O - I, B - I, C);
                        G.id = Object(F.generateCueId)(G.startTime, G.endTime, G.text);
                        var j = M[R.getAttribute('region')],
                          K = P[R.getAttribute('style')];
                        (G.position = 10), (G.size = 80);
                        var H = E(j, K),
                          V = H.textAlign;
                        if (V) {
                          var W = U[V];
                          W && (G.lineAlign = W), (G.align = V);
                        }
                        return u(G, H), G;
                      })
                      .filter(function (R) {
                        return null !== R;
                      });
                  }
                  function p(R, I, C) {
                    var O = R.getElementsByTagName(I)[0];
                    return O ? [].slice.call(O.querySelectorAll(C)) : [];
                  }
                  function m(R) {
                    return R.reduce(function (R, I) {
                      var C = I.getAttribute('xml:id');
                      return C && (R[C] = I), R;
                    }, {});
                  }
                  function E(R, I) {
                    var C = 'http://www.w3.org/ns/ttml#styling';
                    return ['displayAlign', 'textAlign', 'color', 'backgroundColor', 'fontSize', 'fontFamily'].reduce(
                      function (O, w) {
                        var _ = T(I, C, w) || T(R, C, w);
                        return _ && (O[w] = _), O;
                      },
                      {}
                    );
                  }
                  function T(R, I, C) {
                    return R.hasAttributeNS(I, C) ? R.getAttributeNS(I, C) : null;
                  }
                  function b(R) {
                    return new Error('Could not parse ttml timestamp ' + R);
                  }
                  function S(R, I) {
                    if (!R) return null;
                    var C = Object(w.parseTimeStamp)(R);
                    return (
                      null === C &&
                        (N.test(R)
                          ? (C = (function A(R, I) {
                              var C = N.exec(R),
                                O = (0 | C[4]) + (0 | C[5]) / I.subFrameRate;
                              return 3600 * (0 | C[1]) + 60 * (0 | C[2]) + (0 | C[3]) + O / I.frameRate;
                            })(R, I))
                          : B.test(R) &&
                            (C = (function L(R, I) {
                              var C = B.exec(R),
                                O = Number(C[1]);
                              switch (C[2]) {
                                case 'h':
                                  return 3600 * O;
                                case 'm':
                                  return 60 * O;
                                case 'ms':
                                  return 1e3 * O;
                                case 'f':
                                  return O / I.frameRate;
                                case 't':
                                  return O / I.tickRate;
                              }
                              return O;
                            })(R, I))),
                      C
                    );
                  }
                },
                './src/utils/logger.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'enableLogs', function () {
                      return l;
                    }),
                    C.d(I, 'logger', function () {
                      return x;
                    });
                  var O = function e() {},
                    w = { trace: O, debug: O, log: O, warn: O, info: O, error: O },
                    _ = w;
                  function s(R) {
                    var I = self.console[R];
                    return I ? I.bind(self.console, '[' + R + '] >') : O;
                  }
                  function l(R) {
                    if ((self.console && !0 === R) || 'object' == typeof R) {
                      !(function o(R) {
                        for (var I = arguments.length, C = new Array(I > 1 ? I - 1 : 0), O = 1; O < I; O++)
                          C[O - 1] = arguments[O];
                        C.forEach(function (I) {
                          _[I] = R[I] ? R[I].bind(R) : s(I);
                        });
                      })(R, 'debug', 'log', 'info', 'warn', 'error');
                      try {
                        _.log();
                      } catch (R) {
                        _ = w;
                      }
                    } else _ = w;
                  }
                  var x = w;
                },
                './src/utils/mediakeys-helper.ts': function (R, I, C) {
                  var O;
                  C.r(I),
                    C.d(I, 'KeySystems', function () {
                      return O;
                    }),
                    C.d(I, 'requestMediaKeySystemAccess', function () {
                      return w;
                    }),
                    (function (R) {
                      (R.WIDEVINE = 'com.widevine.alpha'), (R.PLAYREADY = 'com.microsoft.playready');
                    })(O || (O = {}));
                  var w =
                    'undefined' != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess
                      ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator)
                      : null;
                },
                './src/utils/mediasource-helper.ts': function (R, I, C) {
                  function i() {
                    return self.MediaSource || self.WebKitMediaSource;
                  }
                  C.r(I),
                    C.d(I, 'getMediaSource', function () {
                      return i;
                    });
                },
                './src/utils/mp4-tools.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'bin2str', function () {
                      return o;
                    }),
                    C.d(I, 'readUint16', function () {
                      return l;
                    }),
                    C.d(I, 'readUint32', function () {
                      return u;
                    }),
                    C.d(I, 'writeUint32', function () {
                      return f;
                    }),
                    C.d(I, 'findBox', function () {
                      return c;
                    }),
                    C.d(I, 'parseSegmentIndex', function () {
                      return d;
                    }),
                    C.d(I, 'parseInitSegment', function () {
                      return h;
                    }),
                    C.d(I, 'getStartDTS', function () {
                      return v;
                    }),
                    C.d(I, 'getDuration', function () {
                      return g;
                    }),
                    C.d(I, 'computeRawDurationFromSamples', function () {
                      return p;
                    }),
                    C.d(I, 'offsetStartDTS', function () {
                      return m;
                    }),
                    C.d(I, 'segmentValidRange', function () {
                      return y;
                    }),
                    C.d(I, 'appendUint8Array', function () {
                      return E;
                    });
                  var O = C('./src/utils/typed-array.ts'),
                    w = C('./src/loader/fragment.ts'),
                    _ = Math.pow(2, 32) - 1,
                    x = [].push;
                  function o(R) {
                    return String.fromCharCode.apply(null, R);
                  }
                  function l(R, I) {
                    'data' in R && ((I += R.start), (R = R.data));
                    var C = (R[I] << 8) | R[I + 1];
                    return C < 0 ? 65536 + C : C;
                  }
                  function u(R, I) {
                    'data' in R && ((I += R.start), (R = R.data));
                    var C = (R[I] << 24) | (R[I + 1] << 16) | (R[I + 2] << 8) | R[I + 3];
                    return C < 0 ? 4294967296 + C : C;
                  }
                  function f(R, I, C) {
                    'data' in R && ((I += R.start), (R = R.data)),
                      (R[I] = C >> 24),
                      (R[I + 1] = (C >> 16) & 255),
                      (R[I + 2] = (C >> 8) & 255),
                      (R[I + 3] = 255 & C);
                  }
                  function c(R, I) {
                    var C,
                      O,
                      w,
                      _ = [];
                    if (!I.length) return _;
                    'data' in R ? ((C = R.data), (O = R.start), (w = R.end)) : ((O = 0), (w = (C = R).byteLength));
                    for (var P = O; P < w; ) {
                      var F = u(C, P),
                        M = F > 1 ? P + F : w;
                      if (o(C.subarray(P + 4, P + 8)) === I[0])
                        if (1 === I.length) _.push({ data: C, start: P + 8, end: M });
                        else {
                          var N = c({ data: C, start: P + 8, end: M }, I.slice(1));
                          N.length && x.apply(_, N);
                        }
                      P = M;
                    }
                    return _;
                  }
                  function d(R) {
                    var I = c(R, ['moov'])[0],
                      C = I ? I.end : null,
                      O = c(R, ['sidx']);
                    if (!O || !O[0]) return null;
                    var w = [],
                      _ = O[0],
                      x = _.data[0],
                      P = 0 === x ? 8 : 16,
                      F = u(_, P);
                    P += 4;
                    (P += 0 === x ? 8 : 16), (P += 2);
                    var M = _.end + 0,
                      N = l(_, P);
                    P += 2;
                    for (var B = 0; B < N; B++) {
                      var U = P,
                        G = u(_, U);
                      U += 4;
                      var j = 2147483647 & G;
                      if (1 === (2147483648 & G) >>> 31)
                        return console.warn('SIDX has hierarchical references (not supported)'), null;
                      var K = u(_, U);
                      (U += 4),
                        w.push({
                          referenceSize: j,
                          subsegmentDuration: K,
                          info: { duration: K / F, start: M, end: M + j - 1 },
                        }),
                        (M += j),
                        (P = U += 4);
                    }
                    return {
                      earliestPresentationTime: 0,
                      timescale: F,
                      version: x,
                      referencesCount: N,
                      references: w,
                      moovEndOffset: C,
                    };
                  }
                  function h(R) {
                    for (var I = [], C = c(R, ['moov', 'trak']), O = 0; O < C.length; O++) {
                      var _ = C[O],
                        x = c(_, ['tkhd'])[0];
                      if (x) {
                        var P = x.data[x.start],
                          F = 0 === P ? 12 : 20,
                          M = u(x, F),
                          N = c(_, ['mdia', 'mdhd'])[0];
                        if (N) {
                          var B = u(N, (F = 0 === (P = N.data[N.start]) ? 12 : 20)),
                            U = c(_, ['mdia', 'hdlr'])[0];
                          if (U) {
                            var G = o(U.data.subarray(U.start + 8, U.start + 12)),
                              j = { soun: w.ElementaryStreamTypes.AUDIO, vide: w.ElementaryStreamTypes.VIDEO }[G];
                            if (j) {
                              var K = c(_, ['mdia', 'minf', 'stbl', 'stsd'])[0],
                                H = void 0;
                              K && (H = o(K.data.subarray(K.start + 12, K.start + 16))),
                                (I[M] = { timescale: B, type: j }),
                                (I[j] = { timescale: B, id: M, codec: H });
                            }
                          }
                        }
                      }
                    }
                    return (
                      c(R, ['moov', 'mvex', 'trex']).forEach(function (R) {
                        var C = u(R, 4),
                          O = I[C];
                        O && (O.default = { duration: u(R, 12), flags: u(R, 20) });
                      }),
                      I
                    );
                  }
                  function v(R, I) {
                    return (
                      c(I, ['moof', 'traf']).reduce(function (I, C) {
                        var O = c(C, ['tfdt'])[0],
                          w = O.data[O.start],
                          _ = c(C, ['tfhd']).reduce(function (I, C) {
                            var _ = u(C, 4),
                              x = R[_];
                            if (x) {
                              var P = u(O, 4);
                              1 === w && ((P *= Math.pow(2, 32)), (P += u(O, 8)));
                              var F = P / (x.timescale || 9e4);
                              if (isFinite(F) && (null === I || F < I)) return F;
                            }
                            return I;
                          }, null);
                        return null !== _ && isFinite(_) && (null === I || _ < I) ? _ : I;
                      }, null) || 0
                    );
                  }
                  function g(R, I) {
                    for (var C = 0, O = 0, _ = 0, x = c(R, ['moof', 'traf']), P = 0; P < x.length; P++) {
                      var F = x[P],
                        M = c(F, ['tfhd'])[0],
                        N = I[u(M, 4)];
                      if (N) {
                        var B = N.default,
                          U = u(M, 0) | (null == B ? void 0 : B.flags),
                          G = null == B ? void 0 : B.duration;
                        8 & U && (G = u(M, 2 & U ? 12 : 8));
                        for (var j = N.timescale || 9e4, K = c(F, ['trun']), H = 0; H < K.length; H++) {
                          if (!(C = p(K[H])) && G) C = G * u(K[H], 4);
                          N.type === w.ElementaryStreamTypes.VIDEO
                            ? (O += C / j)
                            : N.type === w.ElementaryStreamTypes.AUDIO && (_ += C / j);
                        }
                      }
                    }
                    if (0 === O && 0 === _) {
                      var V = d(R);
                      if (null != V && V.references)
                        return V.references.reduce(function (R, I) {
                          return R + I.info.duration || 0;
                        }, 0);
                    }
                    return O || _;
                  }
                  function p(R) {
                    var I = u(R, 0),
                      C = 8;
                    1 & I && (C += 4), 4 & I && (C += 4);
                    for (var O = 0, w = u(R, 4), _ = 0; _ < w; _++) {
                      if (256 & I) (O += u(R, C)), (C += 4);
                      512 & I && (C += 4), 1024 & I && (C += 4), 2048 & I && (C += 4);
                    }
                    return O;
                  }
                  function m(R, I, C) {
                    c(I, ['moof', 'traf']).forEach(function (I) {
                      c(I, ['tfhd']).forEach(function (O) {
                        var w = u(O, 4),
                          x = R[w];
                        if (x) {
                          var P = x.timescale || 9e4;
                          c(I, ['tfdt']).forEach(function (R) {
                            var I = R.data[R.start],
                              O = u(R, 4);
                            if (0 === I) f(R, 4, O - C * P);
                            else {
                              (O *= Math.pow(2, 32)), (O += u(R, 8)), (O -= C * P), (O = Math.max(O, 0));
                              var w = Math.floor(O / (_ + 1)),
                                x = Math.floor(O % (_ + 1));
                              f(R, 4, w), f(R, 8, x);
                            }
                          });
                        }
                      });
                    });
                  }
                  function y(R) {
                    var I = { valid: null, remainder: null },
                      C = c(R, ['moof']);
                    if (!C) return I;
                    if (C.length < 2) return (I.remainder = R), I;
                    var w = C[C.length - 1];
                    return (
                      (I.valid = Object(O.sliceUint8)(R, 0, w.start - 8)),
                      (I.remainder = Object(O.sliceUint8)(R, w.start - 8)),
                      I
                    );
                  }
                  function E(R, I) {
                    var C = new Uint8Array(R.length + I.length);
                    return C.set(R), C.set(I, R.length), C;
                  }
                },
                './src/utils/output-filter.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'default', function () {
                      return O;
                    });
                  var O = (function () {
                    function e(R, I) {
                      (this.timelineController = void 0),
                        (this.cueRanges = []),
                        (this.trackName = void 0),
                        (this.startTime = null),
                        (this.endTime = null),
                        (this.screen = null),
                        (this.timelineController = R),
                        (this.trackName = I);
                    }
                    var R = e.prototype;
                    return (
                      (R.dispatchCue = function e() {
                        null !== this.startTime &&
                          (this.timelineController.addCues(
                            this.trackName,
                            this.startTime,
                            this.endTime,
                            this.screen,
                            this.cueRanges
                          ),
                          (this.startTime = null));
                      }),
                      (R.newCue = function e(R, I, C) {
                        (null === this.startTime || this.startTime > R) && (this.startTime = R),
                          (this.endTime = I),
                          (this.screen = C),
                          this.timelineController.createCaptionsTrack(this.trackName);
                      }),
                      (R.reset = function e() {
                        (this.cueRanges = []), (this.startTime = null);
                      }),
                      e
                    );
                  })();
                },
                './src/utils/texttrack-utils.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'sendAddTrackEvent', function () {
                      return a;
                    }),
                    C.d(I, 'addCueToTrack', function () {
                      return n;
                    }),
                    C.d(I, 'clearCurrentCues', function () {
                      return s;
                    }),
                    C.d(I, 'removeCuesInRange', function () {
                      return o;
                    }),
                    C.d(I, 'getCuesInRange', function () {
                      return u;
                    });
                  var O = C('./src/utils/logger.ts');
                  function a(R, I) {
                    var C;
                    try {
                      C = new Event('addtrack');
                    } catch (R) {
                      (C = document.createEvent('Event')).initEvent('addtrack', !1, !1);
                    }
                    (C.track = R), I.dispatchEvent(C);
                  }
                  function n(R, I) {
                    var C = R.mode;
                    if (('disabled' === C && (R.mode = 'hidden'), R.cues && !R.cues.getCueById(I.id)))
                      try {
                        if ((R.addCue(I), !R.cues.getCueById(I.id))) throw new Error('addCue is failed for: ' + I);
                      } catch (C) {
                        O.logger.debug('[texttrack-utils]: ' + C);
                        var w = new self.TextTrackCue(I.startTime, I.endTime, I.text);
                        (w.id = I.id), R.addCue(w);
                      }
                    'disabled' === C && (R.mode = C);
                  }
                  function s(R) {
                    var I = R.mode;
                    if (('disabled' === I && (R.mode = 'hidden'), R.cues))
                      for (var C = R.cues.length; C--; ) R.removeCue(R.cues[C]);
                    'disabled' === I && (R.mode = I);
                  }
                  function o(R, I, C) {
                    var O = R.mode;
                    if (('disabled' === O && (R.mode = 'hidden'), R.cues && R.cues.length > 0))
                      for (var w = u(R.cues, I, C), _ = 0; _ < w.length; _++) R.removeCue(w[_]);
                    'disabled' === O && (R.mode = O);
                  }
                  function u(R, I, C) {
                    var O = [],
                      w = (function l(R, I) {
                        if (I < R[0].startTime) return 0;
                        var C = R.length - 1;
                        if (I > R[C].endTime) return -1;
                        for (var O = 0, w = C; O <= w; ) {
                          var _ = Math.floor((w + O) / 2);
                          if (I < R[_].startTime) w = _ - 1;
                          else {
                            if (!(I > R[_].startTime && O < C)) return _;
                            O = _ + 1;
                          }
                        }
                        return R[O].startTime - I < I - R[w].startTime ? O : w;
                      })(R, I);
                    if (w > -1)
                      for (var _ = w, x = R.length; _ < x; _++) {
                        var P = R[_];
                        if (P.startTime >= I && P.endTime <= C) O.push(P);
                        else if (P.startTime > C) return O;
                      }
                    return O;
                  }
                },
                './src/utils/time-ranges.ts': function (R, I, C) {
                  C.r(I);
                  I.default = {
                    toString: function e(R) {
                      for (var I = '', C = R.length, O = 0; O < C; O++)
                        I += '[' + R.start(O).toFixed(3) + ',' + R.end(O).toFixed(3) + ']';
                      return I;
                    },
                  };
                },
                './src/utils/timescale-conversion.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'toTimescaleFromBase', function () {
                      return a;
                    }),
                    C.d(I, 'toTimescaleFromScale', function () {
                      return n;
                    }),
                    C.d(I, 'toMsFromMpegTsClock', function () {
                      return s;
                    }),
                    C.d(I, 'toMpegTsClockFromTimescale', function () {
                      return o;
                    });
                  function a(R, I, C, O) {
                    void 0 === C && (C = 1), void 0 === O && (O = !1);
                    var w = R * I * C;
                    return O ? Math.round(w) : w;
                  }
                  function n(R, I, C, O) {
                    return void 0 === C && (C = 1), void 0 === O && (O = !1), a(R, I, 1 / C, O);
                  }
                  function s(R, I) {
                    return void 0 === I && (I = !1), a(R, 1e3, 1 / 9e4, I);
                  }
                  function o(R, I) {
                    return void 0 === I && (I = 1), a(R, 9e4, 1 / I);
                  }
                },
                './src/utils/typed-array.ts': function (R, I, C) {
                  function i(R, I, C) {
                    return Uint8Array.prototype.slice
                      ? R.slice(I, C)
                      : new Uint8Array(Array.prototype.slice.call(R, I, C));
                  }
                  C.r(I),
                    C.d(I, 'sliceUint8', function () {
                      return i;
                    });
                },
                './src/utils/vttcue.ts': function (R, I, C) {
                  C.r(I),
                    (I.default = (function () {
                      if ('undefined' != typeof self && self.VTTCue) return self.VTTCue;
                      var R = ['', 'lr', 'rl'],
                        I = ['start', 'middle', 'end', 'left', 'right'];
                      function r(R, I) {
                        if ('string' != typeof I) return !1;
                        if (!Array.isArray(R)) return !1;
                        var C = I.toLowerCase();
                        return !!~R.indexOf(C) && C;
                      }
                      function i(I) {
                        return r(R, I);
                      }
                      function a(R) {
                        return r(I, R);
                      }
                      function n(R) {
                        for (var I = arguments.length, C = new Array(I > 1 ? I - 1 : 0), O = 1; O < I; O++)
                          C[O - 1] = arguments[O];
                        for (var w = 1; w < arguments.length; w++) {
                          var _ = arguments[w];
                          for (var x in _) R[x] = _[x];
                        }
                        return R;
                      }
                      function s(R, I, C) {
                        var O = this,
                          w = { enumerable: !0 };
                        O.hasBeenReset = !1;
                        var _ = '',
                          x = !1,
                          P = R,
                          F = I,
                          M = C,
                          N = null,
                          B = '',
                          U = !0,
                          G = 'auto',
                          j = 'start',
                          K = 50,
                          H = 'middle',
                          V = 50,
                          W = 'middle';
                        Object.defineProperty(
                          O,
                          'id',
                          n({}, w, {
                            get: function e() {
                              return _;
                            },
                            set: function e(R) {
                              _ = '' + R;
                            },
                          })
                        ),
                          Object.defineProperty(
                            O,
                            'pauseOnExit',
                            n({}, w, {
                              get: function e() {
                                return x;
                              },
                              set: function e(R) {
                                x = !!R;
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'startTime',
                            n({}, w, {
                              get: function e() {
                                return P;
                              },
                              set: function e(R) {
                                if ('number' != typeof R) throw new TypeError('Start time must be set to a number.');
                                (P = R), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'endTime',
                            n({}, w, {
                              get: function e() {
                                return F;
                              },
                              set: function e(R) {
                                if ('number' != typeof R) throw new TypeError('End time must be set to a number.');
                                (F = R), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'text',
                            n({}, w, {
                              get: function e() {
                                return M;
                              },
                              set: function e(R) {
                                (M = '' + R), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'region',
                            n({}, w, {
                              get: function e() {
                                return N;
                              },
                              set: function e(R) {
                                (N = R), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'vertical',
                            n({}, w, {
                              get: function e() {
                                return B;
                              },
                              set: function e(R) {
                                var I = i(R);
                                if (!1 === I) throw new SyntaxError('An invalid or illegal string was specified.');
                                (B = I), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'snapToLines',
                            n({}, w, {
                              get: function e() {
                                return U;
                              },
                              set: function e(R) {
                                (U = !!R), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'line',
                            n({}, w, {
                              get: function e() {
                                return G;
                              },
                              set: function e(R) {
                                if ('number' != typeof R && 'auto' !== R)
                                  throw new SyntaxError('An invalid number or illegal string was specified.');
                                (G = R), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'lineAlign',
                            n({}, w, {
                              get: function e() {
                                return j;
                              },
                              set: function e(R) {
                                var I = a(R);
                                if (!I) throw new SyntaxError('An invalid or illegal string was specified.');
                                (j = I), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'position',
                            n({}, w, {
                              get: function e() {
                                return K;
                              },
                              set: function e(R) {
                                if (R < 0 || R > 100) throw new Error('Position must be between 0 and 100.');
                                (K = R), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'positionAlign',
                            n({}, w, {
                              get: function e() {
                                return H;
                              },
                              set: function e(R) {
                                var I = a(R);
                                if (!I) throw new SyntaxError('An invalid or illegal string was specified.');
                                (H = I), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'size',
                            n({}, w, {
                              get: function e() {
                                return V;
                              },
                              set: function e(R) {
                                if (R < 0 || R > 100) throw new Error('Size must be between 0 and 100.');
                                (V = R), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          Object.defineProperty(
                            O,
                            'align',
                            n({}, w, {
                              get: function e() {
                                return W;
                              },
                              set: function e(R) {
                                var I = a(R);
                                if (!I) throw new SyntaxError('An invalid or illegal string was specified.');
                                (W = I), (this.hasBeenReset = !0);
                              },
                            })
                          ),
                          (O.displayState = void 0);
                      }
                      return (
                        (s.prototype.getCueAsHTML = function () {
                          return self.WebVTT.convertCueToDOMTree(self, this.text);
                        }),
                        s
                      );
                    })());
                },
                './src/utils/vttparser.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'parseTimeStamp', function () {
                      return n;
                    }),
                    C.d(I, 'fixLineBreaks', function () {
                      return c;
                    }),
                    C.d(I, 'VTTParser', function () {
                      return F;
                    });
                  var O = C('./src/utils/vttcue.ts'),
                    w = (function () {
                      function e() {}
                      return (
                        (e.prototype.decode = function e(R, I) {
                          if (!R) return '';
                          if ('string' != typeof R) throw new Error('Error - expected string data.');
                          return decodeURIComponent(encodeURIComponent(R));
                        }),
                        e
                      );
                    })();
                  function n(R) {
                    function t(R, I, C, O) {
                      return 3600 * (0 | R) + 60 * (0 | I) + (0 | C) + parseFloat(O || 0);
                    }
                    var I = R.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
                    return I ? (parseFloat(I[2]) > 59 ? t(I[2], I[3], 0, I[4]) : t(I[1], I[2], I[3], I[4])) : null;
                  }
                  var _ = (function () {
                    function e() {
                      this.values = Object.create(null);
                    }
                    var R = e.prototype;
                    return (
                      (R.set = function e(R, I) {
                        this.get(R) || '' === I || (this.values[R] = I);
                      }),
                      (R.get = function e(R, I, C) {
                        return C ? (this.has(R) ? this.values[R] : I[C]) : this.has(R) ? this.values[R] : I;
                      }),
                      (R.has = function e(R) {
                        return R in this.values;
                      }),
                      (R.alt = function e(R, I, C) {
                        for (var O = 0; O < C.length; ++O)
                          if (I === C[O]) {
                            this.set(R, I);
                            break;
                          }
                      }),
                      (R.integer = function e(R, I) {
                        /^-?\d+$/.test(I) && this.set(R, parseInt(I, 10));
                      }),
                      (R.percent = function e(R, I) {
                        if (/^([\d]{1,3})(\.[\d]*)?%$/.test(I)) {
                          var e = parseFloat(I);
                          if (e >= 0 && e <= 100) return this.set(R, e), !0;
                        }
                        return !1;
                      }),
                      e
                    );
                  })();
                  function o(R, I, C, O) {
                    var w = O ? R.split(O) : [R];
                    for (var _ in w)
                      if ('string' == typeof w[_]) {
                        var x = w[_].split(C);
                        if (2 === x.length) I(x[0], x[1]);
                      }
                  }
                  var x = new O.default(0, 0, ''),
                    P = 'middle' === x.align ? 'middle' : 'center';
                  function f(R, I, C) {
                    var O = R;
                    function a() {
                      var I = n(R);
                      if (null === I) throw new Error('Malformed timestamp: ' + O);
                      return (R = R.replace(/^[^\sa-zA-Z-]+/, '')), I;
                    }
                    function c() {
                      R = R.replace(/^\s+/, '');
                    }
                    if ((c(), (I.startTime = a()), c(), '--\x3e' !== R.substr(0, 3)))
                      throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + O);
                    (R = R.substr(3)),
                      c(),
                      (I.endTime = a()),
                      c(),
                      (function f(R, I) {
                        var O = new _();
                        o(
                          R,
                          function (R, I) {
                            var w;
                            switch (R) {
                              case 'region':
                                for (var _ = C.length - 1; _ >= 0; _--)
                                  if (C[_].id === I) {
                                    O.set(R, C[_].region);
                                    break;
                                  }
                                break;
                              case 'vertical':
                                O.alt(R, I, ['rl', 'lr']);
                                break;
                              case 'line':
                                (w = I.split(',')),
                                  O.integer(R, w[0]),
                                  O.percent(R, w[0]) && O.set('snapToLines', !1),
                                  O.alt(R, w[0], ['auto']),
                                  2 === w.length && O.alt('lineAlign', w[1], ['start', P, 'end']);
                                break;
                              case 'position':
                                (w = I.split(',')),
                                  O.percent(R, w[0]),
                                  2 === w.length &&
                                    O.alt('positionAlign', w[1], [
                                      'start',
                                      P,
                                      'end',
                                      'line-left',
                                      'line-right',
                                      'auto',
                                    ]);
                                break;
                              case 'size':
                                O.percent(R, I);
                                break;
                              case 'align':
                                O.alt(R, I, ['start', P, 'end', 'left', 'right']);
                            }
                          },
                          /:/,
                          /\s/
                        ),
                          (I.region = O.get('region', null)),
                          (I.vertical = O.get('vertical', ''));
                        var w = O.get('line', 'auto');
                        'auto' === w && -1 === x.line && (w = -1),
                          (I.line = w),
                          (I.lineAlign = O.get('lineAlign', 'start')),
                          (I.snapToLines = O.get('snapToLines', !0)),
                          (I.size = O.get('size', 100)),
                          (I.align = O.get('align', P));
                        var F = O.get('position', 'auto');
                        'auto' === F &&
                          50 === x.position &&
                          (F =
                            'start' === I.align || 'left' === I.align
                              ? 0
                              : 'end' === I.align || 'right' === I.align
                              ? 100
                              : 50),
                          (I.position = F);
                      })(R, I);
                  }
                  function c(R) {
                    return R.replace(/<br(?: \/)?>/gi, '\n');
                  }
                  var F = (function () {
                    function e() {
                      (this.state = 'INITIAL'),
                        (this.buffer = ''),
                        (this.decoder = new w()),
                        (this.regionList = []),
                        (this.cue = null),
                        (this.oncue = void 0),
                        (this.onparsingerror = void 0),
                        (this.onflush = void 0);
                    }
                    var R = e.prototype;
                    return (
                      (R.parse = function e(R) {
                        var I = this;
                        function a() {
                          var R = I.buffer,
                            C = 0;
                          for (R = c(R); C < R.length && '\r' !== R[C] && '\n' !== R[C]; ) ++C;
                          var O = R.substr(0, C);
                          return '\r' === R[C] && ++C, '\n' === R[C] && ++C, (I.buffer = R.substr(C)), O;
                        }
                        function n(R) {
                          o(R, function (R, I) {}, /:/);
                        }
                        R && (I.buffer += I.decoder.decode(R, { stream: !0 }));
                        try {
                          var C = '';
                          if ('INITIAL' === I.state) {
                            if (!/\r\n|\n/.test(I.buffer)) return this;
                            var w = (C = a()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                            if (!w || !w[0]) throw new Error('Malformed WebVTT signature.');
                            I.state = 'HEADER';
                          }
                          for (var _ = !1; I.buffer; ) {
                            if (!/\r\n|\n/.test(I.buffer)) return this;
                            switch ((_ ? (_ = !1) : (C = a()), I.state)) {
                              case 'HEADER':
                                /:/.test(C) ? n(C) : C || (I.state = 'ID');
                                continue;
                              case 'NOTE':
                                C || (I.state = 'ID');
                                continue;
                              case 'ID':
                                if (/^NOTE($|[ \t])/.test(C)) {
                                  I.state = 'NOTE';
                                  break;
                                }
                                if (!C) continue;
                                if (
                                  ((I.cue = new O.default(0, 0, '')), (I.state = 'CUE'), -1 === C.indexOf('--\x3e'))
                                ) {
                                  I.cue.id = C;
                                  continue;
                                }
                              case 'CUE':
                                if (!I.cue) {
                                  I.state = 'BADCUE';
                                  continue;
                                }
                                try {
                                  f(C, I.cue, I.regionList);
                                } catch (e) {
                                  (I.cue = null), (I.state = 'BADCUE');
                                  continue;
                                }
                                I.state = 'CUETEXT';
                                continue;
                              case 'CUETEXT':
                                var x = -1 !== C.indexOf('--\x3e');
                                if (!C || (x && (_ = !0))) {
                                  I.oncue && I.cue && I.oncue(I.cue), (I.cue = null), (I.state = 'ID');
                                  continue;
                                }
                                if (null === I.cue) continue;
                                I.cue.text && (I.cue.text += '\n'), (I.cue.text += C);
                                continue;
                              case 'BADCUE':
                                C || (I.state = 'ID');
                            }
                          }
                        } catch (e) {
                          'CUETEXT' === I.state && I.cue && I.oncue && I.oncue(I.cue),
                            (I.cue = null),
                            (I.state = 'INITIAL' === I.state ? 'BADWEBVTT' : 'BADCUE');
                        }
                        return this;
                      }),
                      (R.flush = function e() {
                        var R = this;
                        try {
                          if (
                            ((R.cue || 'HEADER' === R.state) && ((R.buffer += '\n\n'), R.parse()),
                            'INITIAL' === R.state || 'BADWEBVTT' === R.state)
                          )
                            throw new Error('Malformed WebVTT signature.');
                        } catch (e) {
                          R.onparsingerror && R.onparsingerror(e);
                        }
                        return R.onflush && R.onflush(), this;
                      }),
                      e
                    );
                  })();
                },
                './src/utils/webvtt-parser.ts': function (R, I, C) {
                  C.r(I),
                    C.d(I, 'generateCueId', function () {
                      return d;
                    }),
                    C.d(I, 'parseWebVTT', function () {
                      return v;
                    });
                  var O = C('./src/polyfills/number.ts'),
                    w = C('./src/utils/vttparser.ts'),
                    _ = C('./src/demux/id3.ts'),
                    x = C('./src/utils/timescale-conversion.ts'),
                    P = C('./src/remux/mp4-remuxer.ts'),
                    F = /\r\n|\n\r|\n|\r/g,
                    M = function e(R, I, C) {
                      return void 0 === C && (C = 0), R.substr(C, I.length) === I;
                    },
                    N = function e(R) {
                      var I = parseInt(R.substr(-3)),
                        C = parseInt(R.substr(-6, 2)),
                        w = parseInt(R.substr(-9, 2)),
                        _ = R.length > 9 ? parseInt(R.substr(0, R.indexOf(':'))) : 0;
                      if (
                        !(
                          Object(O.isFiniteNumber)(I) &&
                          Object(O.isFiniteNumber)(C) &&
                          Object(O.isFiniteNumber)(w) &&
                          Object(O.isFiniteNumber)(_)
                        )
                      )
                        throw Error('Malformed X-TIMESTAMP-MAP: Local:' + R);
                      return (I += 1e3 * C), (I += 6e4 * w), (I += 36e5 * _);
                    },
                    B = function e(R) {
                      for (var e = 5381, I = R.length; I; ) e = (33 * e) ^ R.charCodeAt(--I);
                      return (e >>> 0).toString();
                    };
                  function d(R, I, C) {
                    return B(R.toString()) + B(I.toString()) + B(C);
                  }
                  function v(R, I, C, O, B, U, G, j) {
                    var K,
                      H = new w.VTTParser(),
                      V = Object(_.utf8ArrayToStr)(new Uint8Array(R)).trim().replace(F, '\n').split('\n'),
                      W = [],
                      Y = Object(x.toMpegTsClockFromTimescale)(I, C),
                      z = '00:00.000',
                      X = 0,
                      q = 0,
                      Z = !0,
                      Q = !1;
                    (H.oncue = function (R) {
                      var I = O[B],
                        C = O.ccOffset,
                        w = (X - Y) / 9e4;
                      if (
                        (null != I &&
                          I.new &&
                          (void 0 !== q
                            ? (C = O.ccOffset = I.start)
                            : (function e(R, I, C) {
                                var O = R[I],
                                  w = R[O.prevCC];
                                if (!w || (!w.new && O.new))
                                  return (R.ccOffset = R.presentationOffset = O.start), void (O.new = !1);
                                for (; null !== (_ = w) && void 0 !== _ && _.new; ) {
                                  var _;
                                  (R.ccOffset += O.start - w.start), (O.new = !1), (w = R[(O = w).prevCC]);
                                }
                                R.presentationOffset = C;
                              })(O, B, w)),
                        w && (C = w - O.presentationOffset),
                        Q)
                      ) {
                        var _ = R.endTime - R.startTime,
                          x = Object(P.normalizePts)(9e4 * (R.startTime + C - q), 9e4 * U) / 9e4;
                        (R.startTime = x), (R.endTime = x + _);
                      }
                      var F = R.text.trim();
                      (R.text = decodeURIComponent(encodeURIComponent(F))),
                        R.id || (R.id = d(R.startTime, R.endTime, F)),
                        R.endTime > 0 && W.push(R);
                    }),
                      (H.onparsingerror = function (R) {
                        K = R;
                      }),
                      (H.onflush = function () {
                        K ? j(K) : G(W);
                      }),
                      V.forEach(function (R) {
                        if (Z) {
                          if (M(R, 'X-TIMESTAMP-MAP=')) {
                            (Z = !1),
                              (Q = !0),
                              R.substr(16)
                                .split(',')
                                .forEach(function (R) {
                                  M(R, 'LOCAL:') ? (z = R.substr(6)) : M(R, 'MPEGTS:') && (X = parseInt(R.substr(7)));
                                });
                            try {
                              q = N(z) / 1e3;
                            } catch (R) {
                              (Q = !1), (K = R);
                            }
                            return;
                          }
                          '' === R && (Z = !1);
                        }
                        H.parse(R + '\n');
                      }),
                      H.flush();
                  }
                },
                './src/utils/xhr-loader.ts': function (R, I, C) {
                  C.r(I);
                  var O = C('./src/utils/logger.ts'),
                    w = C('./src/loader/load-stats.ts'),
                    _ = /^age:\s*[\d.]+\s*$/m,
                    x = (function () {
                      function e(R) {
                        (this.xhrSetup = void 0),
                          (this.requestTimeout = void 0),
                          (this.retryTimeout = void 0),
                          (this.retryDelay = void 0),
                          (this.config = null),
                          (this.callbacks = null),
                          (this.context = void 0),
                          (this.loader = null),
                          (this.stats = void 0),
                          (this.xhrSetup = R ? R.xhrSetup : null),
                          (this.stats = new w.LoadStats()),
                          (this.retryDelay = 0);
                      }
                      var R = e.prototype;
                      return (
                        (R.destroy = function e() {
                          (this.callbacks = null), this.abortInternal(), (this.loader = null), (this.config = null);
                        }),
                        (R.abortInternal = function e() {
                          var R = this.loader;
                          self.clearTimeout(this.requestTimeout),
                            self.clearTimeout(this.retryTimeout),
                            R &&
                              ((R.onreadystatechange = null),
                              (R.onprogress = null),
                              4 !== R.readyState && ((this.stats.aborted = !0), R.abort()));
                        }),
                        (R.abort = function e() {
                          var R;
                          this.abortInternal(),
                            null !== (R = this.callbacks) &&
                              void 0 !== R &&
                              R.onAbort &&
                              this.callbacks.onAbort(this.stats, this.context, this.loader);
                        }),
                        (R.load = function e(R, I, C) {
                          if (this.stats.loading.start) throw new Error('Loader can only be used once.');
                          (this.stats.loading.start = self.performance.now()),
                            (this.context = R),
                            (this.config = I),
                            (this.callbacks = C),
                            (this.retryDelay = I.retryDelay),
                            this.loadInternal();
                        }),
                        (R.loadInternal = function e() {
                          var R = this.config,
                            I = this.context;
                          if (R) {
                            var C = (this.loader = new self.XMLHttpRequest()),
                              O = this.stats;
                            (O.loading.first = 0), (O.loaded = 0);
                            var w = this.xhrSetup;
                            try {
                              if (w)
                                try {
                                  w(C, I.url);
                                } catch (e) {
                                  C.open('GET', I.url, !0), w(C, I.url);
                                }
                              C.readyState || C.open('GET', I.url, !0);
                              var _ = this.context.headers;
                              if (_) for (var x in _) C.setRequestHeader(x, _[x]);
                            } catch (e) {
                              return void this.callbacks.onError({ code: C.status, text: e.message }, I, C);
                            }
                            I.rangeEnd && C.setRequestHeader('Range', 'bytes=' + I.rangeStart + '-' + (I.rangeEnd - 1)),
                              (C.onreadystatechange = this.readystatechange.bind(this)),
                              (C.onprogress = this.loadprogress.bind(this)),
                              (C.responseType = I.responseType),
                              self.clearTimeout(this.requestTimeout),
                              (this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), R.timeout)),
                              C.send();
                          }
                        }),
                        (R.readystatechange = function e() {
                          var R = this.context,
                            I = this.loader,
                            C = this.stats;
                          if (R && I) {
                            var w = I.readyState,
                              _ = this.config;
                            if (!C.aborted && w >= 2)
                              if (
                                (self.clearTimeout(this.requestTimeout),
                                0 === C.loading.first &&
                                  (C.loading.first = Math.max(self.performance.now(), C.loading.start)),
                                4 === w)
                              ) {
                                (I.onreadystatechange = null), (I.onprogress = null);
                                var x = I.status;
                                if (x >= 200 && x < 300) {
                                  var P, F;
                                  if (
                                    ((C.loading.end = Math.max(self.performance.now(), C.loading.first)),
                                    (F =
                                      'arraybuffer' === R.responseType
                                        ? (P = I.response).byteLength
                                        : (P = I.responseText).length),
                                    (C.loaded = C.total = F),
                                    !this.callbacks)
                                  )
                                    return;
                                  var M = this.callbacks.onProgress;
                                  if ((M && M(C, R, P, I), !this.callbacks)) return;
                                  var N = { url: I.responseURL, data: P };
                                  this.callbacks.onSuccess(N, C, R, I);
                                } else
                                  C.retry >= _.maxRetry || (x >= 400 && x < 499)
                                    ? (O.logger.error(x + ' while loading ' + R.url),
                                      this.callbacks.onError({ code: x, text: I.statusText }, R, I))
                                    : (O.logger.warn(
                                        x + ' while loading ' + R.url + ', retrying in ' + this.retryDelay + '...'
                                      ),
                                      this.abortInternal(),
                                      (this.loader = null),
                                      self.clearTimeout(this.retryTimeout),
                                      (this.retryTimeout = self.setTimeout(
                                        this.loadInternal.bind(this),
                                        this.retryDelay
                                      )),
                                      (this.retryDelay = Math.min(2 * this.retryDelay, _.maxRetryDelay)),
                                      C.retry++);
                              } else
                                self.clearTimeout(this.requestTimeout),
                                  (this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), _.timeout));
                          }
                        }),
                        (R.loadtimeout = function e() {
                          O.logger.warn('timeout while loading ' + this.context.url);
                          var R = this.callbacks;
                          R && (this.abortInternal(), R.onTimeout(this.stats, this.context, this.loader));
                        }),
                        (R.loadprogress = function e(R) {
                          var I = this.stats;
                          (I.loaded = R.loaded), R.lengthComputable && (I.total = R.total);
                        }),
                        (R.getCacheAge = function e() {
                          var R = null;
                          if (this.loader && _.test(this.loader.getAllResponseHeaders())) {
                            var I = this.loader.getResponseHeader('age');
                            R = I ? parseFloat(I) : null;
                          }
                          return R;
                        }),
                        e
                      );
                    })();
                  I.default = x;
                },
              }).default;
            });
        }),
        N = Object(w.d)(M),
        __awaiter$1 = function (R, I, C, O) {
          function a(R) {
            return R instanceof C
              ? R
              : new C(function (I) {
                  I(R);
                });
          }
          return new (C || (C = Promise))(function (C, w) {
            function s(R) {
              try {
                l(O.next(R));
              } catch (R) {
                w(R);
              }
            }
            function o(R) {
              try {
                l(O.throw(R));
              } catch (R) {
                w(R);
              }
            }
            function l(R) {
              R.done ? C(R.value) : a(R.value).then(s, o);
            }
            l((O = O.apply(R, I || [])).next());
          });
        },
        B = (function () {
          function e(R) {
            var I = this;
            Object(O.g)(this, R),
              (this.onPlay = Object(O.c)(this, 'play', 7)),
              (this.onPause = Object(O.c)(this, 'pause', 7)),
              (this.onEnded = Object(O.c)(this, 'ended', 7)),
              (this.onTimeUpdate = Object(O.c)(this, 'timeupdate', 7)),
              (this.onError = Object(O.c)(this, 'error', 7)),
              (this.onFullScreenChange = Object(O.c)(this, 'fullscreenchange', 7)),
              (this.onProgress = Object(O.c)(this, 'progress', 7)),
              (this.onLoadedMetaData = Object(O.c)(this, 'loadedmetadata', 7)),
              (this.currentTime = 0),
              (this.isDraggingProgress = !1),
              (this.gestureType = 'none'),
              (this.controls = !0),
              (this.autoplay = !1),
              (this.loop = !1),
              (this.muted = !1),
              (this.initialTime = 0),
              (this.objectFit = 'contain'),
              (this.showProgress = !0),
              (this.showFullscreenBtn = !0),
              (this.showPlayBtn = !0),
              (this.showCenterPlayBtn = !0),
              (this.showMuteBtn = !1),
              (this.danmuBtn = !1),
              (this.enableDanmu = !1),
              (this.enablePlayGesture = !1),
              (this.enableProgressGesture = !0),
              (this.vslideGesture = !1),
              (this.vslideGestureInFullscreen = !0),
              (this.nativeProps = {}),
              (this._enableDanmu = !1),
              (this.isPlaying = !1),
              (this.isFirst = !0),
              (this.isFullScreen = !1),
              (this.fullScreenTimestamp = new Date().getTime()),
              (this.isMute = !1),
              (this.analyzeGesture = function (R) {
                var C,
                  O = { type: 'none' },
                  w = R.touches[0].screenX,
                  _ = R.touches[0].screenY,
                  x = w - I.lastTouchScreenX,
                  P = _ - I.lastTouchScreenY,
                  F = I.isFullScreen ? I.vslideGestureInFullscreen : I.vslideGesture;
                if ('none' === I.gestureType) {
                  if (
                    (function (R, I) {
                      return Math.sqrt(Math.pow(R, 2) + Math.pow(I, 2));
                    })(x, P) < 10
                  )
                    return O;
                  if (Math.abs(P) >= Math.abs(x)) {
                    if (!F) return O;
                    (I.gestureType = 'adjustVolume'), (I.lastVolume = I.videoRef.volume);
                  } else if (Math.abs(P) < Math.abs(x)) {
                    if (!I.enableProgressGesture) return O;
                    (I.gestureType = 'adjustProgress'),
                      (I.lastPercentage =
                        I.currentTime / (null !== (C = I.duration) && void 0 !== C ? C : I._duration));
                  }
                }
                return (
                  (O.type = I.gestureType),
                  (O.dataX = normalizeNumber(x / 200)),
                  (O.dataY = normalizeNumber(P / 200)),
                  O
                );
              }),
              (this.loadNativePlayer = function () {
                I.videoRef && ((I.videoRef.src = I.src), I.videoRef.load());
              }),
              (this.init = function () {
                var R = I,
                  C = R.src,
                  O = R.videoRef;
                !(function (R) {
                  return /\.(m3u8)($|\?)/i.test(R);
                })(C)
                  ? I.loadNativePlayer()
                  : N.isSupported()
                  ? (I.hls && I.hls.destroy(),
                    (I.hls = new N()),
                    I.hls.loadSource(C),
                    I.hls.attachMedia(O),
                    I.hls.on(N.Events.MANIFEST_PARSED, function () {
                      I.autoplay && I.play();
                    }))
                  : O.canPlayType('application/vnd.apple.mpegurl')
                  ? I.loadNativePlayer()
                  : console.error('该浏览器不支持 HLS 播放');
              }),
              (this.handlePlay = function () {
                (I.isPlaying = !0), (I.isFirst = !1), I.controlsRef.toggleVisibility(!0), I.onPlay.emit();
              }),
              (this.handlePause = function () {
                (I.isPlaying = !1), I.controlsRef.toggleVisibility(!0), I.onPause.emit();
              }),
              (this.handleEnded = function () {
                (I.isFirst = !0), I.pause(), I.controlsRef.toggleVisibility(), I.onEnded.emit();
              }),
              (this.handleTimeUpdate = Object(_.b)(function (R) {
                return __awaiter$1(I, void 0, void 0, function () {
                  var I, C, O, w;
                  return __generator(this, function (_) {
                    switch (_.label) {
                      case 0:
                        return (
                          (this.currentTime = this.videoRef.currentTime),
                          (O = this.duration || this._duration),
                          [4, this.controlsRef.getIsDraggingProgressBall()]
                        );
                      case 1:
                        return (
                          (w = _.sent()),
                          this.controls &&
                            this.showProgress &&
                            (w ||
                              this.isDraggingProgress ||
                              (this.controlsRef.setProgressBall(this.currentTime / O),
                              this.controlsRef.setCurrentTime(this.currentTime))),
                          this.danmuRef.tick(this.currentTime),
                          this.onTimeUpdate.emit({
                            duration: null === (I = R.target) || void 0 === I ? void 0 : I.duration,
                            currentTime: null === (C = R.target) || void 0 === C ? void 0 : C.currentTime,
                          }),
                          this.duration && this.currentTime >= this.duration && (this.seek(0), this.handleEnded()),
                          [2]
                        );
                    }
                  });
                });
              }, 250)),
              (this.handleError = function (R) {
                var C, O;
                I.onError.emit({
                  errMsg:
                    null === (O = null === (C = R.target) || void 0 === C ? void 0 : C.error) || void 0 === O
                      ? void 0
                      : O.message,
                });
              }),
              (this.handleDurationChange = function () {
                I._duration = I.videoRef.duration;
              }),
              (this.handleProgress = function () {
                I.onProgress.emit();
              }),
              (this.handleLoadedMetaData = function (R) {
                var C = R.target;
                I.onLoadedMetaData.emit({ width: C.videoWidth, height: C.videoHeight, duration: C.duration });
              }),
              (this._play = function () {
                return I.videoRef.play();
              }),
              (this._pause = function () {
                return I.videoRef.pause();
              }),
              (this._stop = function () {
                I.videoRef.pause(), I._seek(0);
              }),
              (this._seek = function (R) {
                I.videoRef.currentTime = R;
              }),
              (this.onTouchStartContainer = function (R) {
                (I.lastTouchScreenX = R.touches[0].screenX), (I.lastTouchScreenY = R.touches[0].screenY);
              }),
              (this.onClickContainer = function () {
                if (I.enablePlayGesture) {
                  var R = Date.now();
                  R - I.lastClickedTime < 300 && (I.isPlaying ? I.pause() : I.play()), (I.lastClickedTime = R);
                }
                I.controlsRef.toggleVisibility();
              }),
              (this.onClickFullScreenBtn = function (R) {
                R.stopPropagation(), I.toggleFullScreen();
              }),
              (this.handleFullScreenChange = function (R) {
                var C = new Date().getTime();
                !R.detail &&
                  I.isFullScreen &&
                  !document[P.fullscreenElement] &&
                  C - I.fullScreenTimestamp > 100 &&
                  I.toggleFullScreen(!1);
              }),
              (this.toggleFullScreen = function (R) {
                void 0 === R && (R = !I.isFullScreen),
                  (I.isFullScreen = R),
                  I.controlsRef.toggleVisibility(!0),
                  (I.fullScreenTimestamp = new Date().getTime()),
                  I.onFullScreenChange.emit({ fullScreen: I.isFullScreen, direction: 'vertical' }),
                  I.isFullScreen &&
                    !document[P.fullscreenElement] &&
                    setTimeout(function () {
                      I.videoRef[P.requestFullscreen]({ navigationUI: 'auto' });
                    }, 0);
              }),
              (this.toggleMute = function (R) {
                R.stopPropagation(),
                  (I.videoRef.muted = !I.isMute),
                  I.controlsRef.toggleVisibility(!0),
                  (I.isMute = !I.isMute);
              }),
              (this.toggleDanmu = function (R) {
                R.stopPropagation(), I.controlsRef.toggleVisibility(!0), (I._enableDanmu = !I._enableDanmu);
              });
          }
          return (
            (e.prototype.componentWillLoad = function () {
              this._enableDanmu = this.enableDanmu;
            }),
            (e.prototype.componentDidLoad = function () {
              this.init(),
                this.initialTime && (this.videoRef.currentTime = this.initialTime),
                this.danmuRef.sendDanmu(this.danmuList),
                document.addEventListener && document.addEventListener(P.fullscreenchange, this.handleFullScreenChange),
                this.videoRef &&
                  'iOS' === x &&
                  this.videoRef.addEventListener('webkitendfullscreen', this.handleFullScreenChange);
            }),
            (e.prototype.componentDidRender = function () {}),
            (e.prototype.disconnectedCallback = function () {
              document.removeEventListener &&
                document.removeEventListener(P.fullscreenchange, this.handleFullScreenChange),
                this.videoRef &&
                  'iOS' === x &&
                  this.videoRef.removeEventListener('webkitendfullscreen', this.handleFullScreenChange);
            }),
            (e.prototype.watchEnableDanmu = function (R) {
              this._enableDanmu = R;
            }),
            (e.prototype.watchSrc = function () {
              this.init();
            }),
            (e.prototype.onDocumentTouchMove = function (R) {
              return __awaiter$1(this, void 0, void 0, function () {
                var I, C, O;
                return __generator(this, function (w) {
                  switch (w.label) {
                    case 0:
                      return void 0 === this.lastTouchScreenX || void 0 === this.lastTouchScreenY
                        ? [2]
                        : [4, this.controlsRef.getIsDraggingProgressBall()];
                    case 1:
                      return (
                        w.sent() ||
                          ('adjustVolume' === (I = this.analyzeGesture(R)).type
                            ? ((this.toastVolumeRef.style.visibility = 'visible'),
                              (C = Math.max(Math.min(this.lastVolume - I.dataY, 1), 0)),
                              (this.videoRef.volume = C),
                              (this.toastVolumeBarRef.style.width = 100 * C + '%'))
                            : 'adjustProgress' === I.type &&
                              ((this.isDraggingProgress = !0),
                              (this.nextPercentage = Math.max(Math.min(this.lastPercentage + I.dataX, 1), 0)),
                              this.controls &&
                                this.showProgress &&
                                (this.controlsRef.setProgressBall(this.nextPercentage),
                                this.controlsRef.toggleVisibility(!0)),
                              (O = this.duration || this._duration),
                              (this.toastProgressTitleRef.innerHTML =
                                formatTime(this.nextPercentage * O) + ' / ' + formatTime(O)),
                              (this.toastProgressRef.style.visibility = 'visible'))),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.onDocumentTouchEnd = function () {
              var R;
              'adjustVolume' === this.gestureType
                ? (this.toastVolumeRef.style.visibility = 'hidden')
                : 'adjustProgress' === this.gestureType && (this.toastProgressRef.style.visibility = 'hidden'),
                this.isDraggingProgress &&
                  ((this.isDraggingProgress = !1),
                  this.seek(this.nextPercentage * (null !== (R = this.duration) && void 0 !== R ? R : this._duration))),
                (this.gestureType = 'none'),
                (this.lastTouchScreenX = void 0),
                (this.lastTouchScreenY = void 0);
            }),
            (e.prototype.play = function () {
              return __awaiter$1(this, void 0, void 0, function () {
                return __generator(this, function (R) {
                  return this._play(), [2];
                });
              });
            }),
            (e.prototype.pause = function () {
              return __awaiter$1(this, void 0, void 0, function () {
                return __generator(this, function (R) {
                  return this._pause(), [2];
                });
              });
            }),
            (e.prototype.stop = function () {
              return __awaiter$1(this, void 0, void 0, function () {
                return __generator(this, function (R) {
                  return this._stop(), [2];
                });
              });
            }),
            (e.prototype.seek = function (R) {
              return __awaiter$1(this, void 0, void 0, function () {
                return __generator(this, function (I) {
                  return this._seek(R), [2];
                });
              });
            }),
            (e.prototype.requestFullScreen = function () {
              return __awaiter$1(this, void 0, void 0, function () {
                return __generator(this, function (R) {
                  return this.toggleFullScreen(!0), [2];
                });
              });
            }),
            (e.prototype.exitFullScreen = function () {
              return __awaiter$1(this, void 0, void 0, function () {
                return __generator(this, function (R) {
                  return this.toggleFullScreen(!1), [2];
                });
              });
            }),
            (e.prototype.render = function () {
              var R = this,
                I = this,
                C = I.controls,
                _ = I.autoplay,
                x = I.loop,
                P = I.muted,
                F = I.poster,
                M = I.objectFit,
                N = I.isFirst,
                B = I.isMute,
                U = I.isFullScreen,
                G = I.showCenterPlayBtn,
                j = I.isPlaying,
                K = I._enableDanmu,
                H = I.showMuteBtn,
                V = I.danmuBtn,
                W = I.showFullscreenBtn,
                Y = I.nativeProps,
                z = this.duration || this._duration,
                X = formatTime(z);
              return Object(O.e)(
                O.a,
                {
                  class: Object(w.c)('taro-video-container', { 'taro-video-type-fullscreen': U }),
                  onTouchStart: this.onTouchStartContainer,
                  onClick: this.onClickContainer,
                },
                Object(O.e)(
                  'video',
                  Object.assign(
                    {
                      class: 'taro-video-video',
                      style: { 'object-fit': M },
                      ref: function (I) {
                        I && (R.videoRef = I);
                      },
                      autoplay: _,
                      loop: x,
                      muted: P,
                      poster: C ? F : void 0,
                      playsinline: !0,
                      'webkit-playsinline': !0,
                      onPlay: this.handlePlay,
                      onPause: this.handlePause,
                      onEnded: this.handleEnded,
                      onTimeUpdate: this.handleTimeUpdate,
                      onError: this.handleError,
                      onDurationChange: this.handleDurationChange,
                      onProgress: this.handleProgress,
                      onLoadedMetaData: this.handleLoadedMetaData,
                    },
                    Y
                  ),
                  '暂时不支持播放该视频'
                ),
                Object(O.e)('taro-video-danmu', {
                  ref: function (I) {
                    I && (R.danmuRef = I);
                  },
                  enable: K,
                }),
                N &&
                  G &&
                  !j &&
                  Object(O.e)(
                    'div',
                    { class: 'taro-video-cover' },
                    Object(O.e)('div', {
                      class: 'taro-video-cover-play-button',
                      onClick: function () {
                        return R.play();
                      },
                    }),
                    Object(O.e)('p', { class: 'taro-video-cover-duration' }, X)
                  ),
                Object(O.e)(
                  'taro-video-control',
                  {
                    ref: function (I) {
                      I && (R.controlsRef = I);
                    },
                    controls: C,
                    currentTime: this.currentTime,
                    duration: z,
                    isPlaying: this.isPlaying,
                    pauseFunc: this._pause,
                    playFunc: this._play,
                    seekFunc: this._seek,
                    showPlayBtn: this.showPlayBtn,
                    showProgress: this.showProgress,
                  },
                  H &&
                    Object(O.e)('div', {
                      class: Object(w.c)('taro-video-mute', { 'taro-video-type-mute': B }),
                      onClick: this.toggleMute,
                    }),
                  V &&
                    Object(O.e)(
                      'div',
                      {
                        class: Object(w.c)('taro-video-danmu-button', { 'taro-video-danmu-button-active': K }),
                        onClick: this.toggleDanmu,
                      },
                      '弹幕'
                    ),
                  W &&
                    Object(O.e)('div', {
                      class: Object(w.c)('taro-video-fullscreen', { 'taro-video-type-fullscreen': U }),
                      onClick: this.onClickFullScreenBtn,
                    })
                ),
                Object(O.e)(
                  'div',
                  {
                    class: 'taro-video-toast taro-video-toast-volume',
                    ref: function (I) {
                      I && (R.toastVolumeRef = I);
                    },
                  },
                  Object(O.e)('div', { class: 'taro-video-toast-title' }, '音量'),
                  Object(O.e)('div', { class: 'taro-video-toast-icon' }),
                  Object(O.e)(
                    'div',
                    { class: 'taro-video-toast-value' },
                    Object(O.e)(
                      'div',
                      {
                        class: 'taro-video-toast-value-content',
                        ref: function (I) {
                          I && (R.toastVolumeBarRef = I);
                        },
                      },
                      Object(O.e)(
                        'div',
                        { class: 'taro-video-toast-volume-grids' },
                        Array(10)
                          .fill(1)
                          .map(function () {
                            return Object(O.e)('div', { class: 'taro-video-toast-volume-grids-item' });
                          })
                      )
                    )
                  )
                ),
                Object(O.e)(
                  'div',
                  {
                    class: 'taro-video-toast taro-video-toast-progress',
                    ref: function (I) {
                      I && (R.toastProgressRef = I);
                    },
                  },
                  Object(O.e)('div', {
                    class: 'taro-video-toast-title',
                    ref: function (I) {
                      I && (R.toastProgressTitleRef = I);
                    },
                  })
                )
              );
            }),
            Object.defineProperty(e.prototype, 'el', {
              get: function () {
                return Object(O.d)(this);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, 'watchers', {
              get: function () {
                return { enableDanmu: ['watchEnableDanmu'], src: ['watchSrc'] };
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })();
      B.style =
        '.taro-video{display:inline-block;overflow:hidden;position:relative;width:100%;height:225px;line-height:0}.taro-video[hidden]{display:none}.taro-video-container{display:inline-block;position:absolute;left:0;top:0;width:100%;height:100%;background-color:#000;-o-object-position:inherit;object-position:inherit}.taro-video-container.taro-video-type-fullscreen{position:fixed;left:0;right:0;top:0;bottom:0;z-index:999}.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-left{-webkit-transform:translate(-50%, -50%) rotate(-90deg);transform:translate(-50%, -50%) rotate(-90deg)}.taro-video-container.taro-video-type-fullscreen.taro-video-type-rotate-right{-webkit-transform:translate(-50%, -50%) rotate(90deg);transform:translate(-50%, -50%) rotate(90deg)}.taro-video-video{width:100%;height:100%;-o-object-position:inherit;object-position:inherit}.taro-video-cover{display:-ms-flexbox;display:flex;position:absolute;left:0;top:0;bottom:0;z-index:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;background-color:rgba(1, 1, 1, 0.5);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-box-pack:center;-webkit-box-align:center}.taro-video-cover-play-button{width:40px;height:40px;background-repeat:no-repeat;background-position:50% 50%;background-size:50%}.taro-video-cover-duration{margin-top:10px;line-height:1;font-size:16px;color:#fff}.taro-video-bar{display:-ms-flexbox;display:flex;visibility:hidden;overflow:hidden;position:absolute;right:0;bottom:0;z-index:1;-ms-flex-align:center;align-items:center;padding:0 10px;height:44px;background-color:rgba(0, 0, 0, 0.5);-webkit-box-align:center}.taro-video-bar.taro-video-bar-full{left:0}.taro-video-controls{display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:0 8.5px}.taro-video-control-button{-webkit-box-sizing:content-box;box-sizing:content-box;margin-left:-8.5px;padding:14.5px 12.5px;width:13px;height:15px}.taro-video-control-button::after{display:block;width:100%;height:100%;background-repeat:no-repeat;background-position:50% 50%;background-size:100%;content:""}.taro-video-control-button.taro-video-control-button-play::after,.taro-video-cover-play-button{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAeCAYAAAAy2w7YAAAAAXNSR0IArs4c6QAAAWhJREFUSA1j+P///0cgBoHjQGzCQCsAtgJB/AMy5wCxGNXtQ9iBwvoA5BUCMQvVLEQxHpNzDSjkRhXLMM3GKrIeKKpEkYVYjcUu+AMo3ALE3GRZiN1MvKKPgbIRJFuG10j8koeA0gZEW4jfLIKyf4EqpgOxMEELCRpFnIJ3QGU5QMyM00LizCFa1SWgSkeslhFtBGkKVwGVy6FYSJp+klR/A6quB2JOkIWMIK0oNlOf8xBoZDE9LAI7nYn6HsBq4l96WHQEaLUpAyiOaASeAM2NgvuPBpaACt82IEYtfKls0UagecpwXyAzqGTRdaA57sjmYrAptAjUsCkGYlYMg9EFyLQI1IiZB8Ti6Obh5JNh0QmgHlOcBuKSIMGi50C18UDMiMssvOJEWPQLqKYbiHnxGkRIkoBF24DyaoTMIEoeh0W3geI+RBlArCI0iz4D+RVAzEasfqLVAQ19AcSg5LoYiKWI1kiiQgCMBLnEEcfDSgAAAABJRU5ErkJggg==")}.taro-video-control-button.taro-video-control-button-pause::after{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAAAXNSR0IArs4c6QAAAFlJREFUSA3tksEKACAIQ7X//5zq98wOgQayum8QaGweHhMzG/6OujzKAymn+0LMqivu1XznWmX8/echTIyMyAgTwA72iIwwAexgj8gIE8CO3aMRbDPMaEy5BRGaKcZv8YxRAAAAAElFTkSuQmCC")}.taro-video-current-time,.taro-video-duration{margin-top:15px;margin-bottom:14.5px;height:14.5px;line-height:14.5px;font-size:12px;color:#cbcbcb}.taro-video-progress-container{position:relative;-ms-flex-positive:2;flex-grow:2;-webkit-box-flex:2}.taro-video-progress{position:relative;margin:21px 12px;height:2px;background-color:rgba(255, 255, 255, 0.4)}.taro-video-progress-buffered{position:absolute;left:0;top:0;width:0;height:100%;background-color:rgba(255, 255, 255, 0.8);-webkit-transition:width 0.1s;transition:width 0.1s}.taro-video-ball{position:absolute;left:0;top:-21px;-webkit-box-sizing:content-box;box-sizing:content-box;margin-left:-22px;padding:14px;width:16px;height:16px}.taro-video-inner{border-radius:50%;width:100%;height:100%;background-color:#fff}.taro-video-danmu-button{margin:0 8.5px;padding:2px 10px;border:1px solid #fff;border-radius:5px;line-height:1;font-size:13px;color:#fff;white-space:nowrap}.taro-video-danmu-button.taro-video-danmu-button-active{border-color:#48c23d;color:#48c23d}.taro-video-fullscreen,.taro-video-mute{-webkit-box-sizing:content-box;box-sizing:content-box;padding:8.5px;width:17px;height:17px;background-repeat:no-repeat;background-position:50% 50%;background-size:50%}.taro-video-fullscreen{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAhUlEQVRYR+2WSwrAMAhEnZO3PfmULLooGEFTiIXJ2s/kRY2wzQeb85sE9CRA8jSzY1YfAFzhJBnU1AVgxH2dSiArCnD9QgGzRNnOech48SRABHoSyFb5in3PSbhyo6yvCPQkEM3u7BsPe/0FIvBfAh/vhKmVbO9SWun1qk/PSVi9TcVPBG6R1YIhgWwNpQAAAABJRU5ErkJggg==")}.taro-video-fullscreen.taro-video-type-fullscreen{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+2Xu0pDURBF1/ZLxNcHKNiIlfhA7C0UBSEE8RNEBNFPUEQEEbGxFiSSSrCwEHsf5E/ccsSUuWfUhKQ40947+y42Z8+ZK/pcinzf9hhwD1xJ2q/qsb0JHAOzkl5y+lGAGnCWICQtZgAS6DxQk3TeLYA6cAo0JSXxjmW7CcwBdUkJurKiDhSA4kBvHbA9CqwBQx2O7BSw8ssU3ALPFRF4knT3nQLbr8B4LjLBOdAAFgJaLUkjbYC9n+zm+i4kXWbmwCqwnRMCHiXthuZAQOzPrxSA4kBxYDAcsH0EzATCfCLpJjOINoCtgFZabg7bk7AFDAeaGpKWgitZTu5N0kQbYBmYrujo9mX0CVxL+gidAdu9vY5zXhWA4sAgOND3X7NJ4AHYCaxkB8B62gslvecSFpoDOZH/PP8Cnt7hIaM5xCEAAAAASUVORK5CYII=")}.taro-video-mute{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTFUMTA6MTg6MjArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk3YmE4Yjg0LTFhNTYtNGM1MS04NDVkLTNiZmYyMGI0ZDc0ZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjg1NGQ3MjlkLWUwNjctZjU0OC1hMTlhLTBlZjQ4OGRkYjJiOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjA1ODY3ZDFlLWQ3NGEtNDgyNC04MDU3LTYzYmRmMTdjODk5ZSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDU4NjdkMWUtZDc0YS00ODI0LTgwNTctNjNiZGYxN2M4OTllIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjE4OjIwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OTdiYThiODQtMWE1Ni00YzUxLTg0NWQtM2JmZjIwYjRkNzRmIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjIyOjIyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz459+FoAAABqElEQVRYhc2XPWsVQRSGnxPjF4oGRfxoRQKGWCU2Ft7CykrQWosEyf/If0hhIPgHDEmbNJZqCFxiQEgTUGxsBUVEHgvnyrjZZJO92V1fGIaZnTPvszPszNlQ6VIjnbr/DwCoDLMNak/dUVfUK0f2rQugnlcX/FevWgFQH6gf3autRgHUC+piiXHzAOmtPx9gXgug8itQx9SXwDpw47AGKXZWvXvQmNFCwE3gCXA2dY0Az4GrRzHONA9cU/vAbERsllEOyh31e8USV2mrMPdG9uyn+rDom2/BHHCm5puWKiKmgdtAnz+rvaxO5mNygEvHaZ5BfADuARvAaWBpP4DGFBHfgBngFzClTrUKkCDeA+9S837rAEnbqb7VFcCpVJ/oCmCw959aB1AfAROpudYqgDoOLKRmPyLelAF8bcD4pPoMeAtcB34AT4uDBqXXwFG8XXUU/72MIuK1OgE8Bs6l7mEvo8up7lN1Ge0n9aK6VHMFZvJTr9S3CiALaCQhqZOSvegMIAvu2UVSWpigLC1fbQ0gm6in7qpfLCQbhwGIYcyPQ53/G3YO8BtUtd35bvKcVwAAAABJRU5ErkJggg==")}.taro-video-mute.taro-video-type-mute{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDQtMTFUMTA6MTk6MDMrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzYjJmNjE2LTZmZTUtNDJjNC1iNTgwLTczNzZjZjI2NzdmNSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjYzZjQ2NTYzLWE0ZjktOGQ0Mi1hM2FhLTY3ODJhNDBhYWNjMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjIyYWNjMWFlLTg4ZmMtNDBlZi1iMWM1LTNmODgwY2QzYWI2MiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MjJhY2MxYWUtODhmYy00MGVmLWIxYzUtM2Y4ODBjZDNhYjYyIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjE5OjAzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDNiMmY2MTYtNmZlNS00MmM0LWI1ODAtNzM3NmNmMjY3N2Y1IiBzdEV2dDp3aGVuPSIyMDE5LTA0LTExVDEwOjIyOjMzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5PmxYVAAACLklEQVRYhc2XP2sVQRRHz40hKoqaQgVBCy1EozFlGiVFxMLGh4piYWEh+hkEP4YKAVFEEFTyughaCH6DqIVpAhYWEgIxoJE8cywyi5tNHu/tJmvyg2WZO3dmzt47/zZUtoJ6Nhsg09YDiYhKDzACTAFNYH9lEpUq80TdrT5wpV5n/ZV9KoGoo+pXV2uyKkipOaLuUceAt8DhUvQd1FsCYhR4ChzaSIBMHSOi7lOfsByFWiCgEBH1GHAF2JlMPcBt4GC3HUYEaj9wF3gVEVPtfNVTwAXgWX7CDKq/1piAZTSZBmim8qJ6sQ3EgDqb/L7kU3MH2NHtl3dQX3r3Ak21UYAYAj4A/cl0JB+RF+uMRj4iQ+p8zt7KYFLdXKHuRi0gacBhV6a6pd5bA6KRNagFJPU9qv5u47toLmW1HnoR8Q5oAK1CVQu4FBHj/wUkaXsb+4pzpVaQFPqXrN7Be4Fx9VztIOr1BLEtmX4A94E/qdwHTKjDWYM6lu81dSlnn3V570BtuLxaMs2rZ/IgYxsBovaoPwsQA4VoFWEm8ql5DiysNyURsQTMpOIMcDYiPhd8xoGr/FtNC2G6FKXD6ihwGdiVHMoeeh8jYlA9ANwE3kTEp3bO6vE03qOONzR1r/q4RGrquaFFxFxE3ALOA9+6jExpdb180y55AhirhaRTatq0GXEzL8+ZIuI9cBJ4WKiartJf9nWV/mty7UfUafW7erpqRGI9EBuprffvu9n6C1KOmsqwI5A1AAAAAElFTkSuQmCC")}.taro-video-danmu{overflow:visible;position:absolute;left:0;top:0;bottom:0;margin-top:14px;margin-bottom:44px;width:100%;line-height:14px;font-size:14px}.taro-video-danmu-item{position:absolute;left:100%;line-height:1;color:#fff;white-space:nowrap;-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition-property:left, -webkit-transform;transition-property:left, -webkit-transform;transition-property:left, transform;transition-property:left, transform, -webkit-transform;-webkit-transition-duration:3s;transition-duration:3s;-webkit-transition-timing-function:linear;transition-timing-function:linear}.taro-video-toast{display:block;visibility:hidden;position:absolute;left:50%;top:50%;border-radius:5px;background-color:rgba(255, 255, 255, 0.8);pointer-events:none;color:#000;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.taro-video-toast.taro-video-toast-volume{display:block;width:100px;height:100px}.taro-video-toast-volume .taro-video-toast-title{display:block;margin-top:10px;width:100%;line-height:16px;text-align:center;font-size:12px}.taro-video-toast-volume .taro-video-toast-icon{display:block;margin-left:25%;width:50%;height:50%;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFhklEQVR4Xu2aeaxfQxTHP1VBES0NIQitWtpaaxeCUkQtaYVa0tiClAq1ExIiQTVppaWxt8RWSa2tWkJQRGgtQaSIpUKEpG0ssbbk28yV2+mZO/e9e3vvu/e98897mZnfzPl+75mZs0wvurn06ub46SGgxwLqZaA3sB/wO/A+8G/V6tS5BU4BJgJbO9DvAMOB36okoQ4CNgAeBEYbQK8Bbm4zAdsBc4EdAyA/APZoKwHHAA8DG2UA/AnYrG0ErAVcD1yXA9gfQJ8c40obsqbPgH7AY8CROTVuFQFD3X7fJid4DWsNAWOAGZ0w58YTsDZwKzChA189PbTRBGwKzAYO6iT4srbAMHfTfAksjulS1iG4JzAH2Dy2YKS/qAVcCdzi1vgZOBZ4PWvNGAG6wgYCW0IwctzNmf06BcEXtYABwOeA4otEfgEOdnGGqV6IAAUopwM6zDYuAVjeKYpYwCjgCWOhH513+b2lhE+Avrj89NPyalzyuCIE6EN9BfQ1dHoPOAD40+9LE6D/5aoqSqtLsgiQC60DTiHzfGCFoaSsQAexZdlTgEuyCDgLuK8u5G7dEAHyKN8CBrtxLwDHAX8Z+l4N3GS0L3db4aN0X5opmc+2XZQAfb2LPd2eciG1lUSRJZ9qYHkZONwiYAjwSc3gs24BXWWWfzEVuMjQez13HljX8v7A28lvEgsInaBVcxLaAvr6sgJLtBWeNTrOB+4w2p8DRvoEnAPcXTVaY70QAbrbXwIONX7zBSAL/tvrk1+iviTllnRry2irr/QSEws4D7izCxMg1XQLLAQGGXpeCkw22kOWI49RMUujCJC+uwAfGtfcImAng4AtAMsBeg04pIkESOfbgQsMsNoGnxrtSrfv7rXrSlwXWN6kLZBgEBiB8iWUUZZPIN/AF1nMoiYSICDfAlt5iB4CxhpAzwXuMtqPBuY1lYB5wFEeqFeAwwyguvIUqvuiQO/xphJwP3Cmhyh0EKrOoGDIF7n+M5pKwEwXrqdBCaQSM77Ig7SSIicDs5pKwIvACA+pzFwZIF9OlKm36QyQV7jEqDDJk5VD58uFgGIGX1Se+6yJFqAKsqI6X84GdDb4Mh0Y5zUqjFYFakUTCXja5QLSmBQHbAL8ahAgT1AeYVreSKLLphGwF/CuAfLJQLldGSTFD75c5d4mNCoWyAqG9gYWGED1AOMKo12ZbiWA/idA++deY2DVTZ0Jh5UJPsFQtD/wDaAHGWl5EzgwaUi2gK4UXS11S0cTIjrMFBtYQdAk4DID0BnAAz4B6wNLgTKKG0VIDBHwqitwpOcW+OOB540FdeipNKbUWFrUtn06o5xOij4KyDuqU0IE3Obl/rLA63pTzm9XA8jKACjdniZAaSKFmUpB1yUhAlTsUEpMh913wEkuTe7rKTzPAHqO44vpKPkFhH3cWWBVV6ogJVYZUgz/tXtIYelzI3Ct0fExIGx6j7iKWBUUveyYBehv1RIjIEsfqziq8Xp4pSBJOYTVJFQcVY3wCFeKUjVGyYfQWB00+5bEVBECrNS+qsOKBpVHNCVWHs+LS7H5PV5pOu9v0+OKEOAXR39w1e1C7wM6AkJ1eLmkRcrpRQiQrqobXO5S3vL3/4kBKMsCknV0k+iasVLUMV3UX5SAPGtED8EOT+L9YENnCasUIXNO2goChFWHqAIRyxXN4qI1BCQg9dJESYq8LnbrCBAR8t50Lig6i0krCRBoVWhVlt45wkBrCRBuRZyPuAguxIPe9lXqhpd9DcZMXOvdkPF0Xu/8dohNUmZ/1QQkuitXr+d4fryuFx3jywQYm6suAqSX8vLTXKJDt4QqO6rtLYspXWZ/nQQkOJTAUJZGIav19q9MvKvN1RUIWKMAY5P3EBBjqO393d4C/gMVHwRQlpx21QAAAABJRU5ErkJggg==");background-repeat:no-repeat;background-position:50% 50%;background-size:50%;fill:#000}.taro-video-toast-volume .taro-video-toast-value{margin-left:10px;margin-top:5px;width:80px;height:5px}.taro-video-toast-volume .taro-video-toast-value>.taro-video-toast-value-content{overflow:hidden}.taro-video-toast-volume-grids{width:80px;height:5px}.taro-video-toast-volume-grids-item{float:left;width:7.1px;height:5px;background-color:#000}.taro-video-toast-volume-grids-item:not(:first-child){margin-left:1px}.taro-video-toast.taro-video-toast-progress{padding:6px;background-color:rgba(0, 0, 0, 0.8);line-height:18px;font-size:14px;color:#fff}';
      var __awaiter = function (R, I, C, O) {
          function a(R) {
            return R instanceof C
              ? R
              : new C(function (I) {
                  I(R);
                });
          }
          return new (C || (C = Promise))(function (C, w) {
            function s(R) {
              try {
                l(O.next(R));
              } catch (R) {
                w(R);
              }
            }
            function o(R) {
              try {
                l(O.throw(R));
              } catch (R) {
                w(R);
              }
            }
            function l(R) {
              R.done ? C(R.value) : a(R.value).then(s, o);
            }
            l((O = O.apply(R, I || [])).next());
          });
        },
        U = (function () {
          function e(R) {
            Object(O.g)(this, R),
              (this.list = []),
              (this.danmuElList = []),
              (this.currentTime = 0),
              (this.enable = !1),
              (this.danmuList = []);
          }
          return (
            (e.prototype.ensureProperties = function (R) {
              var I = Object.assign({}, R);
              return (
                'time' in R || (I.time = this.currentTime),
                (I.key = Math.random()),
                (I.bottom = 90 * Math.random() + 5 + '%'),
                I
              );
            }),
            (e.prototype.sendDanmu = function (R) {
              return (
                void 0 === R && (R = []),
                __awaiter(this, void 0, void 0, function () {
                  var I,
                    C = this;
                  return __generator(this, function (O) {
                    return (
                      Array.isArray(R)
                        ? (this.list = __spreadArray(
                            __spreadArray([], this.list),
                            R.map(function (R) {
                              return C.ensureProperties(R);
                            })
                          ))
                        : ((I = R),
                          (this.list = __spreadArray(__spreadArray([], this.list), [
                            Object.assign({}, this.ensureProperties(I)),
                          ]))),
                      [2]
                    );
                  });
                })
              );
            }),
            (e.prototype.tick = function (R) {
              return __awaiter(this, void 0, void 0, function () {
                var I, C, O;
                return __generator(this, function (w) {
                  return (
                    (this.currentTime = R),
                    this.enable
                      ? ((I = this.list),
                        (C = I.filter(function (I) {
                          var C = I.time;
                          return R - C < 4 && R > C;
                        })),
                        !1,
                        (O = this.danmuList),
                        (C.length !== O.length ||
                          C.some(function (R) {
                            var I = R.key;
                            return O.every(function (R) {
                              return I !== R.key;
                            });
                          })) &&
                          (this.danmuList = C),
                        [2])
                      : [2]
                  );
                });
              });
            }),
            (e.prototype.componentDidUpdate = function () {
              var R = this;
              requestAnimationFrame(function () {
                setTimeout(function () {
                  R.danmuElList.splice(0).forEach(function (R) {
                    (R.style.left = '0'),
                      (R.style.webkitTransform = 'translateX(-100%)'),
                      (R.style.transform = 'translateX(-100%)');
                  });
                });
              });
            }),
            (e.prototype.render = function () {
              var R = this;
              return this.enable
                ? Object(O.e)(
                    O.a,
                    { class: 'taro-video-danmu' },
                    this.danmuList.map(function (I) {
                      var C = I.text,
                        w = I.color,
                        _ = I.bottom,
                        x = I.key;
                      return Object(O.e)(
                        'p',
                        {
                          class: 'taro-video-danmu-item',
                          key: x,
                          style: { color: w, bottom: _ },
                          ref: function (I) {
                            I && R.danmuElList.push(I);
                          },
                        },
                        C
                      );
                    })
                  )
                : '';
            }),
            e
          );
        })();
    },
    129: function (R, I, C) {
      'use strict';
      (function (R) {
        C.d(I, 'a', function () {
          return createCommonjsModule;
        }),
          C.d(I, 'b', function () {
            return O;
          }),
          C.d(I, 'c', function () {
            return w;
          }),
          C.d(I, 'd', function () {
            return getDefaultExportFromCjs;
          });
        var O =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : void 0 !== R
            ? R
            : 'undefined' != typeof self
            ? self
            : {};
        function getDefaultExportFromCjs(R) {
          return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, 'default') ? R.default : R;
        }
        function createCommonjsModule(R, I, C) {
          return (
            R(
              (C = {
                path: I,
                exports: {},
                require: function (R, I) {
                  return (function commonjsRequire() {
                    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
                  })();
                },
              }),
              C.exports
            ),
            C.exports
          );
        }
        var w = createCommonjsModule(function (R) {
          !(function () {
            var I = {}.hasOwnProperty;
            function r() {
              for (var R = [], C = 0; C < arguments.length; C++) {
                var O = arguments[C];
                if (O) {
                  var w = typeof O;
                  if ('string' === w || 'number' === w) R.push(O);
                  else if (Array.isArray(O)) {
                    if (O.length) {
                      var _ = r.apply(null, O);
                      _ && R.push(_);
                    }
                  } else if ('object' === w)
                    if (O.toString === Object.prototype.toString) for (var x in O) I.call(O, x) && O[x] && R.push(x);
                    else R.push(O.toString());
                }
              }
              return R.join(' ');
            }
            R.exports ? ((r.default = r), (R.exports = r)) : (window.classNames = r);
          })();
        });
      }.call(this, C(42)));
    },
    140: function (R, I, C) {
      'use strict';
      function throttle(R, I, C) {
        void 0 === I && (I = 250);
        var O,
          w = 0;
        return function () {
          for (var _ = [], x = 0; x < arguments.length; x++) _[x] = arguments[x];
          var P = C || this,
            F = Date.now();
          F - w > I
            ? (R.apply(this, _), (w = F))
            : (clearTimeout(O),
              (O = setTimeout(function () {
                (w = F), R.apply(P, _);
              }, I)));
        };
      }
      function debounce(R, I, C) {
        var O;
        return (
          void 0 === I && (I = 250),
          function () {
            for (var w = [], _ = 0; _ < arguments.length; _++) w[_] = arguments[_];
            var x = C || this;
            clearTimeout(O),
              (O = setTimeout(function () {
                R.apply(x, w);
              }, I));
          }
        );
      }
      C.d(I, 'a', function () {
        return debounce;
      }),
        C.d(I, 'b', function () {
          return throttle;
        });
    },
  },
]);
