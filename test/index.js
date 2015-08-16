var tape = require("tape"),
    arrayReduce = require("..");


tape("arrayReduce(array, callback[, initialValue]) applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value", function(assert) {
    assert.equals(
        arrayReduce([0, 1, 2, 3, 4], function(currentValue, value) {
            return currentValue + value;
        }),
        10
    );
    assert.end();
});
