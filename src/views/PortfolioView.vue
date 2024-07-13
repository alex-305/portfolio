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
    coverImageURL:
      'https://camo.githubusercontent.com/71e2964a6f99d229b1e9e8b2bc9ade5895a10d4a8f7626092a82301a7b110931/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f70772f41503147637a4d75536f3272586a6e7075696343555572326b4b34566e464d4468376c4749654d4c3871656c4a366b6f4d68514d35443963675469455235715f48616342644568334b6468337a6a494e4c4e755a54625a416369676b744438373776466e4f7a354b72417678324a6170794a6568646f513d7732343030',
    date: new Date(),
    tags: ['Game', 'Website', 'GDScript', 'C++', 'Python', 'Vue.js']
  },
  {
    id: 2,
    title: 'Second sample portfolio',
    coverImageURL:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Aspect_ratio_-_3x2.svg/2560px-Aspect_ratio_-_3x2.svg.png',
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
