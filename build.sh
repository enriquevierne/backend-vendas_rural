#!/usr/bin/env bash
# exit on error
set -o errexit
npm install
npm build
npm run typeorm migration:run -d dist/data-source