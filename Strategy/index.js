var logger = require('./Logger');

logger.log('Hello World');
logger.changeStrategy('noDate');
logger.log('Hello Again');