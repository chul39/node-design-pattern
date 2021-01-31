var Admin = require('./Admin');
var User = require('./User');

var UserFactory = (name, type, dept) => {
    if (type === 'admin') {
        return new Admin(name, dept);
    } else {
        return new User(name);
    }
}

module.exports = UserFactory;
