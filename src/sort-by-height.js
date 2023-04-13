const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
          newarr.push(arr[i]);
          newarr.sort((a,b) => a-b);
      }
  }
  if (newarr.length === arr.length) {
      return newarr;
  }
  else {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] !== -1) {
              arr[i] = newarr[0];
              newarr.shift()
       }
      }
      return arr
  }

}

module.exports = {
  sortByHeight
};
