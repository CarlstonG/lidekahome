import {Shop} from "~/services/shopify/classes/Shop";
import moment from "moment";

const state = {
  shop: new Shop({}),
  currentMaxDeliveryTime: moment().weekday() === 0 ? '22:00' : '23:59'
}

export default state;
