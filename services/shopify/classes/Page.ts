import {safeGet} from "~/services/Helpers";

export class Page {
  id: number | null;
  title: string | null;
  handle: string | null;
  body: string | null;
  bodySummary: string | null;
  seo = {} as {
    title: string
    description: string
  };

  constructor(data: {}) {
    this.id = safeGet(data, 'id');
    this.title = safeGet(data, 'title');
    this.handle = safeGet(data, 'handle');
    this.seo = safeGet(data, 'seo', {});
    this.body = safeGet(data, 'body');
    this.bodySummary = safeGet(data, 'bodySummary');
  }
}
