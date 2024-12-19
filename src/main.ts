import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/styles.css';

import App from './App.vue'
import 'bootstrap'
import i18n, { loadLocaleMessages, getBrowserLanguage } from './i18n'
import bubbleBackground from './components/bubbleBackground.vue'

const app = createApp(App)
loadLocaleMessages(getBrowserLanguage()).then(() => {
  app.use(createPinia())
  app.use(i18n)
  app.mount('#app')
})
