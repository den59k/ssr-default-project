<template>
  <div class="headline" :class="cn(pick(props, 'size', 'aligment'))">
    <h1>{{ props.headline }}</h1>
    <div v-if="props.subtitle" class="sub-header">{{ props.subtitle }}</div>
  </div>
</template>

<script lang="ts" setup>
import { cn, pick } from '@curves_digital/builder/utils'

const props = defineBlock({
  id: "headline",
  props: {
    headline: { type: "string", name: "Текст", default: "", multiline: true },
    subtitle: { type: "string?", name: "Подпись" },
    aligment: { type: "string", enum: [ "left", "center", "right" ] },
    size: { type: "string", enum: [ "s", "m", "l" ], default: "l" }
  }
})

</script>


<style lang="sass">
.headline
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  gap: 8px
  text-align: center
  white-space: pre-wrap
  padding: var(--blocks-padding) 0
  
  h1
    font-weight: 900
    font-size: 64px
    margin: 0
    @media(max-width: 800px)
      font-size: 36px

  .sub-header
    font-size: 20px
    font-weight: 600

  &.size-m
    h1
      font-size: 50px
    .sub-header
      font-size: 18px

  &.size-s
    h1
      font-size: 40px
    .sub-header
      font-size: 16px

  &.aligment-left
    text-align: left
    align-items: flex-start

  &.aligment-right
    text-align: right
    align-items: flex-end
</style>