// Private properties
// Private properties are properties that can only be accessed from within a class

// You can initialized them with a #
class Foo {
    #bar2;
    constructor(bar1, bar2) {
        this.bar1 = bar1;
        this.#bar2 = bar2;
    }

    // as you can see within the class we can access #bar2
    get bar3() {
        return this.#bar2;
    }

    set bar3(bar) {
        this.#bar2 = bar;
    }
}

const foo = new Foo("a", "b");
console.log(foo.bar1);
// But when we try to access it here it is undefined
console.log(foo.#bar2);
console.log(foo.bar3);