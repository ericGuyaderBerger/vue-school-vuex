import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: [],
    cart: [],
    checkoutStatus: null
  },
  getters: { // = computed
    productsCount (state, getters) {
      return state.products.length
    },
    availableProducts (state) {
      return state.products
      // return state.products.filter(product => product.inventory > 0)
    },
    cartProducts (state, getters) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => { return product.id === cartItem.id })
        const {title, price} = product
        const {quantity, id} = cartItem
        return {id, title, price, quantity}
      })
    },
    cartTotal (state, getters) {
      return getters.cartProducts.reduce((total, product) => { return total + product.quantity * product.price }, 0)
    },
    isProductAvailable () {
      return (product) => {
        return (product.inventory > 0)
      }
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
    },
    addProductToCart ({getters, state, commit}, product) {
      if (getters.isProductAvailable(product)) {
        let cartItem = state.cart.find(item => item.id === product.id)
        if (cartItem) {
          commit('incrementQuantityInCart', cartItem)
        } else {
          commit('pushProductToCart', product)
        }
        commit('decrementInventory', product)
      }
    },
    checkout ({commit, state}) {
      shop.buyProducts(
        state.cartProducts,
        () => {
          commit('emptyCart')
          commit('changeCheckoutStatus', 'success')
        },
        () => {
          commit('changeCheckoutStatus', 'fail')
        }
      )
    }
  },
  mutations: { // = nothing ;-) !
    setProducts (state, products) {
      state.products = products
    },
    pushProductToCart (state, product) {
      state.cart.push({id: product.id, quantity: 1})
    },
    incrementQuantityInCart (state, item) {
      item.quantity++
    },
    decrementInventory (state, product) {
      product.inventory--
    },
    emptyCart (state) {
      state.cart = []
    },
    changeCheckoutStatus (state, status) {
      state.checkoutStatus = status
    }
  }
})
