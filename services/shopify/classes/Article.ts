import {safeGet, truncateString} from "~/services/Helpers";
import moment from "moment";

export class Article {
  id: number | null;
  title: string | null;
  url: string | null;
  handle: string | null;
  excerpt: string | null;
  contentHtml: string | null;
  content: string | null;
  image: string | null;
  imageAlt: string | null;
  seo = {} as {
    title: string
    description: string
  };
  author: string | null;
  publishedAt: string | null;

  constructor(data: {}) {
    this.id = safeGet(data, 'id');
    this.title = safeGet(data, 'title');
    this.handle = safeGet(data, 'handle');
    this.url = `/blog/${this.handle}`;
    this.seo = safeGet(data, 'seo', {});
    this.image = safeGet(data, 'image.transformedSrc');
    this.imageAlt = safeGet(data, 'image.altText');
    this.contentHtml = safeGet(data, 'contentHtml');
    this.content = safeGet(data, 'content');
    this.excerpt = safeGet(data, 'excerpt');
    this.author = safeGet(data, 'authorV2.name');
    this.publishedAt = moment(safeGet(data, 'publishedAt', new Date())).locale('nl').format('D, MMMM YYYY');

    if (!this.excerpt) {
      this.excerpt = truncateString(this.content, 20);
    }
  }
}
