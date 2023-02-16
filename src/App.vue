<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/views/Home'
export default {
  name: 'App',
  components: {
    Home: Home
  }
}
</script>

<style scoped>
</style>
