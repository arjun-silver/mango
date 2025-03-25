<script setup lang="ts">
const emit = defineEmits(["openModal"])
</script>

<template lang="pug">
.shop-button(@click="emit('openModal')")
  o-icon(pack="mdi" icon="storefront-outline" size="medium")
</template>

<style scoped lang="scss">
.shop-button {
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #ff7700;
}
</style>
