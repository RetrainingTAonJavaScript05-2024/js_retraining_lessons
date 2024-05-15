// const k = 5;
// console.log(-k); // -5, unary minus 
// console.log(-(k * 2)); // -10, unary minus applied to the result of multiplication k * 2
// console.log(-(-3)); 


// let m = 5;
// let n = ++m; // prefix increment (first m increases by 1, then n=m)
// console.log(m); // 6
// console.log(n);

// m = 5;
// n = m++; // postfix increment (first m increases by 1, then n=m)
// console.log(m); // 6
// console.log(n);(-



// console.log(2**10)
// console.log(2**(-10))
// console.log(2**(1/2))
// console.log((-2)**(1/2))
// console.log(null + undefined + "")
// console.log(null + undefined + "1")
// console.log(null + "1" + undefined + "1")
// console.log(null + "1" + undefined + "1")

// console.log(1 && 2 && 4 && 3)
// console.log(1 && 2 && 0 && 3)
// console.log("" || false || 0 )
// console.log("" || 1 ||false || 0 )


// function True(){
//     console.info(">>true")
//     return true;
// }
// function False(){
//     console.info(">>false")
//     return false;
// }
// console.log(True() && True() && False() && True())


// const x = 30;
// const y = 50;
// result = (x > y) ? 500 : 1000;
// // result = 500 if (x > y) else 1000;
// console.log(result);


// if(){}
// else if(){}
// else if(){}
// else if(){}
// else if(){}
// else{}


// if(){}
// else{
//     if(){}
//     else {
//         if(){}
//     else if(){}
//     else if(){}
//     }
// }
// else{}

function s(n){
    console.info(">>>>>>>>>>>>>>>> " + n)
    switch (n) {
        case 8:
            console.log( 'Too small' );
            // break;
        case 9:
            console.log( 'Exactly!' );
            // break;
        case 10:
            console.log( 'Too large' );
            break;
        case 11:
            console.log( '11' );
            // break;
        default:
            console.log( "I don't know such values" );
    }
}


s(7)
s(8)
s(9)
s(10)
s(11)
