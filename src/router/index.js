import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/Home.vue'
import Story from '@views/Story.vue'
import SearchWikipedia from '@views/SearchWikipedia.vue'
import BrowseArticle from '@views/BrowseArticle.vue'
import Publish from '@views/Publish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/story',
    name: 'Story',
    component: Story
  },
  {
    path: '/searchwikipedia',
    name: 'SearchWikipedia',
    component: SearchWikipedia
  },
  {
    path: '/article/:article',
    name: 'BrowseArticle',
    component: BrowseArticle,
    props: true
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish
  }
]

const router = new VueRouter({
  routes
})

export default router
