import { gql } from 'graphql-request'

export default {
  query(handle: string, first = 10, cursor = null as string|null|undefined) {
    return gql`
      {
        blogByHandle(handle: "${handle}") {
          id
          title
          handle
          articles(first: ${first}, sortKey: PUBLISHED_AT, reverse: true) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              cursor
              node {
                id
                title
                excerpt
                content
                handle
                authorV2 {
                  name
                }
                publishedAt
                image {
                  id
                  transformedSrc(maxWidth: 600, maxHeight: 600)
                  altText
                }
              }
            }
          }
          seo {
            title
            description
          }
        }
      }`
  }
}
