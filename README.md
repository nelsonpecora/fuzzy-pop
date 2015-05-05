# fuzzy-pop

[![Build Status](https://travis-ci.org/yoshokatana/fuzzy-pop.svg)](https://travis-ci.org/yoshokatana/fuzzy-pop)
[![Code Climate](https://codeclimate.com/github/yoshokatana/fuzzy-pop/badges/gpa.svg)](https://codeclimate.com/github/yoshokatana/fuzzy-pop)

Simple fuzzy search + popularity.

## Install

```
npm install --save fuzzy-pop
```

## Usage

Fuzzy Pop is super simple. You give it an `input` string and an `array` of values, and it'll give you back the matching items, sorted by popularity.

```js
var fp = require('fuzzy-pop'),
  array = [{
    value: 'foo',
    count: 1,
    latest: new Date(100)
  }, {
    value: 'foobar',
    count: 5,
    latest: new Date(200)
  }, {
    value: 'foobarbaz',
    count: 1,
    latest: new Date(300)
  }];

fp('foo', array);

/* returns:
  [ { value: 'foobar',
      count: 5,
      latest: Wed Dec 31 1969 19:00:00 GMT-0500 (EST),
      score: 3.3367718175684676e-10 },
    { value: 'foo',
      count: 1,
      latest: Wed Dec 31 1969 19:00:00 GMT-0500 (EST),
      score: 0 },
    { value: 'foobarbaz',
      count: 1,
      latest: Wed Dec 31 1969 19:00:00 GMT-0500 (EST),
      score: 0 } ]
*/
```

It uses HackerNews's algorithm and only deals with counts, so the decay is really basic.

## Test

```
npm test
```