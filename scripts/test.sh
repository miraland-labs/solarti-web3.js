#!/usr/bin/env bash

set -ex

# setup environment
sh -c "$(curl -sSfL https://release.miraland.top/edge/install)"
PATH="$HOME/.local/share/miraland/install/active_release/bin:$PATH"
miraland --version

# build and test
npm install
npm run build
ls -l lib
test -r lib/index.iife.js
test -r lib/index.cjs.js
test -r lib/index.esm.js
npm run ok
npm run codecov
npm run test:live-with-test-validator
