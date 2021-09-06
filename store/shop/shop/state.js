import moment from "moment";

const state = {
  shop: {},
  currentMaxDeliveryTime: moment().weekday() === 7 ? '22:00' : '23:59',
}

export default state;
