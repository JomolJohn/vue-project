<script setup lang="ts">
import BlockItem from './BlockItem.vue'
import type { Media } from '../types/type'

defineProps<{
  medias: Media[]
}>()
</script>

<template>
  <div class="row">
    <BlockItem
      v-for="media in medias"
      :key="media.mediaId"
      :title="media.popularity"
      :content="media.trending"
    />
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
