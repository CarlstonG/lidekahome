import { ShopifyService } from './ShopifyService';
import ProductByHandleQuery from "~/services/shopify/queries/productByHandle.graphql";
import ProductsByQuery from '~/services/shopify/queries/productsByQuery.graphql';
import { Product as ProductObject } from "~/services/shopify/classes/Product";
import _ from "lodash";

export const Products = {
  async find(handle: string) {
    const { productByHandle }  = await ShopifyService.call(ProductByHandleQuery.query(handle)) as {
      productByHandle: {}
    };
    return new ProductObject(productByHandle);
  },

  async search(query: string) {
    const data = await ShopifyService.call(ProductsByQuery.query(query)) as {};
    const productsEdges = _.get(data, 'products.edges', []);
    return _.map(productsEdges, (item) => {
      return new ProductObject(item.node);
    });
  }
}
