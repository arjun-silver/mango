<script setup lang="ts">
import { OModal } from "@oruga-ui/oruga-next"

defineProps<{ showAd: () => Promise<void> }>()

interface Item {
  name: string
  avatar: string
  price: number
  label: string
  description: string
}

const isActive = defineModel<boolean>("active")
const showBuyModal = ref(false)
const selectedItem = ref<Item | null>(null)

const items = ref<Item[]>([
  { name: "Power up", avatar: "️️🏎️", price: 4000, label: "buy", description: "increase your profit per tap for 5 seconds?" },
  { name: "Regenerate", avatar: "⚡", price: 4000, label: "buy", description: "regenerate your energy?" },
  { name: "Capacity", avatar: "🔋", price: 4000, label: "3/5", description: "increase your capacity by 10%?" },
  { name: "Regeneration", avatar: "⏳", price: 4000, label: "2/5", description: "increase your regeneration speed by 10%?" },
  { name: "Tap profit", avatar: "💪", price: 4000, label: "5/5", description: "Increase your tap profit by 10%?" },
])

function handleItemBuy(item: Item) {
  selectedItem.value = item
  showBuyModal.value = true
}
</script>

<template lang="pug">
o-modal(v-model:active="isActive" teleport close-icon="" @click="isActive = false")
  .content(@click.stop.prevent)
    close-button(@click="isActive = false")
    shop-item(
      v-for="item in items"
      :key="item.name"
      :item="item"
      @buy="handleItemBuy(item)"
    )

shop-buy(v-model:active="showBuyModal" :selected-item="selectedItem" :show-ad="showAd")
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
