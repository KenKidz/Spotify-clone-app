<template>
  <v-navigation-drawer color="primary" permanent class="SideNav px-8 py-4">
    <RouterLink to="/">
      <img width="125" :src="spotifyLogo" alt="spotify-icon">
    </RouterLink>
    <div class="my-8"></div>
    <ul>
      <RouterLink to="/">
        <MenuItem :iconSize="23" name="Home" iconString="home" pageUrl="/" />
      </RouterLink>
      <RouterLink to="/search">
        <MenuItem :iconSize="24" name="Search" iconString="search" pageUrl="/search" />
      </RouterLink>
      <RouterLink to="/library">
        <MenuItem :iconSize="23" name="Your Library" iconString="library" pageUrl="/library" />
      </RouterLink>
      <div class="py-3"></div>
      <MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
      <MenuItem :iconSize="27" name="Liked Songs" iconString="liked" pageUrl="/liked" />
    </ul>
    <div class="border-b mt-2" style="border-color: rgb(55 65 81);"></div>
    <v-list lines="one">
      <v-list-item
        class="pa-0"
        v-for="n in 4"
        :key="n"
      >
        <VListItemTitle class="list-item font-weight-bold text-gray-300">My Playlist #{{n}}</VListItemTitle>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import spotifyLogo from '/public/images/icons/spotify-logo.png'
</script>

<style lang="scss" scoped>

</style>
