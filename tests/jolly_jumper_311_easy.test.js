const test = require("tape");
const lib = require('../solutions/jolly_jumper_311_easy')

test("311 Easy: jolly jumper should return correct values", function(t) {
  t.plan(5);
  [
    [ "4 1 4 2 3", "4 1 4 2 3 JOLLY" ],
    [ "5 1 4 2 -1 6", "5 1 4 2 -1 6 NOT JOLLY" ],
    [ "4 19 22 24 21", "4 19 22 24 21 NOT JOLLY" ],
    [ "4 19 22 24 25", "4 19 22 24 25 JOLLY" ],
    [ "4 2 -1 0 2", "4 2 -1 0 2 JOLLY" ]
  ].forEach(([input,expectedOutput]) => {
    const output = lib.getOutput(input)
    console.log('Input:', input)
    console.log('Output:', output)
    t.equal(output, expectedOutput, `Should be: ${ expectedOutput }`)
  })
})
