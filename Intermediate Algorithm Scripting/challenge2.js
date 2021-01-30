function diffArray(arr1, arr2) {
    var newArr = [...arr1, ...arr2];
    let array = newArr.filter(elem => arr1.indexOf(elem) === -1 || arr2.indexOf(elem) === -1);
    return array;
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));