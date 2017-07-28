const test = require("tape");
const lib = require('../solutions/spelling_chem_302_easy')

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
  ].forEach(([input,expectedOutput]) => {
    const output = lib.getOutput(input)
    console.log('Input:', input)
    console.log('Output:', output)
    t.equal(output, expectedOutput)
  })
})
