export class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null
  constructor(value: T, next?: LinkedListNode<T> | null) {
    this.value = value;
    this.next = (next === undefined ? null : next);
  }
}

interface LinkedListType<T> {
  prepend: (element: T) => void,
  append: (element: T) => void,
  addByIndex: (element: T, index: number) => void,
  deleteByIndex: (index: number) => void,
  deleteHead: () => void,
  deleteTail: () => void,
  toArray: () => T[] | undefined,
}

export class LinkedList<T> implements LinkedListType<T> {
  private head: LinkedListNode<T> | null;
  private size: number;
  constructor(initialArray: T[]) {
    this.head = null;
    this.size = 0;
    initialArray.forEach(element => this.append(element))
  }

  addByIndex(element: T, index: number) {
    if (index < 0 || index > this.size) {
      console.log('Enter a valid index');
      return;
    } else {
      const node = new LinkedListNode(element);

      // добавить элемент в начало списка
      if (index === 0) {
        // ваш код ...
      } else {
        let curr = this.head;
        let currIndex = 0;

        // перебрать элементы в списке до нужной позиции
        // ваш код ...

        // добавить элемент
        // ваш код ...
      }

      this.size++;
    }
  }

  deleteByIndex(index: number) {
    
  }

  append(element: T) {
    const node = new LinkedListNode(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  prepend(element: T) {
    const node = new LinkedListNode(element);

    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++;
  }

  deleteHead = () => {
    if (this.head === null) {
      return
    } 
    if (this.head.next) {
      let current = this.head.next
      this.head.next = null
      this.head = current
      this.size--
      return
    }
    this.head = null
    this.size--
  }

  deleteTail = () => {
    if (this.head === null) {
      return
    } 
    if(this.getSize() === 1) {
      this.deleteHead()
      this.size--
      return
    }
    if(this.getSize() === 2) {
      this.head.next = null
      this.size--
      return
    }
    let count = this.getSize() - 2
    let current = this.head
    while (current.next && count > 0) {
      current = current.next
      count--
    }
    current.next = null
    this.size--
  }

  toArray = () => {
    if (this.head === null) {
      return []
    }
    let array = []
    let current = this.head
    array.push(current.value)
    while (current.next) {
      array.push(current.next.value)
      current = current.next;
    }
    return array
  }

  getSize() {
    return this.size;
  }

  // print() {
  //   let curr = this.head;
  //   let res = '';
  //   while (curr) {
  //     res += `${curr.value} `;
  //     curr = curr.next;
  //   }
  //   console.log(res);
  // }
}