=begin
Suppose we could access yesterday's stock prices as an array, where:

The values are the price in dollars of Apple stock.
A higher index indicates a later time.
So if the stock cost $500 at 10:30am and $550 at 11:00am, then:

stock_prices_yesterday[60] = 500

Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

  stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

get_max_profit(stock_prices_yesterday)
# returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
=end

stock_prices = [10, 7, 5, 8, 11, 9]


def get_max_profit(stock_prices)
  max_profit = 0
  min_price = stock_prices[0]
  0.upto(stock_prices.length - 1) do |time|
    current_price = stock_prices[time]
    min_price = current_price if current_price < min_price
    current_profit = current_price - min_price
    max_profit = current_profit if current_profit > max_profit
  end
  max_profit
end

puts get_max_profit(stock_prices)
