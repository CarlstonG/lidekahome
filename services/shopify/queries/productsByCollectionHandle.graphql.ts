import { gql } from 'graphql-request'

export default {
  query(handle: string) {
    return gql`
      {
        collectionByHandle(handle: "${handle}") {
          id
          title
          handle
          products(first: 50) {
            edges {
              node {
                id
                title
                vendor
                handle
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
                images(first: 1) {
                  edges {
                    node {
                      id
                      altText
                      transformedSrc(maxWidth: 600, maxHeight: 600)
                    }
                  }
                }
              }
            }
          }
        }
      }`
  }
}
