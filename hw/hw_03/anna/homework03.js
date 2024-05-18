"use strict";
//---------01-Regular Ball Super Ball-----------
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

//---------02-Color Ghost-----------
class Ghost {
  constructor() {
    this.colors = ["white", "yellow", "purple", "red"];
  }
  get color() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}

//---------03-Basic-subclasses-Adam-and-Eve-----------
class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man(), new Woman()];
  }
}

class Human {}
class Man extends Human {}
class Woman extends Human {}

//---------04-Classy-classes-----------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

//---------05-Building Spheres-----------

//---------06-Dynamic Classes-----------
