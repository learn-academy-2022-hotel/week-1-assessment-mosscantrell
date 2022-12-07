// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
//

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// write a code that takes in a variable declared 'number' and returns if that number is above, below, or at boiling point
// input: number
// output: string indicating whether that number is above, below, or at boiling point

// if number is greater than 212, return the string "number is above boiling point"
// input: 350
// output: "350 is above boiling point"

// if number is less than 212, return the string "number is below boiling point"
// input: 42
// output: "42 is below boiling point"

// if number is equal to 212, return the string "number is at boiling point"
// input: 212
// output: "212 is at boiling point"

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = (number) => {
    if (number > 212){
        return `${number} is above boiling point`
    } else if (number < 212){
        return `${number} is below boiling point`
    } else{
        return `${number} is at boiling point`
    }
}
console.log(boilingPoint(temp1))
// output: "42 is below boiling point"
console.log(boilingPoint(temp2))
// output: "350 is above boiling point"
console.log(boilingPoint(temp3))
// output: "212 is at boiling point"



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// write a code that combines the array declared with the variable padres1984WorldSeriesRuns with the array declared with the variable padres1998WorldSeriesRuns and, when run, returns the length of the combined variables
// declare a new variable of bothWorldSeriesRuns that combines the two already declared variables using concatenation 
// in order to see bothWorldSeriesRuns, console log it and run it in the terminal
// in order to see the length, use the length property in the console log to calculate the amount of elements in the array
// input: console.log(bothWorldSeriesRuns.length)
// output: 9

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

let bothWorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(bothWorldSeriesRuns.length)
// output: 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// write a code that reverses the letters within a string and returns a string of the resulting reversed letters
// using the split accessor, declare a new variable to transform the currentCohort string into an array
// using the reverse mutator, declare a new variable that reverses the elements within the splitCohort array
// using the join accessor, declare a new variable that reverts the split and reversed array back to a string
// input: newly declared variable for the reversed string
// output: "2202 letoH"

// Expected output: "2202 letoH"
const currentCohort = "Hotel 2022"
// const splitCohort = currentCohort.split("")
// const reverseCohort = splitCohort.reverse()
// const finalCohort = reverseCohort.join("")
// console.log(finalCohort)
//output: "2202 letoH"

//while the code on lines 102-105 does technically work, it also feels super messy. creating a function may make this a bit neater!

const reversedString = (string) => {
    return string
    .split("")
    .reverse()
    .join("")
}
console.log(reversedString(currentCohort))
// output: 2202 letoH
// I do want to mention that this function method (to just add .behavior on a line after the return) is something I learned from a google search. However, I understand that this is calling on the function to return currentCohort after following each behavior in the order it is written rather than writing several return statments. The result would change if these behaviors were written in a different order.


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// write a code that evaluates the elements in the array 'myNumbers' and returns the last index of the given value
// apply the accessor 'lastIndexOf' to the array, calling on the variable 'givenValue1' to find the last index of that number
// input: the array with the lastIndexOf accessor with the given value logged
// output: the last index of the given value (7 and 8)

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

console.log(myNumbers.lastIndexOf(givenValue1))
//output: 7

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(givenValue2))
// output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// write a code that takes in the numerical elements from a specified array and sorts the numbers from largest to smallest
// apply the sort mutator to the provided array
// using the sort mutator, set it to sort in numerical order and then to sort backwards from there
// input: provided array sorted in backwards numerical order using the sort mutator
// output: the provided array sorted from greatest to least

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

sanDiegoSummerTemperatures.sort((a,b) => b - a)
console.log(sanDiegoSummerTemperatures)
// output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

sanDiegoWinterTemperatures.sort((a,b) => b - a)
console.log(sanDiegoWinterTemperatures)
// output: [68, 67, 66, 66, 62, 59, 59]