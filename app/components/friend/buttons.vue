<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

const emit = defineEmits(["share", "copy"])
</script>

<template lang="pug">
.button-container
  .invite-button(@click="emit('share')") Invite a friend
  .copy-button(@click="emit('copy')")
    o-icon(pack="mdi" icon="content-copy")
</template>

<style scoped lang="scss">
.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 95%;
  justify-content: space-between;
  gap: 20px;
}

.invite-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 50px;
  background-color: $secondary;
  border-radius: 10px;
  font-family: "Chivo Mono", monospace;
  font-size: 15px;
}

.copy-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: $secondary;
  border-radius: 10px;
}
</style>
