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
    count: 30,
    latest: new Date('2015-01-02')
  }, {
    value: 'bar',
    count: 100,
    latest: new Date('2015-01-01')
  }, {
    value: 'foobar',
    count: 50,
    latest: new Date('2015-05-01')
  }, {
    value: 'foobarbaz',
    count: 10,
    latest: new Date('2015-05-02')
  }];

fp('foo', array);

/* returns:
  [ { value: 'foobar',
      count: 50,
      latest: Thu Apr 30 2015 20:00:00 GMT-0400 (EDT),
      score: 0.008991589643452504 },
    { value: 'foobarbaz',
      count: 10,
      latest: Fri May 01 2015 20:00:00 GMT-0400 (EDT),
      score: 0.0024766818556312426 },
    { value: 'foo',
      count: 30,
      latest: Thu Jan 01 2015 19:00:00 GMT-0500 (EST),
      score: 0.00001622207651379491 } ]

  note: 'bar' isn't returned because it doesn't match! (⌐■_■)
*/
```

It uses HackerNews's algorithm and only deals with counts, so the decay is really basic.

## Test

```
npm test
```