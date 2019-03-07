// undefined for variable
let name

name = 'Jen'

if (name === undefined) {
    console.log("Please provide a Name")
} else {
    console.log(name)
}


console.log(name)

// undefined for function arguments
// undefined as function return default value
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

//
let age = 27

//age = undefined
// undefined means it wasn't ever defined
// null means was explicitly undefined by the dev
age = null

console.log(age)

