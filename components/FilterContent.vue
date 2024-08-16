<template>
    <v-card variant="text" elevation="2" class="mb-5">
        <v-row>
            <v-col xl="11" lg="9" md="8" sm="6" xs="4" class="d-flex align-center">
                <SortbyFilter :filter="filter" :storeSrc="storeSrc"/>
                <v-btn
                class="pa-0 ma-0" 
                variant="text" 
                @click="togglePin"
                :ripple="false"
                :icon="pinHover ? filter.pin ? 'mdi-pin-off-outline' : 'mdi-pin-outline' : filter.pin ? 'mdi-pin-outline' : 'mdi-pin-off-outline'"
                @mouseenter="pinHover = true"
                @mouseleave="pinHover = false" />
                <div
                class="noscrollbar overflow-x-auto" 
                style="white-space: nowrap; -webkit-overflow-scrolling: touch;">
                    <ChipContainer
                    chipIcon="mdi-tag-outline"
                    color="tertiary"
                    :chips="filter.tags as string[]" 
                    chipClass="my-1" 
                    removable 
                    @remove="remove"/>
                </div>
                <div v-if="!isDefaultFilter">
                    <v-btn @click="store.resetFilter(filter)" prepend-icon="mdi-restore" variant="text">Reset</v-btn>
                </div>
            </v-col>
            <v-col xl="1" lg="3" md="4" sm="6" xs="8" class="pt-3 pb-0">
                <v-text-field
                    v-model="filter.query"
                    class="mr-2"
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    clearable
                    persistent-clear
                    variant="underlined"/>
            </v-col>
        </v-row>
        <div class="position-relative py-0" style="height: 3px;">
            <v-progress-linear
            v-if="props.loading"
            absolute
            color="tertiary"
            class="w-100 bottom-0"
            indeterminate
        />
        </div>
    </v-card>
</template>

<script setup lang="ts">
import ChipContainer from '@/components/ChipContainer.vue';
import { useFilterStore } from '~/stores/filterStore';
import type { Filter, FilterTypes } from '~/types/Filter';
const store = useFilterStore()

const pinHover = ref(false)

const togglePin = () => {
    filter.value.pin = !filter.value.pin
    pinHover.value = false
}

const props = withDefaults(defineProps<{
    storeSrc: FilterTypes
    loading: boolean
}>(),
{
    storeSrc: "project",
    loading: false
})

const filter:Ref<Filter> = store.getFilter(props.storeSrc)

const isDefaultFilter = computed(() => { return store.isDefault(filter.value) })

const remove = (chip:string, index:number) => {
    filter.value.tags.splice(index,1)
}

</script>

<style scoped>
.noscrollbar::-webkit-scrollbar {
  display: none;
}

</style>