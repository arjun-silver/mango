<script setup lang="ts">
const props = defineProps<{
  selectedItem?: {
    avatar: string
    description: string
  } | null
}>()

const emit = defineEmits<{
  close: []
}>()
function onReward() {

}

function onError() {
  console.error("error")
}

const { showAd } = useAdsgram({ blockId: "9237", onReward, onError })
</script>

<template lang="pug">
ui-modal(@close="emit('close')")
  template(#title)
    .avatar {{ selectedItem?.avatar }}
  .content
    .description {{ props.selectedItem?.description }}
    .buttons
      ui-button.button(@click="emit('close')") buy
      ui-button.button(@click="showAd") watch ad
</template>

<style lang="scss" scoped>
.avatar {
  font-size: 35px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
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
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-top: 10px;
}

.button {
  width: 100%;
}
</style>
