const test = require("tape");
const lib = require('../solutions/3sum_323_easy_quadratic')

const out1 = "-7 2 5 | -5 1 4 | -3 -2 5 | -3 -1 4 | -3 1 2"
const out2 = "-7 2 5 | -6 1 5 | -3 1 2"
const out3 = "-5 -4 9 | -1 -1 2"

test("323 Easy: 3sum quadratic should return correct values", function(t) {
  t.plan(3);
  [
    [ "4 5 -1 -2 -7 2 -5 -3 -7 -3 1", out1 ],
    [ "-1 -6 -3 -7 5 -8 2 -8 1", out2 ],
    [ "-5 -1 -4 2 9 -9 -6 -1 -7", out3 ]
  ].forEach(([input,expectedOutput]) => {
    const output = lib.getOutput(input)
    console.log('Input:', input)
    console.log('Output:', output)
    t.equal(output, expectedOutput, `Should be: ${ expectedOutput }`)
  })
})
