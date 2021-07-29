import {gql} from 'graphql-request'

export default {
  query(accessToken: string) {
    return gql`
      {
        customer(customerAccessToken: "${accessToken}") {
          id
          firstName
          lastName
          email
        }
      }`
  }
}
