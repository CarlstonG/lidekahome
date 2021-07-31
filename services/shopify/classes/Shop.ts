import {safeGet} from "~/services/Helpers";
import _ from 'lodash';

export class Shop {
  name: string|null;
  description: string|null;
  moneyFormat: string|null;
  countryCode: string|null;
  currencyCode: string|null;
  enabledPresentmentCurrencies: []|null;
  shipsToCountries: []|null;
  productTags: []|null;
  productTypes: []|null;

  constructor(data = {} as {}) {
    this.name = safeGet(data, 'shop.name');
    this.description = safeGet(data, 'shop.description');
    this.moneyFormat = safeGet(data, 'shop.moneyFormat');
    this.countryCode = safeGet(data, 'shop.paymentSettings.countryCode');
    this.currencyCode = safeGet(data, 'shop.paymentSettings.currencyCode');
    this.enabledPresentmentCurrencies = safeGet(data, 'shop.paymentSettings.enabledPresentmentCurrencies', []);
    this.shipsToCountries = safeGet(data, 'shop.shipsToCountries', []);

    this.productTags = _.map(safeGet(data, 'productTags.edges', []), (item) => {
      return safeGet(item, 'node');
    }) as [];

    this.productTypes = _.map(safeGet(data, 'productTypes.edges', []), (item) => {
      return safeGet(item, 'node');
    }) as [];
  }
}
