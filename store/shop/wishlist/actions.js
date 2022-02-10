import { v4 as uuidv4 } from 'uuid';
import { addItemToWhislist, deleteItemWhislist } from '~/services/GqlService';

const actions = {
    initUser({commit}) {
        const userUuid = localStorage.getItem('user_uuid') ?? uuidv4();

        commit('setUser', userUuid);
    },

    initFavoriteProducts({commit}) {
        let products = localStorage.getItem('wishlist_products');

        if (products) {
            try {
                products = JSON.parse(products);
            } catch(e) {
                products = [];
            }

            commit('setPoducts', products);
        }
    },

    async addItem({commit, state}, product) {
        const data = {
            user: state.user,
            shopify_product: product.id,
        };

        const result = await addItemToWhislist(data);

        const whislistProducts = [...state.favoriteProducts] ?? [];

        whislistProducts.push({
            id: result.createWhishlist.data.id,
            title: product.title,
            slug: product.slug,
            image: product.media[0].src,
        });

        commit('setPoducts', whislistProducts);
    },

    async deleteItem({commit, state}, id) {
        await deleteItemWhislist(id);

        const whislistProducts = state.favoriteProducts.filter(product => product.id !== id);

        commit('setPoducts', whislistProducts);
    }
}

export default actions;