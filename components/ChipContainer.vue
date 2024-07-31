<template>
    <v-card :variant="props.variant" class="d-inline-flex">
        <v-chip
        v-for="(chip, index) in chips" 
        :closable="removable" 
        :link="selectable" 
        color="tertiary"
        :class="['ma-auto', 'mx-1', props.chipClass]"
        @click="chipAction(index)"> {{ chip }}</v-chip>
    </v-card>
</template>

<script setup lang="ts">
import { useChipsStore } from '~/stores/chipsStore';

const store = useChipsStore()

const chipAction = (index:number) => {
    if(props.selectable) {
        chipStore.value.push(chips.value[index])
    } else if(props.removable) {
        chipStore.value.splice(index, 1)
    }
}

const props = withDefaults(
    defineProps<{
        store?: "project" | "blog" | null
        storeSrc?: "project" | "blog" | null
        chips?: string[] | null
        selectable?: boolean
        removable?: boolean
        variant?: "text" | "tonal"
        chipClass?: string
    }>(),
    {
        store: null,
        storeSrc: null,
        chips: null,
        selectable: false,
        removable: false,
        variant: "text",
        chipClass: ""
    }
)
//Chips to actually be displayed
const chips:Ref<string[]> = ref([])

//Chip array to be added to if selectable is true
const chipStore:Ref<string[]> = ref([])

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

onBeforeMount(() => {
    const chipsFromStore = getStoreArray(props.storeSrc ?? '')
    chips.value = chipsFromStore ?? props.chips ?? []

    if (props.selectable) {
        chipStore.value = getStoreArray(props.store ?? '') ?? []
    }
})

</script>