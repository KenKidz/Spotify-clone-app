import { defineStore } from 'pinia'
import artist from '../artist.json'

interface StoreInterface {
  isPlaying: boolean
  audio: HTMLAudioElement
  currentArtist: any
  currentTrack: any
}

export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: <HTMLAudioElement>{},
    currentArtist: null,
    currentTrack: null
  } as StoreInterface),
  actions: {
    loadSong(artist: any, track: any) {
      this.currentArtist = artist
      this.currentTrack = track

      if (this.audio && this.audio.src) {
        this.audio.pause()
        this.isPlaying = false
        this.audio.src = ''
      }

      this.audio = new Audio()
      this.audio.src = track.path

      setTimeout(() => {
        this.isPlaying = true
        this.audio?.play()
      }, 200)
    },

    playOrPauseSong() {
      if (this.audio?.paused) {
        this.isPlaying = true
        this.audio.play()
      } else {
        this.isPlaying = false
        this.audio?.pause()
      }
    },

    playOrPauseThisSong(artist: string, track: any) {
      if (!this.audio || !this.audio.src || (this.currentTrack.id !== track.id)) {
        this.loadSong(artist, track)
        return
      }

      this.playOrPauseSong()
    },

    prevSong(currentTrack: any) {
      let track = artist.tracks[currentTrack.id - 2]
      this.loadSong(artist, track)
    },

    nextSong(currentTrack: any) {
      if (currentTrack.id === artist.tracks.length) {
        let track = artist.tracks[0]
        this.loadSong(artist, track)
      } else {
        let track = artist.tracks[currentTrack.id]
        this.loadSong(artist, track)
      }
    },

    playFromFirst() {
      this.resetState()
      let track = artist.tracks[0]
      this.loadSong(artist, track)
    },

    resetState() {
      this.isPlaying = false
      this.audio = <HTMLAudioElement>{}
      this.currentArtist = null
      this.currentTrack = null
    }
  },
  persist: true
})
