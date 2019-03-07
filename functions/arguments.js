// Multiple Arguments
let add = function (a,b,c) {
    return a + b + c
}

let result = add(100, 1, 25)

// console.log(result)


// Default Arguments
let getScoreText = function (name='Anonymous', score=0) {
    console.log("Player Name: " + name + ", Score: " + score)
}

let scoreText = getScoreText(undefined, 99)
let scoreText2 = getScoreText('Sean', 100)

console.log(scoreText)
console.log(scoreText2)

// challenge area
// total, tipPercent
//      default_tip_percent .2   100 * .2

let calcTip = function (total, tipPercent=0.2) {
    let tipPerc = tipPercent * 100
    let calc = total * tipPercent
    console.log(`BillTotal: $${total}, TipPercent: ${tipPerc}%, CalculatedTip: $${calc}`)
    return calc
}

let tip1 = calcTip(15342)

console.log("$"+ tip1)

// Template Strings
// You can create regular strings using double quotes a well
console.log('Andrew')
console.log("Andrew")

// Backtick Key / Tilde
let name = 'Jen'
console.log(`Hey, My name is ${name}!`)