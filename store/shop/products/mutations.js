const mutations = () => ({
  setProducts(state, payload) {
    state.products = payload;
  },

  setCollections(state, payload) {
    state.collections = payload;
  },

  setProductCollections(state, payload) {
    if (!(state.productCollections.find((item) => {
      return item.handle === payload.handle;
    }))) {
      state.productCollections.push(payload);
    }
  },
});

export default mutations();
