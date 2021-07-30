import {gql} from 'graphql-request'

export default {
  query() {
    return gql`
      mutation customerResetByUrl($resetUrl: URL!, $password: String!) {
        customerResetByUrl(resetUrl: $resetUrl, password: $password) {
          customer {
            id
          }
          customerAccessToken {
            accessToken
            expiresAt
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }`
  }
}
