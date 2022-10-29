const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        if (this.length === 0) {
          this.tail = newNode;
          this.head = newNode;
        }
        else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        this.length++;
        return this.length;
        // 0(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        if (this.length === 0) return null;

        let rVal = this.head.value;
        if (this.length === 1) {
          this.head = null;
          this.tail = null;
        }
        else {
        this.head = this.head.next;
        }
        this.length--;
        return rVal;
        // 0(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
