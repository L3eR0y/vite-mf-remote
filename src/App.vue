<template lang="pug">
#__app
  RouterView(v-if="store.auth.authenticated")
</template>

<script setup lang="ts">
import { useMainStore }  from '@/stores/main'
import { RouterView } from 'vue-router';
const store = useMainStore()
</script>

<style lang="scss" scoped>
  #__app {
    width: 100%;
    height: 100%;
  }
</style>
  