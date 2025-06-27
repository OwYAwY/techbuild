<script setup>
import { useBasketStore } from '@/stores/basketStore'
const basketStore = useBasketStore()
</script>

<template>
  <transition name="slide-fade">
    <div
      v-if="basketStore.isBasketOpen"
      class="fixed top-24 right-0 h-[calc(100vh-6rem)] w-80 bg-white shadow-lg z-50 flex flex-col p-6"
    >
      <h2 class="text-2xl font-bold mb-4 relative">Корзина</h2>

      <!-- Список товаров -->
      <div class="flex-1 overflow-auto space-y-4 px-1">
        <div
          v-for="(item, index) in basketStore.basketItems"
          :key="index"
          class="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
        >
          <div class="flex flex-col max-w-[55%] truncate">
            <p class="font-semibold text-gray-900 text-lg mb-1 truncate" :title="item.product.name">
              {{ item.product.name }}
            </p>
            <p class="text-gray-600 text-sm truncate" :title="item.product.price">
              {{ item.product.price }}
            </p>
          </div>

          <div class="flex items-center space-x-2 flex-shrink-0">
            <button
              @click="basketStore.decreaseQuantity(item)"
              class="bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-400 transition"
              aria-label="Уменьшить количество"
            >
              −
            </button>

            <span class="w-7 text-center font-medium select-none">{{ item.quantity }}</span>

            <button
              @click="basketStore.increaseQuantity(item)"
              class="bg-gray-300 rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-400 transition"
              aria-label="Увеличить количество"
            >
              +
            </button>

            <button
              @click="basketStore.deleteItem(item)"
              class="text-gray-400 hover:text-red-600 transition text-xl font-bold ml-3 select-none"
              aria-label="Удалить товар"
            >
              ×
            </button>
          </div>
        </div>

        <p
          v-if="basketStore.basketItems.length === 0"
          class="flex items-center justify-center h-full text-gray-400"
        >
          Корзина пуста
        </p>
      </div>

      <!-- Итоговая сумма -->
      <div class="mt-4 font-semibold text-lg text-right">
        Итого: {{ basketStore.sumBasket() }} руб
      </div>

      <!-- Кнопки действия -->
      <div class="mt-4 flex justify-between gap-2">
        <button
          class="flex-1 bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700 transition"
          @click="basketStore.clearBasket"
          :disabled="basketStore.basketItems.length === 0"
        >
          Очистить
        </button>
        <button
          class="flex-1 bg-purple-500 text-white rounded-lg px-4 py-2 hover:bg-purple-600 transition"
        >
          Оформить
        </button>
      </div>
    </div>
  </transition>
</template>
