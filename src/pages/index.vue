<script setup lang="ts">
import type { ILibrary } from '@/interfaces/LibraryInterface'
import Albums from '@/services/Albums.service'

const podcastItems = ref<ILibrary[]>([
  {
    id: 1,
    image: "https://picsum.photos/id/30/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 2,
    image: "https://picsum.photos/id/45/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 3,
    image: "https://picsum.photos/id/65/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 4,
    image: "https://picsum.photos/id/67/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 5,
    image: "https://picsum.photos/id/100/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
])
const radioItems = ref<ILibrary[]>([
  {
    id: 1,
    image: "https://picsum.photos/id/120/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 2,
    image: "https://picsum.photos/id/45/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 3,
    image: "https://picsum.photos/id/65/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 4,
    image: "https://picsum.photos/id/232/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 5,
    image: "https://picsum.photos/id/187/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
])
const songItems = ref<ILibrary[]>([
  {
    id: 1,
    image: "https://picsum.photos/id/88/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 2,
    image: "https://picsum.photos/id/243/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 3,
    image: "https://picsum.photos/id/123/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 4,
    image: "https://picsum.photos/id/121/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
  {
    id: 5,
    image: "https://picsum.photos/id/99/300/300",
    title: "Title is here",
    subTitle: "Subtitle is here"
  },
])

onBeforeMount(async () => {
  await loadData()
})

const loadData = async () => {
  await Albums.getAlbums()
}

</script>

<template>
  <div style="margin-bottom: 90px;">
    <div class="pa-6">
      <VBtn
        variant="text"
        class="text-white text-2xl font-weight-medium"
      >
        Podcasts to make you smarter
      </VBtn>

      <div class="py-2"></div>

      <div class="d-flex">
        <HomeCard v-for="data in podcastItems" :key="data.id" :item="data" />
      </div>
    </div>

    <div class="pa-6">
      <VBtn
        variant="text"
        class="text-white text-2xl font-weight-medium"
      >
        Recommended radio
      </VBtn>

      <div class="py-2"></div>

      <div class="d-flex">
        <HomeCard v-for="data in radioItems" :key="data.id" :item="data" />
      </div>
    </div>

    <div class="pa-6">
      <VBtn
        variant="text"
        class="text-white text-2xl font-weight-medium"
      >
        Recommended songs
      </VBtn>

      <div class="py-2"></div>

      <div class="d-flex">
        <HomeCard v-for="data in songItems" :key="data.id" :item="data" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>
