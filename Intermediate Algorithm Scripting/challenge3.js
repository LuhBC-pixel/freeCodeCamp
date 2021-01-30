function destroyer(arr, ...args) {
    let arr = args;
    let newArray = arr.filter(elem => arr.indexOf(elem) === -1);
    return newArray;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))