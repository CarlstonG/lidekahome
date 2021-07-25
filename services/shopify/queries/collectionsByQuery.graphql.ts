import { gql } from 'graphql-request'

export default {
  query(searchQuery: string) {
    return gql`
      {
        collections(query: "${searchQuery}", first: 10) {
          edges {
            node {
              title,
              handle
            }
          }
        }
      }`
  }
}
