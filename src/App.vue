

<script setup lang="ts">
import ChevronUp from 'vue-material-design-icons/ChevronUp.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue'
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
  <div>
    <div
      id="TopNav"
      class="
            w-[calc(100%-240px)]
            h-[60px]
            fixed
            right-0
            z-20
            bg-[#101010]
            bg-opacity-80
            flex
            items-center
            justify-between
          "
    >
      <div class="flex items-center ml-6">
        <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
          <ChevronLeft fillColor="#FFFFFF" :size="30" />
        </button>
        <button type="button" class="rounded-full bg-black p-[1px] hover:bg-[#] ml-4 cursor-pointer">
          <ChevronRight fillColor="#FFFFFF" :size="30" />
        </button>
      </div>

      <VMenu v-model="menuChange">
        <template v-slot:activator="{props}">
          <VBtn
            class="me-4"
            color="black"
            v-bind="props"
            rounded
            text="Kenkid"
          >
            <template #prepend>
              <VAvatar size="27" variant="tonal">
                <VImg :src="avatars" />
              </VAvatar>
            </template>
            <template #append>
              <ChevronDown v-if="!openMenu" fillColor="#FFFFFF" :size="25" />
              <ChevronUp v-else fillColor="#FFFFFF" :size="25" />
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
    </div>


    <div id="SideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
      <RouterLink to="/">
        <img width="125" :src="spotifyLogo" alt="spotify-icon">
      </RouterLink>
      <div class="my-8"></div>
      <ul>
        <RouterLink to="/">
          <MenuItem class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/" />
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem class="ml-[1px]" :iconSize="24" name="Search" iconString="search" pageUrl="/search" />
        </RouterLink>
        <RouterLink to="/library">
          <MenuItem class="ml-[2px]" :iconSize="23" name="Your Library" iconString="library" pageUrl="/library" />
        </RouterLink>
        <div class="py-3.5"></div>
        <MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
        <MenuItem class="-ml-[1px]" :iconSize="27" name="Liked Songs" iconString="liked" pageUrl="/liked" />
      </ul>
      <div class="border-b border-b-gray-700"></div>
      <ul>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #1</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #2</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #3</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #4</li>
      </ul>
    </div>
  </div>

  <div
    class="
            fixed
            right-0
            top-0
            w-[calc(100%-240px)]
            overflow-auto
            h-full
            bg-gradient-to-b
            from-[#1C1C1C]
            to-black
        "
  >
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>
</template>
