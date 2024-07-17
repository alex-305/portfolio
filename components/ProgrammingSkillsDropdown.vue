<template>
  <DropDownComponent title="Programming Knowledge" icon="mdi-account-outline">
    <v-list>
      <v-list-item prepend-icon="fa:fa-brands fa-vuejs" title="Vue.js"
        >I have used Vue.js for about a year and have learned a lot about component driven
        development. I thoroughly enjoy using it and it is my library of choice for the web. So much
        so that I am using it for this website you are on right now.</v-list-item
      >
      <v-list-item prepend-icon="fa:fa-brands fa-golang" title="Golang"
        >Golang is my programming language of choice for backend services. I think the ease of use,
        the rich ecosystem of packages, and the nice syntax is what I love about the
        language.</v-list-item
      >
    </v-list>
  </DropDownComponent>
</template>

<script setup lang="ts">
import DropDownComponent from './DropDownComponent.vue';
</script>
