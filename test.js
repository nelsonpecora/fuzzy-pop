'use strict';
var fp = require('./index'),
  expect = require('chai').expect,
  _ = require('lodash');

describe('Fuzzy Pop', function () {
  it('should throw error if no second arg passed through', function () {
    expect(fp).to.throw(Error);
  });

  it('should throw error if array objects don\'t have required properties', function () {
    expect(fp).to.throw(Error);
  });

  it('should throw error if first arg isn\'t string', function () {
    expect(fp).to.throw(Error);
  });

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

    expect(_.pluck(filtered, 'value')).to.eql(expectedArr);
  });
});