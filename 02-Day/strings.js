//Excercise String for 30Days of JavaScript
// Declare a variable name challenge and assign it to an initial value '30 Days Of JavaScript'.
// Print the string on the browser console using console.log()
// Print the length of the string on the browser console using console.log()
// Change all the string to capital letters using toUpperCase() method
// Change all the string to lowercase letters using toLowerCase() method
// Cut(slice) out the first word of the string using substr() or substring() method
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Check if the string contains a word Script using includes() method
// Split the string into array using split() method
// Split the string 30 Days Of JavaScript at the space using split() method
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(0, 2))
console.log(challenge.slice(3, 27))
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.slice(31, 55))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))
console.log(sentence.split(' '))
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// What is character at index 15 in '30 Days Of JavaScript' string use charAt() method.
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.indexOf('because'))
console.log(sentence.search('because'))
let stringWithSpace = ' 30 Days Of JavaScript'
console.log(stringWithSpace.trim())
// Use startsWith() method with the string 30 Days Of JavaScript make the result true
// Use endsWith() method with the string 30 Days Of JavaScript make the result true
// Use match() method to find all the a’s in 30 Days Of JavaScript
// Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('30'))
let patern = /a/gi
console.log(challenge.match(patern))
let paternBecause = /because/gi
console.log(sentence.match(paternBecause))
let stringCon = '30 Days of'
console.log(stringCon.concat(' JavaScript'))
console.log(challenge.repeat(2))
// ** 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
// ** Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// ** Clean the following text and find the most frequent word(hint, use replace and regular express).
// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let lovepatern = /Love/gi
let numberOflove = love.match(lovepatern)
console.log(numberOflove)
console.log(numberOflove.length)
let salary = 2000
let bonusYearly = 3000
let freelancing = 300
let anualIncome = salary * 12 + bonusYearly + freelancing * 12
console.log(anualIncome)
const badSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
let paternBadSent = /%/gi
let badChar = badSentence.match(paternBadSent)
console.log(badChar)
console.log(badSentence.replace(badChar, ''))
// Using console.log() print out the following statement.
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help to one another.
// Using console.log() print out the following quote by Mother Teresa.
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// Check if 'on' is found in both python and jargon
// I hope this course is not full of jargon. Check if jargon is in the sentence.
// Generate a random number between 0 and 100 inclusive.
// Generate a random number between 50 and 100 inclusive.
// Generate a random number between 0 and 255 inclusive.
// Access the 'JavaScript' string characters using a random number.
console.log('There is no exercise better for the heart than reaching down and lifting people up.')
console.log('Love is not patronizing and charity isnt about pity, it is about love. Charity and love are the same -- with charity you give love, so dont just give money but reach out your hand instead.')
let striPython = 'Python'
let striJar = 'Jargon'
console.log(striPython.includes('on'))
console.log(striJar.includes('on'))
let randBtwn0100 = Math.floor(Math.random() * 101)
console.log(randBtwn0100)
let randBtwn050 = Math.floor(Math.random() * 50) + 50
console.log(randBtwn050)
let randBtwn0255 = Math.floor(Math.random() * 256)
console.log(randBtwn0255)
let jsString = 'JavaScript'
let jsStringLenght = jsString.length
let randWithStrLength = Math.floor(Math.random() * jsStringLenght)
console.log(randWithStrLength)
let parseInt = '9.81'
// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log(Math.ceil(parseInt))
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
// Check if parseInt('9.8') is equal to 10 if not make it exactly equal with 10.
let typeOfNum = 10
let typeOfCha = '10'
console.log(typeof (typeOfCha))
console.log(typeof (typeOfNum))