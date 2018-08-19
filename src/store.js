import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },
  getters: { // = computed
    productsCount () {
      return this.store.products.length
    }
  },
  actions: { // = methods
    fetchProducts () {

    }
  },
  mutations: { // = nothing ;-) !
    setProducts () {

    }
  }
})
