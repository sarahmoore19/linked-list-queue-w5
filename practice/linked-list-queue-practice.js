// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        if (this.head === null) {
          this.length = 0;
          this.sum = 0;
        }
        else {
          this.length = 1;
          this.sum = this.head.value;
        }

    }

    addToHead(val) {
        // Add node of val to head of linked list
        this.sum+= val;
        let newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
        // 0(1) time complexity because no matter the input the # of steps remain the same (constant)
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        this.sum+= newNode.value;

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    removeFromTail() {
        let curr = this.head;
        if (curr === null) return undefined;
        this.length--;

        if (curr.next === null) {
          this.head = null;
          this.sum = 0;
          return;
        }

        let prevTail = curr.next;
        while (curr.next.next !== null) {
            prevTail = curr.next.next;
            curr = curr.next;
        }
        curr.next = null;
        this.sum -= prevTail.value
        return prevTail;


        // 0(n) time complexity, has to iterate through entire list to remove a tail;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
        // 0(1) return this.length;
        let curr = this.head;
        if (!curr) return 0;
        let count = 1;
        while (curr.next) {
          count++;
          curr = curr.next;
        }
        return count;

        // Your code here
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        return this.sum;

        // 0(1)
    }

    averageValue() {
        // Returns the average value of all the nodes

        return this.sum / this.length;

        // 0(1);
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let curr = this.head;
        for (let i = 0; i < n; i++) {
          curr = curr.next;
          if (!curr) return null;
        }
        return curr;

        //
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        let mid = Math.ceil(this.length / 2)
        let curr = this.head;
        for (let i = 1; i < mid; i++) {
          curr = curr.next;
        }
        return curr;

        // 0(n)
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        let list2 = new SinglyLinkedList();
        let curr = this.head;
        for (let i = 0; i < this.length; i++) {
          list2.addToHead(curr.value)
          curr = curr.next;
        }
        return list2;
        // 0(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let num = this.length;
        let curr = this.head;

        for (let i = 0; i < num; i++) {
            this.addToHead(curr.value);
            curr = curr.next;
        }

        for (let i = 0; i < num; i++) {
            this.removeFromTail();
        }
        return this;

        // 0(n * n)
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.length = 0;
        this.head = head;
        this.tail = head;
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

    addToTail(val) {
        this.length++;
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
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

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        let mid = Math.ceil(this.length / 2)
        let curr = this.head;
        for (let i = 1; i < mid; i++) {
          curr = curr.next;
        }
        return curr;

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        let list2 = new DoublyLinkedList();
        let curr = this.head;
        for (let i = 0; i < this.length; i++) {
          list2.addToHead(curr.value)
          curr = curr.next;
        }
        return list2;

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let num = this.length;
        let curr = this.head;

        for (let i = 0; i < num; i++) {
            this.addToHead(curr.value);
            curr = curr.next;
        }

        for (let i = 0; i < num; i++) {
            this.removeFromTail();
        }
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

}
/*
let list = new SinglyLinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
console.log(list.reverseInPlace()); */
module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
