<script setup lang="ts">
</script>

<template lang="pug">
.layout
  .main
    .page: nuxt-page
  nav-bar
</template>

<style module lang="scss">
body {
  background-color: #f1f1f1;
  background-size: 400%;
  overflow: hidden;
}
.layout {
  display: flex;
  height: 100svh;
  width: 100%;
  background-color: inherit;
  flex-direction: column;
}

.main {
  display: flex;
  position: absolute;
  flex-direction: column;
}

.page {
  flex: 1;
  overflow-y: auto;
}
</style>
