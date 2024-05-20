<template>
  <div class="section-full-screen" :class="cn(props)">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@curves_digital/builder/utils'

const props = defineBlock({
  id: "section-full-screen",
  group: "layout",
  props: {
    indentHeader: { type: "boolean", default: false, name: "Оставить отступ под хэдер" },
    aligment: { type: "string", enum: [ "start", "center", "end", "stretch" ], default: "center" }
  }
})

</script>

<style lang="sass">
.section-full-screen
  height: 100vh
  display: flex
  flex-direction: column
  box-sizing: border-box

  &.indentHeader
    height: calc(100vh - 60px)
    padding-bottom: 60px

  &.aligment-center
    justify-content: center

  &.aligment-stretch>*
    flex: 1 1 auto

  &.aligment-end
    justify-content: flex-end

</style>