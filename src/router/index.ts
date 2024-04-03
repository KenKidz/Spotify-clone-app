import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { useUserStore } from '@/stores/userStore'
import {auth} from '@/plugins/firebaseConfig'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes: any) => setupLayouts(routes)
})

router.beforeEach( (to, from, next) => {
  const userStore = useUserStore()
  if(userStore.userInfo && to.path === '/login') {
    next('/')
  } else {
    next()
  }
})
export default router
