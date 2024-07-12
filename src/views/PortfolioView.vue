<template>
  <div>
    <v-row>
      <v-col v-for="item in p" :key="item.id" cols="12" sm="6" md="4">
        <PortfolioCard :item="item" />
      </v-col>
    </v-row>
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
