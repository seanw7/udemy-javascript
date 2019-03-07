let temp = 65

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vega? Only offer up vegan dishes

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Both Vegan? How about our Vegetable soup or Chile Relleno")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("One Vegan? How about Chile Relleno and a New York Steak")
} else {
    console.log("Our menu consists of: Vegetable soup, Chile Relleno, and New York Steak")
}