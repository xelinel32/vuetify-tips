import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/typography',
    name: 'Typography',
    component: () => import('../views/Typography.vue'),
  },
  {
    path: '/spacing',
    name: 'Spacing',
    component: () => import('../views/Spacing.vue'),
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import('../views/Buttons.vue'),
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import('../views/Grid.vue'),
  },
  {
    path: '/card',
    name: 'Cards',
    component: () => import('../views/Card.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
