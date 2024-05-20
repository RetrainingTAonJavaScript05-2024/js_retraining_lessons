// == Color Ghost ==
// === HW1 ===
class Ghost {
    constructor() {
        const colors = ["white", "yellow", "purple", "red"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

}
ghost = new Ghost();
console.log('HW1:', ghost.color) //=> "white" or "yellow" or "purple" or "red"

// == Regular Ball Super Ball ==
// === HW2 ===
class Ball {
    constructor(ballType = 'regular') {
        this.ballType = ballType;
    }
}

ball1 = new Ball();
ball2 = new Ball("super");

console.log('HW2:', ball1.ballType)  //=> "regular"
console.log('HW2:', ball2.ballType)  //=> "super"

// == Basic subclasses - Adam and Eve ==
// === HW3 ===
class Human {
    constructor(name) {
        this.name = name || undefined;
    }
}
class Man extends Human {}
class Woman extends Human {}
class God {
    static create() {
        return [new Man('Adam'), new Woman('Eva')]
    }
}
// code
let humans = God.create()
console.log('HW3:', humans)

// == Classy Classes ==
// === HW4 ===
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    get info() {
        return `${this.name}s age is ${this.age}`;
    }
}
let john = new Person('john', 34)
console.log('HW4:', john.info)