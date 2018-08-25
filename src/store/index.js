import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'
import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    cart
  },
  state: { // = data
  },
  getters: { // = computed
  },
  actions: { // = methods
  },
  mutations: { // = nothing ;-) !
  }
})
