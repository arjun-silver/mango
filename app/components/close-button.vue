<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

const emit = defineEmits(["click"])
</script>

<template lang="pug">
o-icon.cancel-icon(
  pack="mdi"
  icon="close"
  size="medium"
  @click.stop="emit('click')"
)
</template>

<style lang="scss" scoped>
.cancel-icon {
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
