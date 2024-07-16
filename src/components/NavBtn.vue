<template>
  <v-btn
    color="primary"
    variant="tonal"
    :to="{ name: props.name }"
    class="mx-3 my-auto"
  >
  <v-icon :icon="props.icon"/>
    <slot v-if="!isMobile"></slot>
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const isMobile = computed((): boolean => {
  return mobile.value
})

const props = defineProps<{
  name: string
  icon: string
}>()

</script>
