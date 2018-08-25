<template>
  <div>
    <h1>Products</h1>
    <img v-if="loading" src="@/assets/logo.png" />
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
import {mapGetters, mapActions} from 'vuex'
import ProductListItem from './ProductListItem'

export default {
  name: 'ProductList',
  components: {
    ProductListItem
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters({products: 'products/availableProducts'})
  },
  methods: {
    ...mapActions({fetchProducts: 'products/fetchProducts'})
  },
  created () {
    this.loading = true
    this.fetchProducts()
      .then(() => { this.loading = false })
  }
}
</script>
