const getters = {
  getProducts: state => {
    return state.products;
  },

  getCollections: state => {
    return state.collections;
  },

  getProductCollections: (state) => {
    return state.productCollections;
  },

  getMainCollections: state => {
    return state.collections.filter((item) => {
      return [
        'led-strips',
        'solar-powerbank',
        'solar-tuinverlichting',
      ].indexOf(item.handle) > -1
    })
  }
}

export default getters;

