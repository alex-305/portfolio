<template>
  <div>
    <v-container>
      <v-card link class="relative" color="grey-darken-4">
        <v-img
          class="mx-auto w-100"
          height="200"
          cover
          width="300"
          :src="props.item.coverImageURL"
        ></v-img>
        <v-card-title
          class="d-flex justify-center position-absolute rounded-lg pa-0"
          style="color: black; transform: translate(0%, -100%)"
          >{{ props.item.title }}</v-card-title
        >
        <div class="bg-surface-light">
          <div class="d-inline-flex">
            <v-card-text>Tags:</v-card-text>
            <v-chip
              color="green"
              class="ma-auto ml-0 mr-2"
              v-for="tag in props.item.tags"
              :key="tag"
            >
              {{ tag }}</v-chip
            >
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import type { PortfolioItem } from '@/types/PortfolioItem'

const props = defineProps<{
  item: {
    type: PortfolioItem
    required: true
  }
}>()
</script>

<style scoped>
.gwng {
  color: #0000005b;
}
</style>
