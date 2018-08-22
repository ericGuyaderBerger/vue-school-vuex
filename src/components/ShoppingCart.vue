<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price }} - {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total }}</p>
  </div>
</template>
<script>
export default {
  name: 'ShoppingCart',
  computed: {
    total () { return this.$store.getters.cartTotal },
    products () { return this.$store.getters.cartProducts }
  }
}
</script>
