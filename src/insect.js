import Animal from './animal';

var legsCountSymbol = Symbol();
class Insect extends Animal {
    constructor(name) {
        super(name);
        this[legsCountSymbol] = 0;
    }

    get legsCount() {
        return this[legsCountSymbol];
    }

    set legsCount(value) {
        if (value < 0) {
            console.log("We do not support nether or interstellar insects");
        }
        this[legsCountSymbol] = value;
    }

    doSomething() {
        super.doSomething();
        console.log("And I have " + this[legsCountSymbol] + " legs!");
    }
}

module.exports = Insect;