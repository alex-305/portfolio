<template>
    <div ref="utteranceComments"></div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
import { getCurrentTheme } from '~/scripts/theme';
const theme = useTheme()

const themeString = computed(() => getCurrentTheme(theme))
const utteranceComments = ref<HTMLDivElement | null>(null)
const lastChild = ref<HTMLScriptElement | null>(null)

const props = defineProps<{
    path:string
}>()

const createScript = () => {
    const commentsScript = document.createElement('script')
    commentsScript.setAttribute('src', 'https://utteranc.es/client.js')
    commentsScript.setAttribute('repo','alex-305/portfolio')
    commentsScript.setAttribute('issue-term', props.path)
    commentsScript.setAttribute('theme', 'github-' + themeString.value)
    commentsScript.setAttribute('crossorigin', 'anonymous')
    commentsScript.async = true
    return commentsScript
}

const updateScript = () => {
    const script = createScript()
    if(utteranceComments.value) {
        utteranceComments.value.innerHTML = ''
    }
    utteranceComments.value?.appendChild(script);
    lastChild.value = script;
}

onMounted(() => {
    const script = createScript()
    utteranceComments.value?.appendChild(script)
})

watch(themeString, () => {
    updateScript()
})



</script>