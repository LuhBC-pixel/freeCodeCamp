function myReplace(str, before, after) {
    const index = str.indexOf(before);
    const letter = str.charCodeAt(index);
    let letterOfAfter;

    if (letter <= 90) {
        letterOfAfter = after.slice(0, 1).toUpperCase() + after.slice(1,).toLowerCase();
    } else {
        letterOfAfter = after.toLowerCase();
    }
    
    return str.replace(before, letterOfAfter);
}
  
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));