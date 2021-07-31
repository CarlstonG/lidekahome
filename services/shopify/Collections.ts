import { ShopifyService } from './ShopifyService';
import {Collection as CollectionObject} from "~/services/shopify/classes/Collection";
import CollectionsByQuery from './queries/collectionsByQuery.graphql';
import ProductsByCollectionHandle from './queries/productsByCollectionHandle.graphql';
import _ from "lodash";
import {IQueryOptions} from "~/interfaces/options";

export const Collections = {
  productSortKeys: {
    BEST_SELLING: 'Best verkocht',
    PRICE: 'Prijs',
    RELEVANCE: 'Relevantie',
    TITLE: 'Titel',
  },

  async find(handle: string, limit = null as null|number, options = {} as IQueryOptions, variables= {} as {}) {
    const { collectionByHandle }  = await ShopifyService.call(ProductsByCollectionHandle.query(handle, limit, options), variables) as {
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

