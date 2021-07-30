import {gql} from 'graphql-request'

export default {
  query() {
    return gql`
      mutation associateCustomerWithCheckout($checkoutId: ID!, $customerAccessToken: String!) {
        checkoutCustomerAssociateV2(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
          checkout {
            id
          }
          checkoutUserErrors {
            code
            field
            message
          }
          customer {
            id
          }
        }
      }`
  }
}
