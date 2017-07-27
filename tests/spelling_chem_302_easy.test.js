const test = require("tape");
const concat = require('../solutions/spelling_chem_302_easy')

test("302 Easy: spelling chem should return correct values", function(t) {
  t.plan(6);
  [
    ["poison",
     "PoISON (polonium, iodine, sulfur, oxygen, nitrogen)"],
    ["bacon","BAcON (boron, actinium, oxygen, nitrogen)"],
    ["functions",
     "FUNCTiONS (fluorine, uranium, nitrogen, carbon, titanium, oxygen, nitrogen, sulfur)"],
	  ["sickness","SICKNEsS (sulfur, iodine, carbon, potassium, nitrogen, einsteinium, sulfur)"],
		["ticklish","TiCKLiSH (titanium, carbon, potassium, lithium, sulfur, hydrogen)"],
    ["noanswer","Cannot be spelled"]
  ].forEach(testCase => {
    const ret = concat.getOutput(testCase[0])
    console.log(testCase[0])
    console.log(ret)
    t.equal(ret, testCase[1])
  })
})
