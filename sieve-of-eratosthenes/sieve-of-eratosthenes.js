/**
 * Returns all prime numbers up to a given limit.
 *
 * @param {Number} maxNum - Number to which we want to find all prime numbers where maxNum > 1
 * @returns {(Number[]} - All prime numbers n where 2 <= n <= maxNum
 */
function sieveOfEratosthenes(maxNum) {
  if (maxNum <= 1) {
    throw new Error('maxNum has to be greater than 1');
  }

  const primes = new Array(maxNum + 1);
  primes.fill(true, 2);

  for (let i = 2; i <= Math.sqrt(maxNum); i += 1) {
    if (primes[i]) {
      for (let j = i * i; j <= maxNum; j += i) {
        primes[j] = false;
      }
    }
  }

  const result = [];
  primes.forEach((prime, index) => {
    if (prime) {
      result.push(index);
    }
  });

  return result;
}

module.exports = sieveOfEratosthenes;
