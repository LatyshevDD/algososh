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
  private head = 0;
  private tail = 0;
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
    this.elements[this.tail] = string
    this.tail++ 
    this.length++
  };

  dequeue = () => {

  };

  getHead = () => {
    return this.head
  };

  getTail = () => {
    return this.tail
  }

  clear = () => {

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