function threeSum(nums) {
  const numbers = nums.split(' ').map(Number).sort( (a, b) => a - b )
  let results = ""

  for (let i = 0; i < numbers.length - 2; i++) {
    const iNum = numbers[i]
    let start = i + 1
    let end   = numbers.length - 1

    while (start < end) {
      let jNum = numbers[start]
      let kNum = numbers[end]
      const sum = iNum + jNum + kNum
      const str = `${iNum} ${jNum} ${kNum} | `
      if (sum === 0) {
        if (results.indexOf(str) === -1) {
          results += str
        }
        end--
      } else if (sum > 0) {
        end--
      } else {
        start++
      }
    }
  }

  return results.substring(0,results.length - 3)
}

// console.log( threeSum("4 5 -1 -2 -7 2 -5 -3 -7 -3 1" ))
// console.log( threeSum("-1 -6 -3 -7 5 -8 2 -8 1" ))
// console.log( threeSum("-5 -1 -4 2 9 -9 -6 -1 -7" ))

exports.getOutput = nums => threeSum(nums)
