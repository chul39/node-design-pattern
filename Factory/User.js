var Person = require('./Person')

class User extends Person {

    constructor(name) {
        super(name);
        this.isAdmin = false;
    }

}

module.exports = User;