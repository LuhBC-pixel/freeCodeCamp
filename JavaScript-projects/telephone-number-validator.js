function telephoneCheck(str) {
    if (str.match(/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/)) {
        return true;
    }

    return false;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("555-5555"));