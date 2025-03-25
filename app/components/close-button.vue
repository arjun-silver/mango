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
  position: absolute;
  right: 20px;
  top: 20px;
  margin-bottom: 20px;
}
</style>
