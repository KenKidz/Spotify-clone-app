import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { useUserStore } from '@/stores/userStore'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes: any) => setupLayouts(routes)
})

router.beforeEach( async (to, from, next) => {
  const userStore = useUserStore()
  await userStore.init()
  if(!userStore.userInfo && to.path !== '/login') {
    next('/login')
  } else if(userStore.userInfo && to.path === '/login'){
    next('/')
  }
  else {
    next()
  }
})
export default router
