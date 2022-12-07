// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: This will log the number 9.
// b) Verify and explain:
// output: 10
// explanation: When using the length property, your code will log the number of characters in a string. I assumed it was 9 as I thought the space was not counted as a character, but it was, resulting in the logged answer of 10.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain:
// output: "o"
// explanation: This code is written to evaluate the index of the string, declared by the variable 'greeting'. This is known because in the console log, the number 4 is contained in square brackets, where an index would be logged. Index counting begins at 0, so though techincally "o" is the fifth letter in the word "Hello", it's index is only 4.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain:
// output: "Ruby"
// explanation: In the code above, there is a variable set for both languages and index. When calculating index, the counting begins at 0, making the second element in the array 1. When the variable index was called upon in the console log, it ran the provided number (1) to find the index. In this case, "Ruby"'s index was 1 as it was the second element in the array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY", "SUNDAY"
// b) Verify and explain:
// output: an error explaining that 'weekendDays.toUpperCase()' is not a function.
// explanation: After looking back in my notes, I remember now that the 'toUpperCase' method only works on strings. While the elements inide of array weekendDays are strings, the array itself is not, causing it to come up in error. In order to change the strings within the array to only upper case, you would need code that calls on each individual element of the array rather than the array itself.
// Note: I have re-commented out line 49 so that I do not continue to run into an error when checking the code on line 60.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain:
// output: number
// explanation: The keyword typeof will evaluate and return the data types within an array. In this case, rather than running the data type of dataTypes, it is specifically asking for the data type of dataTypes.length. The length property will always return a number, so the data type of dataTypes.length will always be 'number', regardless of the fact that the elements within the array are strings.
