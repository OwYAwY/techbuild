import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import RegistrationPage from '../pages/RegistrationPage.vue'
import WelcomePage from '../pages/WelcomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'registration',
    component: RegistrationPage,
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomePage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
