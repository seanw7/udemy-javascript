let name = '     Sean Wilkie  '

//Length Property
console.log(name.length)

//Upper Case
console.log(name.toUpperCase())

// Convert to Lower Case
console.log(name.toLowerCase())

let password = 'abc123passwod098'

console.log(password.includes('password'))

// Trim
console.log(name.trim())


// challenge

// isValidPassword
// Returns true of a password is valid, and false otherwise
// only return true of len is >= 8, and doesn't contain the word password

// MY ORIGINAL VERSION
// let isValidPassword = function (inputPass) {
//     if (inputPass.length >= 8) {
//         if (inputPass.includes('password')) {
//             console.log("Not a Valid password")
//             return false}
//         console.log("Input was a Valid")
//         return true
//     }

// }

let isValidPassword = function (inputPass) {
    if (inputPass.length >= 8 && !inputPass.includes('password')) {
        return true
    } else {
        return false
    }

}


let pass = 

console.log(isValidPassword('password'))
console.log(isValidPassword('1928398198asd'))
console.log(isValidPassword('asdfajklpassword894123johs'))