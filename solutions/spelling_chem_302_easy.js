const ELEMENTS = require('../data/spelling_chem_302_easy.js').obj

const getSymbolWord = inputWord => {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
  const getSymbolFromStr = (str, numChars) => capitalize(str.slice(0, numChars))
  const results = []

  const processSymbols = (word, symbols, elements, sumWeights) => {
    if (word.length === 0) return results.push({
      result: `${symbols} (${elements.join(', ').toLowerCase()})`,
      sumWeights
    })
    const [oneCharSymbol, twoCharSymbol] =
          [getSymbolFromStr(word,1), getSymbolFromStr(word,2)]
    const [oneCharElement, twoCharElement] =
          [ELEMENTS[ oneCharSymbol ], ELEMENTS[ twoCharSymbol ]]
    twoCharElement &&
      processSymbols(
        word.slice(2),
        symbols + twoCharSymbol,
        elements.concat(twoCharElement.name),
        sumWeights + twoCharElement.weight
      )
    oneCharElement &&
      processSymbols(
        word.slice(1),
        symbols + oneCharSymbol,
        elements.concat(oneCharElement.name),
        sumWeights + oneCharElement.weight
      )
  }

  processSymbols(inputWord, '', [], 0)
  return results.length > 0
    ? results.sort((a,b) => b.sumWeights - a.sumWeights)[0].result
    : "Cannot be spelled"
}

console.log(getSymbolWord('noanswer'))
console.log(getSymbolWord('poison'))
console.log(getSymbolWord('bacon'))
console.log(getSymbolWord('functions'))
console.log(getSymbolWord('sickness'))
console.log(getSymbolWord('ticklish'))

exports.getOutput = word => getSymbolWord(word)
