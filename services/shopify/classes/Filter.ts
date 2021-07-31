import {safeGet} from "~/services/Helpers";
// @ts-ignore
import _ from 'lodash';
import {FilterValue} from "~/services/shopify/classes/FilterValue";

export class Filter {
  id: string|null;
  label: string|null;
  type: string|null;
  values: FilterValue[]|null;

  constructor(data: {}) {
    this.id = safeGet(data, 'id');
    this.label = safeGet(data, 'label');
    this.type = safeGet(data, 'type');

    this.values = _.map(safeGet(data, 'values', []), (item) => {
      return new FilterValue(item);
    })
  }
}
