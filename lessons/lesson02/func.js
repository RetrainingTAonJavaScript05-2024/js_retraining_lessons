// let i = 0;
// while (i < 3) { // prints 0, then 1, then 2
//     console.log( i );
//     i++;
// }


// i = 0;
// do {
//     console.log( i );
//     i++;
// } while (i < 3)


// for(let count = 0, l=10; count < 10, l<300; count++, l+=20) {
//     console.log("Current Count : " + count + " " + l );
// }


// let str = 'Message';
// let a;
// for (a of str) {
//    console.log(a + "<br>");
// }

// const cities = ["Rome", "Lviv", "Warsaw"];
// for (let city of cities) {
//     console.log(city + "<br>");
//  }

//  console.log(city)


// function multiplication(a=1, b=2, c=3) {
//     console.log(arguments)
//     const result = a * b * c;
//     console.log(a+"*"+b+"*"+c+"="+result)
//     // console.log(result);
// }
// // function multiplication(a) {
// //     console.log(arguments)
// //     const result = a * b * c;
// //     console.log(a+"*"+b+"*"+c+"="+result)
// //     // console.log(result);
// // }
// multiplication(3); // 24
// multiplication(10, 33); // 330
// multiplication(10, 1, 33); // 330
// multiplication(b=10, a=1, c=33); // 330
// m = multiplication(11,22,33,44,55,66); // 330
// console.log(m)


// function multiplication(a=1, b=2, c=3) {
//     console.log(arguments);
//     const result = a * b * c;
//     console.log(a+"*"+b+"*"+c+"="+result);
//     return result;
//     console.log("result");
// }

// m = multiplication(11,22,33,44,55,66); // 330
// console.log(m)
// function f(number){
//     let sum = 0;
//     function ff(a) {
//         sum += number+a;
//         console.log(">>>>>"+sum)
//         return number+a;
//     } 
//     return ff
// }

// d = f(100)
// dd = f(200)
// console.log(d(1))
// console.log(dd(1))
// console.log(d(20))
// console.log(dd(20))



// console.log(sum(10, 20))
// console.log(sum2(10, 20))

// function sum(a, b) {return a+b}
// sum2 = function(a, b) {return a+b}

// console.log(sum(10, 20))
// console.log(sum2(10, 20))



function calcFactorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * calcFactorial(n - 1);
    }
}

console.log(calcFactorial(3))
    