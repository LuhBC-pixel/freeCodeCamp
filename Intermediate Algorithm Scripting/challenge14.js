function smallestCommons(arr) {
    arr.sort((a, b) => b - a);

    let array = [];

    for (let i = arr[0]; i >= arr[1]; i--) {
        array.push(i);
    }
    
    let quot = 0;
    let loop = 1;
    let n;

    do {
        quot = array[0] * loop + array[1];
        for (n = 2; n < array.length; n++) {
            if (quot % array[n] === 0) {
                break;
            }
        }

        loop++;
    } while (n !== array.length);

    console.log(quot)
    return quot;
}

smallestCommons([1,5]);