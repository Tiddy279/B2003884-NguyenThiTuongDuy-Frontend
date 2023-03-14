import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CreateContactPage from '@/views/CreateContactPage.vue'
import UpdateContactPage from '@/views/UpdateContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contacts/create',
      name: 'create-contact',
      component: CreateContactPage
    },
    {
      path: '/contacts/:id',
      name: 'update-contact',
      component: UpdateContactPage
    }
  ]
})

export default router
