import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '@/views/Products.vue'
import Product from '@/views/Product.vue'
import Cart from '@/views/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/catalog',
    component: Products,
  },
  {
    path: '/product/:id',
    component: Product,
  },
  {
    path: '/cart',
    component: Cart,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0)
  },
})

export default router
