import _ from 'lodash';
import {
  connectCustomerToCheckout,
  createCheckout,
  getCheckout,
  addLineItem,
  removeLineItem as removeLineItemApiService,
  updateLineItem
} from "~/services/ApiService";

const actions = {
  async addLine(context, payload) {
    const checkout = await addLineItem(context.getters.checkoutId, payload.variantId, payload.quantity);
    context.commit('setCount', _.get(checkout, 'lineItems.length', 0));
    context.commit('setCheckout', checkout);
  },

  async removeLineItem(context, payload) {
    const checkout = await removeLineItemApiService(context.getters.checkoutId, payload);
    context.commit('setCount', _.get(checkout, 'lineItems.length', 0));
    context.commit('setCheckout', checkout);
  },

  async updateLineItemQuantity(context, payload) {
    const checkout = await updateLineItem(context.getters.checkoutId, payload.lineItemId, payload.variantId, payload.quantity);
    context.commit('setCount', _.get(checkout, 'lineItems.length', 0));
    context.commit('setCheckout', checkout);
  },

  async fetchCheckout(context) {
    if (typeof localStorage == 'undefined') {
      return;
    }

    let checkoutId = localStorage.getItem('checkoutId');

    if (checkoutId && checkoutId !== 'null') {
      let checkout = await getCheckout(checkoutId);

      if (!_.get(checkout, 'id', null) || _.get(checkout, 'completedAt', null)) {
        checkout = await createCheckout();
      }

      checkoutId = _.get(checkout, 'id', null);
      context.commit('setCount', _.get(checkout, 'lineItems.length', 0));
      context.commit('setCheckout', checkout);
    } else {
      const checkout = await createCheckout();
      checkoutId = _.get(checkout, 'id', null);
      context.commit('setCount', 0);
      context.commit('setCheckout', checkout);
    }

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      await connectCustomerToCheckout({
        checkoutId: checkoutId,
        customerAccessToken: accessToken
      })
    }

    localStorage.setItem('checkoutId', checkoutId);
    context.commit('setCheckoutId', checkoutId);
  }
}

export default actions;
