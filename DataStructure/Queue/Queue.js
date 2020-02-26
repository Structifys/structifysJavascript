/**
 * *Queue implementation
 * @author Javier Paez
 */

class Queue {
  constructor() {
    this.array = [];
  }

  /**
   ** Inserts the specified element into this queue if it is possible to do so
   ** immediately without violating capacity restrictions, returning true upon
   ** success and throwing an IllegalStateException if no space is currently
   ** available.
   *
   * @param {Number | String | Boolean}item - parameters of the method
   *
   */
  enQueue(item) {
    this.array.push(item);
  }

  /**
   * *Return the length  of the queue
   *
   * @return size
   */
  size() {
    return this.array.length;
  }

  /**
   ** Retrieves and removes the head of this queue.
   *
   * @return head of the queue or -1 if it is empty
   */
  deQueue() {
    return this.size() == 0 ? -1 : this.array.shift();
  }

  /**
   * *Retrieves, but does not remove, the head of this queue, or returns null if
   * *this queue is empty.
   *
   * @return head of the queue or -1 if it is empty
   */
  peek() {
    return this.size() == 0 ? -1 : this.array[0];
  }

  /**
   * *Retrieves and removes the head of this queue, or returns null if this queue
   * *is empty.
   *
   * @return head of the queue or -1 if queue is empty
   */
  poll() {
    return this.size() == 0 ? -1 : this.array.shift();
  }
}

module.exports = Queue;
