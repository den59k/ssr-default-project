<template>
  <div class="social-proof">
    <h3>{{ props.heading }}</h3>
    <div class="social-proof__items" :class="{ multiple: props.items.length >= 2 }">
      <div v-for="item in props.items" class="social-proof__item">
        <div class="image">
          <Image v-if="item.image" :image="item.image" />
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="subtitle">{{ item.subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Image from '@curves_digital/builder/image';

const props = defineBlock({
  id: "social-proof",
  props: {
    heading: { type: "string" },
    items: {
      type: "array",
      items: {
        image: { type: "object?", props: { previewSrc: "string", src: "string" }, format: "image", name: "Изображение" },
        title: { type: "string" },
        subtitle: { type: "string" }
      }
    }
  }
})
</script>

<style lang="sass">
.social-proof
  min-height: 400px
  text-align: center
  padding: var(--blocks-padding) 0
  box-sizing: border-box

  h3
    font-size: 40px
    margin-top: 0

.social-proof__items
  display: flex
  gap: 36px
  text-align: center
  justify-content: center

  &>*
    flex: 1 1 50px
    max-width: 500px

  &.multiple
    text-align: start

.social-proof__item
  .title
    font-size: 20px
    font-weight: 500

  .subtitle
    color: var(--text-secondary-color)

  .image
    img
      width: 100%
      height: 250px
      object-fit: cover
      border-radius: 6px
      max-width: 500px
</style>