# Substr Occurrence
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![Build Status](https://travis-ci.org/codetheweb/substr-occurrence.svg?branch=master)](https://travis-ci.org/codetheweb/substr-occurrence)

A small, extremely lightweight library that counts the number of occurrences of a substring or single character in a larger string.
Created because [string-occurrence](https://github.com/SamVerschueren/string-occurrence) was too bloated and slow.

## Installation


  `npm install codetheweb/substr-occurrence`

## Usage

```javascript
var occurrence = require('substr-occurrence');

console.log(occurrence('o', 'foo bar');
```

  Output should be `2`.

## Tests

  `npm test`
