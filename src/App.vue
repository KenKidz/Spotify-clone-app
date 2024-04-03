<script setup lang="ts">
</script>

<template>
  <VApp>
    <VMain class="main-theme">
      <RouterView />
    </VMain>
  </VApp>
</template>

<style lang="scss" scoped>
.main-theme {
  background-image: linear-gradient(rgb(11,1,1,0.9) 0%, rgb(0,0,0) 100%);
}
</style>
