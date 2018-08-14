webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Meteor {
    constructor(ctx, x, h) {
        this.ctx = ctx
        this.x = x
        this.y = 0
        this.h = h
        this.vx = -(4 + Math.random() * 4)
        this.vy = -this.vx
        this.len = Math.random() * 300 + 500
    }

    flow() {
        //判定流星出界
        if (this.x < -this.len || this.y > this.h + this.len) {
            return false
        }
        this.x += this.vx
        this.y += this.vy
        return true
    }

    draw() {
        let ctx = this.ctx,
            //径向渐变，从流星头尾圆心，半径越大，透明度越高
            gra = ctx.createRadialGradient(
                this.x, this.y, 0, this.x, this.y, this.len)

        const PI = Math.PI
        gra.addColorStop(0, 'rgba(255,255,255,1)')
        gra.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.save()
        ctx.fillStyle = gra
        ctx.beginPath()
        //流星头，二分之一圆
        ctx.arc(this.x, this.y, 1, PI / 4, 5 * PI / 4)
        //绘制流星尾，三角形
        ctx.lineTo(this.x + this.len, this.y - this.len)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Meteor;


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Moon {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height
    }

    draw() {
        let ctx = this.ctx,
            gradient = ctx.createRadialGradient(
            300, 200, 80, 200, 200, 800)
        //径向渐变
        gradient.addColorStop(0, 'rgb(255,255,255)')
        gradient.addColorStop(0.01, 'rgb(70,70,80)')
        gradient.addColorStop(0.2, 'rgb(40,40,50)')
        gradient.addColorStop(0.4, 'rgb(20,20,30)')
        gradient.addColorStop(1, 'rgb(0,0,10)')
        ctx.save()
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, this.width, this.height)
        ctx.restore()
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Moon;


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Stars {
    constructor(ctx, width, height, amount) {
        this.ctx = ctx
        this.width = width
        this.height = height
        this.stars = this.getStars(amount)
    }

    getStars(amount) {
        let stars = []
        while (amount--) {
            stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                r: Math.random() + 0.2
            })
        }
        return stars
    }

    draw() {
        let ctx = this.ctx
        ctx.save()
        ctx.fillStyle = 'white'
        this.stars.forEach(star=> {
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI)
            ctx.fill()
        })
        ctx.restore()
    }

    //闪烁，星星半径每隔10帧随机变大或变小
    blink() {
        this.stars = this.stars.map(star=> {
            let sign = Math.random() > 0.5 ? 1 : -1
            star.r += sign * 0.2
            if (star.r < 0) {
                star.r = -star.r
            } else if (star.r > 1) {
                star.r -= 0.2
            }
            return star
        })

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Stars;


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(86)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  "data-v-1f6f7918",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(88)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(49),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  "data-v-b4c4f818",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(87)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  "data-v-3b8ea682",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(85)

var Component = __webpack_require__(14)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  "data-v-0d459f51",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_StyleEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_reset_css__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_reset_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_js_Stars__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_js_Moon__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_js_Meteor__ = __webpack_require__(101);












/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app",
  components: {
    StyleEditor: __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor___default.a,
    ResumeEditor: __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor___default.a
  },
  data: function data() {
    return {
      interval: 20,
      currentStyle: "",
      enableHtml: false,
      fullStyle: [fullStyle_0, fullStyle_1, fullStyle_2],
      currentMarkdown: "",
      fullMarkdown: resume
    };
  },
  created: function created() {
    this.makeResume();
  },

  methods: {
    makeResume: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.progressivelyShowStyle(0);

              case 2:
                _context.next = 4;
                return this.progressivelyShowResume();

              case 4:
                _context.next = 6;
                return this.progressivelyShowStyle(1);

              case 6:
                _context.next = 8;
                return this.showHtml();

              case 8:
                _context.next = 10;
                return this.progressivelyShowStyle(2);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function makeResume() {
        return _ref.apply(this, arguments);
      }

      return makeResume;
    }(),
    showHtml: function showHtml() {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this.enableHtml = true;
        resolve();
      });
    },
    progressivelyShowStyle: function progressivelyShowStyle(n) {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var interval = _this2.interval;
        var showStyle = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
          var _this3 = this;

          var style, length, prefixLength, l, char;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  style = this.fullStyle[n];

                  if (style) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return");

                case 3:
                  length = this.fullStyle.filter(function (_, index) {
                    return index <= n;
                  }).map(function (item) {
                    return item.length;
                  }).reduce(function (p, c) {
                    return p + c;
                  }, 0);
                  prefixLength = length - style.length;

                  if (this.currentStyle.length < length) {
                    l = this.currentStyle.length - prefixLength;
                    char = style.substring(l, l + 1) || " ";

                    this.currentStyle += char;
                    if (style.substring(l - 1, l) === "\n" && this.$refs.styleEditor) {
                      this.$nextTick(function () {
                        _this3.$refs.styleEditor.goBottom();
                      });
                    }
                    setTimeout(showStyle, interval);
                  } else {
                    resolve();
                  }

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })).bind(_this2);
        showStyle();
      });
    },
    progressivelyShowResume: function progressivelyShowResume() {
      var _this4 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var length = _this4.fullMarkdown.length;
        var interval = _this4.interval;
        var showResume = function showResume() {
          if (_this4.currentMarkdown.length < length) {
            _this4.currentMarkdown = _this4.fullMarkdown.substring(0, _this4.currentMarkdown.length + 1);
            var lastChar = _this4.currentMarkdown[_this4.currentMarkdown.length - 1];
            var prevChar = _this4.currentMarkdown[_this4.currentMarkdown.length - 2];
            if (prevChar === "\n" && _this4.$refs.resumeEditor) {
              _this4.$nextTick(function () {
                return _this4.$refs.resumeEditor.goBottom();
              });
            }
            setTimeout(showResume, interval);
          } else {
            resolve();
          }
        };
        showResume();
      });
    }
  },
  mounted: function mounted() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        moon = new __WEBPACK_IMPORTED_MODULE_7__static_js_Moon__["a" /* default */](ctx, width, height),
        stars = new __WEBPACK_IMPORTED_MODULE_6__static_js_Stars__["a" /* default */](ctx, width, height, 200),
        meteors = [],
        count = 0;

    canvas.width = width;
    canvas.height = height;

    var meteorGenerator = function meteorGenerator() {
      var x = Math.random() * width + 800;
      meteors.push(new __WEBPACK_IMPORTED_MODULE_8__static_js_Meteor__["a" /* default */](ctx, x, height));

      setTimeout(function () {
        meteorGenerator();
      }, Math.random() * 2000);
    };

    var frame = function frame() {
      count++;
      count % 10 == 0 && stars.blink();

      moon.draw();
      stars.draw();

      meteors.forEach(function (meteor, index, arr) {
        if (meteor.flow()) {
          meteor.draw();
        } else {
          arr.splice(index, 1);
        }
      });
      requestAnimationFrame(frame);
    };

    meteorGenerator();
    frame();
  }
});

