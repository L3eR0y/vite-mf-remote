<template lang="pug">
.main-layout
  .main-layout__navbar
    Navbar(@toggle-sidebar="onToggleSideBar")
  .main-layout__wrapper
    .sidebar
      SidebarV3(:minimized="store.sidebar.minimized" @toggle-sidebar="onToggleSideBar" :options="sidebar_menu_items")
    .main-view
      router-view
</template>
  
<script setup lang="ts">
  import { reactive } from 'vue'
  import { useMainStore }  from '@/stores/main'
  import type { SidebarMenu } from '@app-types/sidebar.type'
  import Navbar from '@/components/Navbar/Navbar.vue'
  
  import SidebarV3 from '@/components/Sidebar/SidebarV3.vue'

  const store = useMainStore()

  const sidebar_menu_items: SidebarMenu = reactive<SidebarMenu>([
    {
      id: 'nested-routing',
      name: 'nested-routing',
      route: 'nested-routing',
      title: 'Nested Routing',
      icon: {
        name: 'services'
      },
      submenu: [
        {
          id: 'NR1',
          name: 'nr1',
          route: 'nr1',
          title: 'Nested Route 1',
          icon: {
            
          },
        },
        {
          id: 'NR2',
          name: 'nr2',
          route: 'nr2',
          title: 'Nested Route 2',
          icon: {},
        },
        {
          id: 'NR3',
          name: 'nr3',
          route: 'nr3',
          title: 'Nested Route 3',
          icon: {},
        },
      ]
    }
  ])

  function onToggleSideBar(): void {
    store.sidebar.minimized ? store.showSidebar() : store.hideSidebar()
  }
</script>
  
<style lang="scss" scoped>
  .main-layout {
    width: 100%;
    height: 100%;
    
  
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;

    &__navbar {
      width: 100%;
      position: relative;
    }
  
    &__wrapper {
      display: flex;
      height: 100%;
      overflow: hidden;
    }
  }
  
  .sidebar {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
  }

  .main-view {
    @include scroll();

    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    position: relative;
    overflow-y: auto;
    height: 100%;
  }
</style>
  