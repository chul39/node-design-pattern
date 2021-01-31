class Subscriber {

    constructor(name) {
        this.name = name;
    }

    notify(storeName, discount) {
        console.log(`${this.name} gets ${discount}% discount at ${storeName}.`);
    }

}

module.exports = Subscriber;