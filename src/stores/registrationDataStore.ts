import { defineStore } from 'pinia'

interface Errors {
  login: string
  email: string
  phone: string
  password: string
  repeatPassword: string
}

interface RegistrationDataStore {
  login: string
  email: string
  phone: string
  password: string
  repeatPassword: string
  errors: Errors
  isAuthenticated: boolean
}

type FieldKey = 'login' | 'email' | 'phone' | 'password' | 'repeatPassword'

export const registrationDataStore = defineStore('registration', {
  state: (): RegistrationDataStore => ({
    login: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
    errors: {
      login: '',
      email: '',
      phone: '',
      password: '',
      repeatPassword: '',
    },
    isAuthenticated: false,
  }),
  actions: {
    validate() {
      const fields: FieldKey[] = ['login', 'email', 'phone', 'password', 'repeatPassword']

      fields.forEach((field) => {
        const value = (this[field] as string).trim()

        switch (field) {
          case 'login':
            if (!value) {
              this.errors[field] = 'Обязательное поле'
            } else if (value.length < 6) {
              this.errors[field] = 'Логин должен содержать минимум 6 символов'
            } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
              this.errors[field] = 'Логин может содержать только латинские буквы и цифры'
            } else {
              this.errors[field] = ''
            }
            break
          case 'email':
            if (!value) {
              this.errors[field] = ''
            } else if (/[а-яА-ЯЁё]/.test(value)) {
              this.errors[field] = 'E-mail может содержать только латиницу и специальные символы'
            } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/.test(value)) {
              this.errors[field] = 'Некорректный формат (пример: user@example.com)'
            } else if (
              !/\.(ru|com|net|org|gov|edu|io|co|uk|de|fr|it|es|ua|kz|by|tj|am|az|ge)$/i.test(value)
            ) {
              this.errors[field] = 'Email должен содержать допустимый домен (например: .ru, .com)'
            } else {
              this.errors[field] = ''
            }
            break
          case 'phone':
            if (value) {
              if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value)) {
                this.errors[field] = 'Телефон должен быть в формате +7 (999) 999-99-99'
              } else {
                this.errors[field] = ''
              }
            } else {
              this.errors[field] = ''
            }
            break
          case 'password':
            if (!value) {
              this.errors[field] = 'Обязательное поле'
            } else if (value.length < 6) {
              this.errors[field] = 'Пароль должен быть не менее 6 символов'
            } else {
              this.errors[field] = ''
            }
            break

          case 'repeatPassword':
            if (!value) {
              this.errors[field] = 'Обязательное поле'
            } else if (value !== this.password) {
              this.errors[field] = 'Пароли не совпадают'
            } else {
              this.errors[field] = ''
            }
            break
        }
      })
    },
    confirm() {
      this.validate()
      const hasErrors = Object.values(this.errors).some((errorMsg) => errorMsg !== '')
      if (!hasErrors) {
        const userData = {
          login: this.login,
          email: this.email,
          phone: this.phone,
          password: this.password,
          isAuthenticated: true,
        }
        localStorage.setItem('registeredUser', JSON.stringify(userData))
        this.isAuthenticated = true
      }
    },
    loadFromLocalStorage() {
      const savedData = localStorage.getItem('registeredUser')
      if (savedData) {
        const userData = JSON.parse(savedData)
        this.login = userData.login || ''
        this.email = userData.email || ''
        this.phone = userData.phone || ''
        this.password = userData.password || ''
        this.repeatPassword = userData.password || ''
        this.isAuthenticated = userData.isAuthenticated || false
      }
    },
  },
  getters: {},
})
