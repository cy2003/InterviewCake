=begin
Write a function get_products_of_all_ints_except_at_index() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division in your solution.
=end

# My Solution
def product_of_integers(array)
  i = 0
  new_array = []
  product_after = 1
  product_before = 1
  while i < array.length
    if i == 0
      product_after = (array[i+1..array.length-1]).inject(:*)
      new_array << product_after
    elsif i == array.length - 1
      product_before = (array[0..i-1]).inject(:*)
      new_array << product_before
    else i > 0
      product_before = (array[0..i-1]).inject(:*)
      product_after = (array[i+1..array.length-1]).inject(:*)
      new_array << product_before * product_after
    end
    i += 1
  end
  new_array
end

puts product_of_integers([1,7,3,4])

# Interview Cake's Solution 
# def get_products_of_all_ints_except_at_index(int_array)
#
#   if int_array.length < 2
#       raise IndexError, 'Getting the product of numbers at other indices requires at least 2 numbers'
#   end
#
#   products_of_all_ints_except_at_index = []
#
#   # for each integer, we find the product of all the integers
#   # before it, storing the total product so far each time
#   product_so_far = 1
#   i = 0
#   while i < int_array.length
#       products_of_all_ints_except_at_index[i] = product_so_far
#       product_so_far *= int_array[i]
#       i += 1
#   end
#
#   # for each integer, we find the product of all the integers
#   # after it. since each index in products already has the
#   # product of all the integers before it, now we're storing
#   # the total product of all other integers
#   product_so_far = 1
#   i = int_array.length - 1
#   while i >= 0
#       products_of_all_ints_except_at_index[i] *= product_so_far
#       product_so_far *= int_array[i]
#       i -= 1
#   end
#
#   return products_of_all_ints_except_at_index
# end
#
# int_array = [1, 7, 3, 4]
# puts get_products_of_all_ints_except_at_index(int_array)
