function nonMutatingConcat(original, attach) {
    let arrOriginal = [...original];
    return arrOriginal.concat(attach);
}

var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);