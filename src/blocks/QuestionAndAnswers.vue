<template>
  <div class="qa-block">
    <h3>{{ props.heading }}</h3>
    <VCollapse class="qa-block__item" v-for="item in props.items">
      <template #activator="{ props, open }">
        <button v-bind="props" class="qa-block__activator" :class="{ open }">
          {{ item.question }}
          <CollapseIcon />
        </button>
      </template>
      <div>{{ item.answer }}</div>
    </VCollapse>
  </div>
</template>

<script lang="ts" setup>
import VCollapse from '../components/VCollapse.vue'
import CollapseIcon from '../components/icons/CollapseIcon.vue';

const props = defineBlock({
  id: "qa",
  name: "Q&A",
  order: 110,
  props: {
    heading: { type: "string", default: "FAQ" },
    items: {
      type: "array",
      items: {
        question: { type: "string" },
        answer: { type: "string", multiline: true }
      }
    }
  }
})

</script>

<style lang="sass">
.qa-block
  padding: var(--blocks-padding) 0
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  h3
    font-size: 40px
    margin-top: 0

.qa-block__item
  width: 700px
  max-width: 100%
  white-space: pre-wrap
  border-top: 1px solid var(--text-secondary-color)

  .v-collapse__content-inner
    font-size: 20px
    padding-bottom: 30px

  &:last-child
    border-bottom: 1px solid var(--text-secondary-color)
  
.qa-block__activator
  display: flex
  align-items: center
  font-size: 24px
  font-weight: 600
  width: 100%
  text-align: start
  height: 80px
  background: none
  border: none
  padding: 0

  svg
    margin-left: auto
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)

  &.open svg
    transform: rotate(45deg)

</style>