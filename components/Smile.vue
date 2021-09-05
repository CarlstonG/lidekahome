<template>
  <div>
    <script v-if="loadScripts" src="https://js.smile.io/v1/smile-ui.js" />
  </div>
</template>

<script lang="js">
import Vue from "vue";
import {mapGetters} from "vuex";
import {post} from "~/services/ApiService";

export default Vue.extend({
  data() {
    return {
      loadScripts: false,
    }
  },

  computed: {
    ...mapGetters('shop/customer', [
      'customer',
    ])
  },

  watch: {
    customer() {
      if (window.SmileUI) {
        delete window.SmileUI;
      }

      const elementId = document.getElementById('smile-ui-container');
      if (elementId) {
        elementId.remove();
      }

      this.loadScripts = false;

      if (this.customer?.id) {
        post('/shopify/smile', {
          customerId: this.customer?.id
        }).then((res) => {
          this.$nextTick(() => {
            this.loadScripts = true;

            document.addEventListener('smile-ui-loaded', () => {
              SmileUI.init({
                channel_key: 'channel_rX9YXbMmoL4HoFNwmmOALGiO',
                customer_identity_jwt: res?.data
              })
            });
          })
        });
      } else {
        this.$nextTick(() => {
          this.loadScripts = true;

          document.addEventListener('smile-ui-loaded', () => {
            SmileUI.init({
              channel_key: 'channel_rX9YXbMmoL4HoFNwmmOALGiO',
            })
          });
        });
      }
    }
  }
});
</script>