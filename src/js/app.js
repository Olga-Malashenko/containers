// let errorList = new Map();

export default class ErrorRepository {
  constructor() {
    this.list = new Map([
      [1, 'First error'],
      [2, 'Second error'],
      [3, 'Third error'],
    ]);
  }

  translate(code) {
    if (this.list.has(code)) {
      return this.list.get(code);
    }
    return 'Unknown error';
  }
}
