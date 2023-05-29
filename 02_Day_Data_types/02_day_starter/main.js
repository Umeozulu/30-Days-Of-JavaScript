// this is your main.js script
// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = `30 Days Of JavaScript`

// 2. Print the string on the browser console using console.log()
console.log(`2. Print string: ${challenge}`)

// 3. Print the length of the string on the browser console using console.log()
console.log((`3. Print length of string: ${challenge.length}`))

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(`4. String characters to uppercase: ${challenge.toUpperCase()}`)

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(`5. String characters to lowercase: ${challenge.toLowerCase()}`)

// 6. Cut (slice) out the first word of the string using substr() or substring() method
let indexOfFirstSpace = challenge.indexOf(` `)
console.log(`6. First word of string: ${challenge.substring(0, indexOfFirstSpace)}`)

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let strSearch = `Days Of JavaScript`
let startPosition = challenge.indexOf(`Days Of JavaScript`)

console.log(`7. Slice out string: ${challenge.substr(startPosition, strSearch.length)}`)

// 8. Check if the string contains a word Script using includes() method
console.log(`8. Contains 'Script'?: ${challenge.includes(`Script`)}`)

// 9. Split the string into an array using split() method
console.log(`9. String to array: ${challenge.split(``)}`)

// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(`10. String to array at space: ${challenge.split(` `)}`)

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companyString = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`
console.log(`11. Create company string: ${companyString.split(`,`)}`)

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(`12. Change to Python: ${challenge.replace(`JavaScript`, `Python`)}`)

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(`13. Character at position 15: ${challenge.charAt(15)}`)

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let posJ = challenge.indexOf(`J`)
console.log(`14. Character code of J: ${challenge.charCodeAt(posJ)}`)

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(`15. Position of 'a': ${challenge.indexOf(`a`)}`)

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(`16. Last position of 'a': ${challenge.lastIndexOf(`a`)}`)

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseStr = `You cannot end a sentence with because because because is a conjunction`
console.log(`17. First position of because: ${becauseStr.indexOf(`because`)}`)

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`18. Last position of because: ${becauseStr.lastIndexOf(`because`)}`)

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(`19. First occurence of because: ${becauseStr.search(`because`)}`)

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trimStr = ` 30 Days Of JavaScript `
console.log(`20. Original: ${trimStr}\n
Trimmed: ${trimStr.trim()}`)

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(`21. Make starts with true: ${challenge.startsWith(challenge[0])}`)

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let lastLetterPos = challenge.length - 1
console.log(`22. Make ends with true: ${challenge.endsWith(challenge[lastLetterPos])}`)

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(`23. Find a's: ${challenge.match(/a/g)}`)

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstStr = `30 Days of`
let secondStr = `JavaScript`
console.log(`24. Concatenate: ${firstStr.concat(secondStr)}`)

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(`25. Repeat: ${challenge.repeat(2)}`)





// Exercise: Level 2
console.log(`\n\nExercise 2`)
// 1. Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(`1. Print quote: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`)

// 2. Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(`2. Print quote by Mother Teresa: ${"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."}`)

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(`3a. Check for types: ${typeof('10') == typeof(10)}\n
3b. Make it equal: ${typeof(parseInt('10')) == typeof(10)}`)

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(`4a. Check for equality of float: ${parseFloat('9.8') == 10}\n
4b. Make it equal: ${Math.ceil(parseFloat('9.8')) == 10}`)

// 5. Check if 'on' is found in both python and jargon
console.log(`5. Check if python and jargon both contain 'on': ${'python'.includes('on') && 'jargon'.includes('on')}`)

// 6. 'I hope this course is not full of jargon'. Check if jargon is in the sentence.
let jargonSentence = `I hope this course is not full of jargon`
console.log(`6. Check if senctence contains 'jargon': ${jargonSentence.includes('jargon')}`)

// 7. Generate a random number between 0 and 100 inclusively.
let randNum = Math.random() * 100
let randNumMain = Math.round(randNum)
console.log(`7. Generate a random number between 0 - 100 inclusively: ${randNum}, ${randNumMain}`)

// 8. Generate a random number between 50 and 100 inclusively.
let randNum2 = Math.random() * 50 + 50
let randNum2Main = Math.round(randNum2)
console.log(`8. Generate a random number between 50 - 100 inclusively: ${randNum2}, ${randNum2Main}`)

// 9. Generate a random number between 0 and 255 inclusively.
let randNum3 = Math.random() * 255
let randNum3Main = Math.round(randNum3)
console.log(`9. Generate a random number between 0 - 255 inclusively: ${randNum3}, ${randNum3Main}`)

// 10. Access the 'JavaScript' string characters using a random number.
let js = `JavaScript`
let randNum4 = Math.random() * (js.length - 1)
let randNum4Main = Math.round(randNum4)
console.log(`10. Access JS string characters using a random number: ${randNum4Main}, ${js[randNum4Main]}`)

// 11.  Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 3 1 3 9 27
// 4 1 4 16 64
// 2 1 2 4 8
// 5 1 5 25 125
console.log(`11. Use console and escape characters to print pattern\n
1\t1\t1\t1\t1
3\t1\t3\t9\t27
4\t1\t4\t16\t64
2\t1\t2\t4\t8
5\t1\t5\t25\t125`)

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
// let becauseStr2 = `You cannot end a sentence with because because because is a conjunction`
let firstIndex = becauseStr.indexOf(`because`)
let lengthOfStr = `because`.length * 3 + 2
console.log(`12. Slice out multiple 'because' from string: ${becauseStr.substr(firstIndex, lengthOfStr)}`)



// Exercise: Level 3
console.log(`\n\nExercise 3`)

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let loveStr = `Love is the best thing in this world. Some found their love and some are still looking for their love.`
let loveCount = loveStr.match(/love/gi).length
console.log(`1. Find the number of word love in string:\nThe word 'love' appeared ${loveCount} times in "${loveStr}"`)

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// becauseStr
let becauseCount = becauseStr.match(/because/gi).length
console.log(`2. Find the number of word 'because' in string:\nThe word 'because' appeared ${becauseCount} times in "${becauseStr}"`)

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`
let cleanSentence = sentence.replace(/%|\$|@|&|#|;|,|\.|!|\?/gi, ``)
let cleanSentencearr = cleanSentence.split(` `)
// cleanSentencearr.sort()
console.log(`3. Original Sentence:\n${sentence}
Cleaned Sentence:\n${cleanSentence}`)
// console.log(cleanSentencearr)

/*
const frequency = {}
for (let i = 0; i < cleanSentencearr.length; i++) {
    const element = cleanSentencearr[i];
    // If the element is already present in the frequency Object, increment its count by 1
    if (frequency[element]) {
        frequency[element]++;
    } else {
        // Otherwise, initialise its count to 1
        frequency[element] = 1;
    }
}

let maxCount = 0
let mostOccuringElement

for (const key in frequency) {
    if (frequency[key] > maxCount) {
        maxCount = frequency[key];
        mostOccuringElement = key
    }
}
console.log(frequency)
console.log(mostOccuringElement)
*/

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let incometxt = `He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.`
let searchIncometxt = /\d+/g
let incomeArr = incometxt.match(searchIncometxt)
let sum = 0
for (let i = 0; i < incomeArr.length; i++) {
    sum += parseInt(incomeArr[i]); 
}
console.log(`4. The sum of his income is: ${sum} euro`)