<script lang="ts" setup>
import { profileMenu } from '@/constants/enums'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

const userStore = useUserStore()
const route = useRoute()
const itemsInProfile = ref<any>([
  { id: profileMenu.Profile, title: 'Profile' },
  { id: profileMenu.Logout, title: 'Log out' }
])

const isCurrentPage = computed(() => {
  return route.path == '/'
})

const loadComponent = (value: any) => {
  if(value.id == profileMenu.Logout) {
    userStore.logOut()
  }
}

const onBackClick = () => {
  router.go(-1)
}

const onNextClick = () => {
  router.go(1)
}
</script>

<template>
  <v-app-bar class="TopNav">
    <div class="ml-4">
      <VBtn
        variant="elevated"
        class="me-2"
        rounded
        size="30"
        color="black"
        :disabled="isCurrentPage"
        @click="onBackClick"
      >
        <VIcon size="30">tabler-chevron-left</VIcon>
      </VBtn>
      <VBtn
        variant="elevated"
        rounded
        size="30"
        color="black"
        @click="onNextClick"
      >
        <VIcon size="30">tabler-chevron-right</VIcon>
      </VBtn>
    </div>
    <VSpacer />
    <VAvatar
      class="cursor-pointer me-4"
      color="primary"
      variant="tonal"
      size="35"
    >
      <VImg :src="userStore.userInfo?.photoURL"/>
      <VMenu
        activator="parent"
        width="180"
        location="bottom end"
      >
        <VList
          class="mt-1"
          bg-color="#282828"
        >
          <VListItem
            link
            v-for="(item, i) in itemsInProfile"
            :key="i"
            @click="loadComponent(item)">
            <VListItemTitle>{{ item.title }}</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
    </VAvatar>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.TopNav {
  height: 60px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
