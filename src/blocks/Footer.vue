<template>
  <footer 
    class="footer full-width" 
    :style="{ backgroundColor: props.color }" 
    :class="{ 'text-white': !readableColorIsBlack(props.color) }"
  >
    <div class="container">
      <div>{{ props.textLeft }}</div>
      <div>{{ props.textRight }}</div>
      <div v-if="props.copyright" class="copyright">{{ props.copyright }}</div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { readableColorIsBlack } from 'color2k'

const props = defineBlock({
  id: "footer",
  order: 1000,
  props: {
    color: { type: "string", format: "color", default: "#FFFFFF" },
    textLeft: { type: "string", multiline: true },
    textRight: { type: "string", multiline: true },
    copyright: "string"
  }
})

</script>

<style lang="sass">
.footer
  height: 300px
  color: black

  .container
    display: flex
    align-items: center
    height: 100%
    justify-content: space-between
    position: relative
    font-size: 20px
    font-weight: 500
    white-space: pre-wrap

  .copyright
    position: absolute
    bottom: 16px
    right: 0
    font-weight: 400
    font-size: 16px
    color: #333333

  &.text-white
    color: #FFFFFF
    .copyright
      color: #AAAAAA

</style>