<script lang="ts" setup>
import { registrationDataStore } from '../stores/registrationDataStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = registrationDataStore()
const submitForm = () => {
  store.confirm()
  if (store.isAuthenticated) {
    router.push('/welcome')
  }
}
</script>

<template>
  <div class="registrationBlock">
    <form @submit.prevent="submitForm">
      <h1 class="registrationHeader">Регистрация</h1>
      <div class="inputBlock">
        <h2>Логин</h2>
        <input type="text" placeholder="Логин" v-model="store.login" />
        <p class="error" v-if="store.errors.login">{{ store.errors.login }}</p>
      </div>
      <div class="inputBlock">
        <h2>E-mail</h2>
        <input type="text" placeholder="example@gmail.com" v-model="store.email" />
        <p class="error" v-if="store.errors.email">{{ store.errors.email }}</p>
      </div>
      <div class="inputBlock">
        <h2>Телефон</h2>
        <input
          type="tel"
          v-mask="'+7 (###) ###-##-##'"
          placeholder="'+7 (___) ___-__-__'"
          v-model="store.phone"
        />
        <p class="error" v-if="store.errors.phone">{{ store.errors.phone }}</p>
      </div>
      <div class="inputBlock">
        <h2>Пароль</h2>
        <input type="password" placeholder="Пароль" v-model="store.password" />
        <p class="error" v-if="store.errors.password">{{ store.errors.password }}</p>
      </div>
      <div class="inputBlock">
        <h2>Повторите пароль</h2>
        <input type="password" placeholder="Повтор пароля" v-model="store.repeatPassword" />
        <p class="error" v-if="store.errors.repeatPassword">{{ store.errors.repeatPassword }}</p>
      </div>
      <button class="registerButton" type="submit">Зарегистрироваться</button>
      <p class="info-text">
        Нажимая кнопку «Зарегистрироваться», пользователь соглашается с политикой в отношении
        обработки персональных данных и публичной офертой
      </p>
    </form>
  </div>
</template>
<style lang="scss" scoped>
$main-color: white;
$header-font-size: 5rem;
.registrationBlock {
  border: 1px solid black;
}
$input-font-size: 1rem;
.registrationHeader {
  color: brown;
  font-size: $header-font-size;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
}
.inputBlock {
  border: 1px solid red;
  font-size: $input-font-size;
}
.registerButton {
  border: 1px solid;
  font-size: 3rem;
}
.error {
  color: red;
}
</style>
