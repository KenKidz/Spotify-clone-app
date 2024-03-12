<script setup lang="ts">

</script>

<template>
  <div class="pa-6">
    <VBtn
      variant="text"
      class="text-white text-2xl font-weight-medium"
    >
      Podcasts to make you smarter
    </VBtn>

    <div class="py-2"></div>

    <div class="d-flex">
      <HomeCard image="https://picsum.photos/id/30/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard image="https://picsum.photos/id/45/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard class="d-md-block d-none" image="https://picsum.photos/id/65/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard class="d-lg-block d-none" image="https://picsum.photos/id/67/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard class="d-xl-block d-none" image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here" />
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
      <HomeCard image="https://picsum.photos/id/120/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard image="https://picsum.photos/id/110/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard class="d-md-block d-none" image="https://picsum.photos/id/221/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard class="d-lg-block d-none" image="https://picsum.photos/id/232/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard class="d-xl-block d-none" image="https://picsum.photos/id/187/300/300" title="Title is here" subTitle="Subtitle is here" />
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
      <HomeCard image="https://picsum.photos/id/88/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard image="https://picsum.photos/id/243/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard class="d-md-block d-none" image="https://picsum.photos/id/123/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard class="d-lg-block d-none" image="https://picsum.photos/id/121/300/300" title="Title is here" subTitle="Subtitle is here" />
      <HomeCard class="d-xl-block d-none" image="https://picsum.photos/id/99/300/300" title="Title is here" subTitle="Subtitle is here" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>
