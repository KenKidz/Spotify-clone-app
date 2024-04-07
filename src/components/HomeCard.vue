<script lang="ts" setup>
import { toRefs } from 'vue'

interface itemInterface {
  id: any,
  image: string,
  title: string,
  subTitle: string
}

interface Props {
  item?: itemInterface
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

<template>
  <div @click="goToLibrary" class="home-card rounded-lg">
    <VImg class="rounded-lg" :src="item.image" height="160" width="160" cover alt="thumb-img" />
    <div class="text-white pt-4 font-weight-bold" style="font-size: 17px">{{ item.title }}</div>
    <div class="text-gray-400 pt-1 pb-3" style="font-size: 14px">{{ item.subTitle }}</div>
  </div>
</template>

<style lang="scss" scoped>
.home-card {
  background-color: #111111;
  padding: 16px;
  margin: 8px;
  cursor: pointer;
}

.home-card:hover {
  background-color: #252525
}
</style>
