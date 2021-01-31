class Item {

    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    writeLn(){
        process.stdout.write(`${this.name} (${this.value})`);
    }

}

module.exports = Item;