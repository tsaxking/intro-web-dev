# XY Problem

## What is the XY Problem?
This problem is very common among developers of every caliber. It is so prevalent that it even has a name. This is the XY problem. The XY problem is asking about your attempted solution rather than your actual problem. For example, say you ask stackoverflow how to get the last 3 characters of a string in Javascript. An answerer might give you a solution like this:

```javascript
var str = "Hello world!"; // ld!
var res = str.substring(str.length - 3, str.length);
```

This is a perfectly valid solution to the problem, but it is not the best solution. The best solution is to use the built in `slice` method:

```javascript
var str = "Hello world!";
var res = str.slice(-3); // ld!
```

Now, both of these work, and the last is quite elegant. However, there's an issue here... You didn't actually need the last 3 characters of a string. You needed to get the file extension from a file name. So this method will only work with extensions that are 3 characters long. So, one solution would be to use the `split` method:

```javascript
var str = "Hello world.txt";
var ext = str.split('.').pop(); // txt
```

This works, but the best solution for Node.js is the built-in `path` module:

```javascript
const path = require('path');
var str = "Hello world.txt";
var ext = path.extname(str); // .txt
```

## Takeaway

The takeaway here is that if you are working on a problem, ask yourself if what you're doing is the best way to solve the problem. If you're not sure, ask someone. There are a LOT of developers in this world, so there's a good chance someone has already solved your problem. If you can't find a solution, then ask for help. But, when you ask for help, make sure you're asking the right question. Don't ask how to do something, ask how to solve your problem. If you ask how to do something, you might get an answer that works, but isn't the best solution and doesn't work on what we call "edge cases". If you ask how to solve your problem, you might get an answer that works, and is the best solution.

[Next](../1.1%20-%20Prerequisites/downloads.md)