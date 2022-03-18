<template>
  <div class="shop_wrapper">
    <ProductItem v-for="n in 15" :key="n"/>
  </div>
</template>

<script>
import ProductItem from '@/components/shop/ProductItem.vue';

export default {
  name: 'ShopView',
  components: {
    ProductItem,
  },
};
</script>
