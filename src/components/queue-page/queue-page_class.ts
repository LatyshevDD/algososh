interface QueueClassType<T> {
  enqueue: (item: T) => void;
  dequeue: () => void;
  getHead: () => number;
  getTail: () => number;
  clear: () => void;
  isEmpty: () => boolean;
  // getSize: () => number;
  getElements: () => Array<T | undefined>;
}

export class Queue<T> implements QueueClassType<T> {
  private elements: (T | undefined)[] = [];
  private head = -1;
  private tail = -1;
  private size: number = 0;
  private length: number = 0;

  constructor(size: number = 7) {
      this.size = size;
      this.elements = new Array(size);
  }

  enqueue = (string: T) => {
    if(!string) {
      return
    }
    if(this.length >= this.size) {
      throw new Error('Достигнуто максимальное количество элементов массива')
    }
    this.tail++ 
    if(this.length === 0){
      this.head++
    }
    this.elements[this.tail] = string
    this.length++
  };

  dequeue = () => {
    if(this.length === 0) {
      return
    }
    if(this.head >= this.tail){
      this.elements[this.head] = undefined
      this.head = -1
      this.tail = -1
      this.length--
      return 
    }
    this.elements[this.head] = undefined
    this.head++
    this.length--
  };

  getHead = () => {
    return this.head
  };

  getTail = () => {
    return this.tail
  }

  clear = () => {
    this.head = -1
    this.tail = -1
    this.length = 0
    this.elements = new Array(this.size)
  }

  // getSize = () => {
  //   return this.size
  // }

  getElements = () => {
    return [...this.elements]
  }

  isEmpty = () => {
    return this.length < 1
  }
}