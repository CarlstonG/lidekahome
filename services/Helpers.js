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
