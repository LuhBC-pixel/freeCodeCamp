function checkPositive(arr) {
    return arr.every(elem => elem >= 0);
}

checkPositive([1, 2, 3, -4, 5]);