class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.length + 1;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('OutOfBounds');
    } else {
      const newArr = this.items;
      newArr.sort((a, b) => {
        return a - b;
      });
      return newArr[newArr.length - 1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const newArr = this.items;
      newArr.sort((a, b) => {
        return a - b;
      });
      return newArr[0];
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, cur) => {
        return acc + cur;
      });
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
