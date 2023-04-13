const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  if (options.addition === false || options.addition === null) {
    options.addition = String(options.addition);
  }
  let addition = options.addition ? options.addition : '';
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  // addition = String(addition);
  let additionResult = [];
  let strResult = [];

  for (i = 0; i < additionRepeatTimes; i++) {
    additionResult.push(`${addition}`);
    additionResult.push(`${additionSeparator}`);
  }


  for (i = 0; i < repeatTimes; i++) {
    strResult.push(`${str}`);
    strResult.push(`${additionResult.slice(0, additionResult.length - 1).join('')}`);
    strResult.push(`${separator}`);
  }


  // console.log(additionResult)
  return strResult.slice(0, strResult.length - 1).join('')

}

module.exports = {
  repeater
};
