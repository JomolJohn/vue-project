<script setup lang="ts">
const props = defineProps<{
  title: number
  content: number
}>()
</script>

<template>
  <div class="item">
    popularity: {{ props.title }} trending: {{ props.content }}
  </div>
</template>
