<script setup>
import RegistrationPage from './pages/RegistrationPage.vue'
import { registrationDataStore } from './stores/registrationDataStore'
import WelcomePage from './pages/WelcomePage.vue'
const store = registrationDataStore()
</script>

<template>
  <RegistrationPage v-if="!store.isAuthenticated" />
  <WelcomePage v-else />
</template>

<style></style>
