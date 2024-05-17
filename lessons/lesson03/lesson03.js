// "use strict"

// let employee = {
//     firstName: "Peter",
//     "last Name": "Peterson",
//     position: "developer",
//     1 : 4,
//     fullName: function(){
//         return this.firstName + " " + this["last Name"];
//     }

// }

// console.log(employee);
// console.log(employee[1]);
// console.log(employee.position);
// let arg = 1;
// console.log(employee[arg]);
// employee.age = 35;
// employee.firstName = "Liubomyr";

// employee["extra salary"] = 500;

// console.log(employee)
// console.log(employee.fullName())
// console.log(employee.fullName)

// function print() {
//     console.log(this)
//     console.log(this.firstName + this["last Name"]+" "+ this.position)
// }

// employee.prt = print;
// employee.prt()

// this.firstName = "10"
// print()


// let a = this;
// console.log(a);


// function userFunction() {
//     return this; // Window
//     }

// console.log(userFunction())

// "use strict"

// function userFunction() {
//     return this; // Window
// }

// console.log(userFunction())



// function Employee(firstName, lastName, position) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.position = position;

//     this.fullName = function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// function Employee2(firstName, lastName, position) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.position = position;

//     this.fullName = function () {
//         return this.firstName + " " + this.lastName;
//     }
//     this.fullNamePosition = function () {
//         return this.firstName + " " + this.lastName+ " " + this.position;
//     }
// }



// let devPeterPeterson = new Employee("Peter", "Peterson", "dev");
// let testerJohnJohnson = new Employee("John", "Johnson", "tester");
// users = [devPeterPeterson, new Employee2("John2", "Johnson2", "AT"), devPeterPeterson]
// console.log(devPeterPeterson.fullName())
// console.log(testerJohnJohnson.fullName())
// console.log(typeof testerJohnJohnson)
// console.log(users)
// for (user of users){
//     console.log(user)
//     if (user.hasOwnProperty("fullNamePosition")){
//         user.fullNamePosition();
//     } else {
//         user.fullName()
//     }
// }


class Employee3 {
    static count = 0; 

    constructor(firstName=undefined, lastName=undefined, position=undefined){
        this.firstName = firstName;
        this._lastName = lastName;
        this.__position = position;

        Employee3.count++;
    }

    fullName() {
        return this.firstName + " " + this._lastName;
    }
    fullNamePosition() {
        return this.firstName + " " + this._lastName+ " " + this.__position;
    }
    static print(){
        console.log("print")
    }

    get position(){
        return this.__position;
    }
    set position(pos){
        this.__position = pos;
    }
}

let testerJohnJohnson = new Employee3("John", "Johnson", "tester");

console.log(testerJohnJohnson.firstName)
console.log(testerJohnJohnson.fullName())
console.log(testerJohnJohnson.fullNamePosition())

console.log(typeof testerJohnJohnson)


Employee3.prototype.getFirstName = function () {
    return this.firstName;
}

// console.log(testerJohnJohnson.getFirstName())


let devPeterPeterson = new Employee3("Peter", "Peterson", "dev");


console.log(devPeterPeterson.getFirstName())

// devPeterPeterson.print()
Employee3.print()
console.log(devPeterPeterson.count)
console.log(Employee3.count)
console.log(devPeterPeterson.firstName)
console.log(devPeterPeterson._lastName)
console.log(devPeterPeterson.__position)
devPeterPeterson.position = "TAQC"
console.log(devPeterPeterson.position)
console.log(devPeterPeterson)


class TAQC extends Employee3 {

    constructor(firstName, lastName, position, age){
        super(firstName, lastName, position);
        this.age = age;
    }
}

taqc = new TAQC(18)
console.log(taqc)