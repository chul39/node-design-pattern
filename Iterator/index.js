var Item = require('./Item');
var Iterator = require('./Iterator');

require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Press any direction key...');

var inventory = new Iterator([
    new Item('a', 10),
    new Item('b', 20),
    new Item('c', 40),
    new Item('e', 10),
    new Item('f', 20),
    new Item('g', 30),
    new Item('h', 40)
]);

inventory.first().writeLn();

process.stdin.on('keypress', (str, key) => {

    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    switch(key.name) {
     
        case 'left':
            inventory.prev().writeLn();
            break;

        case 'right':
            inventory.next().writeLn();
            break;

        case 'up':
            inventory.first().writeLn();
            break;

        case 'down':
            inventory.last().writeLn();
            break;

        case 'c':
            if (key.ctrl) process.exit();
            break;

    }

});