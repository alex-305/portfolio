<template>
  <div>
    <ContentItemCard :tags="props.item.tags">
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
    </ContentItemCard>
  </div>
</template>

<script setup lang="ts">
import type { PortfolioItem } from '@/types/PortfolioItem'

const props = defineProps<{
  item: PortfolioItem
}>()
</script>

<style scoped>
.gwng {
  color: #0000005b;
}
</style>
