import { gql } from 'graphql-request'

export default {
  query(handle: string) {
    return gql`{
      productByHandle(handle: "${handle}") {
        title
        vendor
        seo {
          title
          description
        }
        collections(first: 1, reverse: true) {
          edges {
            node {
              title
              handle
            }
          }
        }
        descriptionHtml
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
            }
          }
        }
        media(first: 20) {
          edges {
            node {
              previewImage {
                transformedSrc(maxWidth: 100, maxHeight: 100)
              }
              alt
              mediaContentType
              ...mediaFieldsByType
            }
          }
        }
        metafields(first: 20) {
          edges {
            node {
              key
              namespace
              value
            }
          }
        }
      }
    }

    fragment mediaFieldsByType on Media {
      ... on ExternalVideo {
        embeddedUrl
      }
      ... on MediaImage {
        image {
          transformedSrc(maxWidth: 600, maxHeight: 600)
        }
      }

      ... on Video {
        sources {
          url
          mimeType
          format
          height
          width
        }
      }
    }`
  }
}
