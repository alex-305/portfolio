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
            :prepend-icon="'mdi-sort-'+sortDirectionString.toLocaleLowerCase()">
            <span class="text-body-2">{{ sortDirectionString }}</span>
            </v-btn>
            <v-radio-group v-model="sortBy" label="Options" class="d-flex flex-column pt-2 pb-0">
                <v-radio value="1" label="Alphabetical"/>
                <v-radio value="2" label="Post Date"/>
            </v-radio-group>
        </v-card>
    </v-menu>
</template>

<script setup lang="ts">
const descendingSort = ref(true)

const sortDirectionString = computed(() => { return descendingSort.value ? 'Descending' : 'Ascending' })

const changeSortDirection = () => { descendingSort.value = !descendingSort.value }

const sortBy = ref("")

</script>