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
  background-color: var(--background);
  background-size: 400%;
  overflow: hidden;
}
.layout {
  display: flex;
  height: 100svh;
  width: 100%;
  background-color: inherit;
  flex-direction: column;
  margin-top: 10svh;
  align-items: center;
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
