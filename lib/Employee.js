class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // will return name from input
    getName() {
        return this.name;
    }

    // will return id from input
    getId() {
        return this.id;
    }

    // will return email from input
    getEmail() {
        return this.email;
    }

    // will return employee role
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;