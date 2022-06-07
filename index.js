class Stack {
  #list = [];
  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }
  push(item) {
    this.#list.push(item);
  }
  pop() {
    const last = this.#list.slice(-1);
    this.#list.pop();
    return last[0];
  }
  peek() {
    return this.#list.slice(-1)[0];
  }
}

// const stack = new Stack();
// stack.push('fox');
// stack.push('goose');
// stack.push('lizard');
// console.log(stack.pop()); // 'lizard'
// console.log(stack.peek()); // 'goose'
// console.log(stack.pop()); // 'goose'
// stack.push('llama');
// console.log(stack.pop()); // 'llama'
// console.log(stack.peek()); // 'fox'
// console.log(stack.pop()); // 'fox'
// console.log(stack.pop()); // null

class Queue {
  #list = [];
  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }
  enqueue(item) {
    this.#list.push(item);
    // return this.#list.toString();
  }
  dequeue() {
    const first = this.#list.slice[0];
    return first;
  }
}
const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'


module.exports = { Stack, Queue };
