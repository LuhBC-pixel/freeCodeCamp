var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    let newArray = [...arr];

    return newArray.sort((a, b) => a - b);
}

nonMutatingSort(globalArray);