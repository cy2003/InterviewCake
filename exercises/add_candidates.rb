
@votes = {}

def vote(candidate)
  if @votes[candidate]
    @votes[candidate] += @votes[candidate]
  else
    @votes[candidate] = 1
  end
  return @votes
end

puts vote("Hello")
# this will return {"Hello" => 1}
puts vote("Hi")
# this will return {"Hello" => 1, "Hi" => 1}
