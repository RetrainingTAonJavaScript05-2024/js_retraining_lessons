//+01 - Jenny's secret message
function greet(name) {
  if (name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}
console.log("-----01-Jenny's secret message----");
console.log(greet("Jenny"));
console.log(greet("Johnny"));

//+02 - Find The Distance Between Two Points
function distance(x1, y1, x2, y2) {
  const distanceBetweenPoints = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return Math.round(distanceBetweenPoints * 100) / 100;
}
console.log("-----02-Find The Distance Between Two Points----");
console.log(`The distance between two points is ${distance(1, 1, 0, 0)}`);

//03 - No yelling!
function filterWords(phrase) {
  let removeExtraSpaces = phrase.replace(/\s+/g, " ");
  let lowerCaseAllLettersExceptFirst =
    removeExtraSpaces.slice(0, 1).toUpperCase() +
    removeExtraSpaces.slice(1).toLowerCase();
  return lowerCaseAllLettersExceptFirst;
}
console.log("-----03-No yelling!----");
console.log(`'HELLO world!' is converted to ' ${filterWords("HELLO world!")}'`);
console.log(
  `'This    will    not    pass ' is converted to '${filterWords(
    "This    will    not    pass "
  )}`
);
console.log(
  `'NOW THIS is a VERY EXCITING test!' is converted to '${filterWords(
    "NOW THIS is a VERY EXCITING test!"
  )}`
);
//+04 - Convert a Number to a String
function numberToString(num) {
  return String(num);
}
console.log("-----04-Convert a Number to a String----");
console.log(
  `The ${numberToString(56)} is of ${typeof numberToString(56)} type`
);

//+05 - Reversing Words in a String
function reverse(strig) {
  return strig.split(" ").reverse().join(" ");
}
console.log("-----05-Reversing Words in a String----");
console.log(`'Hello World' is converted to '` + reverse("Hello World") + `'`);
//+06 - Reverse List Order
function reverseList(list) {
  return list.reverse();
}
console.log("-----06-Reverse List Order----");
console.log(`Reverse [1,2,3,4,5] to [` + reverseList([1, 2, 3, 4, 5]) + `]`);
//+07 - Multiples of 3 or 5ß
function solution(number) {
  if (number <= 0) {
    return 0;
  }
  let sum = 0;
  for (let num = 1; num < number; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
      sum += num;
      continue;
    } else if (num % 3 == 0 || num % 5 == 0) {
      sum += num;
    }
  }
  return sum;
}
console.log("-----07-Multiples of 3 or 5----");
console.log(`The summ of all numbers is ${solution(10)}`);

//+08 - Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const capacity = mpg * fuelLeft;
  if (capacity >= distanceToPump) return true;
  else return false;
};
console.log("-----08-Will you make it?----");
console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));

//+09 - Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if (name.startsWith("R") || name.startsWith("r")) {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
console.log("-----09-Are You Playing Banjo?----");
console.log(areYouPlayingBanjo("Sergio"));
console.log(areYouPlayingBanjo("Roberto"));
console.log(areYouPlayingBanjo("rihana"));

//+10 - Convert boolean values to strings 'Yes' or 'No’
function boolToWord(bool) {
  if (typeof bool == "boolean") {
    return bool ? "Yes" : "No";
  } else {
    return "The function argument is not of type boolean!";
  }
}
console.log("-----10-Convert boolean values to strings 'Yes' or 'No’----");
console.log(boolToWord(true));
console.log(boolToWord(false));
console.log(boolToWord("fdsv"));

//+11 - Counting sheep
function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}
console.log("-----11-Counting sheeps----");
console.log(
  `The sheep cout is ${countSheeps([[undefined, null, false, true], 1])}`
);

//+12 - Is this my tail?
function correctTail(body, tail) {
  const sub = body.substr(body.length - tail.length);
  if (sub === tail) return true;
  else return false;
}
console.log("-----12-Is this my tail?----");
console.log(correctTail("Rhino", "o"));
