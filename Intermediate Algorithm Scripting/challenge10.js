function uniteUnique(...arr) {
    const array = [...arr];
    let unique = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (!unique.includes(array[i][j])) {
                unique.push(array[i][j]);
            }
        }
    }

    return unique;
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);