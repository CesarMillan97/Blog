import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Details from '../views/Details.vue'
import Tag from '../views/Tag.vue'
import RealTime from '../views/RealTime.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create, 
  },
  {
    path: '/tag/:tag',
    name: 'Tag',
    component: Tag,
    props: true
  },
  {
    path: '/realtime',
    name: 'RealTime',
    component: RealTime,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
