export const formatCurrency = (price: number, currency: string = '$') => {
  const currencyRegex = /\B(?=(\d{3})+(?!\d))/g;
  return `${currency} ${price.toString().replace(currencyRegex, ",")}`;
}