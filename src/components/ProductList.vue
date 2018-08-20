<template>
  <div>
    <h1>Products</h1>
    <ul>
      <product-list-item
        v-for="product in products"
        :key="product.id"
        :product="product">
      </product-list-item>
    </ul>
  </div>
</template>
<script>
import Shop from '@/api/shop'
import store from '@/store'
import ProductListItem from './ProductListItem'

export default {
  name: 'ProductList',
  components: {
    ProductListItem
  },
  computed: {
    products () {
      return store.getters.availableProducts
    }
  },
  created () {
    Shop.getProducts(products => {
      store.commit('setProducts', products)
    })
  }
}
</script>
