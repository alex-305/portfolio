<template>
    <DropDownComponent title="Hobbies" icon="mdi-face-man-shimmer-outline">
      <v-list>
        <v-list-item prepend-icon="mdi-laptop" title="Programming">Programming is my favorite hobby because it requires both creativity and problem solving in a way that's mentally stimulating and satisfying. I love turning an idea that I came up with in the shower into something that me and my friends can actually use. I love being at the frontier of new technology and programming allows me to do just that by utilizing new software, libraries, and frameworks.</v-list-item>
        <v-list-item prepend-icon="mdi-weight-lifter" title="Exercising">Exercise is a big part of my life not only because it keeps me in shape but also because it helps with my mental state. It keeps my mind sharp and when I don't exercise regularly, I notice that I am less efficient in my other tasks throughout the day.</v-list-item>
        <v-list-item prepend-icon="mdi-basketball" title="Sports">I have enjoyed watching sports since I was a kid in 2010 when Lebron and Chris Bosh joined the Miami Heat to form the big 3. Ever since then, I've loved following Miami sports. I am a big Miami Heat, Dolphins, and Florida Panthers fan. I also enjoy watching the UFC and F1. Additionally, I enjoy playing basketball, spikeball, and other sports.</v-list-item>
        <v-list-item prepend-icon="mdi-book-outline" title="Reading">I enjoy reading because it allows me to immerse myself in someone else's storytelling and imagination. I find it extremely relaxing and given the right book, I can't put it down.</v-list-item>
      </v-list>
    </DropDownComponent>
  </template>
    
  <script setup lang="ts">
  import DropDownComponent from '@/components/DropDownComponent.vue';
  </script>