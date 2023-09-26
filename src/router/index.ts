import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ProductView from '../views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'login',
      component: LoginView,
      meta:{
        requireAuth:false
      }
    },
    {
      path:'/product',
      name:'product',
      component: ProductView,
      meta:{
        requireAuth:true
      }
    }
  ]
})
router.beforeEach((to,from,next)=>{
  const auth=localStorage.getItem('access_token')!=null
  const needAuth=to.meta.requireAuth
  if(needAuth && !auth){
    next('/')
  }else{
    next()
  }

})


export default router
