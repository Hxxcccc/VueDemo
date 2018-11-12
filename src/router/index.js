/*
  路由器模块
 */
import Vue from 'vue'
import VurRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'

//声明使用vue插件
Vue.use(VurRouter)

export default new VurRouter ({
  //配置应用中的所有路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})