<script setup lang="ts">
import { registrationDataStore } from '../stores/registrationDataStore'
import { useRouter } from 'vue-router'
import type { Router } from 'vue-router'
const router: Router = useRouter()
const store = registrationDataStore()
const logout = (): void => {
  localStorage.removeItem('registeredUser')
  store.isAuthenticated = false
  router.push('/').catch((error: Error) => {
    console.error('Ошибка перехода на другую страницу:', error)
  })
}
</script>
<template>
  <div class="welcome-container">
    <form @submit.prevent="logout">
      <h1 class="welcome-header">{{ `Здравствуйте, ${store.login}` }}</h1>
      <div class="divider"></div>
      <div class="logout-text" @click="logout" role="button" tabindex="0">Выход</div>
    </form>
  </div>
</template>
