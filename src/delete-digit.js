const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let result = []
  arr.forEach((e, i, arr) => {
    if (arr[i] < arr[i + 1]) {
      i = i + 1;
    }
    else result.push(arr[i])
  })
  if (result[result.length - 1] === '0') {
    result = result.slice(0, -1);
  }
  return +result.join('');

}
module.exports = {
  deleteDigit
};
