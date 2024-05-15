// a = 1;
// console.log(a);
// var b = 1;

// let b = 1;
// const b2 = {};
// b2.a = 1;
// console.log(b2)

// function f(){
//     c = 10;
//     var b=20;
//     console.log(c)
//     console.log(b)
// }
// f()
// console.log(c)
// // console.log(b)



// let x; // type undefined

// console.log(undefined === undefined)
// console.log(x); // undefined
// x = 45; // type number
// console.log(x); // 45
// console.log(typeof x); // "45"
// x = "45"; // type string
// console.log(x); // "45"
// console.log(typeof x); // "45"

// console.log(1+1+"1"+1+1+"1")
// console.log(1+1+ +"1"+1+1+"1")

// console.log(parseInt("7")); // 7
// console.log(parseInt("7.9")); // 7
// console.log(parseInt("79nm")); // 7
// console.log(parseInt("nm")); // NaN

// console.log(parseFloat("7")); // 7
// console.log(parseFloat("7.125")); // 7.125
// console.log(parseFloat("7nm")); // 7
// console.log(parseFloat("nm")); // NaN

// console.log(NaN === NaN); // NaN

// console.log(Number("7")); // 7
// console.log(Number("7.9")); // 7


// let a = "1";
// let bln = Boolean(a);
// console.log(bln); // true
// console.log(typeof bln); // "boolean"
// a = true;
// bln = Boolean(a);
// console.log(bln); // true
// console.log(typeof bln); // "boolean"
// a = "true";
// bln = Boolean(a);
// console.log(bln); // true
// console.log(typeof bln); // "boolean"

// a = "false";
// bln = Boolean(a);
// console.log(bln); // true
// console.log(typeof bln); // "boolean"
// a = "";
// bln = Boolean(a);
// console.log(bln); // false
// console.log(typeof bln); // "boolean"
// a = 0;
// bln = Boolean(a);
// console.log(bln); // false
// console.log(typeof bln); // "boolean"

// a = [];
// bln = Boolean(a);
// console.log(bln); // false
// console.log(typeof bln); // "boolean"



cities = ["Rome", "Lviv", "Warsaw", 12, [1,2, 3]];
// console.log(cities.length)

// for(i =0; i<cities.length ; i++){
//     console.log(i, cities[i], typeof cities[i])
// }

// cities[8] = 10
// console.log(cities.length)
// for(i =0; i<cities.length ; i++){
//     console.log(i, cities[i], typeof cities[i])
// }

for(city of cities){
    city += "!"
    console.log( city, typeof city)
}


for(city of cities){
    city += "!"
    console.log( city, typeof city)
}

c = cities.map(function(element) { return typeof element === "string"})
console.log(c)


c = cities.forEach(element => {
    element +=10
 console.log(element)
});
console.log(c)
console.log(cities)

c = cities.filter(function(element) { return typeof element === "string"})
console.log(c)


// for(i of cities){
//     f(i)
// }
cities.forEach(function(element, index, arr) {
    console.log(element, index, arr)
});