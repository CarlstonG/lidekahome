import { gql } from 'graphql-request'

export default {
  query(searchQuery: string) {
    return gql`
      {
        products(query: "${searchQuery}", first: 10) {
          edges {
            node {
              title
              handle
              vendor
              images(first: 1) {
                edges {
                  node {
                    altText
                    transformedSrc(maxWidth: 200, maxHeight: 200)
                  }
                }
              }
            }
          }
        }
      }`
  }
}
