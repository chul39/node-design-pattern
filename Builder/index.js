var PersonBuilder = require('./PersonBuilder');

var a = new PersonBuilder('A').makeEmployee().makeManager(60).build();
var b = new PersonBuilder('B').makeEmployee().makePartTime().build();
var c = new PersonBuilder('C').makeEmployee().build();
var d = new PersonBuilder('D').makeSalary(500).makeWorkList(['Work A','Work ']).build();

console.log(a.toString());
console.log(b.toString());
console.log(c.toString());
console.log(d.toString());