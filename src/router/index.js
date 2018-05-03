import Vue from 'vue'
import Router from 'vue-router'

const _import_ = file => () => import('@/views/' + file + '.vue')

Vue.use(Router)

var routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: _import_('Login/index')
    }
  ]

export default new Router({
  routes
})
