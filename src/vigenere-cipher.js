const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(typeOfMachine = true) {
    this.typeOfMachine = typeOfMachine;
  }
  encrypt(string, key) {
    if (arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error('Incorrect arguments!')
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const objA = {}
    for (let i = 0; i < alphabet.length; i++) {
      objA[alphabet[i]] = i
    }

    key = (key.repeat(string.length).slice(0, string.length)).toUpperCase();// добавляем до ключа

    string = [...string.toUpperCase()]
    let result = ''

    for (let i = 0; i < string.length; i++) {
      if (!alphabet.includes(string[i])) {
        key = `${key.slice(0, i)}\s${key.slice(i)}`;
        result += string[i]
      }
      else {
        // result += alphabet[(alphabet.indexOf(string[i]) + alphabet.indexOf(key[i])) % 26];
        result += alphabet[(objA[string[i]] + objA[key[i]]) % 26] //по модулю
      }
    }

    return this.typeOfMachine ? result : result.split('').reverse().join('');
  }


  decrypt(string, key) {
    if (arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error('Incorrect arguments!')
    }
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const objA = {}
    for (let i = 0; i < alphabet.length; i++) {
      objA[alphabet[i]] = i
    }

    key = (key.repeat(string.length).slice(0, string.length)).toUpperCase();// добавляем до ключа

    string = [...string.toUpperCase()]
    let result = ''

    for (let i = 0; i < string.length; i++) {
      if (!alphabet.includes(string[i])) {
        key = `${key.slice(0, i)}\s${key.slice(i)}`;
        result += string[i]
      }
      else {
        result += alphabet[(objA[string[i]] - objA[key[i]] + 26) % 26]
      }
    }

    return this.typeOfMachine ? result : result.split('').reverse().join('');
  }

}



module.exports = {
  VigenereCipheringMachine
};
