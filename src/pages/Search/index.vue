<script setup>
const categoryItems = [
  {category:"Podcasts", image:"https://picsum.photos/id/40/300/300"},
  {category:"Audiobooks", image:"https://picsum.photos/id/45/300/300"},
  {category:"Made For You", image:"https://picsum.photos/id/76/300/300"},
  {category:"New Release", image:"https://picsum.photos/id/56/300/300"},
  {category:"New Release", image:"https://picsum.photos/id/25/300/300"},
  {category:"Podcasts", image:"https://picsum.photos/id/40/300/300"},
  {category:"Audiobooks", image:"https://picsum.photos/id/45/300/300"},
  {category:"Made For You", image:"https://picsum.photos/id/76/300/300"},
  {category:"New Release", image:"https://picsum.photos/id/56/300/300"},
  {category:"New Release", image:"https://picsum.photos/id/25/300/300"},
  {category:"Podcasts", image:"https://picsum.photos/id/40/300/300"},
  {category:"Audiobooks", image:"https://picsum.photos/id/45/300/300"},
  {category:"Made For You", image:"https://picsum.photos/id/76/300/300"},
  {category:"New Release", image:"https://picsum.photos/id/56/300/300"},
  {category:"New Release", image:"https://picsum.photos/id/25/300/300"},
  {category:"Podcasts", image:"https://picsum.photos/id/40/300/300"},
  {category:"Audiobooks", image:"https://picsum.photos/id/45/300/300"},
  {category:"Made For You", image:"https://picsum.photos/id/76/300/300"},
  {category:"New Release", image:"https://picsum.photos/id/56/300/300"},
  {category:"New Release", image:"https://picsum.photos/id/25/300/300"},
]
</script>

<template>
  <div class="pa-8">
    <VBtn
      class="text-white text-2xl font-weight-medium"
    >
      Browse all
    </VBtn>

    <div class="py-2"></div>

    <VRow>
      <VCol v-for="item in categoryItems" :key="item.category" cols="5" md="4" lg="3" xd="2">
        <CategorySelect :category="item.category" :image="item.image"/>
      </VCol>
    </VRow>
  </div>
</template>
