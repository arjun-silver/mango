<script setup lang="ts">
import { OModal } from "@oruga-ui/oruga-next"

const props = defineProps<{ showAd: () => Promise<void> }>()

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

shop-buy(v-model:active="show_buy_modal" :selected-item="selected_item" :show-ad="showAd")
</template>

<style lang="scss" scoped>
.content {
  position: relative;
  background-color: $background;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  width: 80%;
  height: 50svh;
  padding-top: 60px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
</style>
