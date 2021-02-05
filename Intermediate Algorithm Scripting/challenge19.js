function addTogether(...args) {
    let [num1, num2] = [...args];

    if (!Number.isInteger(num1) ) {
        return;
    }

    if (!num2) {
        return function otherAdd(n) {
            if (!Number.isInteger(n)) {
                return;
            }
            return num1 + n;
        }
    }

    if (!Number.isInteger(num2)) {
        return;
    }
    
    return num1 + num2;
}

console.log(addTogether(2,3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));