<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import MusicPlayerVolume from '../components/MusicPlayerVolume.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import PictureInPictureBottomRight from 'vue-material-design-icons/PictureInPictureBottomRight.vue'
import SkipBackward from 'vue-material-design-icons/SkipBackward.vue'
import SkipForward from 'vue-material-design-icons/SkipForward.vue'

import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia'

const useSong = useSongStore()
const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong)
const duration = ref<number>(0)

let isHover = ref<boolean>(false)
let isTrackTimeCurrent = ref<any>(null)
let isTrackTimeTotal = ref<any>(null)
let seeker = ref<any>(0)
let seekerContainer = ref<any>(null)

onMounted(() => {
  if (audio.value) {
    setTimeout(() => {
      timeupdate()
    }, 300)
  }
})

const timeupdate = () => {
  if(audio.value) {
    audio.value.addEventListener('timeupdate', function() {
      duration.value = audio.value.duration
      const minutes = Math.floor(audio.value.currentTime / 60)
      const seconds = Math.floor(audio.value.currentTime - minutes * 60)
      isTrackTimeCurrent.value = minutes + ':' + seconds.toString().padStart(2, '0')
      const minutesTotal = Math.floor(duration.value / 60)
      const secondsTotal = Math.floor(duration.value % 60)
      isTrackTimeTotal.value = minutesTotal + ':' + secondsTotal.toString().padStart(2, '0')
      seeker.value = audio.value.currentTime
    })
  }
}

const seekAudio = () => {
  audio.value.currentTime = seeker.value
}

watch(() => audio.value, () => {
  timeupdate()
})

watch(() => isTrackTimeCurrent.value, (time) => {
  if (time && time == isTrackTimeTotal.value) {
    useSong.nextSong(currentTrack.value)
  }
})

</script>

<template>
  <VCard
    v-if="audio"
    class="music-player w-100 pa-0"
  >
    <VRow no-gutters>
      <VCol class="d-flex align-center" cols="3">
        <div class="d-flex align-center">
          <div class="d-flex align-center ml-4">
            <VImg class="rounded-sm elevation-25" width="55" cover :src="currentArtist.albumCover" />
            <div class="ml-4">
              <div class="text-white hover-cursor-pointer" style="font-size: 14px">
                {{ currentTrack.name }}
              </div>
              <div class="text-gray-500 text-hover-white hover-cursor-pointer" style="font-size: 11px">
                {{ currentArtist.name }}
              </div>
            </div>
          </div>
          <div class="d-flex align-center ml-8">
            <Heart fillColor="#1BD760" :size="20" />
            <PictureInPictureBottomRight class="ml-4" fillColor="#FFFFFF" :size="18" />
          </div>
        </div>
      </VCol>
      <VCol cols="6">
        <div class="d-flex flex-column align-center py-3">
          <div class="d-flex align-center justify-center ">
            <IconBtn class="mx-2">
              <SkipBackward fillColor="#FFFFFF" :size="25" @click="useSong.prevSong(currentTrack)" />
            </IconBtn>
            <VBtn class="rounded-circle bg-white mx-3" size="28"
                  @click="useSong.playOrPauseThisSong(currentArtist, currentTrack)">
              <VIcon v-if="!isPlaying" color="#181818" size="25">mdi-play</VIcon>
              <VIcon v-else color="#181818" size="25">mdi-pause</VIcon>
            </VBtn>
            <IconBtn class="mx-2">
              <SkipForward fillColor="#FFFFFF" :size="25" @click="useSong.nextSong(currentTrack)" />
            </IconBtn>
          </div>

          <div style="height: 30px; width: 450px">
            <div
              ref="seekerContainer"
              @mouseenter="isHover = true"
              @mouseleave="isHover = false"
            >
              <v-slider
                v-model="seeker"
                color="#fff"
                :max="duration"
                :thumb-size="isHover ? 10 : 0"
                :track-fill-color="isHover ? 'green-accent-4': '#fff'"
                @update:modelValue="seekAudio"
              >
                <template #prepend>
                  <div class="text-white" style="font-size: 12px">{{ isTrackTimeCurrent || '--:--' }}
                  </div>
                </template>
                <template #append>
                  <div class="text-white" style="font-size: 12px">{{ isTrackTimeTotal || '--:--' }}
                  </div>
                </template>
              </v-slider>
            </div>
          </div>
        </div>
      </VCol>
      <VSpacer/>
      <VCol class="d-flex align-center justify-end" cols="3">
        <div class="d-flex align-center justify-end pr-10">
          <MusicPlayerVolume />
        </div>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.music-player {
  position: fixed;
  bottom: 0;
  z-index: 99999;
  background: #181818;
  height: 85px;
}

</style>
