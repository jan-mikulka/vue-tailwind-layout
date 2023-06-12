<script setup>
import products from '@/assets/products.js';
import ProductItem from './ProductItem.vue';

console.log({ products })
</script>

<template>
  <div class="container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    <ProductItem
      v-for="product in products.products" :key="product.id" :product="product"
    />
</div>
</template>
