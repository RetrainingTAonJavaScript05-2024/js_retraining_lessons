// >>>>>>>>>>>>>>>Regular Ball Super Ball
console.log("Regular Ball Super Ball")
class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}

ball1 = new Ball();
ball2 = new Ball("super");
console.log(ball1.ballType)
console.log(ball2.ballType)

// >>>>>>>>>>>>>>>Color Ghost
console.log("Color Ghost")
class Ghost{
    constructor(){
        this.colors = ['white', 'yellow', 'purple', 'red']
    }

    get color(){
        let randomIndex = Math.floor(Math.random() * this.colors.length);
        return this.colors[randomIndex];
    }
}

ghost = new Ghost();
console.log(ghost.color)

// >>>>>>>>>>>>>>>Basic subclasses - Adam and Eve
console.log("Basic subclasses - Adam and Eve")
class God{
    /**
     * @returns Human[]
     */
    static create(){
        return [new Man, new Woman()]
    }
}

class Human{
    constructor(){}
}

class Man extends Human{
    constructor(){
        super();}
}

class Woman extends Human{
    constructor(){
        super();}
}

humans = God.create()
console.log("Is Adam a Man?")
console.log(humans[0] instanceof Man)
console.log("Is Eva a Woman?")
console.log(humans[1] instanceof Woman)

// >>>>>>>>>>>>>>>Classy Classes
console.log("Classy Classes")

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info(){
        return `${this.name}s age is ${this.age}`;
    }
}

console.log(new Person("Alona", 35).info)