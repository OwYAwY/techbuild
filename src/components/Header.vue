<script lang="ts" setup>
import { ref } from 'vue'
</script>

<template>
  <header class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
      <div class="text-2xl font-bold cursor-pointer">TechBuild</div>
      <nav>
        <ul class="flex space-x-8 text-gray-700">
          <li>
            <a href="#about" class="hover:text-blue-600 transition">О нас</a>
          </li>
          <li>
            <a href="#services" class="hover:text-blue-600 transition">Услуги</a>
          </li>
          <li>
            <a href="#contact" class="hover:text-blue-600 transition">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
