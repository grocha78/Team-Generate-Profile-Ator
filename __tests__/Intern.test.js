const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Guadalupe', 17, 'rochalupe@gmail.com', 'UH');
    
    expect(intern.school).toEqual(expect.any(String));
});

test('gets school of intern', () => {
    const intern = new Intern('Guadalupe', 17, 'rochalupe@gmail.com', 'UH');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of intern', () => {
    const intern = new Intern('Guadalupe', 17, 'rochalupe@gmail.com', 'UH');
    
    expect(intern.getRole()).toEqual('Intern');
});