git clone https://github.com/username/repoName.git - only once at start of project
git checkout -b dev - only once at start of project
git pull origin dev - only once at start of project
git checkout -b AB-featureName
Write Code
When collaborator has made changes, tagged you in a pull request, you have reviewed and they have then merged
git pull origin dev
Finish writing code
git push --set-upstream origin AB-featureName
Go to github, create pull request, set collaborators as reviewers
Once merged, delete my branch locally and git pull origin dev
git checkout -b AB-newFeatureName

Important terminology
git add . -- "Adding files (staging) ready for a commit"
git commit -m "some important message" -- "Making a commit history entry that outlines what changes where made and to what files"
git push -- "Pushes to the remote version of your branch if the upstream is set"
git checkout branchName -- "Moves to a branch that already exists locally"
git checkout -b branchName -- "Creates and moves to a new local branch"
git branch -d branchName -- "Deletes branch locally, can only be done from outside the branch"
origin -- "Location of the remote repo"
-upstream -- "Which online repo I'm pushing to"
--set-upstream -- "Set the online repo I want to push this branch to, my upstream can only be linked to one branch at a time"
git pull origin branchName -- "Grabs contents of the online version of that branch and adds it to your current branch"
git status -- "Gives you a rundown of what branch you're in and if you have unstaged files or untracked files, also checks if you're up to date with the remote version of that branch"
git branch -- "Shows both the branches that are available locally and what branch you're currently on"
