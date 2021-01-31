var logger = require('./Logger');
var ClassOne = require('./ClassOne');
var ClassTwo = require('./ClassTwo');

// var logger = new Logger().getInstance();

logger.log('Started');

var one = new ClassOne();
var two = new ClassTwo();

logger.log('Finished');

console.log(`${logger.count} logs total`);

logger.logs.map(log => console.log(`   ${log.message}`));