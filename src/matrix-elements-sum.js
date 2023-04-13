const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  matrix = matrix[0].map((item, i) => matrix.map((row) => row[i]));
  let sum = 0;
  outer: for (let i = 0; i < matrix.length; i++) {
      inter: for (let j = 0; j < matrix[i].length; j++)
          if (matrix[i][j] === 0) {
              break inter
          }
          else sum += matrix[i][j];
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
