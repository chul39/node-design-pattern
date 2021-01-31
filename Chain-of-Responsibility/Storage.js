class Storage {

    constructor(name, inventory, deliveryTime) {
        this.name = name;
        this.inventory = inventory || [];
        this.deliveryTime = deliveryTime || 0;
        this.next = null;
    }

    checkInventory(itemName) {
        var index = this.inventory.map(item => item.name).indexOf(itemName);
        return this.inventory[index];
    }

    setNext(storage) {
        this.next = storage;
    }

    find(itemName) {
        var found = this.checkInventory(itemName);
        if (found) {
            return {
                name: found.name,
                qty: found.qty,
                location: this.name,
                deliveryTime: (this.deliveryTime === 0) ? 'Today' : `Within ${this.deliveryTime} day(s)`
            }
        } else if (this.next) {
            return this.next.find(itemName);
        } else {
            return `${itemName} is out of stock`;
        }
    }

}

module.exports = Storage;
