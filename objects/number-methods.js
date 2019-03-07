let num = 103.941



console.log(num.toFixed(9))

console.log(Math.round(num))
// floor always rounds down
console.log(Math.floor(num))
// ceil always rounds up
console.log(Math.ceil(num))
// random number betwen 0 and 0.99999
let randomNum = Math.random()

let min = 10
let max = 20
// generates a random number between 0 and 10
let randomNum2 = Math.floor(Math.random() * (max - min + 1))
// generates a random number between 0 and 20
let randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

console.log(randomNum2)

console.log(randomNum3)

// Challenge area
// create a function that takes in 1 argument, user guess
// create random number and check if it is the same. True if correct, false if not correct

// MY SOLUTUON
let makeGuess = function (userGuess) {
    let randomNum = Math.floor(Math.random() * (max - min + 1))
    if (userGuess === randomNum) {
        return "Your guess was correct!"
    } else {
        return "Your guess was not correct :("
    }
}

// TEACHERS SOLUTION

let makeGuess2 = function (userGuess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return userGuess === randomNum


}


console.log(makeGuess(1))

console.log(makeGuess2(5))