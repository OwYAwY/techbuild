// import { defineStore } from 'pinia'

// interface Errors {
//   login: string
//   email: string
//   phone: string
//   password: string
//   repeatPassword: string
// }

// interface RegistrationDataStore {
//   login: string
//   email: string
//   phone: string
//   password: string
//   repeatPassword: string
//   errors: Errors
//   isAuthenticated: boolean
// }

// type FieldKey = keyof Omit<RegistrationDataStore, 'errors' | 'isAuthenticated'>

// export const registrationDataStore = defineStore('registration', {
//   state: (): RegistrationDataStore => ({
//     login: '',
//     email: '',
//     phone: '',
//     password: '',
//     repeatPassword: '',
//     errors: {
//       login: '',
//       email: '',
//       phone: '',
//       password: '',
//       repeatPassword: '',
//     },
//     isAuthenticated: false,
//   }),
//   actions: {
//     // метод записи выявленных ошибок в store
//     validate(): void {
//       const fields: FieldKey[] = ['login', 'email', 'phone', 'password', 'repeatPassword']

//       fields.forEach((field: FieldKey) => {
//         const value = this[field].trim()

//         switch (field) {
//           case 'login':
//             this.errors.login = this.validateLogin(value)
//             break
//           case 'email':
//             this.errors.email = this.validateEmail(value)
//             break
//           case 'phone':
//             this.errors.phone = this.validatePhone(value)
//             break
//           case 'password':
//             this.errors.password = this.validatePassword(value)
//             break
//           case 'repeatPassword':
//             this.errors.repeatPassword = this.validateRepeatPassword(value)
//             break
//         }
//       })
//     },

//     validateLogin(value: string): string {
//       if (!value) return 'Обязательное поле'
//       if (value.length < 6) return 'Логин должен содержать минимум 6 символов'
//       if (!/^[a-zA-Z0-9]+$/.test(value))
//         return 'Логин может содержать только латинские буквы и цифры'
//       return ''
//     },

//     validateEmail(value: string): string {
//       if (!value) return ''
//       if (/[а-яА-ЯЁё]/.test(value))
//         return 'E-mail может содержать только латиницу и специальные символы'
//       if (!/^[a-zA-Z  0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/.test(value))
//         return 'Некорректный формат (пример: user@example.com)'
//       if (!/\.(ru|com|net|org|gov|edu|io|co|uk|de|fr|it|es|ua|kz|by|tj|am|az|ge)$/i.test(value))
//         return 'Email должен содержать допустимый домен (например: .ru, .com)'
//       return ''
//     },

//     validatePhone(value: string): string {
//       if (value && !/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value))
//         return 'Телефон должен быть в формате +7 (999) 999-99-99'
//       return ''
//     },

//     validatePassword(value: string): string {
//       if (!value) return 'Обязательное поле'
//       if (value.length < 6) return 'Пароль должен быть не менее 6 символов'
//       return ''
//     },

//     validateRepeatPassword(value: string): string {
//       if (!value) return 'Обязательное поле'
//       if (value !== this.password) return 'Пароли не совпадают'
//       return ''
//     },

//     // метод записи данных пользователя в localStorage
//     confirm(): void {
//       this.validate()
//       const hasErrors = Object.values(this.errors).some((error) => error !== '')

//       if (!hasErrors) {
//         const userData: Omit<RegistrationDataStore, 'errors' | 'repeatPassword'> = {
//           login: this.login,
//           email: this.email,
//           phone: this.phone,
//           password: this.password,
//           isAuthenticated: true,
//         }
//         try {
//           localStorage.setItem('registeredUser', JSON.stringify(userData))
//         } catch (e) {
//           console.error('LocalStorage error:', e)
//         }
//         this.isAuthenticated = true
//       }
//     },

//     // метод выгрузки данных пользователя из localStorage
//     loadFromLocalStorage(): void {
//       const savedData = localStorage.getItem('registeredUser')
//       if (savedData) {
//         const userData: Omit<RegistrationDataStore, 'errors'> & { isAuthenticated?: boolean } =
//           JSON.parse(savedData)
//         this.login = userData.login || ''
//         this.email = userData.email || ''
//         this.phone = userData.phone || ''
//         this.password = userData.password || ''
//         this.repeatPassword = userData.password || ''
//         this.isAuthenticated = userData.isAuthenticated || false
//       }
//     },
//   },
// })
