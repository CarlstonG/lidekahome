import { ShopifyService } from './ShopifyService';
import {Blog as BlogObject} from "~/services/shopify/classes/Blog";
import BlogByHandle from './queries/blogByHandle.graphql';
import ArticleByHandle from './queries/articleByHandle.graphql';

export const Blogs = {
  async find(handle: string) {
    const { blogByHandle }  = await ShopifyService.call(BlogByHandle.query(handle, 100)) as {
      blogByHandle: {}
    };
    return new BlogObject(blogByHandle);
  },

  async findArticle(handle: string, articleHandle: string) {
    const { blogByHandle } = await ShopifyService.call(ArticleByHandle.query(handle, articleHandle)) as {
      blogByHandle: {}
    };

    return new BlogObject(blogByHandle);
  },
}

