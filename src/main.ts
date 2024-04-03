import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '@styles/styles.scss'
import {loadFonts} from '@/plugins/webfontloader'

loadFonts()

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
