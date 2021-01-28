function nonMutatingSplice(cities) {
    let arr = [...cities];
    return arr.slice(0, 3);
}

var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);