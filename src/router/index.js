import Vue from 'vue'
import Router from 'vue-router'
import demo from '@/page/demo'
import login from '@/page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      
      component: login
    }
  ]
})
