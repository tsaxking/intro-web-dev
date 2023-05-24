# typescript (tsc)
Typescript is a superset of javascript. It adds types and other features to javascript. It is compiled to javascript. The compiler is called tsc. There are packages like [deno](https://deno.land/) that can run typescript without compiling it to javascript, unlike Node.js.

## Install

```bash
npm install -g typescript # Command line tool
npm install typescript 
# NOT
npm install -g tsc # This is a different package
```

## Initialize

```bash
tsc --init # Create tsconfig.json
```
This will make a tsconfig.json file with default values, and comments on what they do. You can change the values to your liking.

## Compile

```bash
tsc # Compile all .ts files in current directory
tsc <file_name> # Compile specific file
tsc -w # Watch for changes and compile
```