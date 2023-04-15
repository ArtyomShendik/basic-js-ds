const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null;
  last = null;

  getUnderlyingList() {
    return { value: this.head.value, next: this.head.next };
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.head === null) {
      this.head = node;
      this.last = node;
    } else {
      this.last.setNext(node);
      this.last = node;
    }
  }

  dequeue() {
    const first = this.head;
    this.head = first.getNext();
    return first.value;
  }
}

module.exports = {
  Queue
};
