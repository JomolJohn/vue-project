import gql from 'graphql-tag'

export const userQuery = gql`
  query pages {
    Page {
      users {
        id
        name
        about
      }
    }
  }
`

export const trendingQuery = gql`
  query trendingQuery($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      mediaTrends {
        trending
        mediaId
        popularity
      }
    }
  }
`
