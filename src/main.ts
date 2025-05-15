// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'
// import router from './router'
// import { VueTheMask } from 'vue-the-mask'

// const app = createApp(App)
// const pinia = createPinia()
// app.use(pinia)
// app.use(VueTheMask)
// app.use(router)

// app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
const app = createApp(App)
const pinia = createPinia()

app.use(VueTheMask)
app.use(pinia)
app.use(router)

app.mount('#app')
