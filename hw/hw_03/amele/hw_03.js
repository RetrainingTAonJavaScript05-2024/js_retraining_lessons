// 01 - Regular Ball Super Ball
class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}

ball1 = new Ball();
ball2 = new Ball("super");
console.log(ball1.ballType)
console.log(ball2.ballType)

// 02 - Color Ghost
var Ghost = function() {
    var colors = ["white", "yellow", "purple", "red"];
    var colorIndex = Math.floor(Math.random() * (colors.length));
    this.color = colors[colorIndex];
  }
ghost = new Ghost();
console.log(ghost.color)

// 03 - Basic subclasses - Adam and Eve
class God{
    /**
     * @returns Human[]
     */
    static create(){
        return [new Man, new Woman()]
    }
}

class Human{}
class Man extends Human{}
class Woman extends Human{}

humans = God.create()
console.log("Is Adam a Man?")
console.log(humans[0] instanceof Man)
console.log("Is Eva a Woman?")
console.log(humans[1] instanceof Woman)

// 04 - Classy Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info(){
        return `${this.name}s age is ${this.age}`;
    }
}
console.log(new Person("Artem", 18).info)

// 05 - Building Spheres 
class Sphere {
    constructor(radius, mass) {
        this.radius = radius;
        this.mass = mass;
    }

    get_radius() {
        return this.radius;
    }

    get_mass() {
        return this.mass;
    }

    get_volume() {
        // Volume of a sphere = (4/3) * π * r^3
        return parseFloat((4 / 3 * Math.PI * Math.pow(this.radius, 3)).toFixed(5));
    }

    get_surface_area() {
        // Surface area of a sphere = 4 * π * r^2
        return parseFloat((4 * Math.PI * Math.pow(this.radius, 2)).toFixed(5));
    }

    get_density() {
        // Density = mass / volume
        return parseFloat((this.mass / this.get_volume()).toFixed(5));
    }
}
const sphere = new Sphere(5, 50);
console.log('Radius:', sphere.get_radius());
console.log('Mass:', sphere.get_mass());
console.log('Volume:', sphere.get_volume());
console.log('Surface Area:', sphere.get_surface_area());
console.log('Density:', sphere.get_density());

// 06 - 