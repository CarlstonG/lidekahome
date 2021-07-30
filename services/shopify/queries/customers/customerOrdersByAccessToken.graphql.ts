import {gql} from 'graphql-request'

export default {
  query(accessToken: string) {
    return gql`
      {
        customer(customerAccessToken: "${accessToken}") {
          id
          firstName
          lastName
          addresses(first: 50) {
            edges {
              node {
                id
                name
                firstName
                lastName
                zip
                country
                city
                phone
                company
                address1
                address2
                province
                provinceCode
                latitude
                longitude
              }
            }
          }
          email
          orders(first: 50) {
            edges {
              node {
                id,
                orderNumber
                canceledAt
                cancelReason
                currencyCode

                subtotalPriceV2 {
                  amount
                  currencyCode
                }

                totalPriceV2 {
                  amount
                  currencyCode
                }

                totalTaxV2 {
                  amount
                  currencyCode
                }

                statusUrl

                totalRefundedV2 {
                  amount
                  currencyCode
                }

                shippingDiscountAllocations {
                  discountApplication {
                    allocationMethod
                    targetType
                    value {
                      __typename
                    }
                    targetSelection
                  }
                }

                totalShippingPriceV2 {
                  amount
                  currencyCode
                }

                currentSubtotalPrice {
                  currencyCode
                  amount
                }
                currentTotalTax {
                  currencyCode
                  amount
                }
                currentSubtotalPrice {
                  currencyCode
                  amount
                }
                customerUrl
                email
                financialStatus
                fulfillmentStatus
                successfulFulfillments {
                  trackingInfo {
                    url
                    number
                  }
                  trackingCompany
                }
                shippingAddress {
                  firstName
                  lastName
                  company
                  address1
                  address2
                  latitude
                  longitude
                  city
                  country
                  countryCodeV2
                }
                processedAt
                lineItems(first: 50) {
                  edges {
                    node {
                      title
                      originalTotalPrice {
                        amount
                        currencyCode
                      }
                      quantity
                      currentQuantity
                      discountedTotalPrice {
                        amount
                        currencyCode
                      }
                      customAttributes {
                        value
                        key
                      }
                      variant {
                        id
                        title
                        unitPrice {
                          amount
                          currencyCode
                        }
                        product {
                          title
                        }
                      }
                      discountAllocations {
                        discountApplication {
                          targetType
                          targetSelection
                          value {
                            __typename
                          }
                          allocationMethod
                        }
                      }
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
