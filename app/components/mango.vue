<script setup lang="ts">
defineProps<{
  score: number
}>()

const emit = defineEmits(["updateScore"])
</script>

<template lang="pug">
.mango-wrapper
  img.mango(src="/assets/mango.svg" @click="emit('updateScore')")
</template>

<style scoped lang="scss">
.mango-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  animation: move_up_down 3s ease-in-out infinite alternate;

  &:active .mango {
    transform: scale(1.05);
    transition: transform 0.1s linear;
  }

  @keyframes move_up_down {
    0% {
      transform: translate(-50%, calc(-50% - 10px));
    }
    100% {
      transform: translate(-50%, calc(-50% + 10px));
    }
  }
}

.mango {
  width: 100%;
  height: 100%;
}
</style>
