<script setup lang="ts">
import { OModal } from "@oruga-ui/oruga-next"

const props = defineProps<{
  selectedItem?: {
    avatar: string
    description: string
  } | null
}>()

const active = defineModel<boolean>("active")
</script>

<template lang="pug">
o-modal(v-model:active="active" teleport close-icon="" @click="active = false")
  .buy-content(@click.stop.prevent)
    .top-section
      .item-avatar {{ props.selectedItem?.avatar }}
      close-button(@click="active = false")
    .description {{ props.selectedItem?.description }}
    .buttons
      .button(style="width: 100px" @click="active = false") buy
      .button(style="width: 100px" @click="active = false") watch ad
</template>

<style lang="scss" scoped>
.buy-content {
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  width: 80%;
  height: 25svh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
}

.top-section {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
}

.item-avatar {
  font-size: 60px;
  text-align: center;
  margin-top: 20px;
}

.description {
  font-family: "Chivo Mono", monospace;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 17px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
}

.button {
  font-family: "Chivo Mono", monospace;
  font-size: 13px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $primary;
  color: white;
  margin-left: auto;
  margin-right: 20px;
}
</style>
