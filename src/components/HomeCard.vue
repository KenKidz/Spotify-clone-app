<template>
  <div @click="goToLibrary" class="home-card rounded-lg">
    <VImg class="rounded-lg" :src="item.coverArt.sources[2].url" height="160" width="160" cover alt="thumb-img" />
    <div class="text-white pt-4 font-weight-bold"
         style="
          font-size: 17px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;">
      {{ item.name }}
      <v-tooltip
        activator="parent"
        location="bottom"
        opacity="0.2"
        attach
      >{{item.name}}</v-tooltip>
    </div>
    <div class="text-gray-400 pt-1 pb-3" style="font-size: 14px">{{ convertDateTime(item.releaseDate.isoString) }}</div>
  </div>
</template>
<script lang="ts" setup>
import { toRefs } from 'vue'
import { convertDateTime } from '../utils'

interface Props {
  item?: any
}

const router = useRouter()
const route = useRoute()
const props = withDefaults(defineProps<Props>(), {
  item: {}
})
const { item } = toRefs(props)
const goToLibrary = () => {
  router.push(route.path + `Library/${item.value.id}`)
}
</script>

<style lang="scss" scoped>
.home-card {
  background-color: #111111;
  padding: 16px;
  margin: 8px;
  width: 200px;
  cursor: pointer;
}

.home-card:hover {
  background-color: #252525
}
</style>
