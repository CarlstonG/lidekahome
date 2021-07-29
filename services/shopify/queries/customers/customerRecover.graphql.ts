import {gql} from 'graphql-request'

export default {
  query() {
    return gql`
      mutation customerRecover($email: String!) {
        customerRecover(email: $email) {
          customerUserErrors {
            code
            field
            message
          }
        }
      }`
  }
}
