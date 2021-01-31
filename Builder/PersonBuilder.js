var Person = require('./Person');

class PersonBuilder {

    constructor(name) {
        this.name = name;
    }

    makeEmployee() {
        this.isEmployee = true;
        return this;
    }

    makeManager(hours) {
        this.isManager = true;
        this.workHours = hours || 40;
        return this;
    }

    makePartTime(hours) {
        this.workHours = hours || 20;
        return this;
    }

    makeSalary(salary) {
        this.salary = salary;
        return this;
    }

    makeWorkList(list){
        this.workList = list || [];
        return this;
    }

    build() {
        return new Person(this);
    }

}

module.exports = PersonBuilder;