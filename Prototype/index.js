var Hero_prototype = require('./Hero_prototype');

var player = Hero_prototype.clone();
player.addSkill("Cure");

var cloud = Hero_prototype.clone();
cloud.name = 'Cloud Strife'
cloud.addSkill('Braver');
cloud.addSkill('Cross Slash');

console.log(`${player.name}: ${player.skillList}`);
console.log(`${cloud.name}: ${cloud.skillList}`);
