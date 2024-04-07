import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import '@styles/styles.scss'
import { loadFonts } from '@/plugins/webfontloader'
import Toast from 'vue-toastification'
import type { PluginOptions } from 'vue-toastification'
import { POSITION } from 'vue-toastification'
import "vue-toastification/dist/index.css";

loadFonts()

const toastOptions: PluginOptions = {
  position: POSITION.TOP_RIGHT,
}
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(Toast, toastOptions);

app.mount('#app')
