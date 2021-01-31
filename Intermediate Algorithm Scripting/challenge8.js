function pairElement(str) {
    const arr = str.split('');
    let array = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'C') {
            array.push([arr[i], 'G']);

        } else if (arr[i] === 'G') {
            array.push([arr[i], 'C']);

        } else if (arr[i] === 'A') {
            array.push([arr[i], 'T']);

        } else {
            array.push([arr[i], 'A']);
        }
    }

    return array;
}
  
pairElement("GCG");
pairElement("ATCGA")
pairElement("TTGAG")