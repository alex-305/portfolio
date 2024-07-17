<template>
  <v-btn
    color="primary"
    variant="tonal"
    :to="props.route"
    class="mx-3 my-auto"
  >
  <v-icon v-if="props.icon!=''" :icon="props.icon"/>
    <slot v-if="isWideEnough || props.icon ==''"></slot>
  </v-btn>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { width } = useDisplay()

const isWideEnough = computed(() => { return width.value >= 500})

const props = withDefaults(defineProps<{
  route: string
  icon?: string
}>(), {
  icon:''
})

</script>
