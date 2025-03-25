<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

import type { Task } from "~/task"

const props = defineProps<{
  task: Task
}>()

const emit = defineEmits(["changeStatus"])

function handleClick() {
  if (props.task.status === "incomplete") {
    emit("changeStatus", props.task)
  }
}
</script>

<template lang="pug">
.task
  .avatar
  .text-container
    .label {{ task.label }}
    .amount {{ `+${task.amount} $MANGO` }}
  .button(:class="task.status" @click="handleClick")
    o-icon.loading(v-if="task.status === 'checking'" pack="mdi" icon="loading" size="small")
    div(v-else) {{ task.status === "incomplete" ? "start" : "done" }}
</template>

<style scoped lang="scss">
.task {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100svw;
  gap: 20px;
  margin-bottom: 20px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: $light-gray;
  margin-left: 20px;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.label {
  font-family: "Chivo Mono", monospace;
  font-size: 17px;
  color: black;
}

.amount {
  font-family: "Chivo Mono", monospace;
  font-size: 13px;
  color: $text-gray;
}

.button {
  font-family: "Chivo Mono", monospace;
  font-size: 13px;
  width: 70px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-left: auto;
  margin-right: 20px;

  &.incomplete {
    background-color: $primary;
  }

  &.done {
    background-color: $secondary;
  }

  &.checking {
    background-color: $light-gray;
  }
}

.loading {
  animation: rotate 1s infinite linear;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
