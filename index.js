class Stack {
  #list = [];
  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }
  push(item) {
    this.#list.push(item);
  }
  pop() {
    return this.#list.pop()
  }
  peek() {
    return this.#list[this.#list.length -1];
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
    return this.#list.push(item);
  }
  dequeue() {
    return this.#list.shift();
  }
  get hasNext() {
      return this.#list.length > 0;
  }
}
const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'


module.exports = { Stack, Queue };
