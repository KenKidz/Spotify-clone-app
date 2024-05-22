<script setup lang="ts">
import Podcasts from '@/services/Podcasts.service'

const podcastItems = ref<any>({})

onBeforeMount(async () => {
  await loadData()
})

const loadData = async () => {
  await getPodcast()
}

const getPodcast = async () => {
  const res = await Podcasts.getPodcasts()
  podcastItems.value = res.data.podcastUnionV2.episodesV2
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

      <div>
        <VSlideGroup show-arrows>
          <template #next>
            <VBtn
              variant="elevated"
              rounded
              size="35"
              color="black"
            >
              <VIcon size="35">tabler-chevron-right</VIcon>
            </VBtn>
          </template>
          <template #prev>
            <VBtn
              variant="elevated"
              rounded
              size="35"
              color="black"
            >
              <VIcon size="35">tabler-chevron-left</VIcon>
            </VBtn>
          </template>
          <v-slide-group-item
            v-for="data in podcastItems.items"
            :key="data.uid"
          >
            <HomeCard :item="data.entity.data" />
          </v-slide-group-item>
        </VSlideGroup>
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

      <div>
        <VSlideGroup show-arrows>
          <template #next>
            <VBtn
              variant="elevated"
              rounded
              size="35"
              color="black"
            >
              <VIcon size="35">tabler-chevron-right</VIcon>
            </VBtn>
          </template>
          <template #prev>
            <VBtn
              variant="elevated"
              rounded
              size="35"
              color="black"
            >
              <VIcon size="35">tabler-chevron-left</VIcon>
            </VBtn>
          </template>
          <v-slide-group-item
            v-for="data in podcastItems.items"
            :key="data.uid"
          >
            <HomeCard :item="data.entity.data" />
          </v-slide-group-item>
        </VSlideGroup>
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

      <div>
        <VSlideGroup show-arrows>
          <template #next>
            <VBtn
              variant="elevated"
              rounded
              size="35"
              color="black"
            >
              <VIcon size="35">tabler-chevron-right</VIcon>
            </VBtn>
          </template>
          <template #prev>
            <VBtn
              variant="elevated"
              rounded
              size="35"
              color="black"
            >
              <VIcon size="35">tabler-chevron-left</VIcon>
            </VBtn>
          </template>
          <v-slide-group-item
            v-for="data in podcastItems.items"
            :key="data.uid"
          >
            <HomeCard :item="data.entity.data" />
          </v-slide-group-item>
        </VSlideGroup>
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
