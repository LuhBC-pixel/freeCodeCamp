function sumFibs(num) {
    let sum = 1;
    let result = 0;
    let prevNumber = 0;

    while (sum <= num) {
        if (sum % 2 !== 0) {
            result += sum
        }

        sum += prevNumber;
        prevNumber = sum - prevNumber;
    }

    return result;
}

sumFibs(4);