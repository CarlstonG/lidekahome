import {Price} from "~/services/shopify/classes/Price";
import {safeGet} from "~/services/Helpers";

export class LineItem {
  quantity: number|null;
  currentQuantity: number|null;
  title: string|null;
  discountedTotalPrice: Price|null;
  originalTotalPrice: Price|null;

  constructor(data: {}) {
    this.quantity = safeGet(data, 'quantity');
    this.currentQuantity = safeGet(data, 'currentQuantity');
    this.title = safeGet(data, 'title');
    this.discountedTotalPrice = new Price(safeGet(data, 'discountedTotalPrice.amount'), safeGet(data, 'discountedTotalPrice.currencyCode'));
    this.originalTotalPrice = new Price(safeGet(data, 'originalTotalPrice.amount'), safeGet(data, 'originalTotalPrice.currencyCode'));
  };
}
