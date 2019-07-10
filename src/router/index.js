import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 一级
import Home from '../pages/Home/home.vue'
import Audio from '../pages/Audio/audio.vue'
import Broadcast from '../pages/Broadcast/broadcast.vue'
import Group from '../pages/Group/group.vue'
import Mine from '../pages/Mine/mine.vue'

// 书影音二级
import Film from '@/components/film'
import Read from '@/components/read'
import Tv from '@/components/tv'
import City from '@/components/city'
import Music from '@/components/music'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[
        {path: '/',component:Film},
        {path: 'film',component:Film},
        {path: 'read',component:Read},
        {path: 'tv',component:Tv},
        {path: 'city',component:City},
        {path: 'music',component:Music},
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component:Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component:Mine
    },
  ]
})
