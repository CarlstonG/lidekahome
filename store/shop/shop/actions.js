import {Shop} from "~/services/shopify/Shop";

const actions = {
  async fetchShop({commit}) {
    const shop = await Shop.get();
    commit('setShop', shop);
  },
}

export default actions;
