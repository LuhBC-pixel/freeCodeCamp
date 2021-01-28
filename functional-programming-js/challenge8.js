// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    var newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i , this));
    }
    
    return newArray;
};

var new_se = s.myMap(function(item) {
    return item * 2;
})