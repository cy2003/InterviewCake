
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
puts vote("Hi")
