import {Customers} from "~/services/shopify/Customers";

const actions = {
  async setAccessToken({commit}, accessToken) {
    commit('setAccessToken', accessToken);
  },

  async fetchCustomer({commit}) {
    const accessToken = localStorage.getItem('accessToken');

    const { customer } = await Customers.find(accessToken);
    commit('setCustomer', customer);

    if (customer !== null) {
      commit('setAccessToken', accessToken);
    } else {
      commit('setAccessToken', null);
    }
  }
}

export default actions;
