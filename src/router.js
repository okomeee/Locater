import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Game from '@/pages/Game'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Game',
      component: Game
    }
  ]
})
