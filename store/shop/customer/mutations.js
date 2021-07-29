const mutations = {
  setAccessToken(state, payload) {
    localStorage.setItem('accessToken', payload);
    state.accessToken = payload;
  },

  setCustomer(state, payload) {
    state.customer = payload;
  }
};

export default mutations;
