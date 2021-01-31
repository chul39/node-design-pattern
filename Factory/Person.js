class Person {

    constructor(name)  {
        this.name = name || 'Anonymous';
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Person;
