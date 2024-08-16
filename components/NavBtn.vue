<template>
  <v-btn
    color="primary"
    :variant="getCurrentTheme(theme) === 'light' ? 'tonal' : 'flat'"
    :ripple="false"
    :to="props.route"
    class="mx-3 my-auto"
    :active="props.active"
    :class="{ bigger: props.active }"
  >
  <v-icon v-if="props.icon!=''" :icon="props.icon"/>
    <slot v-if="isWideEnough || props.icon ==''"></slot>
  </v-btn>
</template>

<script setup lang="ts">
import { useDisplay, useTheme } from 'vuetify'
import { getCurrentTheme } from '~/scripts/theme';

const { width } = useDisplay()

const theme = useTheme()

const isWideEnough = computed(() => { return width.value >= 570})

const props = withDefaults(defineProps<{
  route: string
  icon?: string
  active: boolean
}>(), {
  icon:''
})

</script>

<style scoped>

.v-btn {
  transition: all 0.2s ease;
}

.bigger {
  height: 50px;
  font-size: 20px;
}
</style>
