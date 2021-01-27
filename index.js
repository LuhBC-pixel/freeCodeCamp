// function countdown(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const countArray = countdown(n - 1);
//         countArray.unshift(n);
//         return countArray;
//     }
// }

// console.log(countdown(5));

// function rangeOfNumbers(startNum, endNum) {
//     if (endNum < startNum) {
//         return [];
//     } else {
//         const countArray = rangeOfNumbers(startNum, endNum - 1);
//         countArray.push(endNum);
//         return countArray;
//     }
// };

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));
// console.log(rangeOfNumbers(4, 4));

// const local_forecast = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
// };

// const { today: { low: lowToday }} = local_forecast;
// const { today: { high: highToday }} = local_forecast;

// console.log(lowToday, highToday);

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
// };

// function makeList(arr) {
//     const failureItems = [];

//     for (let i = 0; i < arr.length; i++) {
//         failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//     }

//     return failureItems;
// }

// console.log(makeList(result.failure));

// let text = '<h1>Winter is coming</h1>';
// let myRegex = /<.*?>/;
// let result = text.match(myRegex);
// console.log(result);

// function zeroArray(m, n) {
//     let newArray = [];
    
//     for (let i = 0; i < m; i++) {
//         let row = [];

//         for (let j = 0; j < n; j++) {
//             row.push(0);
//         }
//         newArray.push(row);
//     }

//     return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);


function getIndexToIns(arr, num) {
    arr.sort((first, second) => {
        if (first === second) {
            return 0;
        } else if (first < second) {
            return -1;
        } else {
            return 1;
        }
    })

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i;
        }
    }

    if (arr[arr.length - 1] < num) {
        return arr.length;
    } else {
        return 0;
    }

}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 5, 10], 15));