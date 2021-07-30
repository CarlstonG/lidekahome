import { safeGet } from "~/services/Helpers";

const getters = {
  customer: state => {
    return state.customer;
  },

  accessToken: state => {
    return state.accessToken;
  },

  loggedIn: state => {
    return !!safeGet(state.customer, 'id', false);
  }
}

export default getters;