var fullStyle_0 = "\n\n\n/* \u5148\u8BBE\u7F6E\u4E0B\u5B57\u4F53 */\n.styleEditor {\n  color: white;\n}\n/*\n* \n* \u4F60\u597D\uFF0C\u6211\u662F\u5F20\u601D\u50B2\n* \u4E0B\u9762\u5F00\u59CB\u6F14\u793A\u6211\u7684\u7B80\u5386\uFF01\n*/\n\n/* \u9996\u5148\u7ED9\u6240\u6709\u5143\u7D20\u52A0\u4E0A\u8FC7\u6E21\u6548\u679C*/\n* {\n  transition: all .3s;\n}\n\n/* \u6587\u5B57\u79BB\u8FB9\u6846\u592A\u8FD1\u4E86 */\n.styleEditor {\n   color: white;\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n\n/* \u4EE3\u7801\u9AD8\u4EAE */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* \u52A0\u70B9 3D \u6548\u679C\u5457 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* \u63A5\u4E0B\u6765\u6211\u7ED9\u81EA\u5DF1\u51C6\u5907\u4E00\u4E2A\u7F16\u8F91\u5668 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: black;\n  overflow: auto;\n}\n/* \u597D\u4E86\uFF0C\u6211\u5F00\u59CB\u5199\u7B80\u5386\u4E86 */\n\n";

var fullStyle_1 = "\n/* \u8FD9\u4E2A\u7B80\u5386\u597D\u50CF\u5DEE\u70B9\u4EC0\u4E48\n * \u5BF9\u4E86\uFF0C\u8FD9\u662F Markdown \u683C\u5F0F\u7684\uFF0C\u6211\u9700\u8981\u53D8\u6210\u5BF9 HR \u66F4\u53CB\u597D\u7684\u683C\u5F0F\n * \u7B80\u5355\uFF0C\u7528\u5F00\u6E90\u5DE5\u5177\u7FFB\u8BD1\u6210 HTML \u5C31\u884C\u4E86\n */\n";
var fullStyle_2 = "\n/* \u518D\u5BF9 HTML \u52A0\u70B9\u6837\u5F0F */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: '\u2022';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, \".\") \" \";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n";
var resume = "\u5F20\u601D\u50B2\n----\n\njava\u540E\u53F0\u7814\u53D1\u5DE5\u7A0B\u5E08\u3002\n\n* \u8054\u7CFB\u65B9\u5F0F\n* \u624B\u673A\uFF1A18092371340\n* Email\uFF1Azhangsaio1314@126.com\n* QQ/\u5FAE\u4FE1\u53F7\uFF1A229289020\n\n\u6280\u80FD\n----\n* \u540E\u7AEF\uFF1Aspring springBoot springCloud mybatis hibernate \n* \u524D\u7AEF\uFF1Avue angular\n* \u5176\u4ED6\uFF1A\n\n\u5DE5\u4F5C\u7ECF\u5386\n----\n1.\u5317\u4EAC\u5B89\u5B8F\u777F\u4E1A\u79D1\u6280\u6709\u9650\u516C\u53F8\n\n\u53CB\u60C5\u94FE\u63A5\n----\n\n* [GitHub](https://github.com/RefinedAll)\n* [\u7801\u4E91](https://gitee.com/aflsz)\n\n";

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_StyleEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_reset_css__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_reset_css__);









