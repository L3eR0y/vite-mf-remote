import { RouteRecordRaw } from 'vue-router'

import IndexPage from '@/pages/index.vue'
import MainPage from '@/services/Main/index.vue'
import MP1Cmp from '@/services/Main/pages/mp1/index.vue'
import MP2Cmp from '@/services/Main/pages/mp2/index.vue'
import MP3Cmp from '@/services/Main/pages/mp3/index.vue'

export default [
  {
    path: '/',
    name: 'App',
    component: IndexPage,
    children: [
      {
        name: 'MainPage',
        path: 'main-page',
        component: MainPage,
        children: [
          {
            name: 'MP1',
            path: 'mp1',
            component: MP1Cmp
          },
          {
            name: 'MP2',
            path: 'mp2',
            component: MP2Cmp
          },
          {
            name: 'MP3',
            path: 'mp3',
            component: MP3Cmp
          }
        ]
      }
    ]
  },  
] as RouteRecordRaw[]
