const mutations = {
  setCheckoutId(state, payload) {
    state.checkoutId = payload;
  },

  setCount(state, payload) {
    state.count = payload;
  },

  setCheckout(state, payload) {
    state.checkout = payload;
  }
};

export default mutations;
