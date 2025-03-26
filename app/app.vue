<script setup lang="ts">
import { TonConnectUIProvider } from "@townsquarelabs/ui-vue"

const options = {
  manifestUrl: "https://arjun-silver.github.io/mango/ton-connect-manifest.json",
}

useHead({
  script: [
    {
      src: "https://richinfo.co/richpartners/telegram/js/tg-ob.js",
      defer: true,
    },
    {
      innerHTML: `
        window.TelegramAdsController = new TelegramAdsController();
        window.TelegramAdsController.initialize({
          pubId: "966020",
          appId: "1876",
        });
      `,
      type: "text/javascript",
    },
  ],
})
</script>

<template lang="pug">
ton-connect-u-i-provider(:options="options")
  nuxt-layout
    nuxt-page
</template>
