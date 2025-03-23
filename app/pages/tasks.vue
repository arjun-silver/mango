<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

interface Task {
  label: string
  amount: number
  status: string
}

const tasks = ref<Task[]>([
  { label: "Task name", amount: 4200, status: "incomplete" },
  { label: "Join mango", amount: 4200, status: "incomplete" },
  { label: "Join hashcat", amount: 4200, status: "incomplete" },
  { label: "Task name", amount: 4200, status: "done" },
  { label: "Task name", amount: 4200, status: "done" },
])

function change_status(task: Task) {
  if (task.status === "incomplete") {
    task.status = "checking"
    setTimeout(() => {
      task.status = "done"
    }, 3000)
  }
}
</script>

<template lang="pug">
.task(v-for="task in tasks")
  .avatar
  .text-container
    .label {{ task.label }}
    .amount {{ `+${task.amount} $MANGO` }}
  .button(:class="task.status" @click="change_status(task)")
    o-icon.loading(v-if="task.status === 'checking'" pack="mdi" icon="loading" size="small")
    div(v-else) {{ task.status === "incomplete" ? "start" : "done" }}
</template>

<style lang="scss" scoped>
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
