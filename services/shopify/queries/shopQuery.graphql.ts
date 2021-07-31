import { gql } from 'graphql-request'

export default {
  query() {
    return gql`query {
      shop {
        name
        description
        moneyFormat
        primaryDomain {
          url
          host
        }
        paymentSettings {
          countryCode
          currencyCode
          enabledPresentmentCurrencies
        }
        shipsToCountries
      }
      productTags(first: 250) {
        edges {
          node
        }
      }
      productTypes(first: 250){
        edges {
          node
        }
      }
    }`
  }
}
