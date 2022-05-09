<template>
  <div id="app">
      <he-header/>
      <router-view/>
      <he-footer/>
  </div>
</template>

<script>
import HeHeader from './components/Layout/HeHeader.vue'
import HeFooter from './components/Layout/HeFooter.vue'
export default {
  name: 'App',
  components: {
    HeHeader,
    HeFooter,
  }
}
</script>

<style>

</style>
