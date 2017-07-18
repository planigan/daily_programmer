const sortIntArray = arr => {
  return arr.sort((a,b) => {
    return parseInt(a+b) - parseInt(b+a)
  })
}

const getMinConcatInt = arr => sortIntArray(arr).join('')
const getMaxConcatInt = arr => sortIntArray(arr).reverse().join('')
exports.getOutput =
  arr => `${getMinConcatInt(arr.split(' '))} ${getMaxConcatInt(arr.split(' '))}`
