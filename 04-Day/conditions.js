//Day 4: Exercises Conditionals
// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.

let drivingAge = 20 //prompt('enter your age')
if (drivingAge >= 18) {
    console.log('You are old enough to drive')
} else {
    let ageLeft = 18 - drivingAge
    console.log(`You are left with ${ageLeft} years to drive.`)
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = 37 //prompt('enter your age')
if (yourAge > 29) {
    let ageOver = yourAge - 29
    console.log(`You are ${ageOver} years older then me.`)
} else if (yourAge == 29) {
    console.log('Your age and my age is the same')
} else {
    let ageLeft = 29 - yourAge
    console.log(`You are ${ageLeft} years jouniur than me`)
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways
let a = 4
let b = 6
if (a > b) {
    console.log('a is getter then b')
} else {
    console.log('a is less then b')
}

//Write a code which give grade students according to theirs scores:
let isAbig = a > b
isAbig
    ?
    console.log('a is getter then b') :
    console.log('a is less then b')

console.log('Write a code which give grade students according to theirs scores')


let scores = 39
switch (true) {
    case scores > 79: {
        console.log('A')
    }
    break
case scores > 69: {
    console.log('B')
}
break
case scores > 59: {
    console.log('C')
}
break
case scores > 49: {
    console.log('D')
}
break
case scores < 49: {
    console.log('F :(')
}
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
let season = 'September' //prompt('Enter the month to see the season')
switch (true) {
    case season == 'September' || season == 'October' || season == 'November':
        console.log('This is Autum')
        break
    case season == 'December' || season == 'January' || season == 'February':
        console.log('This is Winter')
        break
    case season == 'March' || season == 'April' || season == 'October' || season == 'May':
        console.log('This is Spring')
        break
    case season == 'June' || season == 'July' || season == 'August':
        console.log('This is Summer')
}

// Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?
let userInput = 9 //prompt('enter a number')
if (userInput % 2 == 0) {
    console.log(`${userInput} is even number`)
} else {
    console.log(`${userInput} is odd number`)
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
let day = 'Sunday' //prompt('Enter the day')
switch (true) {
    case day == 'Saturday' || day == 'Sunday':
        console.log(`${day} is weekend`)
        break
    case day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Trusday' || day == 'Friday':
        console.log(`${day} is work day`)
}

// Write a program which tells the number days in a month.
let inputMonth = 'January' //prompt('Enter the day')
switch (true) {
    case inputMonth == 'January' || inputMonth == 'March' || inputMonth == 'May' || inputMonth == 'July' || inputMonth == 'August' || inputMonth == 'October' || inputMonth == 'December':
        console.log(`${inputMonth} has 31 days`)
        break
    case inputMonth == 'April' || inputMonth == 'June' || inputMonth == 'September' || inputMonth == 'November':
        console.log(`${inputMonth} has 30 days`)
        break
    case inputMonth == 'February':
        console.log(`${inputMonth} has 28 days`)
        break
}