const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        
        super(name, id, email)

        this.officeNumber = officeNumber;
    }

    // overridden to return 'Manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;