import {ShopifyService} from "~/services/shopify/ShopifyService";
import customerByAccessToken from "~/services/shopify/queries/customers/customerByAccessToken.graphql";
import customerCreate from "~/services/shopify/queries/customers/customerCreate.graphql";
import customerAccessTokenCreate from "~/services/shopify/queries/customers/customerAccessTokenCreate.graphql";
import customerAccessTokenRenew from "~/services/shopify/queries/customers/customerAccessTokenRenew.graphql";
import customerAccessTokenDelete from "~/services/shopify/queries/customers/customerAccessTokenDelete.graphql";
import customerUpdate from "~/services/shopify/queries/customers/customerUpdate.graphql";
import customerRecover from "~/services/shopify/queries/customers/customerRecover.graphql";
import customerReset from "~/services/shopify/queries/customers/customerReset.graphql";
import customerActivate from "~/services/shopify/queries/customers/customerActivate.graphql";
import associateCustomerWithCheckout from "~/services/shopify/queries/customers/associateCustomerWithCheckout.graphql";
import customerOrdersByAccessToken from "~/services/shopify/queries/customers/customerOrdersByAccessToken.graphql";
import {Customer} from "~/services/shopify/classes/Customer";

export const Customers = {
  async create(variables = {} as {}) {
    return await ShopifyService.call(customerCreate.query(), variables);
  },

  async find(accessToken: string) {
    return await ShopifyService.call(customerByAccessToken.query(accessToken));
  },

  async get(accessToken: string) {
    const { customer } = await ShopifyService.call(customerOrdersByAccessToken.query(accessToken)) as {
      customer: {}
    }
    return new Customer(customer);
  },

  async getAccessToken(variables = {} as {}) {
    return await ShopifyService.call(customerAccessTokenCreate.query(), variables);
  },

  async refreshAccessToken(variables = {} as {}) {
    return await ShopifyService.call(customerAccessTokenRenew.query(), variables);
  },

  async deleteAccessToken(variables = {} as {}) {
    return await ShopifyService.call(customerAccessTokenDelete.query(), variables);
  },

  async activate(variables = {} as {}) {
    return await ShopifyService.call(customerActivate.query(), variables);
  },

  async recover(variables = {} as {}) {
    return await ShopifyService.call(customerRecover.query(), variables);
  },

  async reset(variables = {} as {}) {
    return await ShopifyService.call(customerReset.query(), variables)
  },

  async update(variables = {} as {}) {
    return await ShopifyService.call(customerUpdate.query(), variables)
  },

  async connectToCheckout(variables = {} as {}) {
    return await ShopifyService.call(associateCustomerWithCheckout.query(), variables);
  }
}
