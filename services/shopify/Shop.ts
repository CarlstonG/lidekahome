import {ShopifyService} from './ShopifyService';
import ShopQuery from '~/services/shopify/queries/shopQuery.graphql';
import {Shop as ShopObject} from "~/services/shopify/classes/Shop";

export const Shop = {
  async get() {
    const data = await ShopifyService.call(ShopQuery.query()) as {};
    return new ShopObject(data);
  },
}
