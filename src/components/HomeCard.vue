<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
    image: String,
    title: String,
    subTitle: String
})
const { image, title, subTitle } = toRefs(props)
</script>

<template>
    <RouterLink to="library">
        <div class="rounded-md">
            <img class="rounded-md" :src="image" alt="">
            <div class="text-white pt-4 font-weight-bold" style="font-size: 17px">{{ title }}</div>
            <div class="text-gray-400 pt-1 pb-3" style="font-size: 14px">{{ subTitle }}</div>
        </div>
    </RouterLink>
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
