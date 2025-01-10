import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/styles.css'

import App from './App.vue'
import 'bootstrap'
import bubbleBackground from './components/bubbleBackground.vue'
import i18n, { setLanguage, getBrowserLanguage } from './i18n'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
