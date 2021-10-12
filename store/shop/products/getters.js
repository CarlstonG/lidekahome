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
        'rgb-led-strips',
        'tv-led-strips',
        'rgb-ic-led-strips',
        'led-pakketten',
      ].indexOf(item.handle) > -1
    })
  }
}

export default getters;

