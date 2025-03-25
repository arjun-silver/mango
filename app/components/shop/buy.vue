<script setup lang="ts">
import { OModal } from "@oruga-ui/oruga-next"

const show_buy_modal = defineModel<boolean>("show_by_modal")
</script>

<template lang="pug">
o-modal(v-model:active="show_buy_modal" teleport close-icon="" @click="show_buy_modal = false")
  .content(@click.stop.prevent)
    friend-badge
</template>

<style lang="scss" scoped>
.content {
  background-color: $primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  width: 80%;
  height: 50svh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
</style>
