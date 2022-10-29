// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // 0(1) no iteration necessary, constant
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        if (!this.length) return this.addToHead(val);
        this.length++;
        let newNode = new DoublyLinkedNode(val);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        // 0(1)
    }

    removeFromHead() {
        // Remove node at head

        if (!this.head) return undefined;
        this.length--;
        let returnValue = this.head.value;

        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }

        else {
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        }
        return returnValue;

        // 0(1)
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.length) return undefined;
        this.length--;
        let rVal = this.tail.value;

        if (this.length === 0) {
          this.head = null;
           this.tail = null;
        }

        else {
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        }
        return rVal;
        // 0(1);
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return undefined;
        return this.head.value;

        // 0(1) constant
    }

    peekAtTail() {
        // Return value of tail node

        if (!this.length) return undefined;
        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
    }
}

let list = new DoublyLinkedList();
list.addToHead('B');
list.addToHead('A');
list.removeFromHead();
console.log(list);

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
