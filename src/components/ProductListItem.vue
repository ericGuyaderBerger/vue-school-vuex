<template>
  <li>
    {{ product.title }}, {{ product.price }} - Inventory: {{ product.inventory }}
    <button
      :disabled="!isProductAvailable(product)"
      @click="addProductToCart(product)"
    >
    Add to cart</button>

  </li>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['isProductAvailable'])
  },
  methods: {
    ...mapActions(['addProductToCart'])
  }
}
</script>
