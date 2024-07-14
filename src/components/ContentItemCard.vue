<template>
  <div>
    <v-container>
      <v-card link class="relative">
        <slot></slot>
        <div class="bg-surface-light">
          <div class="d-inline-flex">
            <v-card-text>Tags:</v-card-text>
            <v-chip color="green" class="ma-auto ml-0 mr-2" v-for="tag in props.tags" :key="tag">
              {{ tag }}</v-chip
            >
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tags: string[]
}>()
</script>
