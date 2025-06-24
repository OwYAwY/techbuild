<script setup>
import carousel from './carousel.vue'
</script>

<template>
  <section id="about" class="bg-gray-100 text-gray-800 py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <!-- Заголовок -->
      <h2 class="text-4xl font-bold text-center mb-8">О компании TechBuild</h2>
      <p class="text-lg text-center max-w-3xl mx-auto mb-16">
        Мы специализируемся на сборке высокопроизводительных ПК под любые задачи — от гейминга до
        работы с графикой и серверными решениями.
      </p>

      <!-- Преимущества -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 class="text-xl font-semibold mb-2">Гарантия 1 год</h3>
          <p>Все наши сборки проходят тестирование и имеют официальную гарантию.</p>
        </div>
        <div class="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 class="text-xl font-semibold mb-2">Индивидуальный подход</h3>
          <p>Подберем конфигурацию под любой бюджет и задачи.</p>
        </div>
        <div class="bg-white shadow-md p-6 rounded-lg text-center">
          <h3 class="text-xl font-semibold mb-2">Быстрая сборка</h3>
          <p>Собираем и доставляем ПК в кратчайшие сроки — от 2 до 5 дней.</p>
        </div>
      </div>

      <!-- Примеры работ -->
      <div class="flex justify-center mb-16">
        <carousel />
      </div>
    </div>
  </section>
</template>
