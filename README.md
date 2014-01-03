dtestjs
=========
dtestjs is a simple test framework for nodejs / javascript.

It uses [colorsjs](https://github.com/Marak/colors.js) by Marak Squires

``` js
var dtest = require('dtest');
var assert;

/////////////////////////////////////
assert = dtest.ut("math");
/////////////////////////////////////
assert(1 + 1 === 2, "basic addition, one plus one");
assert(5318008<3, "number comparison, 5318008<3");

/////////////////////////////////////
assert = dtest.ut("wow");
/////////////////////////////////////
var doge = "wow";
assert(doge === "wow", "such doge");
assert(doge === "dog", "so test".rainbow);

dtest.print_failures();
dtest.print_stats();


```

```
PASS :: math basic addition, one plus one
FAIL :: math number comparison, 5318008<3
PASS :: wow such doge
FAIL :: wow so test

[[ FAILURES ]]
math - number comparison, 5318008<3
wow - so test

2|2
```

such colors
=========
![colored output](http://f.dtkav.com/static/dtestjs_colors.png "colored output")

