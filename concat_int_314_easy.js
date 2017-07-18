// From: https://www.reddit.com/r/dailyprogrammer/comments/69y21t/20170508_challenge_314_easy_concatenated_integers/
//
// Description
//
// Given a list of integers separated by a single space on standard input, print
// out the largest and smallest values that can be obtained by concatenating the
// integers together on their own line. This is from Five programming problems
// every Software Engineer should be able to solve in less than 1 hour, problem
// 4. Leading 0s are not allowed (e.g. 01234 is not a valid entry).
// This is an easier version of #312I.
//
// Sample Input
//
// You'll be given a handful of integers per line. Example:
// 5 56 50
//
// Sample Output
//
// You should emit the smallest and largest integer you can make, per line.
//
// Example:
// 50556 56550
//
// Challenge Input
//
// 79 82 34 83 69
// 420 34 19 71 341
// 17 32 91 7 46
//
// Challenge Output
//
// 3469798283 8382796934
// 193413442071 714203434119
// 173246791 917463217

const sortIntArray = arrIn => {
  let arr = [...arrIn]
  return arr.sort((intA,intB) => {
    const a = String(intA)
    const b = String(intB)
    return parseInt(a+b) - parseInt(b+a)
  })
}

const getMinConcatInt = arr => sortIntArray(arr).join('')
const getMaxConcatInt = arr => sortIntArray(arr).reverse().join('')
exports.getOutput =
  arr => `${getMinConcatInt(arr.split(' '))} ${getMaxConcatInt(arr.split(' '))}`

// Start tests...
// test data:  [ 10, 9, 1 ]
// sort:  [ 10, 1, 9 ]
// 1019 9110
// test data:  [ 79, 82, 34, 83, 69 ]
// sort:  [ 34, 69, 79, 82, 83 ]
// 3469798283 8382796934
// test data:  [ 420, 34, 19, 71, 341 ]
// sort:  [ 19, 341, 34, 420, 71 ]
// 193413442071 714203434119
// test data:  [ 17, 32, 91, 7, 46 ]
// sort:  [ 17, 32, 46, 7, 91 ]
// 173246791 917463217
// Done
