<script setup>
  const links = [
    'O nás',
    'Služby',
    'Aktuality',
    'Novinky',
    'Kontakty'
  ]
</script>

<template>
    <nav class="md:space-x-8 flex flex-col md:flex-row">
        <div v-for="link in links" :key="link" class="text-button">
            {{ link }}
        </div>
    </nav>
</template>