const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('Guadalupe', 17, 'rochalupe@gmail.com', 'GuadalupeR');
    
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Guadalupe', 17, 'rochalupe@gmail.com', 'GuadalupeR');
    
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employeee', () => {
    const engineer = new Engineer('Guadalupe', 17, 'rochalupe@gmail.com', 'GuadalupeR');
    
    expect(engineer.getRole()).toEqual('Engineer');
})