<script setup lang="ts">
async function create_invoice_link() {
  await $fetch("/api/tg/create")
}
</script>

<template lang="pug">
button(@click="create_invoice_link") create
pre hi!
</template>
