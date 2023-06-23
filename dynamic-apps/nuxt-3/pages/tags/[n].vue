<script setup>
const { params: { n } } = useRoute()
const times = Number(n)
</script>

<template>
  <div v-for="i in times">
    {{ i }}
  </div>
</template>

