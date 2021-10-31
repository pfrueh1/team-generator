const Engineer = require("../lib/Engineer");

test('creates an engineer object', () => {
    const engineer = new Engineer('joe', '123', 'joe@company.com', 'joehub')
    expect(engineer.name).toBe('joe');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('joe@company.com');
    expect(engineer.github).toBe('joehub');
})