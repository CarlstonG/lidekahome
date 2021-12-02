const getters = {
  shop: state => {
    return state.shop;
  },

  currentMaxDeliveryTime: state => {
    return state.maxDeliverySentence
  }
}

export default getters;

