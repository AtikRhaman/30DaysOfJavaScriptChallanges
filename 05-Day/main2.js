const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

console.log(countries)
console.log(countries.length)
console.log(countries.sort())
console.log(numbers.sort())
const str = 'arry testing'
console.log(str.split(''))

// use find method
const smallNum = (num) => {
    return num > 10
}

console.log(numbers.find(smallNum))
console.log(numbers)
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')

index != -1 ? console.log('this fruits does exist') : console.log('this fruite does not exist')
console.log(fruits.includes('Banana'))
console.log(Array.isArray(fruits))
console.log('=====')
console.log(fruits)
let pushApple = fruits.push('Apple')
console.log(pushApple)

const numFive = [1, 2, 3, 4, 5, 6]
console.log(numFive[0])
console.log(numFive.lastIndexOf(6))
let comp = "Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon"
let compToArry = comp.split(' ')
console.log(compToArry)
console.log(compToArry.length)
newArry = []
let eachCompany = () => {
    for (company of compToArry) {
        console.log(company.push(newArry))
    }
}
eachCompany()
console.log(newArry)