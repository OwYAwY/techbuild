<script setup lang="ts">
import { ref } from 'vue'

const videos = ['/videos/0623.mp4', '/videos/0624.mp4', '/videos/0625.mp4']
const currentIndex = ref(0)
const direction = ref('next')

function next() {
  direction.value = 'next'
  currentIndex.value = (currentIndex.value + 1) % videos.length
}

function prev() {
  direction.value = 'prev'
  currentIndex.value = (currentIndex.value - 1 + videos.length) % videos.length
}
</script>

<template>
  <section
    class="relative w-full h-[900px] bg-black flex items-center justify-center overflow-hidden"
  >
    <transition :name="direction">
      <video
        :key="currentIndex"
        :src="videos[currentIndex]"
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover absolute inset-0"
      ></video>
    </transition>

    <button
      @click="prev"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-7xl select-none cursor-pointer px-3 py-1 hover:text-gray-400"
      aria-label="Previous video"
    >
      ‹
    </button>
    <button
      @click="next"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-7xl select-none cursor-pointer px-3 py-1 hover:text-gray-400"
      aria-label="Next video"
    >
      ›
    </button>
  </section>
</template>

<style scoped>
.next-enter-from {
  transform: translateX(100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.next-enter-to {
  transform: translateX(0);
}
.next-leave-from {
  transform: translateX(0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.next-leave-to {
  transform: translateX(-100%);
}

.prev-enter-from {
  transform: translateX(-100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.prev-enter-to {
  transform: translateX(0);
}
.prev-leave-from {
  transform: translateX(0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.prev-leave-to {
  transform: translateX(100%);
}

.next-enter-active,
.next-leave-active,
.prev-enter-active,
.prev-leave-active {
  transition: transform 0.5s ease;
}
</style>
