<template lang="pug">
.nested-routing-cmp-wrapper
  .nst-routes
    .route(@click="onRouteClick('nr1')") NR1
    .route(@click="onRouteClick('nr2')") NR2
    .route(@click="onRouteClick('nr3')") NR3
  .nst-view
    RouterView
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function onRouteClick(route: string) {
  router.push({
    name: route
  })
}
</script>

<style scoped lang="scss">
.nested-routing-cmp-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
}

.nst-routes {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  // flex-shrink: 1;
  flex-grow: 0;
}

.route {
  cursor: pointer;
}

.nst-view {
  flex-grow: 1;
}
</style>
