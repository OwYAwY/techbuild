<script setup lang="ts">
import { registrationDataStore } from '../stores/registrationDataStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = registrationDataStore()
const logout = () => {
  localStorage.removeItem('registeredUser')
  store.isAuthenticated = false
  router.push('/')
}
</script>
<template>
  <div class="welcome-container">
    <form @submit.prevent="logout">
      <h1 class="welcomeHeader">{{ `Здравствуйте, ${store.login}` }}</h1>
      <div class="divider"></div>
      <div class="logout-text" @click="logout" role="button" tabindex="0">Выход</div>
    </form>
  </div>
</template>
