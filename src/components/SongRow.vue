

<template>
    <li
        class="list-container d-flex align-center justify-space-between rounded-lg"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
    >
        <div class="d-flex align-center w-100 py-2">
            <div v-if="isHover" class="item-list ml-3 mr-2" style="width: 40px;">
                <Play
                    v-if="!isPlaying"
                    fillColor="#FFFFFF"
                    :size="25"
                    @click="useSong.playOrPauseThisSong(artist, track)"
                />
                <Play
                    v-else-if="isPlaying && currentTrack.name !== track.name"
                    fillColor="#FFFFFF"
                    :size="25"
                    @click="useSong.loadSong(artist, track)"
                />

                <Pause v-else fillColor="#FFFFFF" :size="25" @click="useSong.playOrPauseSong()"/>
            </div>
            <div v-else class="text-white font-weight-medium ml-5" style="width: 40px">
                <span :class="{'text-green-500': currentTrack && currentTrack.name === track.name}">
                    {{ index }}
                </span>
            </div>
            <div>
                <div
                    :class="{'text-green-500': currentTrack && currentTrack.name === track.name}"
                    class="text-white font-weight-medium"
                >
                    {{ track.name }}
                </div>
                <div class="text-sm font-weight-medium text-gray-400">{{ artist.name }}</div>
            </div>
        </div>
        <div class="d-flex align-center">
            <IconBtn v-if="isHover">
                <Heart fillColor="#1BD760" :size="22"/>
            </IconBtn>
            <div
                v-if="isTrackTime"
                class="text-xs mx-5 text-gray-400"
            >
                {{ isTrackTime }}
            </div>
        </div>
    </li>
</template>

<script setup>
import { ref, toRefs, onMounted } from 'vue'
import Heart from 'vue-material-design-icons/Heart.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';

import { useSongStore } from '../stores/song'
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTime = ref(null)

const props = defineProps({
    track: Object,
    artist: Object,
    index: Number,
})

const { track, artist, index } = toRefs(props)

onMounted(() => {
    const audio = new Audio(track.value.path);
    audio.addEventListener('loadedmetadata', function() {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTime.value = minutes+':'+seconds.toString().padStart(2, '0')
    });
})
</script>

<style lang="scss" scoped>
.list-container:hover {
  background: #2A2929;
}

.item-list:hover {
  cursor: pointer;
}
</style>
