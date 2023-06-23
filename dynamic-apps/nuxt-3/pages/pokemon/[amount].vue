<script setup>
const { params: { amount } } = useRoute()
const data = await $fetch(`http://127.0.0.1:8080/pokemon/${amount}`)
</script>

<template>
  <div v-for="pokemon in data">
    {{ pokemon }}
  </div>
</template>