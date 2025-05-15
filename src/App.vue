<script setup>
import registrationPage from './pages/registrationPage.vue'
import { registrationDataStore } from './stores/registrationDataStore'
import welcomePage from './pages/welcomePage.vue'
const store = registrationDataStore()
</script>

<template>
  <registrationPage v-if="!store.isAuthenticated" />
  <welcomePage v-else />
</template>

<style></style>
