'use strict';

/**
 * Gets number of occurrences of character
 * or substring in larger string.
 * @param {string} substr - substring or character to count
 * @param {string} str - string to find substr in
 * @return {number}
 */
module.exports = function(substr, str) {
    return str.split(substr).length - 1;
};