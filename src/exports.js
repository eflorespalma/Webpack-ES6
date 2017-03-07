/* Playing with the exports */ 

class Person {
    constructor(name) {
        this.name = name;
    }

    sayhello() {
        console.log(`Hi my name is ${this.name}`);
    }
}

var SimpleMethod = () => {
    console.log('Im not a Class');
};

module.exports = {
    Person : Person,
    SimpleMethod : SimpleMethod
};