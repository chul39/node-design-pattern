var Product = require('./Product');
var ProductGroup = require('./ProductGroup');

var product1 = new Product("Product A1", 199);
var product2 = new Product("Product A2", 299);
var product3 = new Product("Product A3", 399);

var productGroupA = new ProductGroup("Group A", [
    product1, 
    product2, 
    product3
]);

var productGroupB = new ProductGroup("Group B", [
    new Product("Product B1", 229),
    new Product("Product B2", 149)
]);

var productNew = new Product("Product C1", 649);

var productInCart = new ProductGroup("Group C", [productNew, productGroupA, productGroupB]);

console.log(`Total: $${productInCart.total}`);

productInCart.print();
