// static properties are like normal properties but instead of taking a property of an instance of a class 
// you just take a property of the class
// so like Foo.bar and not foo.bar
class Foo {
    static bar = "a";
    constructor(bar) {
        this.bar = bar;
    }
}

const foo1 = new Foo("1");
const foo2 = new Foo("2");
console.log(Foo.bar); // a
console.log(foo1.bar); // 1
console.log(foo2.bar); // 2