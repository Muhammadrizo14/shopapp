import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      cart: [],
      totalPrice: 0
    }
  },
  getters: {
    getAllInBasket(state) {
      return state.cart
    },
    getTotalPrice(state) {
      return state.totalPrice
    }
  },
  mutations: {
    addItemtoBasket(state, payload) {
      const findItem = state.cart.find(obj => obj.id === payload.value.id)
      if (findItem) {
        findItem.count++
      } else {
        state.cart.push({
          ...payload.value,
          count: 1
        })
      }
      state.totalPrice = state.cart.reduce((sum, obj) => +obj.price.replace(/\D/g,'') * obj.count + sum, 0)
    },

    removeItemFromBasket(state, payload) {


      state.totalPrice = state.cart.reduce((sum, obj) => {
        let overPrice = +obj.price.replace(/\D/g,'') * +obj.count
        return overPrice - sum
    }, 0)

      state.cart = state.cart.filter(obj => obj.id !== payload.value)

    },


    removeAllFromBasket(state) {
      state.cart = []
      state.totalPrice = 0
    }
    
  },
  actions: {
  },
  modules: {
  }
})
