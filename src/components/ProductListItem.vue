<template>
  <li>
    {{ product.title }}, {{ product.price }} - Inventory: {{ product.inventory }}
    <button @click="addProductToCart(product)">Add to cart</button>

  </li>
</template>
<script>
export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addProductToCart (product) {
      this.$store.dispatch('addProductToCart', product)
    }
  }
}
</script>
