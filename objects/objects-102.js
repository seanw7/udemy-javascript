let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = "Animal Farm"

console.log(`${myBook.title} by ${myBook.author}`)

let myHuman = {
    name: 'Joey',
    age: 29,
    location: 'New York'
}

console.log(`${myHuman.name} is ${myHuman.age}, and lives in ${myHuman.location}`)


myHuman.age += 1


console.log(`${myHuman.name} is ${myHuman.age}, and lives in ${myHuman.location}`)