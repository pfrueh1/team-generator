const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('joe', '123', 'joe@company.com')
    expect(employee.name).toBe('joe');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('joe@company.com');
})