<template>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <v-btn
            class="pa-0 ma-0" 
            variant="text" 
            :ripple="false" 
            icon="mdi-sort" 
            v-bind="props"/>
        </template>
        <v-card class="pa-3 pb-0" elevation="5" style="background-color: white;">
            <v-btn
            rounded="0" 
            variant="text" 
            @click="changeSortDirection" 
            :prepend-icon="'mdi-sort-'+filter.sortDirection">
            <span class="text-body-2">{{ filter.sortDirection.charAt(0).toLocaleUpperCase() + filter.sortDirection.slice(1) }}</span>
            </v-btn>
            <v-radio-group v-model="filter.sortType" label="Options" class="d-flex flex-column pt-2 pb-0">
                <v-radio value="title" label="Alphabetical"/>
                <v-radio value="date" label="Post Date"/>
            </v-radio-group>
        </v-card>
    </v-menu>
</template>

<script setup lang="ts">
import type { Filter, FilterTypes } from '@/types/Filter'
import { useFilterStore } from '@/stores/filterStore';
const store = useFilterStore()
const props = withDefaults(defineProps<{
    storeSrc: FilterTypes,
    filter: Filter
}>(),
{
    storeSrc: "project"
})

const filter = store.getFilter(props.storeSrc)

const changeSortDirection = () => { filter.value.sortDirection = filter.value.sortDirection ==='ascending' ? 'descending' : 'ascending'}

</script>