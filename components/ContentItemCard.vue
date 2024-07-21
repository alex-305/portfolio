<template>
  <div>
    <v-container>
      <v-card class="mx-auto">
        <v-hover v-if="props.link" v-slot:default="{ isHovering, props: HoverProps }">
          <v-card link v-bind="HoverProps" class="mx-auto rounded-0">
            <slot></slot>
            <v-overlay
              :model-value="isHovering as boolean"
              class="align-center justify-center"
              contained
              absolute
            >
              <v-btn class="px-3" color="tertiary" :target="newTab ?'_blank' : '_self'" :href="props.to" prepend-icon="mdi-eye-outline"
                >View</v-btn
              >
            </v-overlay>
          </v-card>
        </v-hover>
        <v-card class="mx-auto rounded-false" v-else><slot></slot></v-card>
        <div class="noscrollbar bg-surface-light overflow-x-auto" style="white-space: nowrap; -webkit-overflow-scrolling: touch;">
          <div class="d-inline-flex">
            <v-card-text>Tags:</v-card-text>
              <v-chip color="tertiary" class="ma-auto ml-0 mr-2" v-for="tag in props.tags" :key="tag">
                {{ tag }}</v-chip>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tags: string[]
    link?: boolean
    to?: string
    newTab?: boolean
  }>(),
  {
    link: false,
    newTab: false,
    to: ''
  }
)
</script>

<style scoped>

.noscrollbar::-webkit-scrollbar {
  display: none;
}

</style>
