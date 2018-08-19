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
import ProductListItem from './ProductListItem'
export default {
  name: 'ProductList',
  components: {
    ProductListItem
  },
  data () {
    return {
      products: null
    }
  },
  created () {
    // this.products = null
    Shop.getProducts(products => { this.products = products })
  }
}
</script>
