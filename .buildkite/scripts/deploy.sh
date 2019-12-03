#!/bin/bash

set -eou pipefall

npm install

git config --global user.email $GH_EMAIL
git config --global user.name $GH_NAME

npm run deploy
