const getters = {
    favoriteCount: state => {
        return state.favoriteProducts.length;
    },

    favoriteProducts: state => {
        return state.favoriteProducts;
    },
};

export default getters;