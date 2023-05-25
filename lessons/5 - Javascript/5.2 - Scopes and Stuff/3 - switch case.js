const foo = 'bar';

// Switch cases allow you to do different things depending on the value of a variable
// So instead of:
if (foo == "bar") console.log("bar");
else if (foo == 'foo') console.log('foo');
else if (foo == `baz`) console.log(`baz`);
else console.log("foo isn't bar, foo, or baz");

// You can do
switch (foo) {
    case "bar":
        console.log("bar");
        break;
    case 'foo':
        console.log('foo');
        break;
    case `baz`:
        console.log(`baz`);
        break;
    default:
        console.log("foo isn't bar, foo, or baz");
}