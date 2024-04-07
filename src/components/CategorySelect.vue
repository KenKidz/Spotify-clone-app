<template>
    <RouterLink to="library">
        <div
            v-if="randColor.color"
            :style="`background-color: ${randColor.color};`"
            class="
                libra-contain
                rounded-xl
                relative
                overflow-hidden
            "
        >
            <div class="text-white pt-3 pl-4 font-weight-medium" style="font-size: 23px">{{ category }}</div>
            <img
                class="libra-img"
                :src="image || ''"
            >
        </div>
    </RouterLink>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { RouterLink } from 'vue-router';
import uniqolor from 'uniqolor';

let randColor = ref('')
randColor.value = uniqolor.random()

const props = defineProps({ category: String, image: String })
const { category } = toRefs(props)
</script>

<style lang="scss" scoped>
.libra-contain {
  filter: brightness(0.87);
  aspect-ratio: 1 / 1;
  position: relative;
}

.libra-img {
  position: absolute;
  filter: contrast(0.55);
  right: -3.5;
  bottom: 0;
  max-width: 100px;
  transform: rotate(20deg);
}
</style>

