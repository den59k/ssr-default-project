<template>
  <div class="section-row" :style="{ gap: `${props.gap}px` }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

const props = defineBlock({
  id: "section-row",
  group: "layout",
  props: {
    gap: { type: "number" }
  },
  slots: {
    default: true
  }
})

</script>



<style lang="sass">
.section-row
  display: flex
  justify-content: center
  padding: 20px
  &>*
    flex: 1 1 50px

</style>