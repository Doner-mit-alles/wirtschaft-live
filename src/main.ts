import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/style.css'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import i18n, { loadLocaleMessages, getBrowserLanguage } from './i18n'
import '@/assets/styles.css'

//load the vue with the browser language
const app = createApp(App)
loadLocaleMessages(getBrowserLanguage()).then(() => {
  app.use(createPinia())
  app.use(i18n)
  app.mount('#app')
})
