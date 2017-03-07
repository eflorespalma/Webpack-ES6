class Animal {
    constructor(name) {
        this.name = name;
    }

    doSomething() {
        console.log("I'm a " + this.name);
    }
}
module.exports = Animal;