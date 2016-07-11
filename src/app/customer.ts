class Customer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let oleg = new Customer('Oleg');
console.log(oleg.getName());

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }

    sum(a1: number, a2: number) {
        return a1 + a2;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet());
console.log(greeter.sum(9, 12));