import {safeGet} from "~/services/Helpers";
// @ts-ignore
import _ from 'lodash';

export class Address {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  country: string | null;
  phone: string | null;
  province: string | null;
  provinceCode: string | null;
  zip: string | null;
  city: string | null;
  name: string | null;
  company: string | null;
  address1: string|null;
  address2: string|null;

  constructor(data: {}) {
    this.id = safeGet(data, 'id');
    this.firstName = safeGet(data, 'firstName');
    this.lastName = safeGet(data, 'lastName');
    this.country = safeGet(data, 'country');
    this.phone = safeGet(data, 'phone');
    this.province = safeGet(data, 'province');
    this.provinceCode = safeGet(data, 'provinceCode');
    this.zip = safeGet(data, 'zip');
    this.city = safeGet(data, 'city');
    this.name = safeGet(data, 'name');
    this.company = safeGet(data, 'company');
    this.address1 = safeGet(data, 'address1');
    this.address2 = safeGet(data, 'address2');
  }
}
