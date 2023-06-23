export default defineEventHandler(async () => {
  const pokemon = await $fetch('http://127.0.0.1:4000', {
    cache: 'no-cache'
  });
  
  return { pokemon }
})

