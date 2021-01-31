var UserFactory = require('./UserFactory');

var person1 = UserFactory('Mr.User');
var person2 = UserFactory('Mr.Admin', 'admin', 'Department A');

console.log(person1.toString());
console.log(person2.toString());