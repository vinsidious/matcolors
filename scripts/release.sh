#!/usr/bin/env bash
set -e

PACKAGE_XY=$(node -e "console.log(JSON.parse(fs.readFileSync('package.json')).version.replace(/\.\d+$/, ''))")
PACKAGE_VERSION="${PACKAGE_XY}.${TRAVIS_BUILD_NUMBER}"

npm version "${PACKAGE_VERSION}"
git push --tags
