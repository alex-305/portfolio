<template>
    <v-card :variant="props.variant" class="d-inline-flex">
        <v-chip
        v-for="(chip, index) in props.chips" 
        :closable="removable" 
        :link="selectable" 
        :color="color"
        :prepend-icon="chipIcon"
        :class="['ma-auto', 'mx-1', props.chipClass]"
        @click="emits('select', chip, index)"
        @click:close.stop="emits('remove', chip, index)"> {{ chip }}</v-chip>
    </v-card>
</template>

<script setup lang="ts">

const emits = defineEmits<{
    remove: [string, number],
    select: [string, number]
}>()


const props = withDefaults(
    defineProps<{
        chips: string[]
        selectable?: boolean
        removable?: boolean
        variant?: "text" | "tonal"
        chipClass?: string
        color?: string
        chipIcon?:string
    }>(),
    {
        selectable: false,
        removable: false,
        variant: "text",
        chipClass: "",
        color: "primary",
        chipIcon: "mdi-tag-outline"
    }
)

</script>