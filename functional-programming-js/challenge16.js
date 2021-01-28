const squareList = arr => {
    const positiveNumber = arr.filter(elem => elem >= 0);

    const integerNumber = positiveNumber.filter(elem => Number.isInteger(elem));

    const squaredIntegers = integerNumber.map(elem => elem ** 2);
    
    return squaredIntegers;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);