@r = Random.new

def rand5
  @r.rand 4
end

def rand7
  s = rand5 + rand5 + rand5 + rand5 + rand5 + rand5 + rand5
  s%7
end

# def rand7
#   # result = 0
#   while (true) do
#     num = 5 * ((rand5) - 1) + ((rand5) - 1)
#     return (num % 7) if (num < 21)
#   end
# end

results = [0,0,0,0,0,0,0]

100000.times do
  re = rand5
  results[re] += 1
end

p results
