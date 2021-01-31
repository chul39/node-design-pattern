var Customer = require('./Customer');
var { Food, LargeFood, SmallFood } = require('./Food');

var customer = new Customer('Mr.A', 2000);

var burger = new Food("Burger", 799);
var pasta = new Food("Pasta", 699);

var smallBurger = new SmallFood(burger);
var largePasta = new LargeFood(pasta);

customer.buy(smallBurger);
customer.buy(largePasta);

customer.printHistory();

burger.print();
largePasta.print();