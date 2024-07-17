<template>
  <v-expansion-panel v-model="isOpen" class="pa-3">
    <v-expansion-panel-title class="text-h4"
      ><v-icon class="pr-5" :icon="props.icon"></v-icon> {{ props.title }}</v-expansion-panel-title
    >
    <v-expansion-panel-text class="text-body-1">
      <slot></slot>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  title: string
  icon: string
}>()

const isOpen = ref(true)
</script>
