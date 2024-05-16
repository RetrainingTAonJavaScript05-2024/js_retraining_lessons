// HW1
function greet(name) {
    return "Hello, " + (name === "Johnny" ? `my love` : name) + "!";
}
// Logs
console.log('HW1:', greet('Johnny'));
console.log('HW1:', greet('John'));
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW2
function distance(x1, y1, x2, y2) {
    return +(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)).toFixed(2);
}
function distanceAlternative(x1, y1, x2, y2) {
    return +(Math.hypot(x2 - x1, y2 - y1).toFixed(2));
}
//Logs
console.log('HW2:', distance(1, 1, 0, 0));
console.log('HW2 (alternative): ', distanceAlternative(1, 1, 0, 0));
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW3
function filter_words(phrase) {
    let words = phrase.toLowerCase().split(' ').filter(word => word !== '').join(' ');
    words = words.charAt(0).toUpperCase() + words.slice(1) // 'N' + 'ow this is really interesting'

    return words;
}
//Logs
console.log('HW3: ', filter_words('HELLO CAN YOU HEAR ME')); //=> Hello can you hear me
console.log('HW3: ', filter_words('now THIS is REALLY       interesting')); //=> Now this is really interesting
console.log('HW3: ', filter_words('THAT was EXTRAORDINARY!')); //=> That was extraordinary!
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW4
function numberToString(num) {
    return num + '';
}
//Logs
console.log('HW4: ', numberToString(null))
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW5
function reverse(string) {
    return string.split(' ').reverse().join(' ')
}
//Logs
console.log('HW5: ', reverse('I am an expert at this'))
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW6
function reverseList(list) {
    let reverseList = [];
    for (let i = list.length - 1; i >= 0; i -= 1) {
        reverseList.push(list[i])
    }
    return reverseList
}
function alternativeReverseList(list) {
    return [...list].reverse();
}
//Logs
console.log('HW6: ', reverseList([3, 1, 5, 4]))
console.log('HW6 (alternative): ', alternativeReverseList([3, 1, 5, 4]))
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW7
function solution(number) {
    let sum = 0;
    for (let i = 1; i < number; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum
}
function sumOfMultiples(n, k) {
    const m = Math.floor((n - 1) / k);
    console.log(k * m * (m + 1) / 2)
    return k * m * (m + 1) / 2;
}
function solutionAlternative(number) {
    return sumOfMultiples(number, 3) + sumOfMultiples(number, 5) - sumOfMultiples(number, 15);
}
//Logs
console.log('HW7: ', solution(10));
console.log('HW7 (alternative): ', solution(10));
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW8
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump;
};
//Logs
console.log('HW8: ', zeroFuel(50, 25, 2));
console.log('HW8: ', zeroFuel(100, 50, 1));
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW9
function areYouPlayingBanjo(name) {
    let isPlayingBanjo = name[0].toLowerCase() === 'r';
    return name + (isPlayingBanjo ? ' plays' : ' does not play') + ' banjo';
}
//Logs
console.log('HW9: ', areYouPlayingBanjo("Adam"));
console.log('HW9: ', areYouPlayingBanjo("Ronald"));
console.log('HW9: ', areYouPlayingBanjo("rolf"));
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW10
function boolToWord(bool) {
    if (typeof bool !== "boolean") return 'Type must be boolean!';
    return bool ? 'Yes' : 'No';
}
//Logs
console.log('HW10: ', boolToWord(true))
console.log('HW10: ', boolToWord(false))
console.log('HW10: ', boolToWord(undefined))
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW11
function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
}
//Logs
console.log('HW11: ', countSheeps([undefined, null, false, true, true, false, null, undefined])); // 2
console.info('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

//HW12
function correctTail(body, tail) {
    let sub = body.slice(body.length - 1)
    return sub === tail
}
function alternativeCorrectTail(body, tail) {
    return body.endsWith(tail);
}
//Logs
console.log('HW12: ', correctTail("Rhino", "o"))
console.log('HW12: ', correctTail("Meerkat", "e"));
console.log('HW12 (alternative): ', alternativeCorrectTail("Rhino", "o"))
console.log('HW12 (alternative): ', alternativeCorrectTail("Meerkat", "e"));
