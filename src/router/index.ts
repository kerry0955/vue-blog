import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/components/error-page/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName: "401" */ '@/components/error-page/401.vue'),
    meta: { hidden: true }
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/',
    name: 'waiting',
    // component: Home,
    component: () => import(/* webpackChunkName: "waiting" */ '../views/waiting/index.vue'),
    meta: {
      title: 'waiting',
      hidden: true,
      icon: '',
      auth: true,
    }
  },

]

const permissionRoute = [

  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/home/index.vue')
  }
]

const router = new VueRouter({
  // mode: '',
  base: process.env.BASE_URL,
  routes
})
router.addRoutes(permissionRoute)

export default router
