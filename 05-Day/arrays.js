//Day 5: Exercises Array

// Declare an empty array;
// Declare an array with more than 5 number of elements
// Find the length of your array
// Get the first item, the middle item and the last item of the array
const emptyArry = Array()
console.log(emptyArry)
const emptyArry2 = []
console.log(emptyArry2)

const arryWithFiveNum = [1, 2, 3, 4, 5]
console.log(arryWithFiveNum)
console.log(arryWithFiveNum.length)
console.log(arryWithFiveNum[0])
console.log(arryWithFiveNum[arryWithFiveNum.length - 1])
console.log(Math.ceil([arryWithFiveNum.length / 2]))

// Declare an array called mixedDataTypes,put different data types in your array and find length of the array. You are should size be greater than 5
const mixedDataTypes = [1, '2', 'atik', undefined, true, false, null]
console.log(mixedDataTypes)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
const numOfCompanies = itCompanies.length
console.log(numOfCompanies)
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length - 1])
console.log(Math.ceil(itCompanies[itCompanies.length / 2]))