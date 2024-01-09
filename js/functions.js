
/** Console log of anything
 * 
 * @param {*} something a value that can be anything
 */

function logSomething(something) {
    console.log(something);
}


/** It checks if a word, when reversed, is the same as not reversed
 * 
 * @param {*} word a word
 * @returns {boolean}
 */

function isPalindrome (word) {
    let isPalindrome = false;
    let reverseWord = ''

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    
    if (reverseWord === word) {
        isPalindrome = true;
    } 

    return isPalindrome;
}

/** Get a random integer from 1 to 5 included
 * 
 * @returns {number} returns a random number from 1 to 5
 */

function getRandomInteger () {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;

}

/** Sums two numbers and checks if the sum is even or not
 * 
 * @param {number} num1 first number to sum
 * @param {number} num2 second number to sum
 * @returns {boolean} returns true if the sum is even, false if it's odd
 */

function isSumEven (num1, num2) {
    let isSumEven = false;
    const sum = num1 + num2;

    if (sum % 2 === 0) {
        isSumEven = true;
    }

    return isSumEven;

}

