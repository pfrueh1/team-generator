const Intern = require("../lib/Intern");

test('creates an engineer object', () => {
    const intern = new Intern('joe', '123', 'joe@company.com', 'St. Joes')
    expect(intern.name).toBe('joe');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('joe@company.com');
    expect(intern.school).toBe('St. Joes');
})