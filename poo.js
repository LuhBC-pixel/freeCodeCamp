function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if (Dog.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

Dog.prototype = {  // Herança - Dog - classe filha
    constructor: Dog,
    eat: function() {
        console.log('au au');
    },
    describe: function() {
        console.log('My name is ' + this.name);
    }
}

let beagle = new Dog('Snoopy');

Dog.prototype.isPrototypeOf(beagle); // return true

Object.prototype.isPrototypeOf(Dog.prototype);

function Animal() { } // Herança - Animal - classe Mãe

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log('nom nom nom');
    }
};

Dog.prototype = Object.create(Animal.prototype);