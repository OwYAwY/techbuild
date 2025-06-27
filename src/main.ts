import './assets/scss/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { createPinia } from 'pinia'
// import router from './router'
// import VueTheMask from 'vue-the-mask'
const app = createApp(App)
const pinia = createPinia()

// app.use(VueTheMask)
app.use(pinia)
// app.use(router)

// store.loadFromLocalStorage()

app.mount('#app')
