'use strict';
var f = require('fuzzy').filter,
  hn = require('decay').hackerHot(),
  _ = require('lodash');

/**
 * fuzzy match an input string in an array of items
 * return the matching items in order of popularity
 * @param  {string} input
 * @param  {array} items array of objects w/ { value: string, count: number, latest: date }
 * @return {array}       array of the matched objects
 */
module.exports = function (input, items) {
  var scores, filtered, weighted;

  // first, calculate the scores using the hackernews algorithm
  // todo: memoize this?
  scores = _.map(items, function (item) {
    item.score = hn(item.count, item.latest);
    return item;
  });

  // then, filter the array with fuzzy matching
  filtered = _.map(f(input, scores, { extract: function (item) { return item.value; }}), 'original');

  // finally, sort by the popularity
  weighted = _.orderBy(filtered, 'score', 'desc');

  return weighted;
};
