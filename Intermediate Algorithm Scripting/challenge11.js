function convertHTML(str) {
    const arr = str.split('');

    let newArray = arr.map(elem => {
        switch (elem) {
            case '&':
                elem = '&amp;';
                break;
            case '<':
                elem = '&lt;';
                break;
            case '>':
                elem = '&gt;';
                break;
            case '"':
                elem = '&quot;';
                break;
            case "'":
                elem = '&apos;';
                break;
        }

        return elem;
    });

    const string = newArray.join('');
    return string;
}
  
convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("abc");