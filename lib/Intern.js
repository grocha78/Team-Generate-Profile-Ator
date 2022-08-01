const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    // will return school from input 
    getSchool() {
        return this.school;
    }

    // overridden to return 'Intern'
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;