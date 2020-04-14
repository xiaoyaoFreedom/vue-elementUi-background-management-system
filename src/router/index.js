/*
 * @Author: your name
 * @Date: 2020-04-13 10:40:44
 * @LastEditTime: 2020-04-13 18:20:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueTest\houtai\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/layout'
import Centre from '@/page/centre'
import Order from '@/page/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/',
        name: 'Centre',
        component: Centre
      }, {
        path: 'order',
        name: 'Order',
        component: Order
      }]
    },
  ]
})
