<template>
  <div class="summary-benifits" :class="{ 'has-image': !!props.image }">
    <div v-if="props.image" class="summary-benifits__image">
      <Image :image="props.image" />
    </div>
    <div class="summary-benifits__info">
      <h3>{{ props.heading }}</h3>
      <div>
        {{ props.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Image from '@curves_digital/builder/image';

const props = defineBlock({
  id: "summary-benifits",
  props: {
    heading: { type: "string", name: "Заголовок", default: "Преимущества" },
    text: { type: "string", name: "Текст", multiline: true },
    image: { type: "object??", props: { previewSrc: "string", src: "string" }, format: "image", name: "Изображение" },
  }
})

</script>


<style lang="sass">
.summary-benifits
  display: flex
  min-height: 200px
  gap: 40px
  padding: var(--blocks-padding) 0
  text-align: center
 
  @media(max-width: 800px)
    flex-direction: column
    gap: 20px

  &>*
    flex: 1 1 50px

  &.has-image
    text-align: left
  
.summary-benifits__image
  display: flex
  flex-direction: column
  align-items: center
  img
    width: 100%
    max-height: 800px
    border-radius: 6px

.summary-benifits__info
  font-size: 18px
  white-space: pre-wrap
  h3
    font-size: 40px
    font-weight: 700
    margin-top: 0
</style>