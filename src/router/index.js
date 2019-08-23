import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}

const ROUTER = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: loadView('HelloWorld'),
        two: loadView('VuexTest'),
      },
      meta: {
        title: '首页'
      }
    },
    {
      path: '/slot/:slotnumber',
      name: 'Slot',
      component: loadView('SlotTest'),
      meta: {
        title: 'Slot'
      }
    },
    {
      path: '/vuex/userId',
      name: 'Vuex',
      component: loadView('VuexTest'),
      meta: {
        title: 'Vuex'
      }
    },
    {
      path: '/computed',
      component: loadView('ComputedTest'),
      meta: {
        title: 'Computed'
      }
    },
    {
      path: '/axios',
      component: loadView('Axios'),
      meta: {
        title: 'Axios'
      }
    },
    {
      path: '/handsontable',
      component: loadView('Handsontable'),
      meta: {
        title: 'Handsontable'
      }
    },
    {
      path: '/content',
      component: loadView('Content'),
      meta: {
        title: '高阶组件'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

ROUTER.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default ROUTER
