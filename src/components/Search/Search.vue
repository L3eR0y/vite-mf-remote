<template lang="pug">
.sui-search
  .sui-search__icon
    svg(
      class="sui-search__icon-elem"
      width="24" 
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    )
      path(
        d="M21 21L16 16M16.053 6.06799C18.8103 8.82528 18.8103 13.2957 16.053 16.053C13.2957 18.8103 8.82527 18.8103 6.06797 16.053C3.31068 13.2957 3.31068 8.82528 6.06797 6.06799C8.82527 3.31069 13.2957 3.31069 16.053 6.06799Z" 
        stroke="currentColor" 
        stroke-width="1.5" 
        stroke-linecap="round" 
        stroke-linejoin="round")
    iput(
      v-model="input_value"
    )
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

const props = defineProps({
      value: {
        type: String,
        default: ''
      }
  })
  
  const { value } = toRefs(props)

const input_value = computed({
  get() {
    return value.value
  },
  set() {
    // this.$emit('input', value)
  }
})
</script>

<style scoped lang="scss">
  .sui-search {
    display: flex;
    position: relative;
    width: 100%;
  }
</style>
