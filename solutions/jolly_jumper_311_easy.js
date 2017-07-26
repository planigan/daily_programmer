exports.getOutput = (input)  => {
  const args = input.split(' ')
  const n = args.shift()

  // Create a set [1..n-1]
  const range = new Array(n - 1).fill(1).map((_,i) => i + 1)
  let set = new Set(range)

  for (let i = 0; i < args.length - 1; i++) {
    let diff = Math.abs(args[i] - args[i+1])
    set.delete(diff)
  }

  return input + (set.size === 0 ? ' JOLLY' : ' NOT JOLLY')
}
