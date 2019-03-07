let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSum: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)


console.log(bookSummary.pageCountSum)

// challenge area
// similar to Fahrenheit to Celcius
// pass in fahrenheit and convert to celcius and kelvin. return an object with all 3 temps

let fah1 = 37
 //calculate celcius and store in celcius variable
 //print that value

let tempConvObj = function (fahrenheit) {
    //let celcius = ((fahrenheit - 32) * 5 / 9).toFixed(2)
    //let kelvin = ((fahrenheit + 459.67) * 5 / 9).toFixed(2)

    return {
        fahrenheit: `${fahrenheit}`,
        celcius: ((fahrenheit - 32) * 5 / 9).toFixed(2),
        kelvin: ((fahrenheit + 459.67) * 5 / 9).toFixed(2)
    }

}

let temp1 = tempConvObj(fah1)

console.log(temp1)


 //calculate kelvin value and store in variable
 //print that value
