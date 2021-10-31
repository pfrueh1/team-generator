const Manager = require("../lib/Manager");

test('creates an engineer object', () => {
    const manager = new Manager('joe', '123', 'joe@company.com', '5555555555')
    expect(manager.name).toBe('joe');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('joe@company.com');
    expect(manager.officeNumber).toBe('5555555555');
})