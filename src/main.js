import Vue from 'vue'
import App from './App'
import Mobile from './Mobile'

//var width = document.documentElement.clientWidth
/* eslint-disable no-new */
new Vue({
  el: '#app',
  /*根据宽度判断 */
  //render: h => h(width > 500 ? App : Mobile)
  render: h => h((navigator.userAgent
    .match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) ?
    Mobile : App)
})
