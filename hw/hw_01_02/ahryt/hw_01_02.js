function greeting(name) {
    if (name !== "Johnny") {
        console.log(`Hi, ${name}`)
    } else {
        console.log(`Hi, ${name}. I'm very glad to see you`)
    }
}

// greeting("Alona")
// greeting("Johnny")

function calculateDistance(x1, y1, x2, y2) {
    return Number(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(2));
}

// console.log(calculateDistance(0,0, 0, 1))

function noYelling(string) {
    let stringWithoutExtraSpaces = string.trim().replace(/\s+/g, ' ').toLowerCase()
    return stringWithoutExtraSpaces.charAt(0).toUpperCase() + stringWithoutExtraSpaces.slice(1)
}

// console.log(noYelling("HELLO     world    "))

function convertNumberToString(number) {
    console.log(String(number))
    console.log(number + "")
}

// convertNumberToString(49)

function reverseWords(string){
    return string.split(' ').reverse().join(' ')
}

function reverseListOrder(list){
    let newList = []
    for (let i = list.length - 1; i >= 0; i--) {
        newList.push(list[i])
    }
    return newList
}

function multiples3or5(number){
    if (number < 0) {
        return 0
    } else {
        let sum = 0
        for (let i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i
            }
        }
        return sum
    }
}

// console.log(multiples3or5(10))

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft
};

// console.log(zeroFuel(50, 25, 2))

function areYouPlayingBanjo(name) {
    if(name.charAt(0).toLowerCase() == 'r'){
        return name + " plays banjo" ;
    } else {
        return name + " does not play banjo" ;
    }
}

// console.log(areYouPlayingBanjo("Alona"))
// console.log(areYouPlayingBanjo("Romeo"))

function boolToWord(bool){
    if(bool){
        return "Yes"
    } else {
        return "No"
    }
}

// console.log(boolToWord(true))
// console.log(boolToWord(false))

function countSheeps(sheep) {
    let sum = 0;
    if (sheep.length === 0) {
        return sum;
    } else {
        for (let s of sheep) {
            if(s === true) {
                sum++
            }
        }
        return sum
    }
}

// console.log(countSheeps([true, true, null]))

function correctTail(body, tail){
    function getLastBodyLetter() {
        return body[body.length - 1]
    }
    return getLastBodyLetter() === tail;
}

// console.log(correctTail("Fox", "x"))