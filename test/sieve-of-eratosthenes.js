/* eslint no-undef: 0 */

const assert = require('assert');
const sieveOfEratosthenes = require('../sieve-of-eratosthenes/sieve-of-eratosthenes');

describe('Sieve of Eratosthenes', () => {
  it('should return all prime numbers', () => {
    assert.deepEqual(sieveOfEratosthenes(30), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    assert.deepEqual(sieveOfEratosthenes(2), [2]);
  });

  it('should return error for maxNum <= 1', () => {
    assert.throws(() => sieveOfEratosthenes(1), Error);
  });
});
