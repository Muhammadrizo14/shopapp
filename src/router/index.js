import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Product from '@/views/Product.vue'
import Cart from '@/views/Cart.vue'
import Registration from '@/views/registration.vue'
import Sorteds from '../views/ProductsSorteds.vue'

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
  {
    path: '/registration',
    component: Registration,
  },
  {
    name: 'Filter',
    path: '/products/:to/:sort/',
    component: Sorteds,
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
