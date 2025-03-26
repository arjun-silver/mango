interface TadsAdController {
  loadAd: () => Promise<void>
  showAd: () => Promise<void>
  destroy?: () => void
}

interface UseTadsAdOptions {
  widgetId: string | number
  debug?: boolean
  containerId?: string
  onShowReward?: (adId: string) => void
  onClickReward?: (adId: string) => void
  onAdsNotFound?: () => void
}

export function useTadsAd(options: UseTadsAdOptions) {
  const adController = ref<TadsAdController | null>(null)
  const isLoaded = ref(false)
  const isShowing = ref(false)
  const error = ref<Error | null>(null)
  const containerElement = ref<HTMLElement | null>(null)

  const defaultCallbacks = {
    onShowReward: (adId: string) => options.onShowReward?.(adId),
    onClickReward: (adId: string) => options.onClickReward?.(adId),
    onAdsNotFound: () => {
      options.onAdsNotFound?.()
      if (containerElement.value) {
        containerElement.value.innerHTML = "No ads available"
      }
    },
  }

  const ensureContainer = () => {
    if (!containerElement.value) {
      const container = options.containerId
        ? document.getElementById(options.containerId)
        : document.createElement("div")

      if (!container) {
        throw new Error("Ad container not found")
      }

      if (!options.containerId) {
        container.className = "tads-container"
        document.body.appendChild(container)
      }

      containerElement.value = container
    }
    return containerElement.value
  }

  const initialize = async () => {
    try {
      if (!window.tads) {
        throw new Error("TADS library not loaded")
      }

      const container = ensureContainer()

      adController.value = window.tads.init({
        widgetId: options.widgetId,
        debug: options.debug ?? false,
        container, // Pass the container element
        ...defaultCallbacks,
      })

      await adController.value.loadAd()
      isLoaded.value = true
    } catch (err) {
      error.value = err as Error
      defaultCallbacks.onAdsNotFound()
    }
  }

  const showAd = async () => {
    console.log("trying to show the ad")
    console.log(!adController.value)
    if (!adController.value) {
      return
    }
    try {
      console.log("really trying!")
      isShowing.value = true
      await adController.value.showAd()
    } catch (err) {
      console.log("oh no! some errors!")
      error.value = err as Error
      console.log(error.value)
      defaultCallbacks.onAdsNotFound()
    } finally {
      isShowing.value = false
    }
  }

  onScopeDispose(() => {
    if (adController.value?.destroy) {
      adController.value.destroy()
    }
    // Clean up auto-created container
    if (!options.containerId && containerElement.value) {
      document.body.removeChild(containerElement.value)
    }
  })

  // Auto-initialize by default
  initialize()

  return {
    showAd,
    reload: initialize,
    isLoaded,
    isShowing,
    error,
    containerElement: containerElement as Ref<HTMLElement>,
  }
}
