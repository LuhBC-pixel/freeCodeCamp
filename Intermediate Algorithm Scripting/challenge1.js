function sumAll(arr) {
    let sum = arr[0] + arr[1];

    if (arr[0] < arr[1]) {
        for (let i = arr[0] + 1; i < arr[1]; i++) {
            sum += i;
        }
    } else {
        for (let i = arr[1] + 1; i < arr[0]; i++) {
            sum += i;
        }
    }

    return sum;
}
  
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]))