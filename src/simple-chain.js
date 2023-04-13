const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arr: [],
  getLength() {
      return this.arr.length;
  },
  addLink(value) {
      if (arguments.length == 0) {
          this.arr.push(`(  )`);
      } else {
          this.arr.push(`( ${value} )`);
      }
      return this
  },
  removeLink(value) {
      if ((typeof value === 'number') && (value > 0) && (value < this.arr.length)) {
          this.arr.splice(value - 1, 1);
      } else {
          this.arr = [];
          throw new Error("You can't remove incorrect link!");
      }
      return this;
  },
  reverseChain() {
      this.arr.reverse();
      return this;
  },
  finishChain() {
      let result = this.arr.join('~~');
      this.arr = [];
      return result;
  },

};


module.exports = {
  chainMaker
};
