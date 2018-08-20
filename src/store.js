import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

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
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  },
  mutations: { // = nothing ;-) !
    setProducts (state, products) {
      state.products = products
    }
  }
})
