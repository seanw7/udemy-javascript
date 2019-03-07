let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0

}

let otherAccount = myAccount
otherAccount.income = 1000

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

let addIncome = function (account, income) {
    account.income = account.income + income
    console.log(account)
}

let resetAccount = function (account) {
    account = {
        name: `${account.name}`,
        expenses: 0,
        income: 0
    }
    console.log(account)
    return account
}

let getAccountSummary = function (account) {
    console.log(`Account for ${account.name} has $${account.income - account.expenses} $${account.income} in Income. $${account.expenses} in expenses.`)
}





// Add 3 functions to this script
// addIncome
// resetAccount
// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses.

// addIncome
// addExpense
// addExpense
//getAccountSummary
// resetAccount
// getAccountSummary

addIncome(myAccount, 100)
addExpense(myAccount, 2.50)
addExpense(myAccount, 2.50)
addExpense(myAccount, 2.50)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)
console.log(myAccount)