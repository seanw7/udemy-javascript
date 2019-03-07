let isAccountLocked = false
let userRole = 'admin'

// if (isAccountLocked) {
//     console.log("Account is locked")
// } else {
//     console.log("Welcome! " + userRole)
// }

if (isAccountLocked) {
    console.log("Account " + userRole  + " is locked!")

} else if (userRole === 'admin') {
    console.log("Welcome Admin!")
} else {
    console.log("Welcome!")

}


// Challenge area

let temp = 10

// it is freezing outside!
// it is hot outside!
// go for it. it is pretty nice.

if (temp > 80) {
    console.log("Its hot outside!")

} else if (temp <= 32) {
    console.log("Its freezing outside!")
} else {
    console.log("Go for it, it is pretty nice outside!")
}