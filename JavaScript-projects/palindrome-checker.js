function palindrome(str) {
    const arr = str.replace(/[\W_]/g, '').toLowerCase().split('');
    const arrayReversed = [...arr];
    arrayReversed.reverse();

    const string = arr.join('');
    const stringReversed = arrayReversed.join('');

    return string === stringReversed;
}

console.log(palindrome('eye'));
console.log(palindrome("_eye"));
console.log(palindrome("A man, a plan, a canal. Panama"))