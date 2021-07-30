import _ from 'lodash';
import moment from "moment";

export const formatMoney = (amount, decimals = 2, minDecimals = 2, currency = 'EUR') => {
  if (minDecimals > decimals) {
    minDecimals = decimals;
  }

  return Intl.NumberFormat('nl-NL', {
    style: 'currency',
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: decimals,
    currency,
  })
    .format(amount)
    .replace(/([,.])00$/, '$1-');
};

export const formatDate = (date) => {
  return moment(date).format('D MMMM, YYYY');
};

export const safeGet = (resource, key, defaultValue = null) => {
  return _.get(resource, key, defaultValue);
};

export const truncateString = (str, max = 10) => {
  const array = str.trim().split(' ');
  const ellipsis = array.length > max ? '...' : '';

  return array.slice(0, max).join(' ') + ellipsis;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
