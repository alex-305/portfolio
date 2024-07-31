<template>
    <v-card variant="text" elevation="2" class="px-2">
        <v-row>
            <v-col xl="11" lg="9" md="8" sm="6" xs="4" class="d-flex align-center">
                <div
                class="noscrollbar overflow-x-auto" 
                style="white-space: nowrap; -webkit-overflow-scrolling: touch;">
                    <ChipContainer chipClass="my-1" removable :storeSrc="props.storeSrc"/>
                </div>
                <div v-if="chips.length > 0">
                    <v-btn @click="clearStore" prepend-icon="mdi-close" variant="text">Clear all</v-btn>
                </div>
            </v-col>
            <v-col xl="1" lg="3" md="4" sm="6" xs="8" class="pt-3 pb-0">
                <v-text-field
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
import { useChipsStore } from '#imports';
const store = useChipsStore()
const chips:Ref<string[]> = ref([])
const props = defineProps<{
    storeSrc: "project" | "blog" | null
}>()

const getStoreArray = (str:string):string[] | null => {
    switch(str) {
        case "project":
            return store.chips.projects
        case "blog":
            return store.chips.blogs
        default:
            return null
    }
}

const clearStore = () => {
    if (chips.value) {
        chips.value.length = 0
    }
}

onBeforeMount(() => {
    chips.value = getStoreArray(props.storeSrc ?? '') ?? []
})

</script>

<style scoped>
.noscrollbar::-webkit-scrollbar {
  display: none;
}

</style>