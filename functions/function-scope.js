// Global Scope  (convF2C, f1, f2)
    // Local Scope ( fahrenheit, celcius )
        // Local Scope ( isFreezing )

// Functions create a new Scope

let conv_F2C = function (num) {
    let celcius = (num - 32) * 5 / 9


    if (celcius <= 0) {
        let isFreezing = true
    }

    return celcius
}

let f1 = conv_F2C(50)
let f2 = conv_F2C(98.6)

console.log(f1)
console.log(f2)