/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app",
  components: {
    StyleEditor: __WEBPACK_IMPORTED_MODULE_3__components_StyleEditor___default.a,
    ResumeEditor: __WEBPACK_IMPORTED_MODULE_4__components_ResumeEditor___default.a
  },
  data: function data() {
    return {
      interval: 20,
      currentStyle: "",
      enableHtml: false,
      fullStyle: ["\n/*\n* \u4F60\u597D\uFF0C\u6211\u662F\u5F20\u601D\u50B2\n* \u4E0B\u9762\u5F00\u59CB\u6F14\u793A\u6211\u7684\u7B80\u5386\uFF01\n*/\n\n/* \u9996\u5148\u7ED9\u6240\u6709\u5143\u7D20\u52A0\u4E0A\u8FC7\u6E21\u6548\u679C */\n* {\n  transition: all .3s;\n}\n/* \u767D\u8272\u80CC\u666F\u592A\u5355\u8C03\u4E86\uFF0C\u6211\u4EEC\u6765\u70B9\u80CC\u666F */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* \u6587\u5B57\u79BB\u8FB9\u6846\u592A\u8FD1\u4E86 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* \u592A\u9AD8\u4E86 */\n.styleEditor {\n  height: 45vh;\n}\n/* \u4EE3\u7801\u9AD8\u4EAE */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* \u52A0\u70B9 3D \u6548\u679C\u5457 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* \u63A5\u4E0B\u6765\u6211\u7ED9\u81EA\u5DF1\u51C6\u5907\u4E00\u4E2A\u7F16\u8F91\u5668 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* \u597D\u4E86\uFF0C\u6211\u5F00\u59CB\u5199\u7B80\u5386\u4E86 */\n\n\n", "\n/* \u8FD9\u4E2A\u7B80\u5386\u597D\u50CF\u5DEE\u70B9\u4EC0\u4E48\n * \u5BF9\u4E86\uFF0C\u8FD9\u662F Markdown \u683C\u5F0F\u7684\uFF0C\u6211\u9700\u8981\u53D8\u6210\u5BF9 HR \u66F4\u53CB\u597D\u7684\u683C\u5F0F\n * \u7B80\u5355\uFF0C\u7528\u5F00\u6E90\u5DE5\u5177\u7FFB\u8BD1\u6210 HTML \u5C31\u884C\u4E86\n */\n", "\n/* \u518D\u5BF9 HTML \u52A0\u70B9\u6837\u5F0F */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: '\u2022';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, \".\") \" \";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n"],
      currentMarkdown: "",
      fullMarkdown: "\u5F20\u601D\u50B2\n----\n\njava\u540E\u53F0\u7814\u53D1\u5DE5\u7A0B\u5E08\u3002\n\n* \u8054\u7CFB\u65B9\u5F0F\n* \u624B\u673A\uFF1A18092371340\n* Email\uFF1Azhangsaio1314@126.com\n* QQ/\u5FAE\u4FE1\u53F7\uFF1A229289020\n\n\u6280\u80FD\n----\n* \u540E\u7AEF\uFF1Aspring springBoot springCloud mybatis hibernate \n* \u524D\u7AEF\uFF1Avue angular\n* \u5176\u4ED6\uFF1A\n\n\u5DE5\u4F5C\u7ECF\u5386\n----\n1.\u5317\u4EAC\u5B89\u5B8F\u777F\u4E1A\u79D1\u6280\u6709\u9650\u516C\u53F8\n\n\u53CB\u60C5\u94FE\u63A5\n----\n\n* [GitHub](https://github.com/RefinedAll)\n* [\u7801\u4E91](https://gitee.com/aflsz)\n\n"
    };
  },
  created: function created() {
    this.makeResume();
  },


  methods: {
    makeResume: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.progressivelyShowStyle(0);

              case 2:
                _context.next = 4;
                return this.progressivelyShowResume();

              case 4:
                _context.next = 6;
                return this.progressivelyShowStyle(1);

              case 6:
                _context.next = 8;
                return this.showHtml();

              case 8:
                _context.next = 10;
                return this.progressivelyShowStyle(2);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function makeResume() {
        return _ref.apply(this, arguments);
      }

      return makeResume;
    }(),
    showHtml: function showHtml() {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this.enableHtml = true;
        _this.$nextTick(function () {
          _this.$refs.resumeEditor.goTop();
        });
        resolve();
      });
    },
    progressivelyShowStyle: function progressivelyShowStyle(n) {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var interval = _this2.interval;
        var showStyle = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
          var _this3 = this;

          var style, length, prefixLength, l, char;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  style = this.fullStyle[n];

                  if (style) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return");

                case 3:
                  length = this.fullStyle.filter(function (_, index) {
                    return index <= n;
                  }).map(function (item) {
                    return item.length;
                  }).reduce(function (p, c) {
                    return p + c;
                  }, 0);
                  prefixLength = length - style.length;

                  if (this.currentStyle.length < length) {
                    l = this.currentStyle.length - prefixLength;
                    char = style.substring(l, l + 1) || " ";

                    this.currentStyle += char;
                    if (style.substring(l - 1, l) === "\n" && this.$refs.styleEditor) {
                      this.$nextTick(function () {
                        _this3.$refs.styleEditor.goBottom();
                      });
                    }
                    setTimeout(showStyle, interval);
                  } else {
                    resolve();
                  }

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        })).bind(_this2);
        showStyle();
      });
    },
    progressivelyShowResume: function progressivelyShowResume() {
      var _this4 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var length = _this4.fullMarkdown.length;
        var interval = _this4.interval;
        var showResume = function showResume() {
          if (_this4.currentMarkdown.length < length) {
            _this4.currentMarkdown = _this4.fullMarkdown.substring(0, _this4.currentMarkdown.length + 1);
            var lastChar = _this4.currentMarkdown[_this4.currentMarkdown.length - 1];
            var prevChar = _this4.currentMarkdown[_this4.currentMarkdown.length - 2];
            if (prevChar === "\n" && _this4.$refs.resumeEditor) {
              _this4.$nextTick(function () {
                return _this4.$refs.resumeEditor.goBottom();
              });
            }
            setTimeout(showResume, interval);
          } else {
            resolve();
          }
        };
        showResume();
      });
    }
  }
});

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['markdown', 'enableHtml'],
  name: 'ResumeEditor',
  computed: {
    result: function result() {
      return this.enableHtml ? __WEBPACK_IMPORTED_MODULE_0_marked___default()(this.markdown) : this.markdown;
    }
  },
  methods: {
    goBottom: function goBottom() {
      this.$refs.container.scrollTop = 100000;
    },
    goTop: function goTop() {
      this.$refs.container.scrollTop = 0;
    }
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Editor',
  props: ['code'],
  computed: {
    highlightedCode: function highlightedCode() {
      return __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.highlight(this.code, __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.languages.css);
    },
    codeInStyleTag: function codeInStyleTag() {
      return '<style>' + this.code + '</style>';
    }
  },
  methods: {
    goBottom: function goBottom() {
      this.$refs.container.scrollTop = 100000;
    }
  }
});

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mobile__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Mobile__);




