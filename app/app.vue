<script setup lang="ts">
import { TonConnectUIProvider } from "@townsquarelabs/ui-vue"

const options = {
  manifestUrl: "https://arjun-silver.github.io/mango/ton-connect-manifest.json",
}
</script>

<template lang="pug">
ton-connect-u-i-provider(:options="options")
  tads-me(:widget-id="401")
  nuxt-layout
    nuxt-page(id="tads-container-401")
</template>
