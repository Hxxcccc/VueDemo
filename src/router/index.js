/*
  路由器模块
 */
import Vue from 'vue'
import VurRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import MessageDetail from '../pages/MessageDetail'

//声明使用vue插件
Vue.use(VurRouter)

export default new VurRouter ({
  mode: 'history',
  //配置应用中的所有路由
  routes: [
    {   //一级路由
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [  //子路由
        {
          path: '/home/news',   //路径左侧的/ 代表项目根路径
          component: News
        },
        {
          path: '/home/message',
          component: Message,
          children: [
            {
              path: '/home/message/detail/:id',
              component: MessageDetail
            }
          ]
        },
        {
          path: '',
          redirect: '/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})