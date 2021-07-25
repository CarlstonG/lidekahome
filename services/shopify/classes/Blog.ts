import {safeGet} from "~/services/Helpers";
import {Article} from "~/services/shopify/classes/Article";
import _ from "lodash";

export class Blog {
  id: number | null;
  title: string | null;
  handle: string | null;
  article: Article | null | {};
  articles: Article[] | [];
  seo = {} as {
    title: string
    description: string
  };

  constructor(data: {}) {
    this.id = safeGet(data, 'id');
    this.title = safeGet(data, 'title');
    this.handle = safeGet(data, 'handle');
    this.article = safeGet(data, 'articleByHandle');
    this.seo = safeGet(data, 'seo', {});

    if (this.article !== null) {
      this.article = new Article(this.article);
    }

    this.articles = _.map(safeGet(data, 'articles.edges', []), (item: { node: {} }) => {
      return new Article(item.node);
    })
  }
}
