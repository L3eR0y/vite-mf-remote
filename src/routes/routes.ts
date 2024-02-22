import { RouteRecordRaw } from 'vue-router'
import IndexPage from '../pages/index.vue'

import NestedRoutingCmp from '@/pages/NestedRouting/index.vue'
import NR1Cmp from '@/pages/NestedRouting/pages/NR1/index.vue'
import NR2Cmp from '@/pages/NestedRouting/pages/NR2/index.vue'
import NR3Cmp from '@/pages/NestedRouting/pages/NR3/index.vue'

export default [
  {
    path: '/',
    name: 'App',
    component: IndexPage,
    children: [
      {
        name: 'nested-routing',
        path: '/nested-routing',
        component: NestedRoutingCmp,
        children: [
          {
            name: 'nr1',
            path: 'nr1',
            component: NR1Cmp
          },
          {
            name: 'nr2',
            path: 'nr2',
            component: NR2Cmp
          },
          {
            name: 'nr3',
            path: 'nr3',
            component: NR3Cmp
          }
        ]
      }
    ]
  },
  
] as RouteRecordRaw[]

