import {gql} from 'graphql-request'

export default {
  query() {
    return gql`
      mutation customerActivateByUrl($activationUrl: URL!, $password: String!) {
        customerActivateByUrl(activationUrl: $activationUrl, password: $password) {
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
