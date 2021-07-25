import {safeGet} from "~/services/Helpers";
// @ts-ignore
import _ from 'lodash';
import {Product} from "~/services/shopify/classes/Product";

export class Collection {
  id: number | null;
  title: string | null;
  url: string | null;
  handle: string | null;
  products: Product[] | [];

  constructor(data: {}) {
    this.id = safeGet(data, 'id');
    this.title = safeGet(data, 'title');
    this.handle = safeGet(data, 'handle');
    this.url = `/categorie/${this.handle}`;
    this.products = _.map(safeGet(data, 'products.edges', []), (item: { node: {} }) => {
      return new Product(item.node);
    })
  }
}
