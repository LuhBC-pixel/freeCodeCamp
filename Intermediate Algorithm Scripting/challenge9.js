function fearNotLetter(str) {
    const ascii = str.charCodeAt(0);
    const array = str.split('');
    let letterAscii;
    let begin = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i].charCodeAt(0) !== ascii + begin) {
            letterAscii = ascii + begin;
            return String.fromCharCode(letterAscii);
        }

        begin++;
    }

    return;
}

console.log(fearNotLetter('abce'));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));