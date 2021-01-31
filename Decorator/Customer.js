class Customer {

    constructor(name, money) {
        this.name = name;
        this.money = money;
        this.foodList = [];
    }

    buy(food) {
        if (food.price > this.money) {
            console.log(`Not enough money for ${food.name}`);
        } else {
            console.log(`Buying ${food.name}`);
            this.money -= food.price;
            this.foodList.push(food);
        }
    }

    printHistory() {
        console.log(`${this.name} has purchased ${this.foodList.length} items:`);
        this.foodList.forEach(food => {
            console.log(`   * ${food.name} - ${food.price} JPY`);
        })
        console.log(`${this.name} has ${this.money} JPY remaining.`);
    }

}

module.exports = Customer;
