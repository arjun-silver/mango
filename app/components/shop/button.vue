<script setup lang="ts">
const emit = defineEmits(["openModal"])
</script>

<template lang="pug">
ui-button.shop-button(variant="secondary" size="big" @click="emit('openModal')")
  o-icon(pack="mdi" icon="storefront-outline" size="medium")
</template>

<style scoped lang="scss">
.shop-button {
  width: 50px;
}
</style>
