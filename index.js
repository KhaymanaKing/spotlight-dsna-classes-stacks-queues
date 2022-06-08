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
  reverse(){
    let output =[];
    for(let i = 0; i < this.#list.length; i++){
        output.push(this.#list.length -i)
    }
    return output;
  }
}


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



module.exports = { Stack, Queue };
