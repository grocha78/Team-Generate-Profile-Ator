const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Guadalupe', 17, 'rochalupe@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Guadalupe', 17, 'rochalupe@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Guadalupe', 17, 'rochalupe@gmail.com');
    
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Guadalupe', 17, 'rochalupe@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', () => {
    const employee = new Employee('Guadalupe', 17, 'rochalupe@gmail.com');
    
    expect(employee.getRole()).toEqual('Employee');
});