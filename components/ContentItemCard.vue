<template>
  <div>
    <v-container>
      <v-card class="mx-auto" elevation="5">
        <v-hover v-if="props.link!==''" v-slot:default="{ isHovering, props: HoverProps }">
          <v-card v-bind="HoverProps" class="mx-auto rounded-0">
            <slot></slot>
            <v-overlay
              :model-value="isHovering as boolean"
              class="align-center justify-center"
              contained
              absolute
            >
              <v-btn class="px-3" color="tertiary" :target="newTab ?'_blank' : '_self'" :href="props.to" :prepend-icon="props.linkIcon"
                >{{ props.link }}</v-btn
              >
            </v-overlay>
          </v-card>
        </v-hover>
        <v-card class="mx-auto rounded-false" v-else><slot></slot></v-card>
        <div class="noscrollbar bg-surface-light overflow-x-auto" style="white-space: nowrap; -webkit-overflow-scrolling: touch;">
          <div class="d-inline-flex">
            <v-card-text class="pl-2 pr-0">Tags:</v-card-text>
            <ChipContainer selectable @select="addToStore" :chips="props.tags"/>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '@/stores/filterStore';
import type { Filter } from '~/types/Filter';

const store = useFilterStore()
let filter = ref<Filter>()
const props = withDefaults(
  defineProps<{
    tags: string[]
    link?: string
    to?: string
    newTab?: boolean
    linkIcon?: string
    chipStore?: "project" | "blog" | null
  }>(),
  {
    link: '',
    newTab: false,
    to: '',
    linkIcon: '',
    chipStore: null,
  }
)

onBeforeMount(() => {
  const f = store.getFilter(props.chipStore as string)
  if(f) {
    filter = f
  }
})

const addToStore = (chip:string, index:number) => {
  console.log(chip)
  filter.value?.tags.push(chip)
}

</script>

<style scoped>

.noscrollbar::-webkit-scrollbar {
  display: none;
}

</style>
