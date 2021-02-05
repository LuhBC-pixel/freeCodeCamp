function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let newArray = [];
    
    function calculate(obj) {
        const a = Math.pow((obj.avgAlt + earthRadius), 3);

        const t = 2 * Math.PI * Math.sqrt(a / GM);

        return {name: obj.name, orbitalPeriod: Math.round(t)};
    }

    for (let i in arr) {
        newArray.push(calculate(arr[i]));
    }

    return newArray;
}
  
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));