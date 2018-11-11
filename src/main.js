/*
  入口js
 */

import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'

Vue.use(VueResource)  //内部给所有的vm和组件对象添加了一个$http的属性对象 可以通过其get()/post()发送ajax请求

new Vue ({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})


