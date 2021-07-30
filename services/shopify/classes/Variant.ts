import {safeGet} from "~/services/Helpers";
import {Price} from "~/services/shopify/classes/Price";

export class Variant {
  id: string|number|null;
  price: Price|null;
  comparePrice: Price|null;

  constructor(data: {}) {
    this.id = safeGet(data, 'id');
    this.price = safeGet(data, 'priceV2.amount');
    this.comparePrice = safeGet(data, 'compareAtPriceV2.amount');
  }
}
