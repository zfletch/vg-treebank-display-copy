#!/usr/bin/env node

// This script is used to update the `version` in `package.json`
// It is used in `.github/workflows/release.yml`.

// It accepts one command line argument: the version number string

const { readFileSync, writeFileSync } = require('fs');

// Read the package.json file
const packageJson = JSON.parse(
  readFileSync('package.json', { encoding: 'utf8', flag: 'r' }),
);

// Get the version number from ARGV
let version = process.argv[2];

// Exit with error if there is no version number
if (version === undefined) {
  // eslint-disable-next-line no-console
  console.log('No version number provided');
  process.exit(1);
}

// If the version starts with `vX.Y.Z` where X, Y, and Z are numbers,
// then remove the `v` from the beginning
if (/^v\d+\.\d+.\d+/.test(version)) {
  version = version.substr(1);
}

// Replace the relevant fields
packageJson.version = version;

// Write to package.json
writeFileSync('package.json', `${JSON.stringify(packageJson, null, 2)}\n`);
