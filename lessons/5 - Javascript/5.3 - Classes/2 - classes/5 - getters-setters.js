// Getters and setter allow you to have code run when someone tries to access a property or when someone tries to change a property
class Foo {
    constructor(bar) {
        this._bar = bar;
    }

    // This code will run when someone runs foo.bar
    get bar() {
        console.log("someone is trying to access bar");
        return this._bar;
    }

    // this code will run when someone runs foo.bar = bar
    set bar(bar) {
        console.log(`someone is trying to set bar to: ${bar}`);
        this._bar = bar;
    }
}

const foo = new Foo("a");
console.log("bar: ", foo.bar); // this will log "bar: a" but it will also log "someone is trying to access bar"
foo.bar = "b" // this will log `someone is trying to set bar to: b`
console.log("bar: ", foo.bar); // this will log "bar: b" but it will also log "someone is trying to access bar"