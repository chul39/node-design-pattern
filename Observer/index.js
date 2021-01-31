var Store = require('./Store');
var Subscriber = require('./Subscriber');
var ShoppingMall = require('./ShoppingMall');

var store1 = new Store('Store 1');
var store2 = new Store('Store 2');

var personA = new Subscriber('Mr.A');
var personB = new Subscriber('Miss B');
var personC = new Subscriber('Mr.C');
var personD = new Subscriber('Miss D');

var mall = new ShoppingMall();

store1.subscribe(personA);
store1.subscribe(personB);
store1.subscribe(personC);
store1.subscribe(mall);

store2.subscribe(personD);
store2.subscribe(mall);

store1.sale(20);
store2.sale(30);

console.log(mall.sales);