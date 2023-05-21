
const linkedList_q = require('./linkedListWithTail')

class linkedListQueue {
    constructor() {
      this.list_q = new linkedList_q();
    }
  
    enqueue(value) {
      this.list_q.append(value);
    }
  
    dequeue() {
      return this.list_q.removeFromFront();
    }
  
    peak() {
      return this.list_q.head.value;
    }
  
    isEmpty() {
      return this.list_q.isEmpty();
    }
  
    getSize() {
      return this.list_q.getSize();
    }
  
    print() {
      return this.list_q.print();
    }
  }
  

  const l_queue = new linkedListQueue;

  console.log('is l_queue empty? ', l_queue.isEmpty());

  l_queue.enqueue(10)
  l_queue.enqueue(20)
  l_queue.enqueue(30)
  l_queue.enqueue(40)

  l_queue.print();

  console.log('dequeue: ', l_queue.dequeue());
  console.log('peak: ', l_queue.peak());
  l_queue.print()

