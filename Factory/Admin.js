var User = require('./User')

class Admin extends User {

    constructor(name, dept) {
        super(name);
        this.department = dept || 'Unspecified';
        this.isAdmin = true;
    }

}

module.exports = Admin;