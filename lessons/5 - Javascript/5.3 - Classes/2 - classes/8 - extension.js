// Extension allows a class to inherit properties and methods from another class
// By extending from a class, the new class will still have the prototype of the other class but it will also have it's own prototype in addition
// You can also override the old methods
// When you extend from a class, you have to use super within the constructor in order to construct the other class
class Foo1 {
    // This code gets run when you run super in Foo2
    constructor(bar) {
        this.bar = bar;
    }

    // This method will be inherited by Foo2
    logBar1() {
        console.log("bar1: " + this.bar)
    }

    // This method would get inherited by Foo2 but Foo2 has it's own logBar2 so it is overwritten
    logBar2() {
        console.log("bar2: " + this.bar)
    }
}

class Foo2 extends Foo1 {
    constructor(bar) {
        super(bar); // This super will call the constructor of Foo1
    }

    // This overrides the logBar2 from Foo1
    logBar2() {
        console.log("bar2: ", this.bar, ":D");
    }

    // Even though we are extending Foo1 we can still have our own new methods
    logBar3() {
        console.log("bar3: ", this.bar);
    }
}

const foo1 = new Foo1("bar1");
try {
    // This will run Foo1's logBar1
    foo1.logBar1();
    // This will run Foo1's logBar2
    foo1.logBar2();
    // This will throw an error because Foo1 has no logBar3
    foo1.logBar3();
} catch(e) {
    console.error(e);
}

const foo2 = new Foo2("bar2");

// This will run Foo1's logBar1
foo2.logBar1();
// This will run Foo2's logBar2
foo2.logBar2();
// This will run Foo2's logBar3
foo2.logBar3();