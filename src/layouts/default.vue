<template>
  <VLayout>
    <VerticalNavLayout />
    <HorizontalNavLayout />

    <VMain class="Main">
      <RouterView v-slot="{ Component, route }">
        <VScrollXTransition>
          <Component :is="Component" :key="route"/>
        </VScrollXTransition>
      </RouterView>
    </VMain>
    <MusicPlayer v-if="currentTrack"/>
  </VLayout>
</template>

<script setup lang="ts">
import { useSongStore } from '@/stores/song'
import { storeToRefs } from 'pinia'
import VerticalNavLayout from '@/layouts/components/VerticalNavLayout.vue'
import HorizontalNavLayout from '@/layouts/components/HorizontalNavLayout.vue'

const MusicPlayer = defineAsyncComponent(() => import('@/components/MusicPlayer.vue'))
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => {
  isPlaying.value = false
})
</script>

<style lang="scss" scoped>
.Main {
  background-image: linear-gradient(rgb(var(--v-theme-on-primary)), black);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
