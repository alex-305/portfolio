<template>
  <v-btn
    color="primary"
    variant="tonal"
    :to="{ name: props.name }"
    class="mx-3 my-auto"
  >
  <v-icon v-if="props.icon!=''" :icon="props.icon"/>
    <slot v-if="isWideEnough || props.icon ==''"></slot>
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify'

const { width } = useDisplay()

const isWideEnough = computed(() => { return width.value >= 500})

const props = withDefaults(defineProps<{
  name: string
  icon?: string
}>(), {
  icon:''
})

</script>
