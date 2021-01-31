var Storage = require('./Storage');

class Store {

    constructor(name, inventory) {

        var s1 = new Storage('Store 1', inventory.s1);
        var s2 = new Storage('Store 2', inventory.s2, 1);
        var s3 = new Storage('Store 3', inventory.s3, 3);
        var s4 = new Storage('Store 4', inventory.s4, 7);

        this.name = name;
        this.inventory = inventory || [];
        this.storage = s1;

        s1.setNext(s2);
        s2.setNext(s3);
        s3.setNext(s4);

    }

    find(itemName) {
        return this.storage.find(itemName);
    }

}

module.exports = Store;
