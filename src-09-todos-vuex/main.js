/*
  入口js
 */

import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import './index.css'

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  store
})
