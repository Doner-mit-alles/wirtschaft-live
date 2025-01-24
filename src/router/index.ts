import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ImprintAndPrivatePolicty from '@/views/ImprintAndPrivacyPoliceView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
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

export default router
