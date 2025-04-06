<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

withDefaults(
  defineProps<{
    title?: string
  }>(),
  {},
)

defineEmits<{
  close: []
}>()
</script>

<template lang="pug">
.modal
  .header
    .title: slot(name="title") {{ title }}
    o-icon(pack="mdi" icon="close" size="medium" @click="$emit('close')")
  .content: slot
</template>

<style module lang="scss">
.modal {
  display: flex;
  flex-direction: column;
  background: var(--background);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.header {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    font-family: "Chivo Mono", monospace;
    font-size: 20px;
    color: var(--black);
    display: flex;
    align-items: center;
  }
}

.content {
  overflow: auto;
  padding: 20px;
}
</style>
