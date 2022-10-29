// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        let newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
        // 0(1) time complexity because no matter the input the # of steps remain the same (constant)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        this.length++;
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = newNode;

        return this;

        // o(n) time complexity bc it needs to iterate through the entire list
    }

    removeFromHead() {
        // Remove node at head

        let curr = this.head;
        if (curr === null) return undefined;

        this.head = curr.next;
        this.length--;
        return curr;

        // 0(1) time complexity method is constant regardless of length of list
    }

    removeFromTail() {
        let curr = this.head;
        if (curr === null) return undefined;
        this.length--;

        if (curr.next === null) {
          this.head = null;
          return;
        }

        let prevTail = curr.next;
        while (curr.next.next !== null) {
            prevTail = curr.next.next;
            curr = curr.next;
        }
        curr.next = null;
        return prevTail;


        // 0(n) time complexity, has to iterate through entire list to remove a tail;
    }

    peekAtHead() {
        // Return the value of head node

        if (this.head === null) return undefined;
        return this.head.value;
        // 0(1) time complexity, constant regardless of length
    }

    print() {
        // Print out the linked list
        let curr = this.head;
        while (curr !== null) {
            console.log(curr.value)
            curr = curr.next;
        }

        // 0(n), has to iterate through entire list to print values;
    }
}


module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
