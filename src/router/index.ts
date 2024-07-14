import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/index.vue'),
      redirect: '/home',
      children: [
        { path: '/home', component: () => import('@/views/home/index.vue') },
        { path: '/team', component: () => import('@/views/team/index.vue') },
        { path: '/user', component: () => import('@/views/user/index.vue') }
      ]
    }
  ]
})

export default router
