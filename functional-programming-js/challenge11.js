function sliceArray(anim, beginSlice = 0, endSlice = 0) {
    if (beginSlice === endSlice && beginSlice === 0) {
        return anim;
    }
    
    if (endSlice === 0) {
        endSlice = anim.length - 1;
    }

    let arr = anim.slice(beginSlice, endSlice);

    return arr;
}

var inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];
sliceArray(inputAnim, 1, 3);