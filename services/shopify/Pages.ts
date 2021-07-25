import { ShopifyService } from './ShopifyService';
import {Page as PageObject} from "~/services/shopify/classes/Page";
import PageByHandle from './queries/pageByHandle.graphql';

export const Pages = {
  async find(handle: string) {
    const { pageByHandle }  = await ShopifyService.call(PageByHandle.query(handle)) as {
      pageByHandle: {}
    };

    return new PageObject(pageByHandle);
  },
}

