<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="text-center flex flex-col justify-between">
    <img :src="`https://picsum.photos/id/${product.id}/328`" class="mb-4"/>

      <h2 class="mb-4">
        {{ product.title }}
      </h2>

    <div class="mb-6">
      {{ product.description }}
    </div>

    <div>
      <a href="/" class="btn btn--primary text-center">
        Zjistit více
      </a>  
    </div>
  </div>
</template>
