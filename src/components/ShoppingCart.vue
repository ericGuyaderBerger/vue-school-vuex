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
    <button @click="checkout">Checkout</button>
    <p>{{ checkoutStatus }}</p>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'ShoppingCart',
  computed: {
    ...mapGetters('cart', {
      total: 'cartTotal',
      products: 'cartProducts'
    }),
    ...mapState(
      {'checkoutStatus': state => state.cart.checkoutStatus}
    )
  },
  methods: {
    ...mapActions('cart', {checkout: 'checkout'})
  }
}
</script>
