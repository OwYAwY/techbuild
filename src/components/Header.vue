<script lang="js" setup>
import { ref } from 'vue'
import { useBasketStore } from '@/stores/basketStore'
const basketStore = useBasketStore()
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
              class="text-purple-300 text-xl drop-shadow-md hover:text-purple-500 transition"
            >
              О нас
            </a>
          </li>
          <li>
            <a
              href="#services"
              class="text-purple-300 text-xl drop-shadow-md hover:text-purple-500 transition"
            >
              Услуги
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="text-purple-300 text-xl drop-shadow-md hover:text-purple-500 transition"
            >
              Контакты
            </a>
          </li>
          <li @click="basketStore.toggleBasket" class="relative cursor-pointer">
            <button
              class="text-xl font-semibold transition cursor-pointer"
              :class="
                basketStore.isBasketOpen
                  ? 'text-purple-400 underline'
                  : 'text-purple-300 hover:text-purple-500'
              "
            >
              Корзина
            </button>

            <!-- Маленький индикатор (например, кружок) -->
            <span
              v-if="basketStore.isBasketOpen"
              class="absolute -top-1 -right-3 bg-purple-500 w-2.5 h-2.5 rounded-full animate-ping"
            ></span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
