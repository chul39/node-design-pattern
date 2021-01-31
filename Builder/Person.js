class Person {

    constructor(builder) {
        this.name = builder.name;
        this.isEmployee = builder.isEmployee;
        this.isManager = builder.isManager;
        this.workHours = builder.workHours || 0;
        this.salary = builder.salary || 0;
        this.workList = builder.workList || [];
    }

    toString() {
        return JSON.stringify(this);
    }

}

module.exports = Person;