<template>
  <v-btn
    color="primary"
    variant="tonal"
    :to="{ name: props.name }"
    class="mx-3 my-auto"
    :prepend-icon="props.icon"
  >
    <slot></slot>
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  icon: string
}>()
</script>
