//Day 3: Exercises
//1. Exercises: Data types Part
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it
// The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.
// Check if type of '10' is equal to 10
// Check if parseInt('9.8') is equal to 10

let firstName = 'Atik'
let lastName = 'Rahman'
let country = 'Bangladesh'
let city = 'Helsinki'
let age = 29
let isMarried = false
let year = 2020
console.log(`${firstName}, ${lastName}, ${country}, ${city}, ${age}, ${isMarried}, ${year}`)
console.log(typeof (firstName))
console.log(typeof (firstName))
console.log(typeof (country))
console.log(typeof (city))
console.log(typeof (age))
console.log(typeof (isMarried))
console.log(typeof (year))
let ten = 10
let tenString = '10'
console.log(ten === tenString)
console.log(ten == tenString)
let parseInt = 9.8
console.log(ten === parseInt)
let parseIntCile = Math.ceil(parseInt)
console.log(ten === parseIntCile)

//1. Exercises: Arithmetic Operators Part
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt('enter base')
// let height = prompt('enter height')
// let areaOftriangle = 0.5 * (base * height)
// console.log(areaOftriangle)
//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let sideA = prompt('enter side A')
// let sideB = prompt('enter side B')
// let sideC = prompt('enter side C')
// let paraMeterOfTria = sideA + sideB + sideC
// console.log(paraMeterOfTria)
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let width = prompt('enter width')
// let height = prompt('enter height')
// let areOfRag = width * height
// let paraMeterOfRag = 2 * (width + height)
// console.log(areOfRag)
// console.log(paraMeterOfRag)
//10. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let yourAge = prompt('please entere your age')
// console.log(yourAge * 60 * 60 * 24 * 365)
//3. Exercises: Booleans Part
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
let x = 4 > 3
let y = 4 > 3 || 4 > 3
let z = 4 < 3 || 2 > 3
console.log(x)
console.log(y)
console.log(z)
console.log('false velue')
let a = 4 < 3
let b = 4 > 3 && 4 > 8
let c = 4 > 3 && 2 > 3
console.log(a)
console.log(b)
console.log(c)
console.log('Exercises: Comparison Operators')
// 4. Exercises: Comparison Operators
let d = 4 > 3
let e = 4 >= 3
let f = 4 < 3
let g = 4 <= 3
let h = 4 == 4
let i = 4 === 4
let j = 4 != 4
let k = 4 !== 4
let l = 4 != '4'
let m = 4 == '4'
let n = 4 === '4'
console.log(e)
//5. Exercises: Logical Operator
//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12 // true
4 > 3 && 10 > 12 //true
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12 //false
    !(4 > 3) // flase
    !(4 < 3) //true
    !(false) //true
    !(4 > 3 && 10 < 12) // false
    !(4 > 3 && 10 > 12) //true
    !(4 === '4') //false
// 6 Ternary Operator
//If the length of your name is greater than 7 say, your name is long else say your name is short.
let myname = 'Atik'
let lengthOfMyName = myname.length
if (lengthOfMyName > 7) {
    console.log('yor name is longer then 7 charecters')
} else {
    console.log('your name is less then 7 chareter')
}
// 7. Exercises: Date time Object
let nowDate = new Date()
let fullYear = nowDate.getFullYear()
console.log(nowDate.getMonth() + 1)
console.log(nowDate.getDate())
console.log(nowDate.getDay())
console.log(nowDate.getHours())
console.log(nowDate.getMinutes())
console.log(nowDate.getSeconds())