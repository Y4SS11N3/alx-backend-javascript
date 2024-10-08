import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const Species = Object.getPrototypeOf(this).constructor[Symbol.species] || Car;
    return new Species();
  }
}
