import {gql} from 'graphql-request'

export default {
  query(handle: string, articleHandle: string) {
    return gql`
      {
        blogByHandle(handle: "${handle}") {
          id
          title
          handle
          articleByHandle(handle: "${articleHandle}") {
            id
            title
            handle
            excerpt
            contentHtml
            content
            authorV2 {
              name
            }
            publishedAt
            image {
              id
              transformedSrc(maxWidth: 1024, maxHeight: 1024)
              altText
            }
            seo {
              title
              description
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
