import {getShop} from "~/services/ApiService";

const actions = {
  async fetchShop({commit}) {
    const shop = await getShop();
    commit('setShop', shop);
  },
}

export default actions;
