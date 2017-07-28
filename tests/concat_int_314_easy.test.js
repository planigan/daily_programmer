const test = require("tape");
const lib = require('../solutions/concat_int_314_easy')

test("314 Easy: concat int should return correct values", function(t) {
  t.plan(3);
  [
    ["79 82 34 83 69","3469798283 8382796934"],
    ["420 34 19 71 341","193413442071 714203434119"],
    ["17 32 91 7 46","173246791 917463217"]
  ].forEach(([input,expectedOutput]) => {
    const output = lib.getOutput(input)
    console.log('Input:', input)
    console.log('Output:', output)
    t.equal(output, expectedOutput, `Should be: ${ expectedOutput }`)
  })
})
