<script setup lang="ts">
import { NuxtLink } from "#components"

const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary"
    size?: "medium" | "big"
    disabled?: boolean
    loading?: boolean
    href?: string
  }>(),
  {
    variant: "primary",
    size: "medium",
  },
)

const component = computed(() => {
  if (props.href) {
    return NuxtLink
  }
  return "button"
})
</script>

<template lang="pug">
component.btn(
  :is="component"
  :disabled="loading ? true : disabled"
  :mclass="[`_variant_${variant}`, `_size_${size}`]"
  v-bind="{ href: props.href, ...$attrs }")
    slot(v-if="!loading")
    o-icon.loading(v-if="loading" pack="mdi" icon="loading" size="small")
</template>

<style module lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Chivo Mono", monospace;
  font-size: 13px;
  border-radius: 10px;
  color: white;
}

.btn._variant {
  &_primary {
    padding: 10px 15px;
    background: var(--primary);
    color: var(--white);

    &:disabled {
      opacity: 0.4;
    }

    &.loading {
      background: var(--primary);
      color: var(--white);
    }
  }

  &_secondary {
    background: var(--secondary);
    color: var(--black);
  }
}

.btn._size {
  &_big {
    padding: 15px;
    max-height: 50px;
    font-size: 15px;
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
