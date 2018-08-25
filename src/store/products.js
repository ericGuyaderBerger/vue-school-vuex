import shop from '@/api/shop'

export default {
  state: {
    items: []
  },
  getters: {
    productsCount (state) {
      return state.items.length
    },
    availableProducts (state) {
      return state.items
    },
    isProductAvailable () {
      return (product) => {
        return (product.inventory > 0)
      }
    }
  },
  actions: {
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  },
  mutations: {
    setProducts (state, products) {
      state.items = products
    },
    decrementInventory (state, product) {
      product.inventory--
    }
  }
}
