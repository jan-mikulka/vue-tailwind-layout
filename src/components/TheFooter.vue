<script setup>
const links = [
    'První proklik',
    'Druhý proklik',
    'Třetí proklik'
]
</script>

<template>
  <footer class="flex justify-evenly items-center  my-4 mx-2 space-x-8 border-t-8 border-primary-100 mt-36 pt-8">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    
    <span class="flex flex-col lg:flex-row lg:space-x-8"> 
        <a href="" v-for="link in links" :key="link">{{ link }}</a>
    </span>

    <div>© 2022 Thalion All rights reserved.</div>
  </footer>
</template>