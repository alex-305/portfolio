<template>
<DropDownComponent :title="props.title" :icon="props.icon">
    <div class="d-flex flex-column">
    <div class="d-flex justify-space-between">
        <span class="text-h4">Christopher Columbus High School</span>
        <span class="text-h5 ml-auto"> Fall 2017 - Spring 2021</span>
    </div>
    <div class="text-body-1">
        Attending Christopher Columbus High School was a transformative experience. The education I
        received went well beyond just academics. A strong sense of morals and values were instilled
        in me. The school fostered a brotherhood unlike anywhere else I've been. I met some of my
        closest friends while attending Christopher Columbus and some of my best memories are from
        my time on campus.
    </div>
    <div class="d-flex justify-space-between">
        <span class="text-h4">Florida State University</span>
        <span class="text-h5 ml-auto"> Summer 2021 - Fall 2024</span>
    </div>
    <div class="text-body-1">
        The Florida State University experience is unlike any other. I have never met a group of
        people so dedicated to both their schoolwork and partying at the same time. While, I've had
        my fair share of fun at this school, my biggest takeways have been what I have learned in
        the classroom. I came into Florida State with no direction and certainly no idea what I
        wanted my professional life to look like. Through my advisors and my experiences at the
        school, I came to realize that I had a passion for computers.
    </div>
    </div>
</DropDownComponent>
</template>

<script lang="ts">
import DropDownComponent from './DropDownComponent.vue';

const props = defineProps<{
  title: string
  icon: string
}>()

</script>