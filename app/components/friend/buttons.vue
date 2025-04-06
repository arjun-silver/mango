<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

const emit = defineEmits(["share", "copy"])
</script>

<template lang="pug">
.button-container
  ui-button.invite(size="big" variant="secondary" @click="emit('share')") Invite a friend
  ui-button(size="big" variant="secondary" @click="emit('copy')")
    o-icon(pack="mdi" icon="content-copy")
</template>

<style scoped lang="scss">
.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 95%;
  justify-content: space-between;
  max-height: 50px;
  gap: 20px;
}

.invite {
  flex-grow: 1;
}
</style>
