const actions = {
  async fetchAllProducts({commit}) {
    const products = await this.$shopify.collection.fetchWithProducts('Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI2OTQ4NjEyOTMwMQ==', {
      productsFirst: 4,
    });
    commit('setProducts', products.products)
  },

  async fetchProductsByCollection({commit}, collectionHandle) {
    const collection = await this.$shopify.collection.fetchByHandle(collectionHandle, {
      productsFirst: 20,
    });

    commit('setProductCollections', collection);
  },

  async fetchCollections({commit}) {
    const collections = await this.$shopify.collection.fetchAll();
    commit('setCollections', collections);
  },

  addProductToRecentlyVisited({commit, state}, product) {
    const current = state.recentlyVisitedProducts.length > 0 ? state.recentlyVisitedProducts : JSON.parse(localStorage.getItem('recentlyVisitedProducts') ?? '[]');
    const products = [...current];

    const productExists = products.find(p => p.slug === product.slug);
    if (productExists) {
      return;
    }

    products.push(product);

    if (products.length > 5) {
      products.shift();
    }

    localStorage.setItem('recentlyVisitedProducts', JSON.stringify(products));

    commit('setRecentlyVisitedProducts', products);
  },

  initRecentlyVisitedProducts({commit}) {
    const products = JSON.parse(localStorage.getItem('recentlyVisitedProducts') ?? '[]');
    commit('setRecentlyVisitedProducts', products);
  },
}

export default actions;
