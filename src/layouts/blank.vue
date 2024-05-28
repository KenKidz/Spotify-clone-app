<template>
  <VApp>
    <VMain class="main-theme">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </VMain>
  </VApp>
</template>

<style lang="scss" scoped>
.main-theme {
  background-image: linear-gradient(rgb(11,1,1,0.9) 0%, rgb(0,0,0) 100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
