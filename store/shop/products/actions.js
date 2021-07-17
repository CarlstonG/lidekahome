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
  }
}

export default actions;
