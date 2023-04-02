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
      let countf = state.cart.price
      console.log(countf);
      state.totalPrice = state.cart.reduce((sum, obj) => +obj.price.replace(/\D/g,'') * obj.count + sum, 0)
    },

    removeItemFromBasket(state, payload) {
      state.cart = state.cart.filter(obj => obj.id !== payload.value)
    },


    removeAllFromBasket(state) {
      state.cart = []
    }
    
  },
  actions: {
  },
  modules: {
  }
})
