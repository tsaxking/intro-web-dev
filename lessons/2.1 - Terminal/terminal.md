# Terminal
A terminal is a command line interface (CLI) where you can type commands to tell the computer what to do. It is a text-based interface, meaning it doesn't have a graphical user interface (GUI) with windows and buttons like most computer applications do. Instead, you type commands into a terminal window to get it to do something.

## Opening a terminal
### Windows
1. Open the start menu
2. Type `cmd` and press enter
### Mac
1. Open the spotlight search
2. Type `terminal` and press enter
### Linux desktop
1. Open the start menu
2. Type `terminal` and press enter

## Commands
```bash
# `ls` and `dir` are the same
ls # List files and folders in current directory
ls -a # List all files and folders in current directory
ls -l # List files and folders in current directory with more information
ls -la # List all files and folders in current directory with more information
ls <path> # List files and folders in path

cd <path> # Change directory
cd .. # Go up one directory
cd ~ # Go to home directory

mkdir <path> # Make directory
mkdir -p <path> # Make directory and all parent directories

touch <path> # Create file (linux)
ni <path> # Create file (windows)

rm <path> # Remove file
rm -r <path> # Remove directory
rm -rf <path> # Remove directory and all files and folders in it (use with caution)

mv <path> <new_path> # Move file or directory
mv <path> <new_path> # Rename file or directory

cp <path> <new_path> # Copy file or directory

cat <path> # Print file contents
```
// mac