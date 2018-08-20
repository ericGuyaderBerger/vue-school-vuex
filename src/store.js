import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },
  getters: { // = computed
    productsCount (state, getters) {
      return state.products.length
    },
    availableProducts (state) {
      return state.products.filter(product => product.inventory > 0)
    }
  },
  actions: { // = methods
    fetchProducts () {

    }
  },
  mutations: { // = nothing ;-) !
    setProducts (state, products) {
      state.products = products
    }
  }
})
