function translatePigLatin(str) {
    if (str.match(/^[aeiou]/) !== null ) {
        str += 'way';
    } else {
        let hasVolgal = false;
        for (let i = 0; i < str.length; i++) {
            if (str[i].match(/[aeiou]/i)) {
                str = str.substr(i) + str.substr(0, i) + 'ay';
                hasVolgal = true;
                break;
            }
        }

        if (!hasVolgal) {
            str += 'ay'
        }
    }

    return str;
}

translatePigLatin("consonant");
translatePigLatin("california")
translatePigLatin("rhythm")