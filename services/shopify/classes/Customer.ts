import {safeGet} from "~/services/Helpers";
// @ts-ignore
import _ from 'lodash';
import {Address} from "~/services/shopify/classes/Address";
import {Order} from "~/services/shopify/classes/Order";

export class Customer {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  addresses: Address[] | [] | null;
  orders: Order[] | [] | null;

  constructor(data: {}) {
    this.id = safeGet(data, 'id');
    this.firstName = safeGet(data, 'firstName');
    this.lastName = safeGet(data, 'lastName');
    this.email = safeGet(data, 'email');

    this.addresses = _.map(safeGet(data, 'addresses.edges', []), (item: {}) => {
      return new Address(safeGet(item,'node', {}));
    })

    this.orders = _.map(safeGet(data,'orders.edges', []), (item: {}) => {
      return new Order(safeGet(item,'node', {}));
    })
  }
}
