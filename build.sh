#!/usr/bin/env bash
# exit on error
set -o errexit
<<<<<<< HEAD
yarn
yarn build
yarn typeorm migration:run -d dist/data-source
=======
npm install
npm run build
npm run typeorm migration:run -d dist/data-source
>>>>>>> 20c605204f11fd90f695cc23972127b490f21fb4
