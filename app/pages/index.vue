<script setup lang="ts">
const count = ref(0)
const link = ref("empty_link")
async function create_invoice_link() {
  const data = await $fetch("/api/tg/create")
  count.value++
  link.value = data
  window.open(data)
}
</script>

<template lang="pug">
button(@click="create_invoice_link") create
button(@click="window.open(link)") open {{ link }}
pre {{ count }}
pre hi!
</template>
