<template>
  <div>
    <PortfolioCard v-for="item in p" :key="item" :item="item" />
  </div>
</template>

<script setup lang="ts">
import PortfolioCard from '@/components/PortfolioCard.vue'
import type { PortfolioItem } from '@/types/PortfolioItem'
import { ref } from 'vue'
let p: ref<PortfolioItem[]> = ref([
  {
    id: 1,
    title: 'First sample portfolio',
    coverImageURL: '',
    date: new Date(),
    tags: ['Game', 'Website']
  },
  {
    id: 2,
    title: 'Second sample portfolio',
    coverImageURL: '',
    date: new Date(),
    tags: ['Game']
  },
  {
    id: 3,
    title: 'Third Thing',
    coverImageURL: '',
    date: new Date(),
    tags: ['Website']
  }
])
</script>

<style scoped></style>
