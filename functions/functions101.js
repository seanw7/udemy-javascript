// function - input, code, output

let greetUser = function () {
    console.log('Welcome user!')
}

let square = function (num) {
    let result = num * num
    return result
}

greetUser()

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// convert Fahrenheit to Celcius function
let conv_F2C = function (num) {
    let result = (num - 32) * 5 / 9
    return result
}

let f1 = conv_F2C(50)

console.log(f1)