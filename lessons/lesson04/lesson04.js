// // var array = [];
// // for (var i = 0; i < 10; i++) {
// //     array[i] = function () {
// //         console.log(temp);
// //     };
// // }

// // array[0](); // 0
// // array[4](); // 4


// // // let array = [];
// // // for (let i = 0; i < 10; i++) {
// // //     array[i] = function () {
// // //         console.log(i);
// // //     };
// // // }
// // // array[0](); // 0
// // // array[4](); // 4
// // // array[9](); // 4

// let reflect1 = function(value1, value2){
//     console.log(this)
//     let result = value1 + value2; 
//     console.log(`${value1}+${value2}=${result}`)
//     return result;
// }



// let reflect2 = (value1, value2) => {
//     console.log(this)
//     let result = value1 + value2; 
//     console.log(`${value1}+${value2}=${result}`)
//     return result;
// }

// console.log(reflect1(1,2))
// console.log(reflect2(1,2))



// const numbers = [11, 8, 44, 87];
// const minimum1 = Math.min(numbers[0], numbers[1], numbers[2], numbers[3] );
// const minimum2 = Math.min(...numbers);
// console.log(minimum1); // 8
// console.log(minimum2); // 8
// const arr1 = [7, 3, 9, 12, 21];
// const arr2 = [22, 7, 15, 18, 33];
// const concatArray = [...arr1, ...arr2];
// console.log(concatArray);

// const concatArray2 = arr1.concat(arr2);
// console.log(concatArray2);


// const func = (arg1, arg2, ...args) => {
//     // console.log(arguments)
//     console.log(arg1);
//     console.log(arg2);
//     console.log(args);
// }
// func("First", "Second", 1,2,3,"Third", "Fourth");



// const colors = ["red", "green", "blue"];
// const [firstColor, secondColor] = colors;
// // colors firstColor = colors[0]
// // colors secondColor = colors[1]
// console.log(firstColor); // "red"
// console.log(secondColor); // "green"



// const direction = {
//     type: "web",
//     name: "JavaScript"
// };
// const { type, name } = direction;
// // const type = direction.type;
// // const name = direction.name;
// console.log(type); // "web"
// console.log(name); // "JavaScript"


// function func( {first, second, third, foo} ) {
//     console.log(first + " " + second + " " + third +" "+ foo);
// }
// const cities = {
//     first: "Lviv",
//     second: "Kyiv",
//     third: "Dnipro",
//     boo: "BOO"
// };
// func(cities); // "Lviv Kyiv Dnipro"



// const newSet = new Set("jzdvkjdsbvkjfsdvkdfbk" );
// console.log(newSet)


// const newSet2 = new Set([
//     {
//         type: "web",
//         name: "JavaScript"
//     },
//     {
//         type: "web",
//         name: "JavaScript"
//     },

// ]);
// console.log(newSet2)


const recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
}

for (let [key, value] of recipeMap) { // the same as of recipeMap.entries()
    console.log(key + " : " + value); // cucumber,500 (and so on)
}