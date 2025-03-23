<script setup lang="ts">
import { OIcon } from "@oruga-ui/oruga-next"

const activeTab = ref("home")
</script>

<template lang="pug">
.nav-bar
  .tab(@click="activeTab = 'home'; $router.push('/')")
    .o-icon-wrapper(:class="{ active: activeTab === 'home' }")
      o-icon(pack="mdi" icon="home-outline" size="medium")
  .tab(@click="activeTab = 'frens'; $router.push('/frens')")
    .o-icon-wrapper(:class="{ active: activeTab === 'frens' }")
      o-icon(pack="mdi" icon="account-group-outline" size="medium")
  .tab(@click="activeTab = 'tasks'; $router.push('/tasks')")
    .o-icon-wrapper(:class="{ active: activeTab === 'tasks' }")
      o-icon(pack="mdi" icon="list-box-outline" size="medium")
</template>

<style lang="scss">
.nav-bar {
  background-color: #fff;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
}

.o-icon-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 80px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 60px;
    height: 60px;
    background-color: rgba(236, 138, 61, 0.2);
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  &.active::before {
    transform: translate(-50%, -50%) scale(1);
  }
}

.o-icon {
  position: relative;
  z-index: 1;

  .active & {
    color: #dc7c33;
  }
}
</style>
