<template>
  <div id="app">
      <he-header/>
      <he-content/>
      <he-footer/>
  </div>
</template>

<script>
import HeHeader from './components/Layout/HeHeader.vue'
import HeContent from './components/Layout/HeContent.vue'
import HeFooter from './components/Layout/HeFooter.vue'
export default {
  name: 'App',
  components: {
    HeHeader,
    HeContent,
    HeFooter,
  }
}
</script>

<style>

</style>
