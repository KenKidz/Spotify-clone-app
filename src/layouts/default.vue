<template>
  <VLayout>
    <VerticalNavLayout />
    <HorizontalNavLayout />

    <VMain class="Main">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <Component :is="Component" />
        </transition>
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

</style>
