<template>
  <NavbarComp></NavbarComp>
  <router-view></router-view>
</template>
<script setup lang="ts">
import NavbarComp from './elements/NavbarComp.vue';
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
