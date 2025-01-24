import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ImprintAndPrivatePolicty from '@/views/ImprintAndPrivacyPoliceView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Home' }
  },
  // Catch-all route for undefined paths
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
    component: () => HomeView
  },
  {
    path: '/impressum-und-datenschutz',
    name: 'Imprint and Privacy Police',
    component: () => ImprintAndPrivatePolicty
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title?.toString() || 'Default Title';
});


export default router
