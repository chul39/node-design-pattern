var Store = require('./Store');
var inventory = require('./inventory');

var shop = new Store('Main Store', inventory);

// Search 1
console.log(shop.find('KFConsole'));

// Search 2
console.log(shop.find('Nintendo Switch'));