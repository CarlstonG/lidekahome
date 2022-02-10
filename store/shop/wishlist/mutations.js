const mutations = {
    setUser(state, payload) {
        localStorage.setItem('user_uuid', payload);
        state.user = payload;
    },

    setPoducts(state, payload) {
        localStorage.setItem('wishlist_products', JSON.stringify(payload));
        state.favoriteProducts = payload;
    }
}

export default mutations;