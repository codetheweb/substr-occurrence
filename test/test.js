'use strict';

var expect = require('chai').expect;
const occurrence = require('../index');

describe('#occurrence', function() {
    it('should count 0 when no matches', function() {
        var result = occurrence('s', 'fall');
        expect(result).to.equal(0);
    });

    it('should count 1 when 1 match', function() {
        var result = occurrence('a', 'fall');
        expect(result).to.equal(1);
    });

    it('should count 2 when 2 matches', function() {
        var result = occurrence('a', 'faall');
        expect(result).to.equal(2);
    });

    it('should count 1 when 1 match', function() {
        var result = occurrence('all', 'fall');
        expect(result).to.equal(1);
    });

    it('should count 1 when 1 match', function() {
        var result = occurrence('fall', 'fall');
        expect(result).to.equal(1);
    });

    it('should count 0 when substr is larger than str', function() {
        var result = occurrence('all', 'f');
        expect(result).to.equal(0);
    });
});