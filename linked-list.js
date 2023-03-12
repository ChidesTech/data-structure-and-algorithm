class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;


    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size++;
    }

    insert(value, index) {
        const node = new Node(value);
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            let i = 0;
            let current = this.head;
            while (current) {
                if (i === index - 1) {
                    node.next = current.next
                    current.next = node;
                }

                current = current.next;
                i++;
            }
        }
        this.size++;
    }

    remove(index) {
        let current = this.head;
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = current.next;

        }

        let i = 0;
        while (current) {

            if (i === index - 1) {
                removedNode = current.next;
                current.next = removedNode.next;
                if(removedNode.value === this.tail.value){
                    this.tail = current;
                }
            }
            current = current.next;
            i++
        }
        this.size--;
        return removedNode.value;

    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        let current = this.head;
        if (current.value === value) {
            this.head = current.next;
            this.size--;
            return current.value;
        }
        let removedNode;
        let i = 0;
        while (current) {
            if (current.next === null) {
                return null;
            } else if (current.next.value === value) {
                removedNode = current.next;
                current.next = removedNode.next;
                if(removedNode.value === this.tail.value){
                    this.tail = current;
                }
                return removedNode.value;

            }
            current = current.next;
        }
        this.size--;
    }

    removeFromFront() {
        console.log(this.tail);
        if(this.isEmpty()){
            return null;
        }
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }
        let head = this.head;
        this.head = head.next;
        head.next = null;
        this.size--;
        return head.value;
    }

    removeFromEnd() {
        let current = this.head;
        if(this.isEmpty()){
            return null;
        }
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }
        while (current) {
            if(current.next === this.tail) {
                let tail = this.tail;
                this.tail = current; 
                current.next = null;          
                this.size--;
                return tail.value;
            }
            current = current.next;
        }



    }

    search(value) {
        if (this.isEmpty()) {

            return { index: -1, value };
        }

        let current = this.head;
        let index = -1;
        let i = 0;
        while (current) {
            if (current.value === value) {
                index = i;
            }

            current = current.next;
            i++;
        }
        return { index, value };
    }

    reverse() {
        if (this.isEmpty()) {
            return;
        }

        let prev = null;
        let current = this.head

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;



    }




    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}



// TESTS
// const list = new LinkedList();
// list.prepend("Apple");
// list.prepend("Ball");
// list.prepend("Cat");
// list.prepend("Dog");
// list.prepend("Elephant");
// list.append("Fish");
// list.append("Goat");
// list.append("House");
// list.append("Ice Cream");
// list.insert("Zeddicus", 2);
// console.log(list.remove(2) + " removed");
// console.log(list.remove(4) + " removed");
// // console.log(list.removeValue("Ice Cream") + " value removed");
// list.print();
// console.log(list.search("Fish").value + " is at index " + list.search("Fish").index);
// // list.reverse();
// // console.log(list.removeFromFront() + " removed from front");
// console.log(list.removeFromEnd() + " removed from end");
// list.print();



// LINKEDLIST STACK
class LinkedListStack{
    constructor(){
        this.list = new LinkedList();
    }


    push(value){
        this.list.append(value);
    }
    pop(){
        this.list.removeFromEnd();
    }
    print(){
        this.list.print()
    }
}


const stack = new LinkedListStack();

console.log("=== LinkedList Stack ===");
stack.push(10);
stack.push(15);
stack.push(20);
stack.push(25);
stack.print();
console.log("=======")
stack.pop();
stack.pop();
stack.print();
console.log("=== LinkedList Stack ===");



//LinkedList Queue
class LinkedListQueue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        this.list.removeFromFront();
    }

    print(){
        this.list.print();
    }
}


const queue = new LinkedListQueue();
queue.enqueque(10);
queue.enqueque(15);
queue.enqueque(20);
queue.enqueque(25);
queue.enqueque(30);
queue.print();
console.log("======");
