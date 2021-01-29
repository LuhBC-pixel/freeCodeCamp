function sentensify(str) {
    const string = str;
    let array = [];

    if (string.includes('-')) {
        array = string.split('-');
    } else if (string.includes('.')) {
        array = string.split('.');
    } else {
        array = string.split(',');
    }

    const newString = array.join(' ');

    return newString;
}

sentensify("May-the-force-be-with-you");