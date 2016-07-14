array-reduce
=======

applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.


```javascript
var arrayReduce = require("@nathanfaucett/array-reduce");


arrayReduce([0, 1, 2, 3, 4], function(currentValue, value) {
    return currentValue + value;
}) === 10;
```
