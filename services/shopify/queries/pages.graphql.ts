import { gql } from 'graphql-request'

export default {
  query(first = 50) {
    return gql`
      {
        pages(first: ${first}) {
          edges {
            node {
              id
              title
              handle
              seo {
                title
                description
              }
            }
          }
        }
      }`
  }
}
