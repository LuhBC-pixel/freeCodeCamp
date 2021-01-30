function spinalCase(str) {
    const arr = str.split(/\s|_|(?=[A-Z])/);

    return arr.join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));