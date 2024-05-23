<template>
  <div class="pa-8 overflow-x-hidden">
    <div
      class="text-white text-2xl font-weight-medium cursor-pointer"
    >
      {{ artist.name }}
    </div>

    <div class="py-2"></div>
    <div class="d-flex align-center w-100 h-100" style="position: relative">
      <img width="140" :src="artist.albumCover" alt="album-cover">

      <div class="w-100 ml-5">
        <div
          style="font-size: 33px; position: absolute; top:0"
          class="text-white w-100 cursor-pointer font-weight-medium"
        >
          {{ artist.name }}
        </div>

        <div class="text-gray-300 d-flex" style="font-size: 13px">
          <div class="d-flex">Album</div>
          <div class="ml-2 d-flex">
            <div class="circle mt-2 mr-2" />
            <span class="me-1">{{ artist.releaseYear }}</span>
          </div>
          <div class="ml-2 d-flex">
            <div class="circle mt-2 mr-2" />
            <span class="me-1">{{ artist.tracks.length }} songs</span>
          </div>
        </div>

        <div class="d-flex ga-3 align-center justify-start mb-2" style="position: absolute; bottom: 0">
          <VBtn class="rounded-circle bg-white" size="28" @click="playFunc()">
            <VIcon v-if="!isPlaying" size="25">mdi-play</VIcon>
            <VIcon v-else size="25">mdi-pause</VIcon>
          </VBtn>
          <IconBtn>
            <Heart fillColor="#1BD760" :size="27"/>
          </IconBtn>
          <IconBtn>
            <DotsHorizontal fillColor="#FFFFFF" :size="25"/>
          </IconBtn>
        </div>
      </div>
    </div>

    <div class="mt-6"></div>
    <div class="d-flex align-center justify-space-between px-5 pt-2">
      <div class="d-flex align-center justify-space-between text-gray-400">
        <div class="me-7">#</div>
        <div class="text-sm">Title</div>
      </div>
      <div><ClockTimeThreeOutline fillColor="#FFFFFF" :size="18"/></div>
    </div>
    <div class="mt-2" style="border-top: 1px solid #2A2A2A"></div>
    <div class="mb-4"></div>
    <ul class="w-100" v-for="(track, index) in artist.tracks" :key="track">
      <SongRow :artist="artist" :track="track" :index="++index"/>
    </ul>
  </div>
</template>

<script setup>
import SongRow from '@/components/SongRow.vue'
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import ClockTimeThreeOutline from 'vue-material-design-icons/ClockTimeThreeOutline.vue';
import artist from '@/artist.json'

import { useSongStore } from '@/stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong)

const playFunc = () => {
  if (currentTrack.value) {
    useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value)
    return
  }
  useSong.playFromFirst()
}
</script>

<style scoped>
.circle {
  width: 4px;
  height: 4px;
  background-color: rgb(189, 189, 189);
  border-radius: 100%;
}
</style>
