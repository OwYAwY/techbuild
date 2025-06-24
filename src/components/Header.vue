<script lang="ts" setup>
import { ref } from 'vue'
</script>
<template>
  <header
    class="fixed top-0 left-0 w-full z-50 h-24 bg-transparent border-b-2 border-transparent backdrop-blur-md flex items-center px-10"
  >
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center space-x-4">
        <img src="/src/techbuildLogo.png" alt="TechBuild Logo" class="h-40 w-auto" />
        <a href="https://t.me/andreyka_nov" target="_blank">
          <img src="/icons/telegram.svg" class="w-9 h-9 hover:scale-110 transition" />
        </a>
        <a href="https://vk.com/techbuiild" target="_blank">
          <img src="/icons/vk.svg" class="w-10 h-10 hover:scale-110 transition" />
        </a>
        <a href="https://www.youtube.com/@Techbuuild" target="_blank">
          <img src="/icons/youtube.svg" class="w-10 h-10 hover:scale-110 transition" />
        </a>
        <a href="https://www.tiktok.com/@techbuild124" target="_blank">
          <img src="/icons/tiktok.svg" class="w-10 h-10 hover:scale-110 transition" />
        </a>
        <a
          href="https://www.avito.ru/user/10e83d23bb3f02a56ddd2a2f81f2d19f/profile/all/predlozheniya_uslug?src=messenger&page_from=from_u2u_messenger&sellerId=10e83d23bb3f02a56ddd2a2f81f2d19f"
          target="_blank"
        >
          <img src="/icons/avito.svg" class="w-20 h-20 hover:scale-110 transition" />
        </a>
      </div>

      <!-- НАВИГАЦИЯ -->
      <nav>
        <ul class="flex space-x-8">
          <li>
            <a
              href="#about"
              class="text-white text-xl drop-shadow-md hover:text-purple-400 transition"
            >
              О нас
            </a>
          </li>
          <li>
            <a
              href="#services"
              class="text-white text-xl drop-shadow-md hover:text-purple-400 transition"
            >
              Услуги
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="text-white text-xl drop-shadow-md hover:text-purple-400 transition"
            >
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
