# Description
My [solutions](https://github.com/planigan/daily_programmer/tree/master/solutions) to various algorithm challenges, all of which currently come from the [daily_programmer subreddit](https://www.reddit.com/r/dailyprogrammer/). Each challenge description can be found in the [docs folder](https://github.com/planigan/daily_programmer/tree/master/docs).

## Structure
```
.
├── data
│   ├── spelling_chem_302_easy.js
│   └── spelling_chem_302_easy.json
├── docs
│   ├── 3sum_323_easy.md
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

4 directories, 16 files
```
## Latest `npm run test-spec`
```

> daily_programmer@1.0.0 test-spec /home/patrick/Documents/Code/daily_programmer
> tape 'tests/**/*.js' | tap-spec


  314 Easy: concat int should return correct values

    Input: 79 82 34 83 69
    Output: 3469798283 8382796934
    ✔ Should be: 3469798283 8382796934
    Input: 420 34 19 71 341
    Output: 193413442071 714203434119
    ✔ Should be: 193413442071 714203434119
    Input: 17 32 91 7 46
    Output: 173246791 917463217
    ✔ Should be: 173246791 917463217

  311 Easy: jolly jumper should return correct values

    Input: 4 1 4 2 3
    Output: 4 1 4 2 3 JOLLY
    ✔ Should be: 4 1 4 2 3 JOLLY
    Input: 5 1 4 2 -1 6
    Output: 5 1 4 2 -1 6 NOT JOLLY
    ✔ Should be: 5 1 4 2 -1 6 NOT JOLLY
    Input: 4 19 22 24 21
    Output: 4 19 22 24 21 NOT JOLLY
    ✔ Should be: 4 19 22 24 21 NOT JOLLY
    Input: 4 19 22 24 25
    Output: 4 19 22 24 25 JOLLY
    ✔ Should be: 4 19 22 24 25 JOLLY
    Input: 4 2 -1 0 2
    Output: 4 2 -1 0 2 JOLLY
    ✔ Should be: 4 2 -1 0 2 JOLLY

  302 Easy: spelling chem should return correct values

    Input: poison
    Output: PoISON (polonium, iodine, sulfur, oxygen, nitrogen)
    ✔ Should be: PoISON (polonium, iodine, sulfur, oxygen, nitrogen)
    Input: bacon
    Output: BAcON (boron, actinium, oxygen, nitrogen)
    ✔ Should be: BAcON (boron, actinium, oxygen, nitrogen)
    Input: functions
    Output: FUNCTiONS (fluorine, uranium, nitrogen, carbon, titanium, oxygen, nitrogen, sulfur)
    ✔ Should be: FUNCTiONS (fluorine, uranium, nitrogen, carbon, titanium, oxygen, nitrogen, sulfur)
    Input: sickness
    Output: SICKNEsS (sulfur, iodine, carbon, potassium, nitrogen, einsteinium, sulfur)
    ✔ Should be: SICKNEsS (sulfur, iodine, carbon, potassium, nitrogen, einsteinium, sulfur)
    Input: ticklish
    Output: TiCKLiSH (titanium, carbon, potassium, lithium, sulfur, hydrogen)
    ✔ Should be: TiCKLiSH (titanium, carbon, potassium, lithium, sulfur, hydrogen)
    Input: noanswer
    Output: Cannot be spelled
    ✔ Should be: Cannot be spelled


  total:     14
  passing:   14
  duration:  12ms


```
