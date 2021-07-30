import {safeGet} from "~/services/Helpers";
// @ts-ignore
import _ from 'lodash';
import {Price} from "~/services/shopify/classes/Price";
import {Address} from "~/services/shopify/classes/Address";
import {LineItem} from "~/services/shopify/classes/LineItem";

export class Order {

  id: string|null;
  orderNumber: string|number|null;
  statusUrl: string|null;
  customerUrl: string|null;
  processedAt: Date|string|null;

  currentTotalTax: Price|null;
  currentSubTotalPrice: Price|null;

  subTotalPrice: Price|null;
  totalRefunded: Price|null;
  totalTax: Price|null;
  totalPrice: Price|null;
  totalShippingPrice: Price|null;
  shippingAddress: Address|null;
  billingAddress: Address|null;

  originalTotalPrice: Price|null;
  discountedTotalPrice: Price|null;
  financialStatus: string|null;
  fulfillmentStatus: string|null;

  cancelReason: string|null;
  canceledAt: string|null;

  lineItems: LineItem[]|null;

  constructor(data: {}) {
    this.id = safeGet(data,'id');
    this.orderNumber = safeGet(data, 'orderNumber');
    this.statusUrl = safeGet(data, 'statusUrl');
    this.customerUrl = safeGet(data, 'customerUrl');
    this.processedAt = safeGet(data, 'processedAt');
    this.currentTotalTax = new Price(safeGet(data, 'currentTotalTax.amount'), safeGet(data, 'currentTotalTax.currencyCode'));
    this.currentSubTotalPrice = new Price(safeGet(data, 'currentSubTotalPrice.amount'), safeGet(data, 'currentSubTotalPrice.currencyCode'));
    this.subTotalPrice = new Price(safeGet(data, 'subTotalPriceV2.amount'), safeGet(data, 'subTotalPriceV2.currencyCode'));
    this.totalRefunded = new Price(safeGet(data, 'totalRefundedV2.amount'), safeGet(data, 'totalRefundedV2.currencyCode'));
    this.totalTax = new Price(safeGet(data, 'totalTaxV2.amount'), safeGet(data, 'totalTaxV2.currencyCode'));
    this.totalPrice = new Price(safeGet(data, 'totalPriceV2.amount'), safeGet(data, 'totalPriceV2.currencyCode'));
    this.totalShippingPrice = new Price(safeGet(data, 'totalShippingPriceV2.amount'), safeGet(data, 'totalShippingPriceV2.currencyCode'));
    this.originalTotalPrice = new Price(safeGet(data, 'originalTotalPrice.amount'), safeGet(data, 'originalTotalPrice.currencyCode'));
    this.discountedTotalPrice = new Price(safeGet(data, 'discountedTotalPrice.amount'), safeGet(data, 'discountedTotalPrice.currencyCode'));

    this.shippingAddress = new Address(safeGet(data, 'shippingAddress', {}));
    this.billingAddress = new Address(safeGet(data, 'billingAddress', {}));

    this.financialStatus = safeGet(data, 'financialStatus');
    this.fulfillmentStatus = safeGet(data, 'fulfillmentStatus');
    this.cancelReason = safeGet(data, 'cancelReason');
    this.canceledAt = safeGet(data, 'canceledAt');

    this.lineItems = _.map(safeGet(data, 'lineItems.edges', []), (item: {}) => {
      return new LineItem(safeGet(item,'node', {}));
    })
  }
}
