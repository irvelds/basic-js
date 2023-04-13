const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const obj = {};
  let arr = []
  domains.forEach(e => {
      Array.from(e);
      arr.push(e.split('.').reverse())
  })
  arr.forEach(e => {
      let temp = '';
      for (i = 0; i < e.length - 1; i++) {

          if (i == 0) {
              temp = '.' + e[i];
              if (typeof obj[temp] !== 'undefined') {
                  obj[temp] += 1;
              }
              else {
                  obj[temp] = 1;
              }
          }

          temp = temp + '.' + e[i + 1]

          if (typeof obj[temp] !== 'undefined') {
              obj[temp] += 1;
          }
          else {
              obj[temp] = 1;
          }
      }
  })


  return obj


}

module.exports = {
  getDNSStats
};
