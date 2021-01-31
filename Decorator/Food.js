class Food {

    constructor(name, price) {
        this.name = name
        this.price = price
    }

    print() {
        console.log(`${this.name} costs ${this.price} JPY`)
    }

}

class SmallFood {

    constructor(base) {
        this.name = `Small ${base.name}`;
        this.price = base.price - 100;
    }

}

class LargeFood {

  constructor(baseItem) {
      this.name = `Large ${baseItem.name}`;
      this.price = 100 + baseItem.price;
      this.comment = 'HUGE';
  }

  print() {
      console.log(`${this.name} is ${this.comment}`);
  }

}

module.exports = {Food, SmallFood, LargeFood};
