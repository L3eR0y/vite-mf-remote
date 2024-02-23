<template lang="pug">
.main-page-wrapper
    .nav
        .nav__item(@click="onNavItemClick('MP1')") MP1
        .nav__item(@click="onNavItemClick('MP2')") MP2
        .nav__item(@click="onNavItemClick('MP3')") MP3
    RouterView
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

function onNavItemClick(name: string): void {
    router.push({ name })
} 
</script>

<style scoped lang="scss">
.main-page-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    color: $text-color-main;
}

.nav {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;

    &__item {
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>