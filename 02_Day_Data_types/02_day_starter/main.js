// this is your main.js script
// Exercise: Level 1

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = `30 Days Of JavaScript`

// Print the string on the browser console using console.log()
console.log(`Print string: ${challenge}`)

// Print the length of the string on the browser console using console.log()
console.log((`Print length of string: ${challenge.length}`))

// Change all the string characters to capital letters using toUpperCase() method
console.log(`String characters to uppercase: ${challenge.toUpperCase()}`)

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(`String characters to lowercase: ${challenge.toLowerCase()}`)

// Cut (slice) out the first word of the string using substr() or substring() method
let indexOfFirstSpace = challenge.indexOf(` `)
console.log(`First word of string: ${challenge.substring(0, indexOfFirstSpace)}`)

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let strSearch = `Days Of JavaScript`
let startPosition = challenge.indexOf(`Days Of JavaScript`)

console.log(`Slice out string: ${challenge.substr(startPosition, strSearch.length)}`)

// Check if the string contains a word Script using includes() method
console.log(`Contains 'Script'?: ${challenge.includes(`Script`)}`)

// Split the string into an array using split() method
console.log(`String to array: ${challenge.split(``)}`)

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(`String to array at space: ${challenge.split(` `)}`)

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companyString = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`
console.log(`Create company string: ${companyString.split(`,`)}`)

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(`Change to Python: ${challenge.replace(`JavaScript`, `Python`)}`)

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(`Character at position 15: ${challenge.charAt(15)}`)

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let posJ = challenge.indexOf(`J`)
console.log(`Character code of J: ${challenge.charCodeAt(posJ)}`)

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(`Position of 'a': ${challenge.indexOf(`a`)}`)

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(`Last position of 'a': ${challenge.lastIndexOf(`a`)}`)

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseStr = `You cannot end a sentence with because because because is a conjunction`
console.log(`First position of because: ${becauseStr.indexOf(`because`)}`)

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`Last position of because: ${becauseStr.lastIndexOf(`because`)}`)

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`First occurence of because: ${becauseStr.search(`because`)}`)

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trimStr = ` 30 Days Of JavaScript `
console.log(`Original: ${trimStr}\n
Trimmed: ${trimStr.trim()}`)

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(`Make starts with true: ${challenge.startsWith(challenge[0])}`)

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let lastLetterPos = challenge.length - 1
console.log(`Make ends with true: ${challenge.endsWith(challenge[lastLetterPos])}`)

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(`Find a's: ${challenge.match(/a/g)}`)

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstStr = `30 Days of`
let secondStr = `JavaScript`
console.log(`Concatenate: ${firstStr.concat(secondStr)}`)

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(`Repeat: ${challenge.repeat(2)}`)