<script setup>
import { useSlots } from 'vue'

const slots = useSlots()

defineProps({
  imageRight: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 lg:py-28 ">
      <div 
        v-if="slots.imageLeft"
        class="max-w-full">
        <slot name="imageLeft">
          
        </slot>
      </div>
      
      <div 
      :class="{ 'pl-10': slots.imageLeft }"
      class="max-w-[90%] flex flex-col justify-center">
        <slot>
          
        </slot>
      </div>
      
      <div class="max-w-[100%]"
        v-if="slots.imageRight"
        >
        <slot name="imageRight">
          
        </slot>
      </div>  
    </div>
  </div>
</template>
