<template>
  <div style="margin-bottom: 90px;">
    <div class="pa-6">
      <VBtn variant="text" class="text-white text-2xl font-weight-medium">
        Podcasts to make you smarter
      </VBtn>

      <div class="py-2"></div>

      <div>
        <VSlideGroup v-if="!loading" show-arrows>
          <template #next>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-right</VIcon>
            </VBtn>
          </template>
          <template #prev>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-left</VIcon>
            </VBtn>
          </template>
          <v-slide-group-item v-for="data in podcastItems.items" :key="data.uid">
            <HomeCard :item="data.entity.data" />
          </v-slide-group-item>
        </VSlideGroup>
        <VSlideGroup v-else show-arrows>
          <template #next>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-right</VIcon>
            </VBtn>
          </template>
          <template #prev>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-left</VIcon>
            </VBtn>
          </template>
          <v-slide-group-item v-for="i in 8" :key="i" class="mx-auto">
            <v-skeleton-loader width="200" type="image, list-item-two-line" class="ma-2 pa-5"></v-skeleton-loader>
          </v-slide-group-item>
        </VSlideGroup>
      </div>
    </div>

    <div class="pa-6">
      <VBtn variant="text" class="text-white text-2xl font-weight-medium">
        Recommended radio
      </VBtn>

      <div class="py-2"></div>

      <div>
        <VSlideGroup v-if="!loading" show-arrows>
          <template #next>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-right</VIcon>
            </VBtn>
          </template>
          <template #prev>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-left</VIcon>
            </VBtn>
          </template>
          <v-slide-group-item v-for="data in podcastItems.items" :key="data.uid">
            <HomeCard :item="data.entity.data" />
          </v-slide-group-item>
        </VSlideGroup>
        <VSlideGroup v-else show-arrows>
          <template #next>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-right</VIcon>
            </VBtn>
          </template>
          <template #prev>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-left</VIcon>
            </VBtn>
          </template>
          <v-slide-group-item v-for="i in 8" :key="i" class="mx-auto">
            <v-skeleton-loader width="200" type="image, list-item-two-line" class="ma-2 pa-5"></v-skeleton-loader>
          </v-slide-group-item>
        </VSlideGroup>
      </div>
    </div>

    <div class="pa-6">
      <VBtn variant="text" class="text-white text-2xl font-weight-medium">
        Recommended songs
      </VBtn>

      <div class="py-2"></div>

      <div>
        <VSlideGroup v-if="!loading" show-arrows>
          <template #next>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-right</VIcon>
            </VBtn>
          </template>
          <template #prev>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-left</VIcon>
            </VBtn>
          </template>
          <v-slide-group-item v-for="data in podcastItems.items" :key="data.uid">
            <HomeCard :item="data.entity.data" />
          </v-slide-group-item>
        </VSlideGroup>
        <VSlideGroup v-else show-arrows>
          <template #next>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-right</VIcon>
            </VBtn>
          </template>
          <template #prev>
            <VBtn variant="elevated" rounded size="35" color="black">
              <VIcon size="35">tabler-chevron-left</VIcon>
            </VBtn>
          </template>
          <v-slide-group-item v-for="i in 8" :key="i" class="mx-auto">
            <v-skeleton-loader width="200" type="image, list-item-two-line" class="ma-2 pa-5"></v-skeleton-loader>
          </v-slide-group-item>
        </VSlideGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Podcasts from '@/services/Podcasts.service'

const podcastItems = ref<any>({})
const loading = ref<boolean>(true)

onBeforeMount(async () => {
  await loadData()
})

const loadData = async () => {
  await getPodcast()
  loading.value = false
}

const getPodcast = async () => {
  const res = await Podcasts.getPodcasts()
  podcastItems.value = res.data.podcastUnionV2.episodesV2
}

</script>

<style lang="scss" scoped>
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>
