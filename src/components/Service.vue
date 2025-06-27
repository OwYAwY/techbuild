<script setup lang="js">
import { useBasketStore } from '@/stores/basketStore'
const basketStore = useBasketStore()
const services = [
  {
    name: 'Консультация',
    photo: '',
    price: '250 руб',
    description: 'Консультация по сборке компьютер',
  },
  {
    name: 'Подбор комплектующих',
    photo: '',
    price: '500 руб',
    description: 'Подбор комплектующих',
  },
  {
    name: 'Сборка',
    photo: '',
    price: '1000 руб',
    description: 'Сборка компьютера',
  },
  {
    name: 'Модульный ремонт',
    photo: '',
    price: '100 руб',
    description: 'Ремонт компьютера',
  },
]
const handleClick = (service) => {
  basketStore.addItem(service)
  basketStore.isBasketOpen = true
}
</script>

<template>
  <section id="services" class="bg-gray-100 px-6 scroll-mt-24">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-4xl font-extrabold text-gray-900 mb-10 font-sans">Услуги</h2>
    </div>

    <div class="max-w-2xl mx-auto flex flex-col gap-6">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
      >
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-2xl font-bold text-gray-800">{{ service.name }}</h3>
          <span class="text-black font-semibold text-lg whitespace-nowrap">{{
            service.price
          }}</span>
        </div>

        <p class="text-gray-600 mb-4">{{ service.description }}</p>

        <div class="flex justify-end">
          <button
            @click="handleClick(service)"
            class="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
