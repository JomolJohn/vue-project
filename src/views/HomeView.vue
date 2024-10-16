<template>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{ error.message }}</div>
  <TheBlock v-if="mediaTrends" :medias="mediaTrends" />
</template>

<script lang="ts">
import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { trendingQuery } from '../gql/queries'
import type { GetPageResponse } from '../types/type'
import TheBlock from '../components/TheBlock.vue'

const page = ref(1)
const perPage = ref(4)

export default {
  components: {
    TheBlock,
  },
  setup() {
    const { result, loading, error } = useQuery<GetPageResponse>(
      trendingQuery,
      {
        page: page.value,
        perPage: perPage.value,
      },
    )
    if (error.value) {
      console.error('GraphQL Error:', error.value.message)
    }

    return {
      mediaTrends: result.value?.Page?.mediaTrends,
      loading,
      error,
    }
  },
}
</script>
