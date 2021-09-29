import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@views/Home.vue'
import Story from '@views/Story.vue'
import SearchWikipedia from '@views/SearchWikipedia.vue'
import BrowseArticle from '@views/BrowseArticle.vue'
import StoryViewer from '@views/StoryViewer.vue'

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
    path: '/viewer',
    name: 'StoryViewer',
    component: StoryViewer
  }
]

const router = new VueRouter({
  routes
})

export default router
