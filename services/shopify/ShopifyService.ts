import { gql, GraphQLClient } from 'graphql-request'

export const graphClient = new GraphQLClient(process.env.shopifyGraphql as string, {
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.shopifyAccessToken,
    'Content-Type': 'application/json'
  } as {}
})

export const ShopifyService = {
  hashCode(s: string) {
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
  },

  async call(query: string, variables = {} as {}) {
    return await new Promise((resolve, reject) => {
      graphClient.request(query, variables).then((response) => {
        return resolve(response);
      }).catch((err) => {
        return reject(err);
      })
    });
  },
}
