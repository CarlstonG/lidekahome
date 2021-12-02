import moment from "moment";

const currentDeliveryTime = () => {
  if (moment().weekday() === 7) {
    return 'Vandaag voor 22:00 besteld, morgen in huis';
  } else if (moment().weekday() === 6) {
    return 'Vandaag besteld, Maandag in huis'
  } else {
    return 'Voor 23:59 besteld, morgen in huis';
  }
}

const state = {
  shop: {},
  maxDeliverySentence: currentDeliveryTime(),
  currentMaxDeliveryTime: moment().weekday() === 7 ? '22:00' : '23:59',
}

export default state;
