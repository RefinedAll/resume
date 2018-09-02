<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
import StyleEditor from "./components/StyleEditor";
import ResumeEditor from "./components/ResumeEditor";
import "./assets/reset.css";

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
      fullStyle: [
        `
/*
* 你好，我是张思傲
* 下面开始演示我的简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 90vw;
  margin: 2.5vh 5vw;
  height: 90vh;
}
/* 太高了 */
.styleEditor {
  height: 45vh;
}
/* 代码高亮 */
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  transform: rotateX(-10deg) translateZ(-50px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed;
  top: 50%; left: 0;
  padding: .5em;  margin: 2.5vh;
  width: 95vw; height: 45vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`,
        `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`,
        `
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
`
      ],
      currentMarkdown: "",
      fullMarkdown: `张思傲
----

java后台研发工程师。

* 手机：18911431020
* Email：zhangsiao1314@126.com
* QQ/微信号：229289020

技能
----
* spring springBoot springCloud mybatis/mybatisPlus hibernate jhipster maven git 
* vue angular jsp node npm 
* linux基础命令 Docker 

工作经历
----
1.北京安宏睿业科技有限公司

2.北京中软国际

自我评价
----
本人静若处子动如脱兔，责任心强从不中途跑路;

代码洁癖,热爱互联网和新技术，具有极强的快速学习能力。有较强的责任心和较好的抗压能力;
年轻，不将就，做更好的自己！

项目经验 
----
* [企业安全生产服务云平台](http://aqpt.cn)
  
**责任描述**：负责项目框架的选型与搭建，部分数据库设计，原型设计，部分业务代码的编写。

**项目简介**：该项目面向企业，服务于企业安全生产规范化建设。项目后端采用springCloud微服务架构，前端采用Angular2框架。

项目分为四大模块:企业平台，政府平台，中介机构平台，运营平台，建立四个平台之间的联系。数据之间交互，统计，大数据可视化等功能。

项目中所用到的技术和框架以及工具：SpringCloud SpringSession SpringBoot SpringBootAdmin Shiro mybatis maven Lombok git swagger2 Druid... 

**数据库**：mysql redis 

**前端框架**:搭建时Angular2 目前升级到5

**开发工具**:IDEA


* [嘉晨车队管理系统](http://106.14.119.96:8084)

**责任描述**：BUG修复，代码整理重构，新功能代码编写。项目打包部署到服务器

**项目简介**：该项目是一个车联网项目。一款用于车辆数据呈现的 web 页面，主要包含前端界面与后端服务器，车辆数据包括车辆的基本 信息数据，运行数据，参数数据，统计数据和其他数据等。

数据呈现所需要数据来源为作为 client 通过webSocket 连接到后端服务器的车辆，车辆每间隔 15s(默认)向服务器发送一帧固定格式的数据，

后台通过协议帧解析数据，分类数据分别固化到数据库，存储在redis，缓存中。项目支持最大 10 万台车辆的同时在线，支持最大 5000 用户数的同时在线。

**项目所用到的技术，框架**：springBoot ,mybatis,webSocket,docker,通用mapper，PageHalper,druid,

友情链接
----

* [GitHub](https://github.com/RefinedAll)
* [码云](https://gitee.com/aflsz)

`
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
        this.$nextTick(() => {
          this.$refs.resumeEditor.goTop();
        });
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
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  position: relative;
}

html {
  min-height: 100vh;
}
* {
  box-sizing: border-box;
}
</style>
