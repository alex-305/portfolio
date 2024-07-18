<template>
    <DropDownComponent title="Skills" icon="mdi-account-hard-hat-outline">
      <v-list>
        <v-list-item prepend-icon="mdi-translate" title="English">I have been speaking English since I was in preschool as I was born in and grew up in America. I am fluent in both speaking and writing English.</v-list-item>
        <v-list-item prepend-icon="mdi-translate" title="Spanish">I am fluent in Spanish because I am the son of two immigrant parents. It is my first language and I have been speaking it for longer than English. I am fluent in both speaking and writing Spanish.</v-list-item>
        <v-list-item prepend-icon="mdi-account-hard-hat-outline" title="Hard working">I have always been a hard working and motivated person. I enjoy challening myself and I get bored easily if I don't have something to work on.</v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Team player">I enjoy working with others and I think I excel at it. I am a good listener and and I think feedback from others is important when trying to do quality work.</v-list-item>
      </v-list>
    </DropDownComponent>
  </template>
  
  <script setup lang="ts">
  import DropDownComponent from './DropDownComponent.vue';
  </script>
  