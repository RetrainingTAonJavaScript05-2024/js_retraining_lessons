//+01 - Jenny's secret message
function greet(name){
    if(name === "Johnny") {
      return "Hello, my love!"
    }else return "Hello, " + name + "!"
  }
console.log("<<<<<01-Jenny's secret message>>>>>")
console.log(greet("Jenny"))
console.log(greet("Johnny"))

// 02 - Find The Distance Between Two Points
function distance(x1, y1, x2, y2){
  const distance = Math.sqrt((x2-x1) ** 2 + (y2-y1) ** 2).toFixed(2)
return parseFloat(distance)
}
console.log(distance(1, 1, 0, 0))

// 03 - No yelling!
function filterWords(string) {
  let newString = ""
  newString = string.replace(/\s+/g,' ')
  let finalString = newString.slice(0,1).toUpperCase() + newString.slice(1).toLowerCase()
  return finalString
}
console.log(filterWords("WOW this is REALLY          amazing"))

// 04 - String to number
const stringToNumber = function(str){
  let number = parseInt(str)
  return number
}
console.log(stringToNumber('1234'))
// 05 - Reversing Words in a String

function reverse(string){
  return string.split(" ").reverse().join(" ").trim()
}
console.log(reverse("asc 333 jdhsk doksj "))

// 06 - Reverse List order
function reverseList(list) {
  const reversedList = list.reverse()  
  return reversedList
}
console.log(reverseList([1,2,3,4]))

// 07 - Multiples of 3 or 5
function solution(number){
  let sum = 0
  if (number <= 0) {
    return 0;
  }
  for (let num = 1; num < number; num++) {
  if(num % 3 === 0 || num % 5 === 0) {
    sum += num   
    }
  }
  return sum
}
console.log(solution(10))

// 08 - Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  neededFuel = distanceToPump / mpg
  return neededFuel >= fuelLeft
}
console.log(zeroFuel(50, 25, 2))

// 09 - Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if(name[0]==="R" || name[0]==="r") {
    return `${name} plays banjo`;
  }  
  return `${name} does not play banjo`;
}
console.log(areYouPlayingBanjo("еederick"))

// 10 - Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
 return bool ? "Yes" : "No"
}
console.log(boolToWord(true))

// 11 - Counting sheep...
function countSheeps(sheep) {
  let sum = 0
  for(each of sheep) {
    if(each) sum++
  }
  return sum
}
console.log(countSheeps([undefined,null,false,true]))

// 12 - Is this my tail?
function correctTail(body, tail) {
  
  sub = body.substr(body.length-(tail.length))
  
  if (sub == tail) {
    return true
  }else return false
}
console.log(correctTail("Meerkat", "t"))