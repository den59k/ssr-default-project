<template>
  <div v-if="settings.page.headerType !== 'none'" class="header__blob full-width">
    <header class="header">
      <div class="header__title">{{ settings.site.name }}</div>
      <div class="header__links">
        <router-link v-for="item in settings.site.header.links" :to="item.to" :class="{ active: path === item.to }">
          {{ item.title }}
        </router-link>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink, useRouter } from '@curves_digital/builder/router';
import { useSettings } from '../pageSettings';

const router = useRouter()
const path = router.currentPath

const settings = useSettings()

</script>

<style lang="sass">
.header__blob
  height: 60px

.header
  height: 60px
  position: fixed
  top: 0
  right: 0
  left: 0
  background-color: var(--header-color)
  display: flex
  align-items: center
  padding: 0 16px
  border-radius: 0 0 8px 8px
  z-index: 100

.header__title
  font-weight: 700
  position: absolute

.header__links
  margin: 0 auto
  display: flex
  align-items: center
  gap: 16px
  a
    text-decoration: none
    font-weight: 500
    color: var(--text-secondary-color)

    &.active
      color: var(--text-color)
  
</style>