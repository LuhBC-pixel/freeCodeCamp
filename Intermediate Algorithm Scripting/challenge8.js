function pairElement(str) {
    const arr = str.split('');
    const objDNA = {
        A: 'T',
        T: 'A',
        G: 'C',
        C: 'G'
    }

    let array = arr.map(elem => [elem, objDNA[elem]]);

    return array;
}
  
pairElement("GCG");
pairElement("ATCGA")
pairElement("TTGAG")