const test = require("tape");
const concat = require('../concat_int_314_easy')

test("concat int should return correct values", function(t) {
  t.plan(3);
  [
    ["79 82 34 83 69","3469798283 8382796934"],
    ["420 34 19 71 341","193413442071 714203434119"],
    ["17 32 91 7 46","173246791 917463217"]
  ].forEach(testCase => {
    const ret = concat.getOutput(testCase[0])
    console.log(testCase[0])
    console.log(ret)
    t.equal(ret, testCase[1])
  })
})
