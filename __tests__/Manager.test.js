const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Guadalupe', 17, 'rochalupe@gmail.com', '69');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of manager', () => {
    const manager = new Manager('Guadalupe', 17, 'rochalupe@gmail.com');
    
    expect(manager.getRole()).toEqual('Manager');
});