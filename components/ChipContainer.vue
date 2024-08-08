<template>
    <v-card :variant="props.variant" class="d-inline-flex">
        <v-chip
        v-for="(chip, index) in props.chips" 
        :link="selectable" 
        :color="getChipColor(chip)"
        :prepend-icon="getChipIcon(chip)"
        :class="['ma-auto', 'mx-1', props.chipClass]"
        @click="emits('select', chip, index)"> {{ chip }}
            <template v-if="removable" #close>
                <v-icon icon="mdi-close-circle" @click.stop="emits('remove', chip, index)" />
            </template>
        </v-chip>
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
        selectedChips?: string[]
        selectable?: boolean
        removable?: boolean
        variant?: "text" | "tonal"
        chipClass?: string
        color?: string
        chipIcon?: string
        selectedChipIcon?: string
        selectedChipColor?: string
    }>(),
    {
        selectable: false,
        removable: false,
        variant: "text",
        chipClass: "",
        color: "primary",
        chipIcon: "mdi-tag-outline",
        selectedChipIcon: "mdi-tag-check-outline",
        selectedChipColor: "tertiary"
    }
)

const getChipIcon = (chip:string) => {
    return props.selectedChips?.includes(chip) ?
        props.selectedChipIcon :
        props.chipIcon
}

const getChipColor = (chip:string) => {
    return props.selectedChips?.includes(chip) ?
    props.selectedChipColor :
    props.color
}

</script>