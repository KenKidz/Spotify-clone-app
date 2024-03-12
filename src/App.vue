<script setup lang="ts">
import avatars from '@/assets/images/avatars/avatar.jpg'
import spotifyLogo from '/public/images/icons/spotify-logo.png'

const openMenu = ref<Boolean>(false)
const menuChange = ref<any>()
const itemsInProfile = ref<any>([
  { title: 'Profile' },
  { title: 'Log out' }
])

watch(menuChange, () => {
  openMenu.value = !openMenu.value
})

const loadComponent = (value: any) => {

}
</script>

<template>
  <VLayout>
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
    <v-app-bar class="TopNav">
      <div class="ml-4">
        <VBtn variant="elevated" class="me-2" rounded size="30" color="black">
          <VIcon size="30">mdi-chevron-left</VIcon>
        </VBtn>
        <VBtn variant="elevated" rounded size="30" color="black">
          <VIcon size="30">mdi-chevron-right</VIcon>
        </VBtn>
      </div>
      <VSpacer />
      <VMenu v-model="menuChange">
        <template v-slot:activator="{props}">
          <VBtn
            class="me-4"
            color="black"
            v-bind="props"
            rounded
            variant="elevated"
            text="Kenkid"
          >
            <template #prepend>
              <VAvatar size="27" variant="tonal">
                <VImg :src="avatars" />
              </VAvatar>
            </template>
            <template #append>
              <VIcon v-if="!openMenu" color="#FFFFFF" size="25">mdi-chevron-down</VIcon>
              <VIcon v-else color="#FFFFFF" size="25">mdi-chevron-up</VIcon>
            </template>
          </VBtn>
        </template>
        <VList
          class="mt-1"
          bg-color="#282828"
        >
          <VListItem
            v-for="(item, i) in itemsInProfile"
            :key="i"
            @click="loadComponent(item)">
            <VListItemTitle>{{ item.title }}</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
    </v-app-bar>

    <VMain class="Main">
      <RouterView />
    </VMain>
  </VLayout>
</template>

<style lang="scss" scoped>
.TopNav {
  height: 60px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Main {
  background-image: linear-gradient(rgb(var(--v-theme-on-primary)), black);
}

</style>
