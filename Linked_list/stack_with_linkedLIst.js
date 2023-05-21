const linkedList_t = require("./linkedListWithTail");

class linkedListStack {
  constructor() {
    this.list_s = new linkedList_t();
  }

  push(value) {
    this.list_s.prepend(value);
  }

  pop() {
    return this.list_s.removeFromFront();
  }

  peak() {
    return this.list_s.head.value;
  }

  isEmpty() {
    return this.list_s.isEmpty();
  }

  getSize() {
    return this.list_s.getSize();
  }

  print() {
    return this.list_s.print();
  }
}

const l_stack = new linkedListStack();

console.log("is stack empty? ", l_stack.isEmpty());

l_stack.push(10);
l_stack.push(20);
l_stack.push(30);
l_stack.push(40);

l_stack.print()
console.log('peak: ', l_stack.peak());
console.log('poped: ', l_stack.pop());
l_stack.print()
