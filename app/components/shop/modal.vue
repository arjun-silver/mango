<script setup lang="ts">
import { OModal } from "@oruga-ui/oruga-next"

interface Item {
  name: string
  avatar: string
  price: number
  label: string
  description: string
}

const is_active = defineModel<boolean>("active")
const show_buy_modal = ref(false)
const selected_item = ref<Item | null>(null)

const items = ref<Item[]>([
  { name: "Power up", avatar: "️️🏎️", price: 4000, label: "buy", description: "increase your profit per tap for 5 seconds?" },
  { name: "Regenerate", avatar: "⚡", price: 4000, label: "buy", description: "regenerate your energy?" },
  { name: "Capacity", avatar: "🔋", price: 4000, label: "3/5", description: "increase your capacity by 10%?" },
  { name: "Regeneration", avatar: "⏳", price: 4000, label: "2/5", description: "increase your regeneration speed by 10%?" },
  { name: "Tap profit", avatar: "💪", price: 4000, label: "5/5", description: "Increase your tap profit by 10%?" },
])

function handleItemBuy(item: Item) {
  selected_item.value = item
  show_buy_modal.value = true
}
</script>

<template lang="pug">
o-modal(v-model:active="is_active" teleport close-icon="" @click="is_active = false")
  .content(@click.stop.prevent)
    close-button(@click="is_active = false")
    shop-item(
      v-for="item in items"
      :key="item.name"
      :item="item"
      @buy="handleItemBuy(item)"
    )

shop-buy(v-model:active="show_buy_modal" :selected-item="selected_item")
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
</style>
