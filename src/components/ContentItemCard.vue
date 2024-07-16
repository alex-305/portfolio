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
              <v-btn class="px-3" color="tertiary" :to="props.to" prepend-icon="mdi-eye-outline"
                >View</v-btn
              >
              <v-btn
                class="px-3"
                v-if="props.blogLink"
                color="tertiary"
                :to="props.blogTo"
                prepend-icon="mdi-post-outline"
                >Blog Post</v-btn
              >
            </v-overlay>
          </v-card>
        </v-hover>
        <v-card class="mx-auto rounded-false" v-else><slot></slot></v-card>
        <div class="bg-surface-light">
          <div class="d-inline-flex">
            <v-card-text>Tags:</v-card-text>
            <v-chip color="tertiary" class="ma-auto ml-0 mr-2" v-for="tag in props.tags" :key="tag">
              {{ tag }}</v-chip
            >
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
    blogLink?: boolean
    blogTo?: string
    to?: string
  }>(),
  {
    link: false,
    blogLink: false,
    blogTo: '',
    to: ''
  }
)
</script>
