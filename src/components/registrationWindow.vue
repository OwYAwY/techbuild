<script lang="ts" setup>
import { registrationDataStore } from '../stores/registrationDataStore'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import type { Router } from 'vue-router'
const router: Router = useRouter()
const store = registrationDataStore()
const isPasswordVisible = ref<boolean>(false)
const isRepeatPasswordVisible = ref<boolean>(false)
const submitForm = (): void => {
  store.confirm()
  if (store.isAuthenticated) {
    router.push('/welcome').catch((error: Error) => {
      console.error('Ошибка перехода на другую страницу:', error)
    })
  }
}

const toggleRepeatPasswordVisibility = (): void => {
  isRepeatPasswordVisible.value = !isRepeatPasswordVisible.value
}
const togglePasswordVisibility = (): void => {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
  <div class="registration-container">
    <form @submit.prevent="submitForm" class="registration-form">
      <h1 class="registration-header">Регистрация</h1>
      <div class="input-field">
        <label>Логин*</label>
        <input
          class="input-style"
          type="text"
          placeholder="Логин"
          v-model="store.login"
          :class="{
            'error-border-only': store.errors.login === 'Обязательное поле',
            'error-full': store.errors.login && store.errors.login !== 'Обязательное поле',
          }"
          maxlength="16"
        />
        <button
          v-if="store.errors.login && store.errors.login !== 'Обязательное поле'"
          type="button"
          class="clear-button"
          @click="store.login = ''"
          aria-label="Очистить поле"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="#d32f2f"
          >
            <path
              d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 
            12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>

        <p class="error-message" v-if="store.errors.login">{{ store.errors.login }}</p>
      </div>
      <div class="input-field">
        <label>E-mail</label>
        <input
          class="input-style"
          type="text"
          placeholder="example@gmail.com"
          v-model="store.email"
          :class="{ 'error-full': store.errors.email }"
        />
        <button
          v-if="store.errors.email"
          type="button"
          class="clear-button"
          @click="store.email = ''"
          aria-label="Очистить поле"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="#d32f2f"
          >
            <path
              d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 
            12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>

        <p class="error-message" v-if="store.errors.email">{{ store.errors.email }}</p>
      </div>
      <div class="input-field">
        <label>Телефон</label>
        <input
          class="input-style"
          type="tel"
          v-mask="'+7 (###) ###-##-##'"
          placeholder="+7 (___) ___-__-__"
          v-model="store.phone"
          :class="{ 'error-full': store.errors.phone }"
        />
        <button
          v-if="store.errors.phone"
          type="button"
          class="clear-button"
          @click="store.phone = ''"
          aria-label="Очистить поле"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            fill="#d32f2f"
          >
            <path
              d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 
            12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>
        <p class="error-message" v-if="store.errors.phone">{{ store.errors.phone }}</p>
      </div>
      <div class="input-field input-field--password">
        <label for="password">Пароль*</label>
        <input
          id="password"
          class="input-style"
          :type="isPasswordVisible ? 'text' : 'password'"
          placeholder="Пароль"
          v-model="store.password"
          :class="{
            'error-border-only': store.errors.password === 'Обязательное поле',
            'error-full':
              (store.errors.password || store.errors.repeatPassword === 'Пароли не совпадают') &&
              store.errors.password !== 'Обязательное поле',
          }"
        />
        <button
          class="password-toggle"
          :class="{ 'password-toggle--visible': isPasswordVisible }"
          type="button"
          @click="togglePasswordVisibility"
          aria-label="Переключить видимость пароля"
        ></button>
        <p class="error-message" v-if="store.errors.password">{{ store.errors.password }}</p>
      </div>
      <div class="input-field input-field--password">
        <label>Повторите пароль*</label>
        <input
          class="input-style"
          :type="isRepeatPasswordVisible ? 'text' : 'password'"
          placeholder="Повтор пароля"
          v-model="store.repeatPassword"
          :class="{
            'error-border-only': store.errors.repeatPassword === 'Обязательное поле',
            'error-full':
              store.errors.repeatPassword && store.errors.repeatPassword !== 'Обязательное поле',
          }"
        />
        <button
          class="password-toggle"
          :class="{ 'password-toggle--visible': isRepeatPasswordVisible }"
          type="button"
          @click="toggleRepeatPasswordVisibility"
          aria-label="Переключить видимость пароля"
        ></button>
        <p class="error-message" v-if="store.errors.repeatPassword">
          {{ store.errors.repeatPassword }}
        </p>
      </div>
      <button class="register-button" type="submit">Зарегистрироваться</button>
      <div class="divider"></div>
      <p class="info-text">
        Нажимая кнопку «Зарегистрироваться», пользователь соглашается с политикой в отношении
        обработки персональных данных и публичной офертой
      </p>
    </form>
  </div>
</template>
