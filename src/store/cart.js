import shop from '@/api/shop'

export default {
  state: {
    items: [],
    checkoutStatus: null
  },
  getters: {
    cartProducts (state, getters, rootState) {
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(product => { return product.id === cartItem.id })
        const {title, price} = product
        const {quantity, id} = cartItem
        return {id, title, price, quantity}
      })
    },
    cartTotal (state, getters) {
      return getters.cartProducts.reduce((total, product) => { return total + product.quantity * product.price }, 0)
    }
  },
  actions: {
    addProductToCart ({getters, state, commit}, product) {
      if (getters.isProductAvailable(product)) {
        let cartItem = state.items.find(item => item.id === product.id)
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
  mutations: {
    pushProductToCart (state, product) {
      state.items.push({id: product.id, quantity: 1})
    },
    incrementQuantityInCart (state, item) {
      item.quantity++
    },
    emptyCart (state) {
      state.items = []
    },
    changeCheckoutStatus (state, status) {
      state.checkoutStatus = status
    }
  }
}
