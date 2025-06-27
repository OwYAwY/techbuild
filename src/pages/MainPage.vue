<script setup>
import Header from '@/components/Header.vue'
import VideoCarousel from '@/components/VideoCarousel.vue'
import About from '@/components/About.vue'
import Service from '@/components/Service.vue'
import Contacts from '@/components/Contacts.vue'
import Basket from '@/components/Basket.vue'
import { useBasketStore } from '@/stores/basketStore'
const basketStore = useBasketStore()
</script>
<template>
  <Header />
  <VideoCarousel />
  <About />
  <Service />
  <Contacts />
  <Basket v-if="basketStore.isBasketOpen" />
</template>
