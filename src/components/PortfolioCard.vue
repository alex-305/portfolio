<template>
  <div>
    <v-container>
      <v-card>
        <v-img class="mx-auto" height="150" width="300" src=""></v-img>
        <v-card-title class="d-flex justify-center font-weight-bold">{{
          props.item.title
        }}</v-card-title>
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

<style scoped></style>
