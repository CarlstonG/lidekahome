import { ShopifyService } from './ShopifyService';
import {Collection as CollectionObject} from "~/services/shopify/classes/Collection";
import CollectionsByQuery from './queries/collectionsByQuery.graphql';
import ProductsByCollectionHandle from './queries/productsByCollectionHandle.graphql';
import _ from "lodash";

export const Collections = {
  async find(handle: string) {
    const { collectionByHandle }  = await ShopifyService.call(ProductsByCollectionHandle.query(handle)) as {
      collectionByHandle: {}
    };
    return new CollectionObject(collectionByHandle);
  },

  async search(query: string) {
    const data = await ShopifyService.call(CollectionsByQuery.query(query)) as {};
    const collectionEdges = _.get(data, 'collections.edges', []);
    return _.map(collectionEdges, (item) => {
      return new CollectionObject(item.node);
    });
  }
}

