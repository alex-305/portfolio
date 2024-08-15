<template>
  <v-container class="mt-0">
    <v-card class="mx-auto" elevation="5">
      <v-hover v-if="props.btnLink!==''" v-slot:default="{ isHovering, props: HoverProps }">
        <v-card v-bind="HoverProps" class="mx-auto rounded-0">
          <slot></slot>
          <v-overlay
            :model-value="isHovering as boolean"
            class="align-center justify-center"
            contained
            absolute
          >
            <v-btn class="px-3" color="tertiary" :target="newTab ?'_blank' : '_self'" :href="props.btnTo" :prepend-icon="props.linkIcon"
              >{{ props.link }}</v-btn
            >
          </v-overlay>
        </v-card>
      </v-hover>
      <v-card :link="props.link" :href="props.to" class="mx-auto rounded-false" v-else><slot></slot></v-card>
      <div class="noscrollbar bg-surface-light overflow-x-auto" style="white-space: nowrap; -webkit-overflow-scrolling: touch;">
        <div class="d-inline-flex py-2">
          <v-chip variant="text" class="mx-1 px-2" color="pink" label>
            <v-icon icon="mdi-label" start/>
            <span>Tags:</span>
          </v-chip>
          <ChipContainer 
            selectable 
            color="primary" 
            @select="addToStore" 
            :chips="props.tags"
            :selectedChips="filter.tags"/>
          <v-snackbar :timeout="800" v-model="errorAdding" color="red" variant="elevated">This tag is already in use.</v-snackbar>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useFilterStore } from '@/stores/filterStore';
import type { Filter, FilterTypes } from '~/types/Filter';

const store = useFilterStore()

const errorAdding = ref(false)

const props = withDefaults(
  defineProps<{
    tags: string[]
    link?: string
    to?: string
    newTab?: boolean
    linkIcon?: string
    chipStore?: FilterTypes
    btnLink?: string
    btnTo?: string
  }>(),
  {
    link: '',
    newTab: false,
    to: '',
    linkIcon: '',
    chipStore: "project",
    btnLink: '',
    btnTo: ''
  }
)

const filter:Ref<Filter> = store.getFilter(props.chipStore)

const addToStore = (chip:string, index:number) => {
  errorAdding.value = !store.addChip(filter.value, chip)
}

</script>

<style scoped>

.noscrollbar::-webkit-scrollbar {
  display: none;
}

</style>
