interface StackClassType<T> {
  push: (item: T) => void;
  pop: () => void;
  clear: () => void;
  getTop: () => number;
  getElements: () => Array<T | undefined>;
  getSize: () => number;
}

export class Stack<T> implements StackClassType<T> {
  private elements: (T | undefined)[] = [];
  private top = -1;

  constructor() {
      this.elements = [];
  }

  push = (string: T) => {
    if(!string) {
      return
    }
    this.elements.push(string)
    this.top++
  };

  pop = () => {
    if(this.top < 0){
      return
    }
    this.elements.pop()
    this.top--
  };

  clear = () => {
    this.elements = []
    this.top = -1
  };

  getTop = () => this.top

  getElements = () => this.elements

  getSize = () => this.elements.length

}