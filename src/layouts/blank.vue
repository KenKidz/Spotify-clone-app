<script setup lang="ts">

import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
onMounted(() => {
  userStore.init()
})
</script>

<template>
  <VApp>
    <VMain class="main-theme">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <Component :is="Component" />
        </transition>
      </RouterView>
    </VMain>
  </VApp>
</template>

<style lang="scss" scoped>
.main-theme {
  background-image: linear-gradient(rgb(11,1,1,0.9) 0%, rgb(0,0,0) 100%);
}
</style>
