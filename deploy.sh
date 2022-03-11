#!/usr/bin/env sh

set -e

# build
npm run build

# navigate into the build output directory

git init
git add dist
git commit -m 'deploy'

git push -f git@github.com:yuraivanskyi/yuraivanskyi.github.io.git main
