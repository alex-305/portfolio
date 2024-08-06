<template>
    <v-card variant="text" elevation="2" class="px-2">
        <v-row>
            <v-col class="ma-auto" cols="1">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn variant="text" rounded="0" icon="mdi-sort" v-bind="props"/>
                    </template>
                    <v-card class="pa-3" elevation="5" style="background-color: white;">
                        <div class="text-h4 text-center">Sort By</div>
                        <div class="d-flex flex-column py-2">
                            <v-btn>Something</v-btn>
                            <v-btn>Another thing</v-btn>
                        </div>
                    </v-card>
                </v-menu>
            </v-col>
            <v-col xl="10" lg="8" md="7" sm="5" xs="3" class="d-flex align-center">
                <div
                class="noscrollbar overflow-x-auto" 
                style="white-space: nowrap; -webkit-overflow-scrolling: touch;">
                    <ChipContainer 
                    :chips="filter.tags as string[]" 
                    chipClass="my-1" 
                    removable 
                    @remove="remove"/>
                </div>
                <div v-if="(filter?.tags as string[]).length > 0">
                    <v-btn @click="clearStore" prepend-icon="mdi-close" variant="text">Clear all</v-btn>
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
    </v-card>
</template>

<script setup lang="ts">
import ChipContainer from '@/components/ChipContainer.vue';
import { useFilterStore } from '~/stores/filterStore';
import type { Filter } from '~/types/Filter';
const store = useFilterStore()

let filter = ref<Filter>({
    query: "",
    tags: []
})

const props = withDefaults(defineProps<{
    storeSrc: "project" | "blog" | ""
}>(),
{
    storeSrc: ""
})

const remove = (chip:string, index:number) => {
    filter.value.tags.splice(index,1)
    console.log("hello: "+filter.value.tags)
}

const clearStore = () => {
    if(filter.value?.tags) {
        filter.value.tags.length = 0
    }
}

onBeforeMount(() => {
    const f = store.getFilter(props.storeSrc)
    if(f) {
        filter = f
    }

})

</script>

<style scoped>
.noscrollbar::-webkit-scrollbar {
  display: none;
}

</style>