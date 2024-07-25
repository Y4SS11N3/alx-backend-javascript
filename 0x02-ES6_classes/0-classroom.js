export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number') {
      throw new TypeError('maxStudentsSize must be a number');
    }
    this._maxStudentsSize = maxStudentsSize;
  }
}
