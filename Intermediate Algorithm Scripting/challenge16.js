function steamrollArray(arr) {
    let newArray = [];

    let flatten = function(elem) {
        if (!Array.isArray(elem)) {
            newArray.push(elem);
        } else {
            for (let n in elem) {
                flatten(elem[n]);
            }
        }
    }

    arr.forEach(flatten);

    return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);