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
  <form @submit.prevent="logout">
    <h1 class="welcomeHeader">{{ `Здравствуйте, ${store.login}` }}</h1>
    <button type="submit">Выход</button>
  </form>
</template>