new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',

  render: function render(h) {
    return h(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? __WEBPACK_IMPORTED_MODULE_2__Mobile___default.a : __WEBPACK_IMPORTED_MODULE_1__App___default.a);
  }
});

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 88:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('StyleEditor', {
    ref: "styleEditor",
    attrs: {
      "code": _vm.currentStyle
    }
  }), _vm._v(" "), _c('ResumeEditor', {
    ref: "resumeEditor",
    attrs: {
      "markdown": _vm.currentMarkdown,
      "enableHtml": _vm.enableHtml
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "resumeEditor",
    class: {
      htmlMode: _vm.enableHtml
    }
  }, [(_vm.enableHtml) ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.result)
    }
  }) : _c('pre', [_vm._v(_vm._s(_vm.result))])])
},staticRenderFns: []}

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "canvas"
    }
  }), _vm._v(" "), _c('StyleEditor', {
    ref: "styleEditor",
    attrs: {
      "code": _vm.currentStyle
    }
  }), _vm._v(" "), _c('ResumeEditor', {
    ref: "resumeEditor",
    attrs: {
      "markdown": _vm.currentMarkdown,
      "enableHtml": _vm.enableHtml
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "styleEditor"
  }, [_c('div', {
    staticClass: "code",
    domProps: {
      "innerHTML": _vm._s(_vm.codeInStyleTag)
    }
  }), _vm._v(" "), _c('pre', {
    domProps: {
      "innerHTML": _vm._s(_vm.highlightedCode)
    }
  })])
},staticRenderFns: []}

/***/ })

},[50]);
//# sourceMappingURL=app.b3b2750fa8d77f62946d.js.map