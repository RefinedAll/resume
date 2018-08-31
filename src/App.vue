<template>
  <div id="app">
    <canvas id="canvas" class="canvas"></canvas>
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
import StyleEditor from "./components/StyleEditor";
import ResumeEditor from "./components/ResumeEditor";
import "./assets/reset.css";
import Stars from "../static/js/Stars";
import Moon from "../static/js/Moon";
import Meteor from "../static/js/Meteor";

export default {
  name: "app",
  components: {
    StyleEditor,
    ResumeEditor
  },
  data() {
    return {
      interval: 20,
      currentStyle: "",
      enableHtml: false,
      fullStyle: [fullStyle_0, fullStyle_1, fullStyle_2],
      currentMarkdown: "",
      fullMarkdown: resume
    };
  },
  created() {
    this.makeResume();
  },
  methods: {
    makeResume: async function() {
      await this.progressivelyShowStyle(0);
      await this.progressivelyShowResume();
      await this.progressivelyShowStyle(1);
      await this.showHtml();
      await this.progressivelyShowStyle(2);
    },
    showHtml: function() {
      return new Promise((resolve, reject) => {
        this.enableHtml = true;
        resolve();
      });
    },
    progressivelyShowStyle(n) {
      return new Promise((resolve, reject) => {
        let interval = this.interval;
        let showStyle = async function() {
          let style = this.fullStyle[n];
          if (!style) {
            return;
          }
          // 计算前 n 个 style 的字符总数
          let length = this.fullStyle
            .filter((_, index) => index <= n)
            .map(item => item.length)
            .reduce((p, c) => p + c, 0);
          let prefixLength = length - style.length;
          if (this.currentStyle.length < length) {
            let l = this.currentStyle.length - prefixLength;
            let char = style.substring(l, l + 1) || " ";
            this.currentStyle += char;
            if (style.substring(l - 1, l) === "\n" && this.$refs.styleEditor) {
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom();
              });
            }
            setTimeout(showStyle, interval);
          } else {
            resolve();
          }
        }.bind(this);
        showStyle();
      });
    },
    progressivelyShowResume() {
      return new Promise((resolve, reject) => {
        let length = this.fullMarkdown.length;
        let interval = this.interval;
        let showResume = () => {
          if (this.currentMarkdown.length < length) {
            this.currentMarkdown = this.fullMarkdown.substring(
              0,
              this.currentMarkdown.length + 1
            );
            let lastChar = this.currentMarkdown[
              this.currentMarkdown.length - 1
            ];
            let prevChar = this.currentMarkdown[
              this.currentMarkdown.length - 2
            ];
            if (prevChar === "\n" && this.$refs.resumeEditor) {
              this.$nextTick(() => this.$refs.resumeEditor.goBottom());
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
  mounted() {
    let canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      width = window.innerWidth,
      height = window.innerHeight,
      //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
      moon = new Moon(ctx, width, height),
      stars = new Stars(ctx, width, height, 200),
      meteors = [],
      count = 0;

    canvas.width = width;
    canvas.height = height;

    //流星生成函数
    const meteorGenerator = () => {
      //x位置偏移，以免经过月亮
      let x = Math.random() * width + 800;
      meteors.push(new Meteor(ctx, x, height));

      //每隔随机时间，生成新流星
      setTimeout(() => {
        meteorGenerator();
      }, Math.random() * 2000);
    };

    //每一帧动画生成函数
    const frame = () => {
      //每隔10帧星星闪烁一次，节省计算资源
      count++;
      count % 10 == 0 && stars.blink();

      moon.draw();
      stars.draw();

      meteors.forEach((meteor, index, arr) => {
        //如果流星离开视野之内，销毁流星实例，回收内存
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
};

let fullStyle_0 = `


/* 先设置下字体 */
.styleEditor {
  color: white;
}
/*
* 
* 你好，我是张思傲
* 下面开始演示我的简历！
*/

/* 首先给所有元素加上过渡效果*/
* {
  transition: all .3s;
}

/* 文字离边框太近了 */
.styleEditor {
   color: white;
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}

/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: black;
  overflow: auto;
}
/* 好了，我开始写简历了 */

`;

let fullStyle_1 = `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`;
let fullStyle_2 = `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`;
let resume = `张思傲
----

java后台研发工程师。

* 手机：18911431020
* Email：zhangsaio1314@126.com
* QQ/微信号：229289020

技能
----
* 后端：spring springBoot springCloud mybatis hibernate 
* 前端：vue angular
* 其他：

工作经历
----
1.北京安宏睿业科技有限公司
2.北京中软国际

自我评价
----
本人静若处子动如脱兔，责任心强从不中途跑路;
代码洁癖；热爱互联网和新技术，具有极强的快速学习能力。有较强的责任心和较好的抗压能力;
年轻，不将就，做更好的自己！

项目经验 
2017/04 - 2018/02	企业安全生产服务云平台 * [安企平台](aqpt.cn)
	责任描述：负责项目框架的选型与搭建，部分数据库设计，原型设计，部分业务代码的编写。
	项目简介：该项目面向企业，服务于企业安全生产规范化建设。项目后端采用springCloud微服务架构，前端采用Angular2框架。项目分为四大模块:企业平台，政府平台，中介机构平台，运营平台，建立四个平台之间的联系。数据之间交互，统计，大数据可视化等功能。
项目中所用到的技术和框架以及工具：SpringCloud SpringSession SpringBoot SpringBootAdmin Shiro mybatis maven Lombok git swagger2 Druid... 
数据库：mysql redis 
前端框架:搭建时Angular2 目前升级到5（目前前端流行的Angular vue框架自己自学中，能编写代码）
开发工具:IDEA
项目中所用到的技术，工具本人都可以熟练使用

友情链接
----

* [GitHub](https://github.com/RefinedAll)
* [码云](https://gitee.com/aflsz)

`;
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  min-height: 100vh;
}
* {
  box-sizing: border-box;
}
.canvas {
  position: fixed;
  z-index: -1;
}
</style>
