<template>
    <div class="py-0 px-5 w-100 h-100 ma-0">
        <v-card class="pa-5" elevation="10">
            <div :class="{ 'd-inline-flex': isWideEnough, 'd-flex flex-column' : !isWideEnough }" class="align-center justify-center">
                <div v-if="!isWideEnough" class="text-h4">Alex Gonzalez</div>
                <v-avatar variant="elevated" text="Alex Gonzalez" color="primary" size="200"><v-img alt="Alex Gonzalez" src="https://i.imgur.com/hnYaUeK.jpeg"/></v-avatar>
                <div class="pl-5" :class="{ 'mr-auto' : !isWideEnough}">
                    <div v-if="isWideEnough" class="text-h5">Alex Gonzalez</div>
                    <dl class="d-flex text-body-2 flex-column">
                        <dt>Born:</dt>
                        <dd>June 17th, 2003</dd>
                        <dd>Miami, Florida</dd>
                        <dt>Heritage:</dt>
                        <dd>Cuban</dd>
                        <dd>American</dd>
                        <dd>Spanish</dd>
                        <dt>Occupation:</dt>
                        <dd>Software Engineer</dd>
                    </dl>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { computed } from 'vue';

const { width } = useDisplay()

const isWideEnough = computed(()=> { return width.value > 530})

</script>

<style scoped>

dt {
    font-weight: bold;
}

dd {
    margin-left: 20px;
}

dd::before {
    content: "● ";
}

</style>