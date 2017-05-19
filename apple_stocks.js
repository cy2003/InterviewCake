var stock_prices = [-1, 5, 7, 3, -2, 8]

function getMaxProfit(stock_prices){
  var max_profit = 0
  var min_price = stock_prices[0]
  for (var i = 0; i < stock_prices.length; i++){
    var current_price = stock_prices[i]
    var current_profit = current_price - min_price
    if (current_price < min_price){
      min_price = current_price
    }
    if (current_profit > max_profit){
      max_profit = current_profit
    }
  }
  return max_profit
}

getMaxProfit(stock_prices)
