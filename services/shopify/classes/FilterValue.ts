import {safeGet} from "~/services/Helpers";

export class FilterValue {
  id: string|null;
  label: string|null;
  count: number|null;
  filterParams: string|null;

  constructor(data: {}) {
    this.id = safeGet(data, 'id');
    this.label = safeGet(data, 'label');
    this.count = safeGet(data, 'count');
    this.filterParams = safeGet(data, 'filterParams');
  }
}
