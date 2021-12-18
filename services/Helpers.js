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
  }).format(amount)
    .replace(/([,.])00$/, '$1-').replace('€', '').trim();
};

export const deliveryTime = () => {
  if (moment().weekday() === 7) {
    return 'Vandaag voor 22:00 besteld, morgen in huis';
  } else if (moment().weekday() === 6) {
    return 'Vandaag besteld, Maandag in huis'
  } else {
    return 'Voor 23:59 besteld, morgen in huis';
  }
}

export const nl2br = (str, is_xhtml) => {
  if (typeof str === 'undefined' || str === null) {
    return '';
  }
  const breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

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

export const isVideo = (filename) => {
  var ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case 'm4v':
    case 'avi':
    case 'mpg':
    case 'mp4':
      // etc
      return true;
  }
  return false;
}

export const hasNumber = (myString) => {
  return /\d/.test(myString);
}
