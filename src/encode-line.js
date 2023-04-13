const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = [];
  let sum = 0;
  // const m = /(.).*\1/.test(str);
  for (let i = 0; i < Array.from(str).length; i++) {
      if (Array.from(str)[i] === Array.from(str)[i + 1]) {
          sum += 1;
      }
      else if (Array.from(str)[i] !== Array.from(str)[i + 1]) {
          arr.push(`${sum + 1}${Array.from(str)[i]}`)
          sum = 0;

      }
  }
  // удаляю единицу
  return arr.join('').split('').filter((e) => e !== '1').join('');
}

module.exports = {
  encodeLine
};
