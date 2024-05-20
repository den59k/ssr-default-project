<template>
  <div class="section-column" :style="{ gap: `${props.gap}px` }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

const props = defineBlock({
  id: "section-column",
  group: "layout",
  props: {
    gap: { type: "number", default: 8 }
  },
  slots: {
    default: true
  }
})
</script>


<style lang="sass">
.section-column
  display: flex
  flex-direction: column
  
</style>