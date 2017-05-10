'use strict';
var fp = require('./index'),
  expect = require('chai').expect,
  _ = require('lodash');

describe('Fuzzy Pop', function () {
  it('should find a string in an array', function () {
    var input = 'foo',
      arr = [{
        value: 'foo',
        count: 1,
        latest: new Date()
      }, {
        value: 'foobar',
        count: 2,
        latest: new Date()
      }],
      filtered = fp(input, arr),
      expectedArr = ['foobar', 'foo'];

    expect(_.map(filtered, 'value')).to.eql(expectedArr);
  });

  it('should decay things', function () {
    var input = 'foo',
      arr = [{
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
      }],
      filtered = fp(input, arr),
      expectedArr = ['foobar', 'foo', 'foobarbaz'];

    expect(_.map(filtered, 'value')).to.eql(expectedArr);
  });
});
