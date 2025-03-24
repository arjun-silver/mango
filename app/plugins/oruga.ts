import { Button, Icon, Modal, OrugaConfig } from "@oruga-ui/oruga-next"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(Modal)
    .use(Icon)
    .use(Button)
    .use(OrugaConfig, {
      modal: {
        teleport: true,
      },
    })
})
