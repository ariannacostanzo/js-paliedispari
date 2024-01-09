
/** Console log of anything
 * 
 * @param {*} something value that can be anything
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


