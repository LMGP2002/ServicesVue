import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ProductView from '../views/ProductView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'login',
      component: LoginView
    },
    {
      path:'/product',
      name:'product',
      component: ProductView
    }
  ]
})

export default router
