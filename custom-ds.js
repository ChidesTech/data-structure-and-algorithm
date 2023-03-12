// Stack
class Stack{
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    print(){
        return this.items;
    }
}

const stack = new Stack();


//Queue
class Queue{
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueque(item){
      this.items[this.rear] = item;
      this.rear++;
      
    }

    dequeue(){
     const item = this.items[this.front];
     delete this.items[this.front];
     this.front++
     return item;
     
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    peek(){
        return this.items[this.front];
    }
    
    size(){
        return this.rear - this.front;
    }

    print(){
        console.log(this.items);
    }
}

const queue = new Queue;

queue.enqueque("franco");
queue.enqueque("desmond");
queue.enqueque("benjamin");
queue.dequeue();
queue.print();


//Circular Queue
class CircularQueue{
    constructor(maxSize){
        this.items = {};
        this.rear = 0;
        this.front = 0;
        this.size = maxSize;
        this.maxSize = maxSize;
    }


    enqueque(item){
        if(this.size === 0){
            console.log("Queue limit reached")
            return;
        }
        this.items[this.rear] = item;
        this.rear++;
        this.size--;
    }

    dequeue(){
        if(this.size === this.maxSize ){
            console.log("No Item To Remove From Queue")
            return;
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        this.size++;
        return item;
    }

    print(){
        console.log(this.items);
    }
}


const circularQueue = new CircularQueue(5);

circularQueue.enqueque("a");
circularQueue.enqueque("b");
circularQueue.enqueque("c");
circularQueue.enqueque("d");
circularQueue.enqueque("e");
circularQueue.dequeue();
circularQueue.print();
