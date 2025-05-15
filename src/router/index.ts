import { createRouter, createWebHistory } from 'vue-router'
import registrationPage from '../pages/registrationPage.vue'
import welcomePage from '../pages/welcomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registration',
      component: registrationPage,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcomePage,
    },
  ],
})

export default router
