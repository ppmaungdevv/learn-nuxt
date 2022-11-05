<template>
  <div class="app">
      <NavBar />
      <Nuxt keep-alive :keep-alive-props="{ max: 3 }" />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>