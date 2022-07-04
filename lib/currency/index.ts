export const getFormattedCurrency = (num: number) => {
  if (typeof Intl.NumberFormat !== 'undefined') {
    return (Intl.NumberFormat('id').format(Number(num)));
  }

  return num;
};
