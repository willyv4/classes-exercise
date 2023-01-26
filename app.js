class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "beep";
  }
  toString() {
    return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM VROOOM";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(addedVehicle) {
    if (!(addedVehicle instanceof Vehicle)) {
      return "Only Vehicles are allowed in here";
    }
    if (this.vehicles.length >= this.capacity) {
      return "sorry we are full";
    }
    this.vehicles.push(addedVehicle);
    return "Vehicle added";
  }
}
