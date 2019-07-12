#!/usr/bin/env sh

echo 'The following "npm" command builds your Node.js/React application for'
echo 'production in the local "build" directory (i.e. within the'
echo '"/var/jenkins_home/workspace/simple-node-js-react-app" directory),'
echo 'correctly bundles React in production mode and optimizes the build for'
echo 'the best performance.'
set -x
npm run build
set +x

#!/bin/bash
#
# login in the jenkins server with:
#
# heroku login
# heroku keys:add
#
# Doing so, jenkins will have permission to deploy to
# the heroku remote.
#

# exit 1 on errors
#set -e

# deal with remote
#echo "Checking if remote exists..."
#if ! git ls-remote heroku; then
 # echo "Adding heroku remote..."
  #git remote add heroku git@heroku.com:radiant-river-46437.git
#fi

# push only origin/master to heroku/master - will do nothing if
# master doesn't change.
#echo "Updating heroku master branch..."
#git push heroku origin/master:master
