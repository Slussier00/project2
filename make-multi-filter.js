'use strict';
function MakeMultiFilter(array) {
    const originalArray = array;
    let currentArray = array;
    function arrayFilterer(filter, callback) {
        if (!filter) {
            return currentArray;
        }
        currentArray = currentArray.filter(filter);
        if (callback) {
            callback.call(originalArray, currentArray);
        }
        return arrayFilterer;
    }
    return arrayFilterer;
}
