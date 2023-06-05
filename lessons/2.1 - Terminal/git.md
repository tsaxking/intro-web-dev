# Github (git)
Github is a website that hosts git repositories. It is used to share code with other people as well as have a powerful version history of the code.

## Initializing
To initialize a repository, you need to run the `git init` command. This command creates a `.git` folder in the current directory. This folder contains all the information about the repository. 

```bash
# Starting in an empty directory:
git init # initialize a repository
git remote add origin <url> # add a remote repository
git push -u origin master # push the repository to the remote repository
```

## Clone
Cloning is basically making a copy (a clone) of a repository on your device. This is done by using the `git clone` command. This command takes the URL of the repository as an argument. The URL can be found on the repository page on Github. 

```bash
git clone https://github.com/<username>/<repo>.git

# or with ssh
git clone git@github.com:<username>/<repo>.git
```

## add/commit/push/pull
These are the most common commands used with git. They are used to save changes to the repository. 

```bash
git add <file> # add a file to the staging area
git commit -m "message" # commit the changes to the repository
git push # push the changes to the remote repository

git pull # pull changes from the remote repository
```
(remote repository is the repository on Github.com)

## Branches
Branches are used to work on different versions of the repository. This is useful when you want to work on a new feature, but you don't want to break the main version of the repository. 

```bash
git branch # list all branches
git branch <name> # create a new branch
git checkout <name> # switch to a branch
git checkout -b <name> # create and switch to a branch
git merge <name> # merge a branch into the current branch
git branch -d <name> # delete a branch (please don't do this, leave it to the repo owner)

git push origin --delete <name> # delete a branch on the remote repository
git push --set-upstream origin <name> # push a branch to the remote repository
```

## Stash
Stash is used to save changes that you don't want to commit yet. This is useful when you want to switch branches, but you don't want to commit the changes you made. 

```bash
git stash # stash changes
git stash apply # apply the last stash
git stash list # list all stashes
git stash apply <stash> # apply a specific stash
git stash drop <stash> # delete a specific stash
git stash clear # delete all stashes
git stash pop # apply and delete the last stash
```

## Submodules
Submodules are basically repositories inside of repositories. This is useful when you want to use a repository inside of multiple repositories, but keep the code in one place. 

```bash
git submodule add <url> # add a submodule (add code)
git submodule init # initialize submodules (pull code)
git submodule update # update submodules (pull changes)
git submodule foreach git pull # pull changes in all submodules
git submodule deinit <name> # remove a submodule
```

## Merge conflicts
Merge conflicts happen when you try to merge two branches, but there are changes in both branches that conflict with each other. This can be fixed by manually editing the files that have conflicts.

Here is what you should do:
1. Run `git pull` to pull the changes from the remote repository
2. Fix the conflicts in the files that have conflicts using a text editor (like VSCode)
    - The conflicts will be marked with `<<<<<<< HEAD` and `>>>>>>> <branch>`
    - The changes from the remote repository will be between `<<<<<<< HEAD` and `=======`
    - The changes from your local repository will be between `=======` and `>>>>>>> <branch>`
3. Run `git add <file>` to add the files that you fixed (or `git add .` to add all files)
4. Run `git commit -m "message"` to commit the changes
5. Run `git push` to push the changes to the remote repository
6. If there are still conflicts, repeat steps 2-5

If you are working on a PC that has a text editor that you are not familiar with (like Vim). You can make a new branch, push it, then fix the conflicts on a different PC.

[Next](./npm.md)