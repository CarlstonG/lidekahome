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
  if (moment().format('DD-MM-YYYY') === '24-12-2021' || moment().format('DD-MM-YYYY') === '25-12-2021' || moment().format('DD-MM-YYYY') === '26-12-2021') {
    return 'Vandaag besteld, Maandag in huis';
  }

  if (moment().format('DD-MM-YYYY') === '31-12-2021' || moment().format('DD-MM-YYYY') === '01-01-2022') {
    return 'Vandaag besteld, Maandag in huis';
  }

  if (moment().format('DD-MM-YYYY') === '02-01-2022') {
    return 'Voor 23:59 besteld, morgen in huis';
  }

  if (moment().weekday() === 0) {
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

export const savePercentage = (price, comparePrice) =>{
  if(!price || !comparePrice ) return "";

  let diff = Math.abs(comparePrice - price);
  let percent = parseInt((diff/comparePrice)*100);
  return  `SAVE ${percent}%`;
}

export const getRatingStars = (stars) =>{
  return (stars - 0.5 + Math.random()*0.5).toFixed(1);
}

export const pricePerMeter = (price, products) =>{
  if(!price || !products) return "";

  for(let i in products){
    if(products[i].selected ===  "true"){
      let len = parseInt(products[i].name.split("meter")[0]);
      let ppm = (price/len).toFixed(2);
      return ppm;
    }
  }
  return 0;
}


export const addCustomerImages = () =>{
  return [{
    type: 'IMAGE',
    alt: 'Customer Reviews',
    preview: require('~/assets/products/slider-images/1.png'),
    src: require('~/assets/products/slider-images/1.png'),
    fullSrc: require('~/assets/products/slider-images/1.png'),
    sources: null
  }, {
    type: 'IMAGE',
    alt: 'Customer Reviews',
    preview: require('~/assets/products/slider-images/2.png'),
    src: require('~/assets/products/slider-images/2.png'),
    fullSrc: require('~/assets/products/slider-images/2.png'),
    sources: null
  }, {
    type: 'IMAGE',
    alt: 'Customer Reviews',
    preview: require('~/assets/products/slider-images/3.png'),
    src: require('~/assets/products/slider-images/3.png'),
    fullSrc: require('~/assets/products/slider-images/3.png'),
    sources: null
  }, {
    type: 'IMAGE',
    alt: 'Customer Reviews',
    preview: require('~/assets/products/slider-images/4.png'),
    src: require('~/assets/products/slider-images/4.png'),
    fullSrc: require('~/assets/products/slider-images/4.png'),
    sources: null
  }]
}

export const handleMostPopularBadge = (related) =>{
  if(related){
    let len = related.length;
    related[parseInt(len/2)].popular = true;
  }
}