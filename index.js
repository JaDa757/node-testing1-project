/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 */
function trimProperties(obj) {
  const trimmedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      trimmedObj[key] = obj[key].trim();
    }
  }
  return trimmedObj;
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 */
function trimPropertiesMutation(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      obj[key] = obj[key].trim();
    }
  }
  return obj;
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 */
function findLargestInteger(integers) {
  let maxInteger = -Infinity;
  for (const obj of integers) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, 'integer') && typeof obj.integer === 'number') {
      maxInteger = Math.max(maxInteger, obj.integer);
    }
  }
  return maxInteger;
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    this.count = initialNumber;
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   */
  countDown() {
    const currentCount = this.count;
    this.count = Math.max(0, this.count - 1);
    return currentCount;
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring'];
    this.currentSeasonIndex = 0;
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   */
  next() {
    const nextSeason = this.seasons[this.currentSeasonIndex];
    this.currentSeasonIndex = (this.currentSeasonIndex + 1) % this.seasons.length;
    return nextSeason;
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.name = name;
    this.odometer = 0;
    this.tank = tankSize;
    this.mpg = mpg;
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   */
  drive(distance) {
    const maxDistance = this.tank * this.mpg;
    const actualDistance = Math.min(distance, maxDistance);
    this.odometer += actualDistance;
    this.tank -= actualDistance / this.mpg;
    return this.odometer;
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   */
  refuel(gallons) {
    const remainingSpace = 20 - this.tank; // Assuming the tank capacity is 20 gallons
    const actualGallons = Math.min(gallons, remainingSpace);
    this.tank += actualGallons;
    return this.tank * this.mpg;
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {Promise} - resolves true if number even, false otherwise
 */
function isEvenNumberAsync(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number % 2 === 0);
    }, 0);
  });
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
};
