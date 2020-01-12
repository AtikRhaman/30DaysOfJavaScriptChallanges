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
const mixedDataTypes = [1, 2, 'Atik', undefined, true, false, null, 1.4]
console.log(mixedDataTypes)
console.log(typeof (mixedDataTypes[0]))
console.log(typeof (mixedDataTypes[1]))
console.log(typeof (mixedDataTypes[2]))
console.log(typeof (mixedDataTypes[3]))
console.log(typeof (mixedDataTypes[4]))
console.log(typeof (mixedDataTypes[5]))
console.log(typeof (mixedDataTypes[6]))
console.log(typeof (mixedDataTypes[7]))

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
const lastCompany = itCompanies.length - 1
console.log(itCompanies[lastCompany])
const middleComapny = Math.ceil(itCompanies.length / 2)
console.log(itCompanies[middleComapny])

// Print out each company
console.log('========Print out each company========')
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}
// Change each company name to uppercase one by one and print them out
console.log('========Change each company name to uppercase one by one and print them out========')

for (let i = 0; i < itCompanies.length; i++) {
    let itCompaniesUpperCase = itCompanies[i].toUpperCase();
    console.log(itCompaniesUpperCase)
}

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log('========Print the array like as a sentence========')
let withOutLastItComIndex = itCompanies.length - 2
let withOutLastItComArr = itCompanies.slice(0, withOutLastItComIndex)
let itCompaniesAsSentance = `${withOutLastItComArr.toString()} and ${itCompanies[lastCompany].toString()} are the big companies`
console.log(itCompaniesAsSentance)
let companiesAvilable = itCompanies.includes('Facebook')
console.log(companiesAvilable)

if (companiesAvilable) {
    console.log('Facebook is avilabel')
} else {
    console.log('the company is not avilable')
}
console.log('========oo companies========')
let hasO = itCompanies.includes('o')
console.log(hasO)
let hasDubbleOCompanies = []
for (let i = 0; i < itCompanies.length; i++) {
    let oCompanies = itCompanies[i].includes('o')
    console.log(oCompanies)
}
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies
itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)
console.log(itCompanies.slice(0, 3))
let itLastThreeCom = itCompanies.length - 4
console.log('=====')
let lastThreeCom = itCompanies.slice(4, 7)
console.log(lastThreeCom)
console.log(itCompanies[middleComapny])
let removeFirstItem = itCompanies.shift()
console.log(removeFirstItem)

const itCompanies2 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies2)
const itCompanies2Index = itCompanies2.length - 1
console.log(itCompanies2Index)
const middleInOfItcom2 = Math.floor(itCompanies2Index / 2)
console.log(itCompanies2[middleInOfItcom2])
console.log(itCompanies2.slice(0, 6))
console.log(itCompanies2.slice(0, 0))