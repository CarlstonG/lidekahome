import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
  domain: "lideka-home.imgix.net",
  defaultIxParams: {
    auto: 'format,compress'
  },
});
