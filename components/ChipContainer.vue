<template>
    <v-card :variant="props.variant" class="d-inline-flex">
        <v-chip
        v-for="(chip, index) in props.chips" 
        :closable="removable" 
        :link="selectable" 
        color="tertiary"
        :class="['ma-auto', 'mx-1', props.chipClass]"
        @click="chipAction(chip, index)"> {{ chip }}</v-chip>
    </v-card>
</template>

<script setup lang="ts">

const emits = defineEmits<{
    remove: [string, number],
    select: [string, number]
}>()

const chipAction = (name:string, index:number) => {
    if(props.selectable) {
        emits('select', name, index)
    } else if(props.removable) {
        emits('remove', name, index)
    }
}

const props = withDefaults(
    defineProps<{
        chips: string[]
        selectable?: boolean
        removable?: boolean
        variant?: "text" | "tonal"
        chipClass?: string
    }>(),
    {
        selectable: false,
        removable: false,
        variant: "text",
        chipClass: ""
    }
)

</script>