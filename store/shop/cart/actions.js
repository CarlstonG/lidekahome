import _ from 'lodash';

const actions = {
  async addLine (context, payload) {
    this.$shopify.checkout.addLineItems(context.getters.checkoutId, [ payload ]).then((checkout) => {
      context.commit('setCount', _.get(checkout, 'lineItems.length', 0));
    });
  },

  async fetchCheckout(context) {
    let checkoutId = localStorage.getItem('checkoutId');

    if (checkoutId) {
      const checkout = await this.$shopify.checkout.fetch(checkoutId);
      checkoutId = _.get(checkout, 'id', null);
      context.commit('setCount', _.get(checkout, 'lineItems.length', 0));
    }

    if (!checkoutId) {
      const checkout = await this.$shopify.checkout.create();
      checkoutId = _.get(checkout, 'id', null);
      context.commit('setCount', 0);
    }

    localStorage.setItem('checkoutId', checkoutId);
    context.commit('setCheckoutId', checkoutId);
  }
}

export default actions;
