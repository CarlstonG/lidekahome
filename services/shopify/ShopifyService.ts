import { gql, GraphQLClient } from 'graphql-request'

export const graphClient = new GraphQLClient(process.env.shopifyGraphql as string, {
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.shopifyAccessToken,
    'Content-Type': 'application/json'
  } as {}
})

export const ShopifyService = {
  async call(query: string) {
    return await new Promise((resolve, reject) => {
      graphClient.request(query).then((response) => {
        return resolve(response);
      }).catch((err) => {
        return reject(err);
      })
    });
  },
}