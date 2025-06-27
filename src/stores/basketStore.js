// stores/basketStore.js
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useBasketStore = defineStore('basket', () => {
  const basketItems = ref([]) // каждый элемент: { product: {...}, quantity: number }
  const isBasketOpen = ref(false)

  // Загрузка из localStorage
  function loadItems() {
    const saved = localStorage.getItem('basketItems')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) {
          basketItems.value = parsed.map((item) => ({
            product: item.product || item,
            quantity: item.quantity || 1,
          }))
        }
      } catch (e) {
        console.error('Ошибка парсинга корзины из localStorage', e)
      }
    }
  }

  loadItems()

  // Сохраняем корзину в localStorage при изменении basketItems
  watch(
    basketItems,
    (newItems) => {
      localStorage.setItem('basketItems', JSON.stringify(newItems))
    },
    { deep: true },
  )

  function toggleBasket() {
    isBasketOpen.value = !isBasketOpen.value
  }

  // Добавление товара с увеличением количества, если есть
  function addItem(product) {
    const existing = basketItems.value.find((i) => i.product.name === product.name)
    if (existing) {
      existing.quantity++
    } else {
      basketItems.value.push({ product, quantity: 1 })
    }
  }

  function increaseQuantity(item) {
    item.quantity++
  }

  function decreaseQuantity(item) {
    if (item.quantity > 1) {
      item.quantity--
    } else {
      deleteItem(item)
    }
  }

  function deleteItem(item) {
    basketItems.value = basketItems.value.filter((i) => i !== item)
  }

  function clearBasket() {
    basketItems.value = []
  }

  function sumBasket() {
    return basketItems.value.reduce((sum, item) => {
      const priceNum = parseFloat(item.product.price.split(' ')[0])
      return sum + priceNum * item.quantity
    }, 0)
  }

  return {
    basketItems,
    isBasketOpen,
    toggleBasket,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    clearBasket,
    sumBasket,
  }
})
