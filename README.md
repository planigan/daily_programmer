# Description
My [solutions](https://github.com/planigan/daily_programmer/tree/master/solutions) to various algorithm challenges, all of which currently come from the [daily_programmer subreddit](https://www.reddit.com/r/dailyprogrammer/). Each challenge description can be found in the [docs folder](https://github.com/planigan/daily_programmer/tree/master/docs).

## Structure
```
.
├── data
│   ├── spelling_chem_302_easy.js
│   └── spelling_chem_302_easy.json
├── docs
│   ├── concat_int_314_easy.md
│   ├── jolly_jumper_311_easy.md
│   └── spelling_chem_302_easy.md
├── solutions
│   ├── concat_int_314_easy.js
│   ├── jolly_jumper_311_easy.js
│   └── spelling_chem_302_easy.js
├── tests
│   ├── concat_int_314_easy.test.js
│   ├── jolly_jumper_311_easy.test.js
│   └── spelling_chem_302_easy.test.js
├── package.json
├── package-lock.json
├── README.header.md
└── README.md

4 directories, 15 files
```
## Latest `npm test`
```

> daily_programmer@1.0.0 test /home/patrick/Documents/Code/daily_programmer
> tap-prettify 'tests/**/*.js'

✓ 3469798283 8382796934
✓ 193413442071 714203434119
✓ 173246791 917463217

Finished testing tests/concat_int_314_easy.test.js.

✓ 4 1 4 2 3 JOLLY
✓ 5 1 4 2 -1 6 NOT JOLLY
✓ 4 19 22 24 21 NOT JOLLY
✓ 4 19 22 24 25 JOLLY
✓ 4 2 -1 0 2 JOLLY

Finished testing tests/jolly_jumper_311_easy.test.js.

✓ PoISON (polonium, iodine, sulfur, oxygen, nitrogen)
✓ BAcON (boron, actinium, oxygen, nitrogen)
✓ FUNCTiONS (fluorine, uranium, nitrogen, carbon, titanium, oxygen, nitrogen, sulfur)
✓ SICKNEsS (sulfur, iodine, carbon, potassium, nitrogen, einsteinium, sulfur)
✓ TiCKLiSH (titanium, carbon, potassium, lithium, sulfur, hydrogen)
✓ Cannot be spelled

Finished testing tests/spelling_chem_302_easy.test.js.

17/17 tests passed, none skipped.
```
