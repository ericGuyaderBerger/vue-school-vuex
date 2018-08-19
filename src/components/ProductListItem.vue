<template>
  <li>
    {{ product.title }}, {{ product.price }} - Inventory: {{ product.inventory }}
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
  }
}
</script>
