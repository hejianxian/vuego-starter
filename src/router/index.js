import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/welcome'
import GetStarted from '@/components/get-started'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/get-started',
      name: 'getStarted',
      component: GetStarted
    }
  ]
})
