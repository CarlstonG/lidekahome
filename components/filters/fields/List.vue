<template>
  <fieldset class="space-y-3">
    <div v-for="value in values" class="relative flex items-start">
      <div class="flex items-center h-5">
        <input :id="`${componentKey}-${value.id}`" v-model="model" :value="isBoolean ? value.id : value.label" :type="type"
               class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
      </div>
      <div class="ml-3 text-sm">
        <label :for="`${componentKey}-${value.id}`" class="text-gray-500 text-sm">{{ value.label }} ({{ value.count }})</label>
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts">
import Vue from "vue";
import {safeGet} from "~/services/Helpers";
import _ from 'lodash';

export default Vue.extend({
  props: {
    values: {
      type: [],
      default: () => []
    },
    filterKey: {
      type: String,
      default: '',
    },
    isBoolean: {
      type: Boolean,
      default: false,
    },
    componentKey: {
      type: String,
      default: ''
    }
  },

  computed: {
    canOnlySelectOne(): boolean {
      return this.filterKey === 'filter.p.product_type';
    },
    type(): string {
      return this.canOnlySelectOne ? 'radio' : 'checkbox';
    }
  },

  watch: {
    model() {
      if (this.isBoolean) {
        this.buildBooleanParams();
      } else {
        this.buildDefaultParams();
      }
    },
  },

  methods: {
    buildBooleanParams() {
      this.params = [];
      const getFilterParams = (item: any) => safeGet(_.find(this.values, {
          id: item
        }), 'filterParams');
      const replace = (item: any) => {
        const params = getFilterParams(item);

        return _.replace(params, 'false', (item[item.length - 1]) == '1' ? 'true' : 'false') as string;
      }
      
      if (this.canOnlySelectOne) {
        const filterParamsArray = JSON.parse(replace(this.model)) as any[];

        //@ts-ignore
          this.params.push(filterParamsArray);
      } else {
        _.forEach(this.model, (item: string) => {
          const filterParamsArray = JSON.parse(replace(item)) as any[];

          //@ts-ignore
          this.params.push(filterParamsArray);
        });
      }

      this.$emit('params', this.filterKey, this.params);
    },

    buildDefaultParams() {
      this.params = [];
      const getFilterParams = (item: any) => safeGet(_.find(this.values, {
          label: item
        }), 'filterParams');
      const replace = (item: any) => {
        const params = getFilterParams(item);

        return _.replace(params, this.filterKey, item);
      }

      if (this.canOnlySelectOne) {
        const filterParamsArray = JSON.parse(replace(this.model)) as any[];

        //@ts-ignore
          this.params.push(filterParamsArray);
      } else {
        _.forEach(this.model, (item) => {
          const filterParamsArray = JSON.parse(replace(item)) as any[];

          //@ts-ignore
          this.params.push(filterParamsArray);
        });
      }

      this.$emit('params', this.filterKey, this.params);
    },
  },

  data() {
    return {
      model: [],
      params: [],
    }
  }
});
</script>
