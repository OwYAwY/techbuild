<script setup lang="ts">
import { ref } from 'vue'

const items = [
  {
    image: '/photos/pk1.jpg',
    grade: '⭐⭐⭐⭐⭐',
    review:
      'Мастер очень ответственный и честный, вместе с ним поехали за комплектующими, полностью подобрал комплектующие. Сборка вышла аккуратной, красивой, кабель менеджмент на уровне. Советую, рекомендую. 😊',
    author: 'Даня К.',
    authorAvatar:
      'https://sun9-58.userapi.com/s/v1/ig2/CpX8TY74HW5AW5nwdgcMhwGaxQWn9oUPVbqi74bDdtfMRWgXvTfhdzlFZt_euSPgJeUht053qyjBt9kM1zzNmwiD.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2560x2560&from=bu&cs=2560x0',
    authorHref: 'https://vk.com/ervix',
  },
  {
    image: '/photos/pk2.jpg',
    grade: '⭐⭐⭐⭐⭐',
    review:
      'Собрали компьютер, за пару дней договорились и собрали нужные комплектующие. Компьютер работает исправно, температуры низкие, все супер, рекомендую!!! 👍👍👍',
    author: 'Xyashi R.',
    authorAvatar:
      'https://sun9-46.userapi.com/s/v1/ig2/DTDEaAM424qcJVjtWWUysiUuMJ9q-00s-4Q955s7P-hk0doK1SgQkRit5yomctf1uBrWPUeFUN7yhzNralgCROzI.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1024x1024&from=bu&cs=1024x0',
    authorHref: 'https://vk.com/id_kotayra',
  },
  {
    image: '/photos/pk3.jpg',
    grade: '⭐⭐⭐⭐⭐',
    review:
      'Остался очень доволен! Он был невероятно отзывчивым и профессиональным. Сборщик учел все мои пожелания и рекомендации, а также дал полезные советы по оптимизации конфигурации. Рекомендую всем, кто ищет качественную сборку ПК в короткие сроки!',
    author: 'Кирилл В.',
    authorAvatar:
      'https://sun9-35.userapi.com/s/v1/ig1/pYV2_jkLmUflnaYkTtYP0GDApCivFrJub1spXTUlODZ7l-RUSVvg_BFDX1UtD2Pe95SaA56f.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,900x900&from=bu&cs=900x0',
    authorHref: 'https://vk.com/gardex3',
  },
  {
    image: '/photos/pk4.smIRZvZCnhTUQM0rM5ADb8p0BHRbhvQAtKA89dCG6us',
    grade: '⭐⭐⭐⭐⭐',
    review:
      'Работа выполнена на отлично, собрал пк быстро и аккуратно. Стоимость за сборку более чем адекватная.',
    author: 'Пользователь',
    authorAvatar: '/photos/userpng.png',
  },
  {
    image: '/photos/pk5.7ZmgMwksIJuADUfIJNUDAo_AxIprXaLk-yT2rmrvEOM',
    grade: '⭐⭐⭐⭐⭐',
    review: 'Сделано качественно+устранил проблемы от предыдущего мастера. Спасибо!',
    author: 'Сергей',
    authorAvatar: '/photos/sergeypng.png',
  },
  {
    image: '/photos/pk6.HU_isI3-zsI76HTgjoerU3t3Uoss26oFgAFNEDVfI4s',
    grade: '⭐⭐⭐⭐⭐',
    review:
      'Приятный молодой человек. Быстро договорились о встрече. Мастер оперативно выполнил свою работу. Подсветка ВАУ 🤩. Подобрал комплектующие под мой бюджет, кабели все очень красиво мне уложил. Осталась довольна. Сначала немного сомневалась, т.к мало отзывов, но не пожалела. Всем советую👍',
    author: 'Лилия К.',
    authorAvatar:
      'https://sun9-17.userapi.com/s/v1/ig2/df_-M1Pet0U3tuQ7VyCyFVs8vavoOcxxvxZk2-79i6-d8Hmufnu-lhkel08N17tpFsO8i8umRfFpDn1CsIRTjLD3.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x854,720x960,794x1059&from=bu&cs=794x0',
    authorHref: 'https://vk.com/l_karalkina',
  },
  {
    image: '/photos/pk7.cNDX7krmrff9pr25NRwF1KKL6phC3w24FJ9ZqC4pqlY',
    grade: '⭐⭐⭐⭐⭐',
    review:
      'Мастер очень ответственный и честный, вместе с ним поехали за комплектующими, полностью подобрал комплектующие. Сборка вышла аккуратной, красивой, кабель менеджмент на уровне. Советую, рекомендую. 😊',
    author: 'Даниил',
    authorAvatar:
      'https://10.img.avito.st/image/1/1.s5fYPLa1CX7unp19sjrPje2eHX5ml5197p4dfA.c7oPdsCxvYfQj94MBULc487MJRpaGFJRslR_rFyuqLQ',
  },
]

const currentIndex = ref(0)

function next() {
  currentIndex.value = (currentIndex.value + 1) % items.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
}
</script>

<template>
  <section class="w-full bg-gray-100 py-20" id="portfolio">
    <h2 class="text-4xl font-bold text-center mb-10">Наши сборки и отзывы</h2>

    <div class="relative max-w-5xl mx-auto overflow-visible px-4">
      <div class="overflow-hidden">
        <div
          class="flex gap-6 transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(calc(-${currentIndex} * (80% + 1.5rem) + 10%))` }"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="w-[80%] flex-shrink-0 bg-white rounded-xl shadow-lg flex transition-all duration-500"
            :style="{
              filter: index === currentIndex ? 'none' : 'blur(3px)',
              transform: index === currentIndex ? 'scale(1)' : 'scale(0.9)',
              height: '350px',
            }"
          >
            <img
              :src="item.image"
              alt="Example build"
              class="rounded-l-xl object-cover w-1/2 h-full"
            />
            <div class="flex flex-col justify-center w-1/2 p-6">
              <blockquote class="italic text-gray-700 text-lg">"{{ item.review }}"</blockquote>
              <div
                class="mt-6 flex justify-between items-center text-gray-900 font-semibold text-lg"
              >
                <p class="text-yellow-500">{{ item.grade }}</p>
                <div class="flex items-center space-x-3">
                  <p>— {{ item.author }}</p>
                  <a :href="item.authorHref" target="_blank">
                    <img
                      :src="item.authorAvatar"
                      alt="avatar"
                      class="w-10 h-10 rounded-full object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Стрелки -->
      <button
        @click="prev"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:text-white text-gray-400 z-10"
        aria-label="Prev"
        style="background: transparent; border: none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        @click="next"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:text-white text-gray-400 z-10"
        aria-label="Next"
        style="background: transparent; border: none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Навигация -->
    <div class="flex justify-center mt-6 space-x-2">
      <span
        v-for="(item, index) in items"
        :key="'dot-' + index"
        class="w-3 h-3 rounded-full cursor-pointer transition-transform"
        :class="{
          'bg-gray-800 scale-110': index === currentIndex,
          'bg-gray-400': index !== currentIndex,
        }"
        @click="currentIndex = index"
      ></span>
    </div>
  </section>
</template>
