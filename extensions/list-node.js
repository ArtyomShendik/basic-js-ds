class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }

  setNext(nextItem) {
    this.next = nextItem;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }
}

module.exports = {
  ListNode
};
