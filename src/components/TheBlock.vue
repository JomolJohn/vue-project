<script setup lang="ts">
import { ref } from 'vue'
import BlockItem from './BlockItem.vue'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' },
])
</script>

<template>
  <div class="row">
    <BlockItem
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
    ></BlockItem>
  </div>
</template>
<style>
.row {
  display: flex;
  flex-flow: row;
}

.item {
  background-color: teal;
  padding: 20px;
  width: 100%;
  margin: 10px;
  text-align: center;
}
@media (min-width: 1024px) {
  /* .home {
    min-height: 100vh;
    display: flex;
  } */
}
</style>
