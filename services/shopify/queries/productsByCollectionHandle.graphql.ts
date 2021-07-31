import { gql } from 'graphql-request'
import { IQueryOptions } from "~/interfaces/options";

export default {
  query(handle: string, limit = null as null|number, options = {} as IQueryOptions) {
    return gql`
      query ProductType($product_filters: [ProductFilter!]) {
        collectionByHandle(handle: "${handle}") {
          id
          title
          handle
          products(first: ${limit ?? 50}, reverse: ${options.reverse ?? false}, sortKey: ${options.sortKey ?? 'BEST_SELLING'}, filters: $product_filters) {
            filters {
              id
              label
              type
              values {
                id
                label
                count
                filterParams
              }
            }
            edges {
              node {
                id
                title
                vendor
                productType
                tags
                handle
                variants(first: 1) {
                  edges {
                    node {
                      priceV2 {
                        amount
                      }
                      compareAtPriceV2 {
                        amount
                      }
                    }
                  }
                },
                metafields(first: 20) {
                  edges {
                    node {
                      key
                      namespace
                      value
                    }
                  }
                },
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
                images(first: 1, reverse: ${options.reverseImages ?? false}) {
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
