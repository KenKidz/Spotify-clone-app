<template>
    <div
        class="d-flex align-center"
        style="width: 150px;"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
    >
        <VSlider
          v-model="vol"
          color="#fff"
          :min="0"
          :max="100"
          :thumb-size="isHover ? 10 : 0"
          :track-fill-color="isHover ? 'green-accent-4': '#fff'"
          style="height: 40px"
        >
          <template #prepend>
            <div
              class="hover-cursor-pointer pt-2"
              @click="onVolIconClick"
              @mouseenter="isHover = true"
              @mouseleave="isHover = false">
              <VolumeMute v-if="isVolMute" :fillColor="isHover ? '#00C853' : '#FFFFFF'" :size="20" />
              <VolumeHigh v-else :fillColor="isHover ? '#00C853' : '#FFFFFF'" :size="20" />
            </div>
          </template>
        </VSlider>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'

import VolumeMute from 'vue-material-design-icons/VolumeMute.vue';
import VolumeHigh from 'vue-material-design-icons/VolumeHigh.vue';

import { useSongStore } from '@/stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { audio } = storeToRefs(useSong)

let isHover = ref(false)
let vol = ref<number>(80)
let isVolMute = ref<boolean>(false)
let volSave = ref<number>(0)

isVolMute.value = vol.value == 0;

watch(() => vol.value, (newVolume) => {
  if (audio.value) {
    audio.value.volume = newVolume / 100
    if(newVolume != 0) {
      volSave.value = newVolume
    }
  }
})

const onVolIconClick = () => {
  isVolMute.value = !isVolMute.value
  if(isVolMute.value) {
    vol.value = 0
  } else {
    if(volSave.value) {
      vol.value = volSave.value
    } else {
      vol.value = 80
    }
  }
}

</script>

<style>
</style>
