# Node Package Manager (npm)
npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

```bash
npm -v # Check npm version
npm -h # Get help
npm help <command> # Get help for a command
npm <command> -h # Get help for a command
```

## Managing packages
```bash
# `npm i` and `npm install` are the same

npm install <package_name> # Install package
npm install <package_name> -g # Install package globally (for command line tool)
npm install <package_name> --save # Install package and save it to package.json
npm install <package_name> --save-dev # Install package and save it to package.json as a dev dependency
npm install # Install all packages in package.json
npm install -g npm # Update npm

npm uninstall <package_name> # Uninstall package
npm uninstall <package_name> -g # Uninstall package globally
npm uninstall <package_name> --save # Uninstall package and remove it from package.json
npm uninstall <package_name> --save-dev # Uninstall package and remove it from package.json as a dev dependency

npm update <package_name> # Update package
npm update <package_name> -g # Update package globally
npm update <package_name> --save # Update package and save it to package.json
npm update <package_name> --save-dev # Update package and save it to package.json as a dev dependency

npm audit # Check for vulnerabilities
npm audit fix # Fix vulnerabilities
```

## Making your own package
```bash
npm init # Create package.json
npm init -y # Create package.json with default values

npm publish # Publish package
npm unpublish <package_name> --force # Unpublish package

npm version <major|minor|patch> # Update package version
npm version <version_number> # Update package version
```
# Node Version Manager (nvm)
nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

```bash
nvm -v # Check nvm version
nvm -h # Get help
nvm help <command> # Get help for a command
nvm <command> -h # Get help for a command
```

## Managing node versions
```bash
nvm ls # List installed node versions
nvm ls-remote # List available node versions
nvm install <version> # Install node version
nvm install <version> --lts # Install node version (LTS)
nvm install <version> --latest-npm # Install node version with latest npm
nvm install <version> --reinstall-packages-from=<version> # Install node version and reinstall packages from another version

nvm uninstall <version> # Uninstall node version
```





[Next](./tsc.md)
