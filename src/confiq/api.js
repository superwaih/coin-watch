export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

  export const MarketCaps = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
  
  export const AllCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=1&sparkline=false&price_change_percentage=24h`;

  export const GlobalData = () =>
  `https://api.coingecko.com/api/v3/global`;


  export const fetchCoinPrices = (coinId) =>
  `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1`;

  
  // https://data.gateapi.io/api2/1/orderBook/btc_usdt#/
 
  