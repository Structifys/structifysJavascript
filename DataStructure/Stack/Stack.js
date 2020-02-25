/**
 * @author Javier Paez
 */
class Stack {
  constructor() {
    this.array = [];
  }

  /**
   *Pushes an item onto the top of this stack.
   *
   * @param {Number | String | Boolean} Element the element that you going to insert into stack
   */
  Push(item) {
    this.array.push(item);
  }

  /**
   * *Pop the element at the top of the stack
   *
   * @return top or -1 if the stack is empty
   */
  Pop() {
    return this.array.length == 0 ? -1 : this.array.pop();
  }

  /**
   * *Pop the element at the top of the stack
   *
   * @return top or -1 if the stack is empty
   */
  Peek() {
    if (this.Empty() == true) return -1;
    return this.array[this.array.length - 1];
  }

  /**
   * *remove the element at the top of the stack
   *
   * @return top
   */
  Size() {
    return this.array.length;
  }

  /**
   * *Check if the stack is empty.
   *
   * @return size
   */

  Empty() {
    return this.array.length == 0 ? true : false;
  }
}

module.exports = Stack;
