import {gql} from 'graphql-request'

export default {
  query(handle: string) {
    return gql`
      {
        pageByHandle(handle: "${handle}") {
          id
          title
          body
          bodySummary
          handle
          seo {
            title
            description
          }
        }
      }`
  }
}
