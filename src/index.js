module.exports = arrayReduce;


function arrayReduce(array, callback, initialValue) {
    var il = array.length - 1,
        value = initialValue,
        i;

    if (value === undefined) {
        value = array[0];
        i = 0;
    } else {
        i = -1;
    }

    while (i++ < il) {
        value = callback(value, array[i], i, array);
    }

    return value;
}
