<script setup lang="ts">
import spotifyLogo from '/public/images/icons/spotify-logo.png'
import { useUserStore } from '@/stores/userStore'
import { useSongStore } from '@/stores/song'
import { storeToRefs } from 'pinia'
import VerticalNavLayout from '@/layouts/components/VerticalNavLayout.vue'
import HorizontalNavLayout from '@/layouts/components/HorizontalNavLayout.vue'

const userStore = useUserStore()
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

onMounted(() => {
  userStore.init()
  isPlaying.value = false
})
</script>

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

<style lang="scss" scoped>
.Main {
  background-image: linear-gradient(rgb(var(--v-theme-on-primary)), black);
}

</style>
