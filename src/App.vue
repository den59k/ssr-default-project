<template>
  <div class="app">
    <AppHeader/>
    <RouterContent :state="props.state"/>
  </div>
</template>

<script lang="ts" setup>
import { RouterContent } from '@curves_digital/builder'
import AppHeader from './components/AppHeader.vue';

const props = defineProps<{ state?: any }>()

</script>

<style lang="sass">
.app>*:not(.full-width), .container
  width: 1240px
  margin: 0 auto

  @media(max-width: 1280px)
    width: 94vw
    
</style>