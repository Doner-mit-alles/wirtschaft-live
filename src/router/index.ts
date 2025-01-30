import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Baller Los' }
  },
  {
    path: '/impressum-und-datenschutz',
    name: 'Imprint and Privacy Police',
    component: () => import('@/views/ImprintAndPrivacyPoliceView.vue'),
    meta: { title: 'Imprint and Data Protection' }
  },
  // Catch-all route for undefined paths
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title?.toString() || 'Default Title'
})

export default router
