class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole() {
        return this.constructor.name.toLowerCase();
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}
module.exports = Employee;

let bob = new Employee('b', 'b', 'b')

console.log(bob.getRole());