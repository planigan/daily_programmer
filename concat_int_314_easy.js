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
