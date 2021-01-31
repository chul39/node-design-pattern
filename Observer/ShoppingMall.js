class ShoppingMall {

    constructor() {
        this.sales = [];
    }

    notify(storeName, discount) {
        this.sales.push({
            storeName, discount
        });
    }

}

module.exports = ShoppingMall;