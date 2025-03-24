<script setup lang="ts">
import { OModal } from "@oruga-ui/oruga-next"

interface Item {
  name: string
  avatar: string
  price: number
  label: string
}

const is_active = defineModel<boolean>("active")

const items = ref<Item[]>([
  { name: "Power up", avatar: "️️🏎️", price: 4000, label: "buy" },
  { name: "Regenerate", avatar: "⚡", price: 4000, label: "buy" },
  { name: "Capacity", avatar: "🔋", price: 4000, label: "3/5" },
  { name: "Regeneration", avatar: "⏳", price: 4000, label: "2/5" },
  { name: "Tap profit", avatar: "💪", price: 4000, label: "5/5" },
])
</script>

<template lang="pug">
o-modal(v-model:active="is_active" teleport close-icon="" @click="is_active = false")
  .content(@click.stop.prevent)
    o-icon.cancel-icon(pack="mdi" icon="close" size="medium" @click="is_active = false")
    .item(v-for="item in items")
      .avatar {{ item.avatar }}
      .text-container
        .name {{ item.name }}
        .price {{ item.price }} $MANGO
      .button(:class="item.label === '5/5' ? 'sold' : ''") {{ item.label }}
</template>

<style lang="scss" scoped>
.content {
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  width: 80%;
  height: 50svh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
}

.cancel-icon {
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.avatar {
  margin-left: 20px;
  font-size: 35px;
}

.text-container {
  font-family: "Chivo Mono", monospace;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5px;
}

.name {
  font-size: 15px;
}

.price {
  font-size: 13px;
  color: $text-gray;
}

.button {
  font-family: "Chivo Mono", monospace;
  font-size: 13px;
  width: 70px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $primary;
  color: white;
  margin-left: auto;
  margin-right: 20px;

  &.sold {
    background-color: $secondary;
  }
}
</style>
